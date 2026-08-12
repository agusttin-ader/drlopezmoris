"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { gallery, galleryIntro, hero } from "@/lib/content";
import { useBooking } from "./BookingProvider";
import { CompareSlider, ToggleCompare } from "./CompareSlider";
import { Reveal } from "./Reveal";
import { Button } from "./ui/Button";
import { Container } from "./ui/Container";
import { SectionHeading } from "./ui/SectionHeading";
import { SmartImage } from "./ui/SmartImage";

type CaseItem = (typeof gallery)[number];

export function Gallery() {
  const [active, setActive] = useState<number | null>(null);
  const reduce = useReducedMotion();
  const { openBooking } = useBooking();

  useEffect(() => {
    if (active === null) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActive(null);
      const target = e.target as HTMLElement | null;
      if (target?.closest?.('[role="slider"]')) return;
      if (e.key === "ArrowRight") {
        setActive((i) => (i === null ? i : (i + 1) % gallery.length));
      }
      if (e.key === "ArrowLeft") {
        setActive((i) => (i === null ? i : (i - 1 + gallery.length) % gallery.length));
      }
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [active]);

  return (
    <section id="galeria" className="section">
      <Container>
        <Reveal>
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <SectionHeading
              eyebrow={galleryIntro.eyebrow}
              title={galleryIntro.title}
              support={galleryIntro.support}
            />
            <p className="type-small max-w-[15rem] text-text-faint md:pb-1 md:text-right">
              {galleryIntro.aside}
            </p>
          </div>
        </Reveal>

        <div className="mt-10 space-y-8 sm:mt-12 sm:space-y-10 lg:space-y-12">
          {gallery.map((item, index) => (
            <Reveal key={item.id} delay={Math.min(index * 0.04, 0.2)} variant={index === 0 ? "soft" : "up"}>
              <CaseStudyCard
                item={item}
                index={index}
                featured={index === 0}
                onOpen={() => setActive(index)}
              />
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.06}>
          <div className="mt-12 flex flex-col gap-4 border-t border-border pt-8 sm:flex-row sm:items-center sm:justify-between">
            <p className="max-w-md type-body text-text-muted">{galleryIntro.cta}</p>
            <Button onClick={openBooking} className="w-full sm:w-auto">
              {hero.primaryCta}
            </Button>
          </div>
        </Reveal>
      </Container>

      <AnimatePresence>
        {active !== null ? (
          <CaseViewer
            index={active}
            reduce={!!reduce}
            onClose={() => setActive(null)}
            onPrev={() => setActive((active - 1 + gallery.length) % gallery.length)}
            onNext={() => setActive((active + 1) % gallery.length)}
            onSelect={setActive}
          />
        ) : null}
      </AnimatePresence>
    </section>
  );
}

function CaseStudyCard({
  item,
  index,
  featured,
  onOpen,
}: {
  item: CaseItem;
  index: number;
  featured?: boolean;
  onOpen: () => void;
}) {
  const reverse = index % 2 === 1;
  const cover = item.views[0];

  return (
    <article
      className={`case-study grid gap-5 border-t border-border pt-8 sm:gap-6 lg:grid-cols-12 lg:items-center lg:gap-10 ${
        featured ? "lg:pt-10" : ""
      }`}
    >
      <div className={`lg:col-span-7 ${reverse ? "lg:order-2" : ""}`}>
        <button
          type="button"
          onClick={onOpen}
          className="group focus-ring relative block w-full overflow-hidden text-left"
          aria-label={`Ver caso: ${item.title}`}
        >
          <div className="grid grid-cols-2 gap-px bg-border">
            <div className="media-skeleton relative aspect-[4/5] bg-deep sm:aspect-[3/4]">
              <SmartImage
                src={cover.before}
                alt={`${item.title} — antes`}
                preset="galleryCard"
                fill
                className="object-cover transition duration-500 group-hover:scale-[1.02]"
              />
              <span className="case-chip">Antes</span>
            </div>
            <div className="media-skeleton relative aspect-[4/5] bg-deep sm:aspect-[3/4]">
              <SmartImage
                src={cover.after}
                alt={`${item.title} — después`}
                preset="galleryCard"
                fill
                className="object-cover transition duration-500 group-hover:scale-[1.02]"
              />
              <span className="case-chip">Después</span>
            </div>
          </div>
        </button>
      </div>

      <div className={`flex flex-col lg:col-span-5 ${reverse ? "lg:order-1 lg:items-end lg:text-right" : ""}`}>
        <p className="type-eyebrow">{item.label}</p>
        <h3 className="mt-2 font-display text-[clamp(1.6rem,3vw,2.35rem)] leading-tight text-text">
          {item.title}
        </h3>
        <p className="mt-2 type-body text-text-muted">{item.detail}</p>
        {item.views.length > 1 ? (
          <p className="mt-1 type-small text-text-faint">
            {item.views.length} vistas documentadas
          </p>
        ) : null}
        <button
          type="button"
          onClick={onOpen}
          className="btn btn-secondary focus-ring mt-6 w-full sm:w-auto"
        >
          Ver caso
        </button>
      </div>
    </article>
  );
}

function CaseViewer({
  index,
  reduce,
  onClose,
  onPrev,
  onNext,
  onSelect,
}: {
  index: number;
  reduce: boolean;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
  onSelect: (i: number) => void;
}) {
  const item = gallery[index];
  const [mode, setMode] = useState<"slider" | "toggle">("slider");
  const [showing, setShowing] = useState<"before" | "after">("after");
  const [viewIndex, setViewIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState(index);
  const touchStart = useRef<{ x: number; y: number; ignore: boolean } | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement | null>(null);

  if (index !== prevIndex) {
    setPrevIndex(index);
    setShowing("after");
    setViewIndex(0);
  }

  useEffect(() => {
    closeButtonRef.current?.focus();
  }, [index]);

  const view = item.views[Math.min(viewIndex, item.views.length - 1)];
  const multiView = item.views.length > 1;

  return (
    <motion.div
      className="fixed inset-0 z-[80] flex flex-col bg-deep text-inverse"
      role="dialog"
      aria-modal="true"
      aria-label={`${item.title}. Caso ${index + 1} de ${gallery.length}`}
      initial={reduce ? false : { opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={reduce ? undefined : { opacity: 0 }}
      transition={{ duration: 0.28 }}
      onTouchStart={(e) => {
        const target = e.target as HTMLElement;
        const ignore = Boolean(target.closest(".compare-frame"));
        const t = e.changedTouches[0];
        touchStart.current = { x: t.clientX, y: t.clientY, ignore };
      }}
      onTouchEnd={(e) => {
        if (!touchStart.current || touchStart.current.ignore) {
          touchStart.current = null;
          return;
        }
        const t = e.changedTouches[0];
        const dx = t.clientX - touchStart.current.x;
        const dy = t.clientY - touchStart.current.y;
        touchStart.current = null;
        if (Math.abs(dx) < 56 || Math.abs(dx) < Math.abs(dy)) return;
        if (dx < 0) onNext();
        else onPrev();
      }}
    >
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden
        style={{
          background:
            "radial-gradient(ellipse 80% 58% at 50% 0%, rgba(108, 138, 123, 0.2), transparent 54%), linear-gradient(to bottom, rgba(10, 12, 11, 0.88), rgba(7, 9, 9, 0.96))",
        }}
      />
      <div className="relative flex h-full flex-col overflow-hidden">
        <header className="relative z-20 flex shrink-0 items-center justify-between gap-3 border-b border-inverse/16 bg-deep/92 px-4 py-3 backdrop-blur-md sm:px-6 md:border-0 md:bg-transparent md:px-10 md:pt-7 md:pb-2 md:backdrop-blur-none">
          <div className="min-w-0">
            <p className="text-[0.7rem] tracking-[0.16em] text-inverse/55 uppercase">
              Caso {index + 1} de {gallery.length}
            </p>
            <p className="truncate font-display text-2xl leading-[0.98] tracking-[-0.02em] text-inverse sm:text-[2rem] md:text-[2.25rem]">
              {item.title}
            </p>
            <p className="mt-1 truncate text-[0.72rem] tracking-[0.14em] text-inverse/58 uppercase">
              {multiView ? view.label : item.detail}
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            ref={closeButtonRef}
            className="focus-ring pointer-events-auto flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-inverse/24 text-inverse/72 transition hover:border-inverse/45 hover:text-inverse md:h-12 md:w-12 md:rounded-none md:border-0"
            aria-label="Cerrar"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
              <path
                d="M6 6L18 18M18 6L6 18"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </header>

        <div className="relative z-20 flex shrink-0 flex-wrap items-center justify-center gap-2 border-b border-inverse/16 bg-deep/88 px-4 py-2.5 backdrop-blur-md sm:px-6 md:justify-start md:gap-5 md:border-0 md:bg-transparent md:px-10 md:py-0 md:backdrop-blur-none">
          <button
            type="button"
            className={`focus-ring min-h-10 rounded-full px-4 text-sm transition md:min-h-0 md:rounded-none md:px-0 md:pb-1 md:text-[0.76rem] md:font-medium md:tracking-[0.16em] md:uppercase ${
              mode === "slider"
                ? "bg-accent text-inverse md:bg-transparent md:text-inverse md:[text-decoration:underline] md:[text-underline-offset:0.42rem]"
                : "text-inverse/70 md:text-inverse/62 md:hover:text-inverse"
            }`}
            onClick={() => setMode("slider")}
          >
            Comparar
          </button>
          <button
            type="button"
            className={`focus-ring min-h-10 rounded-full px-4 text-sm transition md:min-h-0 md:rounded-none md:px-0 md:pb-1 md:text-[0.76rem] md:font-medium md:tracking-[0.16em] md:uppercase ${
              mode === "toggle"
                ? "bg-accent text-inverse md:bg-transparent md:text-inverse md:[text-decoration:underline] md:[text-underline-offset:0.42rem]"
                : "text-inverse/70 md:text-inverse/62 md:hover:text-inverse"
            }`}
            onClick={() => setMode("toggle")}
          >
            Alternar
          </button>
          {multiView ? (
            <>
              <span className="mx-1 hidden h-4 w-px bg-inverse/20 sm:block md:mx-2 md:h-3" aria-hidden />
              {item.views.map((v, i) => (
                <button
                  key={v.label}
                  type="button"
                  className={`focus-ring min-h-10 rounded-full px-4 text-sm transition md:min-h-0 md:rounded-none md:px-0 md:pb-1 md:text-[0.72rem] md:tracking-[0.14em] md:uppercase ${
                    i === viewIndex
                      ? "bg-accent text-inverse md:bg-transparent md:text-inverse md:[text-decoration:underline] md:[text-underline-offset:0.42rem]"
                      : "text-inverse/70 md:text-inverse/62 md:hover:text-inverse"
                  }`}
                  aria-current={i === viewIndex}
                  onClick={() => {
                    setViewIndex(i);
                    setShowing("after");
                  }}
                >
                  {v.label.replace(/^Vista de /i, "")}
                </button>
              ))}
            </>
          ) : null}
        </div>

        <div className="relative z-10 min-h-0 flex-1 overflow-hidden px-3 py-3 sm:px-6 sm:py-5 md:px-10 md:py-8">
          <button
            type="button"
            onClick={onPrev}
            className="focus-ring absolute left-10 top-1/2 z-20 hidden -translate-y-1/2 text-xs tracking-[0.22em] text-inverse/62 uppercase transition hover:text-inverse md:block"
          >
            ← Anterior
          </button>
          <AnimatePresence mode="wait">
            <motion.div
              key={`${item.id}-${view.label}-${mode}`}
              className="mx-auto flex h-full w-full max-w-[84rem] items-center justify-center"
              initial={reduce ? false : { opacity: 0, scale: 0.985 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={reduce ? undefined : { opacity: 0, scale: 0.99 }}
              transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
            >
              {mode === "slider" ? (
                <CompareSlider
                  beforeSrc={view.before}
                  afterSrc={view.after}
                  beforeAlt={`${item.title} — ${view.label} — antes`}
                  afterAlt={`${item.title} — ${view.label} — después`}
                  className="aspect-[1/2] h-full max-h-full w-full max-w-[min(100%,22rem)] sm:max-w-[min(100%,26rem)] md:max-h-[min(86dvh,960px)] md:max-w-[min(100%,30rem)]"
                  largeHandle
                />
              ) : (
                <ToggleCompare
                  beforeSrc={view.before}
                  afterSrc={view.after}
                  beforeAlt={`${item.title} — ${view.label} — antes`}
                  afterAlt={`${item.title} — ${view.label} — después`}
                  className="aspect-[1/2] h-full max-h-full w-full max-w-[min(100%,22rem)] sm:max-w-[min(100%,26rem)] md:max-h-[min(86dvh,960px)] md:max-w-[min(100%,30rem)]"
                  showing={showing}
                  onToggle={setShowing}
                />
              )}
            </motion.div>
          </AnimatePresence>
          <button
            type="button"
            onClick={onNext}
            className="focus-ring absolute right-10 top-1/2 z-20 hidden -translate-y-1/2 text-xs tracking-[0.22em] text-inverse/62 uppercase transition hover:text-inverse md:block"
          >
            Siguiente →
          </button>
        </div>

        <footer className="relative z-20 shrink-0 border-t border-inverse/16 bg-deep/92 px-4 py-3 backdrop-blur-md sm:px-6 md:hidden">
          <div className="mx-auto flex max-w-5xl items-center justify-between gap-3">
            <button type="button" onClick={onPrev} className="btn btn-secondary focus-ring">
              Anterior
            </button>
            <div className="hidden items-center gap-1.5 sm:flex">
              {gallery.map((g, i) => (
                <button
                  key={g.id}
                  type="button"
                  aria-label={`Ir a ${g.label}`}
                  aria-current={i === index}
                  onClick={() => onSelect(i)}
                  className={`focus-ring h-2.5 rounded-full transition ${
                    i === index ? "w-6 bg-accent" : "w-2.5 bg-border-strong"
                  }`}
                />
              ))}
            </div>
            <button type="button" onClick={onNext} className="btn btn-secondary focus-ring">
              Siguiente
            </button>
          </div>
          <p className="mt-2 text-center type-small text-text-faint sm:hidden">
            Deslizá horizontalmente para cambiar de caso
          </p>
        </footer>
      </div>
    </motion.div>
  );
}
