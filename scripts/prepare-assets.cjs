/**
 * One-off asset preparation script.
 *
 * The school's admission poster is a single collage containing genuine
 * photographs of school life. Rather than inventing new photos, this script
 * crops those real photographs out of the poster so the gallery can show them
 * as individual tiles.
 *
 * Round photographs on the poster are masked to a clean circle (transparent
 * PNG); rectangular photographs are cropped tight inside their printed frame.
 *
 * Crop boxes are measured against the 1252 x 1600 source poster.
 * Run with:  npm run prepare:assets      (source files are never modified)
 */
const fs = require("node:fs");
const path = require("node:path");
const sharp = require("sharp");

const root = path.join(__dirname, "..");
const posterPath = path.join(
  root,
  "public",
  "images",
  "promotions",
  "sunrise-convent-school-admission-poster.jpeg",
);
const outDir = path.join(root, "public", "images", "activities");
fs.mkdirSync(outDir, { recursive: true });

const crops = [
  { out: "campus-building.jpg", box: [14, 255, 528, 345] },
  // Rectangular (unmasked) variants of the round photographs, for use where a
  // circular crop would not sit correctly inside a rectangular frame.
  { out: "classroom-learning-rect.jpg", box: [898, 314, 130, 130] },
  { out: "writing-activity-rect.jpg", box: [644, 398, 154, 154] },
  { out: "sports-football.png", box: [1056, 194, 168, 168], shape: "circle" },
  { out: "classroom-early-learning.png", box: [879, 295, 168, 168], shape: "circle" },
  { out: "writing-activity.png", box: [630, 384, 206, 206], shape: "circle" },
  { out: "educational-tour-group.jpg", box: [950, 600, 285, 170] },
  { out: "educational-tour-landmark.jpg", box: [968, 1200, 265, 150] },
  { out: "sports-outdoor-climbing.jpg", box: [1022, 892, 212, 226] },
  { out: "annual-celebration-stage-a.jpg", box: [26, 845, 200, 105] },
  { out: "annual-celebration-stage-b.jpg", box: [26, 1095, 200, 105] },
  { out: "cultural-dance-performance.jpg", box: [426, 752, 162, 170] },
  { out: "festival-celebration-dance.jpg", box: [308, 948, 156, 136] },
  { out: "stage-group-performance.jpg", box: [740, 954, 196, 128] },
  { out: "music-creative-activity.jpg", box: [432, 1104, 170, 150] },
  { out: "students-in-red-costumes.jpg", box: [658, 742, 186, 136] },
  { out: "participation-activity.jpg", box: [668, 1106, 168, 136] },
];

function circleMask(width, height) {
  return Buffer.from(
    `<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">` +
      `<circle cx="${width / 2}" cy="${height / 2}" r="${Math.min(width, height) / 2}" fill="#fff"/>` +
      `</svg>`,
  );
}

/**
 * The photographs inside the poster are small (130–530 px). Displayed inside a
 * 400–620 px tile they were being blown up by the browser and looked blocky.
 *
 * We therefore enlarge them once, here, with a high-quality Lanczos kernel and
 * a light unsharp mask, so the browser receives an image that is already the
 * right size and reads as a soft photograph rather than as broken pixels.
 * This cannot invent detail that is not in the poster — replacing the poster
 * with the original photographs is the only real cure (see README §11).
 */
const MIN_TILE_WIDTH = 900; // px, comfortably above a 2x gallery tile
const MIN_CIRCLE_WIDTH = 640; // PNG tiles are laid out smaller

async function enhance(buffer, width, shape) {
  const floor = shape === "circle" ? MIN_CIRCLE_WIDTH : MIN_TILE_WIDTH;
  const resized = await sharp(buffer)
    .resize({
      // Math.max means images that are already large enough are untouched.
      width: Math.max(width, floor),
      kernel: sharp.kernel.lanczos3,
      fit: "inside",
    })
    // A touch of unsharp mask recovers the crispness the upscale softens.
    .sharpen({ sigma: 0.9, m1: 0.6, m2: 1.8 })
    .toBuffer();

  if (shape !== "circle") return { buffer: resized, size: null };

  // The circular mask has to match the post-resize dimensions exactly.
  const { width: w, height: h } = await sharp(resized).metadata();
  const masked = await sharp(resized)
    .ensureAlpha()
    .composite([{ input: circleMask(w, h), blend: "dest-in" }])
    .png({ compressionLevel: 9, quality: 90 })
    .toBuffer();

  return { buffer: masked, size: `${w}x${h}` };
}

(async () => {
  const meta = await sharp(posterPath).metadata();
  console.log(`Source poster: ${meta.width} x ${meta.height}`);

  for (const { out, box, shape } of crops) {
    const [left, top, width, height] = box;
    if (left < 0 || top < 0 || left + width > meta.width || top + height > meta.height) {
      console.warn(`SKIP ${out} — box ${box} falls outside the poster.`);
      continue;
    }

    const source = await sharp(posterPath)
      .extract({ left, top, width, height })
      .toBuffer();

    const { buffer, size } = await enhance(source, width, shape);
    const target = path.join(outDir, out);

    if (shape !== "circle") {
      const { width: w, height: h } = await sharp(buffer).metadata();
      await sharp(buffer)
        .jpeg({ quality: 92, mozjpeg: true, chromaSubsampling: "4:4:4" })
        .toFile(target);
      console.log(`WROTE ${out} ${w}x${h} (${Math.round(fs.statSync(target).size / 1024)} kB)`);
    } else {
      fs.writeFileSync(target, buffer);
      console.log(`WROTE ${out} ${size} (${Math.round(fs.statSync(target).size / 1024)} kB)`);
    }
  }
})();