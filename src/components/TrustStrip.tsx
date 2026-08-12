"use client";

import { trustIntro, trustItems } from "@/lib/content";
import { Reveal } from "./Reveal";
import { Container } from "./ui/Container";

export function TrustStrip() {
  return (
    <section aria-label="Credenciales" className="border-b border-border bg-surface">
      <Container className="py-7 sm:py-8 md:py-9">
        <Reveal>
          <p className="type-eyebrow mb-4">{trustIntro.eyebrow}</p>
          <ul className="flex flex-col gap-2.5 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-0 sm:gap-y-2">
            {trustItems.map((item, index) => (
              <li
                key={item}
                className="flex items-center type-small text-text-muted sm:text-[0.9375rem]"
              >
                {index > 0 ? (
                  <span
                    aria-hidden
                    className="mx-3 hidden h-1 w-1 rounded-full bg-border-strong sm:inline-block"
                  />
                ) : null}
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </Container>
    </section>
  );
}
