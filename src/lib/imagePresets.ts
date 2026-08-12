/**
 * Presets de next/image (layout / hinting).
 * Con `images.unoptimized` el navegador recibe el archivo de /public tal cual;
 * `sizes` sigue siendo útil para el atributo HTML y futuras optimizaciones.
 * `imageQuality` se mantiene por API de SmartImage (no-op en runtime unoptimized).
 */

export const imageQuality = {
  /** Hero a pantalla completa (LCP) */
  hero: 82,
  /** Retratos de sección */
  section: 78,
  /** Tarjetas de galería / diplomas */
  card: 72,
  /** Visores a pantalla completa */
  viewer: 85,
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
  compare: "(max-width: 768px) 100vw, min(1000px, 80vw)",
  logo: "40px",
} as const;
