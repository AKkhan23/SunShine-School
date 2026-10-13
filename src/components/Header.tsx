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
    const onScroll = () => setScrolled(window.scrollY > 24);
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
      {/* Utility strip — contact shortcuts, visible on every page. */}
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
        className={`sticky top-0 z-50 border-b transition-all duration-300 ease-gentle ${
          scrolled
            ? "border-navy-100 bg-white/95 shadow-[0_8px_30px_-20px_rgba(7,54,83,0.5)] backdrop-blur-md"
            : "border-transparent bg-white"
        }`}
      >
        <div
          className={`container-page flex items-center justify-between gap-4 transition-all duration-300 ease-gentle ${
            scrolled ? "h-16" : "h-[4.75rem]"
          }`}
        >
          <BrandLink />

          <nav aria-label="Primary" className="hidden lg:block">
            <ul className="flex items-center gap-0.5">
              {primaryNav.map((item) => {
                const active = isActive(item.href);
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      aria-current={active ? "page" : undefined}
                      className={`relative block rounded-full px-3 py-2 text-[0.83rem] font-semibold transition-colors duration-200 ${
                        active
                          ? "text-navy-900"
                          : "text-ink/70 hover:text-navy-800"
                      }`}
                    >
                      {item.label}
                      <span
                        aria-hidden="true"
                        className={`absolute inset-x-3 -bottom-0.5 h-[2.5px] rounded-full bg-sun transition-transform duration-300 ease-gentle ${
                          active ? "scale-x-100" : "scale-x-0"
                        }`}
                      />
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <Link href="/admissions" className="btn-primary btn-sm">
              Enquire for Admission
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>

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
      </header>

      {/* Mobile navigation panel */}
      <div
        id="mobile-navigation"
        ref={panelRef}
        hidden={!open}
        className="fixed inset-x-0 bottom-0 top-[4.75rem] z-40 overflow-y-auto overscroll-contain bg-navy-900/40 backdrop-blur-sm lg:hidden"
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
                        active
                          ? "bg-sun/15 text-navy-900"
                          : "text-ink/80 hover:bg-navy-50"
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