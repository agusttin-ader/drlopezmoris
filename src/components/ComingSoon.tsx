"use client";

import { motion, useReducedMotion } from "framer-motion";
import { BrandLogo } from "./BrandLogo";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { useMessages } from "@/i18n/LocaleProvider";

const ease = [0.22, 1, 0.36, 1] as const;

export function ComingSoon() {
  const { comingSoon, site } = useMessages();
  const reduce = useReducedMotion();

  return (
    <div className="coming-soon relative flex min-h-[100dvh] flex-col overflow-hidden bg-deep text-inverse">
      <div className="coming-soon__aurora" aria-hidden />
      <div className="coming-soon__grain" aria-hidden />

      {!reduce && (
        <>
          <motion.span
            className="coming-soon__orb coming-soon__orb--a"
            aria-hidden
            animate={{ x: [0, 28, -12, 0], y: [0, -20, 14, 0], scale: [1, 1.08, 0.96, 1] }}
            transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.span
            className="coming-soon__orb coming-soon__orb--b"
            aria-hidden
            animate={{ x: [0, -24, 16, 0], y: [0, 18, -10, 0], scale: [1, 0.94, 1.06, 1] }}
            transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
          />
        </>
      )}

      <header className="relative z-10 flex items-center justify-between px-[var(--gutter)] pt-6 sm:pt-8">
        <div className="flex items-center gap-3">
          <BrandLogo on="dark" size={40} />
          <span className="font-display text-lg tracking-[-0.02em] text-inverse-muted sm:text-xl">
            {site.shortName}
          </span>
        </div>
        <LanguageSwitcher onDark />
      </header>

      <main className="relative z-10 flex flex-1 flex-col items-center justify-center px-[var(--gutter)] pb-16 pt-10 text-center">
        <motion.p
          className="type-eyebrow text-inverse-muted"
          initial={reduce ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease }}
        >
          <span className="coming-soon__eyebrow-mark" aria-hidden />
          {comingSoon.eyebrow}
        </motion.p>

        <motion.h1
          className="mt-6 font-display text-[clamp(2.75rem,12vw,5.5rem)] leading-[0.95] tracking-[var(--tracking-display)]"
          initial={reduce ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.1, ease }}
        >
          {comingSoon.title}
        </motion.h1>

        <motion.p
          className="mt-6 max-w-md text-pretty text-[length:var(--fs-body)] leading-[var(--lh-body)] text-inverse-muted sm:max-w-xl"
          initial={reduce ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.22, ease }}
        >
          {comingSoon.subtitle}
        </motion.p>

        <motion.div
          className="coming-soon__shimmer mt-10 h-px w-full max-w-xs sm:max-w-sm"
          aria-hidden
          initial={reduce ? false : { opacity: 0, scaleX: 0.6 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 1, delay: 0.35, ease }}
        />

        <motion.p
          className="mt-8 text-sm text-inverse-muted"
          initial={reduce ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.45 }}
        >
          {comingSoon.hint}
        </motion.p>

        <motion.a
          href={site.whatsappUrl}
          className="coming-soon__cta mt-10 inline-flex min-h-[var(--touch)] items-center justify-center rounded-[var(--radius-pill)] border border-white/20 bg-white/8 px-6 text-sm font-medium text-inverse backdrop-blur-sm transition-colors hover:bg-white/14"
          target="_blank"
          rel="noopener noreferrer"
          initial={reduce ? false : { opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.55, ease }}
        >
          {comingSoon.ctaWhatsApp}
        </motion.a>
      </main>

      <footer className="relative z-10 px-[var(--gutter)] pb-8 text-center text-xs text-inverse-muted">
        {site.location} · {site.matricula}
      </footer>
    </div>
  );
}
