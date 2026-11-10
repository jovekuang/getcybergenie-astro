import { bruceShowcase } from "./showcases";
import edenElevationsImage from "../../assets/customer-stories/eden-elevations-current-site.jpg";
import edenElevationsVideo from "../../assets/customer-stories/eden-elevations-hero.mp4?url";
import edenElevationsPoster from "../../assets/customer-stories/eden-elevations-poster.jpg";
import guideCover from "../../assets/customer-stories/guide-cover.jpg";
import bruceHeadshot from "../../assets/customer-stories/bruce-edwards-headshot.jpg";
import type { CaseStudy } from "./types";

export const edenElevations: CaseStudy = {
  publication: { date: "2026-11-06", consent: "approved" },
  slug: "eden-elevations-3",
  showcase: bruceShowcase,
  client: "Eden Elevations 3",
  person: "Bruce",
  sector: "Multifamily real estate investment",
  "title": "Bruce wanted a website that could start the next conversation.",
  "intro": "Bruce wanted Eden Elevations 3 to make a distinctive first impression and give interested visitors a clear next step. The website needed to introduce the firm, offer useful resources, and keep incoming interest connected to his follow-up.",
  "summary": "How Bruce brought a modern website, a scrolling hero, useful lead magnets, and CRM capture into one connected visitor journey.",
  image: edenElevationsImage,
  "imageAlt": "Screenshot of the current Eden Elevations 3 homepage, showing its scrolling hero and investor sign-up links",
  theme: "property",
  "imageCaption": "The current Eden Elevations 3 homepage.",
  "startingTitle": "A strong first impression needed somewhere to lead.",
  "deliveryTitle": "What changed for Bruce.",
  "storyQuotes": {
    "challenge": "I wanted a website that reflects the business and gives interested visitors a clear way to connect.",
    "ongoing": "When someone asks for the guide or wants to hear about opportunities, I want their details in one place so I can follow up."
  },
  "support": {
    "kicker": "The next conversation",
    "title": "Keep the inquiry with what sparked it.",
    "body": "The next step for Bruce is a conversation. The lead forms capture the visitor’s details along with the source of the inquiry, such as the tax guide or First Look Club. That context stays with the lead record in the CRM, helping him pick up the conversation from what the person asked for."
  },
  useCases: ["Websites", "CRM & lead capture"],
  comparedTo: [{ product: "squarespace" }, { product: "hubspot" }],
  services: ["Modern website design", "Scroll-controlled hero", "Lead magnets & forms", "CRM integration"],
  "challenge": "Bruce wanted the website to reflect Eden Elevations 3 and make it easy for a visitor to begin a conversation. That meant bringing the visual experience, the firm’s story, and the ways to register interest together, with a place to keep the details needed for follow-up.",
  "approach": "We built those parts as one journey. The scroll-controlled hero gives the website a distinctive opening. The tax guide, First Look Club, and call-booking links offer clear next steps, while the lead forms connect submitted details and their source to Cyber Genie’s CRM.",
  "featureTitle": "A first impression visitors move through.",
  "featureBody": "Bruce’s website opens with a walkthrough effect tied to the visitor’s scroll position. As someone moves down the page, the sequence advances into the firm’s story and the ways to connect. The visual treatment introduces the business while the rest of the page supports the next step.",
  video: edenElevationsVideo,
  poster: edenElevationsPoster,
  videoCaption: "Original sequence used in the Eden Elevations 3 scrolling hero. Play to see the footage; the client website controls it through scrolling. This clip is silent.",
  details: [
    { title: "A modern brand presence", body: "A cohesive website introduces the firm, its investment approach, and the next steps available to interested visitors." },
    { title: "Useful reasons to connect", body: "The “Keep More of What You Earn” PDF gives visitors a practical educational resource to request. The First Look Club offers another entry point for people interested in future opportunities." },
    { title: "A secure home for lead details", body: "The forms connect to the CRM we provide, keeping submitted contact details and their source together for follow-up. The CRM is designed around signed-in, business-specific access to customer records." },
    { title: "A distinctive scrolling experience", body: "The opening video advances with the page scroll, adding a walkthrough effect that makes the website’s introduction memorable." },
  ],
  "journeyTitle": "From a first visit to a conversation with context.",
  journey: [
    { label: "Explore the website", body: "An immersive hero leads into the firm’s story and investment approach." },
    { label: "Choose a next step", body: "Request the tax guide, join the First Look Club, or book a call." },
    { label: "Keep the context", body: "Lead details and their source flow to the CRM for Bruce’s follow-up." },
  ],
  "outcome": "Bruce now has a website that brings the firm’s visual identity and lead-capture journey together. Visitors have useful ways to register interest, and the connected CRM gives him a place to keep that interest and its source together for follow-up.",
  "takeaway": "A website that opens the door to the next conversation.",
  website: "https://edenelevations3.com/",
  guide: guideCover,
  proposedQuote: {
    text: "Cyber Genie gave us a website that stands out and a connected way to capture interest, so I can focus on the next conversation.",
    name: "Bruce Edwards",
    role: "Founder & Managing Partner, Eden Elevations 3",
    linkedinUrl: "https://www.linkedin.com/in/bruce-edwards-edenelevations3/",
    headshot: bruceHeadshot,
    imageShape: "circle",
    imageScale: 1.38,
    imageOrigin: "50% 0%",
    approvalName: "Bruce",
    approval: "approved",
  },
};
