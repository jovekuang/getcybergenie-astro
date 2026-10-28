import { productionHost } from "./_shared/request-policy.ts";

type Context = {
  request: Request;
  env: { SITE_INDEXABLE?: string; ONBOARDING_DRY_RUN?: string; CRM_CAPTURE_DRY_RUN?: string };
  next: () => Promise<Response>;
};

export const onRequest = async (context: Context) => {
  const upstream = await context.next();
  const response = new Response(upstream.body, {
    headers: upstream.headers,
    status: ["/404.html", "/404", "/404/"].includes(new URL(context.request.url).pathname) && upstream.status === 200 ? 404 : upstream.status,
    statusText: upstream.statusText,
  });
  const host = new URL(context.request.url).hostname;
  if (host !== productionHost || context.env.SITE_INDEXABLE !== "true") {
    response.headers.set("X-Robots-Tag", "noindex, nofollow");
  }
  response.headers.set("X-Content-Type-Options", "nosniff");
  response.headers.set("Referrer-Policy", "strict-origin-when-cross-origin");
  return response;
};
