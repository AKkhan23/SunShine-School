import Link from "next/link";
import { ArrowRight, Compass, Home, MessageCircle, Phone, Search } from "lucide-react";
import { SunRays } from "@/components/SunRays";
import { primaryNav } from "@/lib/navigation";
import { school } from "@/lib/site";
import { telHref, whatsappGeneric } from "@/lib/contact";

export default function NotFound() {
  return (
    <section className="relative overflow-hidden bg-cream">
      <SunRays className="pointer-events-none absolute -right-24 -top-24" size={320} opacity={0.2} />

      <div className="container-page relative py-20 sm:py-28">
        <div className="mx-auto max-w-2xl text-center">
          <SunRays className="mx-auto" size={110} rays={14} opacity={0.8} />

          <p className="eyebrow mt-6 justify-center">
            <span className="h-1.5 w-1.5 rounded-full bg-sun" aria-hidden="true" />
            Page not found
          </p>

          <h1 className="display-xl mt-4">This page seems to have wandered off.</h1>

          <p className="lede mx-auto mt-5 max-w-xl">
            The page you were looking for is not here. Nothing is broken — you may have followed
            an old link. Try one of the pages below, or contact the school office directly.
          </p>

          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <Link href="/" className="btn-primary">
              <Home className="h-4 w-4" aria-hidden="true" />
              Back to home
            </Link>
            <a href={telHref} className="btn-ghost">
              <Phone className="h-4 w-4" aria-hidden="true" />
              {school.phone.display}
            </a>
          </div>
        </div>

        <nav
          aria-label="Popular pages"
          className="mx-auto mt-14 max-w-3xl rounded-3xl border border-navy-100 bg-white p-6 shadow-card sm:p-8"
        >
          <h2 className="flex items-center justify-center gap-2 text-2xs font-semibold uppercase tracking-[0.16em] text-ink/45">
            <Search className="h-3.5 w-3.5" aria-hidden="true" />
            Or try one of these
          </h2>

          <ul className="mt-6 grid gap-2.5 sm:grid-cols-3">
            {primaryNav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="flex items-center justify-between gap-2 rounded-2xl border border-navy-100 px-4 py-3 text-[0.88rem] font-semibold text-navy-900 transition-all duration-300 ease-gentle hover:border-sun/60 hover:bg-cream"
                >
                  {item.label}
                  <ArrowRight className="h-4 w-4 text-ink/30" aria-hidden="true" />
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="mx-auto mt-10 flex max-w-xl flex-col items-center gap-3 rounded-3xl border border-navy-100 bg-navy-800 p-7 text-center">
          <Compass className="h-6 w-6 text-sun" aria-hidden="true" />
          <p className="text-[0.95rem] text-white/75">
            Looking for admission information for{" "}
            {school.classRange.from} to {school.classRange.to}?
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link href="/admissions" className="btn-sun btn-sm">
              Admissions
            </Link>
            <a
              href={whatsappGeneric()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline-light btn-sm"
            >
              <MessageCircle className="h-4 w-4" aria-hidden="true" />
              WhatsApp the school
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}