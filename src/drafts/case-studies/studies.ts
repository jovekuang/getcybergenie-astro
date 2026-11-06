import { bruceShowcase, edithShowcase, avaShowcase } from "./showcases";
import edenCareImage from "./media/edencare-current-site.jpg";
import edenElevationsImage from "./media/eden-elevations-current-site.jpg";
import edenCareVideo from "./media/edencare-hero.mp4?url";
import edenElevationsVideo from "./media/eden-elevations-hero.mp4?url";
import edenCarePoster from "./media/edencare-poster.jpg";
import edenElevationsPoster from "./media/eden-elevations-poster.jpg";
import guideCover from "./media/guide-cover.jpg";
import edithHeadshot from "./media/edith-edwards-headshot.jpg";
import bruceHeadshot from "./media/bruce-edwards-headshot.jpg";

import avaHeadshot from "./media/ava-zhao.webp";
import wabiWebsite from "./media/wabi-blobi-current-site.jpg";
import wabiPlay from "./media/wabi-blobi-play.webp";


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
  {
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
    "slug": "wabi-blobi",
    showcase: avaShowcase,
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
];
