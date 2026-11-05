// Original fictional fixtures, never imported from a customer database.
export const statuses = ["New", "Contacted", "Quoted", "Won", "Lost"] as const;
const names = ["John Watson", "Maya Bennett", "Ethan Brooks", "Nora Ellis", "Lucas Hart", "Olivia Park", "Leo Morgan", "Amelia Ford", "Owen Reed", "Isla Hayes", "Mason Blake", "Ella Rivers", "Henry Lane", "Chloe West", "Jack Palmer", "Grace Quinn", "Liam Carter", "Sofia Wells"];
const statusList = ["New", "Contacted", "Quoted", "Won", "Lost", "New", "Contacted", "Quoted", "Won", "Lost", "New", "Contacted", "Quoted", "Won", "Contacted", "New", "Contacted", "Won"];
export const demoLeads = names.map((name, index) => ({
  id: `DEMO-${String(index + 1).padStart(3, "0")}`,
  name,
  email: name.toLowerCase().replace(" ", ".") + "@example.com",
  phone: `(415) 555-${String(100 + index).padStart(4, "0")}`,
  city: "Demo Bay, CA",
  service: index % 2 ? "Pool maintenance" : "Pool cleaning",
  date: "May 12, 2027",
  status: statusList[index],
}));
export const demoCounts = statuses.map(label => ({ label, value: demoLeads.filter(lead => lead.status === label).length }));
export const john = demoLeads[0];
export const sceneCopy = {
  overview: { number: "01", kicker: "THE SHARED VIEW", title: "Every inquiry.\nOne clear view.", body: "A workspace shaped around\nthe way Tim works.", note: "Faithful interface demonstration" },
  detail: { number: "02", kicker: "THE NEXT CONVERSATION", title: "The details,\nall together.", body: "From the first request\nto the next step.", note: "Faithful interface demonstration" },
  sms: { number: "03", kicker: "KEEP TIM IN THE LOOP", title: "A new inquiry.\nA text to Tim.", body: "The right information,\nright when it arrives.", note: "Conceptual workflow illustration" },
  followup: { number: "04", kicker: "AFTER THE FIRST REPLY", title: "Keep the\nconversation going.", body: "A contact today.\nA relationship over time.", note: "Conceptual follow-up illustration" },
} as const;
export type PoolScene = keyof typeof sceneCopy;
