"use client";

import { useEffect, useMemo, useState } from "react";
import { useMessages } from "@/i18n/LocaleProvider";
import { Reveal } from "./Reveal";
import { Container } from "./ui/Container";
import { SectionHeading } from "./ui/SectionHeading";

const VISIBLE_COUNT = 3;
const ROTATE_MS = 15000;

export function Testimonials() {
  const { site, testimonials, testimonialsIntro } = useMessages();
  const pageCount = Math.max(1, Math.ceil(testimonials.length / VISIBLE_COUNT));
  const [page, setPage] = useState(0);

  const visible = useMemo(() => {
    const start = (page % pageCount) * VISIBLE_COUNT;
    return testimonials.slice(start, start + VISIBLE_COUNT);
  }, [page, pageCount, testimonials]);

  useEffect(() => {
    if (pageCount <= 1) return;
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (media.matches) return;

    const id = window.setInterval(() => {
      setPage((p) => (p + 1) % pageCount);
    }, ROTATE_MS);

    return () => window.clearInterval(id);
  }, [pageCount]);

  return (
    <section aria-labelledby="testimonios-title" className="section">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow={testimonialsIntro.eyebrow}
            title={testimonialsIntro.title}
          />
        </Reveal>

        <div
          className="mt-10 space-y-0 divide-y divide-border border-y border-border md:mt-12 md:grid md:grid-cols-3 md:gap-8 md:space-y-0 md:divide-y-0 md:border-y-0 md:border-t md:pt-8 xl:gap-12 2xl:gap-14"
          aria-live="polite"
        >
          {visible.map((item, i) => (
            <Reveal key={`${page}-${item.quote.slice(0, 24)}`} delay={i * 0.05}>
              <figure
                className={`testimonial-card py-7 md:py-0 md:pr-6 xl:pr-8 ${
                  i < visible.length - 1 ? "md:border-r md:border-border" : ""
                }`}
              >
                <blockquote className="font-display text-[1.2rem] leading-snug text-text sm:text-xl md:text-[1.35rem] xl:text-[1.45rem] 2xl:text-[1.55rem]">
                  “{item.quote}”
                </blockquote>
                <figcaption className="mt-5">
                  {item.name ? (
                    <p className="font-medium text-text">{item.name}</p>
                  ) : null}
                  <p className="type-small text-text-faint">{item.detail}</p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.06}>
          <p className="mt-8 text-center md:mt-10">
            <a
              href={site.googleReviews}
              target="_blank"
              rel="noopener noreferrer"
              className="focus-ring type-small inline-flex min-h-11 items-center justify-center text-accent-hover underline-offset-4 hover:underline"
            >
              {testimonialsIntro.moreOnGoogle}
            </a>
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
