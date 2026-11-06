# Contact Introduction Email Handoff

The `/contact/` form now forwards to the customer app instead of calling Resend directly. The app sends both the existing internal inquiry notification and a branded service/customer-story introduction to the person who submitted the form.

## Release Prerequisites

The companion implementation is in `fk-innovation-webworks`:

- Migration: `supabase/migrations/20261105190000_marketing_contact_delivery.sql`.
- Edge Function: `receive-marketing-contact`, with platform JWT verification disabled and a required server-token check inside the handler.
- Rendering/delivery tests: `npm run test:marketing-contact`.
- Full deployment and recovery notes: `docs/marketing-contact-email.md`.

The migration must use the app's platform migration runner, with original SQL preserved and generated Drizzle correspondence recorded. Do not deploy a second copy from this repository.

Before publishing the updated marketing form, configure these **server-only production Pages bindings**:

- `MARKETING_CONTACT_URL`: `https://psrlivpzkmyaubchqywr.supabase.co/functions/v1/receive-marketing-contact`.
- `MARKETING_CONTACT_TOKEN`: the same securely generated random token (at least 32 characters) configured in the app's Edge Function secrets.

Never place the token in `PUBLIC_*`, browser JavaScript, source, deployment prompts, or logs. Keep existing Resend/onboarding bindings because `/api/website-onboarding` still uses them.

Deploy the app schema/function first, verify configuration and anonymous rejection without sending, then publish this repository's contact route and page together through the existing Cloudflare Pages deployment workflow. Missing configuration fails closed; there is no direct Resend fallback. Do not submit real recipient data merely to test deployment without authorization.

## Behavior

- Preview/localhost requests remain validated dry runs with no outgoing email.
- The browser preserves the pending submission UUID and a SHA-256 field hash in session storage, not the form's personal data. Unchanged retries/reloads reuse that UUID; changed fields receive a new one.
- App-owned original email snapshots and separate receipts make a partial failure retryable without resending an accepted notification.
- The lead introduction has separate Websites and Custom Web Apps sections and uses `jove@getcybergenie.com` as Reply-To. The notification still goes to `jove@fkcapital.xyz` with the lead as Reply-To.
- This does not create an account or CRM record, enroll a campaign, send SMS, or enable scheduled email processing.
- SQL registration limits new identities to 5 per recipient per 24 hours and 100 total per hour. Existing inquiry retries do not count again.
- Incomplete sends older than 23 hours or over the five-claim budget require provider-receipt review in the app; no new retry cron is added.

## Local Checks

- `npm run test:api`: forwarding, explicit SMS evidence, configuration failures, dry-run protection, and provider failures with mocked fetch.
- `npm run check:types` and `npm run build`.
- `TEST_BASE_URL=http://127.0.0.1:<port> node --test --test-name-pattern='contact retries' tests/browser.test.mjs`: use the built local site, with API calls mocked by this test. `CHROMIUM_PATH` can select the installed test browser.

No production deployment, secret creation, or real email send is implied by these local changes.
