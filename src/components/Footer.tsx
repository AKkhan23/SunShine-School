import Link from "next/link";
import { ArrowUpRight, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { InstagramIcon } from "@/components/BrandIcons";
import { BrandLockup } from "@/components/Brand";
import { SunRays } from "@/components/SunRays";
import { footerNavGroups, legalNav } from "@/lib/navigation";
import { school, fullAddress } from "@/lib/site";
import { directionsHref, mailHref, telHref, whatsappGeneric } from "@/lib/contact";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-navy-900 text-white">
      <SunRays
        className="pointer-events-none absolute -right-20 -top-24 hidden lg:block"
        size={360}
        opacity={0.12}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-sun/60 to-transparent"
      />

      <div className="container-page relative py-14 sm:py-16">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-4">
            <BrandLockup variant="light" size="lg" />

            <p className="mt-6 max-w-sm text-[0.95rem] leading-relaxed text-white/70">
              An English medium school in Bhensola, Tehsil Badnawar, District Dhar,
              Madhya Pradesh — welcoming children from {school.classRange.from} to{" "}
              {school.classRange.to} and the families who support them.
            </p>

            <p className="mt-6 inline-flex items-center gap-2 rounded-full border border-sun/40 bg-sun/10 px-4 py-2 text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-sun">
              {school.motto}
            </p>
          </div>

          <div className="grid gap-10 sm:grid-cols-2 lg:col-span-5">
            {footerNavGroups.map((group) => (
              <nav key={group.label} aria-label={group.label}>
                <h2 className="text-2xs font-semibold uppercase tracking-[0.18em] text-sun">
                  {group.label}
                </h2>
                <ul className="mt-4 space-y-2.5">
                  {group.items.map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className="link-underline text-[0.92rem] text-white/75 transition-colors hover:text-white"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}
          </div>

          <div className="lg:col-span-3">
            <h2 className="text-2xs font-semibold uppercase tracking-[0.18em] text-sun">
              Get in touch
            </h2>

            <address className="mt-4 space-y-3.5 text-[0.92rem] not-italic text-white/75">
              <p className="flex gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-sky" aria-hidden="true" />
                <span>
                  {school.name}
                  <br />
                  {fullAddress}
                </span>
              </p>
              <p>
                <a
                  href={telHref}
                  className="link-underline flex items-center gap-3 transition-colors hover:text-white"
                >
                  <Phone className="h-4 w-4 shrink-0 text-sky" aria-hidden="true" />
                  {school.phone.display}
                </a>
              </p>
              <p>
                <a
                  href={mailHref}
                  className="link-underline flex items-center gap-3 break-all transition-colors hover:text-white"
                >
                  <Mail className="h-4 w-4 shrink-0 text-sky" aria-hidden="true" />
                  {school.email}
                </a>
              </p>
            </address>

            <div className="mt-6 flex flex-wrap gap-2.5">
              <a
                href={whatsappGeneric()}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-sm bg-sun text-navy-900 hover:bg-sun-light"
              >
                <MessageCircle className="h-4 w-4" aria-hidden="true" />
                WhatsApp
              </a>
              <a
                href={school.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-sm bg-white/10 text-white hover:bg-white/20"
              >
                <InstagramIcon className="h-4 w-4" />
                Instagram
              </a>
              <a
                href={directionsHref}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline-light btn-sm"
              >
                Directions
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>

            <a
              href={school.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="link-underline mt-4 inline-flex items-center gap-2 text-[0.83rem] font-medium text-white/70 transition-colors hover:text-sun"
            >
              <InstagramIcon className="h-3.5 w-3.5" />
              {school.social.instagramHandle}
            </a>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-6 text-[0.8rem] text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {school.name}. All rights reserved.
          </p>
          <ul className="flex flex-wrap items-center gap-x-5 gap-y-2">
            {legalNav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="link-underline hover:text-white/80">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Development credit — centred at the foot of the page */}
        <div className="mt-8 flex flex-col items-center justify-center gap-3 text-center">
          <span
            aria-hidden="true"
            className="h-px w-24 bg-gradient-to-r from-transparent via-sun/70 to-transparent"
          />
          <p className="text-[0.62rem] font-semibold uppercase tracking-[0.3em] text-white/45">
            Designed &amp; Developed by
          </p>
          <p className="font-display text-xl font-bold uppercase tracking-[0.16em] text-sun sm:text-2xl">
            <a href="https://www.aimfortech.com/" target="_blank" rel="noopener noreferrer" className="hover:text-sun">
              Aimfortech Solution
            </a>
          </p>
          <span
            aria-hidden="true"
            className="h-px w-24 bg-gradient-to-r from-transparent via-sun/70 to-transparent"
          />
        </div>

        <p className="mt-4 text-[0.72rem] leading-relaxed text-white/35">
          This is a static information website. Enquiries are not stored here — please use
          WhatsApp, phone or email so the message reaches the school office directly.
        </p>
      </div>
    </footer>
  );
}