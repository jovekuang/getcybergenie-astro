# Customer Stories publication

On November 3, 2026, Jove confirmed that Aminata and Liza had approved their case studies and requested publishing, indexing, and a Customer Stories section on the Astro marketing site. This authorization covers their existing reviewed story text, images, and quotes. Their copy is preserved; draft notices and proposed-quote labels are removed from these two approved records only.

Public routes:

- https://getcybergenie.com/customer-stories/
- https://getcybergenie.com/customer-stories/first-achievers-childcare/
- https://getcybergenie.com/customer-stories/the-warehouse-by-black-creek/

The directory is linked from the main navigation and footer, and the homepage includes both stories using the same shared cards as the directory. Detail pages use the shared story renderer, canonical metadata, Article and BreadcrumbList schema, and next-story links restricted to approved records. The directory and both details are included in the sitemap. No Review or rating schema, invented metrics, or new customer claims are added.

The first two emailed review URLs permanently redirect to the approved canonical stories. Redeploy the separate review branch as well as production to activate those redirects for existing email links. All pending review stories remain noindex with pending quote labels, and no pending records, assets, or links are imported into production.

`npm run check`, the review build, and `npm run check:case-study-boundary` verify both sides of the publication boundary. The route fixture adds exactly the directory, two approved detail pages, three sitemap entries, and two review redirects. Existing routes, indexing decisions, API contracts, and other site work remain covered by the existing checks.

Deployment uses the existing direct-upload Cloudflare Pages project `cyber-genie-marketing`, with `main` for production and `case-studies-review` for the unlisted preview. Production `SITE_INDEXABLE` was already enabled; no global indexing or environment setting is changed. Google indexing itself is external: publishing makes these URLs eligible for crawling and indexing but does not guarantee when search engines will include them.

## Release verification

The complete site check passed: TypeScript, 79-page production build, site audit (zero errors and warnings), six carousel tests, and 29 API tests. The 83-page review build and publication-boundary check also passed. The local Pages runtime verified 79 routes, 44 query-preserving redirects, true 404 responses, preview noindex headers, and dry-run API contracts. All nine browser journeys passed using installed Chrome, including mobile navigation from the homepage to both approved stories. Browser review also covered the directory, homepage section, quote cards, and 320px layouts. Compact navigation and footer spacing keep the expanded links usable just above the mobile breakpoint.

## Requested visual refinements (November 3, 2026)

The Warehouse screenshot was replaced with the owner's supplied aerial-view screenshot, copied byte-for-byte into `warehouse-current-site.png`. Shared story cards and social metadata use the same new image. The detail page preserves its natural proportions, and an explicit title-line field starts “Her website needed to grow with it.” on a new line. Aminata's original photo is unchanged; a circular CSS frame and face-centered zoom provide the requested profile-photo presentation on desktop and mobile. The story text, quotes, approval states, and indexing decisions are unchanged.


## Pool Yeti’s publication (November 4, 2026)

Jove confirmed Tim’s approval and requested publication. Moved the reviewed Pool Yeti’s record and its existing screenshot and wordmark into the approved collection, retaining the apostrophe and first-name-only attribution. All three quotes now use the approved presentation. The shared homepage cards, Customer Stories directory, next-story navigation, Article metadata, and sitemap include the new canonical route: https://getcybergenie.com/customer-stories/pool-yetis/. The former review URL redirects permanently to this public page on both deployment branches. The remaining three stories stay unlisted and noindex. Updated the route fixture, mobile story journey, and publication-boundary check to require exactly three approved stories.

Pre-deploy verification passed: full site check (81 pages, 77 sitemap entries, zero audit errors, six carousel and 29 API tests), review build, three-approved/three-pending publication boundary, Cloudflare runtime (81 routes and 45 query-preserving redirects), and all nine browser journeys, including mobile traversal of the three approved stories.

## Animated showcases (November 4, 2026)

After reviewing Pool Yeti’s prototype, Jove requested the same style for First Achievers and The Warehouse and explicitly authorized deploying all three. The approved story text and quotes remain intact. Each main showcase now uses a silent 10-second loop with 2.5-second scene cadence and 0.6-second transitions, separate desktop/mobile exports, a poster fallback and accessible playback controls. Software scenes are original local demonstrations with exclusively fictional data. First Achievers uses a fresh capture of its public website; The Warehouse retains the supplied aerial screenshot. Tentative holds remain labeled tentative. Scene routes, fixtures, and intermediate captures stay outside the normal production build. Indexability, sitemap entries, old review redirects, and the three pending stories’ consent boundaries are unchanged.
