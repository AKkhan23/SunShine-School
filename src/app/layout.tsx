import type { Metadata, Viewport } from "next";
import { Fraunces, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ScrollToTop } from "@/components/ScrollToTop";
import { JsonLd } from "@/components/JsonLd";
import { schoolJsonLd, websiteJsonLd } from "@/lib/seo";
import { imagePaths, school } from "@/lib/site";
import { absoluteUrl, defaultOgImage } from "@/lib/seo";

const displayFont = Fraunces({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-display",
  weight: ["400", "500", "600", "700"],
});

const bodyFont = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-body",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(absoluteUrl("/")),
  title: {
    default: `${school.name}, Bhensola | ${school.classRange.from} to ${school.classRange.to}`,
    template: `%s | ${school.name}`,
  },
  description: `Sunrise Convent School at Bhensola, Badnawar, Dhar, Madhya Pradesh. An English medium school for ${school.classRange.from} to ${school.classRange.to} — explore our learning approach, student achievements, school activities and admission enquiries.`,
  applicationName: school.name,
  authors: [{ name: school.name }],
  creator: school.name,
  publisher: school.name,
  category: "education",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "/",
    siteName: school.name,
    images: [defaultOgImage],
  },
  twitter: {
    card: "summary_large_image",
    images: [defaultOgImage.url],
  },
  icons: {
    icon: [{ url: "/icon.svg", type: "image/svg+xml" }],
    apple: [{ url: imagePaths.logo }],
  },
  formatDetection: { telephone: true, email: true, address: false },
};

export const viewport: Viewport = {
  themeColor: "#073653",
  width: "device-width",
  initialScale: 1,
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-IN" className={`${displayFont.variable} ${bodyFont.variable}`}>
      <body className="flex min-h-screen flex-col">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-navy-800 focus:px-5 focus:py-3 focus:text-sm focus:font-semibold focus:text-white"
        >
          Skip to main content
        </a>

        <ScrollToTop />
        <Header />

        <main id="main-content" className="flex-1">
          {children}
        </main>

        <Footer />

        <JsonLd data={[schoolJsonLd(), websiteJsonLd()]} />
      </body>
    </html>
  );
}