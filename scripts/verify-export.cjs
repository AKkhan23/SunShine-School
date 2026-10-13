/**
 * Post-build verification of the exported `out/` directory.
 *
 * Checks that every internal link and asset reference resolves to a real file,
 * that required routes were generated, and that key SEO tags are present.
 *
 * Run with:  node scripts/verify-export.cjs
 */
const fs = require("node:fs");
const path = require("node:path");

const root = path.join(__dirname, "..");
const out = path.join(root, "out");

if (!fs.existsSync(out)) {
  console.error("out/ not found — run `npm run build` first.");
  process.exit(1);
}

const requiredRoutes = [
  "index.html",
  "about/index.html",
  "vision-mission/index.html",
  "academics/index.html",
  "admissions/index.html",
  "results/index.html",
  "activities/index.html",
  "gallery/index.html",
  "contact/index.html",
  "privacy-policy/index.html",
  "404.html",
  "robots.txt",
  "sitemap.xml",
];

let failures = 0;
const fail = (msg) => {
  failures++;
  console.log("  FAIL  " + msg);
};
const pass = (msg) => console.log("  ok    " + msg);

/* ---------- 1. required routes ---------- */
console.log("\n[1] Required routes");
for (const route of requiredRoutes) {
  const file = path.join(out, route);
  if (fs.existsSync(file)) pass(route);
  else fail(`missing ${route}`);
}

/* ---------- 2. link + asset integrity ---------- */
console.log("\n[2] Internal links and assets");
const htmlFiles = [];
(function walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full);
    else if (entry.name.endsWith(".html")) htmlFiles.push(full);
  }
})(out);

const missingLinks = new Set();
const missingAssets = new Set();
let linkCount = 0;
let assetCount = 0;

for (const file of htmlFiles) {
  const html = fs.readFileSync(file, "utf8");
  const rel = path.relative(out, file);

  for (const match of html.matchAll(/href="(\/[^"#?]*)/g)) {
    const href = match[1];
    if (href.startsWith("//") || href.startsWith("/_next/static/media")) {
      // static build output
    }
    linkCount++;
    const target = href.endsWith("/") ? `${href}index.html` : href;
    if (href === "/") {
      if (!fs.existsSync(path.join(out, "index.html")))
        missingLinks.add(`${rel} -> ${href}`);
      continue;
    }
    const candidates = [
      path.join(out, target),
      path.join(out, target, "index.html"),
      path.join(out, `${target.replace(/\/$/, "")}.html`),
    ];
    if (!candidates.some((c) => fs.existsSync(c))) missingLinks.add(`${rel} -> ${href}`);
  }

  for (const match of html.matchAll(/(?:src|href)="(\/_next\/[^"]+|(\/images\/)[^"]+)"/g)) {
    const asset = match[1];
    if (!asset.startsWith("/_next/") && !asset.startsWith("/images/")) continue;
    assetCount++;
    const clean = asset.split("?")[0];
    if (!fs.existsSync(path.join(out, clean))) missingAssets.add(`${rel} -> ${clean}`);
  }
}

if (missingLinks.size === 0) pass(`${linkCount} internal links across ${htmlFiles.length} files all resolve`);
else [...missingLinks].forEach((l) => fail(`broken link ${l}`));

if (missingAssets.size === 0) pass(`${assetCount} asset references all resolve`);
else [...missingAssets].forEach((a) => fail(`broken asset ${a}`));

/* ---------- 3. SEO essentials ---------- */
console.log("\n[3] SEO essentials");
for (const route of requiredRoutes.filter((r) => r.endsWith(".html"))) {
  const html = fs.readFileSync(path.join(out, route), "utf8");
  const problems = [];
  if (!/<title>[^<]{10,}<\/title>/.test(html)) problems.push("title");
  if (!/<meta name="description" content="[^"]{60,}"/.test(html)) problems.push("description");
  if (!/rel="canonical"/.test(html)) problems.push("canonical");
  if (!/property="og:title"/.test(html)) problems.push("og:title");
  if (!/property="og:image"/.test(html)) problems.push("og:image");
  if (!/property="og:locale"/.test(html)) problems.push("og:locale");
  if (!/application\/ld\+json/.test(html)) problems.push("json-ld");
  const is404 = route === "404.html";
  const hasNoindex = /<meta name="robots" content="[^"]*noindex/.test(html);
  if (is404 ? !hasNoindex : hasNoindex) {
    problems.push(is404 ? "404 page should be noindex" : "unexpected noindex");
  }
  if (problems.length === 0) pass(`${route} — title, description, canonical, OG, JSON-LD`);
  else fail(`${route} missing: ${problems.join(", ")}`);
}

/* ---------- 4. accessibility basics ---------- */
console.log("\n[4] Accessibility basics");
for (const route of requiredRoutes.filter((r) => r.endsWith(".html") && r !== "404.html")) {
  const html = fs.readFileSync(path.join(out, route), "utf8");
  const problems = [];
  if (!/<html lang="/.test(html)) problems.push("html lang");
  if (!/Skip to main content/.test(html)) problems.push("skip link");
  if (!/<h1[ >]/.test(html)) problems.push("h1");
  const imgCount = (html.match(/<img /g) || []).length;
  const altCount = (html.match(/<img [^>]*alt="/g) || []).length;
  if (imgCount !== altCount) problems.push(`img alt (${altCount}/${imgCount})`);
  if (problems.length === 0) pass(`${route} — lang, skip link, h1, ${imgCount} images with alt`);
  else fail(`${route} missing: ${problems.join(", ")}`);
}

/* ---------- 5. contact details consistency ---------- */
console.log("\n[5] School contact details");
for (const route of requiredRoutes.filter((r) => r.endsWith(".html"))) {
  const html = fs.readFileSync(path.join(out, route), "utf8");
  const problems = [];
  if (!html.includes("tel:+918871763431")) problems.push("tel: link");
  if (!html.includes("ppatidar351@gmail.com")) problems.push("email");
  if (!html.includes("Bhensola")) problems.push("address");
  if (problems.length === 0) pass(`${route} — phone, email and address present`);
  else fail(`${route} missing: ${problems.join(", ")}`);
}

/* ---------- 6. sitemap ---------- */
console.log("\n[6] sitemap.xml");
const sitemap = fs.readFileSync(path.join(out, "sitemap.xml"), "utf8");
const urlCount = (sitemap.match(/<url>/g) || []).length;
if (urlCount === 10) pass(`${urlCount} URLs listed`);
else fail(`expected 10 URLs, found ${urlCount}`);

console.log(
  failures === 0
    ? "\nAll checks passed.\n"
    : `\n${failures} check(s) failed.\n`,
);
process.exit(failures === 0 ? 0 : 1);