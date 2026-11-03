import { firstAchievers } from "./first-achievers-childcare";
import { warehouse } from "./the-warehouse-by-black-creek";

// Import only client-approved records here. Pending stories and their media stay in src/drafts/.
export const publishedStories = [firstAchievers, warehouse];
export const customerStoryPath = (slug: string) => `/customer-stories/${slug}/`;
