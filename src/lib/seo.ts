import type { Metadata } from "next";
import {
  about,
  faqs,
  locations,
  services,
  site,
} from "@/i18n/messages/es";

const SITE_ID = `${site.url}/#website`;
const WEBPAGE_ID = `${site.url}/#webpage`;
const PHYSICIAN_ID = `${site.url}/#physician`;
const CLINIC_ID = `${site.url}/#consultorio`;
const HOSPITAL_ID = `${site.url}/#cemic`;

/** Palabras clave principales y long-tail (Argentina). */
export const seoKeywords = [
  "Dr. Carlos López Moris",
  "Carlos López Moris",
  "López Moris rinología",
  "otorrinolaringólogo Buenos Aires",
  "otorrino Buenos Aires",
  "otorrino Palermo",
  "rinoplastia Buenos Aires",
  "rinoplastia funcional",
  "rinoplastia estética",
  "cirugía de nariz Buenos Aires",
  "rinología",
  "cirugía nasal",
  "septoplastia Buenos Aires",
  "desvío de tabique",
  "respirar mejor nariz",
  "sinusitis cirugía",
  "CEMIC otorrinolaringología",
  "consultorio rinología Palermo",
  "rinoplastia CEMIC",
  "cirugía facial Buenos Aires",
  "reoperación rinoplastia",
  "MN 133953",
] as const;

export const seoTitle =
  "Dr. Carlos López Moris | Otorrinolaringólogo · Rinoplastia y rinología en Buenos Aires";

export const seoDescription =
  "Otorrinolaringólogo especialista en rinología y rinoplastia en Buenos Aires. Cirugía nasal funcional y estética, respiración y reoperaciones. Turnos en CEMIC y consultorio en Palermo. MN 133953.";

export function absoluteUrl(path = "/"): string {
  return new URL(path, site.url).toString();
}

const consultorio = locations[1] ?? locations[0];
const hospital = locations[0];

const geo = {
  consultorio: { latitude: -34.5789, longitude: -58.4184 },
  cemic: { latitude: -34.5872, longitude: -58.4015 },
} as const;

/** Reseñas agregadas visibles en la sección de opiniones (Google). */
const googleAggregateRating = {
  "@type": "AggregateRating",
  ratingValue: "4.9",
  reviewCount: "229",
  bestRating: "5",
  worstRating: "1",
};

function openingHoursFromLabel(hours: string) {
  return {
    "@type": "OpeningHoursSpecification",
    description: hours,
  };
}

function medicalClinicNode() {
  return {
    "@type": "MedicalClinic",
    "@id": CLINIC_ID,
    name: consultorio.name,
    description: "Consultorio de rinología y cirugía nasal en Palermo, Buenos Aires.",
    url: site.url,
    telephone: site.phoneHref.replace("tel:", ""),
    email: site.email,
    image: absoluteUrl(about.images[0].src),
    address: {
      "@type": "PostalAddress",
      streetAddress: 'Pereyra Lucena 2535, Pb "A"',
      addressLocality: "Palermo",
      addressRegion: "Ciudad Autónoma de Buenos Aires",
      postalCode: "1425",
      addressCountry: "AR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: geo.consultorio.latitude,
      longitude: geo.consultorio.longitude,
    },
    openingHoursSpecification: [openingHoursFromLabel(consultorio.hours)],
    medicalSpecialty: ["Otolaryngology", "Rhinology"],
    parentOrganization: { "@id": PHYSICIAN_ID },
    aggregateRating: googleAggregateRating,
    sameAs: [site.googleReviews, site.instagram],
  };
}

function hospitalAffiliation() {
  return {
    "@type": "Hospital",
    "@id": HOSPITAL_ID,
    name: hospital.name,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Av. Las Heras 2900",
      addressLocality: "Palermo",
      addressRegion: "Ciudad Autónoma de Buenos Aires",
      addressCountry: "AR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: geo.cemic.latitude,
      longitude: geo.cemic.longitude,
    },
    openingHoursSpecification: [openingHoursFromLabel(hospital.hours)],
  };
}

function physicianNode() {
  return {
    "@type": "Physician",
    "@id": PHYSICIAN_ID,
    name: site.name,
    alternateName: ["Dr. López Moris", "Carlos Benjamín López Moris"],
    description: seoDescription,
    url: site.url,
    image: absoluteUrl(about.images[0].src),
    telephone: site.phoneHref.replace("tel:", ""),
    email: site.email,
    identifier: {
      "@type": "PropertyValue",
      name: "Matrícula Nacional",
      value: site.matricula,
    },
    medicalSpecialty: [
      "Otolaryngology",
      "Rhinology",
      "Facial plastic surgery",
      "Sleep medicine",
    ],
    knowsLanguage: ["es", "en", "pt", "ru"],
    worksFor: [{ "@id": HOSPITAL_ID }, { "@id": CLINIC_ID }],
    hospitalAffiliation: { "@id": HOSPITAL_ID },
    hasOccupation: {
      "@type": "Occupation",
      name: "Otorrinolaringólogo · Especialista en rinología",
      occupationalCategory: "29-1240",
    },
    areaServed: {
      "@type": "City",
      name: "Buenos Aires",
      containedInPlace: { "@type": "Country", name: "Argentina" },
    },
    aggregateRating: googleAggregateRating,
    sameAs: [site.instagram, site.linkedin, site.googleReviews],
  };
}

function websiteNode() {
  return {
    "@type": "WebSite",
    "@id": SITE_ID,
    url: site.url,
    name: site.shortName,
    description: seoDescription,
    inLanguage: "es-AR",
    publisher: { "@id": PHYSICIAN_ID },
  };
}

function webPageNode() {
  return {
    "@type": "WebPage",
    "@id": WEBPAGE_ID,
    url: site.url,
    name: seoTitle,
    description: seoDescription,
    isPartOf: { "@id": SITE_ID },
    about: { "@id": PHYSICIAN_ID },
    primaryImageOfPage: {
      "@type": "ImageObject",
      url: absoluteUrl(site.ogImage),
    },
    inLanguage: "es-AR",
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: [".hero-headline", ".hero-support"],
    },
  };
}

function faqNode() {
  return {
    "@type": "FAQPage",
    "@id": `${site.url}/#faq`,
    mainEntity: faqs.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

function servicesListNode() {
  return {
    "@type": "ItemList",
    "@id": `${site.url}/#servicios`,
    name: "Servicios de rinología y cirugía nasal",
    itemListElement: services.map((service, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "MedicalProcedure",
        name: service.title,
        description: service.description,
        url: `${site.url}/#${service.id}`,
      },
    })),
  };
}

function breadcrumbNode() {
  return {
    "@type": "BreadcrumbList",
    "@id": `${site.url}/#breadcrumb`,
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Inicio",
        item: site.url,
      },
    ],
  };
}

/** Grafo JSON-LD para la home (Google, Bing, rich results). */
export function buildHomeJsonLd(): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@graph": [
      websiteNode(),
      webPageNode(),
      physicianNode(),
      hospitalAffiliation(),
      medicalClinicNode(),
      faqNode(),
      servicesListNode(),
      breadcrumbNode(),
    ],
  };
}

export function buildHomeMetadata(): Metadata {
  const ogImage = absoluteUrl(site.ogImage);
  const googleVerification = process.env.GOOGLE_SITE_VERIFICATION;

  return {
    metadataBase: new URL(site.url),
    title: {
      default: seoTitle,
      template: `%s · ${site.shortName}`,
    },
    description: seoDescription,
    applicationName: site.shortName,
    category: "health",
    keywords: [...seoKeywords],
    authors: [{ name: site.name, url: site.url }],
    creator: site.name,
    publisher: site.name,
    formatDetection: {
      email: true,
      address: true,
      telephone: true,
    },
    alternates: {
      canonical: "/",
      languages: {
        "es-AR": "/",
        "x-default": "/",
      },
    },
    openGraph: {
      type: "website",
      locale: "es_AR",
      alternateLocale: ["en_US", "pt_BR", "ru_RU"],
      url: site.url,
      siteName: site.shortName,
      title: seoTitle,
      description: seoDescription,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: `${site.name} — rinoplastia y rinología en Buenos Aires`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: seoTitle,
      description: seoDescription,
      images: [ogImage],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large" as const,
        "max-snippet": -1,
      },
    },
    icons: {
      icon: [
        { url: "/icon-dark.png", media: "(prefers-color-scheme: light)" },
        { url: "/icon-light.png", media: "(prefers-color-scheme: dark)" },
      ],
      apple: "/apple-icon.png",
    },
    verification: googleVerification
      ? { google: googleVerification }
      : undefined,
    other: {
      "geo.region": "AR-C",
      "geo.placename": "Buenos Aires",
      "geo.position": `${geo.consultorio.latitude};${geo.consultorio.longitude}`,
      ICBM: `${geo.consultorio.latitude}, ${geo.consultorio.longitude}`,
    },
  };
}
