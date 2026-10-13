/**
 * Single source of truth for every verified school fact used across the site.
 *
 * RULE: only add a value here if it is printed in the school's own supplied
 * material (letterhead, circular logo, admission poster, results poster) or
 * has been confirmed by school management. Anything unverified belongs in
 * `PENDING_CONFIRMATION` so it can be surfaced honestly in the UI or README.
 */

export const school = {
  name: "Sunrise Convent School",
  shortName: "Sunrise Convent",
  tagline: "Nursery to Class 8 · Bhensola, Dhar (M.P.)",
  motto: "BE NICE WORK HARD",
  mottoMeaning:
    "Be kind to people, and work hard at everything you set out to do. It is the short version of how we would like our children to grow — thoughtful in how they treat others, and serious about their own learning.",

  /** Printed on the official circular logo supplied by the school. */
  establishedYearOnLogo: 2016,

  medium: "English Medium",
  /** Printed on the admission poster as "CBSE Pattern" — affiliation is NOT claimed. */
  curriculumWordingOnPoster: "CBSE Pattern",
  classRange: {
    from: "Nursery",
    to: "Class 8",
  },

  address: {
    /** Primary address, as used for the contact page and schema.org. */
    street: "Kod Road, Bhensola Chopati, Bhensola",
    locality: "Bhensola",
    tehsil: "Badnawar",
    district: "Dhar",
    state: "Madhya Pradesh",
    stateCode: "MP",
    country: "India",
    countryCode: "IN",
    postcode: "", // Not printed on any supplied material — left blank deliberately.
  },

  /** Wording printed on the school's official letterhead. */
  letterheadAddress:
    "Kod-Bhensola Road, Village Gardawadiya, Bhensola, Tehsil Badnawar, District Dhar, Madhya Pradesh",

  phone: {
    /** Printed on the letterhead and the admission poster. */
    display: "+91 88717 63431",
    raw: "+918871763431",
    digits: "918871763431",
  },

  email: "ppatidar351@gmail.com",

  /** Official school Instagram account, linked from the footer. */
  social: {
    instagram: "https://www.instagram.com/sunrise_convent_school_2016/",
    instagramHandle: "@sunrise_convent_school_2016",
  },

  /**
   * A text search query, not a pin. Exact map coordinates have not been
   * verified, so we deliberately never emit Geo coordinates in schema.org.
   */
  mapSearchQuery:
    "Sunrise Convent School, Kod Road, Bhensola Chopati, Bhensola, Badnawar, Dhar, Madhya Pradesh",
} as const;

export const fullAddress = [
  school.address.street,
  school.address.tehsil,
  `District ${school.address.district}`,
  `${school.address.state}, ${school.address.country}`,
].join(", ");

export const addressLine1 = school.address.street;
export const addressLine2 = `${school.address.tehsil}, District ${school.address.district}`;

export const imagePaths = {
  logo: "/images/brand/sunrise-convent-school-logo.jpeg",
  /** NOTE: the supplied "building photograph" is an architectural rendering. */
  campus: "/images/campus/sunrise-convent-school-campus-illustration.jpeg",
  /** Real photographs of the actual school, campus and classrooms. */
  assembly: "/images/campus/sunrise-convent-school-assembly.jpg",
  classroom: "/images/campus/sunrise-convent-school-classroom.jpg",
  computerClass: "/images/campus/sunrise-convent-school-computer-class.jpg",
  readingRoom: "/images/campus/sunrise-convent-school-reading-room.jpg",
  admissionPoster: "/images/promotions/sunrise-convent-school-admission-poster.jpeg",
  resultsPoster: "/images/achievements/sunrise-convent-school-shining-stars-poster.jpeg",
  ogImage: "/images/brand/sunrise-convent-school-og.png",
} as const;

export const classGroups = [
  {
    id: "early-years",
    eyebrow: "Early Years",
    classes: ["Nursery"],
    ageRange: "Young learners taking their first steps",
    title: "A gentle, joyful beginning",
    summary:
      "The early years are about comfort, belonging and the willingness to try. Young children learn best when they feel safe, when routines are predictable, and when adults notice what makes them curious. Our aim in these years is to build language, coordination and the simple joy of learning together.",
    focus: ["Comfort and belonging", "Spoken language and listening", "Early reading readiness", "Motor skills and play"],
  },
  {
    id: "primary-years",
    eyebrow: "Primary Years",
    classes: ["Class 1", "Class 2", "Class 3", "Class 4", "Class 5"],
    ageRange: "Classes 1 to 5",
    title: "Building strong foundations",
    summary:
      "Primary years are where habits form. Children move from learning letters and numbers to using them confidently in reading, writing and mathematical reasoning. Alongside core skills we nurture attention, neatness, self-discipline and the confidence to ask questions and finish what they start.",
    focus: ["Reading fluency and comprehension", "Writing and expression", "Number sense and reasoning", "Habits of discipline"],
  },
  {
    id: "middle-years",
    eyebrow: "Middle Years",
    classes: ["Class 6", "Class 7", "Class 8"],
    ageRange: "Classes 6 to 8",
    title: "Growing into independent learners",
    summary:
      "By the middle years children are ready for a wider academic load and more independent study. The focus shifts towards clarity of understanding, structured revision and self-discipline — while making sure that curiosity, kindness and participation are not left behind.",
    focus: ["Strong subject understanding", "Study habits and revision", "Critical thinking and reasoning", "Self-discipline and responsibility"],
  },
] as const;

/**
 * Translated faithfully from the Hindi list "विद्यालय की विशेषताएं"
 * (Special features of the school) printed on the school's admission poster.
 */
export const posterHighlights = [
  {
    title: "Taught by experienced teachers",
    body: "The admission poster lists teaching by experienced teachers as a defining feature of the school.",
  },
  {
    title: "Spacious classrooms",
    body: "The poster highlights well-maintained, spacious classrooms that give children room to learn comfortably.",
  },
  {
    title: "Individual evaluation for every student",
    body: "The school describes individual oral and written assessment for each child, so progress is noticed early.",
  },
  {
    title: "Focus on sports and moral education",
    body: "Physical skills, sports and moral education are named on the poster as areas of special attention.",
  },
  {
    title: "Physical, emotional and mental growth",
    body: "Development is described in the round — physically, emotionally and mentally, not only academically.",
  },
  {
    title: "CCTV-monitored campus",
    body: "The poster states that the school premises are monitored by CCTV cameras.",
  },
  {
    title: "Transport facility",
    body: "The poster mentions a vehicle facility for children to be dropped off and picked up.",
  },
] as const;

export const posterActivities = [
  {
    title: "Annual Celebration",
    body: "An annual celebration is shown in the school's promotional material, with students performing on stage.",
  },
  {
    title: "Sports Activity",
    body: "Games and practice sessions appear in the school's promotional material, including football and outdoor activities.",
  },
  {
    title: "Educational Tour",
    body: "The school's promotional material shows students on educational visits, including a group photograph at a landmark.",
  },
  {
    title: "Cultural & Festival Celebration",
    body: "Cultural performances and festival celebrations are represented, including dance performances on stage.",
  },
] as const;

/**
 * Facts the website deliberately does NOT publish because no supplied source
 * confirms them. Kept as data so they can be reviewed before launch.
 */
export const PENDING_CONFIRMATION = [
  "Exact GPS coordinates of the campus (currently a text map search is used instead).",
  "Office hours / school timings, including the Monday–Saturday week.",
  "Fee structure for Nursery to Class 8.",
  "Admission deadlines, the academic session start date and the age cut-off per class.",
  "Whether transport routes, seat limits or bus fees apply, and details of the transport facility.",
  "Official CBSE affiliation number and confirmation of the affiliation claim (the poster says 'CBSE Pattern' only).",
  "Student roll strength, staff count and teacher-student ratio.",
  "Confirmation that CCTV, laboratory, library, smart classroom and playground claims from the poster are currently in operation.",
  "Principal's name, any founder details and the school's official founding date (the logo shows 'Est. 2016').",
  "Written permission from parents/guardians to publish student photographs, names and results.",
  "Verification of the newsroom/government registration number printed on the letterhead.",
] as const;

export type PendingItem = (typeof PENDING_CONFIRMATION)[number];