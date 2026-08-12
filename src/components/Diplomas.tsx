"use client";

import {
  useCallback,
  useEffect,
  useId,
  useMemo,
  useRef,
  useState,
  useSyncExternalStore,
  type MouseEvent as ReactMouseEvent,
} from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  credentialCategories,
  credentialCategoryLabels,
  credentials,
  credentialsIntro,
} from "@/lib/content";
import { Reveal } from "./Reveal";
import { Container } from "./ui/Container";
import { SectionHeading } from "./ui/SectionHeading";
import { SmartImage } from "./ui/SmartImage";

type FilterId = (typeof credentialCategories)[number]["id"];
type Cred = (typeof credentials)[number];

export function Diplomas() {
  const [filter, setFilter] = useState<FilterId>("all");
  const [active, setActive] = useState<number | null>(null);
  const portalReady = useSyncExternalStore(
    () => () => {},
    () => true,
    () => false,
  );
  const reduce = useReducedMotion();
  const triggerRef = useRef<HTMLElement | null>(null);

  const items = useMemo(() => {
    if (filter === "all") return [...credentials];
    return credentials.filter((c) => c.category === filter);
  }, [filter]);

  const openAt = useCallback((index: number, trigger: HTMLElement) => {
    triggerRef.current = trigger;
    setActive(index);
  }, []);

  const closeViewer = useCallback(() => {
    setActive(null);
  }, []);

  const selectFilter = useCallback((id: FilterId) => {
    setFilter(id);
    setActive(null);
  }, []);

  useEffect(() => {
    if (active === null) return;

    const previousOverflow = document.body.style.overflow;
    const previousPaddingRight = document.body.style.paddingRight;
    const scrollbarGap = Math.max(0, window.innerWidth - document.documentElement.clientWidth);

    document.body.style.overflow = "hidden";
    if (scrollbarGap > 0) {
      document.body.style.paddingRight = `${scrollbarGap}px`;
    }

    return () => {
      document.body.style.overflow = previousOverflow;
      document.body.style.paddingRight = previousPaddingRight;
    };
  }, [active]);

  useEffect(() => {
    if (active !== null) return;
    const trigger = triggerRef.current;
    if (!trigger) return;
    const id = window.setTimeout(() => {
      if (document.body.contains(trigger)) trigger.focus();
    }, 0);
    return () => window.clearTimeout(id);
  }, [active]);

  const activeItem = active !== null ? items[active] : undefined;

  return (
    <section id="diplomas" className="section credentials-section">
      <Container>
        <Reveal>
          <div className="credentials-header">
            <SectionHeading
              eyebrow={credentialsIntro.eyebrow}
              title={credentialsIntro.title}
              support={credentialsIntro.support}
            />
            <p className="credentials-header__aside type-small text-text-faint">
              {credentialsIntro.aside}
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.04}>
          <div
            className="credentials-filters mt-9 sm:mt-10"
            role="tablist"
            aria-label="Filtrar certificaciones"
          >
            {credentialCategories.map((cat) => {
              const selected = filter === cat.id;
              return (
                <button
                  key={cat.id}
                  type="button"
                  role="tab"
                  aria-selected={selected}
                  onClick={() => selectFilter(cat.id)}
                  className="credentials-filter focus-ring"
                >
                  {cat.label}
                  {selected ? (
                    <motion.span
                      layoutId={reduce ? undefined : "credential-filter-ink"}
                      className="credentials-filter__ink"
                      transition={{ type: "spring", stiffness: 380, damping: 34 }}
                    />
                  ) : null}
                </button>
              );
            })}
          </div>
        </Reveal>

        {/* Grilla simétrica: 1 / 2 / 3 columnas */}
        <div className="mt-9 sm:mt-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={filter}
              className="credentials-grid"
              initial={reduce ? false : { opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduce ? undefined : { opacity: 0, y: -6 }}
              transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            >
              {items.map((item, index) => (
                <Reveal key={item.id} delay={Math.min(index * 0.03, 0.18)}>
                  <CredentialPlate item={item} onOpen={(el) => openAt(index, el)} />
                </Reveal>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        <Reveal delay={0.06}>
          <div className="credentials-footer mt-12 sm:mt-14">
            <p className="type-body max-w-lg text-text-muted">{credentialsIntro.footer}</p>
            <a
              href="#formacion"
              className="focus-ring type-small inline-flex min-h-11 items-center text-accent-hover underline-offset-4 hover:underline"
            >
              {credentialsIntro.backLink}
            </a>
          </div>
        </Reveal>
      </Container>

      {portalReady
        ? createPortal(
            <AnimatePresence>
              {active !== null && activeItem ? (
                <CredentialViewer
                  key="credential-viewer"
                  item={activeItem}
                  index={active}
                  total={items.length}
                  reduce={!!reduce}
                  onClose={closeViewer}
                  onPrev={() =>
                    setActive((i) =>
                      i === null ? i : (i - 1 + items.length) % items.length,
                    )
                  }
                  onNext={() =>
                    setActive((i) => (i === null ? i : (i + 1) % items.length))
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

function CredentialPlate({
  item,
  onOpen,
}: {
  item: Cred;
  onOpen: (trigger: HTMLElement) => void;
}) {
  const category = credentialCategoryLabels[item.category];

  return (
    <button
      type="button"
      onClick={(e) => onOpen(e.currentTarget)}
      className="credential-plate group focus-ring h-full text-left"
      aria-label={`Ampliar ${item.title}, ${item.institution}, ${item.year}`}
    >
      <div className="credential-plate__mount media-skeleton">
        <div className="credential-plate__doc">
          <SmartImage
            src={item.image}
            alt={`Diploma: ${item.title} — ${item.institution}`}
            preset="diplomaCard"
            fill
            className="credential-plate__image object-contain"
          />
          <span className="credential-plate__veil" aria-hidden />
        </div>
        <span className="credential-plate__hint">Ampliar documento</span>
      </div>

      <div className="credential-plate__meta">
        <p className="credential-plate__category">{category}</p>
        <h3 className="credential-plate__title">{item.title}</h3>
        <p className="credential-plate__detail">
          <span>{item.institution}</span>
          <span className="credential-plate__dot" aria-hidden>
            ·
          </span>
          <span className="credential-plate__year">{item.year}</span>
        </p>
      </div>
    </button>
  );
}

function CredentialViewer({
  item,
  index,
  total,
  reduce,
  onClose,
  onPrev,
  onNext,
}: {
  item: Cred;
  index: number;
  total: number;
  reduce: boolean;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}) {
  const titleId = useId();
  const closeBtnRef = useRef<HTMLButtonElement>(null);
  const shellRef = useRef<HTMLDivElement>(null);
  const touchStart = useRef<{ x: number; y: number } | null>(null);

  useEffect(() => {
    const t = window.setTimeout(() => closeBtnRef.current?.focus(), 20);
    return () => window.clearTimeout(t);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        onClose();
        return;
      }
      if (e.key === "ArrowRight") {
        e.preventDefault();
        onNext();
        return;
      }
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        onPrev();
        return;
      }
      if (e.key !== "Tab" || !shellRef.current) return;

      const focusable = [
        ...shellRef.current.querySelectorAll<HTMLElement>(
          'button:not([disabled]), [href], [tabindex]:not([tabindex="-1"])',
        ),
      ];
      if (focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      const activeEl = document.activeElement;

      if (e.shiftKey && activeEl === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && activeEl === last) {
        e.preventDefault();
        first.focus();
      }
    };

    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose, onNext, onPrev]);

  const close = (e?: ReactMouseEvent) => {
    e?.preventDefault();
    e?.stopPropagation();
    onClose();
  };

  const nav =
    (fn: () => void) => (e: ReactMouseEvent<HTMLButtonElement>) => {
      e.preventDefault();
      e.stopPropagation();
      fn();
    };

  return (
    <motion.div
      ref={shellRef}
      className="credential-viewer fixed inset-0 z-[100] flex flex-col"
      role="dialog"
      aria-modal="true"
      aria-labelledby={titleId}
      data-credential-lightbox=""
      initial={reduce ? false : { opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={reduce ? undefined : { opacity: 0 }}
      transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
      onTouchStart={(e) => {
        const t = e.changedTouches[0];
        touchStart.current = { x: t.clientX, y: t.clientY };
      }}
      onTouchEnd={(e) => {
        if (!touchStart.current) return;
        const t = e.changedTouches[0];
        const dx = t.clientX - touchStart.current.x;
        const dy = t.clientY - touchStart.current.y;
        touchStart.current = null;
        if (Math.abs(dx) < 56 || Math.abs(dx) < Math.abs(dy)) return;
        if (dx < 0) onNext();
        else onPrev();
      }}
    >
      <button
        type="button"
        aria-label="Cerrar"
        data-credential-backdrop=""
        className="credential-viewer__backdrop absolute inset-0 z-0 cursor-default"
        onClick={close}
      />

      <header className="relative z-20 flex shrink-0 items-start justify-between gap-4 px-4 pb-2 pt-[max(1rem,env(safe-area-inset-top))] pointer-events-none sm:px-8 sm:pt-6">
        <motion.div
          key={item.id + "-meta"}
          className="min-w-0 max-w-[min(100%,28rem)]"
          initial={reduce ? false : { opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="credential-viewer__eyebrow">Documento</p>
          <h3
            id={titleId}
            className="mt-1.5 font-display text-[clamp(1.35rem,3.5vw,2rem)] leading-[1.15] tracking-tight text-[var(--inverse)]"
          >
            {item.title}
          </h3>
          <p className="mt-1.5 text-[0.8125rem] leading-snug text-[var(--inverse-muted)]">
            {item.institution}
            <span className="mx-2 opacity-40">·</span>
            {item.year}
          </p>
        </motion.div>

        <button
          ref={closeBtnRef}
          type="button"
          data-credential-close=""
          onClick={close}
          className="credential-viewer__icon-btn focus-ring pointer-events-auto shrink-0"
          aria-label="Cerrar documento"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
            <path
              d="M6 6L18 18M18 6L6 18"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </button>
      </header>

      <div className="relative z-10 flex min-h-0 flex-1 items-center justify-center px-3 pointer-events-none sm:px-16 md:px-20">
        <button
          type="button"
          onClick={nav(onPrev)}
          className="credential-viewer__nav focus-ring pointer-events-auto absolute left-2 top-1/2 z-20 hidden -translate-y-1/2 sm:left-4 md:flex"
          aria-label="Documento anterior"
        >
          <ChevronIcon dir="left" />
        </button>

        <AnimatePresence mode="wait">
          <motion.div
            key={item.id}
            className="credential-viewer__stage pointer-events-auto"
            initial={reduce ? false : { opacity: 0, scale: 0.985 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={reduce ? undefined : { opacity: 0, scale: 0.99 }}
            transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
            onClick={(e) => e.stopPropagation()}
          >
            <SmartImage
              src={item.image}
              alt={`Diploma: ${item.title} — ${item.institution}`}
              preset="viewer"
              fill
              className="object-contain"
            />
          </motion.div>
        </AnimatePresence>

        <button
          type="button"
          onClick={nav(onNext)}
          className="credential-viewer__nav focus-ring pointer-events-auto absolute right-2 top-1/2 z-20 hidden -translate-y-1/2 sm:right-4 md:flex"
          aria-label="Documento siguiente"
        >
          <ChevronIcon dir="right" />
        </button>
      </div>

      <footer className="relative z-20 flex shrink-0 items-center justify-between gap-3 px-4 pb-[max(1rem,env(safe-area-inset-bottom))] pt-2 pointer-events-none sm:px-8 sm:pb-6">
        <button
          type="button"
          onClick={nav(onPrev)}
          className="credential-viewer__icon-btn focus-ring pointer-events-auto md:invisible md:pointer-events-none"
          aria-label="Documento anterior"
        >
          <ChevronIcon dir="left" />
        </button>

        <p className="credential-viewer__counter tabular-nums pointer-events-none">
          {index + 1}
          <span className="opacity-40"> / </span>
          {total}
        </p>

        <button
          type="button"
          onClick={nav(onNext)}
          className="credential-viewer__icon-btn focus-ring pointer-events-auto md:invisible md:pointer-events-none"
          aria-label="Documento siguiente"
        >
          <ChevronIcon dir="right" />
        </button>
      </footer>
    </motion.div>
  );
}

function ChevronIcon({ dir }: { dir: "left" | "right" }) {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d={dir === "left" ? "M14.5 6L9 12L14.5 18" : "M9.5 6L15 12L9.5 18"}
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
