"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useMessages } from "@/i18n/LocaleProvider";
import { Reveal } from "./Reveal";
import { Container } from "./ui/Container";
import { SectionHeading } from "./ui/SectionHeading";

export function FAQ() {
  const { faqs, faqsIntro } = useMessages();
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="section section-alt">
      <Container className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16 xl:gap-20 2xl:gap-24">
        <Reveal>
          <SectionHeading
            eyebrow={faqsIntro.eyebrow}
            title={faqsIntro.title}
            support={faqsIntro.support}
          />
          <p className="mt-5 type-small text-text-faint">{faqsIntro.disclaimer}</p>
        </Reveal>

        <Reveal delay={0.04}>
          <div className="divide-y divide-border border-y border-border">
            {faqs.map((item, index) => {
              const isOpen = open === index;
              return (
                <div key={item.question}>
                  <h3>
                    <button
                      type="button"
                      className="focus-ring flex min-h-14 w-full items-center justify-between gap-4 py-4 text-left"
                      aria-expanded={isOpen}
                      onClick={() => setOpen(isOpen ? null : index)}
                    >
                      <span className="font-display text-lg text-text sm:text-xl">
                        {item.question}
                      </span>
                      <span
                        aria-hidden
                        className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-border text-lg text-text-muted transition ${
                          isOpen ? "rotate-45 bg-accent-soft text-accent-hover" : ""
                        }`}
                      >
                        +
                      </span>
                    </button>
                  </h3>
                  <AnimatePresence initial={false}>
                    {isOpen ? (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="pb-5 pr-1 type-body text-text-muted">{item.answer}</p>
                      </motion.div>
                    ) : null}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
