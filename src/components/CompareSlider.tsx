"use client";

import {
  useCallback,
  useEffect,
  useId,
  useRef,
  useState,
  type PointerEvent as ReactPointerEvent,
} from "react";
import { useMessages } from "@/i18n/LocaleProvider";
import { SmartImage } from "./ui/SmartImage";

type ImagePreset = "compare" | "viewer";

type CompareSliderProps = {
  beforeSrc: string;
  afterSrc: string;
  beforeAlt: string;
  afterAlt: string;
  className?: string;
  initialPosition?: number;
  showLabels?: boolean;
  largeHandle?: boolean;
  imageFit?: "cover" | "contain";
  imagePreset?: ImagePreset;
};

function clampPos(value: number) {
  return Math.min(96, Math.max(4, value));
}

export function CompareSlider({
  beforeSrc,
  afterSrc,
  beforeAlt,
  afterAlt,
  className = "",
  initialPosition = 52,
  showLabels = true,
  largeHandle = false,
  imageFit = "cover",
  imagePreset = "compare",
}: CompareSliderProps) {
  const { ui } = useMessages();
  const objectClass = imageFit === "contain" ? "object-contain" : "object-cover";
  const [pos, setPos] = useState(initialPosition);
  const [dragging, setDragging] = useState(false);
  const frameRef = useRef<HTMLDivElement>(null);
  const beforeWrapRef = useRef<HTMLDivElement>(null);
  const beforeImgRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const posRef = useRef(initialPosition);
  const draggingRef = useRef(false);
  const rafRef = useRef(0);
  const pendingXRef = useRef<number | null>(null);
  const rectRef = useRef<{ left: number; width: number } | null>(null);
  const labelId = useId();

  const syncFrameWidth = useCallback(() => {
    const el = frameRef.current;
    const img = beforeImgRef.current;
    if (!el || !img) return;
    img.style.width = `${el.clientWidth}px`;
  }, []);

  const paintPos = useCallback((next: number) => {
    const clamped = clampPos(next);
    posRef.current = clamped;
    const wrap = beforeWrapRef.current;
    const line = lineRef.current;
    if (wrap) wrap.style.width = `${clamped}%`;
    // left % es relativo al frame; transform % sería relativo al handle (1px)
    if (line) line.style.left = `${clamped}%`;
  }, []);

  const flushPending = useCallback(() => {
    rafRef.current = 0;
    const clientX = pendingXRef.current;
    if (clientX == null) return;
    pendingXRef.current = null;
    const rect = rectRef.current ?? frameRef.current?.getBoundingClientRect();
    if (!rect || !rect.width) return;
    rectRef.current = { left: rect.left, width: rect.width };
    paintPos(((clientX - rect.left) / rect.width) * 100);
  }, [paintPos]);

  const scheduleFromClientX = useCallback(
    (clientX: number) => {
      pendingXRef.current = clientX;
      if (rafRef.current) return;
      rafRef.current = requestAnimationFrame(flushPending);
    },
    [flushPending],
  );

  useEffect(() => {
    syncFrameWidth();
    paintPos(posRef.current);
    const el = frameRef.current;
    if (!el || typeof ResizeObserver === "undefined") return;
    const ro = new ResizeObserver(() => {
      syncFrameWidth();
      paintPos(posRef.current);
    });
    ro.observe(el);
    return () => ro.disconnect();
  }, [paintPos, syncFrameWidth]);

  useEffect(() => {
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  useEffect(() => {
    paintPos(initialPosition);
    setPos(initialPosition);
  }, [beforeSrc, afterSrc, initialPosition, paintPos]);

  const onPointerDown = (e: ReactPointerEvent<HTMLDivElement>) => {
    const el = frameRef.current;
    if (el) {
      const rect = el.getBoundingClientRect();
      rectRef.current = { left: rect.left, width: rect.width };
    }
    e.currentTarget.setPointerCapture(e.pointerId);
    draggingRef.current = true;
    setDragging(true);
    scheduleFromClientX(e.clientX);
  };

  const onPointerMove = (e: ReactPointerEvent<HTMLDivElement>) => {
    if (!draggingRef.current) return;
    scheduleFromClientX(e.clientX);
  };

  const onPointerUp = (e: ReactPointerEvent<HTMLDivElement>) => {
    draggingRef.current = false;
    rectRef.current = null;
    setDragging(false);
    setPos(posRef.current);
    try {
      e.currentTarget.releasePointerCapture(e.pointerId);
    } catch {
      /* sin captura activa */
    }
  };

  return (
    <div
      ref={frameRef}
      className={`compare-frame group relative overflow-hidden bg-deep select-none touch-none ${
        dragging ? "is-dragging" : ""
      } ${className}`.trim()}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onPointerCancel={onPointerUp}
      role="slider"
      aria-labelledby={labelId}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={Math.round(pos)}
      aria-valuetext={`${Math.round(pos)}% después visible`}
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "ArrowLeft") {
          e.preventDefault();
          e.stopPropagation();
          const next = clampPos(posRef.current - 4);
          paintPos(next);
          setPos(next);
        }
        if (e.key === "ArrowRight") {
          e.preventDefault();
          e.stopPropagation();
          const next = clampPos(posRef.current + 4);
          paintPos(next);
          setPos(next);
        }
      }}
    >
      <span id={labelId} className="sr-only">
        {ui.compareSlider}
      </span>

      <div className="absolute inset-0">
        <SmartImage
          src={afterSrc}
          alt={afterAlt}
          preset={imagePreset}
          fill
          className={`${objectClass} object-center`}
          draggable={false}
          priority
        />
      </div>

      <div
        ref={beforeWrapRef}
        className="compare-frame__before absolute inset-y-0 left-0 overflow-hidden"
        style={{ width: `${pos}%` }}
      >
        <div ref={beforeImgRef} className="relative h-full" style={{ width: "100%" }}>
          <SmartImage
            src={beforeSrc}
            alt={beforeAlt}
            preset={imagePreset}
            fill
            className={`${objectClass} object-center`}
            draggable={false}
            priority
          />
        </div>
      </div>

      {showLabels ? (
        <>
          <span className="compare-label left-3">{ui.before}</span>
          <span className="compare-label right-3">{ui.after}</span>
        </>
      ) : null}

      <div
        ref={lineRef}
        className="compare-frame__divider absolute inset-y-0 z-10 w-px -translate-x-1/2 bg-inverse/80"
        style={{ left: `${pos}%` }}
        aria-hidden
      >
        <div
          className={`absolute top-1/2 left-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-inverse/40 bg-inverse text-text shadow-[0_8px_24px_rgba(0,0,0,0.35)] ${
            largeHandle ? "h-12 w-12" : "h-10 w-10"
          }`}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
            <path
              d="M8 7L3 12L8 17M16 7L21 12L16 17"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

type ToggleCompareProps = {
  beforeSrc: string;
  afterSrc: string;
  beforeAlt: string;
  afterAlt: string;
  className?: string;
  showing: "before" | "after";
  onToggle: (next: "before" | "after") => void;
  imageFit?: "cover" | "contain";
  imagePreset?: ImagePreset;
};

export function ToggleCompare({
  beforeSrc,
  afterSrc,
  beforeAlt,
  afterAlt,
  className = "",
  showing,
  onToggle,
  imageFit = "cover",
  imagePreset = "compare",
}: ToggleCompareProps) {
  const { ui } = useMessages();
  const objectClass = imageFit === "contain" ? "object-contain" : "object-cover";

  return (
    <div className={`compare-frame relative overflow-hidden bg-deep ${className}`.trim()}>
      <SmartImage
        src={afterSrc}
        alt={afterAlt}
        preset={imagePreset}
        fill
        className={`${objectClass} object-center transition-opacity duration-150 ease-out ${
          showing === "after" ? "opacity-100" : "opacity-0"
        }`}
        priority
      />
      <SmartImage
        src={beforeSrc}
        alt={beforeAlt}
        preset={imagePreset}
        fill
        className={`${objectClass} object-center transition-opacity duration-150 ease-out ${
          showing === "before" ? "opacity-100" : "opacity-0"
        }`}
        priority
      />
      <div className="absolute inset-x-0 bottom-0 z-10 flex justify-center gap-2 p-4">
        <button
          type="button"
          className={`focus-ring min-h-11 rounded-full px-5 text-sm font-medium transition ${
            showing === "before"
              ? "bg-inverse text-text"
              : "border border-white/25 bg-white/10 text-inverse"
          }`}
          onClick={() => onToggle("before")}
        >
          {ui.before}
        </button>
        <button
          type="button"
          className={`focus-ring min-h-11 rounded-full px-5 text-sm font-medium transition ${
            showing === "after"
              ? "bg-inverse text-text"
              : "border border-white/25 bg-white/10 text-inverse"
          }`}
          onClick={() => onToggle("after")}
        >
          {ui.after}
        </button>
      </div>
    </div>
  );
}
