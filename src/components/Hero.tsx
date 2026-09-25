"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useMessages } from "@/i18n/LocaleProvider";
import { useBooking } from "./BookingProvider";
import { Button, LinkButton } from "./ui/Button";
import { Container } from "./ui/Container";
import { SmartImage } from "./ui/SmartImage";

export function Hero() {
  const { hero, site } = useMessages();
  const { openBooking } = useBooking();
  const reduce = useReducedMotion();

  return (
    <section
      id="inicio"
      className="relative min-h-[100dvh] overflow-hidden bg-deep text-inverse"
    >
      <div className="absolute inset-0">
        <motion.div
          className="absolute inset-0"
          initial={reduce ? false : { scale: 1.06 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="absolute inset-0 max-sm:scale-[1.22] max-sm:translate-y-[9%]">
            <SmartImage
              src={hero.image.src}
              alt={hero.image.alt}
              preset="hero"
              fill
              priority
              className={`object-cover object-[52%_20%] sm:object-[62%_16%] lg:object-[54%_18%] xl:object-[50%_16%] 2xl:object-[48%_14%] ${
                reduce ? "" : "hero-kenburns"
              }`}
            />
          </div>
        </motion.div>
        <div className="hero-scrim" aria-hidden />
      </div>

      <Container className="relative flex min-h-[100dvh] flex-col pt-[calc(var(--header-h)+0.75rem)] sm:pt-[calc(var(--header-h)+1rem)]">
        <div className="hero-copy flex flex-1 flex-col justify-end pb-4 sm:pb-8 lg:pb-10 2xl:pb-14">
          <motion.p
            className="type-eyebrow hero-eyebrow"
            initial={reduce ? false : { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="hero-eyebrow__mark" aria-hidden />
            {hero.eyebrow}
          </motion.p>

          <h1 className="sr-only">{site.name}</h1>
          <div className="mt-3 max-w-3xl sm:mt-4 2xl:max-w-4xl" aria-hidden>
            {hero.brandLines.map((line, i) => (
              <motion.p
                key={line}
                className="hero-brand font-display text-[clamp(2.15rem,10.5vw,6.25rem)] leading-[0.96] tracking-[-0.03em]"
                initial={reduce ? false : { opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.85,
                  delay: 0.14 + i * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                {line}
              </motion.p>
            ))}
          </div>

          <motion.p
            className="hero-headline mt-4 max-w-[22ch] font-display text-[clamp(1.05rem,3.4vw,2rem)] leading-[1.28] tracking-[-0.01em] sm:mt-5 2xl:max-w-[26ch]"
            initial={reduce ? false : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.36, ease: [0.22, 1, 0.36, 1] }}
          >
            {hero.headline}
          </motion.p>

          <motion.p
            className="hero-support mt-3 max-w-md text-[0.98rem] leading-relaxed sm:mt-4 sm:max-w-lg sm:text-[1.05rem] xl:max-w-xl"
            initial={reduce ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.46, ease: [0.22, 1, 0.36, 1] }}
          >
            {hero.support}
          </motion.p>
        </div>

        {/* CTAs fijos en el primer viewport en mobile */}
        <motion.div
          className="shrink-0 pb-[max(1.25rem,env(safe-area-inset-bottom))] sm:pb-10"
          initial={reduce ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="flex w-full flex-col gap-2.5 sm:w-auto sm:flex-row sm:items-center sm:gap-3">
            <Button onClick={openBooking} variant="on-dark" block className="sm:w-auto">
              {hero.primaryCta}
            </Button>
            <LinkButton href="#galeria" variant="ghost" block className="sm:w-auto">
              {hero.secondaryCta}
            </LinkButton>
          </div>
          <p className="mt-3 type-small text-inverse/50">{site.title}</p>
        </motion.div>
      </Container>
    </section>
  );
}
