import poolDesktop from "../../assets/customer-stories/motion/pool-yetis-desktop.mp4?url";
import poolMobile from "../../assets/customer-stories/motion/pool-yetis-mobile.mp4?url";
import poolPosterDesktop from "../../assets/customer-stories/motion/pool-yetis-desktop-poster.webp";
import poolPosterMobile from "../../assets/customer-stories/motion/pool-yetis-mobile-poster.webp";
import firstDesktop from "../../assets/customer-stories/motion/first-achievers-desktop.mp4?url";
import firstMobile from "../../assets/customer-stories/motion/first-achievers-mobile.mp4?url";
import firstPosterDesktop from "../../assets/customer-stories/motion/first-achievers-desktop-poster.webp";
import firstPosterMobile from "../../assets/customer-stories/motion/first-achievers-mobile-poster.webp";
import warehouseDesktop from "../../assets/customer-stories/motion/warehouse-desktop.mp4?url";
import warehouseMobile from "../../assets/customer-stories/motion/warehouse-mobile.mp4?url";
import warehousePosterDesktop from "../../assets/customer-stories/motion/warehouse-desktop-poster.webp";
import warehousePosterMobile from "../../assets/customer-stories/motion/warehouse-mobile-poster.webp";
import bruceDesktop from "../../assets/customer-stories/motion/eden-elevations-3-desktop.mp4?url";
import bruceMobile from "../../assets/customer-stories/motion/eden-elevations-3-mobile.mp4?url";
import brucePosterDesktop from "../../assets/customer-stories/motion/eden-elevations-3-desktop-poster.webp";
import brucePosterMobile from "../../assets/customer-stories/motion/eden-elevations-3-mobile-poster.webp";
import avaDesktop from "../../assets/customer-stories/motion/wabi-blobi-desktop.mp4?url";
import avaMobile from "../../assets/customer-stories/motion/wabi-blobi-mobile.mp4?url";
import avaPosterDesktop from "../../assets/customer-stories/motion/wabi-blobi-desktop-poster.webp";
import avaPosterMobile from "../../assets/customer-stories/motion/wabi-blobi-mobile-poster.webp";
import type { CaseStudy } from "./types";
type Showcase = NonNullable<CaseStudy["showcase"]>;
// Only client-approved stories and owner-approved, fictional demonstration media belong here.
export const poolShowcase: Showcase = {
  title: "Built around Tim’s day.", desktop: poolDesktop, mobile: poolMobile,
  posterDesktop: poolPosterDesktop.src, posterMobile: poolPosterMobile.src,
  description: "A fictional Pool Yeti’s dashboard and pool-care inquiry, followed by conceptual graphics of an SMS alert to Tim and a future follow-up. All customer details, dates and dashboard figures are fictional.",
};
export const firstShowcase: Showcase = {
  title: "Built around Aminata’s day.", desktop: firstDesktop, mobile: firstMobile,
  posterDesktop: firstPosterDesktop.src, posterMobile: firstPosterMobile.src,
  description: "The First Achievers website, a fictional family choosing a tour time, the connected CRM and tour calendar, and a post-tour follow-up. Software scenes use fictional names, contact details, dates and counts.",
};
export const warehouseShowcase: Showcase = {
  title: "Built around Liza’s day.", desktop: warehouseDesktop, mobile: warehouseMobile,
  posterDesktop: warehousePosterDesktop.src, posterMobile: warehousePosterMobile.src,
  description: "The Warehouse website, a fictional event inquiry, a tentative hold and the connected venue calendar. Software scenes use fictional names, contact details, guest counts and dates. The hold remains tentative for staff confirmation.",
};

export const bruceShowcase: Showcase = {title: "Built around Bruce’s next conversation.", desktop: bruceDesktop, mobile: bruceMobile, posterDesktop: brucePosterDesktop.src, posterMobile: brucePosterMobile.src, description: "Original scrolling-hero footage and the actual tax-guide cover, followed by a fictional request, a conceptual CRM connection, and an example contact retaining Free Tax Guide as its source. All contact information and follow-up dates are fictional."};
export const avaShowcase: Showcase = {title: "Built around Ava’s story.", desktop: avaDesktop, mobile: avaMobile, posterDesktop: avaPosterDesktop.src, posterMobile: avaPosterMobile.src, description: "The Wabi Blobi website and two original creative Reels, alongside a locally illustrated publishing calendar with fictional dates and times for Facebook, Instagram, Pinterest, TikTok and YouTube. The calendar represents a platform Cyber Genie helped provision."};
