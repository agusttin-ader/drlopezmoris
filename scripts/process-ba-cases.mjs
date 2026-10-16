/**
 * Corta composites antes|después (izq|der) de public/images/ba/casoN/
 * y escribe pares optimizados en public/images/ba/casoN-*.jpg
 * También regenera/mezcla blurs en src/lib/blurs.ts
 *
 * Uso: node scripts/process-ba-cases.mjs [5] [6] [7]
 */
import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";

const ROOT = process.cwd();
const BA = path.join(ROOT, "public/images/ba");
const BLURS_PATH = path.join(ROOT, "src/lib/blurs.ts");
const MAX_W = 640;
const JPEG_Q = 82;

/** foto → ángulo (slug de archivo) */
const MAPS = {
  5: {
    "foto1.jpeg": "perfil-izq-sonrisa",
    "foto2.jpeg": "superior",
    "foto3.jpeg": "tres-cuartos-izq",
    "foto4.jpeg": "frente",
    "foto5.jpeg": "basal",
    "foto6.jpeg": "tres-cuartos-der",
    "foto7.jpeg": "perfil-izq",
    "foto8.jpeg": "perfil-der",
    "foto9.jpeg": "perfil-der-sonrisa",
    "foto10.jpeg": "frente-sonrisa",
  },
  6: {
    "foto1.jpeg": "tres-cuartos-izq",
    "foto2.jpeg": "perfil-izq",
    "foto3.jpeg": "superior",
    "foto4.jpeg": "perfil-der-sonrisa",
    "foto5.jpeg": "tres-cuartos-der",
    "foto6.jpeg": "perfil-der",
    "foto7.jpeg": "perfil-izq-sonrisa",
    "foto8.jpeg": "basal",
    "foto9.jpeg": "frente-sonrisa",
  },
  7: {
    "foto1.jpeg": "perfil-izq",
    "foto2.jpeg": "superior",
    "foto3.jpeg": "basal",
    "foto4.jpeg": "perfil-der",
    "foto5.jpeg": "perfil-der-sonrisa",
    "foto6.jpeg": "perfil-izq-sonrisa",
  },
};

async function splitOne(srcPath, outAntes, outDespues) {
  const meta = await sharp(srcPath).rotate().metadata();
  const w = meta.width ?? 0;
  const h = meta.height ?? 0;
  if (!w || !h) throw new Error(`Sin tamaño: ${srcPath}`);
  const half = Math.floor(w / 2);

  const writeHalf = async (left, out) => {
    await sharp(srcPath)
      .rotate()
      .extract({ left, top: 0, width: half, height: h })
      .resize({ width: MAX_W, withoutEnlargement: true })
      .jpeg({ quality: JPEG_Q, mozjpeg: true })
      .toFile(out);
  };

  await writeHalf(0, outAntes);
  await writeHalf(half, outDespues);
}

async function blurFor(filePath) {
  const buf = await sharp(filePath)
    .resize(24, 36, { fit: "cover" })
    .jpeg({ quality: 40 })
    .toBuffer();
  return `data:image/jpeg;base64,${buf.toString("base64")}`;
}

function mergeBlurs(newEntries) {
  const src = fs.readFileSync(BLURS_PATH, "utf8");
  const start = src.indexOf("export const blurs = {");
  const end = src.indexOf("} as const;", start);
  if (start < 0 || end < 0) throw new Error("No encontré el objeto blurs");

  const head = src.slice(0, start);
  const body = src.slice(start, end);
  const tail = src.slice(end);

  let next = body;
  for (const [key, value] of Object.entries(newEntries)) {
    const line = `  ${JSON.stringify(key)}: ${JSON.stringify(value)},\n`;
    const re = new RegExp(`^\\s*${JSON.stringify(key)}:\\s*"[^"]*",\\n`, "m");
    if (re.test(next)) next = next.replace(re, line);
    else next = next.replace(/\n$/, `\n${line}`);
  }

  fs.writeFileSync(BLURS_PATH, head + next + (next.endsWith("\n") ? "" : "\n") + tail);
}

async function processCase(n) {
  const map = MAPS[n];
  if (!map) throw new Error(`Sin mapa para caso ${n}`);
  const dir = path.join(BA, `caso${n}`);
  const blurEntries = {};

  for (const [file, angle] of Object.entries(map)) {
    const src = path.join(dir, file);
    if (!fs.existsSync(src)) {
      console.warn(`  skip missing ${src}`);
      continue;
    }
    const antes = path.join(BA, `caso${n}-${angle}-antes.jpg`);
    const despues = path.join(BA, `caso${n}-${angle}-despues.jpg`);
    await splitOne(src, antes, despues);
    const aStat = fs.statSync(antes);
    const dStat = fs.statSync(despues);
    console.log(
      `  ${file} → caso${n}-${angle}-*.jpg (${Math.round(aStat.size / 1024)}k / ${Math.round(dStat.size / 1024)}k)`,
    );
    blurEntries[`ba/caso${n}-${angle}-antes.jpg`] = await blurFor(antes);
    blurEntries[`ba/caso${n}-${angle}-despues.jpg`] = await blurFor(despues);
  }
  return blurEntries;
}

const args = process.argv.slice(2).map(Number).filter(Boolean);
const cases = args.length ? args : [5, 6, 7];

const allBlurs = {};
for (const n of cases) {
  console.log(`caso${n}`);
  Object.assign(allBlurs, await processCase(n));
}
mergeBlurs(allBlurs);
console.log(`blurs: +${Object.keys(allBlurs).length} keys`);
