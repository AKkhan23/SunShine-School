"use client";

import { useId, useState } from "react";
import { Minus, Plus } from "lucide-react";

export type FaqItem = {
  question: string;
  answer: string;
};

export function FAQAccordion({ items }: { items: FaqItem[] }) {
  const uid = useId();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="divide-y divide-navy-100 overflow-hidden rounded-3xl border border-navy-100 bg-white shadow-card">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        const buttonId = `${uid}-q-${index}`;
        const panelId = `${uid}-a-${index}`;

        return (
          <div key={item.question}>
            <h3>
              <button
                type="button"
                id={buttonId}
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className="flex w-full items-start justify-between gap-4 px-5 py-5 text-left transition-colors duration-200 hover:bg-navy-50/70 sm:px-7 sm:py-6"
              >
                <span className="text-[0.98rem] font-semibold leading-snug text-navy-900">
                  {item.question}
                </span>
                <span
                  aria-hidden="true"
                  className={`mt-0.5 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full transition-colors duration-300 ${
                    isOpen ? "bg-sun text-navy-900" : "bg-navy-50 text-navy-700"
                  }`}
                >
                  {isOpen ? (
                    <Minus className="h-4 w-4" />
                  ) : (
                    <Plus className="h-4 w-4" />
                  )}
                </span>
              </button>
            </h3>

            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              hidden={!isOpen}
              className="px-5 pb-6 sm:px-7"
            >
              <p className="max-w-3xl text-[0.93rem] leading-relaxed text-ink/75">
                {item.answer}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}