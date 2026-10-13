/**
 * Builds the Open Graph / social sharing image (1200 x 630 PNG).
 *
 * It reuses the school's official logo so the shared card carries real
 * branding, and states only contact details that appear on the school's own
 * letterhead and admission poster.
 *
 * Run with:  npm run prepare:og
 */
const fs = require("node:fs");
const path = require("node:path");
const sharp = require("sharp");

const root = path.join(__dirname, "..");
const logoPath = path.join(
  root,
  "public",
  "images",
  "brand",
  "sunrise-convent-school-logo.jpeg",
);
const outPath = path.join(
  root,
  "public",
  "images",
  "brand",
  "sunrise-convent-school-og.png",
);

const NAVY = "#073653";
const BLUE = "#087DB5";
const SKY = "#58A9DC";
const SUN = "#F4BD32";
const CREAM = "#FFF9E9";

function rays(cx, cy, r0, r1, count, color, width, opacity) {
  let out = "";
  for (let i = 0; i < count; i++) {
    const a = (Math.PI * 2 * i) / count;
    out += `<line x1="${(cx + Math.cos(a) * r0).toFixed(1)}" y1="${(cy + Math.sin(a) * r0).toFixed(1)}" x2="${(cx + Math.cos(a) * r1).toFixed(1)}" y2="${(cy + Math.sin(a) * r1).toFixed(1)}" stroke="${color}" stroke-width="${width}" stroke-linecap="round" opacity="${opacity}"/>`;
  }
  return out;
}

(async () => {
  const logo = await sharp(logoPath)
    .resize(132, 132, { fit: "cover" })
    .ensureAlpha()
    .composite([
      {
        input: Buffer.from(
          `<svg width="132" height="132" xmlns="http://www.w3.org/2000/svg"><circle cx="66" cy="66" r="66" fill="#fff"/></svg>`,
        ),
        blend: "dest-in",
      },
    ])
    .png()
    .toBuffer();

  const svg = Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="${NAVY}"/>
      <stop offset="0.55" stop-color="#0B4E7A"/>
      <stop offset="1" stop-color="${BLUE}"/>
    </linearGradient>
    <linearGradient id="arc" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0" stop-color="${SUN}" stop-opacity="0"/>
      <stop offset="0.5" stop-color="${SUN}" stop-opacity="1"/>
      <stop offset="1" stop-color="${SUN}" stop-opacity="0"/>
    </linearGradient>
  </defs>

  <rect width="1200" height="630" fill="url(#bg)"/>

  <g opacity="0.1">
    ${rays(1150, 90, 180, 480, 26, SUN, 6, 0.5)}
  </g>
  <g opacity="0.06">
    ${rays(60, 640, 140, 380, 22, SKY, 6, 0.5)}
  </g>

  <path d="M0 606C250 552 440 530 620 530s380 22 580 70" fill="none" stroke="url(#arc)" stroke-width="3.5" opacity="0.5"/>

  <text x="266" y="158" fill="${CREAM}" font-family="Georgia, 'Times New Roman', serif" font-size="60" font-weight="700" letter-spacing="-1">Sunrise Convent</text>
  <text x="266" y="222" fill="${SUN}" font-family="Georgia, 'Times New Roman', serif" font-size="60" font-weight="700" letter-spacing="-1">School</text>

  <g transform="translate(266 254)">
    <rect x="0" y="0" width="286" height="46" rx="23" fill="${SUN}" />
    <text x="143" y="30" text-anchor="middle" fill="${NAVY}" font-family="Helvetica, Arial, sans-serif" font-size="20" font-weight="700" letter-spacing="1.5">NURSERY TO CLASS 8</text>
  </g>

  <text x="266" y="362" fill="#FFFFFF" font-family="Helvetica, Arial, sans-serif" font-size="26" font-weight="500" opacity="0.92">English Medium  ·  Bhensola, Tehsil Badnawar</text>
  <text x="266" y="400" fill="${SKY}" font-family="Helvetica, Arial, sans-serif" font-size="24" opacity="0.95">District Dhar, Madhya Pradesh, India</text>

  <g transform="translate(266 442)">
    <rect x="0" y="0" width="446" height="76" rx="38" fill="#FFFFFF" opacity="0.1"/>
    <text x="30" y="34" fill="${CREAM}" font-family="Helvetica, Arial, sans-serif" font-size="19" font-weight="700" letter-spacing="2.5">BE NICE</text>
    <text x="146" y="34" fill="${SUN}" font-family="Georgia, serif" font-size="15" letter-spacing="2">•</text>
    <text x="174" y="34" fill="${CREAM}" font-family="Helvetica, Arial, sans-serif" font-size="19" font-weight="700" letter-spacing="2.5">WORK HARD</text>
    <text x="30" y="62" fill="#FFFFFF" font-family="Helvetica, Arial, sans-serif" font-size="19" opacity="0.78">+91 88717 63431  ·  Bhensola</text>
  </g>
</svg>`);

  await sharp(svg)
    .composite([
      { input: logo, left: 96, top: 96 },
      {
        input: Buffer.from(
          `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630"><circle cx="162" cy="162" r="70" fill="none" stroke="#FFFFFF" stroke-width="5" opacity="0.9"/></svg>`,
        ),
        left: 0,
        top: 0,
      },
    ])
    .png({ quality: 92 })
    .toFile(outPath);
  console.log(
    `WROTE ${path.relative(root, outPath)} (${Math.round(fs.statSync(outPath).size / 1024)} kB)`,
  );
})();