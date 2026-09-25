import { About } from "@/components/About";
import { Diplomas } from "@/components/Diplomas";
import { Contact } from "@/components/Contact";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";
import { Gallery } from "@/components/Gallery";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { Testimonials } from "@/components/Testimonials";
import { Timeline } from "@/components/Timeline";
import { TrustStrip } from "@/components/TrustStrip";
import { about, locations, site } from "@/lib/content";

export default function Home() {
  const primaryLocation = locations[1] ?? locations[0];
  const hospital = locations[0];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Physician",
    name: site.name,
    description: site.description,
    url: site.url,
    telephone: site.phoneHref.replace("tel:", ""),
    email: site.email,
    image: `${site.url}${about.images[0].src}`,
    medicalSpecialty: ["Otolaryngology", "Rhinology", "Facial Plastic Surgery"],
    address: {
      "@type": "PostalAddress",
      streetAddress: primaryLocation.address.split(",")[0]?.trim() ?? primaryLocation.address,
      addressLocality: "Buenos Aires",
      addressRegion: "CABA",
      addressCountry: "AR",
    },
    worksFor: {
      "@type": "Hospital",
      name: hospital.name,
    },
    sameAs: [site.instagram, site.linkedin],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main className="site-main flex-1">
        <Hero />
        <TrustStrip />
        <About />
        <Services />
        <Timeline />
        <Diplomas />
        <Gallery />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
