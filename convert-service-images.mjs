// convert-service-images.mjs
// Convert PNG service images in public/images/services/ to WebP at 1600px wide.
// Deletes the source PNG after a successful conversion. Use --keep to preserve PNGs.
// Usage: node convert-service-images.mjs [--keep]

import sharp from 'sharp';
import { readdirSync, statSync, unlinkSync } from 'fs';
import { join } from 'path';

const DIR = './public/images/services';
const TARGET_WIDTH = 1600;
const QUALITY = 82;
const KEEP_PNG = process.argv.includes('--keep');

const pngs = readdirSync(DIR).filter((f) => f.toLowerCase().endsWith('.png'));

if (pngs.length === 0) {
  console.log('No PNGs to convert.');
  process.exit(0);
}

let beforeTotal = 0;
let afterTotal = 0;

for (const file of pngs) {
  const pngPath = join(DIR, file);
  const webpPath = pngPath.replace(/\.png$/i, '.webp');

  const beforeBytes = statSync(pngPath).size;
  beforeTotal += beforeBytes;

  try {
    await sharp(pngPath)
      .resize({ width: TARGET_WIDTH, withoutEnlargement: true })
      .webp({ quality: QUALITY })
      .toFile(webpPath);

    const afterBytes = statSync(webpPath).size;
    afterTotal += afterBytes;

    const ratio = ((1 - afterBytes / beforeBytes) * 100).toFixed(1);
    console.log(
      `  ✓ ${file.padEnd(34)}  ${(beforeBytes / 1024 / 1024).toFixed(2)} MB → ${(afterBytes / 1024).toFixed(0)} KB  (-${ratio}%)`
    );

    if (!KEEP_PNG) unlinkSync(pngPath);
  } catch (err) {
    console.error(`  ✗ ${file}: ${err.message}`);
  }
}

console.log(
  `\nTotal: ${(beforeTotal / 1024 / 1024).toFixed(1)} MB → ${(afterTotal / 1024 / 1024).toFixed(1)} MB`
);
if (!KEEP_PNG) console.log('PNGs removed.');
