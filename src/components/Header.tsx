"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { ArrowRight, Menu, Phone, X } from "lucide-react";
import { BrandLink } from "@/components/Brand";
import { primaryNav } from "@/lib/navigation";
import { school } from "@/lib/site";
import { telHref, whatsappAdmission } from "@/lib/contact";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const panelRef = useRef<HTMLDivElement | null>(null);
  const toggleRef = useRef<HTMLButtonElement | null>(null);

  /* Close the drawer whenever the route changes. */
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  /* Condense the header on scroll. */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Lock body scroll + trap focus while the drawer is open. */
  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
        return;
      }
      if (event.key !== "Tab" || !panelRef.current) return;

      const focusables = panelRef.current.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), input, [tabindex]:not([tabindex="-1"])',
      );
      if (focusables.length === 0) return;

      const first = focusables[0];
      const last = focusables[focusables.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <>
      {/* Contact strip — desktop only, scrolls away with the page. */}
      <div className="hidden bg-navy-900 text-white md:block">
        <div className="container-page flex h-9 items-center justify-between text-2xs">
          <p className="flex items-center gap-2 text-white/75">
            <span className="inline-flex h-1.5 w-1.5 rounded-full bg-sun" aria-hidden="true" />
            {school.classRange.from} to {school.classRange.to} · English Medium · Bhensola,
            Badnawar, Dhar (M.P.)
          </p>
          <div className="flex items-center gap-5">
            <a
              href={telHref}
              className="link-underline flex items-center gap-1.5 text-white/85 transition-colors hover:text-sun"
            >
              <Phone className="h-3.5 w-3.5" aria-hidden="true" />
              {school.phone.display}
            </a>
            <a
              href={whatsappAdmission()}
              target="_blank"
              rel="noopener noreferrer"
              className="link-underline text-white/85 transition-colors hover:text-sun"
            >
              WhatsApp the school office
            </a>
          </div>
        </div>
      </div>

      <header
        className={`sticky top-0 z-50 border-b bg-white/95 backdrop-blur-md transition-shadow duration-300 ease-gentle ${
          scrolled
            ? "border-navy-100 shadow-[0_8px_30px_-20px_rgba(7,54,83,0.5)]"
            : "border-transparent"
        }`}
      >
        {/* Row 1 — brand and primary action */}
        <div
          className={`container-page flex items-center justify-between gap-4 transition-all duration-300 ease-gentle ${
            scrolled ? "h-14" : "h-[4.25rem]"
          }`}
        >
          <BrandLink />

          <div className="flex items-center gap-2.5">
            <Link href="/admissions" className="btn-primary btn-sm hidden sm:inline-flex">
              Enquire for Admission
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>

            <button
              ref={toggleRef}
              type="button"
              onClick={() => setOpen((value) => !value)}
              aria-expanded={open}
              aria-controls="mobile-navigation"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-navy-200 bg-white text-navy-800 shadow-card transition-colors hover:border-navy-300 lg:hidden"
            >
              <span className="sr-only">
                {open ? "Close navigation menu" : "Open navigation menu"}
              </span>
              {open ? (
                <X className="h-5 w-5" aria-hidden="true" />
              ) : (
                <Menu className="h-5 w-5" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>

        {/* Row 2 — full navigation. Always visible, desktop only. */}
        <div className="hidden border-t border-navy-100/80 lg:block">
          <nav aria-label="Primary" className="container-page">
            <ul
              className={`scrollbar-none flex items-center justify-center gap-0.5 overflow-x-auto transition-all duration-300 ease-gentle ${
                scrolled ? "h-11" : "h-12"
              }`}
            >
              {primaryNav.map((item) => {
                const active = isActive(item.href);
                return (
                  <li key={item.href} className="shrink-0">
                    <Link
                      href={item.href}
                      aria-current={active ? "page" : undefined}
                      className={`group relative flex h-9 items-center rounded-full px-3.5 text-[0.82rem] font-semibold transition-colors duration-300 ease-gentle ${
                        active
                          ? "text-navy-900"
                          : "text-ink/65 hover:text-navy-900"
                      }`}
                    >
                      {/* Soft pill that fades in underneath the label */}
                      <span
                        aria-hidden="true"
                        className={`absolute inset-0 rounded-full bg-sun/15 transition-opacity duration-300 ease-gentle ${
                          active ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                        }`}
                      />

                      {/* Underline that grows from the centre */}
                      <span
                        aria-hidden="true"
                        className={`absolute inset-x-3.5 bottom-0.5 h-[2.5px] origin-center rounded-full bg-gradient-to-r from-sun-dark via-sun to-sun-light transition-transform duration-300 ease-gentle ${
                          active
                            ? "scale-x-100"
                            : "scale-x-0 group-hover:scale-x-100"
                        }`}
                      />

                      <span className="relative z-10 whitespace-nowrap">{item.label}</span>

                      {/* Active marker */}
                      {active && (
                        <span
                          aria-hidden="true"
                          className="relative z-10 ml-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-sun ring-4 ring-sun/30"
                        />
                      )}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      </header>

      {/* Mobile navigation panel */}
      <div
        id="mobile-navigation"
        ref={panelRef}
        hidden={!open}
        role="dialog"
        aria-modal="true"
        aria-label="Site navigation"
        className="fixed inset-x-0 bottom-0 top-[4.25rem] z-40 overflow-y-auto overscroll-contain bg-navy-900/40 backdrop-blur-sm lg:hidden"
        onClick={(event) => {
          if (event.target === event.currentTarget) setOpen(false);
        }}
      >
        <div className="animate-fade-rise mx-3 mt-3 overflow-hidden rounded-3xl border border-navy-100 bg-white shadow-lift">
          <nav aria-label="Mobile" className="p-3">
            <ul className="flex flex-col">
              {primaryNav.map((item) => {
                const active = isActive(item.href);
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      aria-current={active ? "page" : undefined}
                      className={`flex items-center justify-between rounded-2xl px-4 py-3.5 text-[0.95rem] font-semibold transition-colors ${
                        active ? "bg-sun/15 text-navy-900" : "text-ink/80 hover:bg-navy-50"
                      }`}
                    >
                      {item.label}
                      {active && (
                        <span className="h-2 w-2 rounded-full bg-sun" aria-hidden="true" />
                      )}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="grid gap-2.5 border-t border-navy-100 bg-navy-50/60 p-3">
            <Link href="/admissions" className="btn-primary w-full">
              Enquire for Admission
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            <div className="grid grid-cols-2 gap-2.5">
              <a href={telHref} className="btn-ghost btn-sm w-full">
                <Phone className="h-4 w-4" aria-hidden="true" />
                Call school
              </a>
              <a
                href={whatsappAdmission()}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost btn-sm w-full"
              >
                WhatsApp
              </a>
            </div>
            <p className="px-1 pt-1 text-center text-2xs text-ink/55">
              {school.phone.display}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}