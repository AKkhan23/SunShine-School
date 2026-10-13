"use client";

import Image from "next/image";
import { useCallback, useEffect, useMemo, useState } from "react";
import { ArrowLeft, ArrowRight, X, ZoomIn } from "lucide-react";
import { galleryCategories, type GalleryItem } from "@/lib/gallery";

export function GalleryGrid({ items }: { items: GalleryItem[] }) {
  const [filter, setFilter] = useState<string>("All");
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const visible = useMemo(
    () => (filter === "All" ? items : items.filter((i) => i.category === filter)),
    [filter, items],
  );

  const close = useCallback(() => setActiveIndex(null), []);
  const step = useCallback(
    (delta: number) =>
      setActiveIndex((current) =>
        current === null ? null : (current + delta + visible.length) % visible.length,
      ),
    [visible.length],
  );

  /* Keyboard controls for the lightbox. */
  useEffect(() => {
    if (activeIndex === null) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
      if (event.key === "ArrowRight") step(1);
      if (event.key === "ArrowLeft") step(-1);
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [activeIndex, close, step]);

  const active = activeIndex !== null ? visible[activeIndex] : undefined;

  return (
    <>
      {/* Category filter */}
      <div className="flex flex-wrap items-center gap-2" role="group" aria-label="Filter gallery by category">
        {["All", ...galleryCategories].map((category) => {
          const selected = filter === category;
          const count =
            category === "All"
              ? items.length
              : items.filter((i) => i.category === category).length;

          return (
            <button
              key={category}
              type="button"
              onClick={() => {
                setFilter(category);
                setActiveIndex(null);
              }}
              aria-pressed={selected}
              className={`rounded-full border px-4 py-2 text-[0.82rem] font-semibold transition-all duration-300 ease-gentle ${
                selected
                  ? "border-navy-800 bg-navy-800 text-white shadow-card"
                  : "border-navy-200 bg-white text-ink/70 hover:border-navy-300 hover:text-navy-800"
              }`}
            >
              {category}
              <span className={`ml-1.5 text-[0.7rem] ${selected ? "text-white/60" : "text-ink/35"}`}>
                {count}
              </span>
            </button>
          );
        })}
      </div>

      <ul className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((item, index) => (
          <li
            key={item.src}
            className={item.span === "wide" ? "sm:col-span-2" : ""}
          >
            <button
              type="button"
              onClick={() => setActiveIndex(index)}
              className="group relative block w-full overflow-hidden rounded-3xl border border-navy-100 bg-navy-50 text-left shadow-card transition-all duration-300 ease-gentle hover:-translate-y-1 hover:border-sun/60 hover:shadow-lift"
            >
              <span
                className="relative block w-full"
                style={{ aspectRatio: item.aspect ?? "4 / 3" }}
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  loading="lazy"
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className={`object-cover transition-transform duration-500 ease-gentle group-hover:scale-[1.04] ${
                    item.shape === "circle" ? "p-6" : ""
                  }`}
                />
              </span>

              <span
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-navy-900/0 transition-colors duration-300 group-hover:bg-navy-900/25"
              />

              <span className="absolute right-3 top-3 inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-navy-800 opacity-0 shadow-card backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100">
                <ZoomIn className="h-4 w-4" aria-hidden="true" />
              </span>

              <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy-900/90 via-navy-900/50 to-transparent px-4 pb-3.5 pt-10">
                <span className="block text-[0.62rem] font-semibold uppercase tracking-[0.16em] text-sun">
                  {item.category}
                </span>
                <span className="mt-0.5 block text-[0.85rem] font-semibold leading-snug text-white">
                  {item.caption}
                </span>
              </span>

              <span className="sr-only">Open larger view</span>
            </button>
          </li>
        ))}
      </ul>

      {/* Lightbox */}
      {active && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={active.caption}
          className="fixed inset-0 z-[60] flex items-center justify-center bg-navy-950/95 p-4 backdrop-blur-sm"
          onClick={(event) => {
            if (event.target === event.currentTarget) close();
          }}
        >
          <div className="relative w-full max-w-4xl">
            <button
              type="button"
              onClick={close}
              className="absolute -top-14 right-0 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-[0.8rem] font-semibold text-white transition-colors hover:bg-white/20 sm:-top-2 sm:-right-16 sm:flex-col sm:gap-1"
            >
              <X className="h-4 w-4" aria-hidden="true" />
              Close
            </button>

            <figure className="overflow-hidden rounded-3xl border border-white/10 bg-navy-900/40">
              <div className="relative aspect-[4/3] w-full sm:aspect-[16/10]">
                <Image
                  src={active.src}
                  alt={active.alt}
                  fill
                  sizes="(min-width: 1024px) 60vw, 90vw"
                  className="object-contain"
                />
              </div>
              <figcaption className="border-t border-white/10 px-5 py-4 text-center">
                <span className="block text-[0.62rem] font-semibold uppercase tracking-[0.16em] text-sun">
                  {active.category}
                </span>
                <span className="mt-1 block text-[0.92rem] font-medium text-white">
                  {active.caption}
                </span>
              </figcaption>
            </figure>

            <div className="mt-4 flex items-center justify-between gap-3">
              <button
                type="button"
                onClick={() => step(-1)}
                className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-[0.8rem] font-semibold text-white transition-colors hover:bg-white/20"
              >
                <ArrowLeft className="h-4 w-4" aria-hidden="true" />
                Previous
              </button>
              <span className="text-[0.78rem] text-white/55">
                {(activeIndex ?? 0) + 1} of {visible.length}
              </span>
              <button
                type="button"
                onClick={() => step(1)}
                className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-[0.8rem] font-semibold text-white transition-colors hover:bg-white/20"
              >
                Next
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}