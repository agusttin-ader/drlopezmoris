import type { MetadataRoute } from "next";
import { site } from "@/lib/content";
import { seoDescription } from "@/lib/seo";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: site.name,
    short_name: site.shortName,
    description: seoDescription,
    start_url: "/",
    display: "standalone",
    background_color: "#f7f5f2",
    theme_color: "#1a1c1b",
    lang: "es-AR",
    icons: [
      {
        src: "/icon-dark.png",
        sizes: "512x512",
        type: "image/png",
      },
      {
        src: "/apple-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  };
}
