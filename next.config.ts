import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Sirve archivos estáticos de /public sin /_next/image.
    // Host-agnóstico (Vercel, Netlify, Node, static): no depende del Image Optimization de Vercel.
    unoptimized: true,
  },
  poweredByHeader: false,
};

export default nextConfig;
