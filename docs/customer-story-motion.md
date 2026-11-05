# Customer-story motion showcases

Jove approved the Pool Yeti’s style, shortened the loop to 10 seconds with scene changes every 2.5 seconds, retained 0.6-second transitions, and removed the explanatory caption below the title. On November 4, 2026, Jove requested the same style for First Achievers and The Warehouse and authorized deployment of all three.

## Published presentation

The three approved story records use the reusable `StoryShowcase` component. Every showcase has a silent 10-second H.264 desktop export (1280×720 at 30 fps), a separately composed mobile export (720×900 at 30 fps), optimized posters, an accessible description and a short owner-led title. The explanatory paragraph remains omitted. The three scene transitions last 0.6 seconds; the 0.3-second return-to-opening fade is preserved. Each export is under 1 MB.

Pool Yeti’s combines a fictional lead dashboard and inquiry with labeled conceptual SMS and follow-up graphics. First Achievers shows a fresh public website capture, fictional tour selection, a connected CRM/tour view and post-tour follow-up. The Warehouse uses the owner’s unchanged aerial screenshot, then a fictional inquiry, tentative-hold editor and calendar. The final hold stays explicitly tentative; it does not imply automatic confirmation.

Playback starts muted and inline at 25% visibility, pauses offscreen and in hidden tabs, and preserves an explicit pause. Reduced-motion and data-saving preferences default to the poster, with optional Play. Media failure retains the poster and announces the fallback. Pause and replay controls are keyboard-accessible; no-JavaScript visitors retain the poster, title and accessible description.

## Privacy and production boundaries

Customer applications, records, permissions, bookings and notifications were not changed. No authenticated screenshot or real lead record was exported. New local scene layouts follow the supplied UI references and source layout, populated exclusively with fictional fixtures. Customer/child/staff identities, contact details, dates, IDs, notes, guest counts and dashboard totals are invented; email addresses use `example.com` and phone numbers use reserved 555-01xx ranges. Counts are derived from the sample records. Public business branding, approved owner attribution and actual public website imagery remain original.

Software scenes display “Demo using fictional data”. SMS/follow-up graphics without a corresponding app screen are labeled conceptual illustrations. Scene pages prohibit scripts, connections, forms and frames through CSP and use local fonts and imagery. No customer SDK, production API, auth state or database client is imported.

Production imports only finished media from `src/assets/customer-stories/motion` and the approved showcase metadata. Scene templates and fixture objects remain in `src/drafts/motion`, injected exclusively by `astro.motion.config.mjs`. Normal builds cannot emit `/_motion/` routes or scene fixture code. The three remaining unapproved stories retain their existing unlisted/noindex boundary.

## Reproduction and checks

Use `npm run review:motion:build` and `npm run review:motion` to inspect scene pages and local review copies at loopback port 4351. The main preview is `/_motion/pool-yetis/`; all three review copies are under `/_motion/stories/{published-slug}/`. The published copies are under `/customer-stories/{published-slug}/`.

Clean screenshots were captured through the built-in browser. They and intermediate files stay under ignored `outputs/motion/`, with temporary copies under `/private/tmp/cyber-motion-captures`. Render locally with `node scripts/render-story-motion.mjs --story=pool-yetis`, `--story=first-achievers`, or `--story=warehouse`. Each renderer uses its own scratch directory and atomically installs validated media. `--mobile-only` regenerates only the phone export; `--reuse-render` reuses an existing scratch render after validating its metadata. FFmpeg/FFprobe are required for production-media checks.

Run the full site check, `npm run test:showcase`, `npm run check:motion`, the review build and consent-boundary check, Cloudflare runtime checks and browser journeys. Media checks require exactly three public showcases, six silent 10-second exports with the expected dimensions/frame rate and byte budgets, and no scene routes/fixtures in the normal build. CI installs FFmpeg explicitly and verifies the same media contracts. Browser journeys verify all three mobile videos and explicit playback for reduced-motion visitors.

Release validation passed: full site check (81 routes, 77 sitemap entries, zero site-audit errors, six carousel and 29 API tests); five playback/fictional-fixture tests; six media metadata/size checks; three-approved/three-pending consent boundary; all nine browser journeys, including explicit reduced-motion playback of each mobile showcase; Cloudflare runtime (81 routes, 45 redirects, dry-run forms). The local-only motion build also passed. Final public-host playback, canonical/indexability and media requests are verified after deployment.
