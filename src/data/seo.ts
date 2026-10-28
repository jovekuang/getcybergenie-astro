import { voiceIndustries } from "./voiceIndustries";
import { positioning } from "./positioning";
import type { MembershipSlug, OutcomeSlug } from "@/data/solutions";
import type { VoiceIndustry } from "@/data/voiceIndustries";

export type SeoMetadata = {
  title: string;
  description: string;
  image?: string;
  imageAlt?: string;
};

export const staticSeo = {
  home: {
    title: "Managed Websites, Web Applications & Voice AI | Cyber Genie",
    description:
      `${positioning.headline} ${positioning.value} Websites, web applications, Voice AI, and business workflows.`,
  },
  pricing: {
    title: "Website, Social Media, Voice AI & Technology Pricing | Cyber Genie",
    description:
      "Compare website, web application, Technology Partner, all three social media plans, and Voice AI pricing. Free CRM included with every active paid service.",
  },
  industries: {
    title: "Get, Win & Keep Customers by Industry | Cyber Genie",
    description:
      `See how Cyber Genie helps ${voiceIndustries.length} industries get, win, and keep customers with systems shaped around each industry's journey, terminology, and workflows.`,
  },
  solutions: {
    title: "Get, Win & Keep Customer Solutions | Cyber Genie",
    description:
      "Explore practical ways to help your business get discovered, turn inquiries into customers, and keep good customers coming back.",
  },
  blog: {
    title: "Customer Growth & Operations Insights | Cyber Genie",
    description:
      "Practical guidance for getting, winning, and keeping customers through better websites, customer workflows, AI, and managed business systems.",
  },
  about: {
    title: "About Cyber Genie | Small Business Technology Partner",
    description:
      "Meet the team behind Cyber Genie’s managed business services: website delivery, agent configuration, integrations, and ongoing care at subscription pricing.",
  },
  contact: {
    title: "Talk to a Small Business Technology Partner | Cyber Genie",
    description:
      "Show us where your customer journey or technology gets stuck. Start with a website or talk through ongoing process and technology management.",
  },
} satisfies Record<string, SeoMetadata>;

export const planSeo: Record<MembershipSlug, SeoMetadata> = {
  "essential-website": {
    title: "Managed Website + Free CRM, $25/mo | Cyber Genie",
    description:
      "Get a custom website, hosting, ongoing care, unlimited queued changes, and a free CRM in Customer OS. $25/month, billed annually at $300. No setup fee.",
    image: "/og-essential-website.png",
    imageAlt: "Essential Website by Cyber Genie",
  },
  "evolving-website": {
    title: "Evolving Web Application, $99/mo | Cyber Genie",
    description:
      "Get a managed web application with integrations, backend database support, user single sign-on, hosting, and ongoing improvements for $99/month.",
    image: "/og-evolving-website.png",
    imageAlt: "Evolving Web Application by Cyber Genie",
  },
  "technology-partner": {
    title: "Small Business Technology Partner | Cyber Genie",
    description:
      "Get ongoing process mapping, platform management, CRM integration, workflow automation, vendor coordination, and light custom software for $499 per month.",
    image: "/og-technology-partner.png",
    imageAlt: "Technology Partner for owner-operated businesses by Cyber Genie",
  },
};

export const categorySeo: Record<OutcomeSlug, SeoMetadata> = {
  "get-customers": {
    title: "Customer Acquisition Website & Marketing Solutions | Cyber Genie",
    description:
      "Build the website, local visibility, proof, content, and campaigns that help qualified customers discover and trust your business.",
  },
  "win-customers": {
    title: "Managed Lead Response & Sales Workflows | Cyber Genie",
    description:
      "Answer inquiries, qualify requests, schedule appointments, send quotes, and follow up with connected sales workflows and custom software.",
  },
  "keep-customers": {
    title: "Managed Customer Retention & Operations | Cyber Genie",
    description:
      "Organize customer details, updates, payments, reviews, referrals, and reactivation through managed workflows and custom software.",
  },
};

export const solutionSeo: Record<string, SeoMetadata> = {
  "optimized-website": {
    title: "Custom Website Design for Service Businesses | Cyber Genie",
    description: "Build a fast, credible custom website that explains your services, shows proof, and turns visitors into qualified inquiries.",
  },
  "local-ai-search-visibility": {
    title: "Local & AI Search Visibility for Businesses | Cyber Genie",
    description: "Create service, location, and answer-focused content that improves discovery in local search and AI-assisted research.",
  },
  "social-media-management": {
    title: "Social Media Visibility Workflows | Cyber Genie",
    description: "Turn services, customer questions, completed work, and seasonal priorities into a consistent and managed social presence.",
  },
  "digital-advertising": {
    title: "Digital Advertising & Landing Pages | Cyber Genie",
    description: "Connect targeted ads with focused landing pages, conversion tracking, and follow-up paths built around qualified customer demand.",
  },
  "review-management": {
    title: "Review Management for Local Businesses | Cyber Genie",
    description: "Create a reliable workflow for requesting reviews, routing service concerns, and turning customer feedback into local trust.",
  },
  "project-showcases": {
    title: "Project Portfolio & Showcase Websites | Cyber Genie",
    description: "Present completed work, before-and-after proof, facilities, case stories, and service examples in a credible website portfolio.",
  },
  "ai-voice": {
    title: "Managed AI Voice Agents & Call Workflows | Cyber Genie",
    description: "Get an AI voice agent built, configured, integrated, and tested for your agreed call workflow. Capture details, book appointments, and prepare team handoffs.",
  },
  "request-pipeline": {
    title: "Customer Request & Lead Pipeline Setup | Cyber Genie",
    description: "Organize calls, forms, texts, appointments, and quote requests in one visible pipeline with ownership and next steps.",
  },
  scheduling: {
    title: "Appointment Scheduling Workflows | Cyber Genie",
    description: "Coordinate bookings, confirmations, reschedules, reminders, availability rules, and team handoffs in one scheduling workflow.",
  },
  "quoting-follow-up": {
    title: "Managed Estimate & Quote Follow-Up | Cyber Genie",
    description: "Keep proposals, approvals, reminders, financing steps, and sales follow-up moving until the customer makes a decision.",
  },
  "sales-assistant": {
    title: "AI Sales Assistant for Customer Follow-Up | Cyber Genie",
    description: "Give teams approved replies, conversation summaries, next-step prompts, and follow-up support without losing human judgment.",
  },
  "customer-management": {
    title: "Included Small Business CRM | Cyber Genie",
    description: "Use the included Customer OS workspace to organize contacts, opportunities, notes, and follow-up tasks, or connect a specialized CRM through Technology Partner.",
  },
  "project-updates": {
    title: "Managed Customer Project Updates | Cyber Genie",
    description: "Send organized status updates, reminders, milestones, handoffs, and next steps after work has been booked.",
  },
  "photo-document-management": {
    title: "Photo & Document Workflow Setup | Cyber Genie",
    description: "Keep customer photos, forms, files, approvals, before-and-after proof, and project documents easier for the team to find.",
  },
  "invoicing-payments": {
    title: "Managed Invoice & Payment Follow-Up | Cyber Genie",
    description: "Coordinate deposits, invoices, payment links, reminders, financing handoffs, and account follow-up with clear ownership.",
  },
  "reviews-referrals": {
    title: "Review & Referral Workflow Management | Cyber Genie",
    description: "Request reviews and referrals at the right moments, preserve customer context, and route feedback to the right team member.",
  },
  reactivation: {
    title: "Customer Reactivation & Reminder Services | Cyber Genie",
    description: "Bring past customers back with service reminders, seasonal outreach, renewal workflows, and approved win-back campaigns.",
  },
};

export const industrySeo = (industry: VoiceIndustry): SeoMetadata => {
  const title = industry.managedSeoTitle ?? `${industry.name}: Managed Websites & Customer Workflows | Cyber Genie`;

  return {
    title,
    description: industry.seoDescription,
    image: industry.heroImage?.src,
    imageAlt: industry.heroImageAlt ?? `${industry.name} managed website and customer workflows`,
  };
};
