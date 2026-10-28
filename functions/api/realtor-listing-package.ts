import { isPreview, productionHost, validatedOrigin } from "../_shared/request-policy.ts";
type Environment = {
  FK_CRM_CAPTURE_URL?: string;
  FK_CRM_FORM_TOKEN?: string;
  CRM_CAPTURE_DRY_RUN?: string;
};

type FunctionContext = {
  request: Request;
  env: Environment;
};

type Submission = {
  name: string;
  email: string;
  phone: string;
  propertyAddress: string;
  musicalStyle: string;
  specialRequests: string;
  originatingPage: string;
  startedAt: string;
  website: string;
  idempotencyKey: string;
};

const MAX_REQUEST_BYTES = 20_000;
const MIN_COMPLETION_MS = 4_000;
const musicalStyles: Record<string, string> = {
  pop: "Pop",
  rock: "Rock",
  country: "Country",
  "r-and-b-soul": "R&B / Soul",
  jazz: "Jazz",
  electronic: "Electronic",
  "acoustic-folk": "Acoustic / Folk",
  "orchestral-cinematic": "Orchestral / Cinematic",
  "other-not-sure": "Other / Not sure",
};

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

const validateSubmission = (payload: Record<string, unknown>) => {
  const errors: string[] = [];
  const name = readString(payload, "name", 160, errors, true);
  const email = readString(payload, "email", 160, errors, true).toLowerCase();
  const phone = readString(payload, "phone", 40, errors, true);
  const propertyAddress = readString(payload, "propertyAddress", 300, errors, true);
  const musicalStyle = readString(payload, "musicalStyle", 40, errors, true);
  const specialRequests = readString(payload, "specialRequests", 2_000, errors);
  const originatingPage = readString(payload, "originatingPage", 500, errors);
  const startedAt = readString(payload, "startedAt", 24, errors, true);
  const website = readString(payload, "website", 200, errors);
  const idempotencyKey = readString(payload, "idempotencyKey", 200, errors, true);

  if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errors.push("email is invalid.");
  if (musicalStyle && !musicalStyles[musicalStyle]) errors.push("musicalStyle is invalid.");

  const startTime = Number(startedAt);
  if (!Number.isFinite(startTime) || Date.now() - startTime < MIN_COMPLETION_MS) {
    errors.push("The form was completed too quickly.");
  }

  return {
    errors,
    submission: {
      name,
      email,
      phone,
      propertyAddress,
      musicalStyle,
      specialRequests,
      originatingPage,
      startedAt,
      website,
      idempotencyKey,
    } satisfies Submission,
  };
};

const buildCrmFields = (submission: Submission) => {
  const musicalStyle = musicalStyles[submission.musicalStyle];
  const message = [
    `Property address: ${submission.propertyAddress}`,
    `Musical style: ${musicalStyle}`,
    `Special requests: ${submission.specialRequests || "Not provided"}`,
    "Package: $500 custom song, full-length 1080p video, and 60-second vertical Reel",
  ].join("\n");

  return {
    name: submission.name,
    email: submission.email,
    phone: submission.phone,
    message,
    property_address: submission.propertyAddress,
    musical_style: musicalStyle,
    special_requests: submission.specialRequests,
    package: "$500 Realtor Listing Song & Video",
    campaign: "realtor-listing-song-video",
    event_type: "Realtor Listing Song & Video Campaign",
    originating_page: submission.originatingPage,
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

  // Return a normal response to honeypot submissions without creating a CRM record.
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
  if (env.CRM_CAPTURE_DRY_RUN === "true") {
    if (new URL(request.url).hostname === productionHost) return jsonResponse({ message: "This form is not ready to receive requests yet. Please email hello@getcybergenie.com." }, 503);
    return jsonResponse({ ok: true, dryRun: true });
  }

  const captureUrl = env.FK_CRM_CAPTURE_URL?.trim();
  const formToken = env.FK_CRM_FORM_TOKEN?.trim();
  if (!captureUrl || !formToken) {
    console.error("Realtor listing CRM capture configuration is incomplete.");
    return jsonResponse({ message: "CRM delivery is temporarily unavailable. Please try again shortly." }, 503);
  }

  let crmResponse: Response;
  try {
    crmResponse = await fetch(captureUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json", Origin: origin },
      body: JSON.stringify({
        form_token: formToken,
        fields: buildCrmFields(submission),
        idempotency_key: submission.idempotencyKey,
      }),
    });
  } catch {
    console.error("Realtor listing CRM request failed before receiving a response.");
    return jsonResponse({ message: "We could not send your submission. Please try again." }, 502);
  }

  let crmResult: Record<string, unknown> = {};
  try {
    const value: unknown = await crmResponse.json();
    if (isRecord(value)) crmResult = value;
  } catch {
    // Do not expose provider response bodies to site visitors or logs.
  }

  if (!crmResponse.ok || crmResult.accepted !== true) {
    console.error(`Realtor listing CRM capture failed with status ${crmResponse.status}.`);
    return jsonResponse({ message: "We could not send your submission. Please try again." }, 502);
  }

  return jsonResponse({
    ok: true,
    duplicate: crmResult.duplicate === true,
    submissionId: typeof crmResult.submission_id === "string" ? crmResult.submission_id : undefined,
    requestId: typeof crmResult.request_id === "string" ? crmResult.request_id : undefined,
  });
};
