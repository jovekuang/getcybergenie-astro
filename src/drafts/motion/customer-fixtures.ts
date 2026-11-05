// Entirely fictional records for screenshot production. No application data is imported.
export const family = {
  id: "DEMO-FAMILY-041", parent: "Maya Bennett", child: "Noah Bennett",
  email: "maya.bennett@example.com", phone: "(281) 555-0142",
  tourDate: "Wednesday, May 12, 2027", tourTime: "10:00 AM", followupDate: "May 13, 2027",
};
export const families = [
  {name:family.parent, stage:"Tour Scheduled"}, {name:"Oliver Brooks",stage:"New Inquiry"},
  {name:"Sofia Hart",stage:"Applied"}, {name:"Liam Ellis",stage:"Tour Scheduled"},
  {name:"Isla Reed",stage:"Applied"}, {name:"Noah Lane",stage:"New Inquiry"},
  {name:"Grace Palmer",stage:"Tour Scheduled"}, {name:"Ethan Wells",stage:"Tour Scheduled"},
  {name:"Nora Quinn",stage:"Applied"},
];
export const familyCounts = {
  active:families.length, new:families.filter(f=>f.stage==="New Inquiry").length,
  applied:families.filter(f=>f.stage==="Applied").length, tours:families.filter(f=>f.stage==="Tour Scheduled").length,
};
export const event = {
  id:"DEMO-EVENT-073", name:"Emma Carter", email:"emma.carter@example.com", phone:"(210) 555-0174",
  title:"Carter anniversary dinner", type:"Private celebration", guests:48,
  date:"Saturday, May 15, 2027", received:"May 7, 2027 · 11:20 AM",
  starts:"5:00 PM", ends:"10:00 PM", setup:"3:00 PM", cleanup:"11:00 PM",
  holdExpires:"May 10, 2027 · 5:00 PM", status:"Tentative",
  message:"We’re planning an anniversary dinner for our family and would love to see the space.",
};
export const storyScenes = {
  "first-achievers": [
    {key:"website",kicker:"A WELCOMING FIRST STEP",title:"A warm welcome.\nA clear next step.",body:"From discovering the center\nto planning a visit.",note:"Current public website"},
    {key:"inquiry",kicker:"MADE FOR BUSY PARENTS",title:"A visit starts\nwith a time.",body:"Choose a tour.\nKeep the details connected.",note:"Demo using fictional data"},
    {key:"calendar",kicker:"THE CENTER’S SHARED VIEW",title:"The family. The visit.\nAll together.",body:"A CRM built around\nthe center’s day.",note:"Demo using fictional data"},
    {key:"followup",kicker:"AFTER THE TOUR",title:"A thoughtful\nnext conversation.",body:"Stay connected\nafter the visit.",note:"Demo using fictional data"},
  ],
  warehouse: [
    {key:"website",kicker:"A VENUE COMING TO LIFE",title:"A place to gather.\nA presence online.",body:"From the first website\nto the next reservation.",note:"Public website · Supplied aerial screenshot"},
    {key:"inquiry",kicker:"FROM INTEREST TO A NEXT STEP",title:"Every gathering\nstarts somewhere.",body:"Give each reservation request\na clear place to land.",note:"Demo using fictional data"},
    {key:"hold",kicker:"SPACE TO PLAN",title:"Hold the date.\nKeep the context.",body:"A tentative hold,\nconnected to the inquiry.",note:"Demo using fictional data"},
    {key:"calendar",kicker:"ONE CONNECTED CALENDAR",title:"The date stays\nin view.",body:"From setup through cleanup,\nthe team stays connected.",note:"Demo using fictional data · Tentative hold"},
  ],
} as const;
