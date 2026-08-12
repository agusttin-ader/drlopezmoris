import { SmartImage } from "./ui/SmartImage";
import { site } from "@/lib/content";

type BrandLogoProps = {
  /** Fondo detrás del isologotipo: define blanco o negro */
  on: "light" | "dark";
  size?: number;
  className?: string;
};

/** Isologotipo con contraste según superficie (oscuro = blanco, claro = negro). */
export function BrandLogo({ on, size = 32, className = "" }: BrandLogoProps) {
  return (
    <SmartImage
      src={site.logo}
      alt=""
      preset="logo"
      width={size}
      height={size}
      className={`brand-mark brand-mark--${on} object-contain ${className}`.trim()}
      aria-hidden
    />
  );
}
