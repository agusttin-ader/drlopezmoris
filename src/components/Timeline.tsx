"use client";

import { timeline, timelineIntro } from "@/lib/content";
import { Reveal } from "./Reveal";
import { Container } from "./ui/Container";
import { SectionHeading } from "./ui/SectionHeading";

export function Timeline() {
  return (
    <section id="formacion" className="section">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow={timelineIntro.eyebrow}
            title={timelineIntro.title}
            support={timelineIntro.support}
          />
        </Reveal>

        <ol className="relative mt-10 space-y-0 sm:mt-12">
          <div
            aria-hidden
            className="absolute bottom-3 left-[0.45rem] top-3 w-px bg-border md:left-1/2 md:-translate-x-1/2"
          />
          {timeline.map((item, index) => {
            const left = index % 2 === 0;
            return (
              <Reveal key={`${item.year}-${item.title}`} delay={index * 0.03}>
                <li className="relative grid gap-1 py-5 pl-7 md:grid-cols-2 md:gap-10 md:py-6 md:pl-0">
                  <span
                    aria-hidden
                    className="absolute left-0 top-7 h-2.5 w-2.5 rounded-full border-2 border-accent bg-background md:left-1/2 md:top-8 md:-translate-x-1/2"
                  />
                  <div
                    className={
                      left ? "md:pr-12 md:text-right" : "md:col-start-2 md:pl-12"
                    }
                  >
                    <p className="font-display text-3xl text-accent-hover sm:text-4xl">
                      {item.year}
                    </p>
                    <h3 className="type-h3 mt-1 text-text">{item.title}</h3>
                    <p className="mt-1 type-body text-text-muted">{item.place}</p>
                  </div>
                  {left ? <div className="hidden md:block" aria-hidden /> : null}
                </li>
              </Reveal>
            );
          })}
        </ol>

        <Reveal delay={0.08}>
          <div className="mt-10 flex flex-col gap-3 border-t border-border pt-8 sm:mt-12 sm:flex-row sm:items-center sm:justify-between">
            <p className="type-body max-w-lg text-text-muted">{timelineIntro.footer}</p>
            <a
              href="#diplomas"
              className="focus-ring type-small inline-flex min-h-11 items-center text-accent-hover underline-offset-4 hover:underline"
            >
              {timelineIntro.diplomasLink}
            </a>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
