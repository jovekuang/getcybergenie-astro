import { sms } from "../../src/data/sms.ts";

export function readSmsConsent(payload: Record<string, unknown>, phone: string, errors: string[]) {
  if (payload.smsConsent !== undefined && typeof payload.smsConsent !== "boolean") {
    errors.push("smsConsent must be true or false.");
  }
  const consent = payload.smsConsent === true;
  if (consent && !/^(?:1)?[2-9]\d{2}[2-9]\d{6}$/.test(phone.replace(/[\s()+.-]/g, ""))) {
    errors.push("Enter a valid US mobile number to receive text messages.");
  }
  return consent;
}

// The server supplies the disclosure and receipt time; never trust client-supplied evidence.
export function smsConsentRecord(consent: boolean, source: string) {
  return consent
    ? `OPTED IN to customer-care SMS only\nDisclosure version: ${sms.version}\nCyber Genie texting number: ${sms.keywordDisplayPhone}\nSource: ${source}\nReceived at (UTC): ${new Date().toISOString()}\nConsent text: ${sms.consent}\nLinked policies: https://getcybergenie.com/terms/#sms and https://getcybergenie.com/privacy/#sms\nVerify this record and any later opt-out before sending. This form does not send an SMS or enroll a number in Twilio automatically.`
    : "NOT OPTED IN. Do not send SMS based on this submission.";
}
