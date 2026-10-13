import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, HeartHandshake, Home, Lightbulb, ShieldCheck, Sparkles } from "lucide-react";

import { AdmissionCTA } from "@/components/AdmissionCTA";
import { JsonLd } from "@/components/JsonLd";
import { MottoBand } from "@/components/MottoBand";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { breadcrumbJsonLd, buildMetadata } from "@/lib/seo";
import { imagePaths, school } from "@/lib/site";

const trail = [
  { name: "Home", href: "/" },
  { name: "About Our School", href: "/about" },
];

export const metadata: Metadata = buildMetadata({
  title: "About Our School | Sunrise Convent School, Bhensola",
  description:
    "Get to know Sunrise Convent School, Bhensola — our educational philosophy, learning environment, values of kindness and discipline, and the partnership we share with parents. An English medium school for Nursery to Class 8.",
  path: "/about",
  keywords: [
    "about Sunrise Convent School",
    "Sunrise Convent School Bhensola",
    "school in Bhensola Badnawar",
    "English medium school Dhar",
  ],
});

const pillars = [
  {
    Icon: Lightbulb,
    title: "Curiosity over compliance",
    body: "Children who are allowed to ask questions become adults who can think. We treat a sensible question asked out of turn as a good sign, and we answer it.",
  },
  {
    Icon: ShieldCheck,
    title: "Kindness and discipline together",
    body: "The school motto is two halves of one idea. Being nice without effort is weakness; working hard without kindness is harsh. We ask for both.",
  },
  {
    Icon: Sparkles,
    title: "Creativity with structure",
    body: "Imagination grows best inside a clear routine. Children get the freedom to create within the boundaries of a classroom that knows what it is doing.",
  },
  {
    Icon: HeartHandshake,
    title: "Parents as partners",
    body: "We would rather tell you honestly where a child needs help than impress you. Open communication between home and school is the single strongest support for learning.",
  },
] as const;

export default function AboutPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          ...trail,
          { name: "About", href: "/about" },
        ])}
      />

      <PageHero
        eyebrow="About Our School"
        title={
          <>
            More Than a School —{" "}
            <span className="text-school">A Place to Grow</span>
          </>
        }
        lede="Sunrise Convent School is an English medium school on Kod Road at Bhensola Chopati, serving families across Bhensola, Badnawar and the wider Dhar district. We teach children from Nursery to Class 8."
        trail={trail}
        media={imagePaths.campus}
        mediaAlt="Architectural illustration of the Sunrise Convent School building at Bhensola"
      />

      {/* Welcome */}
      <section className="section-y bg-white">
        <div className="container-page grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <SectionHeading eyebrow="Welcome" title="A School Built Around the Child" />

            <div className="prose-body mt-6">
              <p>
                Every school says it puts children first. What that actually means is worth
                spelling out. At Sunrise Convent School, it means that a child who does not
                understand something in the first attempt is not treated as a slow learner —
                the explanation is simply repeated a different way. It means that a shy child is
                not left standing silently at the back while louder classmates answer every
                question. And it means that nobody is publicly compared with anybody else.
              </p>
              <p>
                Our educational philosophy rests on a small number of convictions. Children
                learn best when they feel safe enough to be wrong out loud. Foundations matter
                more than speed. Discipline and kindness are not rivals — they are taught
                together. And responsibility is something a child practises, not something
                adults simply demand.
              </p>
              <p>
                These ideas are not slogans. They show up in the way a classroom is managed, in
                the way a difficult answer is received, and in the way we speak to a child
                when they have had a bad day.
              </p>
            </div>
          </div>

          <aside className="lg:col-span-5">
            <div className="rounded-3xl border border-navy-100 bg-cream p-7">
              <h2 className="display-md">The learning environment</h2>
              <p className="mt-3 text-[0.93rem] leading-relaxed text-ink/70">
                In the school&rsquo;s own promotional material, a few things are named
                explicitly. These are reproduced here in our own words, and should be confirmed
                with the office before you rely on them:
              </p>
              <ul className="mt-6 space-y-4">
                {[
                  "Teaching by experienced teachers.",
                  "Spacious, well-maintained classrooms.",
                  "Individual oral and written evaluation for every student.",
                  "Special attention to sports skills and moral education.",
                  "Development of children physically, emotionally and mentally.",
                  "CCTV-monitored school premises.",
                  "Transport facility for children to be dropped off and picked up.",
                ].map((item) => (
                  <li key={item} className="flex gap-3 text-[0.9rem] text-ink/75">
                    <span
                      className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-sun"
                      aria-hidden="true"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </section>

      {/* Pillars */}
      <section className="section-y bg-navy-50/60">
        <div className="container-page">
          <SectionHeading
            eyebrow="Our Philosophy"
            title="Four Ideas We Come Back To"
            align="center"
            lede="Not policies, not promises — simply the beliefs that shape how we teach, how we speak to children, and how we work with families."
          />

          <div className="mt-14 grid gap-6 sm:grid-cols-2">
            {pillars.map(({ Icon, title, body }) => (
              <article key={title} className="card-interactive flex gap-5 p-7">
                <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-sky/20 to-sun/25 text-school">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="font-display text-xl font-semibold text-navy-900">{title}</h3>
                  <p className="mt-2 text-[0.92rem] leading-relaxed text-ink/70">{body}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Motto */}
      <MottoBand
        body={school.mottoMeaning}
        cta={{ label: "See our Vision & Mission", href: "/vision-mission" }}
      />

      {/* Home & school partnership */}
      <section className="section-y bg-white">
        <div className="container-page grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="order-2 lg:order-1 lg:col-span-6">
            <div className="frame-media aspect-[4/3]">
              <Image
                src="/images/activities/classroom-learning-rect.jpg"
                alt="Young pupils learning together in a bright classroom at Sunrise Convent School"
                fill
                sizes="(min-width: 1024px) 45vw, 100vw"
                loading="lazy"
              />
            </div>
          </div>

          <div className="order-1 lg:order-2 lg:col-span-6">
            <SectionHeading
              eyebrow="Home and School"
              title="The Role of Parents and Teachers"
              lede="A child spends a few hours here and the rest of the day somewhere else. When both places point the same way, a child feels safe enough to try."
            />

            <div className="mt-8 space-y-6">
              <div className="rounded-2xl border border-navy-100 bg-white p-6 shadow-card">
                <h3 className="flex items-center gap-2.5 font-display text-lg font-semibold text-navy-900">
                  <Home className="h-5 w-5 text-school" aria-hidden="true" />
                  What parents give
                </h3>
                <p className="mt-2 text-[0.92rem] leading-relaxed text-ink/70">
                  A settled routine, interest in what the child did rather than how many marks
                  they scored, permission to make mistakes, and honest answers to hard
                  questions.
                </p>
              </div>
              <div className="rounded-2xl border border-navy-100 bg-white p-6 shadow-card">
                <h3 className="flex items-center gap-2.5 font-display text-lg font-semibold text-navy-900">
                  <Sparkles className="h-5 w-5 text-school" aria-hidden="true" />
                  What teachers give
                </h3>
                <p className="mt-2 text-[0.92rem] leading-relaxed text-ink/70">
                  Structure, patient explanations, honest feedback that arrives in time to be
                  useful, and the steady attention that helps a child notice what they can do.
                </p>
              </div>
            </div>

            <div className="mt-9 flex flex-wrap gap-3">
              <Link href="/academics" className="btn-primary">
                How children learn here
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <Link href="/contact" className="link-underline self-center text-[0.9rem] font-semibold text-school">
                Talk to the school office
              </Link>
            </div>
          </div>
        </div>
      </section>

      <AdmissionCTA
        headline="Come and Walk Through the Campus."
        copy="If you are considering Sunrise Convent School for your child, the quickest way to understand it is to visit. Call or WhatsApp the office, and we will help you plan the visit."
      />
    </>
  );
}