import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { school, addressLine1, addressLine2 } from "@/lib/site";
import { directionsHref, mailHref, telHref, whatsappGeneric } from "@/lib/contact";

type Variant = "card" | "row";

export function ContactActions({
  variant = "row",
  showAddress = false,
  className = "",
}: {
  variant?: Variant;
  showAddress?: boolean;
  className?: string;
}) {
  const base =
    variant === "card"
      ? "flex flex-col items-start gap-3 rounded-2xl border border-navy-100 bg-white p-5 shadow-card transition-all duration-300 ease-gentle hover:-translate-y-0.5 hover:border-sun/60 hover:shadow-lift"
      : "btn-ghost btn-sm";

  const items = [
    {
      key: "call",
      href: telHref,
      label: "Call the school",
      value: school.phone.display,
      Icon: Phone,
      external: false,
    },
    {
      key: "whatsapp",
      href: whatsappGeneric(),
      label: "WhatsApp enquiry",
      value: "Message the school office",
      Icon: MessageCircle,
      external: true,
    },
    {
      key: "email",
      href: mailHref,
      label: "Email the school",
      value: school.email,
      Icon: Mail,
      external: false,
    },
  ];

  return (
    <div
      className={
        variant === "card"
          ? `grid gap-3 sm:grid-cols-3 ${className}`
          : `flex flex-wrap items-center gap-2.5 ${className}`
      }
    >
      {items.map(({ key, href, label, value, Icon, external }) =>
        variant === "card" ? (
          <a
            key={key}
            href={href}
            {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
            className={base}
          >
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-sky/15 text-school">
              <Icon className="h-5 w-5" aria-hidden="true" />
            </span>
            <span>
              <span className="block text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-ink/50">
                {label}
              </span>
              <span className="mt-0.5 block text-[0.9rem] font-semibold text-navy-900 break-words">
                {value}
              </span>
            </span>
          </a>
        ) : (
          <a
            key={key}
            href={href}
            {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
            className={base}
          >
            <Icon className="h-4 w-4" aria-hidden="true" />
            {label}
          </a>
        ),
      )}

      {showAddress && (
        <a
          href={directionsHref}
          target="_blank"
          rel="noopener noreferrer"
          className={
            variant === "card"
              ? base
              : "btn-ghost btn-sm"
          }
        >
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-sun/20 text-sun-dark">
            <MapPin className="h-5 w-5" aria-hidden="true" />
          </span>
          <span>
            <span className="block text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-ink/50">
              Find the school
            </span>
            <span className="mt-0.5 block text-[0.9rem] font-semibold text-navy-900">
              {addressLine1}
              <br />
              <span className="font-normal text-ink/65">{addressLine2}</span>
            </span>
          </span>
        </a>
      )}
    </div>
  );
}