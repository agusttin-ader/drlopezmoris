"use client";

import { useMessages } from "@/i18n/LocaleProvider";

type LocationLineProps = {
  tone?: "light" | "dark";
  className?: string;
};

export function LocationLine({ tone = "light", className = "" }: LocationLineProps) {
  const { site } = useMessages();
  const text = tone === "dark" ? "text-inverse/75" : "text-text-muted";
  const icon = tone === "dark" ? "text-inverse/55" : "text-accent";

  return (
    <p className={`contact-location ${className}`.trim()}>
      <span className={`contact-location__icon ${icon}`} aria-hidden>
        <LocationPinIcon />
      </span>
      <span className={`contact-location__text type-body ${text}`}>{site.location}</span>
    </p>
  );
}

function LocationPinIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M12 21s7-4.35 7-11a7 7 0 1 0-14 0c0 6.65 7 11 7 11Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="10" r="2.25" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}
