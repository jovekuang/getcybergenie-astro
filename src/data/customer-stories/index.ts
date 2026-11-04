import { firstAchievers } from "./first-achievers-childcare";
import { poolYetis } from "./pool-yetis";
import { warehouse } from "./the-warehouse-by-black-creek";

// Import only client-approved records here. Pending stories and their media stay in src/drafts/.
export const publishedStories = [firstAchievers, warehouse, poolYetis];
export const customerStoryPath = (slug: string) => `/customer-stories/${slug}/`;
