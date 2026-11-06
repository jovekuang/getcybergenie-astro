import { isPreview, validatedOrigin } from "../_shared/request-policy.ts";
import { readSmsConsent, smsConsentRecord } from "../_shared/sms-consent.ts";

type Environment = {
  MARKETING_CONTACT_URL?: string;
  MARKETING_CONTACT_TOKEN?: string;
  ONBOARDING_DRY_RUN?: string;
};
const json = (body: Record<string, unknown>, status = 200) => Response.json(body, {
  status, headers: { "Cache-Control": "no-store", "X-Content-Type-Options": "nosniff" },
});
export const onRequestPost = async ({ request, env }: { request: Request; env: Environment }) => {
  const origin = validatedOrigin(request);
  if (!origin) return json({ message: "Please submit this form from our website." }, 403);
  if (!request.headers.get("content-type")?.toLowerCase().includes("application/json")) {
    return json({ message: "Submit the form as JSON." }, 415);
  }
  if (Number(request.headers.get("content-length")) > 10_000) return json({ message: "The submission is too large." }, 413);
  let payload: Record<string, unknown>;
  try {
    const body = await request.text();
    if (new TextEncoder().encode(body).byteLength > 10_000) return json({ message: "The submission is too large." }, 413);
    const parsed: unknown = JSON.parse(body);
    if (!parsed || typeof parsed !== "object" || Array.isArray(parsed)) return json({ message: "The submission is invalid." }, 400);
    payload = parsed as Record<string, unknown>;
  } catch { return json({ message: "The submission could not be read." }, 400); }
  if (typeof payload.website === "string" && payload.website.trim()) return json({ ok: true });
  const errors: string[] = [];
  const field = (key: string, limit: number, required = false) => {
    const value = typeof payload[key] === "string" ? payload[key].trim() : "";
    if ((required && !value) || value.length > limit) errors.push(`Please review ${key}.`);
    return value.slice(0, limit);
  };
  const name = field("name", 160, true);
  const email = field("email", 160, true);
  const phone = field("phone", 40);
  const message = field("message", 2400, true);
  const submissionId = field("submissionId", 36, true);
  if (!/^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(submissionId)) errors.push("Please reload the form before sending.");
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || /[\r\n]/.test(email)) errors.push("Enter a valid email address.");
  const startedAt = Number(payload.startedAt);
  if (!Number.isFinite(startedAt) || Date.now() - startedAt < 4000) errors.push("Please take a moment to review your message before sending.");
  const consent = readSmsConsent(payload, phone, errors);
  if (errors.length) return json({ message: errors.join(" ") }, 400);
  if (isPreview(request)) return json({ ok: true, dryRun: true });
  const contactUrl = env.MARKETING_CONTACT_URL?.trim();
  const token = env.MARKETING_CONTACT_TOKEN?.trim();
  // Never forward this server credential to a browser-selected or arbitrary host.
  if (env.ONBOARDING_DRY_RUN === "true" || contactUrl !== "https://psrlivpzkmyaubchqywr.supabase.co/functions/v1/receive-marketing-contact" || !token || token.length < 32) {
    return json({ message: "This form is temporarily unavailable. Please email hello@getcybergenie.com." }, 503);
  }
  try {
    const response = await fetch(contactUrl, {
      method: "POST",
      signal: AbortSignal.timeout(30_000),
      headers: { "X-Marketing-Contact-Token": token, "Content-Type": "application/json" },
      body: JSON.stringify({ submission_id: submissionId, name, email, phone, message, sms_consent: consent, sms_consent_record: smsConsentRecord(consent, `${origin}/contact/#message`) }),
    });
    const result = await response.json().catch(() => ({})) as { accepted?: boolean };
    if (!response.ok || result.accepted !== true) return json({ message: "We could not confirm email delivery. Please retry this form or email hello@getcybergenie.com." }, 502);
  } catch { return json({ message: "Your message could not be sent. Please try again or email hello@getcybergenie.com." }, 502); }
  return json({ ok: true });
};
