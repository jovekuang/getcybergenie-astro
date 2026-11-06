import type { CaseStudy } from "@/data/customer-stories/types";
type Showcase = NonNullable<CaseStudy["showcase"]>;
// Pending client consent. Imported only by the isolated review collection.
import bruceDesktop from "./media/motion/eden-elevations-3-desktop.mp4?url";
import bruceMobile from "./media/motion/eden-elevations-3-mobile.mp4?url";
import brucePosterDesktop from "./media/motion/eden-elevations-3-desktop-poster.webp";
import brucePosterMobile from "./media/motion/eden-elevations-3-mobile-poster.webp";
import edithDesktop from "./media/motion/edencare-360-desktop.mp4?url";
import edithMobile from "./media/motion/edencare-360-mobile.mp4?url";
import edithPosterDesktop from "./media/motion/edencare-360-desktop-poster.webp";
import edithPosterMobile from "./media/motion/edencare-360-mobile-poster.webp";
import avaDesktop from "./media/motion/wabi-blobi-desktop.mp4?url";
import avaMobile from "./media/motion/wabi-blobi-mobile.mp4?url";
import avaPosterDesktop from "./media/motion/wabi-blobi-desktop-poster.webp";
import avaPosterMobile from "./media/motion/wabi-blobi-mobile-poster.webp";

export const bruceShowcase: Showcase = {title: "Built around Bruce’s next conversation.", desktop: bruceDesktop, mobile: bruceMobile, posterDesktop: brucePosterDesktop.src, posterMobile: brucePosterMobile.src, description: "Original scrolling-hero footage and the actual tax-guide cover, followed by a fictional request, a conceptual CRM connection, and an example contact retaining Free Tax Guide as its source. All contact information and follow-up dates are fictional."};
export const edithShowcase: Showcase = {title: "Built around Edith’s vision.", desktop: edithDesktop, mobile: edithMobile, posterDesktop: edithPosterDesktop.src, posterMobile: edithPosterMobile.src, description: "The EdenCare 360 website and original hero video, with generic photo-file graphics, followed by a fictional headline request and conceptual team-support and AI-edit options. The example update is an illustration, not a recording of the client portal."};
export const avaShowcase: Showcase = {title: "Built around Ava’s story.", desktop: avaDesktop, mobile: avaMobile, posterDesktop: avaPosterDesktop.src, posterMobile: avaPosterMobile.src, description: "The Wabi Blobi website and two original creative Reels, alongside a locally illustrated publishing calendar with fictional dates and times for Facebook, Instagram, Pinterest, TikTok and YouTube. The calendar represents a platform Cyber Genie helped provision."};
