import Image from "next/image";
import Link from "next/link";
import { imagePaths, school } from "@/lib/site";

export function BrandLockup({
  variant = "dark",
  size = "md",
  showMotto = true,
}: {
  /** dark = for light backgrounds, light = for navy backgrounds */
  variant?: "dark" | "light";
  size?: "sm" | "md" | "lg";
  showMotto?: boolean;
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
        className="relative inline-flex shrink-0 items-center justify-center rounded-full bg-white shadow-card ring-1 ring-navy-100"
        style={{ width: logoSize, height: logoSize }}
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