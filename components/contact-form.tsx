"use client";

import { useId, useState } from "react";
import { copyFor } from "@/lib/content";
import {
  contactEmail,
  contactEndpoint,
  mailtoHref,
  sendContact,
  validateContact,
  type ContactErrorCode,
  type ContactField,
} from "@/lib/contact";

const fields: ContactField[] = ["name", "company", "email", "phone", "message"];

export function ContactForm() {
  const copy = copyFor().contact;
  const baseId = useId();
  const [values, setValues] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    message: "",
    website: "",
  });
  const [errors, setErrors] = useState<Partial<Record<ContactField, ContactErrorCode>>>({});
  const [status, setStatus] = useState<
    "idle" | "sending" | "sent" | "mailto" | "unconfigured" | "error"
  >("idle");

  function errorText(code: ContactErrorCode | undefined) {
    if (!code) return "";
    return copy.errors[code];
  }

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors = validateContact(values);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) {
      setStatus("idle");
      const first = fields.find((field) => nextErrors[field]);
      if (first) {
        document.getElementById(`${baseId}-${first}`)?.focus();
      }
      return;
    }

    if (values.website.trim()) {
      setStatus("sent");
      return;
    }

    const payload = { ...values };

    if (contactEndpoint()) {
      setStatus("sending");
      try {
        await sendContact(payload);
        setStatus("sent");
      } catch {
        setStatus("error");
      }
      return;
    }

    const email = contactEmail();
    if (email) {
      window.location.href = mailtoHref(email, payload);
      setStatus("mailto");
      return;
    }

    setStatus("unconfigured");
  }

  const statusMessage =
    status === "sent"
      ? copy.sent
      : status === "mailto"
        ? copy.mailto
        : status === "unconfigured"
          ? copy.unconfigured
          : status === "error"
            ? copy.failed
            : "";

  return (
    <form onSubmit={onSubmit} noValidate className="rounded-3xl border border-line bg-white p-5 sm:p-7">
      <div className="absolute left-[-9999px] h-0 w-0 overflow-hidden" aria-hidden="true">
        <label>
          Website
          <input
            tabIndex={-1}
            autoComplete="off"
            value={values.website}
            onChange={(event) => setValues((current) => ({ ...current, website: event.target.value }))}
          />
        </label>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <Field
          id={`${baseId}-name`}
          label={copy.name}
          value={values.name}
          placeholder={copy.namePlaceholder}
          autoComplete="name"
          error={errorText(errors.name)}
          onChange={(name) => setValues((current) => ({ ...current, name }))}
        />
        <Field
          id={`${baseId}-company`}
          label={copy.company}
          value={values.company}
          placeholder={copy.companyPlaceholder}
          autoComplete="organization"
          error={errorText(errors.company)}
          onChange={(company) => setValues((current) => ({ ...current, company }))}
        />
        <Field
          id={`${baseId}-email`}
          label={copy.email}
          type="email"
          value={values.email}
          placeholder={copy.emailPlaceholder}
          autoComplete="email"
          error={errorText(errors.email)}
          onChange={(email) => setValues((current) => ({ ...current, email }))}
        />
        <Field
          id={`${baseId}-phone`}
          label={copy.phone}
          type="tel"
          value={values.phone}
          placeholder={copy.phonePlaceholder}
          autoComplete="tel"
          error={errorText(errors.phone)}
          onChange={(phone) => setValues((current) => ({ ...current, phone }))}
        />
      </div>
      <div className="mt-4">
        <Field
          id={`${baseId}-message`}
          label={copy.message}
          value={values.message}
          placeholder={copy.messagePlaceholder}
          error={errorText(errors.message)}
          multiline
          onChange={(message) => setValues((current) => ({ ...current, message }))}
        />
      </div>
      <button
        type="submit"
        disabled={status === "sending"}
        className="mt-6 inline-flex min-h-12 items-center justify-center rounded-full bg-red px-6 text-sm font-bold text-white hover:bg-red-deep disabled:opacity-60"
      >
        {status === "sending" ? copy.sending : copy.submit}
      </button>
      <p className="mt-4 min-h-6 text-sm font-semibold text-navy" role="status" aria-live="polite">
        {statusMessage}
      </p>
    </form>
  );
}

function Field({
  id,
  label,
  value,
  onChange,
  placeholder,
  error,
  type = "text",
  autoComplete,
  multiline = false,
}: {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
  error: string;
  type?: string;
  autoComplete?: string;
  multiline?: boolean;
}) {
  const describedBy = error ? `${id}-error` : undefined;
  const className =
    "w-full rounded-2xl border border-line bg-white px-4 py-3 text-base text-navy outline-none placeholder:text-ink-soft/70 focus:border-red";

  return (
    <label className="block" htmlFor={id}>
      <span className="mb-1.5 block text-sm font-bold text-navy">{label}</span>
      {multiline ? (
        <textarea
          id={id}
          name={id}
          rows={5}
          value={value}
          placeholder={placeholder}
          aria-invalid={error ? true : undefined}
          aria-describedby={describedBy}
          onChange={(event) => onChange(event.target.value)}
          className={className}
        />
      ) : (
        <input
          id={id}
          name={id}
          type={type}
          value={value}
          placeholder={placeholder}
          autoComplete={autoComplete}
          aria-invalid={error ? true : undefined}
          aria-describedby={describedBy}
          onChange={(event) => onChange(event.target.value)}
          className={className}
        />
      )}
      {error ? (
        <span id={`${id}-error`} className="mt-1 block text-sm font-semibold text-red">
          {error}
        </span>
      ) : null}
    </label>
  );
}
