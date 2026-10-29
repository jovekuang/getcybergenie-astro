import { voiceIndustries } from "./voiceIndustries";

export const positioning = {
  headline: "Get the outcome, not the software.",
  value: "More done. Less to manage.",
  audience: "Built for busy small-business owners.",
} as const;

type IndustryExample = { slug: string; outcome: string };
const examples: IndustryExample[] = [
  { slug: "hvac-contractors", outcome: "Service calls answered. Requests routed." },
  { slug: "realtors", outcome: "Listings showcased. Follow-ups organized." },
  { slug: "plumbers", outcome: "Job details captured. Requests routed." },
  { slug: "property-management", outcome: "Leasing inquiries handled. Maintenance requests organized." },
  { slug: "electricians", outcome: "Project inquiries captured. Estimates followed up." },
  { slug: "auto-repair-shops", outcome: "Appointments organized. Repair updates connected." },
  { slug: "medspas", outcome: "Consultation inquiries handled. Rebooking organized." },
  { slug: "day-cares", outcome: "Tours scheduled. Enrollment follow-ups organized." },
  { slug: "animal-hospitals", outcome: "Calls routed. Client reminders connected." },
  { slug: "insurance-agencies", outcome: "Quote inquiries captured. Renewal follow-ups organized." },
  { slug: "online-retailers", outcome: "Social media managed. Shopping experience improved." },
];

export const heroIndustries = examples.map((example) => {
  const industry = voiceIndustries.find(({ slug }) => slug === example.slug);
  if (!industry) throw new Error(`Unknown hero industry: ${example.slug}`);
  return { ...example, name: industry.name, href: `/industries/${industry.slug}/` };
});

export const customerOsInclusion = {
  title: "Customer OS",
  summary: "Built-in CRM, contacts, opportunities, and follow-up tasks.",
  availability: "Included at no additional cost while your paid Cyber Genie service is active.",
  entry: "Even Essential Website at $25/month, billed annually at $300, includes Customer OS.",
} as const;

export const customerOsFeature = "Customer OS: Built-in CRM, contacts, opportunities, and follow-up tasks.";
