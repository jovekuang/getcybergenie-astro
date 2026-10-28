# Cyber Genie marketing

The complete Astro marketing site for **Cyber Genie**, at **https://getcybergenie.com**. Based on FK Innovate's audited `fc69a67` snapshot, in a separate repository and Cloudflare Pages project. The original marketing site and the application stay independent.

Review preview: https://cyber-genie-v1.cyber-genie-marketing.pages.dev/

## Development

Use Node >=22.12 and the committed lockfile.

```sh
npm ci
npm run dev
```

For a realistic preview including the two server-side forms:

```sh
cp .dev.vars.example .dev.vars
npm run build
npm run dev:pages
```

Open http://127.0.0.1:8788. Local and `*.pages.dev` requests always validate forms in dry-run mode. Their success screens explicitly state that nothing was sent. No production credentials are needed for preview testing.

## Verification

```sh
npm run check
npm run test:runtime    # Requires the local Pages preview
npx playwright install chromium
npm run test:browser    # Requires the local Pages preview
npm run audit:visual   # 24 representative pages at 320/390/768/1024/1440px
```

`CHROMIUM_PATH` can select an already-installed browser. `TEST_BASE_URL` can target the hosted review preview. Browser checks must only target a dry-run preview; never run submission tests against the production custom domain.

The baseline fixture locks 75 routes, 71 sitemap entries, all 42 legacy redirects, article identities, and the reviewed commercial terms. The source for current prices and terms remains `src/data/solutions.ts`. Brand, site origin, public email, app and booking URLs are in `src/data/brand.ts`.

## Brand assets

The approved C7 thumbs-up master lives in `branding/source/`. `npm run assets:brand` creates the trimmed monochrome SVG/PNG, reverse versions, wordmarks, favicons, and five Open Graph cards. SVG paths are preserved; no unapproved exploratory artwork is included. The inline genie inherits `currentColor`.

Shared visual tokens and retained motion rules are in `src/styles.css`; new mascot and layout components are in `src/styles/cyber-genie.css`. Inter body and Manrope headings are locally hosted. No advertising or tracking platform was added.

## Deployment

GitHub: https://github.com/jovekuang/getcybergenie-astro

Cloudflare Pages project: **cyber-genie-marketing**. This is a direct-upload project; GitHub CI verifies changes but does not automatically deploy them.

Review preview:

```sh
npm run check
npx wrangler pages deploy dist --project-name=cyber-genie-marketing --branch=cyber-genie-v1
```

After design, legal-copy, domain and integration readiness approval, `npm run deploy` builds and deploys the main branch. It targets only the new Pages project. Custom-domain configuration is a separate action.

All `pages.dev` hosts are non-indexable. The custom domain also remains non-indexable unless `SITE_INDEXABLE=true` is explicitly configured. Keep that release gate closed until the production checks in [the launch runbook](docs/launch-runbook.md) pass.

## Boundaries

- Customer portal: https://app.fkinnovate.com; existing accounts remain valid.
- Booking: existing Jove/FK Capital Calendly link.
- Public contact: hello@getcybergenie.com.
- Legal service operator: FK Innovation Partners LLC.
- Footer: Cyber Genie by FK Innovate.
- No app, authentication, subscription, LLC, social-account or old-domain migration is part of this release.

See [launch runbook](docs/launch-runbook.md), [verification record](docs/verification.md), and [deferred old-domain map](docs/old-domain-redirect-map.csv).
