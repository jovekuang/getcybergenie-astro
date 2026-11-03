# Cyber Genie customer-care SMS campaign

## November 3, 2026 — submitted, correction required

The owner approved completing the YES launch and application. The app implementation and its 24 SMS tests were inspected. Live program enrollment was initially disabled, as was `CYBER_GENIE_SMS_SEND_ENABLED`; the marketing site did not yet advertise YES.

- Published the exact app disclosure version `2026-10-31-yes-v1` at https://getcybergenie.com/contact/#message and added keyword enrollment to https://getcybergenie.com/terms/#sms. Source `8fa076a`; production https://6ec3c31c.cyber-genie-marketing.pages.dev. Types/build/site audit and 35 carousel/API tests passed; GitHub CI passed at https://github.com/jovekuang/getcybergenie-astro/actions/runs/41722203759. Previous production was `c1d7434a-facb-4465-bab5-7e6efb01849d`, source `e75ce08`.
- Owner expressly approved publication, activation of the existing enrollment/opt-out setup, and use of the `jove@fkcapital.xyz` app session. The existing release flag was replaced with `true` through Lovable's secure Secrets form. No credentials were rotated or read. Program enrollment was enabled with disclosure effective time `2026-11-03T21:31:42.647807Z`; live admin readback showed enrollment and app confirmations enabled. All subscriber/event/outbox counts remained zero; no handset test or test SMS occurred.
- Verified original service `MGda654ee680c4ecda758ca3720ffe21ab` contained only `+19253970073`, with the intended inbound POST and status webhook URLs and exact YES/STOP/HELP replies. Enabled Advanced Opt-Out on that service after the public disclosure was verified. Reserved keywords were retained.
- Completed and saved the existing AI-assisted application as **Customer Care / keyword opt-in only**. Web-form and verbal/IVR methods were deselected; website checkbox email records are separate and do not automatically enroll app subscribers. Description, actual code-based confirmation/HELP/STOP sample messages, policy URLs, and consent narrative were updated. Embedded links and phone numbers were selected. Twilio's checker reported the campaign looked good.
- The Console's **Review and submit** action submitted directly, without a separate fee-confirmation screen. Campaign **`CMcb18bb27c340f78cb73509af2787761c`** now exists and reads **In review**. This is not approval or permission to send A2P traffic. Brand `BN210329a0cf30f8778ad40327a3a89fba` reads Approved.

**Material post-submission discrepancy:** despite the form URL naming the original configured service, the AI-assisted submission created/assigned a different service, **`MG407ad5ebe07f9ab570f603884a2ae554`**, named `CUSTOMER_CARE A2P Messaging Service`. It has no assigned phone numbers. The dedicated campaign `Opt in message` and `Opt in keywords` display `-`; the complete YES workflow and confirmation are present in the consent narrative and sample messages, while campaign HELP/STOP fields show defaults. The pending campaign's menu exposes Delete only, so no self-service edit was available. Do not delete/recreate this campaign, move the phone, or change the app's bound service blindly to compensate.

A correction request is prepared in ignored `outputs/qa/sms/twilio-campaign-correction-request-2026-11-03.txt`, asking Twilio Support to correct this same pending registration's service association and YES metadata without another paid campaign. Sending that request requires the owner's explicit messaging authorization. Screenshots of submission, the empty assigned-number list, and live app activation are saved under `/private/tmp/` for this chat. No second campaign was submitted. Fee posting has not been independently verified.

The remainder of this file is the October 31 preparation record; its pre-launch statements are historical.

Prepared October 31, 2026. This file is an implementation/registration handoff, not evidence of Twilio configuration or carrier approval. The website changes do not submit an A2P registration or configure the separate customer app.

## Identity and scope

- Public brand: Cyber Genie.
- Legal operator: FK Innovation Partners LLC. Use the actual registered business identity in Twilio; do not claim an unverified DBA filing.
- Number supplied by owner: +1 925 397 0073.
- Customer-care messages only: inquiry responses, appointment coordination, and updates about services the person requests.
- Privacy: https://getcybergenie.com/privacy/#sms
- Terms: https://getcybergenie.com/terms/#sms
- Support: hello@getcybergenie.com.

Select only the opt-in method actually implemented and used. Do not describe the portal's general sign-in, entering a phone number, or accepting general terms as SMS consent. Do not select verbal/IVR unless that separate collection process is implemented and documented.

## Website checkbox flow

Public evidence: https://getcybergenie.com/contact/#message and https://getcybergenie.com/onboarding/website/. Both have a separate, optional checkbox, unchecked by default. Providing a phone number alone is not consent. The listing-package form does not collect SMS consent and directs people to the contact form for optional text updates.

The site sends the inquiry to the existing internal Resend notification recipient. When checked, that notification includes the mobile number, exact server-supplied disclosure, version, source URL and server receipt time. It is a manual consent record, not an automatic Twilio enrollment or an SMS confirmation. Retain the notification in the business consent records, reconcile it with any subsequent opt-out, and do not send until the sending system enforces those choices. Preview forms never create a record or send a notification.

Website-only message-flow description (use only if registering just this method):

> People visit https://getcybergenie.com/contact/#message or https://getcybergenie.com/onboarding/website/, provide their mobile number, and actively select a separate, optional SMS consent checkbox that is unchecked by default. The checkbox identifies Cyber Genie, operated by FK Innovation Partners LLC, and authorizes customer-care texts about inquiries, appointment coordination, and requested services. It discloses automated technology, variable message frequency, message/data rates, STOP to opt out, HELP for help, and that consent is not a condition of purchase. Privacy and SMS Terms links appear beside the checkbox. The internal submission notification preserves the mobile number, exact consent text/version, source and receipt time. Neither a phone number alone nor portal signup counts as consent. Privacy: https://getcybergenie.com/privacy/#sms Terms: https://getcybergenie.com/terms/#sms

## Keyword flow requested by owner: YES

Before offering this method publicly or claiming it is operational in registration, implement the following in Twilio/the customer app. Publishing website instructions alone cannot implement the reply flow.

The website currently offers checkbox opt-in only. It does not advertise an unfinished YES enrollment flow. If both methods are wanted for the initial campaign, finish the YES flow before registration, then add its public call to action and describe both methods in the same registration. Twilio's published update rules say an approved/registered campaign cannot be edited; do not promise that YES can simply be added to an approved campaign later. A change may require a replacement registration or guidance from Twilio Support.

1. Receive inbound messages for this number and its actual Messaging Service; validate Twilio request signatures.
2. Treat an inbound whole-message YES (trimmed, case insensitive) as opt-in only in the context of the disclosed Cyber Genie customer-care program. Record sender, destination, incoming Message SID, received time, source and disclosure version. Avoid interpreting an ordinary yes inside an unrelated conversation as enrollment.
3. Send one opt-in confirmation with the wording below. Choose either Twilio Advanced Opt-Out or the app to own the keyword response so the person does not receive duplicate confirmations. Do not assume configuring YES automatically establishes your application consent log.
4. Handle STOP and Twilio's standard opt-out keywords immediately. Synchronize the suppression state into the app and check it before every outbound message. Do not rely only on a historical opt-in. Retain Twilio's reserved keywords.
5. Handle HELP using the support reply below. Test YES, mixed-case yes, duplicate inbound events, HELP, STOP, attempted outbound after STOP, and intentional re-enrollment. Full production carrier-delivery testing may depend on A2P approval; implement and test webhook/state behavior before submitting.

Suggested opt-in confirmation:

> Cyber Genie: You opted in to customer-care texts about your inquiries, appointments, and requested services. Message frequency varies. Msg & data rates may apply. Reply STOP to opt out or HELP for help. Terms: https://getcybergenie.com/terms/#sms Privacy: https://getcybergenie.com/privacy/#sms

Suggested HELP reply:

> Cyber Genie customer-care texts: Get help at hello@getcybergenie.com or (925) 397-0073. Message frequency varies. Msg & data rates may apply. Reply STOP to opt out.

Suggested STOP confirmation:

> Cyber Genie: You have opted out and will receive no further program texts. For support, email hello@getcybergenie.com.

## Registration wording

Campaign description:

> Cyber Genie, operated by FK Innovation Partners LLC, sends customer-care SMS to people who explicitly opt in. Messages respond to their technology-service inquiries, coordinate appointments, and provide updates about services they request. This campaign does not send promotional messages or contact purchased lists.

Example customer-care messages (use only representative messages the app will actually send):

> Cyber Genie: Your website review is ready. What time works for a call to discuss your requested changes? Reply STOP to opt out.

> Cyber Genie: Confirming your requested appointment tomorrow at 2 PM Pacific. Reply if you need to reschedule. Reply STOP to opt out.

Do not submit until the selected message-flow description matches both the live public evidence and the actual implementation. No form or keyword alone guarantees campaign approval.

## Official references

- https://www.twilio.com/en-us/blog/insights/best-practices/improving-your-chances-of-a2p10dlc-registration-approval
- https://www.twilio.com/docs/messaging/tutorials/advanced-opt-out
- https://www.twilio.com/docs/messaging/compliance/a2p-10dlc/troubleshooting-a2p-brands/troubleshooting-and-rectifying-a2p-campaigns
