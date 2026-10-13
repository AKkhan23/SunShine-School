import { school } from "./site";

/**
 * WhatsApp deep links.
 *
 * These open the WhatsApp app with a prefilled draft. The parent still has to
 * press send — nothing is transmitted or stored by this website.
 */
export function whatsappLink(message: string) {
  return `https://wa.me/${school.phone.digits}?text=${encodeURIComponent(message)}`;
}

export const whatsappGeneric = () =>
  whatsappLink(
    `Hello ${school.name}, I would like to know more about admission for ${school.classRange.from} to ${school.classRange.to}.`,
  );

export const whatsappAdmission = () =>
  whatsappLink(
    `Hello ${school.name}, I would like to enquire about admission for ${school.classRange.from} to ${school.classRange.to}. Please share the next steps.`,
  );

export const whatsappVisit = () =>
  whatsappLink(
    `Hello ${school.name}, I would like to visit the campus at ${school.address.street} to know more about admissions. Please let me know a convenient time.`,
  );

export const telHref = `tel:${school.phone.raw}`;
export const mailHref = `mailto:${school.email}`;

/**
 * Google Maps *text search* (no coordinates are claimed anywhere on the site,
 * because the exact campus pin has not been verified).
 */
export const directionsHref = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  school.mapSearchQuery,
)}`;

export type EnquiryPayload = {
  parentName: string;
  studentName: string;
  applyingFor: string;
  phone: string;
  email?: string;
  message?: string;
};

/** Human-readable enquiry message used for both the WhatsApp and email paths. */
export function formatEnquiryMessage(data: EnquiryPayload) {
  const lines = [
    `Admission enquiry — ${school.name}`,
    "",
    `Parent / Guardian: ${data.parentName}`,
    `Student name: ${data.studentName}`,
    `Applying for: ${data.applyingFor}`,
    `Contact number: ${data.phone}`,
  ];

  if (data.email) lines.push(`Email: ${data.email}`);
  if (data.message) lines.push("", `Message: ${data.message}`);

  lines.push("", "Sent from the school website enquiry form.");

  return lines.join("\n");
}

export function enquiryMailto(data: EnquiryPayload) {
  const subject = `Admission Enquiry — ${data.applyingFor} — ${data.studentName}`;
  return `mailto:${school.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
    formatEnquiryMessage(data),
  )}`;
}