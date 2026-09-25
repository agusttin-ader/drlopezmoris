"use client";

import Image from "next/image";
import { useMessages } from "@/i18n/LocaleProvider";
import { BrandLogo } from "./BrandLogo";
import { MailIcon } from "./icons/MailIcon";
import { LocationLine } from "./LocationLine";
import { SocialLinks } from "./SocialLinks";
import { Container } from "./ui/Container";

export function Footer() {
  const { nav, site, footerCopy } = useMessages();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-deep text-inverse">
      <Container className="grid gap-10 py-12 sm:py-14 md:grid-cols-[1.25fr_1fr_1fr] xl:gap-12 xl:py-16 2xl:py-[4.5rem]">
        <div>
          <div className="flex items-center gap-3">
            <BrandLogo on="dark" size={44} className="h-11 w-11" />
            <div>
              <p className="font-display text-2xl leading-none">{site.name}</p>
              <p className="mt-1 type-small text-inverse/60">{site.title}</p>
            </div>
          </div>
          <p className="mt-5 max-w-sm type-small leading-relaxed text-inverse/65">
            {site.footerBlurb}
          </p>
          <SocialLinks className="mt-6" />
        </div>

        <div>
          <p className="type-eyebrow !text-inverse/45">{footerCopy.navEyebrow}</p>
          <ul className="mt-4 space-y-2">
            {nav.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="text-inverse/75 transition hover:text-inverse">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="type-eyebrow !text-inverse/45">{footerCopy.contactEyebrow}</p>
          <ul className="mt-4 space-y-4 text-inverse/75">
            <li>
              <a
                href={`mailto:${site.email}`}
                className="contact-mail break-all hover:text-inverse sm:break-normal"
              >
                <span className="contact-mail__icon text-inverse/55" aria-hidden>
                  <MailIcon />
                </span>
                <span className="type-body">{site.email}</span>
              </a>
            </li>
            <li>
              <LocationLine tone="dark" />
            </li>
            <li className="type-small text-inverse/50">{site.matricula}</li>
          </ul>
        </div>
      </Container>

      <div id="footer-credits" className="border-t border-white/10">
        <Container
          className="footer-credits flex flex-col gap-4 py-5 pb-[max(1.25rem,env(safe-area-inset-bottom))] sm:flex-row sm:items-center sm:justify-between sm:gap-6"
        >
          <div className="flex flex-col gap-1.5 type-small text-inverse/45 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-4 sm:gap-y-1">
            <p>
              © {year} {site.name}. {footerCopy.rights}
            </p>
            <p>{site.location}</p>
          </div>

          <a
            href="https://www.agustinaderdev.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-dev group inline-flex max-w-full shrink-0 items-center gap-2.5 text-xs leading-snug text-white/65 no-underline transition-colors duration-200 hover:text-white/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/40"
            aria-label={footerCopy.devAria}
          >
            <span className="relative block h-7 w-[2.22rem] shrink-0 sm:h-8 sm:w-[2.55rem]">
              <Image
                src="/images/logo-dev/logo-dev.webp"
                alt=""
                fill
                unoptimized
                sizes="32px"
                className="object-contain object-left drop-shadow-[0_0_1.5px_rgba(255,255,255,0.85)]"
              />
            </span>
            <span>
              {footerCopy.devCredit}{" "}
              <span className="font-medium text-white/85 group-hover:text-white/95">Agustin Ader</span>
            </span>
          </a>
        </Container>
      </div>
    </footer>
  );
}
