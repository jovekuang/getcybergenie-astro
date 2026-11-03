import { defineConfig } from "astro/config";
import base from "./astro.config.mjs";

// Draft routes are registered only by this separate review configuration.
// The normal build/deploy config cannot emit them or their imported media.
export default defineConfig({
  ...base,
  outDir: "./outputs/case-study-review/",
  server: { host: "127.0.0.1", port: 4347 },
  integrations: [
    ...base.integrations,
    {
      name: "unlisted-case-study-review",
      hooks: {
        "astro:config:setup": ({ injectRoute }) => {
          injectRoute({ pattern: "/_review/case-studies/", entrypoint: "./src/drafts/case-studies/index.astro" });
          injectRoute({ pattern: "/_review/case-studies/[slug]/", entrypoint: "./src/drafts/case-studies/[slug].astro" });
        },
      },
    },
  ],
});
