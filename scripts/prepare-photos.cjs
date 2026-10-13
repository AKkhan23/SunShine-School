/**
 * Optimises the newly supplied photographs.
 *
 * These are full-resolution phone photos (up to 3280 px, 2.8 MB). They are
 * resized to a sensible web size and re-encoded so the pages stay fast, and
 * given descriptive filenames that say what the photograph actually shows.
 *
 * Run with:  npm run prepare:photos
 */
const fs = require("node:fs");
const path = require("node:path");
const sharp = require("sharp");

const root = path.join(__dirname, "..");
/**
 * Originals live in `src/_originals/` (or directly in `src/`). Keeping the
 * untouched originals means this script can be re-run at any time to rebuild
 * the optimised web versions from scratch.
 */
const sourceDirs = [
  path.join(root, "src", "_originals"),
  path.join(root, "src"),
];
const outDir = path.join(root, "public", "images", "campus");

fs.mkdirSync(outDir, { recursive: true });

const photos = [
  {
    from: "WhatsApp Image 23 PM.jpeg",
    to: "sunrise-convent-school-assembly.jpg",
    width: 1800,
  },
  {
    from: "WhatsApp Ima 2PM.jpeg",
    to: "sunrise-convent-school-classroom.jpg",
    width: 1200,
  },
  {
    from: "WhatsApp Image 200PM.jpeg",
    to: "sunrise-convent-school-computer-lab.jpg",
    width: 1200,
  },
  {
    from: "WhatsApp Image 2026-10-13 at 6.50.02 PM.jpeg",
    to: "sunrise-convent-school-computer-class.jpg",
    width: 1600,
  },
  {
    from: "WhatsApp Image 2026-10-13 at 6.50.01 PM.jpeg",
    to: "sunrise-convent-school-reading-room.jpg",
    width: 1600,
  },
];

(async () => {
  for (const { from, to, width } of photos) {
    const source = sourceDirs.map((d) => path.join(d, from)).find((p) => fs.existsSync(p));
    if (!source) {
      console.warn(`SKIP ${from} — original not found in src/_originals or src`);
      continue;
    }

    const target = path.join(outDir, to);
    const meta = await sharp(source).metadata();

    await sharp(source)
      .resize({ width, withoutEnlargement: true, fit: "inside", kernel: sharp.kernel.lanczos3 })
      // Phone photos are a touch soft; a very light unsharp mask tidies them.
      .sharpen({ sigma: 0.6, m1: 0.3 })
      .jpeg({ quality: 88, mozjpeg: true, chromaSubsampling: "4:2:0" })
      .toFile(target);

    const out = await sharp(target).metadata();
    console.log(
      `WROTE ${to.padEnd(44)} ${meta.width}x${meta.height} -> ${out.width}x${out.height}` +
        `   ${Math.round(fs.statSync(target).size / 1024)} kB`,
    );
  }
})();