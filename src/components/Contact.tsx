"use client";

import { useState, type FormEvent, type HTMLAttributes } from "react";
import { contactIntro, hero, locations, site } from "@/lib/content";
import { useBooking } from "./BookingProvider";
import { Reveal } from "./Reveal";
import { Button, LinkButton } from "./ui/Button";
import { Container } from "./ui/Container";
import { SectionHeading } from "./ui/SectionHeading";

export function Contact() {
  const { openBooking } = useBooking();
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const nombre = String(data.get("nombre") || "").trim();
    const telefono = String(data.get("telefono") || "").trim();
    const email = String(data.get("email") || "").trim();
    const mensaje = String(data.get("mensaje") || "").trim();

    const text = [
      "Hola Dr. López Moris, quiero contactarte.",
      `Nombre: ${nombre}`,
      `Teléfono: ${telefono}`,
      email ? `Email: ${email}` : null,
      mensaje ? `Mensaje: ${mensaje}` : null,
    ]
      .filter(Boolean)
      .join("\n");

    setSent(true);
    window.open(
      `${site.whatsappUrl}?text=${encodeURIComponent(text)}`,
      "_blank",
      "noopener,noreferrer",
    );
  }

  return (
    <section id="contacto" className="section">
      <Container className="grid gap-12 lg:grid-cols-[1fr_0.95fr] lg:gap-16">
        <Reveal>
          <SectionHeading
            eyebrow={contactIntro.eyebrow}
            title={contactIntro.title}
            support={contactIntro.support}
          />

          <div className="mt-8 space-y-0 divide-y divide-border border-t border-border">
            {locations.map((loc) => (
              <div key={loc.name} className="py-5">
                <h3 className="type-h3 text-text">{loc.name}</h3>
                <p className="mt-1 type-body text-text-muted">{loc.address}</p>
                <p className="mt-1 type-small text-text-faint">{loc.hours}</p>
              </div>
            ))}
          </div>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Button onClick={openBooking} block className="sm:w-auto">
              {hero.primaryCta}
            </Button>
            <LinkButton
              href={site.whatsappUrl}
              variant="whatsapp"
              external
              block
              className="sm:w-auto"
            >
              WhatsApp
            </LinkButton>
          </div>
        </Reveal>

        <Reveal delay={0.05}>
          <form
            onSubmit={onSubmit}
            className="border-t border-border pt-5 sm:border sm:border-border sm:bg-surface sm:p-5 sm:shadow-[0_12px_40px_rgba(26,28,27,0.06)] md:rounded-2xl md:p-6"
          >
            <h3 className="font-display text-xl leading-tight text-text sm:text-[1.35rem]">
              Escribime
            </h3>
            <p className="mt-1 text-[0.8125rem] text-text-muted">
              Te respondo a la brevedad por WhatsApp.
            </p>

            <div className="mt-4 grid gap-2.5 sm:grid-cols-2 sm:gap-3">
              <Field label="Nombre" name="nombre" required autoComplete="name" />
              <Field
                label="Teléfono"
                name="telefono"
                type="tel"
                required
                autoComplete="tel"
                inputMode="tel"
              />
              <div className="sm:col-span-2">
                <Field label="Email" name="email" type="email" autoComplete="email" />
              </div>
              <label className="block sm:col-span-2">
                <span className="booking-label">Mensaje</span>
                <textarea
                  name="mensaje"
                  rows={3}
                  required
                  className="booking-input booking-textarea focus-ring"
                  placeholder="¿En qué puedo ayudarte?"
                />
              </label>
            </div>

            <Button type="submit" className="mt-4 min-h-11" block>
              {sent ? "Abrir WhatsApp" : "Enviar por WhatsApp"}
            </Button>
            <p className="mt-2 text-center text-[0.75rem] text-text-faint">
              O llamá al{" "}
              <a href={site.phoneHref} className="underline underline-offset-2">
                {site.phoneDisplay}
              </a>
            </p>
          </form>
        </Reveal>
      </Container>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  autoComplete,
  inputMode,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
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
        autoComplete={autoComplete}
        inputMode={inputMode}
        className="booking-input focus-ring"
      />
    </label>
  );
}
