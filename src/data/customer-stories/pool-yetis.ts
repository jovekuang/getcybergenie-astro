import { poolShowcase } from "./showcases";
import poolYetisWebsite from "../../assets/customer-stories/pool-yetis-current-site.jpg";
import poolYetisWordmark from "../../assets/customer-stories/pool-yetis-wordmark.png";
import type { CaseStudy } from "./types";

export const poolYetis: CaseStudy = {
  showcase: poolShowcase,
  publication: { date: "2026-11-04", consent: "approved" },
  "slug": "pool-yetis",
  "client": "Pool Yeti’s",
  "person": "Tim",
  "sector": "Local pool care & repair",
  "title": "Tim wanted one place to serve his customers better.",
  "intro": "Tim partners with Yelp, Angie’s List, and other platforms for his pool service company. He wanted one place to manage the inquiries from those partnerships, a text alert when a new request arrived, and a way to keep the conversation going after the first reply.",
  "summary": "How Tim brought customer inquiries from the platforms Pool Yeti’s partners with into one workspace, with immediate SMS alerts and ongoing follow-up.",
  "image": poolYetisWebsite,
  "imageAlt": "The Pool Yeti’s homepage, with its blue wordmark, pool-care messaging, and illustrated Yeti mascot.",
  "theme": "pool",
  "imageCaption": "The public Pool Yeti’s website introduces its local pool-care services.",
  useCases: ["CRM & lead capture", "Follow-up & alerts"],
  comparedTo: [{ product: "housecall-pro" }, { product: "highlevel" }],
  "services": [
    "Connected customer inquiries",
    "Shared lead workspace",
    "Instant SMS alerts",
    "Follow-up plans",
    "Promotional follow-up"
  ],
  "startingTitle": "Several partnerships. One shared view.",
  "challenge": "Each platform has its own way of delivering inquiries, which meant Tim was moving between inboxes to manage new requests. He wanted a shared view that made it easier to respond promptly, keep customer details organized, and plan the next follow-up.",
  "approach": "Cyber Genie built a custom system around that workflow. Inquiries from the connected platforms flow into one workspace, new inquiries trigger an immediate SMS alert to Tim, and the same interface supports managing the conversation and staying in touch over time.",
  "storyQuotes": {
    "challenge": "I wanted one place to see and manage the customer inquiries coming through the different platforms we work with.",
    "ongoing": "I wanted to keep the conversation going after the first reply and have an organized way to follow up when the timing was right."
  },
  "featureLabel": "The customer inquiry workflow",
  "featureTitle": "A new inquiry. A text to Tim. One place to take it from there.",
  "featureBody": "The system brings inquiries from the platforms connected to Pool Yeti’s into one shared view. When a new inquiry comes in, it sends Tim an SMS notification. Tim can review and manage the conversation through one interface, with the contact kept in the database for future follow-up.",
  "websiteLabel": "Explore Pool Yeti’s",
  "featureFlow": [
    {
      "title": "Bring the inquiries together",
      "body": "Customer inquiries from Yelp, Angie’s List, and other connected platforms enter the shared workspace."
    },
    {
      "title": "Notify Tim right away",
      "body": "An SMS alert lets Tim know that a new customer inquiry has arrived."
    },
    {
      "title": "Manage the conversation",
      "body": "One interface gives Tim a place to review and manage customer inquiries."
    },
    {
      "title": "Keep the contact connected",
      "body": "A shared contact database supports nurture plans and promotional follow-up over time."
    }
  ],
  "featureCaption": "From an inquiry through a partner platform to the next follow-up.",
  "deliveryTitle": "What changed for Tim.",
  "details": [
    {
      "title": "One view across platform partnerships",
      "body": "Inquiries come together in one workspace, so Tim can manage conversations across the platforms his business works with."
    },
    {
      "title": "An immediate alert for a new inquiry",
      "body": "Tim receives a text as a new inquiry arrives, helping him stay aware of new requests across the connected platforms."
    },
    {
      "title": "An organized record beyond the first reply",
      "body": "Contacts stay in one place after the initial conversation, giving Tim a consistent record for building ongoing customer relationships."
    },
    {
      "title": "Follow-up that continues over time",
      "body": "Tim can set up nurture plans to reconnect over a period of time, or share promotional offers with relevant contacts."
    }
  ],
  "support": {
    "kicker": "After the first reply",
    "title": "Keep building the customer relationship.",
    "body": "The shared database gives Tim a way to keep customer details together after the initial conversation. He can set up follow-up plans over time or reconnect with a relevant promotional offer, with the history of the inquiry in one place."
  },
  "journeyTitle": "One connected workflow for customer inquiries.",
  "journey": [
    {
      "label": "Connect the inquiry",
      "body": "Bring inquiries from partner platforms into the shared workspace."
    },
    {
      "label": "Keep Tim informed",
      "body": "Notify Tim by SMS and give him one interface to review and manage the conversation."
    },
    {
      "label": "Continue the relationship",
      "body": "Keep the contact in the database and use nurture plans or promotional follow-up to reconnect."
    }
  ],
  "takeaway": "One workspace to keep his customer relationships moving.",
  "outcome": "Tim has one workspace for inquiries from the platforms Pool Yeti’s works with. Immediate SMS alerts help him stay informed about new requests, and the shared contact database gives him a consistent way to continue the conversation with follow-up plans and relevant promotional offers.",
  "website": "https://www.poolyetis.com/",
  "proposedQuote": {
    "text": "Cyber Genie brought our customer inquiries into one place. I get a text when a new request arrives, and I can keep the conversation going without jumping between platforms.",
    "name": "Tim",
    "role": "Pool Yeti’s",
    "linkedinUrl": "https://www.linkedin.com/in/timyoung2/",
    "headshot": poolYetisWordmark,
    "imageKind": "brand",
    "imageAlt": "Pool Yeti’s wordmark",
    "approvalName": "Tim",
    "approval": "approved"
  }
};
