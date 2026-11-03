# Customer Stories publication

On November 3, 2026, Jove confirmed that Aminata and Liza had approved their case studies and requested publishing, indexing, and a Customer Stories section on the Astro marketing site. This authorization covers their existing reviewed story text, images, and quotes. Their copy is preserved; draft notices and proposed-quote labels are removed from these two approved records only.

Public routes:

- https://getcybergenie.com/customer-stories/
- https://getcybergenie.com/customer-stories/first-achievers-childcare/
- https://getcybergenie.com/customer-stories/the-warehouse-by-black-creek/

The directory is linked from the main navigation and footer, and the homepage includes both stories using the same shared cards as the directory. Detail pages use the shared story renderer, canonical metadata, Article and BreadcrumbList schema, and next-story links restricted to approved records. The directory and both details are included in the sitemap. No Review or rating schema, invented metrics, or new customer claims are added.

The first two emailed review URLs permanently redirect to the approved canonical stories. Redeploy the separate review branch as well as production to activate those redirects for existing email links. The other three review stories remain noindex with pending quote labels, and no pending records, assets, or links are imported into production.

`npm run check`, the review build, and `npm run check:case-study-boundary` verify both sides of the publication boundary. The route fixture adds exactly the directory, two approved detail pages, three sitemap entries, and two review redirects. Existing routes, indexing decisions, API contracts, and other site work remain covered by the existing checks.

Deployment uses the existing direct-upload Cloudflare Pages project `cyber-genie-marketing`, with `main` for production and `case-studies-review` for the unlisted preview. Production `SITE_INDEXABLE` was already enabled; no global indexing or environment setting is changed. Google indexing itself is external: publishing makes these URLs eligible for crawling and indexing but does not guarantee when search engines will include them.

## Release verification

The complete site check passed: TypeScript, 79-page production build, site audit (zero errors and warnings), six carousel tests, and 29 API tests. The 83-page review build and publication-boundary check also passed. The local Pages runtime verified 79 routes, 44 query-preserving redirects, true 404 responses, preview noindex headers, and dry-run API contracts. All nine browser journeys passed using installed Chrome, including mobile navigation from the homepage to both approved stories. Browser review also covered the directory, homepage section, quote cards, and 320px layouts. Compact navigation and footer spacing keep the expanded links usable just above the mobile breakpoint.
