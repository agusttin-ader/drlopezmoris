"use client";

import { useMessages } from "@/i18n/LocaleProvider";
import { useBooking } from "./BookingProvider";
import { Reveal } from "./Reveal";
import { Button } from "./ui/Button";
import { Container } from "./ui/Container";
import { SectionHeading } from "./ui/SectionHeading";
import { SmartImage } from "./ui/SmartImage";

export function About() {
  const { about, hero } = useMessages();
  const { openBooking } = useBooking();

  return (
    <section id="sobre-mi" className="section">
      <Container>
        <div className="grid items-start gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16 xl:gap-20 2xl:gap-24">
          <Reveal variant="soft" className="lg:sticky lg:top-24">
            <div className="grid gap-3">
              <div className="media-frame media-frame--portrait media-skeleton w-full">
                <SmartImage
                  src={about.images[0].src}
                  alt={about.images[0].alt}
                  preset="portrait"
                  fill
                  className="object-cover object-[50%_18%]"
                />
              </div>
              <div className="hidden grid-cols-2 gap-3 sm:grid">
                {about.images.slice(1).map((img, i) => (
                  <div key={img.src} className="media-frame media-skeleton aspect-[4/5]">
                    <SmartImage
                      src={img.src}
                      alt={img.alt}
                      preset="portraitThumb"
                      fill
                      className={
                        i === 0
                          ? "object-cover object-[50%_20%]"
                          : "object-cover object-[50%_15%]"
                      }
                    />
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <div>
            <Reveal>
              <SectionHeading
                eyebrow={about.eyebrow}
                title={about.title}
                support={about.concise}
              />
            </Reveal>

            <Reveal delay={0.08}>
              <blockquote className="mt-8 border-l border-accent pl-4 font-display text-[1.35rem] leading-snug text-text sm:pl-5 sm:text-[1.65rem]">
                “{about.quote}”
              </blockquote>
            </Reveal>

            <Reveal delay={0.12}>
              <div className="mt-7 space-y-4">
                {about.paragraphs.map((p) => (
                  <p key={p.slice(0, 28)} className="type-body text-text-muted">
                    {p}
                  </p>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.16}>
              <dl className="mt-9 grid grid-cols-2 gap-x-4 gap-y-5 border-t border-border pt-6 sm:grid-cols-3 sm:gap-3">
                {about.highlights.map((item) => (
                  <div key={item.label} className="min-w-0">
                    <dt className="text-[0.6875rem] font-medium uppercase leading-snug tracking-[0.08em] text-text-faint sm:type-small sm:tracking-[0.1em]">
                      {item.label}
                    </dt>
                    <dd className="mt-1 font-display text-base text-text sm:text-lg md:text-xl">
                      {item.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <Button onClick={openBooking} className="w-full sm:w-auto">
                  {hero.primaryCta}
                </Button>
                <a
                  href="#servicios"
                  className="focus-ring type-small inline-flex min-h-11 items-center justify-center px-1 text-accent-hover underline-offset-4 hover:underline"
                >
                  {about.servicesLink}
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
