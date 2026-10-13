/**
 * Gallery items.
 *
 * Provenance matters here. Every image below is a genuine photograph supplied
 * by the school — either the campus artwork, the results poster, or a crop
 * lifted from the school's own admission poster by `scripts/prepare-assets.cjs`.
 * No stock photography and no invented events are used.
 */

export type GalleryCategory =
  | "Campus"
  | "Learning in the classroom"
  | "Sports & games"
  | "Cultural celebrations"
  | "Educational tours"
  | "Student achievements"
  | "Plantation drive";

export type GalleryItem = {
  src: string;
  alt: string;
  caption: string;
  category: GalleryCategory;
  /** Circular PNG crops are masked by the preparation script. */
  shape?: "circle";
  aspect?: "4 / 3" | "3 / 4" | "16 / 10" | "3 / 2" | "1 / 1";
  /** Wide, short crops look best in a horizontal tile. */
  span?: "wide" | "tall" | "normal";
};

const A = "/images/activities";

export const galleryItems: GalleryItem[] = [
  {
    src: `${A}/campus-building.jpg`,
    alt: "Architectural illustration of the Sunrise Convent School building at Bhensola",
    caption: "The school building at Bhensola Chopati",
    category: "Campus",
    aspect: "16 / 10",
    span: "wide",
  },
  {
    src: `${A}/plantation-drive.jpg`,
    alt: "Students in school uniform planting saplings together in front of the Sunrise Convent School building",
    caption: "Students planting saplings at the school",
    category: "Plantation drive",
    aspect: "4 / 3",
    span: "wide",
  },
  {
    src: `${A}/writing-activity.png`,
    alt: "A pupil concentrating as she writes in her notebook during a class activity",
    caption: "Focused work in the classroom",
    category: "Learning in the classroom",
    shape: "circle",
    span: "normal",
  },
  {
    src: `${A}/classroom-early-learning.png`,
    alt: "Young pupils learning together in a bright classroom with shelves of learning material",
    caption: "Young learners at work",
    category: "Learning in the classroom",
    shape: "circle",
    span: "normal",
  },
  {
    src: "/images/achievements/sunrise-convent-school-shining-stars-poster.jpeg",
    alt: "Our Shining Stars poster showing Class 8 and Class 5 board examination results for Sunrise Convent School",
    caption: "Our Shining Stars — Class 8 and Class 5 board results",
    category: "Student achievements",
    aspect: "3 / 4",
    span: "tall",
  },
  {
    src: `${A}/sports-football.png`,
    alt: "Children taking part in a football match on the school ground",
    caption: "Football practice",
    category: "Sports & games",
    shape: "circle",
    span: "normal",
  },
  {
    src: `${A}/sports-outdoor-climbing.jpg`,
    alt: "Children climbing on an outdoor obstacle structure during a sports activity",
    caption: "Outdoor sports activity",
    category: "Sports & games",
    aspect: "1 / 1",
    span: "normal",
  },
  {
    src: `${A}/participation-activity.jpg`,
    alt: "Smiling pupils raising their hands and joining in during a group activity",
    caption: "Taking part with confidence",
    category: "Sports & games",
    aspect: "4 / 3",
    span: "normal",
  },
  {
    src: `${A}/annual-celebration-stage-a.jpg`,
    alt: "Children performing a group dance on stage during the school's annual celebration",
    caption: "Annual celebration — group performance",
    category: "Cultural celebrations",
    aspect: "16 / 10",
    span: "wide",
  },
  {
    src: `${A}/annual-celebration-stage-b.jpg`,
    alt: "A large group of students standing together on stage at the annual celebration",
    caption: "Annual celebration — the whole cast",
    category: "Cultural celebrations",
    aspect: "16 / 10",
    span: "wide",
  },
  {
    src: `${A}/cultural-dance-performance.jpg`,
    alt: "Two pupils in pink traditional costume performing a classical dance on stage",
    caption: "Classical dance performance",
    category: "Cultural celebrations",
    aspect: "1 / 1",
    span: "normal",
  },
  {
    src: `${A}/students-in-red-costumes.jpg`,
    alt: "Students in red and black costumes performing a skit on stage",
    caption: "Students performing a skit",
    category: "Cultural celebrations",
    aspect: "4 / 3",
    span: "normal",
  },
  {
    src: `${A}/stage-group-performance.jpg`,
    alt: "A group of young dancers in colourful costumes performing together on stage",
    caption: "Colourful group performance",
    category: "Cultural celebrations",
    aspect: "3 / 2",
    span: "normal",
  },
  {
    src: `${A}/festival-celebration-dance.jpg`,
    alt: "Children in orange outfits dancing in front of a Happy Diwali backdrop",
    caption: "Festival celebration",
    category: "Cultural celebrations",
    aspect: "4 / 3",
    span: "normal",
  },
  {
    src: `${A}/music-creative-activity.jpg`,
    alt: "Students sitting around a table taking part in a music activity with handmade instruments",
    caption: "Music and creative activity",
    category: "Learning in the classroom",
    aspect: "1 / 1",
    span: "normal",
  },
  {
    src: `${A}/educational-tour-group.jpg`,
    alt: "Students and a teacher posing together on an educational tour",
    caption: "Educational tour — group photograph",
    category: "Educational tours",
    aspect: "16 / 10",
    span: "wide",
  },
  {
    src: `${A}/educational-tour-landmark.jpg`,
    alt: "Students standing in front of a large statue during an educational visit",
    caption: "Learning beyond the classroom",
    category: "Educational tours",
    aspect: "16 / 10",
    span: "wide",
  },
];

export const galleryCategories: GalleryCategory[] = [
  "Campus",
  "Learning in the classroom",
  "Sports & games",
  "Cultural celebrations",
  "Educational tours",
  "Plantation drive",
  "Student achievements",
];

/**
 * Credit shown under the gallery. The activity photographs are cropped out of
 * the school's own admission poster — nothing here is stock imagery.
 */
export const GALLERY_PROVENANCE_NOTE =
  "All photographs on this page were supplied by the school — the campus artwork, the results poster, and activity photographs from the school's admission poster. No stock or generated images are used. Additional photographs are welcome from parents and staff, provided consent to publish has been recorded.";