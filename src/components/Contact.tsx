"use client";

import { useState, type FormEvent, type HTMLAttributes } from "react";
import { useMessages } from "@/i18n/LocaleProvider";
import { useBooking } from "./BookingProvider";
import { LocationLine } from "./LocationLine";
import { Reveal } from "./Reveal";
import { Button } from "./ui/Button";
import { Container } from "./ui/Container";
import { MailIcon } from "./icons/MailIcon";
import { SectionHeading } from "./ui/SectionHeading";

export function Contact() {
  const { contactIntro, contactForm, hero, site } = useMessages();
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
      contactForm.whatsappIntro,
      `${contactForm.name}: ${nombre}`,
      `${contactForm.phone}: ${telefono}`,
      email ? `${contactForm.email}: ${email}` : null,
      mensaje ? `${contactForm.message}: ${mensaje}` : null,
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
      <Container className="grid gap-12 lg:grid-cols-[1fr_0.95fr] lg:gap-16 xl:gap-20 2xl:gap-24">
        <Reveal>
          <SectionHeading
            eyebrow={contactIntro.eyebrow}
            title={contactIntro.title}
            support={contactIntro.support}
          />

          <div className="mt-8 space-y-5 border-t border-border pt-6">
            <a
              href={`mailto:${site.email}`}
              className="contact-mail group text-text-muted hover:text-text"
            >
              <span className="contact-mail__icon text-accent" aria-hidden>
                <MailIcon />
              </span>
              <span className="type-body break-all sm:break-normal">{site.email}</span>
            </a>
            <LocationLine />
          </div>

          <div className="mt-8">
            <Button onClick={openBooking} block className="sm:w-auto">
              {hero.primaryCta}
            </Button>
          </div>
        </Reveal>

        <Reveal delay={0.05}>
          <form onSubmit={onSubmit} className="contact-form">
            <div className="contact-form__intro">
              <p className="type-eyebrow">{contactForm.eyebrow}</p>
              <h3 className="contact-form__title font-display text-[clamp(1.65rem,3.2vw,2rem)] leading-[1.05] tracking-[-0.02em] text-text">
                {contactForm.title}
              </h3>
              <p className="contact-form__lead mt-2 max-w-sm text-[0.9375rem] leading-relaxed text-text-muted">
                {contactForm.lead}
              </p>
            </div>

            <div className="contact-form__fields">
              <Field label={contactForm.name} name="nombre" required autoComplete="name" />
              <Field
                label={contactForm.phone}
                name="telefono"
                type="tel"
                required
                autoComplete="tel"
                inputMode="tel"
              />
              <Field
                className="sm:col-span-2"
                label={contactForm.email}
                name="email"
                type="email"
                autoComplete="email"
              />
              <label className="contact-field sm:col-span-2">
                <span className="contact-label">{contactForm.message}</span>
                <textarea
                  name="mensaje"
                  rows={4}
                  required
                  className="contact-input contact-textarea focus-ring"
                  placeholder={contactForm.messagePlaceholder}
                />
              </label>
            </div>

            <div className="contact-form__actions">
              <Button type="submit" className="min-h-11" block>
                {sent ? contactForm.submitOpen : contactForm.submit}
              </Button>
              <p className="contact-form__phone">
                {contactForm.phoneOr}{" "}
                <a href={site.phoneHref} className="contact-form__phone-link focus-ring">
                  {site.phoneDisplay}
                </a>
              </p>
            </div>
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
  className = "",
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
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
        autoComplete={autoComplete}
        inputMode={inputMode}
        className="contact-input focus-ring"
      />
    </label>
  );
}
