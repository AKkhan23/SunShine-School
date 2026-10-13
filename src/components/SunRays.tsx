import type { ReactNode } from "react";

/**
 * Decorative sunrise motif: a soft golden arc with radiating rays.
 * Purely presentational — hidden from assistive technology.
 */
export function SunRays({
  className = "",
  size = 120,
  rays = 16,
  opacity = 0.5,
}: {
  className?: string;
  size?: number;
  rays?: number;
  opacity?: number;
}) {
  const raysArray = Array.from({ length: rays });

  return (
    <svg
      aria-hidden="true"
      focusable="false"
      viewBox="0 0 200 200"
      width={size}
      height={size}
      className={className}
      style={{ opacity }}
      fill="none"
    >
      <circle cx="100" cy="100" r="46" fill="#F4BD32" opacity="0.22" />
      <circle cx="100" cy="100" r="34" fill="#F4BD32" opacity="0.32" />
      {raysArray.map((_, i) => {
        const angle = (360 / rays) * i;
        return (
          <line
            key={i}
            x1="100"
            y1="46"
            x2="100"
            y2="14"
            stroke="#F4BD32"
            strokeWidth="5"
            strokeLinecap="round"
            transform={`rotate(${angle} 100 100)`}
            opacity={i % 2 === 0 ? 0.85 : 0.45}
          />
        );
      })}
    </svg>
  );
}

/** Thin golden horizon arc used as a section separator. */
export function SunArc({ className = "" }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      viewBox="0 0 1440 90"
      preserveAspectRatio="none"
      className={className}
      fill="none"
    >
      <path
        d="M0 78C240 18 480 8 720 8s480 10 720 70"
        stroke="#F4BD32"
        strokeWidth="3"
        strokeLinecap="round"
        opacity="0.55"
      />
      <path
        d="M0 88C260 34 500 22 720 22s460 12 720 64"
        stroke="#58A9DC"
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.3"
      />
    </svg>
  );
}

/** Small solid sun used inline next to headings and CTAs. */
export function SunBadge({ className = "" }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      viewBox="0 0 24 24"
      className={className}
      fill="none"
    >
      <circle cx="12" cy="12" r="4.6" fill="#F4BD32" />
      {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => (
        <line
          key={deg}
          x1="12"
          y1="3.4"
          x2="12"
          y2="6.6"
          stroke="#F4BD32"
          strokeWidth="1.8"
          strokeLinecap="round"
          transform={`rotate(${deg} 12 12)`}
        />
      ))}
    </svg>
  );
}

/** Wraps a section with an optional soft background wash. */
export function Section({
  children,
  className = "",
  id,
  tone = "white",
}: {
  children: ReactNode;
  className?: string;
  id?: string;
  tone?: "white" | "cream" | "navy" | "mist";
}) {
  const tones: Record<string, string> = {
    white: "bg-white",
    cream: "bg-cream",
    mist: "bg-navy-50/60",
    navy: "bg-navy-800 text-white",
  };

  return (
    <section id={id} className={`${tones[tone]} ${className}`}>
      {children}
    </section>
  );
}