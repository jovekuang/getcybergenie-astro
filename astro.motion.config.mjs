import { defineConfig } from "astro/config";
import base from "./astro.config.mjs";

// Local motion review only. These routes and fixtures never enter the normal build.
export default defineConfig({
  ...base,
  outDir: "./outputs/motion-review/",
  server: { host: "127.0.0.1", port: 4351 },
  integrations: [...base.integrations, {
    name: "local-customer-story-motion",
    hooks: { "astro:config:setup": ({ injectRoute }) => {
      injectRoute({ pattern: "/_motion/stories/[slug]/", entrypoint: "./src/drafts/motion/stories.astro" });
      injectRoute({ pattern: "/_motion/fallback-check/", entrypoint: "./src/drafts/motion/fallback-check.astro" });
      injectRoute({ pattern: "/_motion/pool-yetis/", entrypoint: "./src/drafts/motion/pool-yetis.astro" });
      injectRoute({ pattern: "/_motion/scenes/[story]/[scene]/", entrypoint: "./src/drafts/motion/scenes/[story]/[scene].astro" });
      injectRoute({ pattern: "/_motion/scenes/[scene]/", entrypoint: "./src/drafts/motion/scenes/[scene].astro" });
    } },
  }],
});
