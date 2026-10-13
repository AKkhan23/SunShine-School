import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/lib/seo";

export const dynamic = "force-static";

type Entry = {
  path: string;
  priority: number;
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
};

/** Priorities reflect how central each page is to a parent's enquiry journey. */
const entries: Entry[] = [
  { path: "/", priority: 1.0, changeFrequency: "weekly" },
  { path: "/admissions", priority: 0.95, changeFrequency: "weekly" },
  { path: "/about", priority: 0.85, changeFrequency: "monthly" },
  { path: "/academics", priority: 0.85, changeFrequency: "monthly" },
  { path: "/contact", priority: 0.85, changeFrequency: "monthly" },
  { path: "/results", priority: 0.7, changeFrequency: "monthly" },
  { path: "/activities", priority: 0.7, changeFrequency: "monthly" },
  { path: "/gallery", priority: 0.65, changeFrequency: "monthly" },
  { path: "/vision-mission", priority: 0.6, changeFrequency: "yearly" },
  { path: "/privacy-policy", priority: 0.2, changeFrequency: "yearly" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return entries.map(({ path, priority, changeFrequency }) => ({
    url: absoluteUrl(path),
    lastModified,
    changeFrequency,
    priority,
  }));
}