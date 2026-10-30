const socialLinks = [
  { name: "LinkedIn", icon: "linkedin", url: "https://www.linkedin.com/company/getcybergenie/" },
  { name: "Facebook", icon: "facebook", url: "https://www.facebook.com/getcybergenie/" },
  { name: "Instagram", icon: "instagram", url: "https://www.instagram.com/getcybergenie/" },
  { name: "Threads", icon: "threads", url: "https://www.threads.com/@getcybergenie" },
] as const;

export const brand = {
  name: "Cyber Genie",
  origin: "https://getcybergenie.com",
  publicEmail: "hello@getcybergenie.com",
  legalName: "FK Innovation Partners LLC",
  legacyName: "FK Innovate",
  continuity: "Cyber Genie by FK Innovate",
  appUrl: "https://app.getcybergenie.com",
  calendlyUrl: "https://calendly.com/jove-fkcapital/30min",
  socialLinks,
  socialProfiles: socialLinks.map(({ url }) => url),
} as const;
