import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Figtree } from "next/font/google";
import { BookingProvider } from "@/components/BookingProvider";
import { BookingSheet } from "@/components/BookingSheet";
import { site } from "@/lib/content";
import "./globals.css";

const display = Cormorant_Garamond({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
  preload: true,
});

const body = Figtree({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} · ${site.title}`,
    template: `%s · ${site.shortName}`,
  },
  description: site.description,
  keywords: [
    "rinología",
    "rinoplastia",
    "otorrinolaringólogo",
    "cirugía nasal",
    "Buenos Aires",
    "CEMIC",
    "Dr. Carlos López Moris",
  ],
  authors: [{ name: site.name }],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: site.url,
    siteName: site.shortName,
    title: `${site.name} · ${site.title}`,
    description: site.description,
    images: [
      {
        url: site.ogImage,
        width: 1200,
        height: 630,
        alt: site.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} · ${site.title}`,
    description: site.description,
    images: [site.ogImage],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#1a1c1b",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="es-AR" className={`${display.variable} ${body.variable} h-full`}>
      <body className="min-h-full antialiased">
        <BookingProvider>
          {children}
          <BookingSheet />
        </BookingProvider>
      </body>
    </html>
  );
}
