"use client";

import { testimonials, testimonialsIntro } from "@/lib/content";
import { Reveal } from "./Reveal";
import { Container } from "./ui/Container";
import { SectionHeading } from "./ui/SectionHeading";

export function Testimonials() {
  return (
    <section aria-labelledby="testimonios-title" className="section">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow={testimonialsIntro.eyebrow}
            title={testimonialsIntro.title}
            support={testimonialsIntro.support}
          />
        </Reveal>

        <div className="mt-10 space-y-0 divide-y divide-border border-y border-border md:mt-12 md:grid md:grid-cols-3 md:gap-8 md:space-y-0 md:divide-y-0 md:border-y-0 md:border-t md:pt-8">
          {testimonials.map((item, i) => (
            <Reveal key={item.name} delay={i * 0.05}>
              <figure className="py-7 md:py-0">
                <blockquote className="font-display text-[1.2rem] leading-snug text-text sm:text-xl md:text-[1.35rem]">
                  “{item.quote}”
                </blockquote>
                <figcaption className="mt-5">
                  <p className="font-medium text-text">{item.name}</p>
                  <p className="type-small text-text-faint">{item.detail}</p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
