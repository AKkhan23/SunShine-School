/**
 * Class-name integrity check.
 *
 * Tailwind silently drops any class it does not recognise (a typo, or an
 * unsupported value such as an opacity step outside its default scale). That
 * produces a page which looks subtly wrong with no build error, so this check
 * compares every class used in `src/` against the CSS that was actually
 * generated, and fails on anything missing.
 *
 * Run with:  npm run verify
 */
const fs = require("node:fs");
const path = require("node:path");

const root = path.join(__dirname, "..");
const srcDir = path.join(root, "src");
const outDir = path.join(root, "out");

if (!fs.existsSync(outDir)) {
  console.error("out/ not found — run `npm run build` first.");
  process.exit(1);
}

/* ---------- classes defined by hand in globals.css ---------- */
const customClasses = new Set([
  "container-page",
  "section-y",
  "section-y-tight",
  "eyebrow",
  "display-xl",
  "display-lg",
  "display-md",
  "lede",
  "prose-body",
  "card-base",
  "card-interactive",
  "btn",
  "btn-primary",
  "btn-sun",
  "btn-ghost",
  "btn-outline-light",
  "btn-sm",
  "frame-media",
  "sun-divider",
  "link-underline",
  "text-balance",
  "scrollbar-none",
]);

/* ---------- collect the CSS that Tailwind actually generated ---------- */
const cssDir = path.join(outDir, "_next", "static", "css");
const cssFiles = fs.existsSync(cssDir) ? fs.readdirSync(cssDir) : [];
if (cssFiles.length === 0) {
  console.error("No compiled CSS found in out/_next/static/css");
  process.exit(1);
}

const css = cssFiles
  .map((f) => fs.readFileSync(path.join(cssDir, f), "utf8"))
  .join("\n");

/* Unescape Tailwind's CSS class escaping: .bg-navy-950\/95 -> bg-navy-950/95 */
const generated = new Set();
for (const m of css.matchAll(/\.((?:[-a-zA-Z0-9_]|\\.)+)/g)) {
  generated.add(m[1].replace(/\\(.)/g, "$1"));
}

/* ---------- collect class tokens used in the source ---------- */
function walk(dir, out = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full, out);
    else if (/\.(tsx|ts)$/.test(entry.name)) out.push(full);
  }
  return out;
}

/**
 * Extracts the string content of every `className=...` attribute, handling
 * plain strings, {"..."} expressions and multi-line template literals.
 */
function extractClassNameValues(text) {
  const values = [];
  const marker = "className=";
  let i = 0;

  while ((i = text.indexOf(marker, i)) !== -1) {
    let j = i + marker.length;
    while (j < text.length && /\s/.test(text[j])) j++;

    if (text[j] === '"' || text[j] === "'") {
      const quote = text[j];
      let end = text.indexOf(quote, j + 1);
      if (end === -1) break;
      values.push(text.slice(j + 1, end));
      i = end + 1;
    } else if (text[j] === "{") {
      let depth = 0;
      let end = j;
      for (; end < text.length; end++) {
        if (text[end] === "{") depth++;
        else if (text[end] === "}") {
          depth--;
          if (depth === 0) break;
        }
      }
      const expression = text.slice(j + 1, end);
      // String and template literals inside the expression.
      for (const m of expression.matchAll(/["'`]([^"'`]*)["'`]/g)) values.push(m[1]);
      i = end + 1;
    } else {
      i = j;
    }
  }

  return values;
}

const sourceFiles = walk(srcDir);
const used = new Map(); // class -> first file it was seen in

for (const file of sourceFiles) {
  const text = fs.readFileSync(file, "utf8");
  for (const chunk of extractClassNameValues(text)) {
    for (const token of chunk.split(/\s+/)) {
      if (!token || token.length > 90) continue;
      if (!/^[!a-zA-Z0-9:_[\]/.\-()%,#]+$/.test(token)) continue;
      if (!used.has(token)) used.set(token, path.relative(root, file));
    }
  }
}

/* ---------- check every token ---------- */
const missing = [];

/** Looks like a Tailwind utility (has a hyphen) rather than a plain word. */
function looksLikeUtility(token) {
  return /^[a-z][a-zA-Z0-9:/[\].%_-]*-/.test(token);
}

for (const [token, file] of used) {
  const parts = token.split(":");
  const base = parts[parts.length - 1];
  if (!base) continue;

  if (generated.has(token)) continue; // e.g. `lg:grid-cols-12`
  if (customClasses.has(base)) continue; // defined by hand in globals.css
  if (generated.has(base)) continue; // e.g. `hover:bg-navy-800`
  // `group-hover:`/`peer-*` style parent selectors and state helpers
  if (/^(group|peer|dark|light)/.test(base) && parts.length > 1) continue;
  // Arbitrary values, e.g. `w-[3px]`
  if (/^\[/.test(base)) continue;

  const bare = base.startsWith("!") ? base.slice(1) : base;
  if (generated.has(bare)) continue;

  // A single bare word (`flex`, `hidden`, `grid`) is checked above; anything
  // still unresolved that looks like a utility is a real problem.
  if (looksLikeUtility(bare)) missing.push(`${token}   (${file})`);
}

console.log("\n[7] Tailwind class integrity");
if (missing.length === 0) {
  console.log(`  ok    ${used.size} distinct classes all resolve to generated CSS`);
} else {
  console.log(`  FAIL  ${missing.length} class(es) produce no CSS:`);
  for (const m of missing.slice(0, 40)) console.log("        " + m);
}

process.exit(missing.length === 0 ? 0 : 1);