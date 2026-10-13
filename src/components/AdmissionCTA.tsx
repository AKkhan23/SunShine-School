import Link from "next/link";
import { ArrowRight, MessageCircle, Phone } from "lucide-react";
import { SunRays } from "@/components/SunRays";
import { school } from "@/lib/site";
import { telHref, whatsappAdmission } from "@/lib/contact";

export function AdmissionCTA({
  headline = "Give Your Child a Bright Start.",
  copy = "Looking for a nurturing place for your child's learning journey? Connect with Sunrise Convent School to learn about classes, admission requirements, and the next steps.",
  showPhone = true,
}: {
  headline?: string;
  copy?: string;
  showPhone?: boolean;
}) {
  return (
    <section className="relative overflow-hidden bg-sun">
      <SunRays
        className="pointer-events-none absolute -right-16 -top-24"
        size={340}
        opacity={0.22}
      />
      <SunRays
        className="pointer-events-none absolute -bottom-28 -left-20 hidden lg:block"
        size={300}
        opacity={0.14}
      />

      <div className="container-page relative py-14 sm:py-16 lg:py-20">
        <div className="grid items-center gap-8 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-7">
            <p className="inline-flex items-center gap-2 text-2xs font-semibold uppercase tracking-[0.18em] text-navy-800/70">
              <span className="h-1.5 w-1.5 rounded-full bg-navy-800" aria-hidden="true" />
              Admissions · {school.classRange.from} to {school.classRange.to}
            </p>
            <h2 className="display-lg mt-4 max-w-2xl !text-navy-900">{headline}</h2>
            <p className="mt-5 max-w-2xl text-[1.02rem] leading-relaxed text-navy-900/80">
              {copy}
            </p>
          </div>

          <div className="lg:col-span-5">
            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <a
                href={whatsappAdmission()}
                target="_blank"
                rel="noopener noreferrer"
                className="btn w-full bg-navy-800 text-white shadow-lift hover:bg-navy-900"
              >
                <MessageCircle className="h-5 w-5" aria-hidden="true" />
                Enquire on WhatsApp
              </a>

              {showPhone && (
                <a
                  href={telHref}
                  className="btn w-full border border-navy-800/25 bg-white/70 text-navy-900 hover:bg-white"
                >
                  <Phone className="h-5 w-5" aria-hidden="true" />
                  Call {school.phone.display}
                </a>
              )}

              <Link
                href="/admissions"
                className="link-underline inline-flex items-center justify-center gap-1.5 text-[0.9rem] font-semibold text-navy-900 sm:justify-start lg:justify-center"
              >
                Read the full admission process
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>

            <p className="mt-5 text-[0.78rem] leading-relaxed text-navy-900/60">
              WhatsApp opens a prefilled message in your own app. Tap send there to
              complete the enquiry — this website does not store anything.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}