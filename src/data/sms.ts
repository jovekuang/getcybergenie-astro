import { brand } from "./brand.ts";

export const sms = {
  phone: "+19253970073",
  displayPhone: "(925) 397-0073",
  version: "2026-10-31",
  consent: `I agree to receive customer-care text messages from ${brand.name}, operated by ${brand.legalName}, at the mobile number I provide, including replies to my inquiries, appointment coordination, and updates about services I request. Messages may be sent using automated technology. Message frequency varies. Message and data rates may apply. Reply STOP to opt out or HELP for help. Consent is optional and is not a condition of purchase.`,
} as const;
