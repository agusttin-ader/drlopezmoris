import Image, { type ImageProps } from "next/image";
import { blurDataURL } from "@/lib/blurs";
import { imageQuality, imageSizes } from "@/lib/imagePresets";

type Preset = keyof typeof imageSizes;

type SmartImageProps = Omit<ImageProps, "src" | "alt" | "placeholder" | "blurDataURL"> & {
  src: string;
  alt: string;
  preset: Preset;
  /** Calidad opcional; si no se pasa, usa la del preset */
  quality?: number;
};

const qualityForPreset: Record<Preset, number> = {
  hero: imageQuality.hero,
  portrait: imageQuality.section,
  portraitThumb: imageQuality.card,
  galleryCard: imageQuality.card,
  diplomaCard: imageQuality.card,
  viewer: imageQuality.viewer,
  compare: imageQuality.viewer,
  logo: imageQuality.chrome,
};

/** Imagen optimizada con tamaños, calidad y blur según el preset. */
export function SmartImage({
  src,
  alt,
  preset,
  quality,
  priority,
  loading,
  className,
  ...rest
}: SmartImageProps) {
  const blur = preset === "logo" ? undefined : blurDataURL(src);
  const resolvedQuality = quality ?? qualityForPreset[preset];

  return (
    <Image
      src={src}
      alt={alt}
      sizes={imageSizes[preset]}
      quality={resolvedQuality}
      placeholder={blur ? "blur" : "empty"}
      blurDataURL={blur}
      priority={priority}
      loading={priority ? undefined : loading ?? "lazy"}
      className={className}
      {...rest}
    />
  );
}
