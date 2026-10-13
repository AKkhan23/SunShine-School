import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  CalendarCheck,
  Compass,
  Handshake,
  Heart,
  MessageCircle,
  Phone,
  Sparkles,
  Star,
  Trophy,
  Users,
} from "lucide-react";

import { AdmissionCTA } from "@/components/AdmissionCTA";
import { ContactActions } from "@/components/ContactActions";
import { SectionHeading } from "@/components/SectionHeading";
import { SunArc, SunRays } from "@/components/SunRays";
import { buildMetadata } from "@/lib/seo";
import { classGroups, imagePaths, posterActivities, posterHighlights, school } from "@/lib/site";
import { telHref, whatsappAdmission } from "@/lib/contact";

export const metadata = buildMetadata({
  title: "Sunrise Convent School, Bhensola | Nursery to Class 8",
  description:
    "Discover Sunrise Convent School at Bhensola, Badnawar, Dhar, Madhya Pradesh. Explore our learning approach, student achievements, school activities and admission enquiries for Nursery to Class 8.",
  path: "/",
  keywords: [
    "Sunrise Convent School Bhensola",
    "school in Bhensola",
    "school in Bhensola Badnawar",
    "Nursery to Class 8 school in Bhensola",
    "English medium school Dhar",
    "Sunrise Convent School Dhar Madhya Pradesh",
  ],
});

const valueCards = [
  {
    Icon: Compass,
    title: "Learning with Curiosity",
    body: "Children are encouraged to ask why, to try things out and to enjoy the process of working something out. Curiosity is treated as a strength, not as something to be tested away.",
  },
  {
    Icon: Heart,
    title: "Values and Discipline",
    body: "The school motto — be nice, work hard — is lived out in small, everyday ways: greeting respectfully, waiting one's turn, finishing a task, and looking after shared spaces.",
  },
  {
    Icon: Sparkles,
    title: "Creativity and Expression",
    body: "Art, music, movement and stage performance give children a way to say what they cannot yet put in writing. Confidence built on stage carries into the classroom.",
  },
  {
    Icon: Users,
    title: "Sports and Participation",
    body: "Games and physical activity are treated as part of education rather than a break from it. Taking part, trying again and being a good team-mate matter more than winning.",
  },
] as const;

export default function HomePage() {
  return (
    <>
      {/* ---------------------------------------------------------- Hero */}
      <section className="relative overflow-hidden bg-white">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-40 -top-48 h-[38rem] w-[38rem] rounded-full bg-sun-glow"
        />
        <SunRays
          className="pointer-events-none absolute -left-24 top-1/3 hidden xl:block"
          size={260}
          opacity={0.28}
        />

        <div className="container-page relative pb-16 pt-10 sm:pb-20 sm:pt-16 lg:pb-24 lg:pt-20">
          <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-14">
            {/* Copy */}
            <div className="lg:col-span-6">
              <p className="inline-flex items-center gap-2.5 rounded-full border border-sun/50 bg-sun/10 py-1.5 pl-2 pr-4 text-[0.78rem] font-semibold text-navy-900">
                <span className="inline-flex h-6 items-center rounded-full bg-sun px-3 text-[0.62rem] font-bold uppercase tracking-[0.12em] text-navy-900">
                  Nursery
                </span>
                to
                <span className="inline-flex h-6 items-center rounded-full bg-navy-800 px-3 text-[0.62rem] font-bold uppercase tracking-[0.12em] text-white">
                  Class 8
                </span>
                <span className="hidden text-ink/60 sm:inline">· English Medium</span>
              </p>

              <h1 className="display-xl mt-6">
                Every Child Has a{" "}
                <span className="relative inline-block">
                  <span className="relative z-10">Bright Future.</span>
                  <span
                    aria-hidden="true"
                    className="absolute -bottom-1 left-0 -z-0 h-3 w-full rounded-full bg-sun/45"
                  />
                </span>
              </h1>

              <p className="lede mt-6 max-w-xl">
                At Sunrise Convent School, we encourage children to learn with curiosity,
                grow with confidence, discover their talents, and develop the values that
                guide them throughout life.
              </p>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Link href="/admissions" className="btn-primary">
                  Enquire for Admission
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
                <Link href="/about" className="btn-ghost">
                  Explore Our School
                </Link>
              </div>

              <dl className="mt-10 grid max-w-lg grid-cols-2 gap-x-6 gap-y-5 border-t border-navy-100 pt-8 sm:grid-cols-3">
                <div>
                  <dt className="text-2xs font-semibold uppercase tracking-[0.14em] text-ink/45">
                    Classes
                  </dt>
                  <dd className="mt-1 font-display text-lg text-navy-900">Nursery – 8</dd>
                </div>
                <div>
                  <dt className="text-2xs font-semibold uppercase tracking-[0.14em] text-ink/45">
                    Medium
                  </dt>
                  <dd className="mt-1 font-display text-lg text-navy-900">English</dd>
                </div>
                <div>
                  <dt className="text-2xs font-semibold uppercase tracking-[0.14em] text-ink/45">
                    Motto
                  </dt>
                  <dd className="mt-1 font-display text-lg text-navy-900">
                    Be nice, work hard
                  </dd>
                </div>
              </dl>
            </div>

            {/* Campus image */}
            <div className="lg:col-span-6">
              <div className="relative">
                <div
                  aria-hidden="true"
                  className="absolute -inset-4 -z-10 rounded-[3rem] bg-gradient-to-br from-sun/35 via-sun/15 to-sky/25"
                />
                <SunRays
                  className="pointer-events-none absolute -right-6 -top-10 z-10 animate-sun-sweep"
                  size={150}
                  rays={18}
                  opacity={0.4}
                />

                <div className="frame-media aspect-[16/10]">
                  <Image
                    src={imagePaths.campus}
                    alt="Architectural illustration of the Sunrise Convent School building at Bhensola Chopati, Madhya Pradesh"
                    fill
                    priority
                    sizes="(min-width: 1024px) 48vw, 100vw"
                  />
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-gradient-to-t from-navy-950/55 via-transparent to-transparent"
                  />
                  <p className="absolute inset-x-0 bottom-0 px-5 pb-4 text-[0.78rem] font-medium text-white/90">
                    Sunrise Convent School · Kod Road, Bhensola Chopati
                  </p>
                </div>

                <div className="mt-4 flex items-start gap-3 rounded-2xl border border-navy-100 bg-white/80 p-4 shadow-card backdrop-blur-sm">
                  <MapPinBadge />
                  <p className="text-[0.82rem] leading-relaxed text-ink/70">
                    <strong className="font-semibold text-navy-900">Bhensola, Badnawar.</strong>{" "}
                    Classes {school.classRange.from} to {school.classRange.to}. Call or WhatsApp the
                    school office to arrange a campus visit.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <SunArc className="relative block h-10 w-full sm:h-14" />
      </section>

      {/* ----------------------------------------------- Welcome section */}
      <section className="section-y bg-cream">
        <div className="container-page grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <SectionHeading
              eyebrow="Welcome to Sunrise"
              title="A Warm Welcome to Sunrise Convent School"
            />
            <div className="prose-body mt-6">
              <p>
                Choosing a school is really a choice about the kind of childhood you want a
                child to have. At Sunrise Convent School, we think that childhood should feel
                safe first — a place where children can try something difficult without
                worrying about being laughed at, and where being kind is taken as seriously as
                getting the answer right.
              </p>
              <p>
                Our approach is deliberately simple. We build strong foundations: reading,
                writing and number sense are practised until they feel natural rather than
                difficult. Around that core, we make room for curiosity — the questions that
                have no neat answer, the experiments a child wants to try, the story they want
                to finish in their own way.
              </p>
              <p>
                Equally important is participation. A child who has stood on a stage, played a
                match, or performed in front of classmates learns things no worksheet can
                teach: how it feels to be nervous and do it anyway, how to lose well, and how
                to cheer for somebody else.
              </p>
              <p>
                And it is not only the school&rsquo;s job. The most important teachers in a
                child&rsquo;s life are still at home. Everything we do here works best when it
                is echoed by the same patience, the same encouragement and the same respect at
                the dinner table.
              </p>
            </div>

            <div className="mt-9 flex flex-wrap gap-3">
              <Link href="/about" className="btn-ghost">
                About our school
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <Link href="/vision-mission" className="link-underline self-center text-[0.9rem] font-semibold text-school">
                Read our vision &amp; mission
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="space-y-4">
              <div className="card-base p-6">
                <SunRays className="h-14 w-14" size={56} rays={14} opacity={0.7} />
                <h3 className="display-md mt-4">Foundations first</h3>
                <p className="mt-2.5 text-[0.92rem] leading-relaxed text-ink/70">
                  Reading, writing and number sense are practised until they stop feeling like
                  work and start feeling like tools.
                </p>
              </div>
              <div className="card-base p-6">
                <BookOpen className="h-6 w-6 text-school" aria-hidden="true" />
                <h3 className="display-md mt-4">Room for curiosity</h3>
                <p className="mt-2.5 text-[0.92rem] leading-relaxed text-ink/70">
                  Good questions are encouraged, creativity is given space, and no single
                  &ldquo;right way&rdquo; is imposed on every child.
                </p>
              </div>
              <div className="card-base p-6">
                <Handshake className="h-6 w-6 text-school" aria-hidden="true" />
                <h3 className="display-md mt-4">Parents as partners</h3>
                <p className="mt-2.5 text-[0.92rem] leading-relaxed text-ink/70">
                  Teachers and families work from the same side of the child&rsquo;s
                  development, not opposite sides of it.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --------------------------------------------- Learning journey */}
      <section className="section-y bg-white">
        <div className="container-page">
          <SectionHeading
            eyebrow="Our Learning Journey"
            title="Three Stages, One Continuous Path"
            lede="From a child's very first days in Nursery to the final year of middle school, each stage has its own job to do. The descriptions below are general educational goals — please ask the school office for the exact class structure, curriculum and assessment schedule."
            align="center"
          />

          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {classGroups.map((group, index) => (
              <article key={group.id} className="card-interactive flex flex-col p-7">
                <div className="flex items-center justify-between gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-sun/15 font-display text-base font-semibold text-navy-900">
                    {index + 1}
                  </span>
                  <span className="text-2xs font-semibold uppercase tracking-[0.14em] text-ink/40">
                    {group.ageRange}
                  </span>
                </div>

                <h3 className="display-md mt-5">{group.eyebrow}</h3>
                <p className="mt-1.5 text-[0.85rem] font-semibold text-school">
                  {group.classes.join(" · ")}
                </p>

                <p className="mt-4 text-[0.93rem] leading-relaxed text-ink/75">
                  {group.summary}
                </p>

                <ul className="mt-5 space-y-2.5 border-t border-navy-100 pt-5">
                  {group.focus.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-[0.88rem] text-ink/70">
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

          <p className="mx-auto mt-8 max-w-2xl text-center text-[0.82rem] leading-relaxed text-ink/50">
            The school&rsquo;s admission poster describes the medium as English medium
            following a CBSE pattern. Please confirm the current curriculum, subject list and
            examination pattern directly with the school office.
          </p>

          <div className="mt-10 text-center">
            <Link href="/academics" className="btn-primary">
              Explore academics
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------ Why explore */}
      <section className="section-y bg-navy-50/60">
        <div className="container-page">
          <SectionHeading
            eyebrow="Why Parents Can Explore Sunrise"
            title="What a Sunrise Child Grows Up Practising"
            lede="These four ideas shape how we want children to spend their days here. They describe our educational philosophy — not rankings, not awards, not guarantees."
            align="center"
          />

          <div className="mt-14 grid gap-6 sm:grid-cols-2">
            {valueCards.map(({ Icon, title, body }) => (
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

      {/* ------------------------------------------------------ Campus */}
      <section className="section-y bg-white">
        <div className="container-page grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="order-2 lg:order-1 lg:col-span-7">
            <div className="frame-media aspect-[16/10]">
              <Image
                src={imagePaths.campus}
                alt="Illustration of the Sunrise Convent School campus building at Kod Road, Bhensola Chopati"
                fill
                sizes="(min-width: 1024px) 58vw, 100vw"
                loading="lazy"
              />
            </div>
            <p className="mt-3 text-[0.8rem] leading-relaxed text-ink/50">
              Architectural artwork supplied by the school. Please replace with a current
              photograph of the campus before launch, so parents see exactly what they will
              visit.
            </p>
          </div>

          <div className="order-1 lg:order-2 lg:col-span-5">
            <SectionHeading
              eyebrow="Our Campus"
              title="A Place to Learn, Discover and Grow"
              lede="Our campus sits on Kod Road at Bhensola Chopati, within easy reach of Bhensola, Badnawar and the wider Dhar district. Families are welcome to see it for themselves — a visit is the quickest way to decide."
            />

            <ul className="mt-8 space-y-4">
              {posterHighlights.slice(0, 4).map((item) => (
                <li key={item.title} className="flex gap-3.5">
                  <span
                    className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-sun"
                    aria-hidden="true"
                  />
                  <span>
                    <span className="block text-[0.95rem] font-semibold text-navy-900">
                      {item.title}
                    </span>
                    <span className="mt-0.5 block text-[0.88rem] leading-relaxed text-ink/65">
                      {item.body}
                    </span>
                  </span>
                </li>
              ))}
            </ul>

            <div className="mt-9 rounded-2xl border border-navy-100 bg-cream p-5">
              <p className="text-[0.85rem] leading-relaxed text-ink/70">
                <strong className="font-semibold text-navy-900">
                  As described in the school&rsquo;s own promotional material:
                </strong>{" "}
                experienced teachers, spacious classrooms, individual oral and written
                evaluation for every child, special attention to sports and moral education, and
                CCTV-monitored premises. Please confirm current arrangements with the office.
              </p>
            </div>

            <Link href="/gallery" className="btn-ghost mt-8">
              See more photographs
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* -------------------------------------------- Beyond classroom */}
      <section className="section-y bg-cream">
        <div className="container-page">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-14">
            <div className="lg:col-span-5">
              <SectionHeading
                eyebrow="Beyond the Classroom"
                title="Life Outside the Books"
                lede="School is not only what happens at the desk. The photographs in the school's own promotional material show a busy, confident life — sports, celebrations, tours and creative work — and those are the parts children remember longest."
              />

              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/activities" className="btn-primary">
                  Explore activities
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
                <a
                  href={whatsappAdmission()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-ghost"
                >
                  <MessageCircle className="h-4 w-4" aria-hidden="true" />
                  Ask about activities
                </a>
              </div>
            </div>

            <div className="lg:col-span-7">
              <ul className="grid gap-4 sm:grid-cols-2">
                {posterActivities.map((activity, index) => (
                  <li
                    key={activity.title}
                    className="card-interactive flex flex-col p-6"
                  >
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-navy-800 text-sun">
                      {index % 2 === 0 ? (
                        <Star className="h-5 w-5" aria-hidden="true" />
                      ) : (
                        <Trophy className="h-5 w-5" aria-hidden="true" />
                      )}
                    </span>
                    <h3 className="mt-4 font-display text-lg font-semibold text-navy-900">
                      {activity.title}
                    </h3>
                    <p className="mt-2 text-[0.88rem] leading-relaxed text-ink/70">
                      {activity.body}
                    </p>
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-[0.8rem] leading-relaxed text-ink/50">
                Activities and their schedules are planned by the school. Please confirm current
                events and timings with the office before visiting.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ----------------------------------------------- Shining stars */}
      <section className="relative overflow-hidden bg-navy-800">
        <SunRays
          className="pointer-events-none absolute -left-24 -top-28"
          size={360}
          opacity={0.12}
        />

        <div className="container-page relative section-y">
          <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="order-2 lg:order-1 lg:col-span-6">
              <SectionHeading
                eyebrow="Our Shining Stars"
                title="Celebrating Our Shining Stars"
                tone="light"
                lede="Every achievement reflects effort, perseverance, and the encouragement to keep learning. We celebrate our students' progress and congratulate them on their accomplishments."
              />

              <ul className="mt-8 grid gap-4 sm:grid-cols-2">
                <li className="rounded-2xl border border-white/10 bg-white/5 p-5">
                  <p className="text-2xs font-semibold uppercase tracking-[0.14em] text-sun">
                    Class 8
                  </p>
                  <p className="mt-1.5 font-display text-2xl text-white">Board results</p>
                  <p className="mt-1 text-[0.82rem] text-white/60">
                    Published from the school&rsquo;s own results poster.
                  </p>
                </li>
                <li className="rounded-2xl border border-white/10 bg-white/5 p-5">
                  <p className="text-2xs font-semibold uppercase tracking-[0.14em] text-sun">
                    Class 5
                  </p>
                  <p className="mt-1.5 font-display text-2xl text-white">Board results</p>
                  <p className="mt-1 text-[0.82rem] text-white/60">
                    Every cohort listed, checked line by line.
                  </p>
                </li>
              </ul>

              <Link href="/results" className="btn-sun mt-9">
                View Student Results
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>

            <div className="order-1 lg:order-2 lg:col-span-6">
              <div className="relative mx-auto max-w-md">
                <div
                  aria-hidden="true"
                  className="absolute -inset-3 -z-10 rounded-[2.5rem] bg-sun/25 blur-[2px]"
                />
                <div className="frame-media aspect-[3/4] border-white/15">
                  <Image
                    src={imagePaths.resultsPoster}
                    alt="Our Shining Stars poster showing Class 8 and Class 5 board examination results for Sunrise Convent School, Bhensola"
                    fill
                    sizes="(min-width: 1024px) 40vw, 90vw"
                    loading="lazy"
                  />
                </div>
              </div>
              <p className="mt-3 text-center text-[0.78rem] leading-relaxed text-white/45">
                Student names and photographs are published only with written parental consent.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --------------------------------------- Vision & mission preview */}
      <section className="section-y bg-white">
        <div className="container-page">
          <SectionHeading
            eyebrow="Vision & Mission"
            title="What We Are Aiming For"
            lede="A short statement of the direction we are working towards. The full version, and the values behind it, are on our Vision & Mission page."
            align="center"
          />

          <div className="mt-14 grid gap-6 lg:grid-cols-2">
            <article className="card-base relative overflow-hidden p-8 sm:p-10">
              <SunRays className="absolute -right-10 -top-10 opacity-30" size={180} />
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-navy-800 text-sun">
                <SunRays size={22} rays={10} opacity={1} />
              </span>
              <h3 className="display-md mt-6">Our Vision</h3>
              <p className="mt-4 text-[1rem] leading-relaxed text-ink/75">
                To nurture confident, curious, and compassionate learners who grow into
                responsible individuals with a lifelong love of learning.
              </p>
            </article>

            <article className="card-base relative overflow-hidden bg-cream p-8 sm:p-10">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-sun text-navy-900">
                <CalendarCheck className="h-6 w-6" aria-hidden="true" />
              </span>
              <h3 className="display-md mt-6">Our Mission</h3>
              <p className="mt-4 text-[1rem] leading-relaxed text-ink/75">
                To encourage meaningful learning, strong foundational skills, creativity,
                discipline, kindness, and personal growth through a supportive school
                environment and a positive partnership between children, educators, and families.
              </p>
            </article>
          </div>

          <div className="mt-9 text-center">
            <Link href="/vision-mission" className="btn-primary">
              Read the full Vision &amp; Mission
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* -------------------------------------------- Admission CTA */}
      <AdmissionCTA />

      {/* ------------------------------------------- Contact preview */}
      <section className="section-y bg-white">
        <div className="container-page">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
            <div className="lg:col-span-5">
              <SectionHeading
                eyebrow="Visit or Enquire"
                title="Come and See It for Yourself"
                lede="The fastest way to answer any remaining doubt about a school is to stand in it. Call ahead and the office will tell you when the campus is best to visit."
              />

              <div className="mt-8 rounded-2xl border border-navy-100 bg-cream p-6">
                <p className="text-2xs font-semibold uppercase tracking-[0.14em] text-ink/45">
                  School address
                </p>
                <address className="mt-2.5 not-italic text-[0.95rem] leading-relaxed text-ink/75">
                  <strong className="font-semibold text-navy-900">{school.name}</strong>
                  <br />
                  {school.address.street}
                  <br />
                  Tehsil {school.address.tehsil}, District {school.address.district}
                  <br />
                  {school.address.state}, {school.address.country}
                </address>
              </div>

              <a href={telHref} className="btn-ghost mt-6 w-full">
                <Phone className="h-4 w-4" aria-hidden="true" />
                Call {school.phone.display}
              </a>
            </div>

            <div className="lg:col-span-7">
              <ContactActions variant="card" showAddress />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function MapPinBadge() {
  return (
    <span
      aria-hidden="true"
      className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-sun/30 to-sky/25 text-school"
    >
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 21s7-6.1 7-11a7 7 0 1 0-14 0c0 4.9 7 11 7 11Z" strokeLinejoin="round" />
        <circle cx="12" cy="10" r="2.6" />
      </svg>
    </span>
  );
}