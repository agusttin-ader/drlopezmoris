"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { hero, nav, site } from "@/lib/content";
import { BrandLogo } from "./BrandLogo";
import { useBooking } from "./BookingProvider";
import { Button } from "./ui/Button";
import { Container } from "./ui/Container";

export function Header() {
  const { openBooking } = useBooking();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;

    const scrollY = window.scrollY;
    const { style } = document.body;
    const previous = {
      position: style.position,
      top: style.top,
      left: style.left,
      right: style.right,
      overflow: style.overflow,
      width: style.width,
    };

    style.position = "fixed";
    style.top = `-${scrollY}px`;
    style.left = "0";
    style.right = "0";
    style.overflow = "hidden";
    style.width = "100%";

    return () => {
      style.position = previous.position;
      style.top = previous.top;
      style.left = previous.left;
      style.right = previous.right;
      style.overflow = previous.overflow;
      style.width = previous.width;
      window.scrollTo(0, scrollY);
    };
  }, [menuOpen]);

  const solid = scrolled || menuOpen;

  const goToInicio = () => {
    setMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
    if (window.location.hash !== "#inicio") {
      window.history.replaceState(null, "", "#inicio");
    }
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background,box-shadow,color,border-color] duration-300 ${
        menuOpen ? "bottom-0" : ""
      } ${
        solid
          ? "border-b border-border bg-background/92 text-text shadow-[0_8px_28px_rgba(26,28,27,0.06)] backdrop-blur-md"
          : "border-b border-transparent bg-transparent text-inverse"
      }`}
    >
      <Container className="relative z-10 flex h-[var(--header-h)] items-center justify-between gap-3">
        <a
          href="#inicio"
          className="focus-ring flex min-h-11 items-center gap-2.5 rounded-full pr-1"
          onClick={(e) => {
            e.preventDefault();
            goToInicio();
          }}
        >
          <BrandLogo
            on={solid ? "light" : "dark"}
            size={32}
            className="h-8 w-8"
          />
          <span className="font-display text-[1.05rem] leading-none tracking-tight sm:text-lg">
            {site.shortName}
          </span>
        </a>

        <nav className="hidden items-center gap-0.5 lg:flex" aria-label="Principal">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`focus-ring rounded-full px-3 py-2 text-sm transition-colors ${
                solid
                  ? "text-text-muted hover:text-text"
                  : "text-inverse-muted hover:text-inverse"
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={site.phoneHref}
            className={`focus-ring hidden min-h-11 items-center rounded-full px-2 text-sm font-medium lg:inline-flex ${
              solid ? "text-text-muted hover:text-text" : "text-inverse-muted hover:text-inverse"
            }`}
            aria-label={`Llamar al ${site.phoneDisplay}`}
          >
            {site.phoneDisplay}
          </a>
          <Button
            onClick={openBooking}
            variant={solid ? "primary" : "on-dark"}
            className="hidden md:inline-flex"
          >
            {hero.primaryCta}
          </Button>
          <button
            type="button"
            className={`focus-ring inline-flex h-11 w-11 items-center justify-center rounded-full border lg:hidden ${
              solid
                ? "border-border bg-surface/80 text-text"
                : "border-white/30 bg-white/10 text-inverse"
            }`}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
            onClick={() => setMenuOpen((v) => !v)}
          >
            <span aria-hidden className="relative block h-3.5 w-4">
              <span
                className={`absolute left-0 top-0 h-px w-full bg-current transition ${
                  menuOpen ? "top-1.5 rotate-45" : ""
                }`}
              />
              <span
                className={`absolute left-0 top-1.5 h-px w-full bg-current transition ${
                  menuOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`absolute left-0 top-3 h-px w-full bg-current transition ${
                  menuOpen ? "top-1.5 -rotate-45" : ""
                }`}
              />
            </span>
          </button>
        </div>
      </Container>

      <AnimatePresence>
        {menuOpen ? (
          <motion.div
            id="mobile-nav"
            className="absolute inset-x-0 top-[var(--header-h)] bottom-0 flex flex-col overflow-hidden overscroll-contain border-t border-border bg-background text-text lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <div
              className="pointer-events-none absolute inset-0"
              aria-hidden
              style={{
                background:
                  "radial-gradient(ellipse 90% 55% at 100% 0%, color-mix(in srgb, var(--accent) 10%, transparent), transparent 58%), linear-gradient(to bottom, transparent 55%, color-mix(in srgb, var(--surface-muted) 70%, transparent))",
              }}
            />
            <nav
              className="container-page relative flex min-h-0 flex-1 flex-col py-5 pb-[max(1.25rem,env(safe-area-inset-bottom))]"
              aria-label="Móvil"
            >
              <p className="type-eyebrow mb-5">{hero.eyebrow}</p>

              <div className="flex min-h-0 flex-1 flex-col justify-center gap-1">
                {nav.map((item, i) => (
                  <motion.a
                    key={item.href}
                    href={item.href}
                    className="focus-ring block rounded-sm py-2.5 font-display text-[clamp(1.85rem,8vw,2.45rem)] leading-[1.05] tracking-[-0.02em] text-text"
                    onClick={() => setMenuOpen(false)}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.28, delay: 0.04 + i * 0.04, ease: [0.22, 1, 0.36, 1] }}
                  >
                    {item.label}
                  </motion.a>
                ))}
              </div>

              <div className="mt-6 border-t border-border pt-5">
                <p className="type-small text-text-faint">{site.title}</p>
                <div className="mt-4 flex flex-col gap-2.5">
                  <a
                    href={site.phoneHref}
                    className="focus-ring type-body text-text-muted underline-offset-4 hover:text-text hover:underline"
                  >
                    {site.phoneDisplay}
                  </a>
                  <a
                    href={site.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="focus-ring type-body text-text-muted underline-offset-4 hover:text-text hover:underline"
                  >
                    WhatsApp
                  </a>
                  <Button
                    className="mt-1"
                    block
                    onClick={() => {
                      setMenuOpen(false);
                      openBooking();
                    }}
                  >
                    {hero.primaryCta}
                  </Button>
                </div>
              </div>
            </nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
