import { isPreview, validatedOrigin } from "../_shared/request-policy.ts";
import { readSmsConsent, smsConsentRecord } from "../_shared/sms-consent.ts";

type Environment = {
  RESEND_API_KEY?: string;
  ONBOARDING_TO_EMAIL?: string;
  ONBOARDING_FROM_EMAIL?: string;
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
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || /[\r\n]/.test(email)) errors.push("Enter a valid email address.");
  const startedAt = Number(payload.startedAt);
  if (!Number.isFinite(startedAt) || Date.now() - startedAt < 4000) errors.push("Please take a moment to review your message before sending.");
  const consent = readSmsConsent(payload, phone, errors);
  if (errors.length) return json({ message: errors.join(" ") }, 400);
  if (isPreview(request)) return json({ ok: true, dryRun: true });
  if (env.ONBOARDING_DRY_RUN === "true" || !env.RESEND_API_KEY || !env.ONBOARDING_FROM_EMAIL || !env.ONBOARDING_TO_EMAIL) {
    return json({ message: "This form is temporarily unavailable. Please email hello@getcybergenie.com." }, 503);
  }
  const text = `Name: ${name}\nEmail: ${email}\nPhone: ${phone || "Not provided"}\n\nMessage:\n${message}\n\nSMS consent:\n${smsConsentRecord(consent, `${origin}/contact/#message`)}\n\nPhone numbers without SMS consent are for calls only.`;
  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${env.RESEND_API_KEY}`, "Content-Type": "application/json" },
      body: JSON.stringify({ from: env.ONBOARDING_FROM_EMAIL, to: [env.ONBOARDING_TO_EMAIL], reply_to: email, subject: "[Cyber Genie] Contact inquiry", text }),
    });
    if (!response.ok) return json({ message: "Your message could not be sent. Please try again or email hello@getcybergenie.com." }, 502);
  } catch { return json({ message: "Your message could not be sent. Please try again or email hello@getcybergenie.com." }, 502); }
  return json({ ok: true });
};
