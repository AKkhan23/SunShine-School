import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { SunArc, SunRays } from "@/components/SunRays";

export type Crumb = { name: string; href: string };

export function Breadcrumbs({ trail }: { trail: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb">
      <ol className="flex flex-wrap items-center gap-x-1.5 gap-y-1 text-[0.8rem]">
        {trail.map((item, index) => {
          const isLast = index === trail.length - 1;
          return (
            <li key={item.href} className="flex items-center gap-1.5">
              {isLast ? (
                <span aria-current="page" className="font-semibold text-navy-900">
                  {item.name}
                </span>
              ) : (
                <>
                  <Link
                    href={item.href}
                    className="link-underline text-ink/60 transition-colors hover:text-navy-800"
                  >
                    {item.name}
                  </Link>
                  <ChevronRight
                    className="h-3.5 w-3.5 text-ink/30"
                    aria-hidden="true"
                  />
                </>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

/**
 * Shared page banner. Editorial layout with an optional image column so each
 * page keeps its own character instead of collapsing into one template.
 */
export function PageHero({
  eyebrow,
  title,
  lede,
  trail,
  children,
  media,
  mediaAlt,
  align = "split",
}: {
  eyebrow: string;
  title: ReactNode;
  lede: string;
  trail?: Crumb[];
  children?: ReactNode;
  media?: string;
  mediaAlt?: string;
  align?: "split" | "centered";
}) {
  return (
    <header
      className={`relative overflow-hidden bg-cream ${
        align === "centered" ? "" : ""
      }`}
    >
      <SunRays
        className="pointer-events-none absolute -left-28 -top-28 hidden lg:block"
        size={420}
        opacity={0.18}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white to-transparent"
      />

      <div className="container-page relative pb-12 pt-10 sm:pb-16 sm:pt-14">
        {trail && (
          <div className="mb-6">
            <Breadcrumbs trail={trail} />
          </div>
        )}

        <div
          className={
            media
              ? "grid items-center gap-10 lg:grid-cols-12 lg:gap-14"
              : "max-w-3xl"
          }
        >
          <div className={media ? "lg:col-span-6" : ""}>
            <p className="eyebrow">
              <span className="h-1.5 w-1.5 rounded-full bg-sun" aria-hidden="true" />
              {eyebrow}
            </p>
            <h1 className="display-xl mt-4">{title}</h1>
            <p className="lede mt-5 max-w-2xl">{lede}</p>
            {children && <div className="mt-8">{children}</div>}
          </div>

          {media && (
            <div className="relative lg:col-span-6">
              <div
                aria-hidden="true"
                className="absolute -inset-3 -z-10 rounded-[2.5rem] bg-gradient-to-br from-sun/25 via-sun/10 to-sky/20"
              />
              <div className="frame-media aspect-[4/3]">
                <Image
                  src={media}
                  alt={mediaAlt ?? ""}
                  fill
                  priority
                  sizes="(min-width: 1024px) 48vw, 100vw"
                />
              </div>
            </div>
          )}
        </div>
      </div>

      <SunArc className="relative block h-12 w-full sm:h-16" />
    </header>
  );
}