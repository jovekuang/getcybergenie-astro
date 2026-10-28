# Cyber Genie v1 verification

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

- Owner design and legal-copy review before production launch.
- Verify/create `hello@getcybergenie.com` forwarding after a fresh Porkbun sign-in. Existing public forwarding MX/SPF were confirmed; actual alias delivery was not.
- Authenticate the new Resend sender and configure production server bindings.
- Verify actual CRM campaign origin allowlist and Turnstile requirement; retain the existing business/form/campaign identities.
- Connect the approved custom domain, test controlled production delivery and enable indexing only after readiness checks pass.
- Activate old-domain redirects only in the later approved FK Innovate transition.
- Perform the 24/72-hour checks after actual launch; no future checks have already occurred.

The hosted review preview is deliberately non-indexable and its forms are dry runs. See `launch-runbook.md` for the release sequence and rollback.

## Hosted review verification

Review URL: https://cyber-genie-v1.cyber-genie-marketing.pages.dev/

The hosted Worker passed the same 75-route, 42-redirect, 404, noindex and dry-run API checks. Existing app login, Voice AI demo-entry URL and Calendly booking URL returned HTTP 200; no authenticated app actions or bookings were performed.

The campaign made zero YouTube requests before a visitor clicked its local poster. The public Reel successfully played after click. The original full-length sample (`JkMBX868x60`) was private; the owner supplied replacement `6YQfJk85AP0` on October 28, 2026. YouTube's public metadata confirms the replacement title, “Where the Light Comes Home: 2865 Longspur Way.” The full-length embed and outbound watch link now use that replacement, with the original click-to-load poster. The temporary sample-request fallback was removed. The original video's privacy was not changed.

GitHub CI verified the clean-checkout build, types, site audit, unit tests, actual Pages runtime and browser journeys on Linux. Astro type initialization is explicit, rather than relying on an existing local cache. Submission test scripts reject live custom-domain targets to prevent accidental test emails or customer records.
