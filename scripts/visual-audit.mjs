import { chromium } from 'playwright';
import AxeBuilder from '@axe-core/playwright';
import { mkdir, writeFile } from 'node:fs/promises';

const base = process.env.TEST_BASE_URL ?? 'http://127.0.0.1:8788';
const output = 'outputs/qa';
await mkdir(output, {recursive:true});
const browser = await chromium.launch({headless:true, ...(process.env.CHROMIUM_PATH ? {executablePath:process.env.CHROMIUM_PATH}: {})});
const context=await browser.newContext({reducedMotion:'reduce'});
const page=await context.newPage();
const issues=[], records=[], errors=[];
page.on('pageerror', e=>errors.push({url:page.url(),message:e.message}));
const routes=[ '/', '/pricing/', '/about/', '/contact/', '/services/essential-website/', '/services/website-design-hosting/', '/services/technology-partner/', '/services/voice/', '/services/marketing/', '/solutions/', '/solutions/get-customers/', '/solutions/win-customers/ai-voice/', '/industries/', '/industries/hvac-contractors/', '/industries/online-retailers/', '/blog/', '/blog/pest-control-preparation-reminder-workflow/', '/campaigns/cfp-gp/', '/campaigns/home-service-lead-qualification/', '/campaigns/realtor-listing-song-video/', '/onboarding/website/', '/privacy/', '/terms/', '/404.html' ];
for(const width of [320,390,768,1024,1440]) {
  await page.setViewportSize({width,height:960});
  for(const route of routes) {
    await page.goto(base+route,{waitUntil:'networkidle'});
    await page.evaluate(()=>document.fonts.ready);
    const result=await page.evaluate(()=>({width:innerWidth,scrollWidth:document.documentElement.scrollWidth,h1:document.querySelectorAll('h1').length, broken:[...document.images].filter(i=>i.complete&&i.naturalWidth===0).map(i=>i.src),duplicateIds:[...document.querySelectorAll('[id]')].map(x=>x.id).filter((id,index,all)=>all.indexOf(id)!==index)}));
    if(result.scrollWidth>width+1||result.h1!==1||result.broken.length||result.duplicateIds.length)issues.push({route,width,...result,overflow:await page.evaluate(()=>[...document.querySelectorAll('body *')].filter(e=>{const r=e.getBoundingClientRect();return r.width>0&&(r.right>innerWidth+2||r.left < -2)&&getComputedStyle(e).position!=='absolute'&&getComputedStyle(e).position!=='fixed'}).slice(0,12).map(e=>({tag:e.tagName,class:e.className,rect:e.getBoundingClientRect().toJSON()})))});
    const name=route==='/'?'home':route.replace(/^\//,'').replaceAll('/','-').replace(/-$/,'').replace('.html','');
    await page.screenshot({path:`${output}/${name}-${width}.png`,fullPage:true});
    if(width===390||width===1440){
      const axe=await new AxeBuilder({page}).withTags(['wcag2a','wcag2aa','wcag21aa','wcag22aa']).analyze();
      if(axe.violations.length)issues.push({route,width,axe:axe.violations.map(v=>({id:v.id,impact:v.impact,help:v.help,nodes:v.nodes.map(n=>({target:n.target,summary:n.failureSummary})).slice(0,8)}))});
    }
    records.push({route,width,...result});
  }
  console.log(`Reviewed ${routes.length} page layouts at ${width}px`);
}
await writeFile(`${output}/visual-audit.json`,JSON.stringify({base,records,issues,errors},null,2)+'\n');
console.log(`${records.length} responsive checks; ${issues.length} issues; ${errors.length} script errors. Details: ${output}/visual-audit.json`);
await browser.close();
if(issues.length||errors.length)process.exitCode=1;
