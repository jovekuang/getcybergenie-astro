import { brand } from "../../src/data/brand.ts";

export const productionHost = new URL(brand.origin).hostname;

export function validatedOrigin(request: Request): string | null {
  const value = request.headers.get("Origin");
  if (!value) return null;
  try {
    const origin = new URL(value);
    const target = new URL(request.url);
    return origin.origin === target.origin && value === origin.origin
      && ["https:", "http:"].includes(origin.protocol) ? origin.origin : null;
  } catch { return null; }
}

export function isPreview(request: Request): boolean {
  const host = new URL(request.url).hostname;
  return host.endsWith(".pages.dev") || host === "localhost" || host === "127.0.0.1";
}
