import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { site } from "@/content/site";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const fraunces = localFont({
  src: [
    { path: "../public/fonts/fraunces-latin-400-normal.woff2", weight: "400" },
    { path: "../public/fonts/fraunces-latin-500-normal.woff2", weight: "500" },
    { path: "../public/fonts/fraunces-latin-600-normal.woff2", weight: "600" },
    { path: "../public/fonts/fraunces-latin-700-normal.woff2", weight: "700" },
  ],
  variable: "--font-fraunces",
  display: "swap",
});

const inter = localFont({
  src: [
    { path: "../public/fonts/inter-latin-400-normal.woff2", weight: "400" },
    { path: "../public/fonts/inter-latin-500-normal.woff2", weight: "500" },
    { path: "../public/fonts/inter-latin-600-normal.woff2", weight: "600" },
  ],
  variable: "--font-inter",
  display: "swap",
});

const title = `${site.name} — Hair studio in ${site.suburb}, ${site.city}`;
const description = `${site.name} is a boutique one-chair hair studio in ${site.suburb}. Cutting, colour, balayage and treatments by ${site.stylist}.`;

export const metadata: Metadata = {
  title: { default: title, template: `%s | ${site.name}` },
  description,
  openGraph: { title, description, type: "website", locale: "en_AU" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "HairSalon",
  name: site.name,
  description,
  telephone: site.phoneE164,
  email: site.email,
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    streetAddress: site.address.street,
    addressLocality: site.suburb,
    addressRegion: "NSW",
    postalCode: "2042",
    addressCountry: "AU",
  },
  openingHoursSpecification: site.hours.map((h) => ({
    "@type": "OpeningHoursSpecification",
    dayOfWeek: h.day,
    opens: h.open,
    closes: h.close,
  })),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-AU" className={`${fraunces.variable} ${inter.variable}`}>
      <body>
        <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-clay focus:px-4 focus:py-2 focus:text-shell">
          Skip to content
        </a>
        <Nav />
        {children}
        <Footer />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </body>
    </html>
  );
}
