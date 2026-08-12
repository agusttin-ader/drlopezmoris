# Dr. Carlos López Moris

Sitio web del Dr. Carlos López Moris, otorrinolaringólogo especialista en rinología y cirugía nasal en Buenos Aires.

Consulta en Hospital Universitario CEMIC y consultorio en Palermo.

## Stack

- Next.js (App Router)
- TypeScript
- Tailwind CSS
- Framer Motion

## Desarrollo

```bash
npm install
npm run dev
```

Abrí [http://localhost:3000](http://localhost:3000).

## Producción

```bash
npm run build
npm start
```

Las imágenes se sirven estáticas desde `public/images` (`images.unoptimized`). No dependen del Image Optimization de Vercel (`/_next/image`), así que el deploy funciona igual en cualquier host.

## Contenido

Los textos, datos de contacto, galería y diplomas están centralizados en `src/lib/content.ts`.
