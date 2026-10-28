import {chromium} from 'playwright';
import {writeFile,mkdir} from 'node:fs/promises';
const browser=await chromium.launch({headless:true,...(process.env.CHROMIUM_PATH?{executablePath:process.env.CHROMIUM_PATH}:{})});
const results=[];
for(const [name,base] of [['source',process.env.BASELINE_URL],['cyber-genie',process.env.TEST_BASE_URL??'http://127.0.0.1:8788']]){
 if(!base)continue;
 for(const route of ['/','/pricing/','/services/voice/']){
  const context=await browser.newContext({viewport:{width:390,height:844},isMobile:true,reducedMotion:'reduce'});
  const page=await context.newPage();const cdp=await context.newCDPSession(page);
  await cdp.send('Network.enable');await cdp.send('Network.emulateNetworkConditions',{offline:false,latency:80,downloadThroughput:1250000,uploadThroughput:625000});await cdp.send('Emulation.setCPUThrottlingRate',{rate:4});
  await page.addInitScript(()=>{window.__metrics={lcp:0,cls:0};new PerformanceObserver(list=>{for(const e of list.getEntries())window.__metrics.lcp=e.startTime;}).observe({type:'largest-contentful-paint',buffered:true});new PerformanceObserver(list=>{for(const e of list.getEntries())if(!e.hadRecentInput)window.__metrics.cls+=e.value;}).observe({type:'layout-shift',buffered:true});});
  await page.goto(base+route,{waitUntil:'networkidle'});await page.evaluate(()=>document.fonts.ready);await page.waitForTimeout(1000);
  const metrics=await page.evaluate(()=>({...window.__metrics,bytes:performance.getEntriesByType('resource').reduce((sum,r)=>sum+r.transferSize,0)}));results.push({name,route,...metrics});
  await context.close();
 }
}
await browser.close();await mkdir('outputs/qa',{recursive:true});await writeFile('outputs/qa/performance.json',JSON.stringify({method:'Local Chromium, fresh context, 390x844, 4x CPU slowdown, 80ms latency, 10Mbps download; one sample per page, directional only; not field Core Web Vitals.',results},null,2)+'\n');console.log(JSON.stringify(results));
