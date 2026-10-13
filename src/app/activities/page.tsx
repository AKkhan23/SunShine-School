import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Bus, Camera, Music, Sparkles, Trophy, Users2 } from "lucide-react";

import { AdmissionCTA } from "@/components/AdmissionCTA";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { breadcrumbJsonLd, buildMetadata } from "@/lib/seo";
import { imagePaths, posterActivities } from "@/lib/site";

const trail = [
  { name: "Home", href: "/" },
  { name: "Activities", href: "/activities" },
];

export const metadata: Metadata = buildMetadata({
  title: "Sports & Cultural Activities | Sunrise Convent School, Bhensola",
  description:
    "Life beyond the classroom at Sunrise Convent School, Bhensola — sports and teamwork, annual celebrations, cultural performances, creative activities and educational tours, as shown in the school's own promotional material.",
  path: "/activities",
  keywords: [
    "Sunrise Convent School activities",
    "sports day Bhensola school",
    "annual celebration school Badnawar",
    "educational tour school Dhar",
  ],
});

export default function ActivitiesPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", href: "/" },
          { name: "Activities", href: "/activities" },
        ])}
      />

      <PageHero
        eyebrow="Activities"
        title="The Parts of School Children Remember"
        lede="Not every lesson happens in a classroom. The photographs in the school's own promotional material show sport, celebration, performance and travel — the moments that build confidence long after the lesson is forgotten."
        trail={trail}
        media="/images/activities/annual-celebration-stage-a.jpg"
        mediaAlt="Children performing a group dance on stage during the annual celebration at Sunrise Convent School"
      />

      {/* Editorial intro */}
      <section className="section-y bg-white">
        <div className="container-page grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <SectionHeading
              eyebrow="Why It Matters"
              title="Confidence Is Built by Doing"
            />
            <div className="prose-body mt-6">
              <p>
                A child who has run a race they were nervous about, or performed in front of
                three hundred people, learns something no worksheet provides: that being
                frightened and doing it anyway is survivable.
              </p>
              <p>
                That is the real purpose of activities here. Sports teach teamwork, losing well
                and turning up again. Cultural performances teach preparation, expression and
                the value of listening to the person next to you. Educational tours turn a
                classroom idea into something a child has actually stood in front of.
              </p>
              <p>
                The school&rsquo;s own promotional material lists sports and moral education as
                areas of special focus, and shows children taking part in games, annual
                celebrations, festival performances and educational visits. Event schedules are
                planned by the school — please confirm the current calendar with the office.
              </p>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="frame-media aspect-[3/4]">
              <Image
                src="/images/activities/participation-activity.jpg"
                alt="Smiling pupils raising their hands and joining in during a group activity at Sunrise Convent School"
                fill
                sizes="(min-width: 1024px) 38vw, 100vw"
                loading="lazy"
              />
            </div>
            <p className="mt-3 text-center text-[0.8rem] text-ink/50">
              Taking part is the achievement that counts.
            </p>
          </div>
        </div>
      </section>

      {/* Sports */}
      <section className="section-y bg-navy-50/60">
        <div className="container-page grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="order-2 lg:order-1 lg:col-span-7">
            <SectionHeading
              eyebrow="Sports"
              title="Running, Climbing, Trying Again"
              lede="Sport at school is not about producing a team. It is about giving every child the chance to discover what their body can do, and what it feels like to lose and keep going."
            />

            <ul className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                {
                  Icon: Trophy,
                  title: "Games and practice",
                  body: "Football and outdoor games appear in the school's promotional material, with children actively involved in the play rather than watching.",
                },
                {
                Icon: Users2,
                  title: "Teamwork",
                  body: "A team that includes a child who is not the strongest player teaches everyone else something about patience and fairness.",
                },
                {
                  Icon: Sparkles,
                  title: "Coordination and fitness",
                  body: "Climbing, running and general movement work build confidence and coordination at an age when children are still growing into their bodies.",
                },
                {
                  Icon: Camera,
                  title: "Trying something new",
                  body: "Being the only beginner in a group is uncomfortable and valuable. We do not protect children from that discomfort.",
                },
              ].map(({ Icon, title, body }) => (
                <li key={title} className="card-interactive flex gap-4 p-6">
                  <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-navy-800 text-sun">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="font-display text-[1.05rem] font-semibold text-navy-900">
                      {title}
                    </h3>
                    <p className="mt-1.5 text-[0.88rem] leading-relaxed text-ink/70">{body}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="order-1 lg:order-2 lg:col-span-5">
            <div className="grid grid-cols-2 gap-4">
              <div className="frame-media aspect-square">
                <Image
                  src="/images/activities/sports-football.png"
                  alt="Children taking part in a football match on the school ground"
                  fill
                  sizes="(min-width: 1024px) 22vw, 45vw"
                  loading="lazy"
                />
              </div>
              <div className="frame-media aspect-square">
                <Image
                  src="/images/activities/sports-outdoor-climbing.jpg"
                  alt="Children climbing an outdoor obstacle structure during a sports activity"
                  fill
                  sizes="(min-width: 1024px) 22vw, 45vw"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cultural */}
      <section className="section-y bg-white">
        <div className="container-page">
          <SectionHeading
            eyebrow="Cultural Celebrations"
            title="Annual Celebration, Festivals and the Stage"
            lede="Once a year the classrooms give way to the stage. Rehearsals, costumes, nerves — and then a performance a child will talk about for years."
            align="center"
          />

          <div className="mt-14 grid gap-6 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="frame-media aspect-[4/3]">
                  <Image
                    src="/images/activities/annual-celebration-stage-b.jpg"
                    alt="A large group of students standing together on stage at the annual celebration"
                    fill
                    sizes="(min-width: 640px) 34vw, 90vw"
                    loading="lazy"
                  />
                </div>
                <div className="frame-media aspect-[4/3]">
                  <Image
                    src="/images/activities/students-in-red-costumes.jpg"
                    alt="Students in red and black costumes performing a skit on stage"
                    fill
                    sizes="(min-width: 640px) 34vw, 90vw"
                    loading="lazy"
                  />
                </div>
                <div className="frame-media aspect-[4/3]">
                  <Image
                    src="/images/activities/cultural-dance-performance.jpg"
                    alt="Two pupils in pink traditional costume performing a classical dance on stage"
                    fill
                    sizes="(min-width: 640px) 34vw, 90vw"
                    loading="lazy"
                  />
                </div>
                <div className="frame-media aspect-[4/3]">
                  <Image
                    src="/images/activities/festival-celebration-dance.jpg"
                    alt="Children in orange outfits dancing in front of a festival backdrop"
                    fill
                    sizes="(min-width: 640px) 34vw, 90vw"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="space-y-4">
                {posterActivities
                  .filter((a) =>
                    ["Annual Celebration", "Cultural & Festival Celebration"].includes(a.title),
                  )
                  .map((activity) => (
                    <article key={activity.title} className="card-base p-6">
                      <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-sun/25 text-sun-dark">
                        <Music className="h-5 w-5" aria-hidden="true" />
                      </span>
                      <h3 className="mt-4 font-display text-lg font-semibold text-navy-900">
                        {activity.title}
                      </h3>
                      <p className="mt-2 text-[0.89rem] leading-relaxed text-ink/70">
                        {activity.body}
                      </p>
                    </article>
                  ))}

                <article className="card-base bg-cream p-6">
                  <h3 className="font-display text-lg font-semibold text-navy-900">
                    What a child takes away
                  </h3>
                  <p className="mt-2 text-[0.89rem] leading-relaxed text-ink/70">
                    Rehearsing together, being looked at, and finishing something that mattered
                    to them. That is rehearsing for life, not just for an audience.
                  </p>
                </article>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tours & creative */}
      <section className="section-y bg-cream">
        <div className="container-page">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <SectionHeading
                eyebrow="Beyond the Walls"
                title="Educational Tours and Creative Work"
              />
              <p className="mt-5 text-[0.95rem] leading-relaxed text-ink/75">
                A classroom lesson about a place becomes very different once a child has stood
                there. The school&rsquo;s promotional material shows students on educational
                visits, including a group photograph at a landmark, alongside creative sessions
                that do not belong to any single subject.
              </p>

              <div className="mt-8 space-y-4">
                <div className="flex gap-4 rounded-2xl border border-navy-100 bg-white p-6">
                  <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-sky/20 text-school">
                    <Bus className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="font-display text-[1.05rem] font-semibold text-navy-900">
                      Educational tours
                    </h3>
                    <p className="mt-1.5 text-[0.88rem] leading-relaxed text-ink/70">
                      Travel turns a topic into an experience. Dates and destinations are
                      planned by the school — ask the office for the current term&rsquo;s plan.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4 rounded-2xl border border-navy-100 bg-white p-6">
                  <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-sun/25 text-sun-dark">
                    <Music className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="font-display text-[1.05rem] font-semibold text-navy-900">
                      Creative activities
                    </h3>
                    <p className="mt-1.5 text-[0.88rem] leading-relaxed text-ink/70">
                      Music, craft and group activities give children a way to express an idea
                      that does not fit into a written answer.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="frame-media aspect-[4/3]">
                  <Image
                    src="/images/activities/educational-tour-group.jpg"
                    alt="Students and a teacher posing together on an educational tour"
                    fill
                    sizes="(min-width: 640px) 34vw, 90vw"
                    loading="lazy"
                  />
                </div>
                <div className="frame-media aspect-[4/3]">
                  <Image
                    src="/images/activities/educational-tour-landmark.jpg"
                    alt="Students standing in front of a large statue during an educational visit"
                    fill
                    sizes="(min-width: 640px) 34vw, 90vw"
                    loading="lazy"
                  />
                </div>
                <div className="frame-media aspect-[4/3]">
                  <Image
                    src="/images/activities/music-creative-activity.jpg"
                    alt="Students taking part in a music activity with handmade instruments"
                    fill
                    sizes="(min-width: 640px) 34vw, 90vw"
                    loading="lazy"
                  />
                </div>
                <div className="frame-media aspect-[4/3]">
                  <Image
                    src={imagePaths.admissionPoster}
                    alt="Sunrise Convent School admission poster showing annual celebration, sports activity, cultural celebration and educational tours"
                    fill
                    sizes="(min-width: 640px) 34vw, 90vw"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-navy-100 bg-white py-12">
        <div className="container-page flex flex-col items-center gap-4 text-center">
          <p className="max-w-2xl text-[0.95rem] text-ink/70">
            Want to see more of school life? The gallery has every photograph the school has
            shared so far.
          </p>
          <Link href="/gallery" className="btn-ghost">
            Open the gallery
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </section>

      <AdmissionCTA />
    </>
  );
}