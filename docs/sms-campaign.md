# Cyber Genie customer-care SMS campaign

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
