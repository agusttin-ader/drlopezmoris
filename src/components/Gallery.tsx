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
  const [caseIndex, setCaseIndex] = useState(index);
  const touchStart = useRef<{ x: number; y: number; ignore: boolean } | null>(null);

  if (caseIndex !== index) {
    setCaseIndex(index);
    setShowing("after");
    setViewIndex(0);
  }

  const view = item.views[Math.min(viewIndex, item.views.length - 1)];
  const multiView = item.views.length > 1;

  return (
    <motion.div
      className="fixed inset-0 z-[80] flex flex-col bg-background"
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
      <div className="flex h-full flex-col overflow-hidden">
        <header className="relative z-20 flex shrink-0 items-center justify-between gap-3 border-b border-border bg-background px-4 py-3 sm:px-6">
          <div className="min-w-0">
            <p className="type-small text-text-faint">
              Caso {index + 1} de {gallery.length}
            </p>
            <p className="truncate font-display text-xl leading-tight text-text sm:text-2xl">
              {item.title}
            </p>
            <p className="mt-0.5 truncate type-small text-text-muted">
              {multiView ? view.label : item.detail}
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="focus-ring flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-border text-xl text-text-muted"
            aria-label="Cerrar"
          >
            ×
          </button>
        </header>

        <div className="relative z-20 flex shrink-0 flex-wrap items-center justify-center gap-2 border-b border-border bg-background px-4 py-2 sm:px-6">
          <button
            type="button"
            className={`focus-ring min-h-10 rounded-full px-4 text-sm ${
              mode === "slider" ? "bg-accent text-inverse" : "text-text-muted"
            }`}
            onClick={() => setMode("slider")}
          >
            Comparar
          </button>
          <button
            type="button"
            className={`focus-ring min-h-10 rounded-full px-4 text-sm ${
              mode === "toggle" ? "bg-accent text-inverse" : "text-text-muted"
            }`}
            onClick={() => setMode("toggle")}
          >
            Alternar
          </button>
          {multiView ? (
            <>
              <span className="mx-1 hidden h-4 w-px bg-border sm:block" aria-hidden />
              {item.views.map((v, i) => (
                <button
                  key={v.label}
                  type="button"
                  className={`focus-ring min-h-10 rounded-full px-4 text-sm ${
                    i === viewIndex ? "bg-accent text-inverse" : "text-text-muted"
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

        <div className="relative z-0 min-h-0 flex-1 overflow-hidden px-3 py-3 sm:px-6 sm:py-5">
          <AnimatePresence mode="wait">
            <motion.div
              key={`${item.id}-${view.label}-${mode}`}
              className="mx-auto flex h-full max-w-5xl items-center justify-center"
              initial={reduce ? false : { opacity: 0, x: 18 }}
              animate={{ opacity: 1, x: 0 }}
              exit={reduce ? undefined : { opacity: 0, x: -18 }}
              transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
            >
              {mode === "slider" ? (
                <CompareSlider
                  beforeSrc={view.before}
                  afterSrc={view.after}
                  beforeAlt={`${item.title} — ${view.label} — antes`}
                  afterAlt={`${item.title} — ${view.label} — después`}
                  className="aspect-[4/5] max-h-full w-full sm:aspect-[5/4] md:aspect-[16/11]"
                  largeHandle
                />
              ) : (
                <ToggleCompare
                  beforeSrc={view.before}
                  afterSrc={view.after}
                  beforeAlt={`${item.title} — ${view.label} — antes`}
                  afterAlt={`${item.title} — ${view.label} — después`}
                  className="aspect-[4/5] max-h-full w-full sm:aspect-[5/4] md:aspect-[16/11]"
                  showing={showing}
                  onToggle={setShowing}
                />
              )}
            </motion.div>
          </AnimatePresence>
        </div>

        <footer className="relative z-20 shrink-0 border-t border-border bg-background px-4 py-3 sm:px-6">
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
