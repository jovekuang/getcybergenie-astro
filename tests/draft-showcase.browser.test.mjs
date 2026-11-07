import {test,before,after} from 'node:test';
import assert from 'node:assert/strict';
import {chromium} from 'playwright';
const base=process.env.DRAFT_TEST_BASE_URL??'http://127.0.0.1:4347';
if(!['localhost','127.0.0.1'].includes(new URL(base).hostname))throw Error('Pending showcase checks must remain local');
let browser;before(async()=>{browser=await chromium.launch({headless:true,...(process.env.CHROMIUM_PATH?{executablePath:process.env.CHROMIUM_PATH}:{})});});after(async()=>await browser?.close());
const stories={'edencare-360':10};
const target=slug=>`${base}/_review/case-studies/${slug}/#showcase`;
for(const [slug,duration] of Object.entries(stories))for(const mobile of [false,true]){
 test(`${slug}: ${mobile?'mobile':'desktop'} reduced-motion poster, keyboard playback, pause/replay and consent`,async()=>{
  const page=await browser.newPage({viewport:mobile?{width:390,height:844}:{width:1440,height:1100},reducedMotion:'reduce'});
  await page.goto(target(slug));const showcase=page.locator('[data-story-showcase]'),video=showcase.locator('video');await showcase.scrollIntoViewIfNeeded();
  assert.equal(await video.getAttribute('src'),null);assert.equal(await showcase.locator('figcaption p').count(),0);assert.match(await page.locator('meta[name="robots"]').getAttribute('content'),/noindex/);assert.equal(await page.locator('[data-quote-approval="pending"]').count(),3);
  const play=showcase.getByRole('button',{name:'Play animation',exact:true});await play.focus();await play.press('Enter');
  await page.waitForFunction(()=>{let v=document.querySelector('[data-story-showcase] video');return v.readyState>=2&&!v.paused&&v.currentTime>0});
  const metadata=await video.evaluate(v=>({duration:v.duration,src:v.getAttribute('src'),muted:v.muted}));assert.equal(metadata.duration,duration);assert.equal(metadata.muted,true);assert.match(metadata.src,mobile?/-mobile\./:/-desktop\./);
  await showcase.getByRole('button',{name:'Pause animation',exact:true}).click();assert.equal(await video.evaluate(v=>v.paused),true);
  await page.locator('footer').scrollIntoViewIfNeeded();await showcase.scrollIntoViewIfNeeded();assert.equal(await video.evaluate(v=>v.paused),true,'Explicit pause must survive visibility changes');
  await showcase.getByRole('button',{name:'Replay animation',exact:true}).click();await page.waitForFunction(()=>!document.querySelector('[data-story-showcase] video').paused);assert.ok(await video.evaluate(v=>v.currentTime<2));
  assert.equal(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth),true);
  await page.close();
 });
}
test('autoplay starts only onscreen, pauses offscreen and while hidden, then resumes',async()=>{
 const page=await browser.newPage({viewport:{width:1280,height:720}});await page.goto(target('edencare-360'));const showcase=page.locator('[data-story-showcase]');await showcase.scrollIntoViewIfNeeded();await page.waitForFunction(()=>!document.querySelector('[data-story-showcase] video').paused);
 await page.locator('footer').scrollIntoViewIfNeeded();await page.waitForFunction(()=>document.querySelector('[data-story-showcase] video').paused);await showcase.scrollIntoViewIfNeeded();await page.waitForFunction(()=>!document.querySelector('[data-story-showcase] video').paused);
 // Simulate the visibility event locally; policy is separately covered by unit tests.
 await page.evaluate(()=>{Object.defineProperty(document,'hidden',{configurable:true,value:true});document.dispatchEvent(new Event('visibilitychange'));});assert.equal(await showcase.locator('video').evaluate(v=>v.paused),true);
 await page.evaluate(()=>{Object.defineProperty(document,'hidden',{configurable:true,value:false});document.dispatchEvent(new Event('visibilitychange'));});await page.waitForFunction(()=>!document.querySelector('[data-story-showcase] video').paused);await page.close();
});
test('data-saving preference keeps the poster until the viewer opts in',async()=>{
 const page=await browser.newPage({viewport:{width:390,height:844}});await page.addInitScript(()=>{const connection=new EventTarget();connection.saveData=true;Object.defineProperty(navigator,'connection',{configurable:true,value:connection});});await page.goto(target('edencare-360'));const showcase=page.locator('[data-story-showcase]');await showcase.scrollIntoViewIfNeeded();assert.equal(await showcase.locator('video').getAttribute('src'),null);await showcase.getByRole('button',{name:'Play animation',exact:true}).click();await page.waitForFunction(()=>!document.querySelector('[data-story-showcase] video').paused);await page.close();
});
test('failed media leaves a usable poster and announces the fallback',async()=>{
 const page=await browser.newPage({viewport:{width:390,height:844}});await page.route('**/*.mp4',r=>r.abort());await page.goto(target('edencare-360'));const showcase=page.locator('[data-story-showcase]');await showcase.scrollIntoViewIfNeeded();await page.waitForFunction(()=>document.querySelector('.showcase-status').textContent.includes('unavailable'));assert.equal(await showcase.getAttribute('data-ready'),null);assert.equal(await showcase.locator('.showcase-controls').isVisible(),false);assert.equal(await showcase.locator('.showcase-poster img').evaluate(i=>i.complete&&i.naturalWidth>0),true);await page.close();
});
test('without JavaScript the pending poster and written workflows remain readable',async()=>{
 const page=await browser.newPage({javaScriptEnabled:false,viewport:{width:390,height:844}});
 for(const slug of Object.keys(stories)){await page.goto(target(slug));const showcase=page.locator('[data-story-showcase]');assert.equal(await showcase.locator('video').getAttribute('src'),null);assert.equal(await showcase.locator('.showcase-poster img').evaluate(i=>i.complete&&i.naturalWidth>0),true);assert.equal(await showcase.locator('.showcase-controls').isVisible(),false);assert.ok((await page.locator('.case-journey').innerText()).length>100);}
 await page.close();
});
