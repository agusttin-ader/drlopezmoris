"use client";

import { Fragment, useId } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { useLocale } from "@/i18n/LocaleProvider";
import type { Locale } from "@/i18n/config";
import styles from "./LanguageSwitcher.module.css";

const OPTIONS: { id: Locale; label: "ES" | "EN" }[] = [
  { id: "es", label: "ES" },
  { id: "en", label: "EN" },
];

const underlineEase = [0.25, 0.8, 0.35, 1] as const;

type LanguageSwitcherProps = {
  className?: string;
  /** Texto claro sobre hero / header transparente */
  onDark?: boolean;
};

export function LanguageSwitcher({ className = "", onDark = false }: LanguageSwitcherProps) {
  const { locale, setLocale, messages } = useLocale();
  const reduce = useReducedMotion();
  const underlineId = useId();

  const underlineTransition = reduce
    ? { duration: 0 }
    : { duration: 0.58, ease: underlineEase };

  return (
    <div
      className={`${styles.root} inline-flex ${onDark ? styles.onDark : ""} ${className}`.trim()}
      role="group"
      aria-label={messages.ui.langSwitch}
    >
      {OPTIONS.map((opt, index) => {
        const active = locale === opt.id;
        return (
          <Fragment key={opt.id}>
            {index > 0 ? (
              <span className={styles.sep} aria-hidden>
                /
              </span>
            ) : null}
            <button
              type="button"
              className={`${styles.opt} focus-ring ${active ? styles.optActive : ""}`}
              aria-pressed={active}
              onClick={() => setLocale(opt.id)}
            >
              {opt.label}
              {active ? (
                <motion.span
                  layoutId={`locale-underline${underlineId}`}
                  className={styles.underline}
                  transition={underlineTransition}
                />
              ) : null}
            </button>
          </Fragment>
        );
      })}
    </div>
  );
}
