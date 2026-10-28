import { brand } from "./brand";
import { customerOsFeature } from "./positioning";
import type { VoiceIndustry } from "@/data/voiceIndustries";

export type OutcomeSlug = "get-customers" | "win-customers" | "keep-customers";
export type CoreOffer = "website" | "marketing" | "voice" | "sales-ops" | "customer-ops";
export type MembershipSlug = "essential-website" | "evolving-website" | "technology-partner";

export type ServiceFaq = {
  id: string;
  question: string;
  answer: string;
};

export type SolutionItem = {
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  outcome: OutcomeSlug;
  coreOffer: CoreOffer;
  proof: string;
  whiteGloveOutcome: string;
  whiteGlove: string[];
  selfServeNote?: string;
  industryUseCases: string[];
  selfServe?: {
    label: string;
    href: string;
  };
};

export type OutcomeCategory = {
  slug: OutcomeSlug;
  name: string;
  role: string;
  headline: string;
  headlineLines?: readonly [string, string];
  description: string;
  promise: string;
};

export type SocialMediaPlan = {
  name: string;
  price: string;
  detail: string;
  description: string;
  channels: string[];
  features: string[];
};

export type MembershipPlan = {
  slug: MembershipSlug;
  name: string;
  badge?: string;
  shortDescription: string;
  description: string;
  monthlyEquivalent: string;
  billingPrice: string;
  billingDetail: string;
  commitment: string;
  guarantee: string;
  href: string;
  cta: string;
  ctaHref: string;
  bestFor: string;
  features: string[];
  pricingSummary: {
    description: string;
    bestFor: string;
    features: string[];
  };
  examples: string[];
};

export type TechnologyPartnerOutcome = {
  slug: "get" | "win" | "keep";
  title: string;
  description: string;
  responsibilities: string[];
  technologies: string;
};

export type TechnologyPartnerExample = {
  name: string;
  summary: string;
  stages: string[];
  note: string;
};

export type SolutionRelationship = {
  label: "Included in" | "Available as an add-on" | "Included with Technology Partner" | "Works with";
  name: string;
  href: string;
};

export type SolutionPageDetail = {
  warningSigns: string[];
  firstMilestone: string;
};

export const customerOsDefinition =
  "Customer OS includes a free CRM to organize contacts, track opportunities, and manage follow-up tasks, plus self-service tools for website activity and customer-growth work.";

export const customerOsCore = {
  name: "Customer OS",
  label: "Free CRM included",
  description: customerOsDefinition,
  availability: "Included at no extra cost with every active paid Cyber Genie service, starting with Essential Website at $25/month, billed annually at $300.",
  fit:
    "Use the included CRM to keep customer relationships organized. If a specialized platform is a better fit, we configure the connections included in your agreed service; Technology Partner manages broader ongoing improvements.",
  href: `${brand.appUrl}/login`,
  cta: "Sign in to Customer OS",
};

export const technologyPartnerOffer = {
  name: "Technology Partner",
  headline: "Your tools work. They just don't work together.",
  supportingHeadline: "Turn scattered software into one working customer system.",
  description:
    "We turn agreed business priorities into working customer workflows. Our team maps the process, configures and connects the tools, tests the handoffs, and manages ongoing improvements across your business systems.",
  cta: "Talk to a Technology Partner",
  ctaHref: "https://calendly.com/jove-fkcapital/30min",
  roadmapPromise: "Your initial process map and prioritized 90-day technology roadmap, targeted within 15 calendar days of signup.",
  onboardingDeliverables: [
    "Map the Get, Win, and Keep customer journey",
    "Inventory the corresponding platforms, owners, and information handoffs",
    "Identify duplicated work, disconnected data, and operating friction",
    "Deliver a prioritized 90-day technology roadmap using the information available",
    "Recommend and begin the first approved improvement",
  ],
  ongoingOwnership: [
    "Maintain the process and technology map",
    "Administer agreed business platforms",
    "Configure and optimize existing software",
    "Monitor integrations and automations managed by Cyber Genie",
    "Coordinate relevant software vendors",
    "Keep one approved improvement priority actively moving",
  ],
  outcomes: [
    {
      slug: "get",
      title: "Get Customers",
      description: "Bring discovery and inquiry channels into one intentional path.",
      responsibilities: ["Website and storefront", "Social and advertising systems", "Forms, calls, and lead routing"],
      technologies: "Website, store, social channels, advertising platforms, forms, phone, analytics, and lead sources",
    },
    {
      slug: "win",
      title: "Win Customers",
      description: "Move every qualified opportunity toward a clear next step.",
      responsibilities: ["CRM and pipeline", "Quotes, booking, and follow-up", "Onboarding and project handoff"],
      technologies: "CRM, estimates, proposals, scheduling, sales follow-up, onboarding, and project-management tools",
    },
    {
      slug: "keep",
      title: "Keep Customers",
      description: "Connect delivery and service to the next customer relationship.",
      responsibilities: ["Project and customer updates", "Payments and service", "Reviews, referrals, and repeat campaigns"],
      technologies: "Project delivery, customer communication, payments, support, reviews, loyalty, and outreach tools",
    },
  ] satisfies TechnologyPartnerOutcome[],
  examples: [
    {
      name: "Online store",
      summary: "Connect acquisition, checkout, service, and repeat-purchase systems around one customer journey.",
      stages: [
        "Get: Coordinate the storefront, landing pages, Meta advertising, social content, and lead capture.",
        "Win: Improve Shopify product pages, checkout, abandoned-cart workflows, and consent-based follow-up.",
        "Keep: Connect fulfillment updates, service, review requests, and repeat email or text campaigns.",
      ],
      note: "May involve Shopify, Meta Ads, Instagram, email and SMS platforms, review tools, payments, analytics, and a purpose-built CRM.",
    },
    {
      name: "Restaurant",
      summary: "Coordinate local discovery, ordering, service, and return visits without adding more owner homework.",
      stages: [
        "Get: Align the website, Google Business Profile, menus, promotions, and social campaigns.",
        "Win: Connect reservations, online ordering, catering inquiries, waitlists, and the POS.",
        "Keep: Build feedback, review requests, loyalty, event promotion, and consent-based outreach.",
      ],
      note: "May involve Square or Toast, reservation and ordering platforms, Google Business Profile, review tools, email and SMS, social channels, and the website.",
    },
  ] satisfies TechnologyPartnerExample[],
  boundaries: [
    "One business, one brand, and one primary customer journey",
    "Platforms must be agreed and documented before management begins",
    "Major migrations and substantial standalone applications require separate scope",
    "Third-party subscriptions, advertising spend, transaction fees, and higher-volume content production are separate",
    "Employee devices, networking, general helpdesk, emergency response, and compliance management are not included",
  ],
};

export const customerOsFaqs: ServiceFaq[] = [
  {
    id: "choosing-software",
    question: "Do I need to know which software I need?",
    answer:
      "No. Start with the business outcome. We choose and configure the tools within your agreed service, including required custom voice-workflow integrations for Voice AI. Technology Partner handles broader process mapping and ongoing improvements across business systems. Customer OS is included, with optional self-service tools.",
  },
  {
    id: "starting-small",
    question: "Is Customer OS included with my service?",
    answer:
      "Yes. Even Essential Website at $25/month, billed annually at $300, includes a free CRM in Customer OS for contacts, opportunities, and follow-up tasks, plus website activity tools. Access remains included at no additional cost while any paid Cyber Genie service is active.",
  },
  {
    id: "custom-software-fit",
    question: "Where does custom software fit?",
    answer:
      "Evolving Web Application covers development, eligible integrations, backend database support, and single sign-on within one agreed application. Technology Partner adds process mapping and ongoing management across the wider business systems, including eligible light custom tools. Major migrations and substantial additional applications require separate scope.",
  },
];

export const modularOfferDefinition =
  "Start with a website, web application, social media, or Voice AI. Add Technology Partner when disconnected tools and manual handoffs need ongoing ownership.";

export const websiteOnboardingUrl = (plan: "essential-website" | "evolving-website") =>
  `/onboarding/website/?plan=${plan}`;

export const coreOfferLabels: Record<CoreOffer, string> = {
  website: "Website layer",
  marketing: "Marketing layer",
  voice: "Voice AI layer",
  "sales-ops": "Sales operations layer",
  "customer-ops": "Customer operations layer",
};

const socialMediaChannels = ["Facebook", "Instagram", "Threads", "LinkedIn", "TikTok", "YouTube", "Pinterest", "Google Business Profile"];

export const socialMediaPlanNotes = {
  customization: "Every post and reel is made for your brand message.",
  counts: "Monthly counts cover original posts and reels, adapted across agreed channels, not extra content per network.",
  songs: "Songs are refined until approved, with commercial-use rights included. Copyright registration and exclusivity are not guaranteed for AI-assisted music.",
};

export const socialMediaPlans: SocialMediaPlan[] = [
  {
    name: "Essential",
    price: "$99",
    detail: "/mo",
    description:
      "Your monthly social presence, handled.",
    channels: socialMediaChannels,
    features: [
      "4 photo-and-text posts / month",
      "4 video reels / month",
      "1-hour live brand session / month",
      "Client review and approval",
      "Scheduling and publishing",
      customerOsFeature,
      "1 custom lyric song / month",
      "Service and FAQ content planning",
    ],
  },
  {
    name: "Growth",
    price: "$249",
    detail: "/mo",
    description:
      "More content for offers and seasonal campaigns.",
    channels: socialMediaChannels,
    features: [
      "8 photo-and-text posts / month",
      "8 video reels / month",
      "Everything in Essential",
      "4 custom lyric songs / month",
      "Seasonal and offer planning",
    ],
  },
  {
    name: "Scale",
    price: "From $499",
    detail: "/mo",
    description:
      "Richer assets and a custom content strategy.",
    channels: socialMediaChannels,
    features: [
      "Everything in Growth",
      "Custom content cadence and channels",
      "Brand videos up to 2 minutes",
      "On-site content and original asset planning",
      "High-touch strategy and support",
    ],
  },
];

export const membershipPlans: MembershipPlan[] = [
  {
    slug: "essential-website",
    name: "Essential Website",
    shortDescription: "A custom website, managed for you. Free CRM included.",
    description:
      "Cyber Genie creates and maintains one custom website for one brand, with up to 10 published content pages, unlimited eligible changes through a clear request queue, and a free CRM in Customer OS while the plan is active.",
    monthlyEquivalent: "$25/mo",
    billingPrice: "$300",
    billingDetail: "billed annually",
    commitment: "12-month commitment. No setup fee.",
    guarantee: "15-day money-back guarantee.",
    href: "/services/essential-website/",
    cta: "Start onboarding",
    ctaHref: websiteOnboardingUrl("essential-website"),
    bestFor:
      "You want a professional, dependable website with a focused 10-page footprint and ongoing help when you need it.",
    features: [
      "One brand, one primary root domain, and one custom website",
      customerOsFeature,
      "Up to 10 published customer-facing content pages at a time",
      "Custom design based on one approved creative direction",
      "AI-assisted copy, logo, and licensed or generated images",
      "Standard contact, quote-request, and inquiry forms",
      "Hosting, SSL, backups, maintenance, and technical support",
      "Website Stats dashboard for visitors, page views, traffic sources, and devices",
      "Technical SEO and answer engine optimization (AEO)",
      "20 self-service AI credits¹ per month",
      "Unlimited eligible website change requests",
      "One active request or reviewable milestone at a time",
      "Five-business-day turnaround for each active eligible request or milestone",
    ],
    pricingSummary: {
      description: "Your business website, built and maintained.",
      bestFor: "A focused website with ongoing updates.",
      features: [
        "One brand, primary domain, and custom website",
        "One approved design direction",
        "AI-assisted copy, logo, and images",
        "Contact, quote, and inquiry forms",
        "Hosting, SSL, backups, maintenance, and support",
        "Visitor and traffic analytics",
        "Technical SEO and AEO",
        "20 self-service AI credits¹ / month",
        "Unlimited eligible updates; one active at a time",
        "5-business-day turnaround per active request or milestone",
        "Up to 10 live content pages",
      ],
    },
    examples: [
      "Replace copy, images, offers, or calls to action",
      "Add a new service page by replacing an existing content page",
      "Update a form, testimonial, gallery, team profile, or business detail",
    ],
  },
  {
    slug: "evolving-website",
    name: "Evolving Web Application",
    badge: "Most Popular",
    shortDescription: "A web application that keeps evolving with your business.",
    description:
      "Cyber Genie designs, hosts, maintains, and continuously improves one web application for one brand, including eligible integrations, backend database support, and single sign-on for users. Submit as many eligible requests as you need, and we work through your priorities one at a time.",
    monthlyEquivalent: "$99/mo",
    billingPrice: "$99",
    billingDetail: "billed monthly",
    commitment: "Cancel anytime. No setup fee.",
    guarantee: "15-day money-back guarantee.",
    href: "/services/website-design-hosting/",
    cta: "Start onboarding",
    ctaHref: websiteOnboardingUrl("evolving-website"),
    bestFor:
      "You need a web application with connected tools, stored data, and user access, and want it to keep improving as your business needs change.",
    features: [
      "All Essential Website features",
      "Unlimited eligible web application integrations",
      "10 launch-ready blog posts, then one new blog post each month",
      "24-hour turnaround for each active eligible request",
      "100 self-service AI credits¹ per month",
      "Proactive content, conversion, analytics, technical SEO, and answer engine optimization (AEO) improvements",
      "Backend database support and single sign-on (SSO) for users",
    ],
    pricingSummary: {
      description: "Your web application, continuously improved.",
      bestFor: "A web application with integrations, stored data, and user access.",
      features: [
        "All Essential Website features",
        "Unlimited eligible web application integrations",
        "10 launch-ready blog posts + 1 new post / month",
        "24-hour turnaround per active eligible request",
        "100 self-service AI credits¹ / month",
        "Proactive content, conversion, analytics, technical SEO, and AEO",
        "Backend database and single sign-on (SSO)",
      ],
    },
    examples: [
      "Add a service or location page",
      "Refresh photos, copy, offers, or calls to action",
      "Build a customer or team portal with a backend database and user sign-on",
      "Connect the application to approved scheduling, payment, CRM, or other business tools",
    ],
  },
  {
    slug: "technology-partner",
    name: "Technology Partner",
    badge: "Done for you",
    shortDescription: "Your processes and technology, mapped and managed as one.",
    description:
      "Ongoing process and technology management for owner-operated businesses. We connect and improve the tools behind getting customers, delivering the work, and keeping customers coming back.",
    monthlyEquivalent: "$499/mo",
    billingPrice: "$499",
    billingDetail: "billed monthly",
    commitment: "Cancel anytime. No setup fee.",
    guarantee: "15-day money-back guarantee.",
    href: "/services/technology-partner/",
    cta: technologyPartnerOffer.cta,
    ctaHref: technologyPartnerOffer.ctaHref,
    bestFor:
      "Your business relies on several useful tools, but the owner still has to connect the dots, move information, and decide what should improve next.",
    features: [
      "All Evolving Web Application features, including integrations, database support, user sign-on, and blog production",
      "Get, Win, and Keep process mapping with corresponding technologies",
      "Initial process map and prioritized 90-day roadmap targeted within 15 calendar days",
      "Administration of agreed customer systems",
      "Configuration, integrations, automations, reporting, and light custom tools",
      "Vendor coordination, monitoring, and ongoing optimization",
      "500 self-service AI credits¹ per month",
      "Unlimited eligible requests, with one active improvement priority at a time",
    ],
    pricingSummary: {
      description: "Your business processes and technology, managed together.",
      bestFor: "Owners juggling disconnected tools and manual handoffs.",
      features: [
        "Everything in Evolving Web Application",
        "Get, Win, Keep process and technology mapping",
        "Process map and prioritized 90-day roadmap",
        "Administration of agreed systems",
        "Configuration, integrations, automation, reporting, and light custom tools",
        "Vendor coordination, monitoring, and optimization",
        "500 self-service AI credits¹ / month",
        "Unlimited eligible requests; one active priority",
      ],
    },
    examples: [
      "Connect ads, landing pages, Shopify, reviews, and consent-based follow-up",
      "Coordinate a restaurant website, ordering, POS, loyalty, and review systems",
      "Replace manual handoffs with integrations, dashboards, and light custom tools",
    ],
  },
];

export const membershipPlanBySlug = (slug: MembershipSlug) =>
  membershipPlans.find((plan) => plan.slug === slug)!;

export const evolvingWebsiteFaqs: ServiceFaq[] = [
  {
    id: "managed-website-service",
    question: "What is included in Evolving Web Application?",
    answer:
      "Evolving Web Application combines design, development, hosting, maintenance, and ongoing improvement for one application. It includes unlimited published pages, eligible web application integrations, backend database support, single sign-on for users, and recurring blog content. Cyber Genie handles the technical work as your business changes.",
  },
  {
    id: "unlimited-website-updates",
    question: "What can I request through the application improvement queue?",
    answer:
      "You may keep adding eligible requests for pages, content, forms, integrations, database-backed features, user access, and customer or team workflows within the agreed application. We work on one active, fully specified request or milestone at a time, and you may reprioritize work that has not started.",
  },
  {
    id: "website-change-turnaround",
    question: "How quickly are application changes completed?",
    answer:
      "Each active eligible request has a 24-hour turnaround target after we receive the complete requirements, access, and assets needed to begin. Larger requests are divided into reviewable milestones, with one milestone active at a time.",
  },
  {
    id: "website-vs-web-application",
    question: "Does the plan include a backend database and single sign-on?",
    answer:
      "Yes. Backend database support and single sign-on (SSO) for users are included within the agreed application scope. We confirm the data model, user roles, identity provider, access requirements, and integration feasibility during onboarding. Third-party subscriptions and usage charges remain separate. Technology Partner is the better fit for ongoing process and platform management beyond the application.",
  },
  {
    id: "online-store",
    question: "Can you build an online store under Evolving Web Application?",
    answer:
      "Yes. A public storefront built with an established commerce platform can fit within Evolving Web Application. Choose Technology Partner when the work also requires ongoing coordination across commerce, CRM, fulfillment, customer service, marketing, and other business systems.",
  },
];

export const technologyPartnerFaqs: ServiceFaq[] = [
  {
    id: "technology-partner-service",
    question: "What does a Technology Partner do?",
    answer:
      "Cyber Genie maps your Get, Win, and Keep customer processes with the corresponding technologies, then administers agreed platforms, connects information handoffs, coordinates vendors, and keeps one approved improvement priority moving.",
  },
  {
    id: "existing-business-software",
    question: "Do I have to replace the software I already use?",
    answer:
      "No. We may use Customer OS where it fits, but the goal is to get the most value from the right tools. We can configure and connect purpose-built platforms such as Shopify, Square, scheduling software, review tools, or an industry CRM instead of forcing a replacement.",
  },
  {
    id: "technology-roadmap",
    question: "What happens during the first 15 days?",
    answer:
      "We map the initial customer journey, inventory the corresponding platforms and handoffs, identify friction, and target delivery of an initial process map and prioritized 90-day technology roadmap within 15 calendar days of signup using the information available.",
  },
  {
    id: "custom-software-fit",
    question: "Is custom software included?",
    answer:
      "Light custom tools, dashboards, reports, integrations, and workflow automation may be delivered through the active priority queue. Major migrations and substantial standalone applications require a separate scope.",
  },
  {
    id: "technology-partner-cost",
    question: "How much does Technology Partner cost?",
    answer:
      "Technology Partner is $499 per month, billed monthly, with no setup fee. You may cancel before the next billing date to stop the following month, and the first paid term includes a 15-day money-back guarantee under the published terms.",
  },
  {
    id: "ongoing-ownership",
    question: "What ongoing value is included each month?",
    answer:
      "We maintain the process and technology map, administer agreed platforms, monitor the integrations we manage, coordinate relevant vendors, review priorities, and keep one approved improvement actively moving. Included Evolving Web Application work shares the same managed queue.",
  },
];

export const membershipPlansForSolution = (item: SolutionItem) =>
  item.coreOffer === "website"
    ? [
        membershipPlanBySlug("essential-website"),
        membershipPlanBySlug("evolving-website"),
        membershipPlanBySlug("technology-partner"),
      ]
    : item.coreOffer === "marketing" || item.coreOffer === "voice"
      ? []
      : [membershipPlanBySlug("technology-partner")];

export const solutionRelationships = (item: SolutionItem): SolutionRelationship[] => {
  if (item.slug === "customer-management" || item.slug === "request-pipeline") {
    return [
      {
        label: "Included in",
        name: "Every active Cyber Genie service",
        href: "/pricing/",
      },
    ];
  }

  if (item.coreOffer === "website") {
    return membershipPlansForSolution(item).map((plan) => ({
      label: "Included in",
      name: plan.name,
      href: plan.href,
    }));
  }

  if (item.coreOffer === "marketing") {
    return [
      { label: "Available as an add-on", name: "Social Media Management", href: "/services/marketing/" },
      { label: "Works with", name: "Evolving Web Application", href: "/services/website-design-hosting/" },
      { label: "Works with", name: "Technology Partner", href: "/services/technology-partner/" },
    ];
  }

  if (item.coreOffer === "voice") {
    return [
      { label: "Included in", name: "Voice AI", href: "/services/voice/" },
      { label: "Works with", name: "Technology Partner", href: "/services/technology-partner/" },
    ];
  }

  return [
    {
      label: "Included with Technology Partner",
      name: "Technology Partner",
      href: "/services/technology-partner/",
    },
  ];
};

export const membershipTerms = {
  brandDefinition:
    "One brand means one primary root domain, one visual identity, and one main website or application. A second brand or root domain requires a separate service plan.",
  commitment:
    "Evolving Web Application and Technology Partner are billed monthly with no long-term commitment. Cancel before the next billing date to stop the following month.",
  essentialCommitment:
    "Essential Website begins with a 12-month commitment paid annually and renews in 12-month periods. Cancel at least 30 days before renewal to stop the next term.",
  requestPolicy:
    "Unlimited requests means you may keep adding eligible work to your queue. Cyber Genie works on one active request or milestone at a time, and you may reprioritize work that has not started.",
  eligibleRequest:
    "An eligible request is a clearly defined task within the plan's listed scope and its brand, domain, or application boundary.",
  reviewableMilestone:
    "A reviewable milestone is a testable part of a larger request that can be reviewed and approved on its own.",
  essentialDelivery:
    "Essential Website requests are completed within five business days after we receive the complete instructions, access, and assets needed to begin. Larger requests are divided into reviewable milestones, with each active milestone delivered within five business days.",
  delivery:
    "Evolving Web Application targets delivery of each active eligible request within 24 hours after receiving complete requirements, access, and assets. Technology Partner work follows the approved roadmap and one-active-priority queue; larger work is divided into reviewable milestones.",
  feedback:
    "Revisions are included while they support the approved objective. A different objective becomes a new queued request so the current priority can still be completed within the turnaround for its plan.",
  aiCredits:
    "Self-service AI credits let you make quick text, color, and other minor changes directly in the app without waiting for Cyber Genie's request queue. The app shows the estimated credit use before each change. Credits reset monthly, do not roll over, and have no cash value.",
  planInheritance:
    "Included features carry forward from one plan to the next, but each plan keeps its own billing schedule, cancellation terms, turnaround, and request queue.",
  sharedManagedQueue:
    "Technology Partner includes Evolving Web Application development, integrations, database support, user sign-on, pages, and blog production. Application and Technology Partner requests share one active priority queue.",
  ownership:
    "The customer owns the approved final website, application code, and business content created for the engagement after all invoices are paid. Cyber Genie retains its reusable tools, templates, and general know-how.",
  guarantee:
    "The 15-day money-back guarantee applies to the first paid term only. Request it in writing within 15 calendar days of the initial payment for a full refund of your initial payment. Service and hosting end when the refund is issued, customer-provided materials remain the customer's property, and FK-created deliverables are not transferred after a full refund. Renewals and requests made after the first 15 days are non-refundable.",
};

export const websitePlanExclusions = [
  "Management of business platforms and processes outside the primary web property",
  "Cross-platform operating workflows that require ongoing administration",
  "Native mobile apps, major data migrations, or undocumented legacy integrations",
  "Regulated, compliance-heavy, or unusually security-sensitive workloads are not currently offered",
];

export const technologyPartnerScopeNotes = technologyPartnerOffer.boundaries;

export const outcomeCategories: OutcomeCategory[] = [
  {
    slug: "get-customers",
    name: "Get Customers",
    role: "Be found, trusted, and chosen",
    headline: "Get found by the customers already looking for you.",
    description:
      "Build the local presence, proof, and campaigns that help the right people discover your business before they call a competitor.",
    promise: "More qualified customers discover you and decide to reach out.",
  },
  {
    slug: "win-customers",
    name: "Win Customers",
    role: "Reply fast, qualify, book, and quote",
    headline: "Turn every inquiry into a real next step.",
    description:
      "Answer calls and texts, qualify the request, schedule the appointment, send the quote, and follow up before interest goes cold.",
    promise: "Fewer missed opportunities and more booked work.",
  },
  {
    slug: "keep-customers",
    name: "Keep Customers",
    role: "Deliver, collect, review, and rebook",
    headline: "Finish the job well. Turn good service into repeat business.",
    headlineLines: ["Finish the job well.", "Turn good service into repeat business."],
    description:
      "Organize customer details, send updates, collect payment, request reviews, and bring good customers back without manual chasing.",
    promise: "Cleaner operations, faster payments, and more repeat business.",
  },
];

export const solutionItems: SolutionItem[] = [
  {
    slug: "optimized-website",
    title: "Optimized Website",
    shortTitle: "Website",
    outcome: "get-customers",
    coreOffer: "website",
    description: "A custom site that explains your work clearly, builds trust, and turns visitors into inquiries.",
    proof: "Your website becomes the place customers understand your services, see proof, and know how to take the next step.",
    whiteGloveOutcome: "We shape the site around the customer decision, not just the design.",
    whiteGlove: [
      "Position your services around the customer problems you solve.",
      "Build fast, mobile-friendly pages with clear conversion paths.",
      "Connect forms, analytics, and follow-up so inquiries do not disappear.",
    ],
    selfServeNote: "Evolving Web Application includes the build, eligible web application integrations, backend database support, user sign-on, testing, and continuous improvement handled by Cyber Genie.",
    industryUseCases: [
      "Explain services, service areas, and proof before a customer picks up the phone.",
      "Create a clean place to route ads, search traffic, referrals, and review clicks.",
      "Turn website forms into organized follow-up instead of inbox clutter.",
    ],
    selfServe: { label: "View Evolving Web Application", href: "/services/website-design-hosting/" },
  },
  {
    slug: "local-ai-search-visibility",
    title: "Local & AI Search Visibility",
    shortTitle: "Local Search",
    outcome: "get-customers",
    coreOffer: "marketing",
    description: "Local pages, search-friendly content, and AI-search signals that help customers find you when they need help.",
    proof: "Your business shows up with clearer answers, stronger local relevance, and more reasons to trust you.",
    whiteGloveOutcome: "We make your business easier to discover in Google, local search, and AI-assisted research.",
    whiteGlove: [
      "Build service and location content around real customer questions.",
      "Keep business information, service proof, and structured content consistent.",
      "Use search insights to decide what pages and updates should be created next.",
    ],
    selfServeNote: "We create and maintain the agreed search-focused pages and content within your website or marketing service.",
    industryUseCases: [
      "Create content for common service needs, service areas, and seasonal demand.",
      "Strengthen local relevance for customers comparing nearby providers.",
      "Give AI search tools clearer facts about what you do and where you serve.",
    ],
    selfServe: { label: "View marketing plans", href: "/services/marketing/" },
  },
  {
    slug: "social-media-management",
    title: "Social Media Management",
    shortTitle: "Social Media",
    outcome: "get-customers",
    coreOffer: "marketing",
    description: "Consistent posts and updates that keep your business visible without turning content into another job.",
    proof: "Customers see an active, trustworthy business before they decide who to contact.",
    whiteGloveOutcome: "We keep your business present and credible without making you manage a content calendar.",
    whiteGlove: [
      "Plan content around your services, seasons, and customer questions.",
      "Create posts, updates, and newsletters using AI plus human review.",
      "Keep the cadence moving while you stay focused on the business.",
    ],
    selfServeNote: "Managed social content plans include guided onboarding, client approval, scheduling, and publishing.",
    industryUseCases: [
      "Show active work, customer education, seasonal reminders, and proof of reliability.",
      "Keep prospects warm before they are ready to call.",
      "Turn field work, completed jobs, and customer questions into useful updates.",
    ],
    selfServe: { label: "View social media plans", href: "/services/marketing/" },
  },
  {
    slug: "digital-advertising",
    title: "Digital Advertising",
    shortTitle: "Advertising",
    outcome: "get-customers",
    coreOffer: "marketing",
    description: "Targeted landing pages and ads that push high-intent customers toward calls, forms, and booked appointments.",
    proof: "Campaigns point to a clear offer and a fast response workflow instead of sending leads into a dead end.",
    whiteGloveOutcome: "We connect paid demand to the follow-up system that can actually catch it.",
    whiteGlove: [
      "Shape the offer, landing page, and follow-up path before spend scales.",
      "Route paid inquiries into calls, texts, forms, and booking workflows.",
      "Report on qualified opportunities, not vanity traffic.",
    ],
    selfServeNote: "Advertising is a guided or white-glove workflow because offer, tracking, and follow-up need coordination.",
    industryUseCases: [
      "Send urgent or high-value service traffic to a page built for conversion.",
      "Make sure paid inquiries trigger fast call, text, or form follow-up.",
      "Track opportunities that came from campaigns instead of only clicks.",
    ],
  },
  {
    slug: "review-management",
    title: "Review Management",
    shortTitle: "Reviews",
    outcome: "get-customers",
    coreOffer: "marketing",
    description: "A repeatable system for collecting more trust signals from happy customers.",
    proof: "Fresh reviews make future customers more comfortable choosing you.",
    whiteGloveOutcome: "We turn good customer moments into public trust without awkward manual chasing.",
    whiteGlove: [
      "Trigger review requests after completed work.",
      "Route unhappy feedback to a private recovery path.",
      "Reuse strong proof across your website, social media, and sales follow-up.",
    ],
    selfServeNote: "Review workflows are available as part of the marketing layer and can be paired with white-glove follow-up.",
    industryUseCases: [
      "Ask for reviews right after a successful appointment, job, or service visit.",
      "Build social proof for customers comparing you against competitors.",
      "Route poor experiences to a recovery path before they become public reviews.",
    ],
    selfServe: { label: "View marketing plans", href: "/services/marketing/" },
  },
  {
    slug: "project-showcases",
    title: "Project Showcases",
    shortTitle: "Showcases",
    outcome: "get-customers",
    coreOffer: "website",
    description: "Before-and-after proof, portfolio pages, and service examples that help customers believe you can do the work.",
    proof: "Real work becomes a sales asset instead of staying buried in photos, texts, and folders.",
    whiteGloveOutcome: "We turn completed work into trust-building proof across your website and marketing.",
    whiteGlove: [
      "Collect photos, project details, outcomes, and customer context.",
      "Publish showcase pages that support search, ads, and sales follow-up.",
      "Repurpose proof into social posts, review prompts, and sales assets.",
    ],
    selfServeNote: "Showcases usually run through the website layer, with guided content collection.",
    industryUseCases: [
      "Show examples of completed jobs, transformations, repairs, or customer results.",
      "Help prospects understand quality and fit before they request an estimate.",
      "Use real project proof in follow-up when a lead asks for examples.",
    ],
    selfServe: { label: "View Evolving Web Application", href: "/services/website-design-hosting/" },
  },
  {
    slug: "ai-voice",
    title: "AI Voice",
    shortTitle: "Voice AI",
    outcome: "win-customers",
    coreOffer: "voice",
    description: "An AI phone agent that answers routine calls, captures details, and hands your team clean notes.",
    proof: "The call gets answered even when the owner, front desk, or field team is busy.",
    whiteGloveOutcome: "We turn missed or rushed calls into structured opportunities your team can act on.",
    whiteGlove: [
      "Design call flows around your services, urgency rules, and escalation needs.",
      "Finalize the agent with approved answers and handoff instructions.",
      "Configure and build required custom integrations for the agreed voice workflow, and test the connected call flow.",
      "Review recordings and improve the experience over time.",
    ],
    selfServeNote: "Voice AI includes agent configuration, custom integrations needed for the agreed voice workflow, connected testing, and launch preparation. Share your requirements and approve the call behavior; Cyber Genie handles the technical work.",
    industryUseCases: [
      "Answer after-hours calls, busy-hour calls, and repetitive questions.",
      "Collect caller details, need, urgency, timing, and callback information.",
      "Escalate urgent cases while logging routine requests for follow-up.",
    ],
    selfServe: { label: "Request a free demo", href: `${brand.appUrl}/login?service=voice` },
  },
  {
    slug: "request-pipeline",
    title: "Request Pipeline",
    shortTitle: "Pipeline",
    outcome: "win-customers",
    coreOffer: "sales-ops",
    description: "A clear intake board for every call, form, text, quote request, and appointment opportunity.",
    proof: "Every request has a status, owner, and next step instead of floating across voicemail, inboxes, and notes.",
    whiteGloveOutcome: "We make the sales pipeline visible and actionable without forcing the owner to become a CRM admin.",
    whiteGlove: [
      "Capture requests from calls, texts, forms, and campaigns.",
      "Sort opportunities by urgency, service type, source, and next step.",
      "Surface stuck requests before they become lost revenue.",
    ],
    selfServeNote: "Every active paid Cyber Genie service includes the standard Customer OS pipeline. Technology Partner can configure purpose-built CRM tools and connect them to the rest of the customer journey.",
    industryUseCases: [
      "Track new estimates, urgent requests, routine questions, and callback promises.",
      "Separate hot opportunities from lower-priority follow-up.",
      "Give the owner a single place to see what still needs action.",
    ],
  },
  {
    slug: "scheduling",
    title: "Scheduling",
    shortTitle: "Scheduling",
    outcome: "win-customers",
    coreOffer: "sales-ops",
    description: "Booking, confirmations, reschedules, and reminders that keep the calendar moving.",
    proof: "More inquiries become appointments because the next step is easy and immediate.",
    whiteGloveOutcome: "We remove the back-and-forth between interest and a confirmed appointment.",
    whiteGlove: [
      "Define booking rules, service windows, and escalation paths.",
      "Connect calls, texts, forms, and calendars into one scheduling workflow.",
      "Reduce no-shows with reminders and recovery follow-up.",
    ],
    selfServeNote: "Scheduling can be attached to Voice AI or handled as part of a guided sales operations workflow.",
    industryUseCases: [
      "Book estimates, consultations, tours, inspections, service windows, or callbacks.",
      "Send confirmations, reminders, and reschedule prompts.",
      "Apply business rules before a slot is promised.",
    ],
  },
  {
    slug: "quoting-follow-up",
    title: "Quoting & Follow-Up",
    shortTitle: "Quoting",
    outcome: "win-customers",
    coreOffer: "sales-ops",
    description: "Estimate reminders, quote follow-up, and sales nudges so interested customers do not drift away.",
    proof: "Every estimate request has a clear owner, status, and next touch.",
    whiteGloveOutcome: "We keep qualified opportunities moving after the first conversation.",
    whiteGlove: [
      "Turn intake details into quote-ready handoffs.",
      "Send polite follow-up after estimates, proposals, and consultations.",
      "Surface stalled opportunities before they are forgotten.",
    ],
    selfServeNote: "Quote follow-up is usually white-glove because tone, timing, and approval rules matter.",
    industryUseCases: [
      "Follow up on estimates that were sent but not accepted.",
      "Prompt customers who asked for pricing but did not book.",
      "Remind the team which quote or proposal needs the next touch.",
    ],
  },
  {
    slug: "sales-assistant",
    title: "Sales Assistant",
    shortTitle: "Sales Assistant",
    outcome: "win-customers",
    coreOffer: "sales-ops",
    description: "AI-assisted replies, summaries, and next-step prompts that help your team respond like nothing slipped.",
    proof: "The team gets useful context before calling back, replying, or sending the next message.",
    whiteGloveOutcome: "We give the business a practical sales helper that supports follow-up without pretending to replace judgment.",
    whiteGlove: [
      "Summarize conversations, caller details, and open opportunities.",
      "Draft replies and next-step prompts for review or automation.",
      "Flag unanswered questions and missing information before follow-up.",
    ],
    selfServeNote: "Sales assistant workflows are configured around each business and usually start as guided or white-glove.",
    industryUseCases: [
      "Summarize why a customer called and what they need next.",
      "Draft callback notes, reply suggestions, and follow-up reminders.",
      "Help the owner or front desk respond with the right context.",
    ],
  },
  {
    slug: "customer-management",
    title: "Customer OS CRM",
    shortTitle: "CRM",
    outcome: "keep-customers",
    coreOffer: "customer-ops",
    description: "An included workspace for contacts, opportunities, follow-up tasks, notes, and customer context.",
    proof: "Every active Cyber Genie customer gets a practical CRM foundation without adding another subscription.",
    whiteGloveOutcome: "We keep the standard CRM useful and can extend it when your operating workflow needs more.",
    whiteGlove: [
      "Structure customer records around your real workflow.",
      "Turn calls, texts, forms, and notes into useful tasks or updates.",
      "Send owner-friendly summaries of what needs attention.",
    ],
    selfServeNote: "Customer OS is included while any Cyber Genie paid service is active. Technology Partner can manage specialized CRM tools, custom records, permissions, automations, dashboards, and connected business rules.",
    industryUseCases: [
      "Keep contact details, service history, requests, and notes organized.",
      "Give the team context before the next visit or conversation.",
      "Reduce repeat questions and scattered customer information.",
    ],
    selfServe: { label: "Sign in to Customer OS", href: `${brand.appUrl}/login` },
  },
  {
    slug: "project-updates",
    title: "Project Updates",
    shortTitle: "Updates",
    outcome: "keep-customers",
    coreOffer: "customer-ops",
    description: "Status updates, reminders, and customer communication that keep work moving after a job is booked.",
    proof: "Customers know what is happening, and the team knows what still needs to be communicated.",
    whiteGloveOutcome: "We make service delivery feel more organized without adding manual message work.",
    whiteGlove: [
      "Define the updates customers should receive at each stage.",
      "Trigger reminders, status messages, and internal alerts.",
      "Keep customer-facing communication consistent and professional.",
    ],
    selfServeNote: "Project updates are white-glove or guided because each business has different stages and promises.",
    industryUseCases: [
      "Send appointment, arrival, delay, completion, and next-step updates.",
      "Keep customers informed during multi-step jobs or projects.",
      "Reduce inbound status-check calls by communicating proactively.",
    ],
  },
  {
    slug: "photo-document-management",
    title: "Photo & Document Management",
    shortTitle: "Photos & Docs",
    outcome: "keep-customers",
    coreOffer: "customer-ops",
    description: "Photos, files, forms, before-and-after proof, and customer documents organized where the team can find them.",
    proof: "Proof and paperwork stop living in random text threads, folders, and camera rolls.",
    whiteGloveOutcome: "We turn operational evidence into organized customer context and reusable proof.",
    whiteGlove: [
      "Collect photos, files, forms, and notes into the right customer or job record.",
      "Separate internal documentation from public-facing showcase proof.",
      "Make documents easier to find for follow-up, billing, and customer communication.",
    ],
    selfServeNote: "Document workflows are usually custom because sources and permissions differ by business.",
    industryUseCases: [
      "Organize job photos, inspection notes, forms, invoices, and customer attachments.",
      "Preserve before-and-after proof for reviews, showcases, or follow-up.",
      "Help office staff find the right file without asking the field team again.",
    ],
  },
  {
    slug: "invoicing-payments",
    title: "Invoicing + Payments",
    shortTitle: "Payments",
    outcome: "keep-customers",
    coreOffer: "customer-ops",
    description: "Deposit collection, invoice reminders, payment links, and follow-up that make getting paid less awkward.",
    proof: "The money conversation becomes consistent without the owner personally chasing every balance.",
    whiteGloveOutcome: "We make payment follow-up consistent, polite, and visible.",
    whiteGlove: [
      "Create clear payment request and reminder workflows.",
      "Route overdue balances to the right human review point.",
      "Track payment follow-up alongside the customer relationship.",
    ],
    selfServeNote: "Payment workflows can be connected to existing payment tools, with guided setup for tone and approval rules.",
    industryUseCases: [
      "Send deposit, invoice, balance, and overdue-payment reminders.",
      "Include payment links and clear next steps when appropriate.",
      "Escalate sensitive balances to a human before follow-up gets too firm.",
    ],
  },
  {
    slug: "reviews-referrals",
    title: "Reviews + Referrals",
    shortTitle: "Referrals",
    outcome: "keep-customers",
    coreOffer: "marketing",
    description: "Post-job review requests, testimonial capture, and referral prompts that turn completed work into proof.",
    proof: "Good work creates public trust and warmer future opportunities.",
    whiteGloveOutcome: "We turn happy customers into reviews, referrals, and proof for future sales.",
    whiteGlove: [
      "Ask at the right moment after a positive job or appointment.",
      "Capture testimonials and before/after proof where useful.",
      "Create a simple referral loop for happy customers.",
    ],
    selfServeNote: "We configure the agreed review and referral workflow as part of its managed service scope.",
    industryUseCases: [
      "Ask satisfied customers for a review after the job is complete.",
      "Prompt referrals when the customer experience is fresh.",
      "Reuse testimonials and proof in future Get Customer workflows.",
    ],
    selfServe: { label: "View marketing plans", href: "/services/marketing/" },
  },
  {
    slug: "reactivation",
    title: "Reactivation",
    shortTitle: "Reactivation",
    outcome: "keep-customers",
    coreOffer: "marketing",
    description: "Seasonal reminders and win-back campaigns that bring past customers back when they are ready again.",
    proof: "Your existing customer list becomes a source of repeat business.",
    whiteGloveOutcome: "We turn old customer relationships into timely, useful reasons to come back.",
    whiteGlove: [
      "Segment customers by service, timing, and likely next need.",
      "Send useful reminders before seasonal or repeat-service windows.",
      "Route replies into booking, quoting, or human follow-up.",
    ],
    selfServeNote: "Reactivation can run through marketing workflows, with guided setup for lists, timing, and messaging.",
    industryUseCases: [
      "Remind past customers when it is time for maintenance, renewal, or seasonal service.",
      "Win back customers who have not booked in a while.",
      "Route replies directly into scheduling or quote follow-up.",
    ],
    selfServe: { label: "View marketing plans", href: "/services/marketing/" },
  },
];

export const solutionPageDetails: Record<string, SolutionPageDetail> = {
  "optimized-website": {
    warningSigns: [
      "Customers still call to ask questions the website should answer.",
      "Important services, locations, or proof are hard to find on mobile.",
      "The site looks finished but does not produce useful inquiries.",
    ],
    firstMilestone: "Map the visitor's main decision, then rebuild the highest-intent path from landing page to inquiry.",
  },
  "local-ai-search-visibility": {
    warningSigns: [
      "The business appears for its name but not for the services customers search for.",
      "Locations or service areas are described too vaguely for search engines and buyers.",
      "The website does not directly answer the questions prospects ask before contacting you.",
    ],
    firstMilestone: "Identify the highest-value service and location searches, then publish one complete answer-focused content cluster.",
  },
  "social-media-management": {
    warningSigns: [
      "Posting stops whenever the owner or team gets busy.",
      "Strong work and customer questions never become reusable content.",
      "Every channel sounds disconnected from the website and current offers.",
    ],
    firstMilestone: "Turn one month of services, proof, questions, and seasonal priorities into an approved cross-channel calendar.",
  },
  "digital-advertising": {
    warningSigns: [
      "Paid clicks arrive on a generic page with no focused next step.",
      "The team cannot tell which campaign produced a qualified inquiry.",
      "Leads wait too long for a reply after completing an ad form.",
    ],
    firstMilestone: "Connect one high-intent campaign to a dedicated landing page, tracked conversion, and owned follow-up path.",
  },
  "review-management": {
    warningSigns: [
      "Happy customers are rarely asked for a review at the right moment.",
      "Negative feedback reaches public channels before the team can respond.",
      "Review requests are inconsistent across locations or staff members.",
    ],
    firstMilestone: "Choose one reliable completion event and automate an appropriate review or service-recovery request from it.",
  },
  "project-showcases": {
    warningSigns: [
      "Prospects cannot quickly see examples similar to the work they need.",
      "Before-and-after photos live in phones or folders instead of the website.",
      "The strongest completed work lacks context about the problem and result.",
    ],
    firstMilestone: "Publish a structured showcase for one representative project with credible images, scope, and decision-making context.",
  },
  "ai-voice": {
    warningSigns: [
      "Routine and after-hours calls regularly reach voicemail.",
      "Staff repeat the same intake questions without producing consistent notes.",
      "Callers do not know when to expect a human response.",
    ],
    firstMilestone: "Build and test one approved call path that collects useful context and hands urgent or complex calls to staff.",
  },
  "request-pipeline": {
    warningSigns: [
      "Calls, forms, texts, and referrals create separate lists of work.",
      "No one can see who owns the next customer action.",
      "Qualified requests disappear between intake, estimate, and scheduling.",
    ],
    firstMilestone: "Define the shared request stages, owner, required context, and next action for one customer journey.",
  },
  scheduling: {
    warningSigns: [
      "Bookings require repeated calls or messages to confirm availability.",
      "Different appointment types follow undocumented rules.",
      "Reschedules and reminders create avoidable manual work.",
    ],
    firstMilestone: "Document one appointment type end to end, including availability, confirmation, reminders, and exception handling.",
  },
  "quoting-follow-up": {
    warningSigns: [
      "Sent estimates have no consistent owner or follow-up date.",
      "Customers ask for information already buried in the proposal.",
      "The team cannot distinguish an undecided prospect from a lost opportunity.",
    ],
    firstMilestone: "Create one visible quote stage with delivery, acknowledgment, reminder, and decision outcomes.",
  },
  "sales-assistant": {
    warningSigns: [
      "Sales replies vary depending on who happens to answer.",
      "Conversation context is lost before the next team member responds.",
      "Follow-up depends on memory rather than an approved process.",
    ],
    firstMilestone: "Give one team an approved answer library, conversation summary, and next-step prompt inside its existing workflow.",
  },
  "customer-management": {
    warningSigns: [
      "Customer history is split across spreadsheets, inboxes, and staff memory.",
      "Teams cannot see the latest promise, request, or responsible owner.",
      "A generic CRM adds fields without matching how the business actually works.",
    ],
    firstMilestone: "Define the minimum customer record and one real workflow the team must be able to complete from it.",
  },
  "project-updates": {
    warningSigns: [
      "Customers call for status because updates are inconsistent.",
      "Milestones and handoffs are clear internally but invisible to the customer.",
      "Staff recreate similar update messages for every job.",
    ],
    firstMilestone: "Choose one meaningful milestone and send a timely update with status, next step, and responsible contact.",
  },
  "photo-document-management": {
    warningSigns: [
      "Photos and documents are stored by person instead of by customer or job.",
      "The team cannot reliably find the latest approved file.",
      "Proof collected in the field never reaches billing, service, or marketing.",
    ],
    firstMilestone: "Create one searchable customer or project record with required file types, ownership, and approval status.",
  },
  "invoicing-payments": {
    warningSigns: [
      "Completed work waits too long before an invoice or payment request is sent.",
      "Staff manually chase balances without a clear reminder sequence.",
      "Payment status is disconnected from the customer and service record.",
    ],
    firstMilestone: "Connect one completion event to an accurate payment request, reminder sequence, and visible account status.",
  },
  "reviews-referrals": {
    warningSigns: [
      "The business asks for referrals inconsistently or too late.",
      "Satisfied customers receive the same message as unresolved customers.",
      "Referral sources are not preserved through intake and follow-up.",
    ],
    firstMilestone: "Define one satisfaction signal and trigger a review or referral request that preserves source and customer context.",
  },
  reactivation: {
    warningSigns: [
      "Past customers are contacted only when the schedule becomes quiet.",
      "Seasonal, renewal, or repeat-service dates are not organized.",
      "Replies to win-back campaigns do not flow into booking or follow-up.",
    ],
    firstMilestone: "Select one timely customer segment and connect a useful reminder to a clear booking or human-response path.",
  },
};

export const solutionItemsByCategory = (categorySlug: OutcomeSlug) =>
  solutionItems.filter((item) => item.outcome === categorySlug);

export const outcomeCategoryBySlug = (slug: string | undefined) =>
  outcomeCategories.find((category) => category.slug === slug);

export const solutionItemBySlug = (categorySlug: string | undefined, itemSlug: string | undefined) =>
  solutionItems.find((item) => item.outcome === categorySlug && item.slug === itemSlug);

export const voiceAiPricing = { monthly: 39.99, perMinute: 0.20 } as const;

export const voicePricingSummary = {
  description: "An AI receptionist for calls, intake, and team handoff.",
  billingNote: "Free personalized demo. Live service is billed monthly plus usage.",
  scopeNote: "Use on its own or with other services. Larger deployments are scoped separately.",
  features: [
    "Custom workflow setup and integrations",
    "Call-flow testing and launch setup",
    "Calendar booking and custom knowledge base",
    "20+ languages and 10+ voices",
    "Spam detection and dedicated phone numbers",
    "Natural conversations with interruption support",
    "Full call recording playback",
  ],
};

export const individualServiceOffers = [
  {
    name: "Social Media Management",
    price: socialMediaPlans[0].price,
    detail: `${socialMediaPlans[0].detail} managed plan`,
    href: "/services/marketing/",
    cta: "View social plans",
    description: socialMediaPlans[0].description,
    setupNote: `${socialMediaPlans[0].name} includes custom posts, reels, client review, scheduling, and publishing across your agreed channels.`,
  },
  {
    name: "Voice AI",
    price: `$${voiceAiPricing.monthly.toFixed(2)}`,
    detail: `/mo + $${voiceAiPricing.perMinute.toFixed(2)}/min`,
    href: "/services/voice/",
    cta: "Request a free demo",
    description: "An AI phone agent for routine calls, intake, and handoff notes.",
    setupNote: `Request a personalized demo first. Live service starts at $${voiceAiPricing.monthly.toFixed(2)}/month plus $${voiceAiPricing.perMinute.toFixed(2)} per AI phone minute.`,
  },
];

const industryItemSelection: Record<OutcomeSlug, string[]> = {
  "get-customers": ["optimized-website", "local-ai-search-visibility", "review-management", "project-showcases"],
  "win-customers": ["ai-voice", "request-pipeline", "scheduling"],
  "keep-customers": ["customer-management", "project-updates", "invoicing-payments", "reviews-referrals"],
};

export const getIndustryOutcomeSections = (industry: VoiceIndustry) =>
  outcomeCategories.map((category) => {
    const industrySection = industry.outcomeSections?.find((section) => section.outcome === category.slug);
    const entries = industrySection?.entries ??
      industryItemSelection[category.slug].map((itemSlug) => ({ itemSlug, displayTitle: undefined, useCase: undefined }));

    return {
      category,
      linkLabel: industrySection?.linkLabel,
      headline:
        industrySection?.headline ??
        (category.slug === "get-customers"
          ? "Help customers find and trust your business."
          : category.slug === "win-customers"
            ? "Turn new inquiries into booked next steps."
            : "Keep customers organized after the job starts."),
      entries: entries
        .map(({ itemSlug, displayTitle, useCase }) => {
          const item = solutionItems.find(
            (candidate) => candidate.outcome === category.slug && candidate.slug === itemSlug,
          );

          return item
            ? {
                item,
                displayTitle,
                useCase: useCase ?? item.industryUseCases[0],
              }
            : undefined;
        })
        .filter(
          (entry): entry is { item: SolutionItem; displayTitle: string | undefined; useCase: string } =>
            Boolean(entry),
        ),
    };
  });
