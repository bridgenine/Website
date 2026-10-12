import type { Lang } from "@/lib/site";

/**
 * Contact delivery
 * ----------------
 * The form posts JSON from the browser. No API route and no secrets live in
 * this repo. Wire an inbox by setting environment variables BEFORE `npm run build`
 * (they are inlined into the static site):
 *
 *   NEXT_PUBLIC_CONTACT_ENDPOINT
 *     URL that accepts POST application/json from the browser.
 *     Formspree: https://formspree.io/f/yourFormId
 *     Any HTTPS endpoint that returns a 2xx status.
 *
 *   NEXT_PUBLIC_CONTACT_ACCESS_KEY
 *     Optional. Added to the JSON body as `access_key` (Web3Forms and similar).
 *     This key is public by design — do not put a private API secret here.
 *
 *   NEXT_PUBLIC_CONTACT_EMAIL
 *     Used only when ENDPOINT is empty. The button opens the visitor's email
 *     app with a filled-in draft (mailto). Replace the placeholder address.
 *
 * JSON body:
 *   { name, company, email, phone, message, lang, _subject, access_key? }
 *
 * If nothing is configured, the form validates and then tells the visitor the
 * message was not sent.
 */

export type ContactField = "name" | "company" | "email" | "phone" | "message";

export type ContactErrorCode = "required" | "email" | "phone" | "short";

export type ContactInput = {
  name: string;
  company: string;
  email: string;
  phone: string;
  message: string;
};

export type ContactPayload = ContactInput & {
  lang: Lang;
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function digits(value: string) {
  return value.replace(/\D/g, "");
}

export function validateContact(
  input: ContactInput,
): Partial<Record<ContactField, ContactErrorCode>> {
  const errors: Partial<Record<ContactField, ContactErrorCode>> = {};
  const name = input.name.trim();
  const company = input.company.trim();
  const email = input.email.trim();
  const phone = input.phone.trim();
  const message = input.message.trim();

  if (name.length < 2) errors.name = "required";
  if (company.length < 2) errors.company = "required";
  if (!email) errors.email = "required";
  else if (!emailPattern.test(email)) errors.email = "email";
  if (digits(phone).length < 8) errors.phone = phone ? "phone" : "required";
  if (!message) errors.message = "required";
  else if (message.length < 10) errors.message = "short";

  return errors;
}

export function contactEndpoint() {
  return process.env.NEXT_PUBLIC_CONTACT_ENDPOINT?.trim() ?? "";
}

export function contactEmail() {
  return process.env.NEXT_PUBLIC_CONTACT_EMAIL?.trim() ?? "";
}

export function contactAccessKey() {
  return process.env.NEXT_PUBLIC_CONTACT_ACCESS_KEY?.trim() ?? "";
}

export function mailtoHref(email: string, payload: ContactPayload) {
  const subject = encodeURIComponent("Bridgenine demo request");
  const body = encodeURIComponent(
    [
      `Name: ${payload.name.trim()}`,
      `Company: ${payload.company.trim()}`,
      `Email: ${payload.email.trim()}`,
      `Phone / WhatsApp: ${payload.phone.trim()}`,
      `Language: ${payload.lang}`,
      "",
      payload.message.trim(),
    ].join("\n"),
  );
  return `mailto:${email}?subject=${subject}&body=${body}`;
}

export async function sendContact(payload: ContactPayload) {
  const endpoint = contactEndpoint();
  const accessKey = contactAccessKey();
  const response = await fetch(endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      name: payload.name.trim(),
      company: payload.company.trim(),
      email: payload.email.trim(),
      phone: payload.phone.trim(),
      message: payload.message.trim(),
      lang: payload.lang,
      _subject: "Bridgenine demo request",
      ...(accessKey ? { access_key: accessKey } : {}),
    }),
  });

  if (!response.ok) {
    throw new Error(`Contact endpoint responded with ${response.status}`);
  }
}
