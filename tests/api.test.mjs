import test from 'node:test';
import assert from 'node:assert/strict';
import { onRequestPost as onboarding } from '../functions/api/website-onboarding.ts';
import { onRequestPost as listing } from '../functions/api/realtor-listing-package.ts';
import { onRequestPost as contact } from '../functions/api/contact.ts';
import { onRequest as middleware } from '../functions/_middleware.ts';

const origin = 'https://getcybergenie.com';
const bodies = {
  contact: () => ({ name: 'Test Owner', email: 'owner@example.com', message: 'Please help with my website.', smsConsent: false, submissionId: crypto.randomUUID(), startedAt: String(Date.now()-10000), website: '' }),
  onboarding: () => ({ firstName: 'Test', lastName: 'Owner', email: 'owner@example.com', company: 'A & B <Shop>', hasWebsite: 'no', businessDescription: 'Local services', estimatedPages: '1-5', outcomes: ['get-found-online'], materials: ['none-yet'], capabilities: ['contact-or-quote-forms'], visualDirections: ['warm-approachable'], startedAt: String(Date.now()-10000), website: '', plan: 'essential-website' }),
  listing: () => ({ name: 'Test Owner', email: 'owner@example.com', phone: '5551234567', propertyAddress: '123 Example Street', musicalStyle: 'pop', specialRequests: '', originatingPage: `${origin}/campaigns/realtor-listing-song-video/`, idempotencyKey: 'review-test-id', startedAt: String(Date.now()-10000), website: '' }),
};
const request = (name, payload, host=origin, headers={}) => new Request(`${host}/api/${name === 'listing' ? 'realtor-listing-package' : name === 'contact' ? 'contact' : 'website-onboarding'}`, { method: 'POST', headers: { 'Content-Type': 'application/json', Origin: host, ...headers }, body: JSON.stringify(payload) });
const configured = { RESEND_API_KEY:'test-only', ONBOARDING_TO_EMAIL:'recipient@example.com', ONBOARDING_FROM_EMAIL:'Cyber Genie <onboarding@getcybergenie.com>', FK_CRM_CAPTURE_URL:'https://crm.example.com/capture', FK_CRM_FORM_TOKEN:'test-only-form-token', MARKETING_CONTACT_URL:'https://psrlivpzkmyaubchqywr.supabase.co/functions/v1/receive-marketing-contact', MARKETING_CONTACT_TOKEN:'test-only-server-token-at-least-32-characters' };
for (const [name, handler, dryKey, limit] of [['onboarding',onboarding,'ONBOARDING_DRY_RUN',50000],['listing',listing,'CRM_CAPTURE_DRY_RUN',20000],['contact',contact,'ONBOARDING_DRY_RUN',10000]]) {
  test(`${name}: preview validates without sending, even with live-looking bindings`, async (t) => {
    let called=false;
    t.mock.method(globalThis,"fetch",async()=>{called=true;throw new Error("Preview called a provider");});
    const result=await handler({ request:request(name,bodies[name](),'https://review.cyber-genie-marketing.pages.dev'), env:configured });
    assert.equal(result.status,200); assert.equal((await result.json()).dryRun,true); assert.equal(called,false); t.mock.restoreAll();
  });
  test(`${name}: production dry-run cannot report false success`, async () => {
    const result=await handler({request:request(name,bodies[name]()),env:{[dryKey]:'true'}});
    assert.equal(result.status,503);
  });
  test(`${name}: rejects cross-origin and missing Origin`, async () => {
    assert.equal((await handler({request:request(name,bodies[name](),origin,{Origin:'https://elsewhere.example'}),env:{}})).status,403);
    const r=request(name,bodies[name]());r.headers.delete('Origin');
    assert.equal((await handler({request:r,env:{}})).status,403);
  });
  test(`${name}: rejects malformed, invalid, rapid and oversized submissions`, async () => {
    const cases=[{}, {...bodies[name](),email:'invalid'}, {...bodies[name](),startedAt:String(Date.now())}];
    for(const body of cases) assert.equal((await handler({request:request(name,body),env:{}})).status,400);
    assert.equal((await handler({request:request(name,{notes:'x'.repeat(limit+1)}),env:{}})).status,413);
    const malformed=request(name,{}); const bad=new Request(malformed.url,{method:'POST',headers:malformed.headers,body:'{' });
    assert.equal((await handler({request:bad,env:{}})).status,400);
    assert.equal((await handler({request:request(name,{},origin,{'Content-Type':'text/plain'}),env:{}})).status,415);
  });
  test(`${name}: honeypot is silent and never calls a provider`, async () => {
    const response=await handler({request:request(name,{website:'spam'}),env:{}});
    assert.equal(response.status,200);assert.deepEqual(await response.json(),{ok:true});
  });
  test(`${name}: missing configuration fails closed`, async () => {
    assert.equal((await handler({request:request(name,bodies[name]()),env:{}})).status,503);
  });
  test(`${name}: provider failure is not successful delivery`, async (t) => {
    t.mock.method(globalThis,'fetch',async()=>Response.json({error:'private-provider-message'},{status:500}));
    const r=await handler({request:request(name,bodies[name]()),env:configured});
    assert.equal(r.status,502);assert.doesNotMatch(await r.text(),/private-provider-message|test-only/);
    t.mock.restoreAll();
  });
}
for (const [name, handler] of [['contact',contact],['onboarding',onboarding]]) {
  test(`${name}: never infers consent from a phone number; records exact consent only on explicit opt-in`, async(t)=>{
    const sent=[];
    t.mock.method(globalThis,'fetch',async(url,init)=>{const body=JSON.parse(init.body);sent.push(name==='contact'?{text:body.sms_consent_record,reply_to:body.email}:body);return Response.json({id:'accepted',accepted:true});});
    for(const smsConsent of [undefined,false,true]) {
      const result=await handler({request:request(name,{...bodies[name](),phone:'2025550123',smsConsent,consentText:'forged',consentTimestamp:'forged'}),env:configured});
      assert.equal(result.status,200);
    }
    assert.match(sent[0].text,/NOT OPTED IN/); assert.match(sent[1].text,/NOT OPTED IN/);
    assert.match(sent[2].text,/OPTED IN to customer-care SMS only/);
    assert.match(sent[2].text,/I agree to receive customer-care text messages from Cyber Genie/);
    assert.match(sent[2].text,/Disclosure version: 2026-11-11/);
    assert.match(sent[2].text,/Cyber Genie texting number: \(925\) 666-3069/);
    assert.match(sent[2].text,/Received at \(UTC\): \d{4}-\d{2}-\d{2}T/);
    assert.doesNotMatch(sent[2].text,/forged/);
    assert.equal(sent[2].reply_to,'owner@example.com');
    t.mock.restoreAll();
  });
  test(`${name}: opt-in requires a usable phone and boolean consent`, async()=>{
    for(const change of [{smsConsent:true},{smsConsent:true,phone:'abc'},{smsConsent:true,phone:'2025550123x'},{smsConsent:'false',phone:'2025550123'},{smsConsent:'true',phone:'2025550123'}]) {
      const result=await handler({request:request(name,{...bodies[name](),...change}),env:configured});
      assert.equal(result.status,400);
    }
  });
}
test('onboarding: safe email escapes input, preserves Reply-To and receives provider acceptance', async (t) => {
  let sent;
  t.mock.method(globalThis,'fetch',async(url,init)=>{assert.equal(url,'https://api.resend.com/emails');sent=JSON.parse(init.body);return Response.json({id:'email-accepted'});});
  assert.equal((await onboarding({request:request('onboarding',bodies.onboarding()),env:configured})).status,200);
  assert.equal(sent.reply_to,'owner@example.com');assert.match(sent.subject,/Cyber Genie/);assert.match(sent.html,/A &amp; B &lt;Shop&gt;/);assert.doesNotMatch(sent.html,/>A & B <Shop></);
  t.mock.restoreAll();
});
test('contact: sends only to the authenticated app endpoint with stable identity and server-owned consent evidence', async(t)=>{
  const calls=[];
  t.mock.method(globalThis,'fetch',async(url,init)=>{calls.push({url,headers:init.headers,body:JSON.parse(init.body)});return Response.json({accepted:true});});
  const body=bodies.contact();
  for(let i=0;i<2;i++)assert.equal((await contact({request:request('contact',body),env:configured})).status,200);
  assert.equal(calls.length,2);
  for(const call of calls){
    assert.equal(call.url,configured.MARKETING_CONTACT_URL);
    assert.equal(call.headers['X-Marketing-Contact-Token'],configured.MARKETING_CONTACT_TOKEN);
    assert.equal(call.body.submission_id,body.submissionId);
    assert.equal(call.body.sms_consent,false);
    assert.equal(call.body.to,undefined);
    assert.equal(call.body.from,undefined);
  }
  assert.equal((await contact({request:request('contact',body),env:{...configured,MARKETING_CONTACT_URL:'https://attacker.example/steal'}})).status,503);
  assert.equal(calls.length,2);
  t.mock.restoreAll();
});
test('contact: missing identity or an unconfirmed app response cannot claim success',async(t)=>{
  t.mock.method(globalThis,'fetch',async()=>Response.json({accepted:false}));
  assert.equal((await contact({request:request('contact',{...bodies.contact(),submissionId:''}),env:configured})).status,400);
  assert.equal((await contact({request:request('contact',bodies.contact()),env:configured})).status,502);
  t.mock.restoreAll();
});
test('contact: malformed recipient brackets are rejected before forwarding',async(t)=>{
  let calls=0;
  t.mock.method(globalThis,'fetch',async()=>{calls++;throw new Error('Must not forward');});
  for(const email of ['invalid<@example.invalid','invalid>@example.invalid']){
    assert.equal((await contact({request:request('contact',{...bodies.contact(),email}),env:configured})).status,400);
  }
  assert.equal(calls,0);
  t.mock.restoreAll();
});
test('listing: forwards validated Origin, token, campaign and idempotency without changing response contract',async(t)=>{
  let sent,headers;
  t.mock.method(globalThis,'fetch',async(url,init)=>{headers=init.headers;sent=JSON.parse(init.body);return Response.json({accepted:true,duplicate:true,submission_id:'submission-1',request_id:'request-1'});});
  const r=await listing({request:request('listing',bodies.listing()),env:configured});
  assert.equal(r.status,200);assert.deepEqual(await r.json(),{ok:true,duplicate:true,submissionId:'submission-1',requestId:'request-1'});
  assert.equal(headers.Origin,origin);assert.equal(sent.form_token,'test-only-form-token');assert.equal(sent.idempotency_key,'review-test-id');assert.equal(sent.fields.campaign,'realtor-listing-song-video');
  t.mock.restoreAll();
});
test('listing: HTTP 200 without accepted=true is a failure',async(t)=>{
  t.mock.method(globalThis,'fetch',async()=>Response.json({accepted:false}));
  assert.equal((await listing({request:request('listing',bodies.listing()),env:configured})).status,502);
  t.mock.restoreAll();
});
test('middleware: noindex includes Pages production and branch hosts; preserves response body and status',async()=>{
  for(const host of ['https://cyber-genie-marketing.pages.dev','https://branch.cyber-genie-marketing.pages.dev',origin]) {
    const r=await middleware({request:new Request(host+'/missing/'),env:host.endsWith('pages.dev')?{SITE_INDEXABLE:'true'}:{},next:async()=>new Response('missing page',{status:404})});
    assert.equal(r.status,404);assert.equal(await r.text(),'missing page');assert.equal(r.headers.get('X-Robots-Tag'),'noindex, nofollow');
  }
  const r=await middleware({request:new Request(origin),env:{SITE_INDEXABLE:'true'},next:async()=>new Response('live')});
  assert.equal(r.headers.get('X-Robots-Tag'),null);
});
