import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    // Breakpoints pensados para hero full-bleed y cards en retina
    deviceSizes: [375, 414, 640, 750, 828, 1080, 1200, 1920, 2048, 2560],
    imageSizes: [48, 64, 96, 128, 256, 384, 640],
    qualities: [70, 72, 75, 78, 80, 82, 85],
    minimumCacheTTL: 60 * 60 * 24 * 30,
  },
  poweredByHeader: false,
};

export default nextConfig;
