import type { CaseStudy } from "@/data/customer-stories/types";
type Showcase = NonNullable<CaseStudy["showcase"]>;
// Pending client consent. Imported only by the isolated review collection.
import edithDesktop from "./media/motion/edencare-360-desktop.mp4?url";
import edithMobile from "./media/motion/edencare-360-mobile.mp4?url";
import edithPosterDesktop from "./media/motion/edencare-360-desktop-poster.webp";
import edithPosterMobile from "./media/motion/edencare-360-mobile-poster.webp";

export const edithShowcase: Showcase = {title: "Built around Edith’s vision.", desktop: edithDesktop, mobile: edithMobile, posterDesktop: edithPosterDesktop.src, posterMobile: edithPosterMobile.src, description: "The EdenCare 360 website and original hero video, with generic photo-file graphics, followed by a fictional headline request and conceptual team-support and AI-edit options. The example update is an illustration, not a recording of the client portal."};
