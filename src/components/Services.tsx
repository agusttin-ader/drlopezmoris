"use client";

import { useMessages } from "@/i18n/LocaleProvider";
import { useBooking } from "./BookingProvider";
import { Reveal } from "./Reveal";
import { Button } from "./ui/Button";
import { Container } from "./ui/Container";
import { SectionHeading } from "./ui/SectionHeading";

export function Services() {
  const { hero, services, servicesIntro } = useMessages();
  const { openBooking } = useBooking();

  return (
    <section id="servicios" className="section section-deep">
      <Container>
        <Reveal>
          <SectionHeading
            tone="dark"
            eyebrow={servicesIntro.eyebrow}
            title={servicesIntro.title}
            support={servicesIntro.support}
          />
        </Reveal>

        <div className="mt-10 sm:mt-12">
          {services.map((service, i) => (
            <Reveal key={service.id} delay={i * 0.05}>
              <article className="service-row grid gap-3 pl-4 sm:grid-cols-[5.5rem_1fr] sm:gap-8 sm:pl-5 md:grid-cols-[6.5rem_minmax(0,18rem)_1fr] xl:grid-cols-[7rem_minmax(0,20rem)_1fr] xl:gap-10 2xl:grid-cols-[7.5rem_minmax(0,22rem)_1fr]">
                <p className="font-display text-3xl text-white/22 sm:text-4xl xl:text-[2.75rem]">
                  0{i + 1}
                </p>
                <h3 className="type-h3 text-inverse sm:pt-1">{service.title}</h3>
                <p className="max-w-xl type-body text-inverse-muted md:pt-1.5 xl:max-w-2xl 2xl:max-w-3xl">
                  {service.description}
                </p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <div className="mt-12 flex flex-col gap-5 border-t border-white/10 pt-8 sm:mt-14 sm:flex-row sm:items-center sm:justify-between">
            <p className="max-w-md font-display text-xl text-inverse/90 sm:text-2xl">
              {servicesIntro.footer}
            </p>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button onClick={openBooking} variant="on-dark" className="w-full sm:w-auto">
                {hero.primaryCta}
              </Button>
              <a
                href="#galeria"
                className="focus-ring type-small inline-flex min-h-11 items-center justify-center text-inverse/70 underline-offset-4 hover:text-inverse hover:underline"
              >
                {servicesIntro.casesLink}
              </a>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
