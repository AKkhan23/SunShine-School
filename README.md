# Sunrise Convent School — Website

Production-ready, **fully static** website for **Sunrise Convent School**, Kod Road,
Bhensola Chopati, Tehsil Badnawar, District Dhar, Madhya Pradesh — a school for
**Nursery to Class 8**.

Built with Next.js (App Router), React, TypeScript and Tailwind CSS, exported with
`output: "export"` to a portable `out/` folder. No backend, no database, no CMS, no
tracking, no third-party service required to render the site.

---

## 1. Quick start

```bash
npm install     # install dependencies
npm run dev     # local development at http://localhost:3000
npm run build   # production build + static export into ./out
npm run verify  # automated checks on the exported site (see §7)
npm run preview # serve the exported ./out folder at http://localhost:4321
```

Requires **Node.js 20 or newer**.

| Script                    | What it does                                                                 |
| ------------------------- | ---------------------------------------------------------------------------- |
| `npm run dev`             | Next.js dev server with hot reload                                          |
| `npm run build`           | Type-checks, builds, and exports static HTML into `out/`                     |
| `npm run typecheck`       | TypeScript only                                                               |
| `npm run verify`          | Checks every route, link, asset, SEO tag and accessibility tag in `out/`      |
| `npm run preview`         | Zero-dependency static server for the exported folder                        |
| `npm run prepare:assets`  | Re-crops activity photographs out of the admission poster (see §6)            |
| `npm run prepare:photos`  | Re-optimises the supplied campus photographs from `src/_originals/`           |
| `npm run prepare:og`      | Regenerates the 1200×630 social-sharing image                                 |

### What `npm run build` produces

```
out/
├── index.html  about/index.html  vision-mission/index.html  academics/index.html
├── admissions/index.html  results/index.html  activities/index.html
├── gallery/index.html  contact/index.html  privacy-policy/index.html
├── 404.html
├── robots.txt   sitemap.xml   icon.svg
├── _next/       static JS + self-hosted fonts
└── images/      logo, campus artwork, posters, activity photographs
```

---

## 2. Pages

| Route                | Purpose                                                             |
| -------------------- | ------------------------------------------------------------------- |
| `/`                  | Home — hero, welcome, learning journey, values, campus, activities, results, vision & mission, admission CTA, contact |
| `/about`             | School introduction, educational philosophy, learning environment, parent partnership |
| `/vision-mission`    | Vision, mission, educational values, motto                          |
| `/academics`         | Academic philosophy, three class stages, learning journey timeline, subjects, assessment, collaboration |
| `/admissions`        | Five-step enquiry process, questions to ask, document checklist, campus visit, FAQ accordion, enquiry form |
| `/results`           | Class 8 and Class 5 board results, original poster, achievement philosophy |
| `/gallery`           | Filterable gallery with keyboard-accessible lightbox                |
| `/activities`        | Sports, cultural celebrations, tours and creative work               |
| `/contact`           | Contact details, click-to-call / email / WhatsApp, directions, enquiry form, address and nearby landmarks |
| `/privacy-policy`    | Plain-language privacy notice describing what the site actually does |
| `404`                | Friendly not-found page with links to every section                 |

Every page has its own title, meta description, canonical URL, Open Graph and Twitter
card metadata, breadcrumb JSON-LD, and unique body copy.

---

## 3. Deploying

### Vercel (recommended)

1. Push the project to a GitHub/GitLab/Bitbucket repository.
2. In Vercel, **Add New → Project** and import the repository. Vercel detects Next.js
   automatically; leave the build command as `npm run build`.
3. **Deploy.** The static output in `out/` is served automatically.
4. Point your domain at the project (Settings → Domains). Add a custom domain, then
   add the `NEXT_PUBLIC_SITE_URL` environment variable (see §4).
5. After changing that variable, redeploy so canonical URLs, `sitemap.xml` and
   `robots.txt` pick up the real domain.

### Any other static host (Netlify, Cloudflare Pages, GitHub Pages, cPanel, Apache…)

```bash
npm run build      # produces ./out
```

Upload the **contents** of `out/` to the web root. That is the whole deployment.

- **Netlify / Cloudflare Pages:** build command `npm run build`, publish directory `out`.
- **GitHub Pages:** push `out/` to a `gh-pages` branch, or use a GitHub Action.
- **Apache / shared hosting:** copy `out/` into `public_html`. Because the build uses
  `trailingSlash: true`, every route is a real `folder/index.html`, so no rewrite rules
  are needed.
- If your host serves 404s from a custom page, copy `out/404.html` over it.

**HTTPS:** every major host provides HTTPS automatically. This site makes no HTTP-only
assumptions, so there is nothing to change.

---

## 4. Configuring the production domain

Canonical URLs, Open Graph URLs, `sitemap.xml` and `robots.txt` all come from one
variable:

```bash
# .env.local  (local)
NEXT_PUBLIC_SITE_URL=https://www.yourdomain.in
```

On Vercel: **Project → Settings → Environment Variables → `NEXT_PUBLIC_SITE_URL`**,
then redeploy.

If it is not set, the build falls back to `https://sunrise-convent-school.vercel.app`
so a fresh deployment still builds and indexes correctly. **Set it before launch.**

---

## 5. Editing the school's information

Almost everything you will want to change lives in **`src/lib/site.ts`**:

```ts
export const school = {
  name: "Sunrise Convent School",
  motto: "BE NICE WORK HARD",
  address: { street: "...", tehsil: "Badnawar", district: "Dhar", ... },
  phone: { display: "+91 88717 63431", digits: "918871763431" },
  email: "ppatidar351@gmail.com",
  ...
};
```

The phone number is stored once and drives every `tel:`, WhatsApp and click-to-call
link on the site. The email address drives every `mailto:` link. Changing them in one
place updates all of them.

Other content files:

| File                     | Contents                                                    |
| ------------------------ | ----------------------------------------------------------- |
| `src/lib/navigation.ts`  | Header, footer and sitemap navigation                       |
| `src/lib/results.ts`     | Student results transcribed from the school poster          |
| `src/lib/gallery.ts`     | Gallery images, captions and alt text                      |
| `src/lib/seo.ts`         | Metadata helper, `School` / `WebSite` / `BreadcrumbList` JSON-LD |
| `src/lib/contact.ts`     | WhatsApp, phone, email and Google Maps link builders        |

**Changing the brand colours:** edit `tailwind.config.ts` (`theme.extend.colors`). The
palette is taken from the school's own logo and promotional poster:
navy `#073653`, school blue `#087DB5`, sky `#58A9DC`, sunshine `#F4BD32`,
cream `#FFF9E9`, ink `#172435`.

**Changing fonts:** `src/app/layout.tsx` uses `next/font/google` (Fraunces for display,
Plus Jakarta Sans for body). Fonts are downloaded **at build time** and self-hosted —
no request is made to Google when a visitor opens a page. If you need the build to work
without internet access, replace these with `next/font/local` and the `.woff2` files.

---

## 6. Images

All images live in `public/images/` with descriptive filenames:

```
public/images/
├── brand/        sunrise-convent-school-logo.jpeg
│                 sunrise-convent-school-og.png
├── campus/       sunrise-convent-school-campus-illustration.jpeg  (architectural artwork)
│                 sunrise-convent-school-assembly.jpg               ← home hero
│                 sunrise-convent-school-classroom.jpg
│                 sunrise-convent-school-computer-class.jpg
│                 sunrise-convent-school-reading-room.jpg
├── promotions/   sunrise-convent-school-admission-poster.jpeg
├── achievements/ sunrise-convent-school-shining-stars-poster.jpeg
└── activities/   18 photographs: 17 cropped from the admission poster,
                  plus plantation-drive.jpg (supplied directly)
```

Keep the untouched originals in `src/_originals/`. `npm run prepare:photos`
rebuilds the optimised web versions from them at any time.

The school's letterhead image is **not** published on the website. Its address
wording is still kept in `src/lib/site.ts` as `letterheadAddress` because the school
office uses it in writing.

### Where the activity photographs come from

The school supplied a single admission poster containing a collage of genuine
photographs. Rather than invent images, `scripts/prepare-assets.cjs` crops those real
photographs out of the poster into individual tiles (round ones are masked to a clean
circle). The original poster is never modified.

Those photographs are small inside the poster (130–530 px), so the script also enlarges
each crop once, offline, with a **Lanczos3** kernel plus a light **unsharp mask**, and
saves at quality 92 with 4:4:4 chroma. That is why the gallery and activities photos look
smooth instead of blocky — the browser no longer has to blow up a tiny file.

This cannot invent detail that was never in the poster. **The only real cure is to supply
the original photographs** (see §11).

If you replace the poster, delete `public/images/activities/` and re-run:

```bash
npm run prepare:assets
```

The crop coordinates in that script are measured against the 1252 × 1600 poster and
will need adjusting for a new file.

### To add your own photographs

1. Drop the file into `public/images/activities/` with a descriptive name.
2. Add an entry to `src/lib/gallery.ts` with a category, caption and **alt text**.
3. Make sure you have written consent from the parents before publishing any child.

---

## 7. Verification

`npm run build` followed by `npm run verify` checks, against the exported `out/` folder:

1. every required route was generated;
2. **every internal link resolves** to a real file (currently ~490 links);
3. **every image and asset reference resolves** (currently ~230 references);
4. each page has a title, meta description, canonical, Open Graph tags and JSON-LD, and
   no production page is accidentally `noindex` (the 404 page **is** `noindex`);
5. each page has `<html lang>`, a skip link, exactly one `<h1>`, and every `<img>`
   has an `alt` attribute;
6. the phone number, email address and address appear on every page;
7. `sitemap.xml` lists all 10 public URLs.

---

## 8. Enquiry forms — how they actually work

There is **no backend**. The form on `/admissions` and `/contact`:

1. validates the fields in your browser and shows inline error messages;
2. composes a readable enquiry message from what you typed;
3. opens WhatsApp (`https://wa.me/918871763431?text=…`) with the message prefilled, or
   your email app addressed to `ppatidar351@gmail.com`;
4. you press **send** there yourself.

Nothing is uploaded, stored, logged or put into a URL. The UI says this plainly on
every form, and `/privacy-policy` describes it in full.

---

## 9. SEO and local search

Implemented out of the box:

- unique title and meta description for all 10 pages, each targeting a real parent
  question (for example *"Nursery to Class 8 school in Bhensola"*);
- canonical URLs driven by `NEXT_PUBLIC_SITE_URL`;
- Open Graph and Twitter card metadata plus a 1200 × 630 sharing image;
- `robots.txt` (all pages allowed, sitemap advertised) and `sitemap.xml`;
- JSON-LD: `School` (address, phone, email, logo, motto, area served),
  `WebSite`, and `BreadcrumbList` on every interior page;
- semantic HTML5, one `<h1>` per page, correct heading order, descriptive alt text;
- internal links between all related pages;
- correct `404.html`.

**Deliberately not claimed:** ratings, reviews, map coordinates, opening hours, student
numbers, teacher ratios, or CBSE affiliation. Inventing any of these would be both
wrong and risky. The poster says "CBSE Pattern", and the site repeats exactly that.

### After launch — help parents find the school

1. **Create a Google Business Profile** at business.google.com. Category: *School*.
   Use the exact name "Sunrise Convent School", the address, the phone number, and a
   link to the website. Add real photographs — a Business Profile with photographs
   receives substantially more enquiries than one without. Ask parents for permission
   before uploading pictures of children.
2. **Verify the profile** by postcard or phone, then post the admission announcement.
3. **Add Google Search Console** — verify the domain, then submit
   `https://yourdomain.in/sitemap.xml`. Search Console shows which queries bring
   parents in, and catches any index problem early.
4. **Keep the details identical everywhere** — the phone number and address must match
   the Business Profile exactly, or ranking suffers.
5. **Consider a link from the district/tehsil education directory** and from local
   community groups.

### Adding analytics later (only if you decide to)

No analytics or cookies are included. If you add any, you will need a consent banner
and a privacy-policy update. A lightweight, cookieless option such as Plausible or
Fathom fits a static site well and avoids the consent banner entirely.

---

## 10. Accessibility and performance

- Semantic landmarks, skip-to-content link, visible focus rings, keyboard-accessible
  mobile menu (Escape to close, focus trapped), accordion and gallery lightbox
  (arrow keys to navigate, Escape to close).
- Colour contrast meets WCAG AA for body text.
- `prefers-reduced-motion` is respected — all animation is disabled for visitors who
  ask for it, and the site is fully usable without it.
- No horizontal overflow on mobile; layouts are mobile-first.
- ~113 kB of JavaScript on the heaviest page, almost all of it framework baseline.
- Images are sized, lazy-loaded below the fold, and the hero image is preloaded.
- No third-party requests, no console errors, no hydration mismatches.

---

## 11. ⚠️ Facts the school must confirm before launch

The website does **not** state anything it cannot substantiate. The following are
genuinely unknown and were deliberately left out. Please go through this list with the
school office — see `PENDING_CONFIRMATION` in `src/lib/site.ts`.

- [ ] **GPS coordinates** of the campus. The Directions button uses a text map search
      because no pin has been verified.
- [ ] **Office hours and school timings**, including the working week.
- [ ] **Fee structure** for Nursery to Class 8.
- [ ] **Admission deadlines**, session start date, and the age cut-off per class.
- [ ] **Transport** — whether the service is currently running, routes, timings and fees.
- [ ] **CBSE affiliation number.** The poster says "CBSE Pattern"; official affiliation
      is not claimed anywhere on the site.
- [ ] **Student roll strength, staff count and teacher-student ratio.**
- [ ] Whether the poster's claims — **CCTV, spacious classrooms, transport, individual
      oral and written evaluation** — are currently accurate and operating.
- [ ] **Principal's name** and any founder details. The logo prints "Est. 2016"; that
      year is not currently used in body copy.
- [ ] **Written parental consent** before publishing any child's photograph, name or
      individual result. The results page reproduces the poster, but individual student
      photographs are withheld until consent is recorded.
- [ ] **Verification of the newsroom / government registration number** that appears on
      the school's printed documents.
- [ ] **The Vision & Mission statements** are website copy awaiting the school's
      formal approval — the page says so in a visible banner.

### One asset issue to fix

The "school building photograph" supplied is an **architectural 3D rendering**, not a
photograph of the actual building. It is used across the site and is labelled honestly
("architectural illustration"). **Replacing it with a real photograph of the campus is
the single highest-impact improvement you can make** — it is the first thing a parent
sees. Replace `public/images/campus/sunrise-convent-school-campus-illustration.jpeg`
with a real photo (landscape, at least 1600 px wide) and update the file name in
`src/lib/site.ts` if you change it.

### Also worth reviewing

- Have the school office read the copy on `/admissions` and `/academics` and correct
  anything that does not match how the school actually works.
- Have the school office review `/privacy-policy` before publication.

### One more supply-your-originals note

Most gallery and activities photographs are cropped out of the 1252 × 1600 admission
poster, so each one is only a few hundred pixels across. They have been upscaled and
sharpened offline so they look clean on screen, but if you send the **original photo
files** for these activities (sports, annual celebration, dance, tours) the quality will
jump dramatically. Drop them into `public/images/activities/`, point the matching entry
in `src/lib/gallery.ts` at the new file, and the site will use them automatically.

---

## 12. Project structure

```
├── scripts/
│   ├── prepare-assets.cjs    crop activity photos from the admission poster
│   ├── prepare-og.cjs        build the social-sharing image
│   ├── serve-export.cjs      zero-dependency static server
│   └── verify-export.cjs     post-build verification of out/
├── src/
│   ├── app/
│   │   ├── layout.tsx        fonts, header, footer, site-wide JSON-LD
│   │   ├── page.tsx          home
│   │   ├── not-found.tsx     404
│   │   ├── robots.ts  sitemap.ts  icon.svg  globals.css
│   │   └── about/ vision-mission/ academics/ admissions/ results/
│   │       activities/ gallery/ contact/ privacy-policy/
│   ├── components/
│   │   ├── Header.tsx  Footer.tsx        shell and navigation
│   │   ├── PageHero.tsx  Breadcrumbs.tsx page framing
│   │   ├── SectionHeading.tsx  SunRays.tsx  design system
│   │   ├── AdmissionCTA.tsx  ContactActions.tsx
│   │   ├── EnquiryForm.tsx   FAQAccordion.tsx  GalleryGrid.tsx
│   │   ├── MottoBand.tsx  Brand.tsx  JsonLd.tsx  ScrollToTop.tsx
│   └── lib/
│       ├── site.ts  navigation.ts  seo.ts  contact.ts
│       └── results.ts  gallery.ts
├── public/images/
├── next.config.ts  tailwind.config.ts  tsconfig.json  postcss.config.js
└── README.md
```

Pages are React **Server Components** by default. Only the three interactive pieces —
`Header`, `EnquiryForm`, `FAQAccordion` and `GalleryGrid` — ship as client components,
which is why the JavaScript payload stays small.

---

## 13. Browser support

Modern evergreen browsers (Chrome, Edge, Safari, Firefox) on desktop and mobile.
The build uses CSS features supported since 2020 — no polyfills are needed.