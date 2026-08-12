"use client";

import Link from "next/link";
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
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const solid = scrolled || menuOpen;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background,box-shadow,color,border-color] duration-300 ${
        solid
          ? "border-b border-border bg-background/92 text-text shadow-[0_8px_28px_rgba(26,28,27,0.06)] backdrop-blur-md"
          : "border-b border-transparent bg-transparent text-inverse"
      }`}
    >
      <Container className="flex h-[var(--header-h)] items-center justify-between gap-3">
        <Link
          href="#inicio"
          className="focus-ring flex min-h-11 items-center gap-2.5 rounded-full pr-1"
        >
          <BrandLogo
            on={solid ? "light" : "dark"}
            size={32}
            className="h-8 w-8"
          />
          <span className="font-display text-[1.05rem] leading-none tracking-tight sm:text-lg">
            {site.shortName}
          </span>
        </Link>

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
            className="border-t border-border bg-background text-text lg:hidden"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <nav className="container-page flex flex-col py-3" aria-label="Móvil">
              {nav.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="focus-ring rounded-xl px-2 py-3 text-base"
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <a href={site.phoneHref} className="focus-ring rounded-xl px-2 py-3 text-text-muted">
                Llamar {site.phoneDisplay}
              </a>
              <Button
                className="mt-2"
                block
                onClick={() => {
                  setMenuOpen(false);
                  openBooking();
                }}
              >
                {hero.primaryCta}
              </Button>
            </nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
