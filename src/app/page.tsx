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
import { buildHomeJsonLd } from "@/lib/seo";

export default function Home() {
  const jsonLd = buildHomeJsonLd();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main id="contenido-principal" className="site-main flex-1">
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
