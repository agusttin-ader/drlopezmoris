"use client";

import {
  useEffect,
  useId,
  useState,
  type FormEvent,
  type HTMLAttributes,
} from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useMessages } from "@/i18n/LocaleProvider";
import { useBooking } from "./BookingProvider";
import { Button } from "./ui/Button";

export function BookingSheet() {
  const { hero, site, bookingCopy } = useMessages();
  const { open, closeBooking } = useBooking();
  const reduce = useReducedMotion();
  const titleId = useId();
  const [status, setStatus] = useState<"idle" | "sent">("idle");

  const dismiss = () => {
    setStatus("idle");
    closeBooking();
  };

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setStatus("idle");
        closeBooking();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open, closeBooking]);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const nombre = String(data.get("nombre") || "").trim();
    const telefono = String(data.get("telefono") || "").trim();
    const motivo = String(data.get("motivo") || "").trim();
    const mensaje = String(data.get("mensaje") || "").trim();

    const text = [
      bookingCopy.whatsappIntro,
      `${bookingCopy.name}: ${nombre}`,
      `${bookingCopy.phone}: ${telefono}`,
      motivo ? `${bookingCopy.reason}: ${motivo}` : null,
      mensaje ? `${bookingCopy.message}: ${mensaje}` : null,
    ]
      .filter(Boolean)
      .join("\n");

    setStatus("sent");
    window.open(
      `${site.whatsappUrl}?text=${encodeURIComponent(text)}`,
      "_blank",
      "noopener,noreferrer",
    );
  }

  return (
    <AnimatePresence>
      {open ? (
        <div
          className="fixed inset-0 z-[70] flex items-end justify-center md:items-center md:p-6"
          role="dialog"
          aria-modal="true"
          aria-labelledby={titleId}
        >
          <motion.button
            type="button"
            aria-label={bookingCopy.close}
            className="absolute inset-0 bg-deep/55"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={dismiss}
          />
          <motion.div
            className="booking-sheet relative z-10 w-full max-w-lg overflow-hidden rounded-t-2xl bg-surface shadow-[0_12px_40px_rgba(26,28,27,0.12)] md:rounded-2xl xl:max-w-xl"
            initial={reduce ? false : { y: 28, opacity: 0.85, scale: 0.98 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={reduce ? undefined : { y: 20, opacity: 0, scale: 0.98 }}
            transition={{ type: "spring", damping: 28, stiffness: 340 }}
          >
            <form onSubmit={onSubmit} className="contact-form contact-form--modal">
              <div className="contact-form__intro contact-form__intro--sheet">
                <button
                  type="button"
                  onClick={dismiss}
                  className="contact-form__close focus-ring"
                  aria-label={bookingCopy.closeForm}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
                    <path
                      d="M6 6L18 18M18 6L6 18"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                  </svg>
                </button>
                <p className="type-eyebrow">{bookingCopy.eyebrow}</p>
                <h2
                  id={titleId}
                  className="contact-form__title font-display text-[clamp(1.65rem,3.2vw,2rem)] leading-[1.05] tracking-[-0.02em] text-text"
                >
                  {hero.primaryCta}
                </h2>
                <p className="contact-form__lead mt-2 max-w-sm text-[0.9375rem] leading-relaxed text-text-muted">
                  {bookingCopy.lead}
                </p>
              </div>

              <div className="contact-form__fields">
                <Field label={bookingCopy.name} name="nombre" required autoComplete="name" />
                <Field
                  label={bookingCopy.phone}
                  name="telefono"
                  type="tel"
                  required
                  autoComplete="tel"
                  inputMode="tel"
                />
                <Field
                  className="sm:col-span-2"
                  label={bookingCopy.reason}
                  name="motivo"
                  placeholder={bookingCopy.reasonPlaceholder}
                />
                <label className="contact-field sm:col-span-2">
                  <span className="contact-label">{bookingCopy.message}</span>
                  <textarea
                    name="mensaje"
                    rows={3}
                    className="contact-input contact-textarea focus-ring"
                    placeholder={bookingCopy.messagePlaceholder}
                  />
                </label>
              </div>

              <div className="contact-form__actions">
                <Button type="submit" className="min-h-11" block>
                  {status === "sent" ? bookingCopy.submitOpen : bookingCopy.submit}
                </Button>
                <p className="contact-form__phone">
                  {bookingCopy.phoneOr}{" "}
                  <a href={site.phoneHref} className="contact-form__phone-link focus-ring">
                    {bookingCopy.phoneCall} {site.phoneDisplay}
                  </a>
                </p>
              </div>
            </form>
          </motion.div>
        </div>
      ) : null}
    </AnimatePresence>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  placeholder,
  autoComplete,
  inputMode,
  className = "",
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
  autoComplete?: string;
  inputMode?: HTMLAttributes<HTMLInputElement>["inputMode"];
  className?: string;
}) {
  return (
    <label className={`contact-field min-w-0 ${className}`.trim()}>
      <span className="contact-label">{label}</span>
      <input
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        autoComplete={autoComplete}
        inputMode={inputMode}
        className="contact-input focus-ring"
      />
    </label>
  );
}
