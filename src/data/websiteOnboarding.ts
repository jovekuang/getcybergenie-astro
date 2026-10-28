export const websitePlanSlugs = ["essential-website", "evolving-website"] as const;

export type WebsitePlanSlug = (typeof websitePlanSlugs)[number];

export type OnboardingOption = {
  value: string;
  label: string;
};

export const websitePlanLabels: Record<WebsitePlanSlug, string> = {
  "essential-website": "Essential Website",
  "evolving-website": "Evolving Web Application",
};

export const pageCountOptions: OnboardingOption[] = [
  { value: "1-5", label: "1-5 pages" },
  { value: "6-10", label: "6-10 pages" },
  { value: "11-20", label: "11-20 pages" },
  { value: "more-than-20", label: "More than 20 pages" },
  { value: "not-sure", label: "Not sure yet" },
];

export const outcomeOptions: OnboardingOption[] = [
  { value: "get-found-online", label: "Get found online" },
  { value: "explain-services", label: "Explain services clearly" },
  { value: "generate-inquiries", label: "Generate inquiries or quote requests" },
  { value: "book-appointments", label: "Book appointments" },
  { value: "sell-or-collect-payments", label: "Sell products or collect payments" },
  { value: "build-trust", label: "Build trust with reviews or examples" },
  { value: "publish-content", label: "Publish updates or educational content" },
  { value: "other", label: "Something else" },
];

export const materialOptions: OnboardingOption[] = [
  { value: "domain", label: "Domain" },
  { value: "logo", label: "Logo" },
  { value: "brand-colors", label: "Brand colors" },
  { value: "written-copy", label: "Written copy" },
  { value: "photos", label: "Photos" },
  { value: "social-media-profiles", label: "Social media profiles" },
  { value: "none-yet", label: "None yet" },
];

export const capabilityOptions: OnboardingOption[] = [
  { value: "contact-or-quote-forms", label: "Contact or quote forms" },
  { value: "appointment-scheduling", label: "Appointment scheduling" },
  { value: "email-marketing-or-crm", label: "Email marketing or CRM" },
  { value: "payments-or-ecommerce", label: "Payments or ecommerce" },
  { value: "reviews-or-testimonials", label: "Reviews or testimonials" },
  { value: "analytics-or-advertising", label: "Analytics or advertising" },
  { value: "third-party-integration", label: "Web application integrations or backend database support" },
  { value: "customer-login-or-portal", label: "Single sign-on for users or a customer/team portal" },
  { value: "not-sure", label: "Not sure yet" },
];

export const applicationCapabilityValues = [
  "third-party-integration",
  "customer-login-or-portal",
] as const;

export const visualDirectionOptions: OnboardingOption[] = [
  { value: "modern-minimal", label: "Modern and minimal" },
  { value: "classic-timeless", label: "Classic and timeless" },
  { value: "open-expansive", label: "Open and expansive" },
  { value: "premium-luxurious", label: "Premium and luxurious" },
  { value: "bold-expressive", label: "Bold and expressive" },
  { value: "warm-approachable", label: "Warm and approachable" },
  { value: "professional-straightforward", label: "Professional and straightforward" },
  { value: "not-sure", label: "Not sure - recommend a direction" },
  { value: "other", label: "Another direction" },
];

export const labelForOption = (options: OnboardingOption[], value: string) =>
  options.find((option) => option.value === value)?.label ?? value;

export const normalizeWebsitePlan = (value: unknown): WebsitePlanSlug | null =>
  typeof value === "string" && websitePlanSlugs.includes(value as WebsitePlanSlug)
    ? (value as WebsitePlanSlug)
    : null;
