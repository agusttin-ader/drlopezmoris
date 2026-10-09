/** Ancla de scroll alineada con el inicio visual de cada sección (mismo offset que #galería). */
export function SectionScrollTarget({
  id,
  className = "",
}: {
  id: string;
  className?: string;
}) {
  return (
    <span
      id={id}
      className={`section-scroll-target ${className}`.trim()}
      aria-hidden="true"
    />
  );
}
