import {test,before,after} from 'node:test';
import assert from 'node:assert/strict';
import { chromium } from 'playwright';
const base=process.env.TEST_BASE_URL??'http://127.0.0.1:8788';
const testHost = new URL(base).hostname;
if (!['localhost', '127.0.0.1'].includes(testHost) && !testHost.endsWith('.pages.dev')) {
  throw new Error('Submission tests must target a local or pages.dev dry-run preview, never the live custom domain.');
}
let browser;
before(async()=>{browser=await chromium.launch({headless:true,...(process.env.CHROMIUM_PATH?{executablePath:process.env.CHROMIUM_PATH}:{})});});
after(async()=>{await browser?.close();});

test('pricing tabs preserve deep anchors, keyboard selection, back navigation and offer visibility',async()=>{
 const page=await browser.newPage({viewport:{width:1440,height:1000},reducedMotion:'reduce'});
 await page.goto(base+'/pricing/');
 assert.equal(await page.locator('[data-pricing-tab="overview"]').getAttribute('aria-selected'),'true');
 await page.locator('[data-pricing-tab="voice-ai"]').click();
 await page.locator('#voice-ai').waitFor({state:'visible'});
 assert.match(await page.locator('#voice-ai').innerText(),/39.99/);
 assert.match(await page.locator('#voice-ai').innerText(),/0.20/);
 await page.locator('[data-pricing-tab="web-plans"]').focus();await page.keyboard.press('Enter');
 assert.equal(await page.locator('[data-pricing-tab="web-plans"]').getAttribute('aria-selected'),'true');
 await page.locator('[data-pricing-tab="web-plans"]').press('ArrowRight');
 assert.equal(await page.locator('[data-pricing-tab="social-media"]').evaluate(e=>e===document.activeElement),true);
 await page.keyboard.press('Enter');
 assert.equal(await page.locator('[data-pricing-tab="social-media"]').getAttribute('aria-selected'),'true');
 await page.goBack();await page.waitForFunction(()=>document.querySelector('[data-pricing-tab="web-plans"]').getAttribute('aria-selected')==='true');
 for(const hash of ['technology-partner','web-plans','social-media','voice-ai','essential-website','evolving-website','included-tools']){
  await page.goto(base+'/pricing/#'+hash);
  await page.locator('#'+hash).waitFor({state:'visible'});
 }
 await page.close();
});
test('mobile menu traps focus, supports Escape and restores the toggle',async()=>{
 const page=await browser.newPage({viewport:{width:390,height:844}});await page.goto(base+'/');
 const toggle=page.locator('.nav-toggle');await toggle.click();assert.equal(await toggle.getAttribute('aria-expanded'),'true');
 await toggle.focus();await page.keyboard.press('Shift+Tab');
 assert.equal(await page.evaluate(()=>document.activeElement.closest('.nav-menu')!==null),true);
 await page.keyboard.press('Escape');assert.equal(await toggle.getAttribute('aria-expanded'),'false');assert.equal(await toggle.evaluate(e=>e===document.activeElement),true);
 await page.close();
});
test('reduced motion pauses every animated SVG and prevents industry autoplay',async()=>{
 const page=await browser.newPage({reducedMotion:'reduce'});await page.goto(base+'/');
 const values=await page.locator('svg.signal-field,svg.assurance-visual').evaluateAll(svgs=>svgs.map(s=>s.animationsPaused()));
 assert.ok(values.length>=5);assert.ok(values.every(Boolean));
 await page.emulateMedia({reducedMotion:"no-preference"});
 await page.waitForTimeout(100);
 assert.equal(await page.locator("svg.signal-field").first().evaluate(s=>s.animationsPaused()),false);
 await page.emulateMedia({reducedMotion:"reduce"});
 await page.waitForTimeout(100);
 const viewport=page.locator('[data-industry-carousel] .industry-carousel-viewport');
 const initial=await viewport.evaluate(e=>e.scrollLeft);await page.waitForTimeout(250);assert.equal(await viewport.evaluate(e=>e.scrollLeft),initial);
 await page.close();
});
test('JavaScript-free pricing stays readable and mobile navigation is usable',async()=>{
 const page=await browser.newPage({javaScriptEnabled:false,viewport:{width:390,height:844}});await page.goto(base+'/pricing/');
 for(const id of ['overview','technology-partner','web-plans','social-media','voice-ai'])assert.equal(await page.locator('#'+id).isVisible(),true,id);
 assert.equal(await page.locator('.nav-menu').isVisible(),true);
 await page.goto(base+'/onboarding/website/');assert.match(await page.locator('.no-script-note').innerText(),/hello@getcybergenie.com/);assert.equal(await page.locator('form').isVisible(),false);
 await page.close();
});
test('onboarding completes all seven steps and clearly labels the dry run',async()=>{
 const page=await browser.newPage({viewport:{width:390,height:844},reducedMotion:'reduce'});await page.goto(base+'/onboarding/website/?plan=essential-website');
 for(const [name,value]of Object.entries({firstName:'Preview',lastName:'Owner',email:'preview@example.com',company:'Preview Only'}))await page.locator(`[name="${name}"]`).fill(value);
 const next=page.locator('[data-next]');await next.click();
 await page.locator('[name="hasWebsite"][value="no"]').check();await page.locator('[name="businessDescription"]').fill('A local service business.');await page.locator('[name="estimatedPages"]').selectOption('1-5');await next.click();
 for(const [name,value]of [['outcomes','get-found-online'],['materials','none-yet'],['capabilities','contact-or-quote-forms'],['visualDirections','warm-approachable']]){await page.locator(`[name="${name}"][value="${value}"]`).check();await next.click();}
 await page.locator('[name="startedAt"]').evaluate(e=>e.value=String(Date.now()-10000));
 await page.locator('[data-submit]').click();await page.locator('[data-success-state]').waitFor({state:'visible'});assert.match(await page.locator('[data-success-state]').innerText(),/No request was sent/);
 await page.close();
});
test('campaign inquiry posts through Pages and confirms preview without a CRM record',async()=>{
 const page=await browser.newPage({viewport:{width:1440,height:1000},reducedMotion:'reduce'});await page.goto(base+'/campaigns/realtor-listing-song-video/');
 for(const [name,value]of Object.entries({name:'Preview Owner',email:'preview@example.com',phone:'5551234567',propertyAddress:'123 Example Street'}))await page.locator(`#realtor-listing-package-form [name="${name}"]`).fill(value);
 await page.locator('[name="musicalStyle"]').selectOption('pop');await page.locator('[name="startedAt"]').evaluate(e=>e.value=String(Date.now()-10000));
 await page.locator('.campaign-form-submit').click();await page.locator('[data-listing-form-success]').waitFor({state:'visible'});assert.match(await page.locator('[data-listing-form-success]').innerText(),/No request was sent/);
 await page.close();
});
