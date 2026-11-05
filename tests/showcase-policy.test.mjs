import test from "node:test";
import assert from "node:assert/strict";
import { mayPlayShowcase } from "../src/components/customer-stories/showcase-policy.ts";
import { demoLeads, demoCounts, john } from "../src/drafts/motion/pool-fixtures.ts";
const normal={visible:true,hidden:false,reducedMotion:false,saveData:false,failed:false};
test('showcase plays automatically only when visible with motion/data permission',()=>{
 assert.equal(mayPlayShowcase(normal),true);
 for(const change of [{visible:false},{hidden:true},{reducedMotion:true},{saveData:true},{failed:true}]) assert.equal(mayPlayShowcase({...normal,...change}),false);
});
test('user pause survives leaving and returning to the viewport',()=>{
 for(const visible of [true,false,true]) assert.equal(mayPlayShowcase({...normal,visible,manual:'pause'}),false);
});
test('explicit play overrides reduced motion and data saving but never a hidden tab or failed video',()=>{
 const manual={...normal,reducedMotion:true,saveData:true,manual:'play'};
 assert.equal(mayPlayShowcase(manual),true);
 for(const change of [{visible:false},{hidden:true},{failed:true}]) assert.equal(mayPlayShowcase({...manual,...change}),false);
});
test('fictional demo identities use reserved contact details, unique IDs and consistent derived counts',()=>{
 assert.equal(john.name,'John Watson');
 assert.equal(demoCounts.reduce((sum,count)=>sum+count.value,0),demoLeads.length);
 assert.equal(new Set(demoLeads.map(lead=>lead.id)).size,demoLeads.length);
 for(const lead of demoLeads){
  assert.match(lead.email,/@example\.com$/);
  assert.match(lead.phone,/^\(415\) 555-01\d{2}$/);
  assert.match(lead.id,/^DEMO-\d{3}$/);
  assert.equal(lead.date,'May 12, 2027');
  assert.equal(lead.city,'Demo Bay, CA');
 }
});

test('childcare and venue scenes use internally consistent fictional records',async()=>{
 const {family,families,familyCounts,event}=await import('../src/drafts/motion/customer-fixtures.ts');
 assert.match(family.email,/@example\.com$/);assert.match(family.phone,/555-01\d\d$/);
 assert.equal(familyCounts.active,families.length);
 assert.equal(familyCounts.new+familyCounts.applied+familyCounts.tours,familyCounts.active);
 assert.match(event.email,/@example\.com$/);assert.match(event.phone,/555-01\d\d$/);
 assert.equal(event.status,'Tentative');assert.equal(event.guests,48);
});
