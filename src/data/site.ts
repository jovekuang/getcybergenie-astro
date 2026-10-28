import { brand } from "./brand";
import { customerOsFeature } from "./positioning";
export const appUrl = brand.appUrl;
export const calendlyUrl = brand.calendlyUrl;

export const absoluteSiteUrl = (path: string) => {
  const url = new URL(path, brand.origin);
  if (!url.pathname.endsWith("/") && !url.pathname.split("/").at(-1)?.includes(".")) {
    url.pathname += "/";
  }
  return url.toString();
};

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${brand.origin}/#organization`,
  name: brand.name,
  legalName: brand.legalName,
  alternateName: brand.legacyName,
  url: brand.origin,
  logo: {
    "@type": "ImageObject",
    url: `${brand.origin}/brand-logo.svg`,
  },
  sameAs: brand.socialProfiles,
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${brand.origin}/#website`,
  name: brand.name,
  alternateName: brand.legacyName,
  url: `${brand.origin}/`,
  publisher: { "@id": `${brand.origin}/#organization` },
};

export const createBreadcrumbSchema = (items: Array<{ name: string; path: string }>) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: item.name,
    item: absoluteSiteUrl(item.path),
  })),
});

export const createServiceSchema = ({
  name,
  description,
  serviceType,
  path,
}: {
  name: string;
  description: string;
  serviceType: string;
  path: string;
}) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  name,
  description,
  serviceType,
  provider: { "@id": `${brand.origin}/#organization` },
  areaServed: "United States",
  url: absoluteSiteUrl(path),
});

export const createFaqSchema = (items: Array<{ question: string; answer: string }>) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: items.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
});

export const voiceFeatures = [
  customerOsFeature,
  "20+ language support",
  "Voice agent built and finalized around your agreed call workflow",
  "Configuration and custom integrations needed for the agreed voice workflow",
  "Connected call-flow testing and launch preparation handled by Cyber Genie",
  "Calendar integrations for booking meetings",
  "Custom knowledge base and training files",
  "10+ agent voices",
  "Spam detection",
  "Dedicated phone numbers",
  "Natural conversations",
  "Interruption support",
  "Full recording playback",
];
