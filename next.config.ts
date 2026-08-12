import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Sirve archivos estáticos de /public sin /_next/image.
    // Host-agnóstico (Vercel, Netlify, Node, static): no depende del Image Optimization de Vercel.
    unoptimized: true,
    // Valores usados por SmartImage / imagePresets (Next valida quality aunque esté unoptimized).
    qualities: [72, 75, 78, 80, 82, 85],
  },
  poweredByHeader: false,
};

export default nextConfig;
