export const comparisonProducts = {
  wix: { name: "Wix", logo: "/icons/story-comparisons/wix.svg", logoIncludesName: true },
  brightwheel: { name: "Brightwheel", logo: "/icons/story-comparisons/brightwheel.svg", logoIncludesName: false },
  godaddy: { name: "GoDaddy", logo: "/icons/story-comparisons/godaddy.png", logoIncludesName: false },
  tripleseat: { name: "Tripleseat", logo: "/icons/story-comparisons/tripleseat.svg", logoIncludesName: true },
  shopify: { name: "Shopify", logo: "/icons/story-comparisons/shopify.svg", logoIncludesName: false },
  mailerlite: { name: "MailerLite", logo: "/icons/story-comparisons/mailerlite.svg", logoIncludesName: true },
  squarespace: { name: "Squarespace", logo: "/icons/story-comparisons/squarespace.svg", logoIncludesName: false },
  hubspot: { name: "HubSpot", logo: "/icons/story-comparisons/hubspot.svg", logoIncludesName: true },
  "housecall-pro": { name: "Housecall Pro", logo: "/icons/story-comparisons/housecall-pro.svg", logoIncludesName: true },
  highlevel: { name: "HighLevel", logo: "/icons/story-comparisons/highlevel.png", logoIncludesName: true },
} as const;

export type ComparisonProduct = keyof typeof comparisonProducts;
