"use client";

import {
  useEffect,
  useId,
  useState,
  type FormEvent,
  type HTMLAttributes,
} from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { hero, site } from "@/lib/content";
import { useBooking } from "./BookingProvider";
import { Button } from "./ui/Button";

export function BookingSheet() {
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
      "Hola Dr. López Moris, me gustaría agendar una cita.",
      `Nombre: ${nombre}`,
      `Teléfono: ${telefono}`,
      motivo ? `Motivo: ${motivo}` : null,
      mensaje ? `Mensaje: ${mensaje}` : null,
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
            aria-label="Cerrar"
            className="absolute inset-0 bg-deep/55"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={dismiss}
          />
          <motion.div
            className="booking-sheet relative z-10 flex w-full max-w-lg flex-col overflow-hidden rounded-t-2xl bg-surface shadow-[0_12px_40px_rgba(26,28,27,0.12)] md:rounded-2xl"
            initial={reduce ? false : { y: 28, opacity: 0.85, scale: 0.98 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={reduce ? undefined : { y: 20, opacity: 0, scale: 0.98 }}
            transition={{ type: "spring", damping: 28, stiffness: 340 }}
          >
            <div className="flex items-start justify-between gap-3 border-b border-border px-4 py-3 sm:px-5">
              <div className="min-w-0">
                <p className="text-[0.6875rem] font-medium uppercase tracking-[0.12em] text-text-faint">
                  Agenda
                </p>
                <h2 id={titleId} className="font-display text-xl leading-tight text-text sm:text-[1.35rem]">
                  {hero.primaryCta}
                </h2>
              </div>
              <button
                type="button"
                onClick={dismiss}
                className="focus-ring flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border text-lg leading-none text-text-muted"
                aria-label="Cerrar formulario"
              >
                ×
              </button>
            </div>

            <form
              onSubmit={onSubmit}
              className="flex flex-col gap-2.5 px-4 py-3.5 sm:gap-3 sm:px-5 sm:py-4"
            >
              <p className="text-[0.8125rem] leading-snug text-text-muted">
                Te redirigimos a WhatsApp para confirmar el turno.
              </p>

              <div className="grid gap-2.5 sm:grid-cols-2 sm:gap-3">
                <Field label="Nombre y apellido" name="nombre" required autoComplete="name" />
                <Field
                  label="Teléfono / WhatsApp"
                  name="telefono"
                  type="tel"
                  required
                  autoComplete="tel"
                  inputMode="tel"
                />
              </div>

              <Field
                label="Motivo de consulta"
                name="motivo"
                placeholder="Respiración, rinoplastia…"
              />

              <label className="block">
                <span className="booking-label">Mensaje (opcional)</span>
                <textarea
                  name="mensaje"
                  rows={2}
                  className="booking-input booking-textarea focus-ring"
                  placeholder="Breve detalle, si querés"
                />
              </label>

              <div className="mt-0.5 flex flex-col gap-2 pt-0.5">
                <Button type="submit" block className="min-h-11">
                  {status === "sent" ? "Abrir WhatsApp" : "Continuar por WhatsApp"}
                </Button>
                <p className="text-center text-[0.75rem] text-text-faint">
                  O{" "}
                  <a
                    href={site.phoneHref}
                    className="underline underline-offset-2 hover:text-text-muted"
                  >
                    llamá al {site.phoneDisplay}
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
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
  autoComplete?: string;
  inputMode?: HTMLAttributes<HTMLInputElement>["inputMode"];
}) {
  return (
    <label className="block min-w-0">
      <span className="booking-label">{label}</span>
      <input
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        autoComplete={autoComplete}
        inputMode={inputMode}
        className="booking-input focus-ring"
      />
    </label>
  );
}
