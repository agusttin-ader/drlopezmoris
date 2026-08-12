import type { ReactNode } from "react";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  support?: string;
  tone?: "light" | "dark";
  align?: "left" | "center";
  className?: string;
  titleAs?: "h1" | "h2" | "h3";
  children?: ReactNode;
};

export function SectionHeading({
  eyebrow,
  title,
  support,
  tone = "light",
  align = "left",
  className = "",
  titleAs: TitleTag = "h2",
  children,
}: SectionHeadingProps) {
  const alignClass = align === "center" ? "text-center mx-auto items-center" : "text-left";
  const supportColor =
    tone === "dark" ? "text-inverse-muted" : "text-text-muted";

  return (
    <div className={`flex max-w-[40rem] flex-col ${alignClass} ${className}`.trim()}>
      {eyebrow ? <p className="type-eyebrow">{eyebrow}</p> : null}
      <TitleTag className={`type-h2 ${eyebrow ? "mt-3" : ""} text-inherit`}>{title}</TitleTag>
      {support ? (
        <p className={`type-support mt-4 ${supportColor}`}>{support}</p>
      ) : null}
      {children}
    </div>
  );
}
