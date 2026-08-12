import { nav, site } from "@/lib/content";
import { BrandLogo } from "./BrandLogo";
import { Container } from "./ui/Container";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-deep text-inverse">
      <Container className="grid gap-10 py-12 sm:py-14 md:grid-cols-[1.25fr_1fr_1fr]">
        <div>
          <div className="flex items-center gap-3">
            <BrandLogo on="dark" size={40} className="h-10 w-10" />
            <div>
              <p className="font-display text-2xl leading-none">{site.name}</p>
              <p className="mt-1 type-small text-inverse/60">{site.title}</p>
            </div>
          </div>
          <p className="mt-5 max-w-sm type-small leading-relaxed text-inverse/65">
            {site.footerBlurb}
          </p>
        </div>

        <div>
          <p className="type-eyebrow !text-inverse/45">Navegación</p>
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
          <p className="type-eyebrow !text-inverse/45">Contacto</p>
          <ul className="mt-4 space-y-3 text-inverse/75">
            <li>
              <a href={site.phoneHref} className="hover:text-inverse">
                {site.phoneDisplay}
              </a>
            </li>
            <li>
              <a href={`mailto:${site.email}`} className="hover:text-inverse">
                {site.email}
              </a>
            </li>
            <li>
              <a
                href={site.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-inverse"
              >
                Instagram
              </a>
            </li>
            <li>
              <a
                href={site.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-inverse"
              >
                LinkedIn
              </a>
            </li>
            <li className="type-small text-inverse/50">{site.matricula}</li>
          </ul>
        </div>
      </Container>

      <div className="border-t border-white/10">
        <Container className="flex flex-col gap-2 py-5 type-small text-inverse/45 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {site.name}. Todos los derechos reservados.
          </p>
          <p>Buenos Aires, Argentina</p>
        </Container>
      </div>
    </footer>
  );
}
