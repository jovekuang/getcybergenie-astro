# Cyber Genie launch runbook

## Current release boundary

On October 28, 2026, the owner approved deploying `main` and connecting `getcybergenie.com`, then separately approved the `www` hostname, a domain-restricted Resend sending key, and two controlled production form tests. Both custom domains are active with SSL on **cyber-genie-marketing**. `SITE_INDEXABLE=false` remains configured. The old marketing site, app identity, email, and old-domain redirects were not changed.

Review deployment forms never send email or write CRM records, even with production bindings present. Enabling indexing and activating old-domain redirects still require their separate approvals and readiness checks. Existing terms/privacy source remains draft legal copy requiring owner review.

### Verified production setup

- Registrar remains Porkbun. Authoritative DNS now uses `derek.ns.cloudflare.com` and `hattie.ns.cloudflare.com` on Cloudflare's Free plan.
- The existing forwarding MX records, root SPF, wildcard target and ACME TXT records were preserved. Root and `www` now point to the new Pages project.
- Porkbun forwarding alias `hello@getcybergenie.com` → `jove@fkcapital.xyz` was created. A separate receiving test of that alias remains outstanding.
- Resend verified `getcybergenie.com`. Its DKIM TXT, `rsend` / `send` DNS-only CNAME records, and monitoring DMARC record were added to both DNS zones before cutover. Receiving in Resend remains disabled.
- A sending-only Resend key restricted to `getcybergenie.com` is stored in encrypted Pages production settings. No key was committed. Its temporary transfer file was removed.
- Website onboarding delivered to the owner inbox with SPF, DKIM and DMARC passing, and the submitter's Reply-To preserved.
- The existing Realtor Listing Song & Video CRM source and token were reused. The source was active with no origin allowlist; a deliberately invalid, non-writing probe from the new origin passed origin/bot checks. No allowlist or bot protection was disabled. The controlled production submission was accepted and its existing CRM notification reached the owner inbox.
- No manifest or app/backend identity migration was necessary for that existing manual CRM source.

See `verification.md` for the release checks. For a later deployment, retain the configured production bindings and keep the preview protections in place.

## Production configuration

Set server-side bindings in the **cyber-genie-marketing** Pages project's production environment. Do not put secrets in GitHub source, browser code, screenshots, reports, or `PUBLIC_*` variables.

| Binding | Production value/purpose |
|---|---|
| `RESEND_API_KEY` | A server-side Resend key with permission to send from the newly verified domain |
| `ONBOARDING_TO_EMAIL` | `jove@fkcapital.xyz` |
| `ONBOARDING_FROM_EMAIL` | `Cyber Genie Onboarding <onboarding@getcybergenie.com>` after sender verification |
| `ONBOARDING_DRY_RUN` | `false`; `true` on the custom domain deliberately returns 503 instead of false delivery success |
| `FK_CRM_CAPTURE_URL` | Existing approved CRM capture endpoint |
| `FK_CRM_FORM_TOKEN` | Existing campaign's server-side form token |
| `CRM_CAPTURE_DRY_RUN` | `false` |
| `SITE_INDEXABLE` | Start `false`; change to `true` only at approved public release |

Keep legacy `FK_CRM_*` binding names. They identify the unchanged backend contract, not the public brand. Preview requests always return an explicit dry-run result after validation. Neither provider errors nor missing configuration are reported as successful delivery.

The campaign proxy now forwards a same-origin validated `Origin`. Before production, inspect the actual campaign CRM form: retain its business, form identity, field mappings, campaign ID and tags; include exactly `https://getcybergenie.com` in any existing `allowed_origins`. Retain the old origin while the old site operates. Never use a wildcard to make the request pass. If `require_turnstile` is enabled, connect the real site-key/token flow before launch; do not turn off the protection. That authenticated backend setting has not been verified in this release.

## Email and DNS

Public DNS observed October 28, 2026:

- Authoritative nameservers are Porkbun's `salvador`, `curitiba`, `fortaleza`, and `maceio` servers.
- MX priority 10 `fwd1.porkbun.com`; priority 20 `fwd2.porkbun.com`.
- Root SPF: `v=spf1 include:_spf.porkbun.com ~all`.

This was the pre-cutover DNS snapshot. The alias was subsequently created and the complete zone copied as recorded above; alias inbox delivery still needs its own receiving test.

Before launch:

1. Verify that exact forwarding alias and its destination. No paid mailbox trial is needed.
2. Add the sending domain in Resend. Publish its exact DKIM and MAIL FROM/SPF records. Keep a single SPF record per hostname; do not replace the forwarding MX with sending-provider MX at the root.
3. Publish an appropriate DMARC record after checking all legitimate senders. Do not claim alignment until a delivered message's headers confirm it.
4. If moving authoritative DNS to Cloudflare for the Pages apex domain, copy the full existing zone first, including forwarding, sender verification, DMARC and any unrelated records. Do not merely change nameservers with an empty zone.
5. Run an owned-address receiving test and a controlled production onboarding notification. Verify inbox delivery, authentication and customer Reply-To. Do not submit real customer data for tests.

Free forwarding is receive-only; outgoing replies initially come from the existing mailbox. A later Google Workspace transition replaces the root MX, creates the `hello` mailbox/alias, and revisits SPF/DKIM/DMARC. Resend sender authentication must continue to work. Do not operate two unrelated root mailbox providers simultaneously.

## Full-length campaign sample

The owner-approved full-length replacement is `https://youtu.be/6YQfJk85AP0`; the campaign embeds it through YouTube's privacy-enhanced host behind a local click-to-load poster. The public Reel remains in place. The original private video was left unchanged. Verify anonymous playback when replacing either sample; do not change video privacy without owner authorization.

## Approval and launch order

1. Review the preview: all page families, prices, character, mobile navigation, forms and legal copy. Agree the final production commit.
2. Configure and verify server bindings and CRM origin requirements.
3. Connect the new Pages custom domain using Cloudflare's custom-domain workflow, preserving the current email DNS. Wait for active domain status and valid HTTPS.
4. Deploy the approved commit to the new project's main branch with indexing still off.
5. Check `/`, representative service/industry/article/campaign pages, `/sitemap.xml`, 404 status, redirect query strings, old app URLs, booking links and both production form deliveries. Check that every `pages.dev` URL still has `X-Robots-Tag: noindex, nofollow`.
6. After owner approval, set `SITE_INDEXABLE=true` in production, redeploy, and verify its absence on the custom domain and its presence on Pages hosts. Verify the existing four noindex pages retain their own robots metadata.
7. Verify the domain in Search Console and submit the new sitemap. Do not submit Change of Address yet, because the old-domain transition is deferred.

## Deferred FK Innovate transition

Use `old-domain-redirect-map.csv` only after the owner approves that later change. Redirect each old marketing URL to its corresponding final new URL, preserving query strings. Resolve legacy shortcuts directly to their final new destination to avoid chains.

Do not redirect `app.fkinnovate.com`, API POSTs, email, or unrelated subdomains. Retain ownership and HTTPS for the old domain. Update the old site's migration messaging and Search Console Change of Address only when the actual permanent move happens. Avoid a prolonged duplicate-site overlap.

## Rollback and observation

Record the last good Pages deployment before every production change. Roll back to that deployment if customer journeys fail. Keep indexing off for an incomplete release. A production form failure must show the customer a truthful error and leave the public contact email available.

Check immediately, then at 24 and 72 hours after launch: function errors, delivery receipts, unknown routes, redirect behavior, email authentication, SSL, Search Console coverage and mobile performance. These are future post-launch checks; no background monitor has been scheduled.
