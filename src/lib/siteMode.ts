/** En Vercel: SITE_MODE=coming-soon hasta el lanzamiento; quitar o usar otro valor para el sitio completo. */
export function isComingSoon(): boolean {
  return process.env.SITE_MODE === "coming-soon";
}
