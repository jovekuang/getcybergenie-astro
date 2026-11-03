import { brand } from "./brand.ts";

export const sms = {
  phone: "+19253970073",
  displayPhone: "(925) 397-0073",
  version: "2026-10-31",
  keywordVersion: "2026-10-31-yes-v1",
  keywordDisclosure: "Text YES to (925) 397-0073 to receive customer-care texts from Cyber Genie, operated by FK Innovation Partners LLC, about your inquiries, appointments, and services you request. Messages may use automated technology. Message frequency varies. Message and data rates may apply. Consent is optional and is not a condition of purchase. Reply STOP to opt out or HELP for help. This consent does not authorize promotional texts.",
  consent: `I agree to receive customer-care text messages from ${brand.name}, operated by ${brand.legalName}, at the mobile number I provide, including replies to my inquiries, appointment coordination, and updates about services I request. Messages may be sent using automated technology. Message frequency varies. Message and data rates may apply. Reply STOP to opt out or HELP for help. Consent is optional and is not a condition of purchase.`,
} as const;
