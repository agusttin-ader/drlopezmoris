import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Figtree } from "next/font/google";
import { BookingProvider } from "@/components/BookingProvider";
import { BookingSheet } from "@/components/BookingSheet";
import { LocaleProvider } from "@/i18n/LocaleProvider";
import { ScrollToTopOnReload } from "@/components/ScrollToTopOnReload";
import { buildHomeMetadata } from "@/lib/seo";
import "./globals.css";

const display = Cormorant_Garamond({
  variable: "--font-display",
  subsets: ["latin", "cyrillic"],
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

export const metadata: Metadata = buildHomeMetadata();

export const viewport: Viewport = {
  themeColor: "#1a1c1b",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="es-AR" className={`${display.variable} ${body.variable} h-full`}>
      <body className="min-h-full antialiased">
        <LocaleProvider>
          <ScrollToTopOnReload />
          <BookingProvider>
            {children}
            <BookingSheet />
          </BookingProvider>
        </LocaleProvider>
      </body>
    </html>
  );
}
