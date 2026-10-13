import type { ReactNode } from "react";
import { SunBadge } from "@/components/SunRays";

export function SectionHeading({
  eyebrow,
  title,
  lede,
  align = "left",
  tone = "dark",
  className = "",
  as: Tag = "h2",
}: {
  eyebrow?: string;
  title: ReactNode;
  lede?: ReactNode;
  align?: "left" | "center";
  tone?: "dark" | "light";
  className?: string;
  as?: "h2" | "h3";
}) {
  const centered = align === "center";

  return (
    <div
      className={`${centered ? "mx-auto max-w-3xl text-center" : "max-w-3xl"} ${className}`}
    >
      {eyebrow && (
        <p
          className={`eyebrow ${centered ? "justify-center" : ""} ${
            tone === "light" ? "!text-sun" : ""
          }`}
        >
          {centered ? (
            <SunBadge className="h-3.5 w-3.5" />
          ) : (
            <span className="h-1.5 w-1.5 rounded-full bg-sun" aria-hidden="true" />
          )}
          {eyebrow}
        </p>
      )}

      <Tag
        className={`display-lg mt-4 ${tone === "light" ? "!text-white" : ""}`}
      >
        {title}
      </Tag>

      {lede && (
        <p
          className={`lede mt-5 ${
            tone === "light" ? "text-white/70" : ""
          } ${centered ? "mx-auto" : ""}`}
        >
          {lede}
        </p>
      )}
    </div>
  );
}