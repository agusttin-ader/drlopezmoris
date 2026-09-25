"use client";

import {
  useCallback,
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
  const labelId = useId();

  const updateFromClientX = useCallback((clientX: number) => {
    const el = frameRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const next = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.min(96, Math.max(4, next)));
  }, []);

  const onPointerDown = (e: ReactPointerEvent<HTMLDivElement>) => {
    e.currentTarget.setPointerCapture(e.pointerId);
    setDragging(true);
    updateFromClientX(e.clientX);
  };

  const onPointerMove = (e: ReactPointerEvent<HTMLDivElement>) => {
    if (!dragging) return;
    updateFromClientX(e.clientX);
  };

  const onPointerUp = (e: ReactPointerEvent<HTMLDivElement>) => {
    setDragging(false);
    try {
      e.currentTarget.releasePointerCapture(e.pointerId);
    } catch {
      /* sin captura activa */
    }
  };

  return (
    <div
      ref={frameRef}
      className={`compare-frame group relative overflow-hidden bg-deep select-none touch-none ${className}`.trim()}
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
          setPos((p) => Math.max(4, p - 4));
        }
        if (e.key === "ArrowRight") {
          e.preventDefault();
          e.stopPropagation();
          setPos((p) => Math.min(96, p + 4));
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
        />
      </div>

      <div className="absolute inset-0" style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}>
        <SmartImage
          src={beforeSrc}
          alt={beforeAlt}
          preset={imagePreset}
          fill
          className={`${objectClass} object-center`}
          draggable={false}
        />
      </div>

      {showLabels ? (
        <>
          <span className="compare-label left-3">{ui.before}</span>
          <span className="compare-label right-3">{ui.after}</span>
        </>
      ) : null}

      <div
        className="absolute inset-y-0 z-10 w-px bg-inverse/80"
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
  const src = showing === "before" ? beforeSrc : afterSrc;
  const alt = showing === "before" ? beforeAlt : afterAlt;
  const objectClass = imageFit === "contain" ? "object-contain" : "object-cover";

  return (
    <div className={`compare-frame relative overflow-hidden bg-deep ${className}`.trim()}>
      <SmartImage
        src={src}
        alt={alt}
        preset={imagePreset}
        fill
        className={`${objectClass} object-center`}
      />
      <div className="absolute inset-x-0 bottom-0 flex justify-center gap-2 p-4">
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
