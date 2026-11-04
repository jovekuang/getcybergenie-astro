# Cyber Genie v1 verification

## Blog navigation, responsive images, booking CTA and SEO — November 4, 2026

Restored “Blog” in the shared header and footer. Blog-card images now retain their complete artwork and natural aspect ratio instead of being cropped into the shared 16:10 media frame. Responsive image sizes match the actual single-column breakpoint at 860px, mobile gutters and three-column desktop layout. The rebrand illustration has descriptive alternative text; other article images retain their existing title fallback.

All article closing callouts now use “Talk About Your Business” and the shared Calendly URL, replacing the service-tier recommendation. Existing service links inside article bodies remain contextual reading. Blog metadata and its visible heading now describe small-business technology and AI. BlogPosting markup identifies team authors as organizations, retains personal authors, and includes language, category, stable article/blog identifiers and a locally defined publisher entity. Publication dates use semantic time elements. Original article identities, dates and routes are unchanged.

SEO reference review: [Google's article markup guidance](https://developers.google.com/search/docs/appearance/structured-data/article), [responsive image guidance](https://developers.google.com/search/docs/appearance/google-images) and [title-link guidance](https://developers.google.com/search/docs/appearance/title-link). These are implementation checks, not a ranking or search-indexing claim.

Validation passed: types, 81-page build, route/commercial/metadata audit, six carousel tests and 29 API tests. The audit found no errors or title-length warnings, with 77 sitemap entries and existing per-page indexing decisions. Focused browser checks passed at 320, 390, 560, 768, 793, 860, 861, 1024, 1440 and 1920px for uncropped artwork, image containment, header/footer Blog links, the exact Calendly destination, callout fit and page overflow. Blog and article WCAG A/AA scans passed. Private screenshots and scripts are under ignored `outputs/qa/blog-review/`.

Pre-release production rollback baseline: `43a43afd-44fc-416d-a1ce-bec9a19a7fb0`, source `a3235cb`. No DNS, indexing settings, bindings, prices, customer-app behavior, booking submissions or messages are part of this release.

## Rebranding story and announcement — November 3, 2026

Added `/blog/fk-innovate-is-now-cyber-genie/`, based on the owner's rebranding email: origins helping FK Capital Partners' commercial tenants, the software-to-outcome mission, the founder's enterprise technology experience, and continuity for existing accounts and services. The article uses an approved-vector-derived cover, current publication date, Jove Kuang's author credit, canonical metadata, BlogPosting schema, blog listing and sitemap inclusion. Existing articles and commercial terms are preserved; the route fixture adds only the new article and increments the sitemap count.

The shared `RebrandAnnouncement.astro` component appears above the navigation throughout the site. Its teal strip links to the story and scrolls right to left, following the owner's direction correction on November 3. Duplicated visual text is hidden from assistive technology. It pauses on hover, keyboard focus, manual control, and hidden tabs; reduced-motion preferences and JavaScript-free visits show a fully wrapped static message. Blog pages now retain 20px side margins on small screens.

The owner also requested an × close button beside pause. It has a 44px target, an accessible label and keyboard activation; dismissal returns focus to the header home link and remains in effect across page navigation for the current tab session. Browser storage failures still allow closing the current page's strip. Close remains available with reduced motion, while JavaScript-free views hide the nonfunctional controls. Placement, motion, pause, keyboard focus, session persistence, reduced motion and blocked-storage behavior passed focused browser checks at 320, 390 and 1440px; the controls passed a WCAG A/AA scan.

Verification: types, build, route/commercial audit, six carousel tests and 29 API tests passed. The final build contains 80 pages and 76 sitemap URLs. Focused browser checks passed at 320, 390, 793, 872 and 1440px for motion direction, pause/resume, mobile navigation, article links, canonical metadata, image loading and horizontal overflow. The article passed WCAG A/AA scans at 390px. Reduced-motion and JavaScript-free views were checked for complete readable text. Screenshots are in ignored `outputs/qa/rebrand-announcement/`.

Pre-release production rollback baseline: `7e63c416-64e8-4737-af67-05fa50531ab0`, source `3938c5f`. No form submissions, DNS, production bindings, indexing settings, customer-app changes or email sends are included in this release.

## Customer-care SMS consent — October 31, 2026

Owner requested marketing-site corrections for A2P registration and supplied (925) 397-0073. The contact page now has a public inquiry form with an optional, unchecked SMS consent checkbox; the existing onboarding form uses the same disclosure. Consent identifies Cyber Genie / FK Innovation Partners LLC, limits messages to customer care, and includes variable frequency, rates, automated technology, STOP/HELP, optional consent and policy links. Privacy and Terms now include the corresponding SMS program sections and mobile/consent non-sharing language. The listing-package form explicitly does not enroll anyone in SMS.

Contact inquiries use the existing internal Resend delivery bindings. Both contact and onboarding notifications retain explicit consent (or a no-consent warning), exact disclosure/version, sender number, source and server receipt time. This is a manual record, not a Twilio subscriber integration or automatic SMS confirmation. Phone entry alone never grants consent. Previews remain dry-run; missing configuration and delivery failures fail truthfully. Production binding names were verified without reading their values. No production test inquiry or SMS was sent in this release.

Validation: types, 75-page build, route/commercial audit, 6 carousel tests, 29 API tests, 8 browser journeys and local Cloudflare runtime checks passed. Contact and onboarding submissions were tested only on the dry-run preview; provider acceptance, failures and consent evidence were separately tested with mocked delivery. Privacy, Terms, Contact and Onboarding were checked at 320, 390 and 1440px with no horizontal overflow or WCAG A/AA violations. The broader axe best-practice scan reports the pre-existing shared skip-link landmark advisory; it is outside this change. Screenshots were saved under ignored `outputs/qa/sms/` and the contact form was visually inspected.

Keyword enrollment is deferred: the owner prefers YES to START, but the app reply/consent/suppression flow is not ready or verified. The public site offers website-checkbox opt-in only and does not advertise a working YES or verbal opt-in flow. `docs/sms-campaign.md` contains the website registration wording and future YES implementation handoff. No Twilio campaign was edited or submitted. Twilio's published rules say an approved campaign cannot be edited; if both methods are wanted, finish YES and register both together rather than assuming it can be added later.

Pre-release rollback baseline: production `8daada58-e629-4ede-b33d-1603cc2b57d9`, source `3e6e90c`. No DNS, indexing settings, existing production bindings, pricing or customer-app implementation were changed.

Source `dd09731` was pushed to main and deployed to the permitted review branch: https://148b41d0.cyber-genie-marketing.pages.dev (alias https://cyber-genie-v1.cyber-genie-marketing.pages.dev). All 8 browser journeys and the full runtime checks passed against that hosted dry-run preview. GitHub CI passed: https://github.com/jovekuang/getcybergenie-astro/actions/runs/41233289242. Production deployment was rejected by automatic approval review because the project's separate owner approval to publish was required; production remains unchanged, pending that approval.

The owner subsequently explicitly approved pushing to main and publishing. Production source `8d4e5e1` was deployed as `0a477e1f-bf26-4748-8939-9ada6fda1803` (https://0a477e1f.cyber-genie-marketing.pages.dev), confirmed by Cloudflare as Production / main. A fresh 75-page build and site audit passed before publication. Read-only live browser checks returned 200 for Contact, Onboarding, Privacy and Terms; both consent checkboxes were unchecked and optional, policy links and disclosures were present, and the pages had no horizontal overflow at 390px. The www contact form also loaded correctly. No production API POST, inquiry notification or SMS was sent. Existing Cloudflare `/cdn-cgi/rum` telemetry was observed during navigation. The apex response headers had no `X-Robots-Tag`, consistent with the earlier recorded live state; no indexing configuration was changed. Production screenshots and results are in ignored `outputs/qa/sms/`.

## Metricool visit pixel — October 29, 2026

The owner requested the Metricool image pixel with hash `e39bc09b28080aac12c5fc4bab22fe3f` and production publication. The shared layout inserts a decorative, invisible 1px image on `getcybergenie.com` and `www.getcybergenie.com`. A runtime hostname check prevents requests from Pages previews, localhost, and other hosts. The privacy page discloses Metricool visit and geographic measurement and links to its privacy policy.

Verification before publication: types, 75-page build, site audit, and all 24 carousel/API tests passed. Every built page contains exactly one integration. Executing the built tracker script confirmed one image on each production hostname and none on the Pages preview, localhost, loopback, or a lookalike hostname. No form, DNS, indexing, or production-binding settings were changed.

Published source `2092a80` to production deployment https://81b4ee87.cyber-genie-marketing.pages.dev. GitHub CI passed: https://github.com/jovekuang/getcybergenie-astro/actions/runs/41013839399. Live browser checks on the homepage and privacy page confirmed the exact Metricool image loaded successfully with natural dimensions 1×1. The Pages hostname created no tracking image. Metricool's Verify flow completed with “Your website is now connected!” and its Web connection now shows `getcybergenie.com`. Screenshot evidence is in ignored `outputs/qa/metricool/metricool-connected.png`. The previous production deployment `784e0966-0987-4999-aa5a-02cf30625b55` is the rollback baseline.

## Social profile links — October 29, 2026

Source commit `e33f113` adds accessible footer links for the verified LinkedIn, Facebook, Instagram, and Threads profiles. All use the `getcybergenie` handle; LinkedIn uses `/company/getcybergenie/`. The same centralized list supplies Organization schema `sameAs` values. Existing platform SVG icons are reused, with 44px link targets, keyboard focus indicators, and reduced-motion styling.

Production deployment: `https://784e0966.cyber-genie-marketing.pages.dev`. The owner explicitly approved publishing these links while retaining manual responsibility for Instagram's remaining bio, website link, and business category. Previous production `e7ff48aa-36a9-404a-9541-c93a77449180`, source `0f14648`, is the rollback baseline. Review deployment: `https://6bd57ed4.cyber-genie-marketing.pages.dev`.

Verification: types, 75-page build, site audit, 24 carousel/API tests, local Pages runtime, and hosted review runtime passed. GitHub CI passed for `e33f113`: https://github.com/jovekuang/getcybergenie-astro/actions/runs/41009471658. Production root, www, About, and Pricing returned 200 with all four correct footer URLs and icons; the live footer was visually verified. No production forms were submitted. The browser viewport override did not apply, so this release does not claim a new mobile visual audit.

This release did not change indexing settings, DNS, production bindings, prices, or form behavior. Read-only post-release observations: the apex homepage, About, and Pricing had no `X-Robots-Tag`; www and the Pages deployment retained `noindex, nofollow`. Older indexing notes below are historical snapshots.

Public social profile status at release: LinkedIn, Facebook, and Threads have their new names, handles, official logo, and current intro/website details; LinkedIn and Facebook also have new banners. Instagram's new name, handle, and logo are saved, with its remaining fields handed to the owner. The matching Metricool brand name and custom logo are also updated. Private screenshots and release logs are in ignored `outputs/social-rebrand/`.

## Initial v1 checks — October 28, 2026

Verified locally October 28, 2026. Source snapshot: `jovekuang/fk-innovate-astro` at `fc69a67`. The original repository's tracked files were not changed.

| Check | Result |
|---|---|
| TypeScript | Pass, `tsc --noEmit` |
| Astro build | 75 generated pages |
| Route and indexing parity | 75 routes, 71 sitemap URLs, original per-page indexing decisions retained |
| Legacy redirects | All 42 preserved; Cloudflare runtime confirms final paths and query strings |
| Commercial terms | Source-baseline comparison passes for membership terms, exclusions, Technology Partner, social plans and voice pricing |
| Carousel unit tests | 6 pass |
| API tests | 18 pass, including validation, preview protection, origin checks, escaped email, Reply-To, upstream errors and duplicate CRM acknowledgement |
| Browser journey tests | 6 pass: pricing, mobile keyboard navigation, reduced motion, no-JavaScript fallback, seven-step onboarding, campaign inquiry |
| Responsive review | 24 representative pages at 320, 390, 768, 1024 and 1440px: 120 checks, zero overflow, broken images, duplicate IDs or script errors |
| Automated accessibility | 48 axe scans across mobile/desktop, zero reported WCAG A/AA violations in the selected tags; not a formal accessibility certification |
| Cloudflare runtime | Actual local Pages worker, all routes, both form contracts, noindex headers and real missing-page response pass |
| Artwork | Approved C7 paths retained, trimmed transparent/reversed exports; new favicons and five OG images inspected; retained article artwork reviewed |
| Secret-pattern scan | No credential patterns found in shipping source; `.dev.vars` and generated QA artifacts ignored |

## Visual and interaction evidence

Run `npm run audit:visual` against the Pages preview to regenerate all 120 full-page screenshots and the machine-readable report under `outputs/qa/`. This folder is intentionally not committed. `npm run test:browser` verifies the customer journeys, and `npm run test:runtime` checks actual Worker responses rather than only imported handlers.

The accessibility pass included fixes for white text on teal CTA sections and the listing campaign's small optional-field label. The original site's industry mapping also contained a TypeScript union issue; the fallback entry now explicitly includes its optional display title, without changing its rendered content.

No purchases, bookings, customer messages, CRM writes or live onboarding emails were created by these preview tests.

## Directional mobile performance

Fresh Chromium contexts at 390x844, 4x CPU slowdown, 80ms latency and 10Mbps download. One sample per page, with reduced motion. Local hosts and response compression differ, so these are smoke-test measurements, not production Core Web Vitals or a controlled speed comparison.

| Page | Source LCP | Cyber Genie LCP | Cyber Genie CLS |
|---|---:|---:|---:|
| Home | 604ms | 392ms | 0 |
| Pricing | 436ms | 340ms | 0 |
| Voice AI | 428ms | 332ms | 0 |

All samples are within the plan's LCP 2.5s and CLS 0.1 targets. Recheck on the real custom domain and use field data after launch before making a performance claim.

## Explicit pending items

- Owner legal-copy review and separate approval before enabling indexing.
- Independently test receipt through the newly created `hello@getcybergenie.com` forwarding alias. Its configuration and preserved MX/SPF are verified; inbox delivery through that alias has not been tested.
- Enable indexing only after the remaining readiness checks and owner approval. Production currently sends `X-Robots-Tag: noindex, nofollow`.
- Activate old-domain redirects only in the later approved FK Innovate transition.
- Perform the 24/72-hour checks after actual launch; no future checks have already occurred.

The hosted review preview is deliberately non-indexable and its forms are dry runs. See `launch-runbook.md` for the release sequence and rollback.

## Production connection — October 28, 2026

Owner-approved source commit: `f6a1056` (homepage circles removed and signal background softened). Pushed to `origin/main`; GitHub CI passed: https://github.com/jovekuang/getcybergenie-astro/actions/runs/40755241673.

Production deployment with the configured bindings: https://1a6a4589.cyber-genie-marketing.pages.dev. Both `getcybergenie.com` and `www.getcybergenie.com` show **Active / SSL enabled** in the Cyber Genie Pages project and serve the updated site over HTTPS.

- `npm run check`: types, 75-page build, site audit, six carousel tests and 18 API tests passed.
- Hosted browser journeys: six passed, including pricing, mobile navigation, reduced motion, JavaScript-free fallbacks and dry-run forms.
- Hosted runtime checks passed again after adding live production secrets, confirming previews still force dry runs.
- Production read-only verification passed for all 75 routes, 42 query-preserving redirects, 71 sitemap URLs, root/www HTTPS and a genuine missing-page 404. Cloudflare's normal `/404.html` normalization resolves to the 404 page.
- The two separately approved owned-address production tests were accepted. Website onboarding reached the owner inbox from the new sender, with SPF/DKIM/DMARC passing and correct Reply-To. The listing submission returned CRM acceptance and generated the existing CRM notification in the owner inbox.
- One invalid listing test attempt was rejected by local field validation before CRM delivery; its corrected request used the same stable idempotency key. There was one accepted submission per form.
- Production and Pages hostnames remain non-indexable. No Search Console move, old-domain redirect, app rebranding, customer communication or scheduled monitor was performed.

Private screenshots, DNS snapshots, and sanitized runtime results are under ignored `outputs/qa/launch/`. Credentials are stored only in server settings, not in those artifacts or Git.

## Hosted review verification

Review URL: https://cyber-genie-v1.cyber-genie-marketing.pages.dev/

The hosted Worker passed the same 75-route, 42-redirect, 404, noindex and dry-run API checks. Existing app login, Voice AI demo-entry URL and Calendly booking URL returned HTTP 200; no authenticated app actions or bookings were performed.

The campaign made zero YouTube requests before a visitor clicked its local poster. The public Reel successfully played after click. The original full-length sample (`JkMBX868x60`) was private; the owner supplied replacement `6YQfJk85AP0` on October 28, 2026. YouTube's public metadata confirms the replacement title, “Where the Light Comes Home: 2865 Longspur Way.” The full-length embed and outbound watch link now use that replacement, with the original click-to-load poster. The temporary sample-request fallback was removed. The original video's privacy was not changed.

GitHub CI verified the clean-checkout build, types, site audit, unit tests, actual Pages runtime and browser journeys on Linux. Astro type initialization is explicit, rather than relying on an existing local cache. Submission test scripts reject live custom-domain targets to prevent accidental test emails or customer records.

## Managed-outcome wording review — October 28, 2026

The owner approved replacing the agency-service emphasis with managed outcomes, routine automation, clear scope, and expert oversight. The homepage now uses “More done. Less to manage.” and the approved description beginning “A better website. Calls answered. Less busywork.” The homepage assurance section, About, Pricing, solution delivery labels, retail copy, fund-manager campaign, footer, SEO fallback, and default social preview now use the same direction.

All 21 articles were reviewed; 11 article bodies were revised. Dedicated-person, labor-heavy, per-piece human-review, and overnight-delivery promises were replaced with configured workflows, quality checks, client approval, and agreed request queues. Original slugs, titles, dates, authors, images, and SEO titles were preserved. Safety-related human review and escalation guidance remains in place.

Prices, deliverable counts, request queues, turnaround commitments, exclusions, ownership, cancellation, credits, and guarantee terms were preserved. The Scale marketing label “High-touch strategy and support” was intentionally changed to “Content strategy and support”; that exact label is the only commercial-fixture change, and the existing strict commercial comparison remains enabled.

Verification passed: types, 75-page build, site audit, 24 carousel/API tests, six browser journeys, 75-route/42-redirect dry-run Pages runtime checks, and 120 responsive checks with 48 accessibility scans, zero reported issues, and zero script errors. A scan of all 75 built pages found none of the retired heavy-service phrases. The regenerated default social preview was visually inspected. No live form submissions, production-binding changes, indexing changes, or DNS changes were part of this copy revision.
