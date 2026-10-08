/**
 * Presets de next/image: `sizes` guía el ancho generado por el optimizador;
 * `imageQuality` define compresión (AVIF/WebP) sin tocar los masters en /public.
 */

export const imageQuality = {
  /** Hero a pantalla completa (LCP) */
  hero: 84,
  /** Retratos de sección */
  section: 80,
  /** Tarjetas de galería / diplomas */
  card: 76,
  /** Visores a pantalla completa (antes/después) */
  viewer: 88,
  /** Logo y chrome chico */
  chrome: 80,
} as const;

export const imageSizes = {
  hero: "100vw",
  /** Retrato principal (Sobre mí) */
  portrait: "(max-width: 640px) 100vw, (max-width: 1024px) 92vw, 40vw",
  /** Miniaturas de retrato */
  portraitThumb: "(max-width: 1024px) 45vw, 18vw",
  /** Mitad de un par antes/después */
  galleryCard: "(max-width: 640px) 48vw, (max-width: 1024px) 45vw, 28vw",
  /** Grilla de diplomas */
  diplomaCard: "(max-width: 640px) 92vw, (max-width: 1024px) 44vw, 30vw",
  /** Lightbox / visor */
  viewer: "(max-width: 768px) 100vw, min(1100px, 85vw)",
  /** Comparador dentro del caso */
  compare: "(max-width: 768px) 100vw, min(1000px, 80vw)",  logo: "40px",
} as const;
