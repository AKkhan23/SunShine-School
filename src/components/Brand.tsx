import Image from "next/image";
import Link from "next/link";
import { imagePaths, school } from "@/lib/site";

/**
 * Soft sunrise halo that sits behind the school crest.
 *
 * The logo's sun is small, so the glow gives it presence without competing
 * with the wordmark. It breathes slowly and the rays turn, which reads as
 * "sunrise" rather than as decoration. Both the header (top) and the footer
 * (bottom) use this, so the brand feels identical at both ends of the page.
 */
function SunHalo({ size, variant }: { size: number; variant: "dark" | "light" }) {
  const strength = variant === "light" ? 0.55 : 0.4;

  return (
    <span aria-hidden="true" className="pointer-events-none absolute inset-0">
      {/* Breathing light */}
      <span
        className="absolute -inset-[38%] rounded-full animate-[halo-breathe_6s_ease-in-out_infinite]"
        style={{
          background:
            "radial-gradient(closest-side, rgba(244,189,50,0.55), rgba(244,189,50,0.22) 45%, rgba(244,189,50,0) 72%)",
          opacity: strength + 0.2,
        }}
      />
      {/* Slowly turning rays */}
      <span
        className="absolute inset-0 animate-sun-sweep"
        style={{ animationDuration: "48s" }}
      >
        <svg viewBox="0 0 100 100" className="h-full w-full" fill="none">
          <defs>
            <radialGradient id="ray-fade" cx="50%" cy="50%" r="50%">
              <stop offset="45%" stopColor="#F4BD32" stopOpacity="0" />
              <stop offset="72%" stopColor="#F4BD32" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#F4BD32" stopOpacity="0" />
            </radialGradient>
          </defs>
          <circle cx="50" cy="50" r="48" fill="url(#ray-fade)" opacity={strength + 0.25} />
        </svg>
      </span>
    </span>
  );
}

export function BrandLockup({
  variant = "dark",
  size = "md",
  showMotto = true,
  halo = true,
}: {
  /** dark = for light backgrounds, light = for navy backgrounds */
  variant?: "dark" | "light";
  size?: "sm" | "md" | "lg";
  showMotto?: boolean;
  /** Animated sunrise glow behind the crest. */
  halo?: boolean;
}) {
  const logoSize = { sm: 40, md: 48, lg: 76 }[size];
  const titleSize = {
    sm: "text-[0.95rem] leading-tight",
    md: "text-[1.05rem] leading-tight",
    lg: "text-2xl leading-tight",
  }[size];
  const mottoSize = {
    sm: "text-[0.5rem] tracking-[0.14em]",
    md: "text-[0.55rem] tracking-[0.16em]",
    lg: "text-[0.62rem] tracking-[0.2em]",
  }[size];

  return (
    <span className="flex items-center gap-3">
      <span
        className="relative inline-flex shrink-0 items-center justify-center"
        style={{ width: logoSize, height: logoSize }}
      >
        {halo && <SunHalo size={logoSize} variant={variant} />}

        <span
          className="relative inline-flex h-full w-full items-center justify-center overflow-hidden rounded-full bg-white shadow-card ring-1 ring-navy-100"
        >
          <Image
            src={imagePaths.logo}
            alt={`${school.name} logo — ${school.motto}`}
            width={logoSize}
            height={logoSize}
            className="h-full w-full rounded-full object-cover"
            priority
          />
        </span>
      </span>
      <span className="flex min-w-0 flex-col">
        <span
          className={`font-display font-semibold tracking-tight ${titleSize} ${
            variant === "light" ? "text-white" : "text-navy-900"
          }`}
        >
          <span className="block truncate">Sunrise Convent</span>
          <span className="block truncate">School</span>
        </span>
        {showMotto && (
          <span
            className={`mt-0.5 font-semibold uppercase ${mottoSize} ${
              variant === "light" ? "text-sun" : "text-sun-dark"
            }`}
          >
            {school.motto}
          </span>
        )}
      </span>
    </span>
  );
}

export function BrandLink({ variant = "dark" }: { variant?: "dark" | "light" }) {
  return (
    <Link
      href="/"
      className="rounded-xl transition-opacity hover:opacity-90"
      aria-label={`${school.name} — home`}
    >
      <BrandLockup variant={variant} />
    </Link>
  );
}