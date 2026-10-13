"use client";

import { useId, useMemo, useState } from "react";
import { AlertCircle, CheckCircle2, Mail, MessageCircle } from "lucide-react";
import { classGroups, school } from "@/lib/site";
import { enquiryMailto, formatEnquiryMessage, whatsappLink } from "@/lib/contact";

type Values = {
  parentName: string;
  studentName: string;
  applyingFor: string;
  phone: string;
  email: string;
  message: string;
};

type Errors = Partial<Record<keyof Values, string>>;

const initialValues: Values = {
  parentName: "",
  studentName: "",
  applyingFor: "",
  phone: "",
  email: "",
  message: "",
};

const classOptions = classGroups.flatMap((group) => [...group.classes]);

/** Accepts Indian 10-digit numbers with optional +91 / 0 prefix and separators. */
function validatePhone(value: string) {
  const digits = value.replace(/[\s\-().]/g, "");
  if (!digits) return "Please enter a contact number.";
  if (!/^(\+?91)?0?\d{10}$/.test(digits)) {
    return "Enter a valid 10-digit mobile number.";
  }
  return undefined;
}

function validateEmail(value: string) {
  if (!value) return undefined;
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value.trim())) {
    return "Please check the email address.";
  }
  return undefined;
}

function validate(values: Values): Errors {
  const errors: Errors = {};

  if (!values.parentName.trim()) errors.parentName = "Please enter your name.";
  if (!values.studentName.trim()) errors.studentName = "Please enter the student's name.";
  if (!values.applyingFor) errors.applyingFor = "Please choose a class.";
  errors.phone = validatePhone(values.phone);
  errors.email = validateEmail(values.email);

  return errors;
}

export function EnquiryForm({
  defaultClass = "",
  compact = false,
}: {
  defaultClass?: string;
  compact?: boolean;
}) {
  const uid = useId();
  const [values, setValues] = useState<Values>({ ...initialValues, applyingFor: defaultClass });
  const [errors, setErrors] = useState<Errors>({});
  const [submitted, setSubmitted] = useState(false);
  const [handoff, setHandoff] = useState<null | "whatsapp" | "email">(null);

  const fieldId = (name: keyof Values) => `${uid}-${name}`;

  const summary = useMemo(
    () =>
      `${formatEnquiryMessage({
        parentName: values.parentName.trim(),
        studentName: values.studentName.trim(),
        applyingFor: values.applyingFor,
        phone: values.phone.trim(),
        email: values.email.trim() || undefined,
        message: values.message.trim() || undefined,
      })}\n\nPlease send this message to complete the enquiry.`,
    [values],
  );

  function update(name: keyof Values, value: string) {
    const next = { ...values, [name]: value };
    setValues(next);
    if (submitted) setErrors(validate(next));
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
    const nextErrors = validate(values);
    setErrors(nextErrors);

    if (Object.values(nextErrors).some(Boolean)) {
      const firstError = document.getElementById(
        fieldId((Object.keys(nextErrors) as (keyof Values)[]).find((k) => nextErrors[k]) as keyof Values),
      );
      firstError?.focus();
      return;
    }

    setHandoff("whatsapp");
    window.open(whatsappLink(summary), "_blank", "noopener,noreferrer");
  }

  function handleEmailHandoff() {
    const nextErrors = validate(values);
    setErrors(nextErrors);
    setSubmitted(true);
    if (Object.values(nextErrors).some(Boolean)) return;

    setHandoff("email");
    window.location.href = enquiryMailto({
      parentName: values.parentName.trim(),
      studentName: values.studentName.trim(),
      applyingFor: values.applyingFor,
      phone: values.phone.trim(),
      email: values.email.trim() || undefined,
      message: values.message.trim() || undefined,
    });
  }

  const inputBase =
    "w-full rounded-xl border bg-white px-4 py-3 text-[0.95rem] text-ink placeholder:text-ink/35 transition-colors duration-200 focus:border-school focus:outline-none focus:ring-2 focus:ring-school/25";
  const inputClass = (name: keyof Values) =>
    `${inputBase} ${
      errors[name] ? "border-red-400 bg-red-50/40" : "border-navy-200"
    }`;

  const labelClass = "block text-[0.85rem] font-semibold text-navy-900";
  const hintClass = "mt-1.5 text-[0.78rem] text-ink/55";

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className={`rounded-3xl border border-navy-100 bg-white p-6 shadow-card sm:p-8 ${
        compact ? "" : "lg:p-10"
      }`}
    >
      <div className="flex items-start gap-3 rounded-2xl border border-sky/30 bg-sky/10 p-4">
        <MessageCircle className="mt-0.5 h-5 w-5 shrink-0 text-school" aria-hidden="true" />
        <p className="text-[0.83rem] leading-relaxed text-navy-900/80">
          This form does not save anything on this website. Once you continue, WhatsApp
          opens with your enquiry already written — please press{" "}
          <strong className="font-semibold">send</strong> in WhatsApp so the school office
          actually receives it.
        </p>
      </div>

      <div className="mt-7 grid gap-5 sm:grid-cols-2">
        <Field
          id={fieldId("parentName")}
          label="Parent / guardian name"
          required
          error={errors.parentName}
        >
          <input
            id={fieldId("parentName")}
            name="parentName"
            type="text"
            autoComplete="name"
            className={inputClass("parentName")}
            placeholder="e.g. Ramesh Patidar"
            value={values.parentName}
            onChange={(e) => update("parentName", e.target.value)}
            aria-invalid={Boolean(errors.parentName)}
            aria-describedby={errors.parentName ? `${fieldId("parentName")}-error` : undefined}
          />
        </Field>

        <Field
          id={fieldId("studentName")}
          label="Student name"
          required
          error={errors.studentName}
        >
          <input
            id={fieldId("studentName")}
            name="studentName"
            type="text"
            className={inputClass("studentName")}
            placeholder="e.g. Aarav Patidar"
            value={values.studentName}
            onChange={(e) => update("studentName", e.target.value)}
            aria-invalid={Boolean(errors.studentName)}
            aria-describedby={errors.studentName ? `${fieldId("studentName")}-error` : undefined}
          />
        </Field>

        <Field id={fieldId("applyingFor")} label="Class applying for" required error={errors.applyingFor}>
          <select
            id={fieldId("applyingFor")}
            name="applyingFor"
            className={inputClass("applyingFor")}
            value={values.applyingFor}
            onChange={(e) => update("applyingFor", e.target.value)}
            aria-invalid={Boolean(errors.applyingFor)}
            aria-describedby={
              errors.applyingFor ? `${fieldId("applyingFor")}-error` : `${fieldId("applyingFor")}-hint`
            }
          >
            <option value="">Select a class</option>
            {classOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          <p id={`${fieldId("applyingFor")}-hint`} className={hintClass}>
            Seat availability is confirmed by the school office.
          </p>
        </Field>

        <Field
          id={fieldId("phone")}
          label="Contact number"
          required
          error={errors.phone}
        >
          <input
            id={fieldId("phone")}
            name="phone"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            className={inputClass("phone")}
            placeholder="10-digit mobile number"
            value={values.phone}
            onChange={(e) => update("phone", e.target.value)}
            aria-invalid={Boolean(errors.phone)}
            aria-describedby={errors.phone ? `${fieldId("phone")}-error` : undefined}
          />
        </Field>

        <Field id={fieldId("email")} label="Email (optional)" error={errors.email}>
          <input
            id={fieldId("email")}
            name="email"
            type="email"
            autoComplete="email"
            className={inputClass("email")}
            placeholder="name@example.com"
            value={values.email}
            onChange={(e) => update("email", e.target.value)}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? `${fieldId("email")}-error` : undefined}
          />
        </Field>

        <div className="sm:col-span-2">
          <Field
            id={fieldId("message")}
            label="Message (optional)"
            hint="Questions about fees, timings, transport, a campus visit — anything you would like to ask."
          >
            <textarea
              id={fieldId("message")}
              name="message"
              rows={4}
              className={`${inputClass("message")} resize-y`}
              placeholder="I would like to visit the campus on…"
              value={values.message}
              onChange={(e) => update("message", e.target.value)}
            />
          </Field>
        </div>
      </div>

      {submitted && Object.values(errors).some(Boolean) && (
        <p
          role="alert"
          className="mt-5 flex items-start gap-2 rounded-xl bg-red-50 p-3 text-[0.82rem] font-medium text-red-700"
        >
          <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
          Please correct the highlighted fields and try again.
        </p>
      )}

      <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
        <button type="submit" className="btn-primary w-full sm:w-auto">
          <MessageCircle className="h-5 w-5" aria-hidden="true" />
          Continue on WhatsApp
        </button>
        <button
          type="button"
          onClick={handleEmailHandoff}
          className="btn-ghost w-full sm:w-auto"
        >
          <Mail className="h-5 w-5" aria-hidden="true" />
          Open in email instead
        </button>
      </div>

      <div aria-live="polite" className="empty:hidden">
        {handoff && (
          <p className="mt-6 flex items-start gap-2 rounded-xl border border-emerald-200 bg-emerald-50 p-4 text-[0.84rem] leading-relaxed text-emerald-900">
            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
            <span>
              {handoff === "whatsapp"
                ? `A WhatsApp chat with ${school.name} has been prepared with your enquiry. Please press send in WhatsApp — or email ${school.email} if WhatsApp did not open.`
                : `Your email app has been addressed to ${school.email}. Please press send to complete the enquiry.`}
            </span>
          </p>
        )}
      </div>

      <p className="mt-5 text-[0.76rem] leading-relaxed text-ink/50">
        We only ask for what is needed to start a conversation. Details you type are used
        only to build this message on your own device and are never sent to a server or
        added to a URL. See our{" "}
        <a href="/privacy-policy/" className="link-underline font-semibold text-school">
          privacy notice
        </a>
        .
      </p>
    </form>
  );
}

function Field({
  id,
  label,
  required,
  error,
  hint,
  children,
}: {
  id: string;
  label: string;
  required?: boolean;
  error?: string;
  hint?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={id} className="block text-[0.85rem] font-semibold text-navy-900">
        {label}
        {required && (
          <span className="ml-1 text-sun-dark" aria-hidden="true">
            *
          </span>
        )}
        {required && <span className="sr-only"> (required)</span>}
      </label>
      <div className="mt-1.5">{children}</div>
      {error ? (
        <p id={`${id}-error`} className="mt-1.5 flex items-center gap-1.5 text-[0.78rem] font-medium text-red-600">
          <AlertCircle className="h-3.5 w-3.5" aria-hidden="true" />
          {error}
        </p>
      ) : hint ? (
        <p className="mt-1.5 text-[0.78rem] text-ink/55">{hint}</p>
      ) : null}
    </div>
  );
}