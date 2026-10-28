import { isPreview, productionHost, validatedOrigin } from "../_shared/request-policy.ts";
import {
  capabilityOptions,
  applicationCapabilityValues,
  labelForOption,
  materialOptions,
  normalizeWebsitePlan,
  outcomeOptions,
  pageCountOptions,
  visualDirectionOptions,
  websitePlanLabels,
} from "../../src/data/websiteOnboarding.ts";

type Environment = {
  RESEND_API_KEY?: string;
  ONBOARDING_TO_EMAIL?: string;
  ONBOARDING_FROM_EMAIL?: string;
  ONBOARDING_DRY_RUN?: string;
};

type FunctionContext = {
  request: Request;
  env: Environment;
};

type Submission = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  company: string;
  hasWebsite: "yes" | "no";
  websiteUrl: string;
  businessDescription: string;
  estimatedPages: string;
  outcomes: string[];
  materials: string[];
  socialUrls: string;
  capabilities: string[];
  applicationDetails: string;
  visualDirections: string[];
  timeline: string;
  notes: string;
  plan: string;
  originatingPage: string;
  startedAt: string;
  website: string;
};

const MAX_REQUEST_BYTES = 50_000;
const MIN_COMPLETION_MS = 4_000;

const jsonResponse = (body: Record<string, unknown>, status = 200) =>
  new Response(JSON.stringify(body), {
    status,
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Cache-Control": "no-store",
      "X-Content-Type-Options": "nosniff",
    },
  });

const isRecord = (value: unknown): value is Record<string, unknown> =>
  typeof value === "object" && value !== null && !Array.isArray(value);

const readString = (
  payload: Record<string, unknown>,
  key: string,
  maxLength: number,
  errors: string[],
  required = false,
) => {
  const value = typeof payload[key] === "string" ? payload[key].trim() : "";
  if (required && !value) errors.push(`${key} is required.`);
  if (value.length > maxLength) errors.push(`${key} is too long.`);
  return value.slice(0, maxLength);
};

const readOptions = (
  payload: Record<string, unknown>,
  key: string,
  allowed: Set<string>,
  errors: string[],
  { required = false, maxChoices = allowed.size }: { required?: boolean; maxChoices?: number } = {},
) => {
  const value = Array.isArray(payload[key])
    ? payload[key].filter((entry): entry is string => typeof entry === "string")
    : [];
  const unique = [...new Set(value)];
  if (required && unique.length === 0) errors.push(`${key} requires at least one selection.`);
  if (unique.length > maxChoices) errors.push(`${key} has too many selections.`);
  if (unique.some((entry) => !allowed.has(entry))) errors.push(`${key} contains an invalid selection.`);
  return unique.filter((entry) => allowed.has(entry)).slice(0, maxChoices);
};

const isHttpUrl = (value: string) => {
  try {
    const url = new URL(value);
    return url.protocol === "http:" || url.protocol === "https:";
  } catch {
    return false;
  }
};

const escapeHtml = (value: string) =>
  value.replace(/[&<>'"]/g, (character) => {
    const entities: Record<string, string> = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      "'": "&#39;",
      '"': "&quot;",
    };
    return entities[character];
  });

const cleanHeaderText = (value: string) => value.replace(/[\r\n]+/g, " ").trim();

const validateSubmission = (payload: Record<string, unknown>) => {
  const errors: string[] = [];
  const firstName = readString(payload, "firstName", 80, errors, true);
  const lastName = readString(payload, "lastName", 80, errors, true);
  const email = readString(payload, "email", 160, errors, true).toLowerCase();
  const phone = readString(payload, "phone", 40, errors);
  const company = readString(payload, "company", 160, errors, true);
  const hasWebsiteValue = readString(payload, "hasWebsite", 3, errors, true);
  const hasWebsite = hasWebsiteValue === "yes" || hasWebsiteValue === "no" ? hasWebsiteValue : null;
  const websiteUrl = readString(payload, "websiteUrl", 300, errors);
  const businessDescription = readString(payload, "businessDescription", 1800, errors);
  const estimatedPages = readString(payload, "estimatedPages", 40, errors);
  const socialUrls = readString(payload, "socialUrls", 1800, errors);
  const applicationDetails = readString(payload, "applicationDetails", 1800, errors);
  const timeline = readString(payload, "timeline", 300, errors);
  const notes = readString(payload, "notes", 2400, errors);
  const plan = readString(payload, "plan", 40, errors);
  const originatingPage = readString(payload, "originatingPage", 500, errors);
  const startedAt = readString(payload, "startedAt", 24, errors, true);
  const website = readString(payload, "website", 200, errors);

  const outcomes = readOptions(
    payload,
    "outcomes",
    new Set(outcomeOptions.map((option) => option.value)),
    errors,
    { required: true },
  );
  const materials = readOptions(
    payload,
    "materials",
    new Set(materialOptions.map((option) => option.value)),
    errors,
    { required: true },
  );
  const capabilities = readOptions(
    payload,
    "capabilities",
    new Set(capabilityOptions.map((option) => option.value)),
    errors,
    { required: true },
  );
  const visualDirections = readOptions(
    payload,
    "visualDirections",
    new Set(visualDirectionOptions.map((option) => option.value)),
    errors,
    { required: true, maxChoices: 2 },
  );

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errors.push("email is invalid.");
  if (!hasWebsite) errors.push("hasWebsite must be yes or no.");
  if (hasWebsite === "yes" && !isHttpUrl(websiteUrl)) errors.push("websiteUrl must be a valid URL.");
  if (hasWebsite === "no" && !businessDescription) errors.push("businessDescription is required.");
  if (
    hasWebsite === "no" &&
    !pageCountOptions.some((option) => option.value === estimatedPages)
  ) {
    errors.push("estimatedPages is required.");
  }
  if (materials.includes("social-media-profiles") && !socialUrls) errors.push("socialUrls is required.");
  if (
    applicationCapabilityValues.some((value) => capabilities.includes(value)) &&
    !applicationDetails
  ) {
    errors.push("applicationDetails is required.");
  }

  const startTime = Number(startedAt);
  if (!Number.isFinite(startTime) || Date.now() - startTime < MIN_COMPLETION_MS) {
    errors.push("The form was completed too quickly.");
  }

  return {
    errors,
    submission: {
      firstName,
      lastName,
      email,
      phone,
      company,
      hasWebsite: hasWebsite ?? "no",
      websiteUrl,
      businessDescription,
      estimatedPages,
      outcomes,
      materials,
      socialUrls,
      capabilities,
      applicationDetails,
      visualDirections,
      timeline,
      notes,
      plan,
      originatingPage,
      startedAt,
      website,
    } satisfies Submission,
  };
};

const displayList = (values: string[], options: { value: string; label: string }[]) =>
  values.map((value) => labelForOption(options, value));

const buildEmail = (submission: Submission) => {
  const normalizedPlan = normalizeWebsitePlan(submission.plan);
  const planLabel = normalizedPlan ? websitePlanLabels[normalizedPlan] : "Needs recommendation";
  const timestamp = new Date().toLocaleString("en-US", {
    timeZone: "America/Los_Angeles",
    dateStyle: "medium",
    timeStyle: "short",
  });
  const rows: Array<[string, string]> = [
    ["Plan attribution", planLabel],
    ["Name", `${submission.firstName} ${submission.lastName}`],
    ["Email", submission.email],
    ["Phone", submission.phone || "Not provided"],
    ["Business", submission.company],
    ["Existing website", submission.hasWebsite === "yes" ? "Yes" : "No"],
    ["Website URL", submission.websiteUrl || "Not applicable"],
    ["Business description", submission.businessDescription || "Available from existing website"],
    ["Estimated pages", submission.estimatedPages ? labelForOption(pageCountOptions, submission.estimatedPages) : "Not applicable"],
    ["Website goals", displayList(submission.outcomes, outcomeOptions).join("\n")],
    ["Available materials", displayList(submission.materials, materialOptions).join("\n")],
    ["Social profiles", submission.socialUrls || "Not provided"],
    ["Website capabilities", displayList(submission.capabilities, capabilityOptions).join("\n")],
    ["Application or integration details", submission.applicationDetails || "Not applicable"],
    ["Visual directions", displayList(submission.visualDirections, visualDirectionOptions).join("\n")],
    ["Timeline or priority", submission.timeline || "Not provided"],
    ["Additional notes", submission.notes || "Not provided"],
    ["Originating page", submission.originatingPage || "Direct visit"],
    ["Submitted", `${timestamp} PT`],
  ];

  const text = rows.map(([label, value]) => `${label}:\n${value}`).join("\n\n");
  const htmlRows = rows
    .map(
      ([label, value]) =>
        `<tr><th style="padding:12px 14px;text-align:left;vertical-align:top;border-bottom:1px solid #e6e3df;width:190px;color:#115e59;">${escapeHtml(label)}</th><td style="padding:12px 14px;border-bottom:1px solid #e6e3df;white-space:pre-line;">${escapeHtml(value)}</td></tr>`,
    )
    .join("");
  const html = `<!doctype html><html><body style="margin:0;background:#f6f5f2;font-family:Arial,sans-serif;color:#242321;"><div style="max-width:760px;margin:0 auto;padding:32px 18px;"><div style="background:#fff;border:1px solid #dedad3;border-top:4px solid #0f766e;"><div style="padding:24px 28px 14px;"><p style="margin:0 0 8px;color:#0f766e;font-size:12px;font-weight:700;text-transform:uppercase;">Cyber Genie · Website onboarding</p><h1 style="margin:0;font-size:26px;">${escapeHtml(submission.company)}</h1><p style="margin:8px 0 0;color:#68635e;">${escapeHtml(planLabel)}</p></div><table role="presentation" style="width:100%;border-collapse:collapse;font-size:15px;line-height:1.5;">${htmlRows}</table></div></div></body></html>`;

  return {
    subject: `[Cyber Genie Website Onboarding] ${cleanHeaderText(submission.company)} - ${planLabel}`,
    text,
    html,
  };
};

export const onRequestPost = async ({ request, env }: FunctionContext) => {
  const origin = validatedOrigin(request);
  if (!origin) return jsonResponse({ message: "Please submit this form from our website." }, 403);

  const contentType = request.headers.get("content-type") ?? "";
  if (!contentType.toLowerCase().includes("application/json")) {
    return jsonResponse({ message: "Submit the form as JSON." }, 415);
  }

  const contentLength = Number(request.headers.get("content-length") ?? "0");
  if (contentLength > MAX_REQUEST_BYTES) {
    return jsonResponse({ message: "The submission is too large." }, 413);
  }

  let payload: unknown;
  try {
    const body = await request.text();
    if (new TextEncoder().encode(body).byteLength > MAX_REQUEST_BYTES) return jsonResponse({ message: "The submission is too large." }, 413);
    payload = JSON.parse(body);
  } catch {
    return jsonResponse({ message: "The submission could not be read." }, 400);
  }

  if (!isRecord(payload)) return jsonResponse({ message: "The submission is invalid." }, 400);

  // Return a normal response to honeypot submissions without sending email.
  if (typeof payload.website === "string" && payload.website.trim()) {
    return jsonResponse({ ok: true });
  }

  const { errors, submission } = validateSubmission(payload);
  if (errors.length > 0) {
    return jsonResponse(
      { message: "Please review the form and complete the required information.", fields: errors },
      400,
    );
  }

  if (isPreview(request)) return jsonResponse({ ok: true, dryRun: true });
  if (env.ONBOARDING_DRY_RUN === "true") {
    if (new URL(request.url).hostname === productionHost) return jsonResponse({ message: "This form is not ready to receive requests yet. Please email hello@getcybergenie.com." }, 503);
    return jsonResponse({ ok: true, dryRun: true });
  }

  if (!env.RESEND_API_KEY || !env.ONBOARDING_TO_EMAIL || !env.ONBOARDING_FROM_EMAIL) {
    console.error("Website onboarding email configuration is incomplete.");
    return jsonResponse({ message: "Email delivery is temporarily unavailable. Please try again shortly." }, 503);
  }

  const email = buildEmail(submission);
  let resendResponse: Response;
  try {
    resendResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${env.RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: env.ONBOARDING_FROM_EMAIL,
        to: [env.ONBOARDING_TO_EMAIL],
        reply_to: submission.email,
        subject: email.subject,
        html: email.html,
        text: email.text,
      }),
    });
  } catch {
    console.error("Website onboarding email request failed before receiving a response.");
    return jsonResponse({ message: "We could not send your submission. Please try again." }, 502);
  }

  if (!resendResponse.ok) {
    let providerErrorId = "unknown";
    try {
      const providerBody = (await resendResponse.json()) as { request_id?: string; id?: string };
      providerErrorId = providerBody.request_id ?? providerBody.id ?? "unknown";
    } catch {
      // Keep logs free of customer input and provider response bodies.
    }
    console.error(`Website onboarding email failed with status ${resendResponse.status}; id=${providerErrorId}.`);
    return jsonResponse({ message: "We could not send your submission. Please try again." }, 502);
  }

  return jsonResponse({ ok: true });
};
