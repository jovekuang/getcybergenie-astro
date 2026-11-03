import type { ImageMetadata } from "astro";
import edenCareImage from "./media/edencare-current-site.jpg";
import edenElevationsImage from "./media/eden-elevations-current-site.jpg";
import edenCareVideo from "./media/edencare-hero.mp4?url";
import edenElevationsVideo from "./media/eden-elevations-hero.mp4?url";
import edenCarePoster from "./media/edencare-poster.jpg";
import edenElevationsPoster from "./media/eden-elevations-poster.jpg";
import guideCover from "./media/guide-cover.jpg";
import edithHeadshot from "./media/edith-edwards-headshot.jpg";
import bruceHeadshot from "./media/bruce-edwards-headshot.jpg";

import firstAchieversImage from "./media/first-achievers-current-site.jpg";
import warehouseImage from "./media/warehouse-current-site.jpg";
import aminataHeadshot from "./media/aminata-traore.jpg";
import warehouseMark from "./media/warehouse-mark.png";
import warehouseVideo from "./media/warehouse-hero.mp4?url";
import warehousePoster from "./media/warehouse-poster.webp";
import avaHeadshot from "./media/ava-zhao.webp";
import wabiWebsite from "./media/wabi-blobi-current-site.jpg";
import wabiPlay from "./media/wabi-blobi-play.webp";

export interface CaseStudy {
  slug: string;
  client: string;
  person: string;
  sector: string;
  title: string;
  intro: string;
  summary: string;
  image: ImageMetadata;
  imageAlt: string;
  theme: "care" | "property" | "childcare" | "venue" | "play";
  imagePresentation?: "website" | "brand";
  imageCaption?: string;
  startingTitle?: string;
  deliveryTitle?: string;
  channelsIntro?: string;
  storyQuotes?: { challenge?: string; publishing?: string; ongoing?: string };
  support?: { kicker: string; title: string; body: string };
  featureLabel?: string;
  featureFlow?: { title: string; body: string }[];
  featureImage?: ImageMetadata;
  featureImageAlt?: string;
  featureCaption?: string;
  websiteLabel?: string;
  channels?: string[];
  services: string[];
  challenge: string;
  approach: string;
  featureTitle: string;
  featureBody: string;
  video?: string;
  poster?: ImageMetadata;
  videoCaption?: string;
  details: { title: string; body: string }[];
  journeyTitle: string;
  journey: { label: string; body: string }[];
  outcome: string;
  takeaway: string;
  website: string;
  guide?: ImageMetadata;
  proposedQuote: {
    text: string;
    name: string;
    role: string;
    headshot: ImageMetadata;
    imageKind?: "person" | "brand";
    imageAlt?: string;
    imagePosition?: string;
    imageScale?: number;
    imageOrigin?: string;
    approvalName: string;
    approval: "pending";
  };
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "edencare-360",
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
  {
    slug: "eden-elevations-3",
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
      headshot: bruceHeadshot,
      approvalName: "Bruce",
      approval: "pending",
    },
  },

  {
    "slug": "first-achievers-childcare",
    "client": "First Achievers Childcare",
    "person": "Aminata Traore",
    "sector": "Childcare & early learning",
    "title": "Aminata wanted a CRM that fit her day.",
    "intro": "Aminata wanted prospective parents to be able to book a tour and hear back at the right moments. She needed a system built around her center’s day-to-day work, with the setup handled for her and room to grow as the business grows.",
    "summary": "How Aminata connected her website, parent inquiries, tour scheduling, and automated follow-up in a CRM shaped around her childcare center.",
    "image": firstAchieversImage,
    "imageAlt": "Screenshot of the current First Achievers Childcare homepage, showing its programs introduction and Schedule a Tour link",
    "theme": "childcare",
    "imageCaption": "The current First Achievers Childcare homepage.",
    "deliveryTitle": "What changed for Aminata.",
    "storyQuotes": {
      "challenge": "I wanted something built around our center, with the setup taken care of and room to grow when we need it.",
      "ongoing": "I want parents to be able to book a tour, receive the right follow-up, and stay connected while I focus on our families."
    },
    "support": {
      "kicker": "As the center grows",
      "title": "She can ask for the next improvement.",
      "body": "The system can grow with First Achievers. Aminata can explain what would make the next part of her work easier, and Cyber Genie can build the agreed improvement into the existing workflow. The service includes handling that configuration, so she has a team to turn to as new needs emerge."
    },
    "services": [
      "Website design",
      "Custom childcare CRM",
      "Online tour scheduling",
      "Automated follow-ups"
    ],
    "startingTitle": "She wanted useful support without a configuration project.",
    "challenge": "For Aminata, the important work was welcoming families, organizing tours, and helping parents with the next step. Other childcare platforms offered more features than she had time to configure. She wanted the support that fit her center, with someone taking care of the setup.",
    "approach": "We worked around that parent journey. The website and custom CRM connect inquiries, tour bookings, and follow-up, with Cyber Genie handling implementation and configuration. Aminata can use the workflow she needs now and ask for improvements as the center’s needs develop.",
    "featureLabel": "The parent journey",
    "featureTitle": "From “Can we visit?” to a thoughtful follow-up.",
    "featureBody": "A parent can choose a tour time on the website. Behind it, the CRM keeps the family’s inquiry and visit together and supports confirmations and reminders. When staff mark the tour complete, the post-tour workflow helps the team continue the conversation as the family considers enrollment.",
    "featureFlow": [
      {
        "title": "A parent schedules a tour",
        "body": "The website connects the visit to the family’s inquiry."
      },
      {
        "title": "The visit stays organized",
        "body": "Confirmations, reminders, and the tour calendar support the team."
      },
      {
        "title": "Follow-up continues",
        "body": "After staff mark the tour complete, the CRM supports the next conversation."
      }
    ],
    "featureCaption": "A connected path from a parent’s first inquiry to the next enrollment conversation.",
    "details": [
      {
        "title": "A website built for prospective families",
        "body": "Clear program information and a direct route to schedule a tour help parents take the next step toward visiting the center."
      },
      {
        "title": "A CRM shaped around the center",
        "body": "Inquiries, tours, family communication, and next steps live in a system built for Aminata’s workflow, with the setup handled by Cyber Genie."
      },
      {
        "title": "Tour follow-up handled in the workflow",
        "body": "The CRM supports visit confirmations, reminders, and post-tour messages, helping the team stay in touch as parents consider enrollment."
      },
      {
        "title": "Room to grow without a configuration project",
        "body": "The system can evolve with the center’s needs. Aminata can ask for the next improvement while Cyber Genie handles the implementation."
      }
    ],
    "journeyTitle": "A clearer next step for the parent and the team.",
    "journey": [
      {
        "label": "Discover the center",
        "body": "Parents explore the website and choose a tour time."
      },
      {
        "label": "Keep the visit connected",
        "body": "The team sees the inquiry, scheduled tour, and communication together."
      },
      {
        "label": "Follow up with context",
        "body": "The CRM supports the follow-up while Aminata focuses on families and the center."
      }
    ],
    "outcome": "Aminata now has a website and custom CRM that support the prospective-parent journey in one connected workflow. Tour scheduling and follow-up are built around the center’s needs, with Cyber Genie taking responsibility for setup and future improvements.",
    "takeaway": "A system shaped around her center, with room to grow.",
    "website": "https://firstachieverschildcare.com/",
    "proposedQuote": {
      "text": "Cyber Genie built around how we work. Parents can book tours, follow-ups are taken care of, and I can focus on our families as we grow.",
      "name": "Aminata Traore",
      "role": "Executive Director, First Achievers Childcare",
      "headshot": aminataHeadshot,
      "imagePosition": "35% 20%",
      "imageScale": 2.5,
      "imageOrigin": "10% 15%",
      "approvalName": "Aminata",
      "approval": "pending"
    }
  },
  {
    "slug": "the-warehouse-by-black-creek",
    "client": "The Warehouse by Black Creek",
    "person": "Liza Hill",
    "sector": "Event venue · Devine, Texas",
    "title": "Liza was opening a venue. Her website needed to grow with it.",
    "intro": "Liza was preparing to launch The Warehouse by Black Creek in Devine, Texas. She needed an online presence before the doors opened and practical support for reservation requests as the new venue began welcoming guests.",
    "summary": "How Liza built an online presence before launch, then added reservation support as the venue grew, using the system she already had.",
    "image": warehouseImage,
    "imageAlt": "Screenshot of the current Warehouse by Black Creek homepage, with its Gather well hero and event inquiry links",
    "theme": "venue",
    "imageCaption": "The current Warehouse by Black Creek homepage.",
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
      "approval": "pending"
    }
  },
  {
    "slug": "wabi-blobi",
    "client": "Wabi Blobi",
    "person": "Ava Zhao",
    "sector": "Creative play & ecommerce",
    "title": "Ava wanted the website to feel like the game.",
    "intro": "Ava already had a Shopify store. She wanted visitors to understand the creativity and connection behind Wabi Blobi, and she needed a practical way to keep sharing that story beyond the website.",
    "summary": "How Ava brought Wabi Blobi’s playful identity into the website and found support for telling the same story across social media.",
    "image": wabiWebsite,
    "imageAlt": "Screenshot of the current Wabi Blobi homepage, with its watercolor cards and invitation to find shapes in the clouds",
    "theme": "play",
    "imagePresentation": "website",
    "imageCaption": "The current Wabi Blobi homepage.",
    "services": [
      "Brand-led landing page",
      "Shopify connection",
      "Social media planning",
      "Multi-network scheduling",
      "On-brand Reels"
    ],
    "startingTitle": "She knew what the game meant. She wanted visitors to feel it.",
    "challenge": "For Ava, the page had to capture something specific: a game that brings families and friends together through imagination and play. She wanted the design and words to carry that feeling, while keeping the shopping experience connected to Shopify.",
    "approach": "We worked with Ava to give that story room on the website. The landing page brings the brand’s artwork, message, and invitation to play together, with clear routes into the shop. Ava could share the direction she wanted while Cyber Genie handled the design and implementation.",
    "deliveryTitle": "What changed for Ava.",
    "channelsIntro": "With the website’s story clearer, Ava also wanted a way to keep showing up on social media. Cyber Genie helped build the plan and set up one place to schedule content across five networks, alongside ongoing help creating Reels.",
    "storyQuotes": {
      "challenge": "I wanted the website to feel like Wabi Blobi: playful, welcoming, and about bringing people together.",
      "publishing": "I wanted a clear plan and creative help that keeps our content feeling like us. I also wanted one central place to manage all our social content and schedule posts for specific dates and times, without uploading ad hoc across five different platforms."
    },
    "featureLabel": "The brand in action",
    "featureTitle": "Let visitors feel why the game exists.",
    "featureBody": "Ava wanted families and friends to see the spirit of Wabi Blobi in the page itself. The design uses the brand’s original artwork and real moments of people playing, while the content explains the creativity and connection at the heart of the game. The shopping links remain clear and easy to find.",
    "featureImage": wabiPlay,
    "featureImageAlt": "Two people drawing and sharing Wabi Blobi watercolor cards at a table",
    "featureCaption": "Original community photography from the Wabi Blobi brand-site files.",
    "channels": [
      "Facebook",
      "Instagram",
      "Pinterest",
      "TikTok",
      "YouTube"
    ],
    "details": [
      {
        "title": "A landing page that feels like Wabi Blobi",
        "body": "The visual treatment follows the brand’s artwork, colors, and tone, giving the story a dedicated space alongside the Shopify store."
      },
      {
        "title": "The value behind the product",
        "body": "The content explains the invitation to imagine, connect, and play together, helping visitors understand the experience the game offers families and friends."
      },
      {
        "title": "A plan and a place to publish",
        "body": "Cyber Genie helped create the social media plan and set up a platform for planning and scheduling across Facebook, Instagram, Pinterest, TikTok, and YouTube."
      },
      {
        "title": "Creative Reels with a consistent voice",
        "body": "We also help create social Reels around the brand’s playful identity, so the content feels connected to the website and the game itself."
      }
    ],
    "journeyTitle": "A story she can keep sharing.",
    "journey": [
      {
        "label": "Express the brand",
        "body": "Use the landing experience to introduce the artwork, purpose, and joy of the game."
      },
      {
        "label": "Connect to the store",
        "body": "Guide people who want to buy to the existing Shopify shopping experience."
      },
      {
        "label": "Keep the story moving",
        "body": "Turn the social plan into on-brand content, with a shared platform to organize publishing."
      }
    ],
    "outcome": "Ava now has a website that expresses the personality and purpose of Wabi Blobi, with support for carrying that story into social content. The landing page, social plan, publishing setup, and creative Reels are connected through the same working relationship, so she has a team to turn to as the brand grows.",
    "takeaway": "Her brand’s personality, carried from the website to the next Reel.",
    "website": "https://www.wabiblobi.com/",
    "websiteLabel": "Explore the Wabi Blobi website",
    "proposedQuote": {
      "text": "Cyber Genie helped us express what Wabi Blobi is about, from a website that feels like us to a social plan and creative Reels that carry our story.",
      "name": "Ava Zhao",
      "role": "Founder, Wabi Blobi",
      "headshot": avaHeadshot,
      "imagePosition": "center",
      "approvalName": "Ava",
      "approval": "pending"
    }
  }
,
];
