# Client case studies: publication and review

Current status (November 3, 2026): Jove confirmed that Aminata and Liza approved their stories and authorized publication and indexing. Their approved pages and quotes are now promoted to `/customer-stories/`; Edith, Bruce, Ava, and Tim remain pending, unlisted, and noindex. See [the publication record](customer-stories-publication.md).

Historical unlisted-review authorization: On November 2, 2026, Jove explicitly authorized committing, pushing, and deploying public review URLs with noindex and no incoming links from the marketing site. This supersedes the earlier local-only restriction for these five drafts.

## Open the review

```sh
npm run review:case-studies:build
npm run review:case-studies
```

Local preview: http://127.0.0.1:4347/_review/case-studies/ (loopback only).

Public review hub: https://case-studies-review.cyber-genie-marketing.pages.dev/_review/case-studies/ . This is an unlisted public URL, without authentication; anyone with the link can open it.

- EdenCare 360: /_review/case-studies/edencare-360/
- Eden Elevations 3: /_review/case-studies/eden-elevations-3/
- First Achievers Childcare: /_review/case-studies/first-achievers-childcare/
- The Warehouse by Black Creek: /_review/case-studies/the-warehouse-by-black-creek/
- Wabi Blobi: /_review/case-studies/wabi-blobi/
- Pool Yetis: /_review/case-studies/pool-yetis/

## Current publication boundary

Only the two approved records and their media are imported by the production Customer Stories routes. The shared renderer is in `src/components/customer-stories/`, the approved records in `src/data/customer-stories/`, and approved media in `src/assets/customer-stories/`. Pending records and assets stay under `src/drafts/case-studies/` and are registered only by the separate review configuration. CI checks both the approved pages and exclusion of all pending stories and assets. The two original emailed review URLs redirect to their canonical public stories.

## Historical review boundary before client approval

The shared layout and content live under `src/drafts/case-studies/`, outside `src/pages/`. Only `astro.case-studies.config.mjs` registers these routes. The normal `npm run build` and deployment produce no draft pages or draft-only media. Review output goes to ignored `outputs/case-study-review/`, separately from deployable `dist/`. The pages have `noindex, nofollow, noarchive, nosnippet` and are excluded from the sitemap. They are absent from public navigation and portfolio links. The separate review deployment is public and unlisted, not access-controlled. The existing Pages middleware and preview headers enforce HTTP noindex on the review host in addition to the page robots metadata.

The owner has authorized pushing this source and media and publishing a separate Cloudflare Pages preview branch, `case-studies-review`. Keep the normal production build free of these routes, content, media, and incoming case-study links.

After explicit client consent and owner publication approval, promote approved content to public routes, update final copy/media permissions, then add navigation, canonical metadata, structured data, and sitemap inclusion. The present authorization covers the unlisted review deployment only; it does not authorize indexing, approved-testimonial claims, sitemap inclusion, or marketing navigation links.

## Content and evidence

The owner’s brief supplies the account of the service relationship, the provenance of Edith’s photos, the optional AI portal, and the intended CRM security positioning. No verified client testimonials, performance statistics, or claims that Edith has personally used AI editing are included. The closing quotes are proposed wording written for client review, visibly labeled as drafts awaiting approval; they must not be presented as authentic testimonials before the named client approves the exact text.

Source inspected on November 1, 2026:

- EdenCare website and local `eden-telecare-connect/src/components/Hero.tsx`: original background hero video and service/appointment presentation.
- Eden Elevations website and local `eden-elevation-reimagined-art/src/pages/Home.tsx`: scroll-controlled hero, tax-guide form, and First Look Club.
- Local Eden Elevations `src/lib/crm.ts`: lead sources, source/context mapping, required CRM acceptance, idempotency, and separate consent fields. Checked-in CRM migrations define authenticated, business-scoped row access; the live deployed policies remain unverified. This verifies source behavior, not successful delivery of every production lead.
- Existing Cyber Genie portfolio images reused without alteration. Original hero clips copied from the client repositories; they are silent and labeled accordingly. Review playback is optional. The Eden clip is shown as a regular video for inspection; the client site controls it through scrolling.
- Tax-guide cover reused from the client repository. The case study describes the resource’s role in lead capture; it makes no tax-savings promise.

Production Supabase verification remains pending: Lovable reported the database enabled but returned UNAVAILABLE for two scoped SELECT queries; the local Supabase CLI has no login token, and the browser requires sign-in. No production database records, schema, or deployment were changed. Until live access is restored, the draft does not make an audited security claim or claim that every lead has been independently verified in production.

## Structure

`studies.ts` contains all five stories. `[slug].astro` renders one reusable detail layout. `index.astro` is the unlisted review hub. `review.css` supplies responsive styles using the marketing site’s existing fonts, colors, header, and footer.

## Verification

Run `npm run check:types`, `npm run review:case-studies:build`, `npm run build`, `npm run audit:site`, then `npm run check:case-study-boundary`. The boundary check requires both builds and verifies every registered noindex review page, sitemap exclusion, absence from deployable output, and exclusion of draft-only media by hash. The preview sets Astro’s foreground marker and uses `--ignore-lock` to coexist with other Astro sessions without stopping or reusing their servers.

Verified in this draft session: normal build (75 pages), review build (78 pages), TypeScript, site audit, 6 carousel tests, 29 API tests, and the case-study boundary check passed. Browser review covered the hub and both details, desktop and 390px mobile layouts, and 320px horizontal-overflow inspection. Both original hero clips decoded and played; ffprobe confirmed no audio streams. No changes were committed, pushed, or deployed.

## Proposed closing quotes (November 2, 2026)

Each detail page ends with a shared quote card before the review footer. Portraits were copied unchanged from `eden-elevation-reimagined-art/public/ee3/photos/bruce-edwards-headshot.jpg` and `edith-edwards-headshot.jpg`, where both are named on the About page. Edith’s EdenCare About component also identifies her portrait. Only the review configuration imports these copies.

`proposedQuote` in `studies.ts` stores the text, name, role, headshot, and pending approval status. These are proposed testimonials drafted from the owner’s project brief, not statements sourced from the clients. Each card says “Proposed client quote” and “Draft wording · Awaiting [name]’s approval.” Client approval of the exact text is required before presenting a quote as their endorsement. No testimonial or review structured data was added.

## Three additional private stories (November 2, 2026)

The owner’s brief supplies the service relationship, setup preferences, ongoing social support, avoided subscriptions, and launch history. The copy makes no measured savings, lead, enrollment, booking, or search-ranking claims. The Tripleseat reference describes the scoped alternative in the owner’s brief, not feature parity or a comparison of current vendor prices. First Achievers is described as configured by Cyber Genie, not as software that has no settings.

Supporting source inspected:

- First Achievers: `src/content/crmHelp.ts`, `src/pages/ScheduleTour.tsx`, admin workflow source, and automation functions support inquiry/tour records, confirmations, reminders, staff-marked completion, and post-tour follow-up. No family records were read or reproduced. Aminata’s portrait is named by `ExecutiveDirector.tsx`.
- Warehouse: `src/components/venue-operations-guide.tsx`, authenticated dashboard source, and `src/lib/site.ts` support Devine location, reservation inquiries, tentative holds, staff confirmation, setup/cleanup windows, and connected CRM scheduling. The original silent website hero clip is included. No authenticated records were accessed. A named Liza portrait was not found in the client source; her draft quote uses the actual venue logo, labeled as a logo rather than a headshot.
- Wabi Blobi: `src/content/site.ts` and marketing page source support separate marketing storytelling, Shopify destinations, the creative-play mission, and Ava’s named portrait. The owner’s brief supplies the social plan, five-network scheduling setup, and creative Reel service; live account connections/publication were not independently audited. The feature photo and card artwork are copied unchanged from the brand-site media. No claim is made that Cyber Genie created that source artwork or photography.
- The Wabi Blobi case initially linked to the brand-site preview. On November 2, the public homepage at https://www.wabiblobi.com/ was directly verified in the browser and became the case-study link and screenshot source.

All five closing quotes remain proposed wording awaiting the named client’s approval, and no review/testimonial structured data is added. The next-story link cycles through all five cases. The shared feature area supports original video, a labeled workflow overview, or a source photo, so it does not imply that every client received a hero video.

Verified for the five-story expansion: 81-page private review build, 75-page normal build, TypeScript, site audit (zero errors), 6 carousel tests, 29 API tests, and the expanded privacy boundary check passed. Desktop feature/quote sections and new quote cards at 390px were visually reviewed; all five details passed a 320px overflow, heading, portrait-load, and pending-quote check. The review hub contains five linked cards. Aminata’s original full-length portrait uses a CSS crop in the quote card; the source image is unchanged. No commits, pushes, database writes, or public deployments were performed.

## Ava-only storytelling trial (November 2, 2026)

At the owner’s request, Wabi Blobi now opens with Ava’s everyday challenge: expressing the game’s purpose on the website and sharing it consistently on social media. The editorial narrative stays in third person, with two short first-person proposed quotes woven into the starting-point and publishing sections. The existing closing quote remains. Each excerpt is visibly labeled proposed wording awaiting Ava’s approval; none is represented as a recorded interview or approved testimonial. The other four client narratives and quotes are unchanged.

The card artwork in the header was replaced with a fresh, unaltered browser screenshot of https://www.wabiblobi.com/ captured at the top of the live homepage on November 2. The actual image is `media/wabi-blobi-current-site.jpg`; the website presentation includes browser framing, and the case link now goes to the verified public website. This is a local case-study update; no client website, account, or public marketing deployment changed.

Trial verification: review build, TypeScript, privacy-boundary check, and diff whitespace check passed. An extracted-text comparison confirmed the other four case-study narratives and quotes are unchanged. Ava’s page has exactly two inline proposed quotes plus its existing closing quote, keeps Founder attribution, and loads the new screenshot. Desktop and 390px visuals were reviewed; 320px and 390px overflow checks passed. No public release or database change occurred.

## Storytelling style applied to all five (November 2, 2026)

After approving Ava’s example, the owner requested the same structure for Edith, Bruce, Aminata, and Liza. Their titles, openings, starting points, and outcomes now focus on the person’s practical needs. Each has two inline first-person proposed quotes, one in the starting point and one in an ongoing-support section, plus the existing closing quote card. The shared renderer supports this section for both social publishing and other ongoing workflows. All excerpts remain explicitly proposed wording awaiting the named client’s approval, and no performance metrics or recorded-interview claims were added. Ava’s existing story and expanded centralized-scheduling quote are preserved.

The four headers now use fresh, unaltered browser screenshots of their current public homepages at edencare360.com, edenelevations3.com, firstachieverschildcare.com, and thewarehousebyblackcreek.com, captured November 2. The Warehouse background video was paused through its visible control for a stable screenshot. These copies live only in the draft media directory; public portfolio content is unchanged. No client website was edited.

Rollout verification: 81-page private review build, TypeScript, updated privacy boundary check, and whitespace check passed. Each story renders two inline proposed quotes and its closing quote, with the correct named approval labels. Ava’s rendered story text is unchanged, including the centralized five-platform scheduling wording. All four revised starting-point sections were visually reviewed on desktop, their ongoing-support sections at 390px, and all five stories passed 320px overflow and heading checks. Fresh header screenshots loaded correctly. No commit, push, public deployment, or production data change was made.


## Unlisted review deployment (November 2, 2026)

Run `npm run check`, `npm run review:case-studies:build`, and `npm run check:case-study-boundary` before release. GitHub CI also builds the review and checks its separation from the production build. Deploy with `npm run review:case-studies:deploy`, which uploads only the separately built review output to the `case-studies-review` preview branch of the `cyber-genie-marketing` Pages project. This does not replace the main marketing deployment.

Verify the hub and all five detail URLs return HTTP 200 with both robots metadata and an HTTP `X-Robots-Tag` containing `noindex`. Verify the marketing homepage and sitemap contain no case-study links. All proposed quotes and client-consent notices must stay visible until the named clients approve them. The earlier dated verification sections record the local-only state at those steps; the owner subsequently authorized this unlisted public review release.


## Pool Yetis review draft (November 3, 2026)

The owner requested Tim Young’s story about leads arriving through Yelp, Angie’s List, and other platforms; delayed response from scattered inboxes; and the need for ongoing nurture. The draft follows the shared owner-led structure, with two inline proposed quotes and a closing proposed quote, all awaiting Tim’s approval. It covers a custom shared lead workspace, SMS alerts to Tim for new inquiries, and a lead database supporting nurture plans and promotional follow-up. It does not claim that Cyber Genie built Pool Yetis’ public website, nor does it claim measured response-time, lead-win, or revenue improvements.

The public Pool Yetis homepage was opened and captured on November 3. Its background was paused through its visible control for the screenshot. The quote card uses the unchanged wordmark referenced by the public site’s header; no identified portrait of Tim was available in the inspected source. A workflow overview illustrates the owner’s described system without using private lead records or fabricating an application screenshot.

Evidence boundary: the owner’s current brief supplies the multi-platform aggregation and nurture account. The separate local `pool-yetis` repository contains a Yelp lead dashboard and notification function source. Its README and deployment notes describe a narrower first phase with incoming-email automation deferred. Those files are not treated as verification that every described integration or nurture workflow is active in production; Tim’s review should confirm the final feature wording. No lead records, authenticated application screens, database changes, or customer notifications were accessed or triggered for this case study.

The new draft is registered only at `/_review/case-studies/pool-yetis/` in the separate noindex review build. It is excluded from production story routes, cards, sitemap, and imported media. The two approved public stories remain the only records in the production Customer Stories collection.

Pool Yetis draft verification: the full site check passed, including TypeScript, the 80-page normal build, zero-error site audit, six carousel tests, and 29 API tests. The 85-page review build and updated publication-boundary check passed. Desktop and 390px mobile workflow/quote sections were visually reviewed; 320px and 390px checks found one H1, three pending quote labels, the expected noindex metadata, and no horizontal overflow.


### Tim’s naming and partnership framing

At the owner’s request, the visible Pool Yetis story now uses Tim’s first name in the opening, facts, inline quote attributions, and closing quote. The opening describes his partnerships with Yelp, Angie’s List, and other platforms for his pool service company. The rest of the narrative, metadata summary, workflow, and proposed quotes emphasize organizing customer inquiries across those business partnerships, timely notifications, and ongoing relationships. Wording about finding prospective customers, acquisition, losing opportunities, and leads disappearing was removed. No claims about business performance or purchasing leads were added. The draft remains unlisted, noindex, and pending Tim’s approval.

The owner also requested a title centered on customer service. The title is now “Tim wanted one place to serve his customers better.”, keeping the shared-workspace benefit while moving the emphasis away from lead acquisition.


## Pool Yeti’s name correction (November 4, 2026)

Tim replied to the approval request and confirmed that the business name includes an apostrophe: Pool Yeti’s. Updated the draft’s client name, summary, captions, alt text, narrative, website link label, and quote attribution throughout. Rephrased possessive constructions for readability. The existing `/pool-yetis/` route and media filenames remain stable. This update refreshes the unlisted, noindex review deployment only; it does not publish the story into the production Customer Stories collection.


## Pool Yeti’s approved for publication (November 4, 2026)

Jove confirmed Tim’s approval and authorized publication. The story and media have moved to the approved customer-stories collection; its review URL now redirects to https://getcybergenie.com/customer-stories/pool-yetis/. Three other drafts remain in this review build. See `customer-stories-publication.md` for the publication record.
