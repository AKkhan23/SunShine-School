import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { AlertCircle, ArrowRight, Medal, Trophy, Users } from "lucide-react";

import { AdmissionCTA } from "@/components/AdmissionCTA";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { SunRays } from "@/components/SunRays";
import { breadcrumbJsonLd, buildMetadata } from "@/lib/seo";
import { class5Stats, class8Stats, PUBLICATION_NOTICE, resultGroups } from "@/lib/results";
import { imagePaths } from "@/lib/site";

const trail = [
  { name: "Home", href: "/" },
  { name: "Results", href: "/results" },
];

export const metadata: Metadata = buildMetadata({
  title: "Student Results & Achievements | Sunrise Convent School, Bhensola",
  description:
    "Class 8 and Class 5 board examination results for Sunrise Convent School, Bhensola, as published in the school's 'Our Shining Stars' poster, together with how achievement is celebrated across the school.",
  path: "/results",
  keywords: [
    "Sunrise Convent School results",
    "Class 8 board results Bhensola",
    "Class 5 results Badnawar school",
    "Sunrise Convent School Bhensola achievements",
  ],
});

export default function ResultsPage() {
  const totalStudents = class8Stats.total + class5Stats.total;

  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", href: "/" },
          { name: "Results", href: "/results" },
        ])}
      />

      <PageHero
        eyebrow="Our Shining Stars"
        title="Celebrating Our Shining Stars"
        lede="Every achievement reflects effort, perseverance, and the encouragement to keep learning. We celebrate our students' progress and congratulate them on their accomplishments."
        trail={trail}
        media={imagePaths.resultsPoster}
        mediaAlt="Our Shining Stars results poster for Sunrise Convent School showing Class 8 and Class 5 board examination results"
      />

      {/* Provenance notice */}
      <section className="bg-sun/12">
        <div className="container-page py-6">
          <p className="mx-auto flex max-w-4xl items-start gap-3 rounded-2xl border border-sun/50 bg-white/80 p-5 text-[0.85rem] leading-relaxed text-navy-900/80">
            <AlertCircle className="mt-0.5 h-5 w-5 shrink-0 text-sun-dark" aria-hidden="true" />
            <span>
              <strong className="font-semibold">How to read this page.</strong> Every figure
              below is transcribed from the school&rsquo;s own &ldquo;Our Shining Stars&rdquo;
              poster and has not been independently verified against an official marks
              register. No percentage, ranking or result has been created or estimated.{" "}
              {PUBLICATION_NOTICE}
            </span>
          </p>
        </div>
      </section>

      {/* Poster feature */}
      <section className="section-y bg-white">
        <div className="container-page grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="order-2 lg:order-1 lg:col-span-5">
            <SectionHeading
              eyebrow="The Original Poster"
              title="Exactly as Published by the School"
            />
            <div className="prose-body mt-6">
              <p>
                The results below come from a single artwork prepared by the school. We have
                reproduced the figures faithfully and checked each entry against the poster,
                because a results page is not the place for approximations.
              </p>
              <p>
                Across both cohorts, {totalStudents} students are recorded on the poster. We
                publish aggregate figures and names only. Individual student photographs are not
                reproduced on this page.
              </p>
            </div>

            <dl className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {[
                { label: "Class 8 students", value: class8Stats.total },
                { label: "Class 5 students", value: class5Stats.total },
                { label: "Class 8 average", value: `${class8Stats.average}%` },
                { label: "Class 5 average", value: `${class5Stats.average}%` },
              ].map((stat) => (
                <div key={stat.label} className="rounded-2xl border border-navy-100 bg-cream p-5">
                  <dt className="text-2xs font-semibold uppercase tracking-[0.12em] text-ink/45">
                    {stat.label}
                  </dt>
                  <dd className="mt-1.5 font-display text-2xl text-navy-900">{stat.value}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="order-1 lg:order-2 lg:col-span-7">
            <div className="relative mx-auto max-w-lg">
              <div
                aria-hidden="true"
                className="absolute -inset-3 -z-10 rounded-[2.5rem] bg-gradient-to-br from-sun/30 via-sun/10 to-sky/25"
              />
              <div className="frame-media aspect-[1252/1600]">
                <Image
                  src={imagePaths.resultsPoster}
                  alt="Our Shining Stars poster listing Class 8 and Class 5 board examination results for Sunrise Convent School, Bhensola"
                  fill
                  priority
                  sizes="(min-width: 1024px) 45vw, 90vw"
                />
              </div>
            </div>
            <p className="mt-4 text-center text-[0.8rem] leading-relaxed text-ink/50">
              The school&rsquo;s official results poster, reproduced at full size for reference.
            </p>
          </div>
        </div>
      </section>

      {/* Result groups */}
      {resultGroups.map((group, groupIndex) => {
        const stats = groupIndex === 0 ? class8Stats : class5Stats;
        return (
          <section
            key={group.id}
            className={`section-y ${groupIndex % 2 === 0 ? "bg-navy-50/60" : "bg-white"}`}
          >
            <div className="container-page">
              <SectionHeading
                eyebrow={group.classLabel}
                title={group.title}
                lede={group.summary}
              />

              <div className="mt-10 grid gap-4 sm:grid-cols-3">
                <div className="card-base flex items-center gap-4 p-6">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-navy-800 text-sun">
                    <Users className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <span>
                    <span className="block font-display text-2xl text-navy-900">
                      {stats.total}
                    </span>
                    <span className="text-[0.82rem] text-ink/55">students listed</span>
                  </span>
                </div>
                <div className="card-base flex items-center gap-4 p-6">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-sky/20 text-school">
                    <Trophy className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <span>
                    <span className="block font-display text-2xl text-navy-900">
                      {stats.highest}%
                    </span>
                    <span className="text-[0.82rem] text-ink/55">highest percentage</span>
                  </span>
                </div>
                <div className="card-base flex items-center gap-4 p-6">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-sun/25 text-sun-dark">
                    <Medal className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <span>
                    <span className="block font-display text-2xl text-navy-900">
                      {stats.average}%
                    </span>
                    <span className="text-[0.82rem] text-ink/55">cohort average</span>
                  </span>
                </div>
              </div>

              <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {group.students.map((student) => (
                  <li
                    key={`${group.id}-${student.name}-${student.percentage}`}
                    className="card-base flex items-center justify-between gap-4 px-5 py-4"
                  >
                    <span className="flex min-w-0 items-center gap-3">
                      <SunRays size={22} rays={10} opacity={0.9} className="shrink-0" />
                      <span className="truncate text-[0.93rem] font-semibold text-navy-900">
                        {student.name}
                      </span>
                    </span>
                    <span className="shrink-0 rounded-full bg-navy-800 px-3 py-1 text-[0.78rem] font-semibold text-white">
                      {student.percentage}%
                    </span>
                  </li>
                ))}
              </ul>

              <p className="mt-6 text-[0.8rem] leading-relaxed text-ink/50">
                Highest in this cohort:{" "}
                <strong className="font-semibold text-navy-900">
                  {stats.highestScorers.join(", ")}
                </strong>{" "}
                at {stats.highest}%. Names and percentages reproduced from the school&rsquo;s
                poster for verification with the school office.
              </p>
            </div>
          </section>
        );
      })}

      {/* Achievement highlights */}
      <section className="section-y bg-cream">
        <div className="container-page">
          <SectionHeading
            eyebrow="Achievement Highlights"
            title="How We Celebrate at Sunrise"
            lede="Examinations matter, but they are not the whole measure of a child. These are the things the school chooses to notice and make visible."
            align="center"
          />

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Effort that nobody sees",
                body: "A child who tried again after failing is doing something worth celebrating, even when the score did not change.",
              },
              {
                title: "Confidence on stage",
                body: "Standing in front of an audience, or playing in a match, is a real achievement — and it is visible.",
              },
              {
                title: "Kindness to a classmate",
                body: "Helping someone who could not help them back counts here as much as a mark does.",
              },
              {
                title: "Curiosity in action",
                body: "Asking a genuine question, or working something out alone, is a form of achievement the school makes a point of naming.",
              },
              {
                title: "Team spirit",
                body: "A child who turns up for a team event they are not especially good at has learned something a result cannot record.",
              },
              {
                title: "Improvement over time",
                body: "Progress from the starting point of the year matters more to us than a comparison with another child.",
              },
            ].map((item) => (
              <article key={item.title} className="card-interactive p-7">
                <SunRays size={34} rays={12} opacity={0.85} />
                <h3 className="mt-4 font-display text-lg font-semibold text-navy-900">
                  {item.title}
                </h3>
                <p className="mt-2 text-[0.9rem] leading-relaxed text-ink/70">{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <AdmissionCTA
        headline="Your Child Could Be on This Page Next."
        copy="The students on this poster were once in Nursery too. Enquire about admission for Nursery to Class 8, and find out how the school works with your child as they grow."
      />

      <div className="border-t border-navy-100 bg-white py-10">
        <div className="container-page flex flex-col items-center gap-4 text-center">
          <p className="text-[0.9rem] text-ink/65">
            Want to see the school activities these students take part in?
          </p>
          <Link href="/activities" className="btn-ghost">
            Explore sports and cultural activities
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </>
  );
}