import type { Metadata } from "next";
import Link from "next/link";

import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { breadcrumbJsonLd, buildMetadata } from "@/lib/seo";
import { school } from "@/lib/site";

const trail = [
  { name: "Home", href: "/" },
  { name: "Privacy Policy", href: "/privacy-policy" },
];

export const metadata: Metadata = buildMetadata({
  title: "Privacy Policy | Sunrise Convent School, Bhensola",
  description:
    "How the Sunrise Convent School website handles information you choose to share. This static site has no database, no tracking and no cookies; enquiries are handed off to WhatsApp or your own email app.",
  path: "/privacy-policy",
});

const sections = [
  {
    heading: "About this website",
    body: [
      `This website for ${school.name}, Bhensola, is a static information website. It is made of pre-built HTML, CSS and JavaScript files. There is no server-side application, no login, no user account and no database behind it.`,
      `Because of that, almost none of the usual data-collection problems apply. This notice describes exactly what does happen when you choose to contact the school.`,
    ],
  },
  {
    heading: "Information you may choose to give us",
    body: [
      "The enquiry form asks for a parent or guardian name, the student's name, the class you are enquiring about, a contact number, and — optionally — an email address and a message. Only the fields you actually fill in are used.",
      "This website never asks for sensitive information about a child: no date of birth, no address, no identification numbers, no medical details, and no payment information. Please do not send any of those through the enquiry form. If the school needs a document, the office will ask for it directly and will explain why.",
    ],
  },
  {
    heading: "What happens when you press the enquiry button",
    body: [
      "When you select 'Continue on WhatsApp', your answers are used in your own browser to compose a message. Your phone's WhatsApp application then opens with that message already written. The website sends nothing to us, and nothing is stored anywhere on the website. You still need to press send in WhatsApp yourself before the school office receives anything.",
      "If you instead select 'Open in email instead', your email application opens with a new message addressed to the school's official email address, with your answers in the body. Again, nothing is transmitted until you press send in your email app.",
      "In both cases, the message then passes through WhatsApp or your email provider. Those companies have their own privacy policies and their own handling of your data — they are separate from this website and separate from the school.",
    ],
  },
  {
    heading: "Information kept by the school",
    body: [
      `Once a message reaches the school, it is the school — not this website — that decides what to record and for how long. If you contact the school by phone, WhatsApp or email, the details you share may be kept by the school office in order to respond to you, and may be handled under the school's own records and safeguarding policies.`,
      "You can ask the school to delete or correct anything it holds about you by contacting the office directly.",
    ],
  },
  {
    heading: "Cookies, analytics and tracking",
    body: [
      "This website does not set any cookies, does not run analytics scripts, and does not use advertising or cross-site tracking. No third-party tracking code has been added.",
      "Only two font families are downloaded from the Google Fonts service when a page loads. Like any request to an external server, your browser's IP address is visible to that service for the purpose of delivering the font file. If the school prefers to avoid this entirely, the fonts can be self-hosted instead — see the project README.",
    ],
  },
  {
    heading: "Links to other applications and websites",
    body: [
      "Buttons on this site open WhatsApp, your email application, and Google Maps. Once you leave this website you are subject to the privacy policy of whichever application you use. We have no control over, and no access to, anything you send there.",
    ],
  },
  {
    heading: "Children's information",
    body: [
      "Photographs of students, their names and their individual examination results appear on this website only where the school has supplied the material. Publishing a minor's photograph or result should always be backed by written consent from a parent or guardian.",
      "No child's personal details are collected through this website, and nothing a parent types into the enquiry form is stored here. Parents remain responsible for the information they choose to send onward through WhatsApp or email.",
    ],
  },
  {
    heading: "Changes to this notice",
    body: [
      "If the school's website is updated — for example if analytics or a booking system is ever added — this notice should be updated at the same time, so that it continues to describe what the site actually does.",
    ],
  },
  {
    heading: "Contact us",
    body: [
      `Questions about this notice, or about the information the school holds about you or your child, can be sent to the school office at ${school.email} or by calling ${school.phone.display}.`,
    ],
  },
];

export default function PrivacyPolicyPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", href: "/" },
          { name: "Privacy Policy", href: "/privacy-policy" },
        ])}
      />

      <PageHero
        eyebrow="Privacy"
        title="Privacy Policy"
        lede="A short, plain-language explanation of what this website does with information — which is very little, because this website does almost nothing on its own."
        trail={trail}
      />

      <section className="section-y bg-white">
        <div className="container-page grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-8">
            <div className="space-y-10">
              {sections.map((section, index) => (
                <article key={section.heading}>
                  <div className="flex items-start gap-4">
                    <span className="mt-1 font-display text-[0.9rem] font-semibold text-sun-dark">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h2 className="display-md">{section.heading}</h2>
                      <div className="prose-body mt-4">
                        {section.body.map((paragraph) => (
                          <p key={paragraph}>{paragraph}</p>
                        ))}
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <div className="mt-12 rounded-3xl border border-sun/50 bg-sun/10 p-7">
              <h2 className="font-display text-lg font-semibold text-navy-900">
                Note for the school
              </h2>
              <p className="mt-2 text-[0.9rem] leading-relaxed text-navy-900/75">
                This notice describes only what the website actually does today. Please review
                it before launch, and re-check it if the site is ever changed.
              </p>
            </div>
          </div>

          <aside className="lg:col-span-4">
            <div className="lg:sticky lg:top-28">
              <div className="rounded-3xl border border-navy-100 bg-cream p-7">
                <h2 className="font-display text-lg font-semibold text-navy-900">
                  In short
                </h2>
                <ul className="mt-5 space-y-3.5">
                  {[
                    "No database, no accounts, no admin panel.",
                    "No cookies, no analytics, no advertising trackers.",
                    "The enquiry form never sends or stores anything on this site.",
                    "You press send in WhatsApp or your email app.",
                    "Only what you choose to send reaches the school office.",
                  ].map((item) => (
                    <li key={item} className="flex gap-3 text-[0.88rem] leading-relaxed text-ink/75">
                      <span
                        className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-sun"
                        aria-hidden="true"
                      />
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="mt-7 border-t border-navy-200 pt-6">
                  <h3 className="text-2xs font-semibold uppercase tracking-[0.14em] text-ink/45">
                    School contact
                  </h3>
                  <p className="mt-3 text-[0.88rem] leading-relaxed text-ink/70">
                    {school.name}
                    <br />
                    {school.address.street}
                    <br />
                    Tehsil {school.address.tehsil}, District {school.address.district}
                    <br />
                    {school.email}
                    <br />
                    {school.phone.display}
                  </p>
                  <Link
                    href="/contact"
                    className="link-underline mt-4 inline-block text-[0.87rem] font-semibold text-school"
                  >
                    Go to the contact page
                  </Link>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}