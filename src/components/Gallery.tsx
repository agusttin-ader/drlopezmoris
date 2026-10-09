"use client";

import { useEffect, useLayoutEffect, useRef, useState, useSyncExternalStore } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useMessages } from "@/i18n/LocaleProvider";
import { useBooking } from "./BookingProvider";
import { CompareSlider, ToggleCompare } from "./CompareSlider";
import { Reveal } from "./Reveal";
import { Button } from "./ui/Button";
import { Container } from "./ui/Container";
import { SectionHeading } from "./ui/SectionHeading";
import { SectionScrollTarget } from "./ui/SectionScrollTarget";
import { BrandLogo } from "./BrandLogo";
import { SmartImage } from "./ui/SmartImage";

const PREVIEW_COUNT = 3;

export function Gallery() {
  const { gallery, galleryIntro, hero } = useMessages();
  const [active, setActive] = useState<{ index: number; view: number } | null>(null);
  const [expanded, setExpanded] = useState(false);
  const listRef = useRef<HTMLDivElement>(null);
  const scrollToListEndRef = useRef(false);
  const canExpand = gallery.length > PREVIEW_COUNT;
  const visibleCases = expanded || !canExpand ? gallery : gallery.slice(0, PREVIEW_COUNT);

  const toggleExpanded = () => {
    if (expanded) scrollToListEndRef.current = true;
    setExpanded(!expanded);
  };
  const reduce = useReducedMotion();
  const { openBooking } = useBooking();
  const portalReady = useSyncExternalStore(
    () => () => {},
    () => true,
    () => false,
  );

  useEffect(() => {
    if (active === null) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActive(null);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [active]);

  useLayoutEffect(() => {
    if (expanded || !scrollToListEndRef.current) return;
    scrollToListEndRef.current = false;
    listRef.current?.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "end" });
  }, [expanded, reduce]);

  return (
    <section className="section gallery-section">
      <Container>
        <SectionScrollTarget id="galeria" />
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

        <div
          ref={listRef}
          className="gallery-list mt-10 space-y-8 sm:mt-12 sm:space-y-10 lg:space-y-12"
        >
          {visibleCases.map((item, index) => (
            <Reveal
              key={item.id}
              delay={index < PREVIEW_COUNT ? Math.min(index * 0.04, 0.2) : 0}
              variant={index === 0 ? "soft" : "up"}
            >
              <CaseStudyCard
                item={item}
                index={index}
                featured={index === 0}
                onOpen={(view = 0) => setActive({ index, view })}
              />
            </Reveal>
          ))}
        </div>

        {canExpand ? (
          <div className="credentials-more mt-10 sm:mt-12">
            <button
              type="button"
              className="credentials-more__btn gallery-more__btn focus-ring"
              aria-expanded={expanded}
              onClick={toggleExpanded}
            >
              {expanded
                ? galleryIntro.showLess
                : `${galleryIntro.showMore} (${gallery.length - PREVIEW_COUNT})`}
              <svg
                className={`gallery-more__chevron ${expanded ? "is-open" : ""}`}
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden
              >
                <path
                  d="M6 9.5L12 15L18 9.5"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        ) : null}

        <Reveal delay={0.06}>
          <div className="mt-12 flex flex-col gap-4 border-t border-border pt-8 sm:flex-row sm:items-center sm:justify-between">
            <p className="max-w-md type-body text-text-muted">{galleryIntro.cta}</p>
            <Button onClick={openBooking} className="w-full sm:w-auto">
              {hero.primaryCta}
            </Button>
          </div>
        </Reveal>
      </Container>

      {portalReady
        ? createPortal(
            <AnimatePresence>
              {active !== null ? (
                <CaseViewer
                  index={active.index}
                  startView={active.view}
                  reduce={!!reduce}
                  onClose={() => setActive(null)}
                  onPrevCase={() => {
                    const i = (active.index - 1 + gallery.length) % gallery.length;
                    setActive({ index: i, view: gallery[i].views.length - 1 });
                  }}
                  onNextCase={() =>
                    setActive({ index: (active.index + 1) % gallery.length, view: 0 })
                  }
                />
              ) : null}
            </AnimatePresence>,
            document.body,
          )
        : null}
    </section>
  );
}

function CaseStudyCard({
  item,
  index,
  featured,
  onOpen,
}: {
  item: ReturnType<typeof useMessages>["gallery"][number];
  index: number;
  featured?: boolean;
  onOpen: (view?: number) => void;
}) {
  const { ui } = useMessages();
  const reverse = index % 2 === 1;
  const cover = item.views[0];

  return (
    <article
      className={`case-study grid gap-5 border-t border-border pt-8 sm:gap-6 lg:grid-cols-12 lg:items-center lg:gap-10 xl:gap-12 2xl:gap-14 ${
        featured ? "lg:pt-10 2xl:pt-12" : ""
      }`}
    >
      <div className={`lg:col-span-7 ${reverse ? "lg:order-2" : ""}`}>
        <button
          type="button"
          onClick={() => onOpen()}
          className="group focus-ring relative block w-full overflow-hidden text-left"
          aria-label={`${ui.seeCase}: ${item.title}`}
        >
          <div className="grid grid-cols-2 gap-px bg-border">
            <div className="media-skeleton relative aspect-[4/5] bg-deep sm:aspect-[3/4] xl:aspect-[4/5] 2xl:min-h-[22rem]">
              <SmartImage
                src={cover.before}
                alt={`${item.title} — ${ui.before.toLowerCase()}`}
                preset="galleryCard"
                fill
                className="object-cover transition duration-500 group-hover:scale-[1.02]"
              />
              <span className="case-chip">{ui.before}</span>
            </div>
            <div className="media-skeleton relative aspect-[4/5] bg-deep sm:aspect-[3/4] xl:aspect-[4/5] 2xl:min-h-[22rem]">
              <SmartImage
                src={cover.after}
                alt={`${item.title} — ${ui.after.toLowerCase()}`}
                preset="galleryCard"
                fill
                className="object-cover transition duration-500 group-hover:scale-[1.02]"
              />
              <span className="case-chip">{ui.after}</span>
            </div>
          </div>
        </button>
      </div>

      <div className={`flex flex-col lg:col-span-5 ${reverse ? "lg:order-1 lg:items-end lg:text-right" : ""}`}>
        <p className="type-eyebrow">{item.label}</p>
        <h3 className="mt-2 font-display text-[clamp(1.6rem,3vw,2.5rem)] leading-tight text-text 2xl:text-[2.65rem]">
          {item.title}
        </h3>
        <p className="mt-2 type-body text-text-muted">{item.detail}</p>
        {item.views.length > 1 ? (
          <>
            <p className="mt-1 type-small text-text-faint">
              {item.views.length} {ui.viewsDocumented}
            </p>
            <ul
              className={`case-angles mt-3 ${reverse ? "lg:justify-end" : ""}`}
              aria-label={ui.angles}
            >
              {item.views.map((v, i) => (
                <li key={v.label} className="case-angles__item">
                  <button
                    type="button"
                    className="case-angles__link focus-ring"
                    onClick={() => onOpen(i)}
                  >
                    {v.label.replace(/^Vista de /i, "")}
                  </button>
                </li>
              ))}
            </ul>
          </>
        ) : null}
        <button
          type="button"
          onClick={() => onOpen()}
          className="btn btn-secondary focus-ring mt-6 w-full sm:w-auto"
        >
          {ui.seeCase}
        </button>
      </div>
    </article>
  );
}

function CaseViewer({
  index,
  startView,
  reduce,
  onClose,
  onPrevCase,
  onNextCase,
}: {
  index: number;
  startView: number;
  reduce: boolean;
  onClose: () => void;
  onPrevCase: () => void;
  onNextCase: () => void;
}) {
  const { gallery, ui } = useMessages();
  const item = gallery[index];
  const [mode, setMode] = useState<"slider" | "toggle">("slider");
  const [showing, setShowing] = useState<"before" | "after">("after");
  const [viewIndex, setViewIndex] = useState(startView);
  const [prevKey, setPrevKey] = useState(`${index}:${startView}`);
  const swipeTouchStart = useRef<{ x: number; y: number } | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement | null>(null);
  const key = `${index}:${startView}`;
  if (key !== prevKey) {
    setPrevKey(key);
    setShowing("after");
    setViewIndex(startView);
  }

  useEffect(() => {
    closeButtonRef.current?.focus();
  }, [index]);

  const viewCount = item.views.length;
  const safeView = Math.min(viewIndex, viewCount - 1);
  const view = item.views[safeView];
  const multiView = viewCount > 1;

  const selectView = (i: number) => {
    setViewIndex(i);
    setShowing("after");
  };
  const goNext = () => (safeView < viewCount - 1 ? selectView(safeView + 1) : onNextCase());
  const goPrev = () => (safeView > 0 ? selectView(safeView - 1) : onPrevCase());

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement | null;
      if (target?.closest?.('[role="slider"]')) return;
      if (e.key === "ArrowRight") goNext();
      if (e.key === "ArrowLeft") goPrev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  });

  return (
    <motion.div
      className={`case-viewer fixed inset-0 z-[100] flex h-[100dvh] max-h-[100dvh] flex-col bg-deep text-inverse`}
      role="dialog"
      aria-modal="true"
      aria-label={`${item.title}. ${ui.caseLabel} ${index + 1} ${ui.caseOf} ${gallery.length}`}
      initial={reduce ? false : { opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={reduce ? undefined : { opacity: 0 }}
      transition={{ duration: 0.28 }}
    >
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden
        style={{
          background:
            "radial-gradient(ellipse 80% 58% at 50% 0%, rgba(108, 138, 123, 0.2), transparent 54%), linear-gradient(to bottom, rgba(10, 12, 11, 0.88), rgba(7, 9, 9, 0.96))",
        }}
      />
      <div className="case-viewer__shell relative flex h-full min-h-0 flex-col overflow-hidden">
        <header className="case-viewer__header relative z-20 flex shrink-0 items-center justify-between gap-2 border-b border-inverse/16 bg-deep/92 px-[max(1rem,env(safe-area-inset-left))] pb-2.5 pt-[max(0.5rem,env(safe-area-inset-top))] backdrop-blur-md pr-[max(1rem,env(safe-area-inset-right))] sm:gap-3 sm:px-6 sm:pb-3 sm:pt-[max(0.65rem,env(safe-area-inset-top))] md:border-0 md:bg-transparent md:px-10 md:pb-2 md:pt-[max(1.75rem,env(safe-area-inset-top))] md:backdrop-blur-none">
          <div className="flex min-w-0 flex-1 items-start gap-2.5 sm:gap-4 md:gap-5">
            <div
              className="case-viewer__brand shrink-0 pt-0.5"
              aria-hidden
            >
              <BrandLogo on="dark" size={40} className="h-8 w-8 sm:h-10 sm:w-10 md:h-11 md:w-11" />
            </div>
            <div className="min-w-0 flex-1 border-l border-inverse/12 pl-2.5 sm:pl-4 md:pl-5">
            <p className="text-[0.65rem] tracking-[0.14em] text-inverse/55 uppercase sm:text-[0.7rem] sm:tracking-[0.16em]">
              {ui.caseLabel} {index + 1} {ui.caseOf} {gallery.length}
            </p>
            <p className="truncate font-display text-xl leading-[0.98] tracking-[-0.02em] text-inverse sm:text-[2rem] md:text-[2.25rem]">
              {item.title}
            </p>
            <p className="mt-1 truncate text-[0.72rem] tracking-[0.14em] text-inverse/58 uppercase">
              {multiView ? (
                <>
                  {view.label.replace(/^Vista de /i, "")}
                  <span className="text-inverse/40">
                    {" · "}
                    {safeView + 1} / {viewCount}
                  </span>
                </>
              ) : (
                item.detail
              )}
            </p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            ref={closeButtonRef}
            className="focus-ring pointer-events-auto flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-inverse/24 text-inverse/72 transition hover:border-inverse/45 hover:text-inverse md:h-12 md:w-12 md:rounded-none md:border-0"
            aria-label={ui.close}
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

        <div className="case-viewer__toolbar relative z-20 flex shrink-0 flex-wrap items-center justify-center gap-1.5 border-b border-inverse/16 bg-deep/88 px-[max(1rem,env(safe-area-inset-left))] py-2 backdrop-blur-md pr-[max(1rem,env(safe-area-inset-right))] sm:gap-2 sm:px-6 sm:py-2.5 md:justify-start md:gap-5 md:border-0 md:bg-transparent md:px-10 md:py-0 md:backdrop-blur-none">
          <button
            type="button"
            className={`focus-ring min-h-10 rounded-full px-4 text-sm transition md:min-h-0 md:rounded-none md:px-0 md:pb-1 md:text-[0.76rem] md:font-medium md:tracking-[0.16em] md:uppercase ${
              mode === "slider"
                ? "bg-accent text-inverse md:bg-transparent md:text-inverse md:[text-decoration:underline] md:[text-underline-offset:0.42rem]"
                : "text-inverse/70 md:text-inverse/62 md:hover:text-inverse"
            }`}
            onClick={() => setMode("slider")}
          >
            {ui.compare}
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
            {ui.toggle}
          </button>
        </div>

        <div className="case-viewer__stage relative z-10 min-h-0 flex-1">
          <button
            type="button"
            onClick={goPrev}
            className="focus-ring absolute left-4 top-1/2 z-20 hidden -translate-y-1/2 text-xs tracking-[0.22em] text-inverse/62 uppercase transition hover:text-inverse md:left-8 lg:left-10 md:block"
          >
            ← {ui.previous}
          </button>
          <AnimatePresence mode="wait">
            <motion.div
              key={`${item.id}-${view.label}-${mode}`}
              className="case-viewer__media-wrap"
              initial={reduce ? false : { opacity: 0, scale: 0.985 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={reduce ? undefined : { opacity: 0, scale: 0.99 }}
              transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
            >
              {mode === "slider" ? (
                <CompareSlider
                  beforeSrc={view.before}
                  afterSrc={view.after}
                  beforeAlt={`${item.title} — ${view.label} — ${ui.before.toLowerCase()}`}
                  afterAlt={`${item.title} — ${view.label} — ${ui.after.toLowerCase()}`}
                  className="case-viewer-compare"
                  largeHandle
                  imageFit="contain"
                  imagePreset="viewer"
                />
              ) : (
                <ToggleCompare
                  beforeSrc={view.before}
                  afterSrc={view.after}
                  beforeAlt={`${item.title} — ${view.label} — ${ui.before.toLowerCase()}`}
                  afterAlt={`${item.title} — ${view.label} — ${ui.after.toLowerCase()}`}
                  className="case-viewer-compare"
                  showing={showing}
                  onToggle={setShowing}
                  imageFit="contain"
                  imagePreset="viewer"
                />
              )}
            </motion.div>
          </AnimatePresence>
          <button
            type="button"
            onClick={goNext}
            className="focus-ring absolute right-4 top-1/2 z-20 hidden -translate-y-1/2 text-xs tracking-[0.22em] text-inverse/62 uppercase transition hover:text-inverse md:right-8 lg:right-10 md:block"
          >
            {ui.next} →
          </button>
        </div>

        <footer
          className="case-viewer__footer case-viewer__swipe-zone relative z-20 shrink-0 md:hidden"
          onTouchStart={(e) => {
            const t = e.changedTouches[0];
            swipeTouchStart.current = { x: t.clientX, y: t.clientY };
          }}
          onTouchEnd={(e) => {
            if (!swipeTouchStart.current) return;
            const t = e.changedTouches[0];
            const dx = t.clientX - swipeTouchStart.current.x;
            const dy = t.clientY - swipeTouchStart.current.y;
            swipeTouchStart.current = null;
            if (Math.abs(dx) < 48 || Math.abs(dx) < Math.abs(dy)) return;
            if (dx < 0) goNext();
            else goPrev();
          }}
        >
          <div className="case-viewer__swipe-row">
            <span className="case-viewer__swipe-chevs case-viewer__swipe-chevs--left" aria-hidden>
              ‹‹‹
            </span>
            <p className="case-viewer__swipe-hint">
              {multiView ? ui.swipeAngles : ui.swipeCases}
            </p>
            <span className="case-viewer__swipe-chevs case-viewer__swipe-chevs--right" aria-hidden>
              ›››
            </span>
          </div>
        </footer>
      </div>
    </motion.div>
  );
}
