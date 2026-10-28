import { defineConfig } from "astro/config";
import { brand } from "./src/data/brand.ts";
import sitemap from "@astrojs/sitemap";
import { readdir, rename, rm } from "node:fs/promises";
import { join } from "node:path";
import { fileURLToPath } from "node:url";

const exposeCanonicalSitemap = () => ({
  name: "expose-canonical-sitemap",
  hooks: {
    "astro:build:done": async ({ dir, logger }) => {
      const outputDirectory = fileURLToPath(dir);
      const files = await readdir(outputDirectory);
      const sitemapChunks = files
        .filter((file) => /^sitemap-\d+\.xml$/.test(file))
        .sort((a, b) => Number(a.match(/\d+/)?.[0]) - Number(b.match(/\d+/)?.[0]));

      if (sitemapChunks.length === 0) {
        logger.warn("No generated sitemap files were found.");
        return;
      }

      const indexFile = join(outputDirectory, "sitemap-index.xml");
      const canonicalFile = join(outputDirectory, "sitemap.xml");
      const sourceFile =
        sitemapChunks.length === 1 ? join(outputDirectory, sitemapChunks[0]) : indexFile;

      await rm(canonicalFile, { force: true });
      await rename(sourceFile, canonicalFile);

      if (sitemapChunks.length === 1) {
        await rm(indexFile, { force: true });
      }

      logger.info(
        sitemapChunks.length === 1
          ? "Created a single sitemap at `sitemap.xml`."
          : "Created a sitemap index at `sitemap.xml`.",
      );
    },
  },
});

export default defineConfig({
  site: brand.origin,
  output: "static",
  trailingSlash: "always",
  integrations: [
    sitemap({
      filter: (page) =>
        !page.includes("/onboarding/") &&
        (!page.includes("/campaigns/") ||
          page.includes("/campaigns/realtor-listing-song-video/")),
    }),
    exposeCanonicalSitemap(),
  ],
  vite: {
    resolve: {
      alias: {
        "@": new URL("./src", import.meta.url).pathname,
      },
    },
  },
});
