import type { Metadata } from "next";
import { imagePaths, school, fullAddress } from "./site";

/**
 * Production origin.
 *
 * Set `NEXT_PUBLIC_SITE_URL` in your deployment environment (Vercel →
 * Settings → Environment Variables) to the real domain before launch, e.g.
 * `https://www.yourdomain.in`. The fallback is the conventional Vercel URL so
 * that a fresh deployment builds and indexes correctly out of the box.
 */
const rawSiteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.trim().replace(/\/$/, "") ||
  "https://sunrise-convent-school.vercel.app";

export const SITE_URL = rawSiteUrl;

export const absoluteUrl = (path: string) =>
  `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;

/** Banner used across the site for small trust signals. */
export const defaultOgImage = {
  url: absoluteUrl(imagePaths.ogImage),
  width: 1200,
  height: 630,
  alt: `${school.name}, Bhensola — ${school.motto}`,
};

export function buildMetadata({
  title,
  description,
  path = "/",
  keywords = [],
  ogImage,
  noIndex = false,
}: {
  title: string;
  description: string;
  path?: string;
  keywords?: string[];
  ogImage?: { url: string; width: number; height: number; alt: string };
  noIndex?: boolean;
}): Metadata {
  const canonical = absoluteUrl(path);
  const image = ogImage ?? defaultOgImage;

  return {
    title,
    description,
    keywords: keywords.length ? keywords : undefined,
    alternates: { canonical },
    robots: noIndex
      ? { index: false, follow: false }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            "max-image-preview": "large",
            "max-snippet": -1,
            "max-video-preview": -1,
          },
        },
    openGraph: {
      type: "website",
      locale: "en_IN",
      url: canonical,
      siteName: school.name,
      title,
      description,
      images: [image],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image.url],
    },
  };
}

/* ------------------------------------------------------------------ */
/* JSON-LD structured data                                            */
/* ------------------------------------------------------------------ */

const organizationId = `${SITE_URL}/#school`;
const websiteId = `${SITE_URL}/#website`;

export function schoolJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "School",
    "@id": organizationId,
    name: school.name,
    alternateName: `${school.shortName}, Bhensola`,
    url: `${SITE_URL}/`,
    logo: {
      "@type": "ImageObject",
      url: absoluteUrl(imagePaths.logo),
    },
    image: {
      "@type": "ImageObject",
      url: absoluteUrl(imagePaths.campus),
      caption: `${school.name} campus`,
    },
    description: `${school.name} is an English medium school in Bhensola, Badnawar, District Dhar, Madhya Pradesh, offering classes from ${school.classRange.from} to ${school.classRange.to}. Parents can contact the school office for admission enquiries, campus visits and fee details.`,
    email: school.email,
    telephone: `+${school.phone.digits}`,
    slogan: school.motto,
    address: {
      "@type": "PostalAddress",
      streetAddress: school.address.street,
      addressLocality: school.address.locality,
      addressRegion: school.address.district,
      addressCountry: "IN",
    },
    areaServed: [
      { "@type": "Place", name: "Bhensola, Tehsil Badnawar, District Dhar, Madhya Pradesh" },
      { "@type": "Place", name: "Badnawar" },
      { "@type": "Place", name: "Dhar" },
    ],
    knowsAbout: [
      "Nursery education",
      "Primary education",
      "Middle school education",
      "English medium schooling",
      "Co-curricular activities",
    ],
    potentialAction: {
      "@type": "ContactAction",
      target: `${SITE_URL}/contact/`,
      "contact-type": "admissions enquiry",
    },
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": websiteId,
    url: `${SITE_URL}/`,
    name: school.name,
    inLanguage: "en-IN",
    publisher: { "@id": organizationId },
  };
}

export function breadcrumbJsonLd(trail: { name: string; href: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: trail.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.href),
    })),
  };
}

export { fullAddress };