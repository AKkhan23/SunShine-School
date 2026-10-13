import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Eye, Handshake, Lightbulb, ShieldCheck, Sparkles, Target } from "lucide-react";

import { AdmissionCTA } from "@/components/AdmissionCTA";
import { JsonLd } from "@/components/JsonLd";
import { MottoBand } from "@/components/MottoBand";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { breadcrumbJsonLd, buildMetadata } from "@/lib/seo";
import { imagePaths } from "@/lib/site";

const trail = [
  { name: "Home", href: "/" },
  { name: "Vision & Mission", href: "/vision-mission" },
];

export const metadata: Metadata = buildMetadata({
  title: "Vision & Mission | Sunrise Convent School, Bhensola",
  description:
    "The vision and mission of Sunrise Convent School, Bhensola — raising confident, curious and compassionate learners, plus the values of respect, curiosity, confidence, cooperation and kindness that guide us.",
  path: "/vision-mission",
  keywords: [
    "Sunrise Convent School vision mission",
    "school values Bhensola",
    "English medium school Bhensola values",
  ],
});

const values = [
  {
    Icon: ShieldCheck,
    title: "Respect and responsibility",
    body: "Respect is not only politeness — it is taking ownership of your own work, your promises and the space you share with others.",
  },
  {
    Icon: Lightbulb,
    title: "Curiosity and creativity",
    body: "We encourage questions, encourage original answers, and treat creativity as a habit of mind rather than a talent some children are born with.",
  },
  {
    Icon: Sparkles,
    title: "Confidence and communication",
    body: "Children are given chances to speak, to perform, to lead and to disagree — because confidence is built by doing, not by being told to have it.",
  },
  {
    Icon: Handshake,
    title: "Cooperation and kindness",
    body: "Working with others and treating them well are skills that are practised: sharing, waiting, apologising, and helping without being asked.",
  },
] as const;

export default function VisionMissionPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", href: "/" },
          { name: "Vision & Mission", href: "/vision-mission" },
        ])}
      />

      <PageHero
        eyebrow="Vision & Mission"
        title="Where We Are Going, and How We Get There"
        lede="A vision is the picture we keep in mind. A mission is the daily work that gets us closer to it. Both are written to be read aloud, not just filed away."
        trail={trail}
      />

      {/* Approval notice */}
      <div className="border-b border-navy-100 bg-sun/10">
        <div className="container-page py-5">
          <p className="mx-auto max-w-3xl text-center text-[0.83rem] leading-relaxed text-navy-900/75">
            <strong className="font-semibold">Please note:</strong> the vision and mission
            statements on this page were written as website copy by the site author and are
            awaiting formal approval by the school management. They will be updated once the
            school confirms its official wording.
          </p>
        </div>
      </div>

      {/* Vision & Mission */}
      <section className="section-y bg-white">
        <div className="container-page grid gap-6 lg:grid-cols-2">
          <article className="card-base relative overflow-hidden p-8 sm:p-10">
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-navy-800 text-sun">
              <Eye className="h-6 w-6" aria-hidden="true" />
            </span>
            <p className="eyebrow mt-6">Our Vision</p>
            <blockquote className="mt-4 font-display text-2xl leading-snug text-navy-900 sm:text-[1.7rem]">
              &ldquo;To nurture confident, curious, and compassionate learners who grow into
              responsible individuals with a lifelong love of learning.&rdquo;
            </blockquote>
            <div
              aria-hidden="true"
              className="sun-divider mt-8 h-16 w-full"
            />
          </article>

          <article className="card-base relative overflow-hidden bg-cream p-8 sm:p-10">
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-sun text-navy-900">
              <Target className="h-6 w-6" aria-hidden="true" />
            </span>
            <p className="eyebrow mt-6">Our Mission</p>
            <blockquote className="mt-4 font-display text-2xl leading-snug text-navy-900 sm:text-[1.7rem]">
              &ldquo;To encourage meaningful learning, strong foundational skills, creativity,
              discipline, kindness, and personal growth through a supportive school environment
              and a positive partnership between children, educators, and families.&rdquo;
            </blockquote>
            <div
              aria-hidden="true"
              className="mt-8 h-px w-full bg-gradient-to-r from-sun/70 via-sun/30 to-transparent"
            />
          </article>
        </div>
      </section>

      {/* Values */}
      <section className="section-y bg-navy-50/60">
        <div className="container-page">
          <SectionHeading
            eyebrow="Our Educational Values"
            title="Four Values, Practised Daily"
            lede="Values are easy to print and hard to practise. These four are the ones we deliberately return to — in the classroom, on the playground, and when a child gets something wrong."
            align="center"
          />

          <div className="mt-14 grid gap-6 sm:grid-cols-2">
            {values.map(({ Icon, title, body }) => (
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
        heading="The Motto Behind the Mission"
        body={`&ldquo;${"BE NICE WORK HARD"}&rdquo; is printed on the school&rsquo;s official logo, and it is the shortest honest summary of everything above. Be kind to the people around you. Take your work seriously. Most difficult days in a child&rsquo;s school life are won by doing both at once.`}
      />

      {/* How it looks in practice */}
      <section className="section-y bg-white">
        <div className="container-page grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow="In Practice"
              title="What This Looks Like in an Ordinary Week"
            />

            <ul className="mt-8 space-y-5">
              {[
                {
                  title: "A question gets answered, not shut down",
                  body: "A child asks something off-topic. The teacher answers it briefly and then says: “Ask me again after the lesson and I’ll explain properly.”",
                },
                {
                  title: "Work is corrected in private",
                  body: "Feedback is given where the child can hear it without an audience, so that mistakes stay a normal part of learning rather than a public event.",
                },
                {
                  title: "Everyone takes part in something",
                  body: "Sport, music, dance and stage work exist so that a child who is not naturally the loudest still has a moment to be seen.",
                },
                {
                  title: "Home and school stay in touch",
                  body: "Parents are told what is going well and what needs attention — early, specifically, and without exaggeration.",
                },
              ].map((item) => (
                <li key={item.title}>
                  <h3 className="font-display text-lg font-semibold text-navy-900">
                    {item.title}
                  </h3>
                  <p className="mt-1.5 text-[0.9rem] leading-relaxed text-ink/70">{item.body}</p>
                </li>
              ))}
            </ul>

            <div className="mt-9 flex flex-wrap gap-3">
              <Link href="/academics" className="btn-primary">
                See the learning journey
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <Link href="/activities" className="link-underline self-center text-[0.9rem] font-semibold text-school">
                Explore activities
              </Link>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="frame-media aspect-[4/3]">
              <Image
                src={imagePaths.campus}
                alt="Illustration of the Sunrise Convent School campus where children learn, discover and grow"
                fill
                sizes="(min-width: 1024px) 52vw, 100vw"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      <AdmissionCTA />
    </>
  );
}