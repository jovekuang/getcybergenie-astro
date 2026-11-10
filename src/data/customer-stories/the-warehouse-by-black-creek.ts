import { warehouseShowcase } from "./showcases";
import warehouseImage from "../../assets/customer-stories/warehouse-current-site.png";
import warehouseMark from "../../assets/customer-stories/warehouse-mark.png";
import warehouseVideo from "../../assets/customer-stories/warehouse-hero.mp4?url";
import warehousePoster from "../../assets/customer-stories/warehouse-poster.webp";
import type { CaseStudy } from "./types";

export const warehouse: CaseStudy = {
  showcase: warehouseShowcase,
  publication: { date: "2026-11-03", consent: "approved" },
  "slug": "the-warehouse-by-black-creek",
  "client": "The Warehouse by Black Creek",
  "person": "Liza Hill",
  "sector": "Event venue · Devine, Texas",
  "title": "Liza was opening a venue. Her website needed to grow with it.",
  titleLines: ["Liza was opening a venue.", "Her website needed to grow with it."],
  "intro": "Liza was preparing to launch The Warehouse by Black Creek in Devine, Texas. She needed an online presence before the doors opened and practical support for reservation requests as the new venue began welcoming guests.",
  "summary": "How Liza built an online presence before launch, then added reservation support as the venue grew, using the system she already had.",
  "image": warehouseImage,
  "imageAlt": "Screenshot of The Warehouse by Black Creek homepage, with an aerial view of the venue and its Gather well hero",
  "theme": "venue",
  "imageCaption": "The Warehouse by Black Creek homepage, with an aerial view of the venue.",
  "deliveryTitle": "What changed for Liza.",
  "storyQuotes": {
    "challenge": "I wanted people to discover the venue before we opened, with a website that could grow with us as we got started.",
    "ongoing": "I wanted to manage reservation requests without buying another software subscription, adding another login, and having another system to connect."
  },
  "support": {
    "kicker": "As inquiries arrive",
    "title": "Keep the reservation work in the same setup.",
    "body": "The reservation tools give staff a place to review requests, place holds, and confirm bookings, connected to customer records. For these agreed needs, Liza can avoid adding a separate venue platform such as Tripleseat, along with another subscription, login, and system to integrate."
  },
  useCases: ["Websites", "Booking & scheduling"],
  "services": [
    "Website design & launch",
    "Search-ready foundations",
    "Reservation request management",
    "Connected venue calendar"
  ],
  "startingTitle": "The venue was taking shape. Its online presence could start early.",
  "challenge": "Liza was creating a new event venue to fill a gap she saw in the Devine market. Before opening, she wanted people to be able to discover the space online. As launch approached, she also needed the website to keep up with the venue and give incoming inquiries a clear next step.",
  "approach": "Cyber Genie joined the work from day one. We designed and launched the website ahead of the venue opening, then continued updating it as the business took shape. When managing reservation requests became the next priority, we added inquiry and calendar tools to the existing setup.",
  "featureLabel": "A venue coming to life",
  "featureTitle": "The website kept pace as the doors opened.",
  "featureBody": "The early site gave Liza a home online before launch. As The Warehouse began hosting gatherings, the website evolved with current imagery, event information, and clear ways to inquire. The reservation workflow then gave staff a way to move interest into a tentative hold and, with their approval, a confirmed event.",
  "video": warehouseVideo,
  "poster": warehousePoster,
  "videoCaption": "Original background video from The Warehouse website. This clip is silent; playback is optional.",
  "details": [
    {
      "title": "A presence before the first event",
      "body": "Design and website planning began before launch, giving the new venue a home online and a foundation for search visibility."
    },
    {
      "title": "Updates as the venue took shape",
      "body": "The website continued to evolve with the opening, with imagery and information that reflect the venue and the gatherings it is designed to host."
    },
    {
      "title": "Reservation requests with a next step",
      "body": "Staff can review inquiries, place tentative holds, and confirm bookings. Calendar time accounts for setup through cleanup, with connected customer records supporting follow-up."
    },
    {
      "title": "Fewer systems to buy and connect",
      "body": "Building these agreed workflows into the existing setup helps Liza avoid adding a separate venue platform such as Tripleseat for those needs, along with another subscription and login."
    }
  ],
  "journeyTitle": "One team, from the first website to the next reservation.",
  "journey": [
    {
      "label": "Build the presence",
      "body": "Introduce the venue online before launch and establish clear ways to get in touch."
    },
    {
      "label": "Keep it current",
      "body": "Update the website as the venue opens and its needs become clearer."
    },
    {
      "label": "Support the reservation",
      "body": "Move inquiries into staff-managed holds and confirmed bookings, connected to the CRM."
    }
  ],
  "outcome": "Liza now has a website that has grown alongside The Warehouse and tools that support reservation requests within the existing setup. For those agreed workflows, she can build on what she already has and avoid adding another standalone venue subscription and the integration work that comes with it.",
  "takeaway": "A website and working tools that grow with the venue.",
  "website": "https://thewarehousebyblackcreek.com/",
  "proposedQuote": {
    "text": "Cyber Genie has been with us from day one, helping us launch our website and manage reservation requests without adding another software subscription to the mix.",
    "name": "Liza Hill",
    "role": "The Warehouse by Black Creek",
    "headshot": warehouseMark,
    "imageKind": "brand",
    "imageAlt": "The Warehouse by Black Creek logo",
    "approvalName": "Liza",
    "approval": "approved"
  }
};
