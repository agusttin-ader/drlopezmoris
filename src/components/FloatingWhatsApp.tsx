"use client";

import { useEffect, useState } from "react";
import { WhatsAppIcon } from "./icons/WhatsAppIcon";
import { site } from "@/lib/content";

export function FloatingWhatsApp() {
  const [aboveFooter, setAboveFooter] = useState(false);

  useEffect(() => {
    const footerCredits = document.getElementById("footer-credits");
    if (!footerCredits) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setAboveFooter(entry.isIntersecting);
      },
      { threshold: 0 },
    );

    observer.observe(footerCredits);
    return () => observer.disconnect();
  }, []);

  return (
    <a
      href={site.whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`whatsapp-fab whatsapp-fab--enter focus-ring ${aboveFooter ? "whatsapp-fab--above-footer" : ""}`}
      aria-label="Escribinos por WhatsApp"
    >
      <WhatsAppIcon size={26} />
    </a>
  );
}
