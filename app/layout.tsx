import type { Metadata } from "next";
import type { ReactNode } from "react";
import Script from "next/script";
import { Providers } from "@/components/Providers";
import "@/index.css";

const siteUrl = "https://jothisoftwaresolutions.com";
const siteName = "Jothi Software Solutions";
const googleAnalyticsId = "G-C1VWS8HEK2";
const title = "Jothi Software Solutions | Digital Marketing Agency in Ambur";
const description =
  "Jothi Software Solutions is a digital marketing agency in Ambur, Tamil Nadu, offering SEO, social media marketing, SEM, website development, Meta ads, and content creation.";

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${siteUrl}/#localbusiness`,
  name: siteName,
  alternateName: [
    "Jothi Software Solution",
    "JothiSoftware",
    "Jothi Software",
    "jothisoftwaresolutions",
    "jothisoftwaresolution",
    "jothisoftware",
    "JSS Digital Marketing",
  ],
  url: siteUrl,
  telephone: "+91-89253-50147",
  email: "jssolution247@gmail.com",
  image: `${siteUrl}/og-image.jpg`,
  logo: `${siteUrl}/jsol.jpeg`,
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    streetAddress: "No.10, Bethesda Hospital Road",
    addressLocality: "Ambur",
    addressRegion: "Tamil Nadu",
    postalCode: "635802",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "12.7912",
    longitude: "78.7161",
  },
  description,
  foundingDate: "2015",
  sameAs: [
    "https://www.facebook.com/jothisoftwaresolutions",
    "https://www.instagram.com/jothisoftwaresolutions",
    "https://www.linkedin.com/company/jothisoftwaresolutions",
    "https://x.com/jothisoftwares",
    "https://www.youtube.com/@jothisoftwaresolutions",
  ],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "09:00",
      closes: "18:00",
    },
  ],
  areaServed: [
    { "@type": "City", name: "Ambur" },
    { "@type": "State", name: "Tamil Nadu" },
    { "@type": "Country", name: "India" },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Digital Marketing Services",
    itemListElement: [
      "SEO Optimization",
      "Social Media Marketing",
      "Search Engine Marketing",
      "Website Development",
      "Meta Ads Management",
      "Content Creation",
    ].map((name) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name,
      },
    })),
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "47",
    bestRating: "5",
    worstRating: "1"
  }
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": ["Organization", "ProfessionalService"],
  "@id": `${siteUrl}/#organization`,
  name: siteName,
  alternateName: ["Jothi Software Solution", "JothiSoftware", "Jothi Software", "JSS"],
  url: siteUrl,
  logo: `${siteUrl}/jsol.jpeg`,
  image: `${siteUrl}/og-image.jpg`,
  description,
  foundingDate: "2015",
  numberOfEmployees: {
    "@type": "QuantitativeValue",
    minValue: 10,
    maxValue: 50,
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+91-89253-50147",
    contactType: "customer service",
    email: "jssolution247@gmail.com",
    availableLanguage: ["English", "Tamil"],
    areaServed: "IN",
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: "No.10, Bethesda Hospital Road",
    addressLocality: "Ambur",
    addressRegion: "Tamil Nadu",
    postalCode: "635802",
    addressCountry: "IN",
  },
  sameAs: [
    "https://www.facebook.com/jothisoftwaresolutions",
    "https://www.instagram.com/jothisoftwaresolutions",
    "https://www.linkedin.com/company/jothisoftwaresolutions",
    "https://x.com/jothisoftwares",
    "https://www.youtube.com/@jothisoftwaresolutions",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Digital Marketing & Software Services",
    itemListElement: [
      "SEO Optimization",
      "Social Media Marketing",
      "Search Engine Marketing",
      "Website Development",
      "Meta Ads Management",
      "Content Creation",
    ].map((name) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name,
        provider: { "@id": `${siteUrl}/#organization` },
      },
    })),
  },
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${siteUrl}/#website`,
  name: siteName,
  alternateName: ["Jothi Software Solution", "JothiSoftware", "jothisoftwaresolutions.com"],
  url: siteUrl,
  publisher: {
    "@id": `${siteUrl}/#organization`,
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: `${siteUrl}/`,
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is Jothi Software Solutions?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Jothi Software Solutions is a digital marketing agency based in Ambur, Tamil Nadu, specializing in SEO, social media marketing, SEM, website development, Meta ads management, and content creation.",
      },
    },
    {
      "@type": "Question",
      name: "Where is Jothi Software Solutions located?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Jothi Software Solutions is located at No.10, Bethesda Hospital Road, Ambur, Tamil Nadu 635802, India.",
      },
    },
    {
      "@type": "Question",
      name: "How can I contact Jothi Software Solutions?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You can contact Jothi Software Solutions by calling +91-89253-50147 or emailing jssolution247@gmail.com.",
      },
    },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  authors: [{ name: siteName }],
  applicationName: siteName,
  keywords: [
    "Jothi Software Solutions",
    "Jothi Software Solution",
    "JothiSoftware",
    "jothisoftwaresolutions",
    "digital marketing agency Ambur",
    "SEO services Ambur",
    "website development Ambur",
    "social media marketing Ambur",
  ],
  alternates: {
    canonical: "/",
    languages: {
      "en-IN": "/",
      en: "/",
      "x-default": "/",
    },
  },
  robots: {
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
    title,
    description,
    type: "website",
    url: siteUrl,
    siteName,
    locale: "en_IN",
    images: [
      {
        url: `${siteUrl}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "Jothi Software Solutions digital marketing agency in Ambur, Tamil Nadu",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@JothiSoftware",
    creator: "@JothiSoftware",
    title,
    description,
    images: [`${siteUrl}/og-image.jpg`],
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon-192.png", type: "image/png", sizes: "192x192" },
      { url: "/icon-512.png", type: "image/png", sizes: "512x512" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
  other: {
    "geo.region": "IN-TN",
    "geo.placename": "Ambur",
    "geo.position": "12.7912;78.7161",
    ICBM: "12.7912, 78.7161",
  },
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en-IN">
      <body>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${googleAnalyticsId}`}
          strategy="lazyOnload"
        />
        <Script
          id="google-analytics"
          strategy="lazyOnload"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${googleAnalyticsId}');
            `,
          }}
        />
        <Providers>{children}</Providers>
        {[localBusinessSchema, organizationSchema, websiteSchema, breadcrumbSchema, faqSchema].map((schema, index) => (
          <Script
            key={index}
            id={`schema-${index}`}
            type="application/ld+json"
            strategy="beforeInteractive"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
          />
        ))}
      </body>
    </html>
  );
}
