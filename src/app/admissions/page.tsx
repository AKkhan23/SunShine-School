import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CalendarCheck,
  ClipboardCheck,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
} from "lucide-react";

import { AdmissionCTA } from "@/components/AdmissionCTA";
import { ContactActions } from "@/components/ContactActions";
import { EnquiryForm } from "@/components/EnquiryForm";
import { FAQAccordion, type FaqItem } from "@/components/FAQAccordion";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { breadcrumbJsonLd, buildMetadata } from "@/lib/seo";
import { imagePaths, school } from "@/lib/site";
import { directionsHref, telHref, whatsappVisit } from "@/lib/contact";

const trail = [
  { name: "Home", href: "/" },
  { name: "Admissions", href: "/admissions" },
];

export const metadata: Metadata = buildMetadata({
  title: "Admissions | Sunrise Convent School, Bhensola — Nursery to Class 8",
  description:
    "Admission information for Sunrise Convent School, Bhensola, an English medium school for Nursery to Class 8. See the enquiry steps, what to ask the office, a document checklist and a WhatsApp enquiry form.",
  path: "/admissions",
  keywords: [
    "admission Sunrise Convent School",
    "Nursery to Class 8 school in Bhensola",
    "school admission Bhensola Badnawar",
    "English medium school admission Dhar",
  ],
});

const steps = [
  {
    title: "Contact the school",
    body: "Call, WhatsApp or email the office. Tell them your child's name, date of birth and the class you are looking at.",
  },
  {
    title: "Discuss class and eligibility",
    body: "The office will explain which class is appropriate for your child's age and current level, and whether a seat is available.",
  },
  {
    title: "Confirm documents, fees and availability",
    body: "Ask exactly which documents are needed, the fee structure for the class, and any admission dates that apply this session.",
  },
  {
    title: "Visit the campus",
    body: "Arrange a visit, meet a teacher, and see the classrooms. Many parents decide more easily after an hour on the premises.",
  },
  {
    title: "Complete the school's admission process",
    body: "Follow the instructions from the office and complete the school's own registration and fee payment.",
  },
];

const askList = [
  "Which class is my child eligible for, based on age and current school?",
  "Is a seat available in that class for this session?",
  "What is the complete fee structure, and what does it include?",
  "Are there any admission fees or one-time charges?",
  "Which documents are required, and how many photocopies of each?",
  "What are the school timings, the academic year dates and the working week?",
  "Does the transport facility cover our area, and what is the fee and route?",
  "What is the uniform and stationery requirement?",
  "Are there parent-teacher meeting days, and how is progress reported?",
  "Can we visit the campus, and when would a convenient time be?",
];

const checklist = [
  "Child's recent passport-size photographs (ask how many are needed)",
  "Birth certificate (original for verification plus copies)",
  "Previous school report card and transfer certificate, if applicable",
  "Proof of address (ask which documents the school accepts)",
  "Identity proof of parent or guardian",
  "Previous class's marksheet, when transferring mid-session",
];

const faqs: FaqItem[] = [
  {
    question: "Which classes does Sunrise Convent School offer?",
    answer: `The school offers ${school.classRange.from} to ${school.classRange.to} in an English medium, as stated on the school's admission poster. If your child is in a class not listed here — for example KG — mention it in your enquiry and the school office will confirm what is available.`,
  },
  {
    question: "Do you publish the fee structure on the website?",
    answer:
      "No. Fees are shared directly by the school office because they can change and vary by class and session. Please contact the school for the current, confirmed fee structure. We would rather you have an accurate figure than an outdated one.",
  },
  {
    question: "When does the admission process start and close?",
    answer:
      "Admission dates are not published on this website because they are set by the school for each session. Contact the office as early as you reasonably can so you do not miss the announced window.",
  },
  {
    question: "Is the school affiliated to CBSE?",
    answer:
      "The school's admission poster describes the medium as English medium following a CBSE pattern. This website deliberately does not claim official CBSE affiliation, because that has not been independently verified. Please ask the school office for the affiliation details and registration number directly.",
  },
  {
    question: "Can we visit the campus before deciding?",
    answer:
      "Yes, and we encourage it. Call or WhatsApp the office first to fix a convenient time so that a teacher or the front desk is free to receive you. The school is on Kod Road at Bhensola Chopati, Tehsil Badnawar, District Dhar.",
  },
  {
    question: "Is transport available?",
    answer:
      "The school's promotional material mentions a vehicle facility for children to be dropped off and picked up. Routes, timings and fees are not published here. Please ask the school office whether the service covers your area.",
  },
  {
    question: "Does the enquiry form on this website save my message?",
    answer:
      "No. This is a static website with no database. When you press 'Continue on WhatsApp', WhatsApp opens with your enquiry already written into the message. You still need to press send in WhatsApp so the school office receives it. You can also choose to open a prefilled email instead.",
  },
  {
    question: "How soon will the school reply to an enquiry?",
    answer:
      "That depends on the office, so we will not promise a time we cannot guarantee. WhatsApp is usually the fastest way to reach the school — messages sent during working hours are normally picked up the same or the next day.",
  },
];

export default function AdmissionsPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", href: "/" },
          { name: "Admissions", href: "/admissions" },
        ])}
      />

      <PageHero
        eyebrow="Admissions Open"
        title="Your Child's Bright Journey Starts Here."
        lede={`Sunrise Convent School welcomes enquiries for ${school.classRange.from} through ${school.classRange.to}. This page explains exactly how the process works and what to ask — so that your first conversation with the school office is a useful one.`}
        trail={trail}
        media={imagePaths.admissionPoster}
        mediaAlt="Admission poster for Sunrise Convent School, Bhensola — English medium, CBSE pattern, Nursery to Class 8, admission open"
      />

      {/* Quick actions */}
      <section className="section-y-tight bg-white">
        <div className="container-page">
          <ContactActions variant="card" showAddress />
        </div>
      </section>

      {/* Process */}
      <section className="section-y bg-white">
        <div className="container-page">
          <SectionHeading
            eyebrow="How to Apply"
            title="Five Steps to an Enquiry"
            lede="Nothing here is an official rule — this is simply the most straightforward way to move forward. The school office will tell you the exact requirements for the current session."
          />

          <ol className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {steps.map((step, index) => (
              <li key={step.title} className="card-base relative flex flex-col p-6">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-sun font-display text-[0.95rem] font-semibold text-navy-900">
                  {index + 1}
                </span>
                <h3 className="mt-4 font-display text-[1.05rem] font-semibold leading-snug text-navy-900">
                  {step.title}
                </h3>
                <p className="mt-2 text-[0.88rem] leading-relaxed text-ink/70">{step.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* What to ask + documents */}
      <section className="section-y bg-navy-50/60">
        <div className="container-page grid gap-6 lg:grid-cols-2">
          <article className="card-base p-8 sm:p-9">
            <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-navy-800 text-sun">
              <ClipboardCheck className="h-5 w-5" aria-hidden="true" />
            </span>
            <h2 className="display-md mt-5">What to ask the school office</h2>
            <p className="mt-3 text-[0.93rem] leading-relaxed text-ink/70">
              These are the questions parents most often need answered, and the ones this
              website cannot answer for you.
            </p>
            <ul className="mt-6 space-y-3">
              {askList.map((item) => (
                <li key={item} className="flex gap-3 text-[0.92rem] leading-relaxed text-ink/75">
                  <span
                    className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-sun"
                    aria-hidden="true"
                  />
                  {item}
                </li>
              ))}
            </ul>
          </article>

          <article className="card-base bg-cream p-8 sm:p-9">
            <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-sun text-navy-900">
              <CalendarCheck className="h-5 w-5" aria-hidden="true" />
            </span>
            <h2 className="display-md mt-5">Document checklist</h2>
            <p className="mt-3 text-[0.88rem] font-semibold uppercase tracking-[0.08em] text-sun-dark">
              Confirm requirements with the school
            </p>
            <p className="mt-3 text-[0.93rem] leading-relaxed text-ink/70">
              This is a general starting list based on normal school practice, not the
              school&rsquo;s confirmed requirement. The office will give you the exact list.
            </p>
            <ul className="mt-6 space-y-3">
              {checklist.map((item) => (
                <li key={item} className="flex gap-3 text-[0.92rem] leading-relaxed text-ink/75">
                  <span
                    className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-sun"
                    aria-hidden="true"
                  />
                  {item}
                </li>
              ))}
            </ul>

            <div className="mt-8 rounded-2xl border border-navy-100 bg-white p-5">
              <h3 className="text-[0.92rem] font-semibold text-navy-900">
                Seat availability and fees
              </h3>
              <p className="mt-1.5 text-[0.87rem] leading-relaxed text-ink/65">
                Seat availability in each class is confirmed by the school office for the
                current session. Fee details are provided directly by the school on enquiry — we
                do not publish unconfirmed figures on this website.
              </p>
            </div>
          </article>
        </div>
      </section>

      {/* Campus visit */}
      <section className="section-y bg-white">
        <div className="container-page grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="order-2 lg:order-1 lg:col-span-6">
            <div className="frame-media aspect-[4/3]">
              <Image
                src={imagePaths.campus}
                alt="Illustration of the Sunrise Convent School campus at Kod Road, Bhensola Chopati"
                fill
                sizes="(min-width: 1024px) 48vw, 100vw"
                loading="lazy"
              />
            </div>
          </div>

          <div className="order-1 lg:order-2 lg:col-span-6">
            <SectionHeading
              eyebrow="Visit the Campus"
              title="Come and See the School Yourself"
              lede="A visit settles questions that a website never can — how the classrooms feel, how the staff speak to children, and whether your child feels comfortable there."
            />

            <div className="mt-8 rounded-2xl border border-navy-100 bg-cream p-6">
              <p className="flex items-start gap-3 text-[0.92rem] leading-relaxed text-ink/75">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-school" aria-hidden="true" />
                <span>
                  <strong className="font-semibold text-navy-900">{school.name}</strong>
                  <br />
                  {school.address.street}
                  <br />
                  Tehsil {school.address.tehsil}, District {school.address.district},{" "}
                  {school.address.state}
                </span>
              </p>
            </div>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <a
                href={whatsappVisit()}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                <MessageCircle className="h-4 w-4" aria-hidden="true" />
                Request a campus visit
              </a>
              <a
                href={directionsHref}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost"
              >
                <MapPin className="h-4 w-4" aria-hidden="true" />
                Open directions
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-y bg-cream">
        <div className="container-page grid gap-10 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-4">
            <SectionHeading
              eyebrow="Questions Parents Ask"
              title="Frequently Asked"
              lede="If your question is not answered here, WhatsApp or call the school office — that is always the fastest way to a real answer."
            />
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={telHref} className="btn-ghost btn-sm">
                <Phone className="h-4 w-4" aria-hidden="true" />
                {school.phone.display}
              </a>
              <a href={`mailto:${school.email}`} className="btn-ghost btn-sm">
                <Mail className="h-4 w-4" aria-hidden="true" />
                Email
              </a>
            </div>
          </div>

          <div className="lg:col-span-8">
            <FAQAccordion items={faqs} />
          </div>
        </div>
      </section>

      {/* Enquiry form */}
      <section className="section-y bg-white">
        <div className="container-page grid gap-10 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow="Send an Enquiry"
              title="Tell Us About Your Child"
              lede="Fill in the short form and WhatsApp opens with your message already written. Press send there and it reaches the school office directly."
            />

            <ul className="mt-8 space-y-4">
              {[
                "Nothing is saved on this website — there is no database behind the form.",
                "Your details are used only to build the message on your own device.",
                "You can use the email button instead if WhatsApp is not convenient.",
                "If the form does not open WhatsApp, email ppatidar351@gmail.com directly.",
              ].map((item) => (
                <li key={item} className="flex gap-3 text-[0.9rem] leading-relaxed text-ink/70">
                  <span
                    className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-sun"
                    aria-hidden="true"
                  />
                  {item}
                </li>
              ))}
            </ul>

            <Link href="/contact" className="link-underline mt-8 inline-block text-[0.9rem] font-semibold text-school">
              Or see all ways to reach us
              <ArrowRight className="ml-1 inline h-4 w-4" aria-hidden="true" />
            </Link>
          </div>

          <div className="lg:col-span-7">
            <EnquiryForm />
          </div>
        </div>
      </section>

      <AdmissionCTA />
    </>
  );
}