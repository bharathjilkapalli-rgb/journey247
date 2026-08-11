import type { Metadata } from "next";
import { Toaster } from "sonner";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://hhgoa.com"),
  title: "Hacker House Goa 2026 — The Road to 247 | Official Builder Clearance",
  description:
    "Selects 247 top builders for a 4-day beachfront residency in Goa, India (28–31 Oct 2026). Ship real products, win grants, and pitch live to top VCs.",
  keywords: [
    "Hacker House Goa",
    "Road to 247",
    "Goa Hackathon 2026",
    "Builder Residency",
    "2:47PM STUDIO",
    "AI Hackathon India",
    "Web3 Residency Goa",
  ],
  authors: [{ name: "2:47PM STUDIO", url: "https://hhgoa.com" }],
  alternates: {
    canonical: "https://hhgoa.com/",
  },
  openGraph: {
    title: "Hacker House Goa 2026 — The Road to 247 | Official Builder Clearance",
    description:
      "247 Builders. 4 Days. One Beachfront Residency. Earn your official Builder Clearance and start your journey to Goa.",
    url: "https://hhgoa.com/",
    siteName: "Hacker House Goa 2026",
    images: [
      {
        url: "https://hhgoa.com/goa-beach-bg.jpg",
        width: 1200,
        height: 630,
        alt: "Hacker House Goa 2026 Official Beachfront Hero",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hacker House Goa 2026 — The Road to 247",
    description:
      "Selects 247 top builders for a 4-day beachfront residency in Goa (28–31 Oct 2026). Earn your clearance now.",
    images: ["https://hhgoa.com/goa-beach-bg.jpg"],
    creator: "@247pmstudio",
  },
};

const eventSchemaJsonLd = {
  "@context": "https://schema.org",
  "@type": "Event",
  name: "Hacker House Goa 2026",
  description:
    "A premier 4-day beachfront builder residency selecting 247 top engineers, designers, and founders to ship market-ready products in Goa, India.",
  startDate: "2026-10-28T09:00:00+05:30",
  endDate: "2026-10-31T20:00:00+05:30",
  eventStatus: "https://schema.org/EventScheduled",
  eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
  location: {
    "@type": "Place",
    name: "Luxury Beach Resort & Residency Grounds",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Goa",
      addressCountry: "IN",
    },
  },
  image: ["https://hhgoa.com/goa-beach-bg.jpg"],
  organizer: {
    "@type": "Organization",
    name: "2:47PM STUDIO",
    url: "https://hhgoa.com",
  },
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "INR",
    availability: "https://schema.org/InStock",
    validFrom: "2026-08-01T00:00:00+05:30",
    url: "https://hhgoa.com/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(eventSchemaJsonLd) }}
        />
      </head>
      <body className="bg-forest-950 text-cream-50 antialiased min-h-screen selection:bg-hh-pink selection:text-white">
        {children}
        <Toaster
          position="bottom-center"
          toastOptions={{
            style: {
              background: "#0D5C3A",
              color: "#FAF7F2",
              border: "1px solid rgba(250, 204, 21, 0.3)",
              fontFamily: "var(--font-sans)",
            },
          }}
        />
      </body>
    </html>
  );
}
