import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
const base=process.env.TEST_BASE_URL??'http://127.0.0.1:8788';
const testHost = new URL(base).hostname;
if (!['localhost', '127.0.0.1'].includes(testHost) && !testHost.endsWith('.pages.dev')) {
  throw new Error('Submission tests must target a local or pages.dev dry-run preview, never the live custom domain.');
}
const baseline=JSON.parse(await readFile('tests/fixtures/source-baseline.json','utf8'));
const api=(path,body,headers={})=>fetch(base+path,{method:'POST',headers:{'Content-Type':'application/json',Origin:base,...headers},body:JSON.stringify(body)});
for(const route of baseline.routes){const response=await fetch(base+route.path);assert.equal(response.status,route.path==='/404.html'?404:200,route.path);assert.equal(response.headers.get('X-Robots-Tag'),'noindex, nofollow',route.path);}
const r=await fetch(base+'/this-page-does-not-exist/');assert.equal(r.status,404);
for(const rule of baseline.redirects){const [from,to,status]=rule.split(/\s+/);const response=await fetch(base+from+'?source=review',{redirect:'manual'});assert.equal(response.status,Number(status),from);const location=new URL(response.headers.get('location'),base);assert.equal(location.pathname,to,from);assert.equal(location.search,'?source=review',from);}
const startedAt=String(Date.now()-10000);
const bodies={
 '/api/website-onboarding':{firstName:'Test',lastName:'Owner',email:'review@example.com',company:'Preview Only',hasWebsite:'no',businessDescription:'Local services',estimatedPages:'1-5',outcomes:['get-found-online'],materials:['none-yet'],capabilities:['contact-or-quote-forms'],visualDirections:['warm-approachable'],startedAt,website:''},
 '/api/realtor-listing-package':{name:'Test Owner',email:'review@example.com',phone:'5551234567',propertyAddress:'123 Example Street',musicalStyle:'pop',startedAt,idempotencyKey:'preview-only-test',website:''}
};
for(const [path,body]of Object.entries(bodies)){
 let r=await api(path,body);assert.equal(r.status,200,path);assert.equal((await r.json()).dryRun,true,path);
 r=await api(path,{});assert.equal(r.status,400,path);
 r=await api(path,body,{Origin:'https://wrong.example'});assert.equal(r.status,403,path);
 r=await api(path,{website:'honeypot'});assert.deepEqual(await r.json(),{ok:true});
}
console.log(`Cloudflare runtime PASS: ${baseline.routes.length} routes, ${baseline.redirects.length} query-preserving redirects, real 404, noindex headers and both dry-run API contracts.`);
