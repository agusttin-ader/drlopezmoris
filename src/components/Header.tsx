"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useMessages } from "@/i18n/LocaleProvider";
import { BrandLogo } from "./BrandLogo";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { Container } from "./ui/Container";

export function Header() {
  const { site, nav, hero, ui } = useMessages();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        setScrolled(window.scrollY > 20);
        ticking = false;
      });
    };
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
  const logoOn = menuOpen ? "dark" : solid ? "light" : "dark";
  const langOnDark = menuOpen || !solid;
  const menuHeaderTone = menuOpen;

  const goToInicio = () => {
    setMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
    if (window.location.hash !== "#inicio") {
      window.history.replaceState(null, "", "#inicio");
    }
  };

  const closeMenu = () => setMenuOpen(false);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background,box-shadow,color,border-color] duration-300 ${
        menuOpen ? "bottom-0 max-lg:bg-deep" : ""
      } ${
        menuHeaderTone
          ? "max-lg:border-white/10 max-lg:bg-deep max-lg:text-inverse max-lg:shadow-none max-lg:backdrop-blur-none"
          : solid
            ? "border-b border-border bg-background/92 text-text shadow-[0_8px_28px_rgba(26,28,27,0.06)] backdrop-blur-md"
            : "border-b border-transparent bg-transparent text-inverse"
      }`}
    >
      <Container className="relative z-10 flex h-[var(--header-h)] items-center justify-between gap-2 sm:gap-3">
        <a
          href="#inicio"
          className="focus-ring flex min-h-11 min-w-0 shrink items-center gap-2 rounded-full pr-1 sm:gap-2.5 lg:gap-2.5"
          onClick={(e) => {
            e.preventDefault();
            goToInicio();
          }}
        >
          <BrandLogo on={logoOn} size={36} className="h-9 w-9 lg:h-8 lg:w-8" />
          <span className="hidden truncate font-display text-[1rem] leading-none tracking-tight lg:inline lg:text-base xl:text-lg">
            {site.shortName}
          </span>
        </a>

        <nav
          className="hidden min-w-0 items-center gap-0.5 lg:flex xl:gap-1 2xl:gap-1.5"
          aria-label="Principal"
        >
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`focus-ring rounded-full px-2 py-2 text-[0.8125rem] transition-colors xl:px-3.5 xl:text-sm 2xl:text-[0.9375rem] ${
                solid
                  ? "text-text-muted hover:text-text"
                  : "text-inverse-muted hover:text-inverse"
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="header-actions">
          <LanguageSwitcher onDark={langOnDark} />
          <a
            href="#contacto"
            className={`focus-ring header-action !hidden lg:!inline-flex ${
              solid ? "header-action--cta-on-light" : "header-action--cta-on-dark"
            }`}
          >
            {hero.headerCta}
          </a>
          <button
            type="button"
            className={`header-menu-toggle focus-ring inline-flex h-11 w-11 items-center justify-center lg:hidden ${
              menuHeaderTone ? "text-inverse" : solid ? "text-text" : "text-inverse"
            }`}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            aria-label={menuOpen ? ui.menuClose : ui.menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
          >
            <span aria-hidden className="relative block h-[0.875rem] w-[1.35rem]">
              <span
                className={`absolute inset-x-0 top-0 h-[2.5px] rounded-full bg-current transition-transform duration-200 ${
                  menuOpen ? "top-1/2 -translate-y-1/2 rotate-45" : ""
                }`}
              />
              <span
                className={`absolute inset-x-0 top-1/2 h-[2.5px] -translate-y-1/2 rounded-full bg-current transition-opacity duration-200 ${
                  menuOpen ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`absolute inset-x-0 bottom-0 h-[2.5px] rounded-full bg-current transition-transform duration-200 ${
                  menuOpen ? "bottom-1/2 translate-y-1/2 -rotate-45" : ""
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
            className="mobile-nav-panel absolute inset-x-0 top-[var(--header-h)] bottom-0 flex flex-col overflow-y-auto overscroll-contain lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            <nav className="mobile-nav container-page" aria-label={ui.mobileNav}>
              <p className="mobile-nav__label">{ui.mobileMenuLabel}</p>

              <ul className="mobile-nav__list">
                {nav.map((item, i) => (
                  <motion.li
                    key={item.href}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.38,
                      delay: 0.04 + i * 0.045,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  >
                    <a
                      href={item.href}
                      className="mobile-nav__link focus-ring"
                      onClick={closeMenu}
                    >
                      {item.label}
                    </a>
                  </motion.li>
                ))}
              </ul>

              <div className="mobile-nav__brand">
                <BrandLogo on="dark" size={56} className="h-14 w-14" />
                <p className="mobile-nav__brand-name">{site.shortName}</p>
              </div>
            </nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
