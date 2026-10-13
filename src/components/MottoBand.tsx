import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SunRays } from "@/components/SunRays";
import { school } from "@/lib/site";

/** Full-width motto band — the school's strongest brand line. */
export function MottoBand({
  heading,
  body,
  cta,
}: {
  heading?: string;
  body?: string;
  cta?: { label: string; href: string };
}) {
  return (
    <section className="relative overflow-hidden bg-navy-800">
      <SunRays
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
        size={460}
        opacity={0.08}
      />

      <div className="container-page relative py-16 text-center sm:py-20">
        <p className="text-2xs font-semibold uppercase tracking-[0.24em] text-sun">
          Our Motto
        </p>

        <p className="mt-5 font-display text-[2rem] font-semibold leading-tight tracking-tight text-white sm:text-5xl">
          {school.motto}
        </p>

        <SunRays
          className="mx-auto mt-6"
          size={110}
          rays={14}
          opacity={0.85}
        />

        {heading && (
          <h2 className="mt-8 font-display text-2xl text-white sm:text-3xl">{heading}</h2>
        )}

        {body && (
          <p className="mx-auto mt-4 max-w-2xl text-[0.98rem] leading-relaxed text-white/70">
            {body}
          </p>
        )}

        {cta && (
          <Link href={cta.href} className="btn-sun mt-8">
            {cta.label}
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        )}
      </div>
    </section>
  );
}