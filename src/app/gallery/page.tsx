import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ImageIcon } from "lucide-react";

import { AdmissionCTA } from "@/components/AdmissionCTA";
import { ContactActions } from "@/components/ContactActions";
import { GalleryGrid } from "@/components/GalleryGrid";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { breadcrumbJsonLd, buildMetadata } from "@/lib/seo";
import { GALLERY_PROVENANCE_NOTE, galleryItems } from "@/lib/gallery";

const trail = [
  { name: "Home", href: "/" },
  { name: "Gallery", href: "/gallery" },
];

export const metadata: Metadata = buildMetadata({
  title: "School Gallery | Sunrise Convent School, Bhensola",
  description:
    "Photographs of life at Sunrise Convent School, Bhensola — the campus, classroom learning, sports and games, cultural celebrations and educational tours. Every image supplied by the school.",
  path: "/gallery",
  keywords: [
    "Sunrise Convent School photos",
    "school gallery Bhensola",
    "sports day school Badnawar",
    "annual celebration school Dhar",
  ],
});

export default function GalleryPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", href: "/" },
          { name: "Gallery", href: "/gallery" },
        ])}
      />

      <PageHero
        eyebrow="Gallery"
        title="A Look at Life at Sunrise"
        lede="Classrooms, the ground, the stage and the tour bus. These are the photographs the school has shared — the same images families see when they visit."
        trail={trail}
        media="/images/activities/educational-tour-group.jpg"
        mediaAlt="Students and a teacher posing together during an educational tour from Sunrise Convent School"
      />

      <section className="section-y bg-white">
        <div className="container-page">
          <SectionHeading
            eyebrow="Browse"
            title="School Gallery"
            lede="Filter by category, or open any photograph for a larger view. Use the arrow keys to move between images and Escape to close."
          />

          <div className="mt-10">
            <GalleryGrid items={galleryItems} />
          </div>

          {/* Provenance */}
          <div className="mt-14 grid gap-6 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <div className="rounded-3xl border border-navy-100 bg-cream p-7 sm:p-8">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-sky/20 text-school">
                  <ImageIcon className="h-5 w-5" aria-hidden="true" />
                </span>
                <h2 className="display-md mt-5">Where these photographs come from</h2>
                <p className="mt-3 text-[0.93rem] leading-relaxed text-ink/75">
                  {GALLERY_PROVENANCE_NOTE}
                </p>
                <p className="mt-4 text-[0.93rem] leading-relaxed text-ink/75">
                  Adding more photographs is the single easiest way to make this page feel like
                  your school. Send them to the school office, and ask parents to confirm that
                  they are happy for their child to appear.
                </p>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-3xl border border-navy-100 bg-white p-7 sm:p-8">
                <h2 className="display-md">Plan a visit</h2>
                <p className="mt-3 text-[0.93rem] leading-relaxed text-ink/75">
                  Seeing the school in person is better than any photograph. Call or WhatsApp the
                  office to arrange a convenient time.
                </p>
                <div className="mt-6 flex flex-col gap-3">
                  <Link href="/contact" className="btn-primary w-full">
                    Contact the school
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                  <ContactActions className="w-full" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <AdmissionCTA />
    </>
  );
}