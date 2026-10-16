import { getImageProps } from "next/image";
import { imageQuality, imageSizes } from "@/lib/imagePresets";

const warmed = new Set<string>();

/** Prefetch de URLs optimizadas por next/image (AVIF/WebP) sin montar React. */
export function prefetchOptimizedImages(srcs: string[], preset: "viewer" | "compare" = "viewer") {
  if (typeof window === "undefined") return;

  for (const src of srcs) {
    if (!src || warmed.has(src)) continue;
    warmed.add(src);

    try {
      const { props } = getImageProps({
        src,
        alt: "",
        width: 1100,
        height: 1375,
        sizes: imageSizes[preset],
        quality: imageQuality.viewer,
      });

      const candidates = [props.src, ...(props.srcSet?.split(",").map((part) => part.trim().split(/\s+/)[0]) ?? [])];
      for (const url of candidates.slice(0, 2)) {
        if (!url) continue;
        const img = new Image();
        img.decoding = "async";
        img.src = url;
      }
    } catch {
      /* ignore malformed src */
    }
  }
}
