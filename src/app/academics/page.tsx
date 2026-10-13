import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Calculator,
  Languages,
  MessageCircle,
  Palette,
  Ruler,
  Users,
} from "lucide-react";

import { AdmissionCTA } from "@/components/AdmissionCTA";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { breadcrumbJsonLd, buildMetadata } from "@/lib/seo";
import { classGroups, school } from "@/lib/site";

const trail = [
  { name: "Home", href: "/" },
  { name: "Academics", href: "/academics" },
];

export const metadata: Metadata = buildMetadata({
  title: "Academics | Sunrise Convent School, Bhensola",
  description:
    "Academics at Sunrise Convent School, Bhensola — an English medium learning journey from Nursery to Class 8, covering reading and communication, mathematics and logical thinking, creativity and assessment, and parent-school collaboration.",
  path: "/academics",
  keywords: [
    "Sunrise Convent School academics",
    "Nursery to Class 8 school in Bhensola",
    "English medium primary school Bhensola",
    "school academics Badnawar",
  ],
});

const subjects = [
  {
    Icon: Languages,
    title: "Reading and communication",
    body: "From listening to a story at Nursery age, to reading with understanding and writing with clarity in the middle years. Expression matters as much as accuracy — a child who can explain an idea in their own words usually understands it.",
  },
  {
    Icon: Calculator,
    title: "Mathematics and logical thinking",
    body: "Number sense first, procedures second, reasoning throughout. Mathematics is presented as something to explore and explain, not simply a page of sums to finish before the bell.",
  },
  {
    Icon: Palette,
    title: "Creativity and participation",
    body: "Art, music, movement and performance give every child a route into the curriculum that does not depend on being the fastest with a pencil.",
  },
  {
    Icon: Users,
    title: "Physical development",
    body: "Games, coordination work and participation in sport, treated as part of education rather than as time stolen from it.",
  },
] as const;

const journey = [
  {
    step: "01",
    title: "Foundations are built",
    body: "Nursery concentrates on spoken language, listening, early number and number names, movement, and the social skills of sharing and waiting. Children are learning how to learn.",
  },
  {
    step: "02",
    title: "Core skills are practised",
    body: "Classes 1 to 5 focus on reading fluency, writing and number sense. The aim is accuracy with understanding, and habits that make revision natural rather than frightening.",
  },
  {
    step: "03",
    title: "Understanding deepens",
    body: "Classes 6 to 8 bring a wider subject load and more independent study. Subject concepts are explained, practised, and then applied to unfamiliar problems.",
  },
  {
    step: "04",
    title: "Progress is reviewed",
    body: "Continuous observation and individual evaluation are described in the school's promotional material. Parents are informed about progress, not just end-of-year outcomes.",
  },
];

export default function AcademicsPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", href: "/" },
          { name: "Academics", href: "/academics" },
        ])}
      />

      <PageHero
        eyebrow="Academics"
        title="Learning Built Step by Step, From Nursery to Class 8"
        lede="Our academic philosophy is straightforward: get the foundations right, explain things more than once, and give every child a chance to take part. The pages below describe general educational goals — the exact syllabus, timetable and assessment pattern are shared by the school office."
        trail={trail}
        media="/images/activities/writing-activity.png"
        mediaAlt="A pupil concentrating as she writes in her notebook during a class activity"
      />

      {/* Philosophy */}
      <section className="section-y bg-white">
        <div className="container-page grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <SectionHeading
              eyebrow="Academic Philosophy"
              title="Understanding Before Memorising"
            />
            <div className="prose-body mt-6">
              <p>
                There is a familiar temptation in schooling: move on, and catch up later. We
                have tried the opposite. A child who moves to the next step without understanding
                the current one accumulates gaps that are very hard to close later.
              </p>
              <p>
                So the emphasis here is on understanding. Concepts are introduced, explained,
                practised, and then used — in that order. Where a child is slow on the first
                attempt, the explanation is repeated differently rather than simply assigned
                again.
              </p>
              <p>
                Alongside this, children are taught how to learn: how to break a difficult
                question into smaller pieces, how to check their own work, and how to ask for
                help without embarrassment. Those skills outlast any particular syllabus.
              </p>
              <p>
                The school&rsquo;s admission poster describes the medium as English medium
                following a CBSE pattern. The school office will confirm the current curriculum,
                subject list and examination pattern for the session.
              </p>
            </div>
          </div>

          <aside className="lg:col-span-5">
            <div className="rounded-3xl border border-sky/30 bg-sky/10 p-7">
              <Ruler className="h-6 w-6 text-school" aria-hidden="true" />
              <h2 className="display-md mt-4">What we do not claim</h2>
              <p className="mt-3 text-[0.92rem] leading-relaxed text-ink/75">
                Accuracy matters more than ambition. This website does not state claims about
                smart classrooms, laboratories, libraries, teacher-student ratios, or official
                CBSE affiliation, because none of these have been confirmed to us.
              </p>
              <p className="mt-4 text-[0.92rem] leading-relaxed text-ink/75">
                If any of these apply at Sunrise Convent School, ask the office directly and
                ask to see them. A school worth choosing will show you.
              </p>
            </div>
          </aside>
        </div>
      </section>

      {/* Class groups */}
      <section className="section-y bg-cream">
        <div className="container-page">
          <SectionHeading
            eyebrow="Class Groups"
            title="The Three Stages of the Journey"
            lede="Grouping classes the way a child actually experiences school — a change of rhythm, a change of expectations, and a change in what is asked of them."
            align="center"
          />

          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {classGroups.map((group, index) => (
              <article key={group.id} className="card-base flex flex-col p-7">
                <div className="flex items-baseline justify-between gap-3">
                  <span className="text-2xs font-semibold uppercase tracking-[0.14em] text-school">
                    {group.eyebrow}
                  </span>
                  <span className="font-display text-3xl text-navy-100">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <h3 className="display-md mt-3">{group.title}</h3>

                <div className="mt-4 flex flex-wrap gap-1.5">
                  {group.classes.map((c) => (
                    <span
                      key={c}
                      className="rounded-full bg-navy-800 px-3 py-1 text-[0.72rem] font-semibold text-white"
                    >
                      {c}
                    </span>
                  ))}
                </div>

                <p className="mt-5 text-[0.93rem] leading-relaxed text-ink/75">
                  {group.summary}
                </p>

                <ul className="mt-5 space-y-2.5 border-t border-navy-100 pt-5">
                  {group.focus.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2.5 text-[0.88rem] text-ink/70"
                    >
                      <span
                        className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-sun"
                        aria-hidden="true"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Journey timeline */}
      <section className="section-y bg-white">
        <div className="container-page">
          <SectionHeading
            eyebrow="Learning Journey"
            title="How a Child Progresses Here"
            align="center"
          />

          <ol className="relative mt-14 space-y-8 border-l-2 border-dashed border-navy-200 pl-8 sm:pl-10">
            {journey.map((item) => (
              <li key={item.step} className="relative">
                <span
                  aria-hidden="true"
                  className="absolute -left-[2.4rem] flex h-9 w-9 items-center justify-center rounded-full border border-sun/60 bg-sun/15 font-display text-[0.8rem] font-semibold text-navy-900 sm:-left-[3.1rem]"
                >
                  {item.step}
                </span>
                <h3 className="font-display text-xl font-semibold text-navy-900">
                  {item.title}
                </h3>
                <p className="mt-2 max-w-3xl text-[0.94rem] leading-relaxed text-ink/75">
                  {item.body}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Subject areas */}
      <section className="section-y bg-navy-50/60">
        <div className="container-page">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <SectionHeading
                eyebrow="What Children Learn"
                title="Four Threads Through Every Stage"
                lede="Whatever the class, these four run underneath the timetable."
              />
              <div className="frame-media mt-9 aspect-[4/3]">
                <Image
                  src="/images/activities/classroom-early-learning.png"
                  alt="Young pupils learning together in a bright classroom at Sunrise Convent School"
                  fill
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  loading="lazy"
                />
              </div>
            </div>

            <div className="lg:col-span-7">
              <ul className="grid gap-4 sm:grid-cols-2">
                {subjects.map(({ Icon, title, body }) => (
                  <li key={title} className="card-interactive flex flex-col p-6">
                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-navy-800 text-sun">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <h3 className="mt-4 font-display text-lg font-semibold text-navy-900">
                      {title}
                    </h3>
                    <p className="mt-2 text-[0.89rem] leading-relaxed text-ink/70">{body}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Assessment & collaboration */}
      <section className="section-y bg-white">
        <div className="container-page grid gap-6 lg:grid-cols-2">
          <article className="card-base bg-cream p-8">
            <h2 className="display-md">Assessment and student progress</h2>
            <p className="mt-4 text-[0.95rem] leading-relaxed text-ink/75">
              The school&rsquo;s promotional material describes individual oral and written
              evaluation for every student. In practice, the working aim is that a child
              struggling at home can be identified and helped at school, rather than discovered
              at the end of the year.
            </p>
            <p className="mt-4 text-[0.95rem] leading-relaxed text-ink/75">
              The exact assessment schedule, the reporting format and the examination pattern
              are not published here because they have not been confirmed. Please ask the
              school office for the current session&rsquo;s assessment calendar.
            </p>
          </article>

          <article className="card-base p-8">
            <h2 className="display-md">Parent–school collaboration</h2>
            <p className="mt-4 text-[0.95rem] leading-relaxed text-ink/75">
              Parents are partners in the work, not recipients of a report at the end of the
              year. In practice that means honest, early communication about what is going well
              and what is not.
            </p>
            <ul className="mt-6 space-y-3">
              {[
                `Ask the office how progress is reported to parents during the year.`,
                `Ask how you can reach a teacher if something concerns you.`,
                `Ask what the school expects in terms of homework and reading at home.`,
              ].map((item) => (
                <li key={item} className="flex gap-3 text-[0.92rem] text-ink/75">
                  <span
                    className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-sun"
                    aria-hidden="true"
                  />
                  {item}
                </li>
              ))}
            </ul>
          </article>
        </div>

        <div className="container-page mt-12">
          <div className="flex flex-col items-center gap-4 rounded-3xl border border-navy-100 bg-cream p-8 text-center sm:flex-row sm:justify-between sm:text-left">
            <p className="flex items-center gap-3 text-[0.95rem] text-ink/75">
              <MessageCircle className="h-5 w-5 shrink-0 text-school" aria-hidden="true" />
              Want the exact syllabus for {school.classRange.from} to{" "}
              {school.classRange.to}? Ask the school office directly.
            </p>
            <Link href="/contact" className="btn-primary shrink-0">
              Contact the school
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      <AdmissionCTA />
    </>
  );
}