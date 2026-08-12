"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { hero, site } from "@/lib/content";
import { useBooking } from "./BookingProvider";
import { Button, LinkButton } from "./ui/Button";

export function StickyCTA() {
  const { openBooking } = useBooking();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const hero = document.getElementById("inicio");
      const contact = document.getElementById("contacto");
      const threshold = hero ? hero.offsetHeight * 0.38 : 280;
      const nearContact =
        contact != null &&
        contact.getBoundingClientRect().top < window.innerHeight * 0.55;
      setVisible(window.scrollY > threshold && !nearContact);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible ? (
        <motion.div
          className="sticky-cta-shell fixed inset-x-0 bottom-0 z-40 border-t border-border/70 bg-background/96 p-3 backdrop-blur-md md:hidden"
          style={{ paddingBottom: "max(0.75rem, env(safe-area-inset-bottom))" }}
          initial={{ y: "110%" }}
          animate={{ y: 0 }}
          exit={{ y: "110%" }}
          transition={{ type: "spring", damping: 26, stiffness: 320 }}
        >
          <div className="mx-auto flex max-w-lg gap-2">
            <LinkButton
              href={site.phoneHref}
              variant="secondary"
              className="flex-1 px-3"
              ariaLabel={`Llamar al ${site.phoneDisplay}`}
            >
              Llamar
            </LinkButton>
            <Button onClick={openBooking} className="flex-[1.55]">
              {hero.primaryCta}
            </Button>
            <LinkButton
              href={site.whatsappUrl}
              variant="whatsapp"
              external
              className="px-3.5"
              ariaLabel="Abrir WhatsApp"
            >
              <WhatsAppIcon />
            </LinkButton>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}

function WhatsAppIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M20.52 3.48A11.86 11.86 0 0 0 12.06 0C5.5 0 .16 5.34.16 11.9c0 2.1.55 4.15 1.6 5.96L0 24l6.3-1.65a11.86 11.86 0 0 0 5.75 1.47h.01c6.55 0 11.9-5.34 11.9-11.9 0-3.18-1.24-6.17-3.44-8.44Zm-8.46 18.3h-.01a9.87 9.87 0 0 1-5.03-1.38l-.36-.21-3.74.98 1-3.64-.24-.37a9.86 9.86 0 0 1-1.51-5.26c0-5.44 4.43-9.87 9.88-9.87 2.64 0 5.12 1.03 6.98 2.9a9.82 9.82 0 0 1 2.9 6.98c0 5.45-4.43 9.87-9.87 9.87Zm5.42-7.4c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.64.07-.3-.15-1.25-.46-2.38-1.47-.88-.78-1.47-1.75-1.64-2.04-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.61-.92-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.07 2.87 1.22 3.07.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.63.71.23 1.36.2 1.87.12.57-.09 1.76-.72 2.01-1.41.25-.7.25-1.29.17-1.41-.07-.13-.27-.2-.57-.35Z" />
    </svg>
  );
}
