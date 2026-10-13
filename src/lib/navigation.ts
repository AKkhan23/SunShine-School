export type NavItem = {
  label: string;
  href: string;
  description?: string;
};

export type NavGroup = {
  label: string;
  items: NavItem[];
};

/** Primary navigation shown in the desktop header and the mobile drawer. */
export const primaryNav: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Vision & Mission", href: "/vision-mission" },
  { label: "Academics", href: "/academics" },
  { label: "Admissions", href: "/admissions" },
  { label: "Results", href: "/results" },
  { label: "Activities", href: "/activities" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
];

export const footerNavGroups: NavGroup[] = [
  {
    label: "Discover",
    items: [
      { label: "About Our School", href: "/about" },
      { label: "Vision & Mission", href: "/vision-mission" },
      { label: "Academics", href: "/academics" },
      { label: "Activities", href: "/activities" },
    ],
  },
  {
    label: "Parents",
    items: [
      { label: "Admissions", href: "/admissions" },
      { label: "Student Results", href: "/results" },
      { label: "School Gallery", href: "/gallery" },
      { label: "Contact Us", href: "/contact" },
    ],
  },
];

export const legalNav: NavItem[] = [{ label: "Privacy Policy", href: "/privacy-policy" }];

/** Every route that must appear in sitemap.xml and in internal linking. */
export const allRoutes = [
  "/",
  "/about",
  "/vision-mission",
  "/academics",
  "/admissions",
  "/results",
  "/activities",
  "/gallery",
  "/contact",
  "/privacy-policy",
] as const;

export type Route = (typeof allRoutes)[number];