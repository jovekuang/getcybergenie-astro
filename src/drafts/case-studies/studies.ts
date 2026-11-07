import { edithShowcase } from "./showcases";
import edenCareImage from "./media/edencare-current-site.jpg";
import edenCareVideo from "./media/edencare-hero.mp4?url";
import edenCarePoster from "./media/edencare-poster.jpg";
import edithHeadshot from "./media/edith-edwards-headshot.jpg";

import type { CaseStudy } from "@/data/customer-stories/types";

export const caseStudies: CaseStudy[] = [
  {
    slug: "edencare-360",
    showcase: edithShowcase,
    client: "EdenCare 360",
    person: "Dr. Edith Edwards",
    sector: "MedSpa & wellness",
    "title": "Edith had a vision. She wanted a team to bring it to life.",
    "intro": "Edith had ideas for EdenCare 360 and pictures to share. She wanted a team to turn that direction into a complete website and hero video, with help keeping things current as her practice evolves.",
    "summary": "How Edith turned her ideas and photos into a website and hero video, with hands-off support and the option to make small changes herself.",
    image: edenCareImage,
    "imageAlt": "Screenshot of the current EdenCare 360 homepage, showing its video hero and appointment links",
    theme: "care",
    "imageCaption": "The current EdenCare 360 homepage.",
    "startingTitle": "She could share the vision and leave the build to us.",
    "deliveryTitle": "What changed for Edith.",
    "storyQuotes": {
      "challenge": "I wanted to explain what I had in mind, share my photos, and have a team take care of bringing the website to life.",
      "ongoing": "I want to know I can ask the team for help, while still having the option to make a small change myself."
    },
    "support": {
      "kicker": "The next change",
      "title": "Help when she wants it. Control when she needs it.",
      "body": "For Edith, the service continues after the website is built. She can describe the change she needs and have Cyber Genie handle it. For a small update she wants to make herself, the portal gives her the option to chat with AI. Both routes are part of the same relationship."
    },
    services: ["Full-service website", "Hero video production", "Ongoing website support", "AI-assisted self-service portal"],
    "challenge": "Edith knew what she wanted EdenCare 360 to look and feel like online. She could share her ideas and photos, but wanted Cyber Genie to handle the work of turning them into a website, producing the video, and making updates along the way.",
    "approach": "We worked from Edith’s direction and the material she shared. Our team built the website around the practice and produced its opening video from several of her pictures, bringing the creative work and website delivery together through the same service.",
    "featureTitle": "Her own photos became the opening impression.",
    "featureBody": "The pictures Edith shared gave us a starting point for the hero video. We produced the clip and integrated it into the website’s opening section, so her own material became part of the first impression of the practice. She could provide the direction while Cyber Genie handled production and integration.",
    video: edenCareVideo,
    poster: edenCarePoster,
    videoCaption: "Original EdenCare 360 hero video. This background clip is silent; playback is optional.",
    details: [
      { title: "A complete website", body: "A coordinated home for the practice’s services, with clear ways for visitors to explore and take the next step toward an appointment." },
      { title: "Creative production included", body: "The hero video was part of the delivery. Edith supplied the pictures; Cyber Genie handled the production and website integration." },
      { title: "Tell us what needs to change", body: "Edith can explain the update she wants and have our team build it out. She has a service to turn to as the practice evolves." },
      { title: "Small edits, on her terms", body: "When she wants to handle a small change herself, she can use the self-service portal and chat with AI. That option sits alongside the hands-off service." },
    ],
    "journeyTitle": "She chooses how the next change gets done.",
    journey: [
      { label: "Share the direction", body: "Tell Cyber Genie what the practice needs and share the available photos and content." },
      { label: "Let us build it", body: "Our team turns that direction into the website, including the hero video." },
      { label: "Choose how to update", body: "Ask us to make the next change, or use the portal’s AI chat for a small edit yourself." },
    ],
    "outcome": "Edith now has a complete website with an original hero video and a team she can turn to as the practice changes. She can ask Cyber Genie to handle an update or use the AI self-service option for a small edit when she wants to do it herself.",
    "takeaway": "Her direction. A team to take care of the work.",
    website: "https://edencare360.com/",
    proposedQuote: {
      text: "I shared my ideas and photos, and Cyber Genie brought my website and video to life. I can leave updates to their team or make small changes myself.",
      name: "Dr. Edith Edwards",
      role: "Founder, EdenCare 360",
      headshot: edithHeadshot,
      approvalName: "Edith",
      approval: "pending",
    },
  },
];
