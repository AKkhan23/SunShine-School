import type { Metadata } from "next";
import Image from "next/image";
import { Clock, Mail, MapPin, MessageCircle, Phone, Route } from "lucide-react";

import { ContactActions } from "@/components/ContactActions";
import { EnquiryForm } from "@/components/EnquiryForm";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { SunRays } from "@/components/SunRays";
import { breadcrumbJsonLd, buildMetadata } from "@/lib/seo";
import { addressLine1, addressLine2, imagePaths, school } from "@/lib/site";
import { directionsHref, mailHref, telHref, whatsappGeneric } from "@/lib/contact";

const trail = [
  { name: "Home", href: "/" },
  { name: "Contact", href: "/contact" },
];

export const metadata: Metadata = buildMetadata({
  title: "Contact Us | Sunrise Convent School, Bhensola, Dhar",
  description:
    "Contact Sunrise Convent School, Bhensola — Kod Road, Bhensola Chopati, Tehsil Badnawar, District Dhar, Madhya Pradesh. Call +91 88717 63431, WhatsApp the school office, or send an enquiry by email.",
  path: "/contact",
  keywords: [
    "Sunrise Convent School contact",
    "Sunrise Convent School Bhensola address",
    "school in Bhensola Badnawar contact",
    "school phone number Bhensola",
  ],
});

export default function ContactPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", href: "/" },
          { name: "Contact", href: "/contact" },
        ])}
      />

      <PageHero
        eyebrow="Contact"
        title="Talk to the School Office"
        lede="The fastest way to get an answer is a phone call or a WhatsApp message. If you are visiting, please fix a time first so someone is free to receive you."
        trail={trail}
        media={imagePaths.campus}
        mediaAlt="Illustration of the Sunrise Convent School campus at Kod Road, Bhensola Chopati"
      />

      {/* Contact cards */}
      <section className="section-y-tight bg-white">
        <div className="container-page">
          <ContactActions variant="card" showAddress />
        </div>
      </section>

      {/* Details + form */}
      <section className="section-y bg-white">
        <div className="container-page grid gap-12 lg:grid-cols-12 lg:gap-14">
          {/* Details */}
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow="School Details"
              title="Everything You Need to Reach Us"
            />

            <div className="mt-8 space-y-4">
              <div className="card-base p-6">
                <h2 className="flex items-center gap-2.5 font-display text-[1.05rem] font-semibold text-navy-900">
                  <MapPin className="h-5 w-5 text-school" aria-hidden="true" />
                  Address
                </h2>
                <address className="mt-3 not-italic text-[0.93rem] leading-relaxed text-ink/75">
                  <strong className="font-semibold text-navy-900">{school.name}</strong>
                  <br />
                  {addressLine1}
                  <br />
                  {addressLine2}
                  <br />
                  {school.address.state}, {school.address.country}
                </address>
                <a
                  href={directionsHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-underline mt-4 inline-flex items-center gap-1.5 text-[0.87rem] font-semibold text-school"
                >
                  <Route className="h-4 w-4" aria-hidden="true" />
                  Open directions
                </a>
              </div>

              <div className="card-base p-6">
                <h2 className="flex items-center gap-2.5 font-display text-[1.05rem] font-semibold text-navy-900">
                  <Phone className="h-5 w-5 text-school" aria-hidden="true" />
                  Phone
                </h2>
                <a
                  href={telHref}
                  className="link-underline mt-3 block text-[1.15rem] font-semibold text-navy-900"
                >
                  {school.phone.display}
                </a>
                <p className="mt-2 text-[0.85rem] leading-relaxed text-ink/60">
                  Calling from an Indian mobile will dial the number directly.
                </p>
              </div>

              <div className="card-base p-6">
                <h2 className="flex items-center gap-2.5 font-display text-[1.05rem] font-semibold text-navy-900">
                  <Mail className="h-5 w-5 text-school" aria-hidden="true" />
                  Email
                </h2>
                <a
                  href={mailHref}
                  className="link-underline mt-3 block break-all text-[0.98rem] font-semibold text-navy-900"
                >
                  {school.email}
                </a>
                <p className="mt-2 text-[0.85rem] leading-relaxed text-ink/60">
                  Use this address for anything that needs a written record.
                </p>
              </div>

              <div className="card-base bg-cream p-6">
                <h2 className="flex items-center gap-2.5 font-display text-[1.05rem] font-semibold text-navy-900">
                  <MessageCircle className="h-5 w-5 text-school" aria-hidden="true" />
                  WhatsApp
                </h2>
                <p className="mt-3 text-[0.89rem] leading-relaxed text-ink/75">
                  WhatsApp opens a chat with the school number on this page. It is usually the
                  quickest way to reach the office.
                </p>
                <a
                  href={whatsappGeneric()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary mt-4 w-full"
                >
                  Open WhatsApp chat
                </a>
              </div>

              <div className="rounded-3xl border border-dashed border-navy-200 p-6">
                <h2 className="flex items-center gap-2.5 font-display text-[1.05rem] font-semibold text-navy-900">
                  <Clock className="h-5 w-5 text-ink/40" aria-hidden="true" />
                  Office hours
                </h2>
                <p className="mt-3 text-[0.89rem] leading-relaxed text-ink/65">
                  Office hours and school timings are not published on this website because they
                  have not been confirmed by the school. Please call ahead so your message is not
                  missed.
                </p>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-7">
            <SectionHeading
              eyebrow="Enquiry Form"
              title="Send Us a Message"
              lede="Fill this in and WhatsApp opens with your enquiry ready to send. You still press send in WhatsApp — nothing is stored on this website."
              className="mb-8"
            />
            <EnquiryForm />

            <div className="mt-8 rounded-3xl border border-navy-100 bg-cream p-7">
              <div className="flex items-start gap-4">
                <SunRays size={44} rays={12} opacity={0.8} className="mt-1 shrink-0" />
                <div>
                  <h2 className="font-display text-lg font-semibold text-navy-900">
                    Planning a campus visit?
                  </h2>
                  <p className="mt-2 text-[0.9rem] leading-relaxed text-ink/70">
                    The school is on Kod Road at Bhensola Chopati, within easy reach of Bhensola
                    and Badnawar. Call or WhatsApp the office first and they will suggest a
                    convenient time to receive you.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="section-y bg-navy-50/60">
        <div className="container-page grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="order-2 lg:order-1 lg:col-span-5">
            <SectionHeading
              eyebrow="Finding Us"
              title="Locate the School"
              lede="The button below opens a map search for the school address. We do not publish a map pin or coordinates that the school has not confirmed, so please check the exact gate and nearest landmark with the office when you arrive."
            />

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={directionsHref}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                <Route className="h-4 w-4" aria-hidden="true" />
                Open directions in Maps
              </a>
              <a
                href={whatsappGeneric()}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost"
              >
                <MessageCircle className="h-4 w-4" aria-hidden="true" />
                Ask the office
              </a>
            </div>
          </div>

          <div className="order-1 lg:order-2 lg:col-span-7">
            <div className="frame-media mx-auto max-w-lg aspect-[1131/1600]">
              <Image
                src={imagePaths.letterhead}
                alt="Official letterhead of Sunrise Convent School showing the address on Kod-Bhensola Road, Village Gardawadiya, Bhensola, Tehsil Badnawar, District Dhar, and contact number 88717 63431"
                fill
                sizes="(min-width: 1024px) 45vw, 90vw"
                loading="lazy"
              />
            </div>
            <p className="mt-3 text-center text-[0.8rem] leading-relaxed text-ink/50">
              The school&rsquo;s official letterhead, reproduced exactly as printed — including
              the address wording used by the school office.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}