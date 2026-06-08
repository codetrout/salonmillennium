// generate-service-images.mjs
// Usage: FAL_KEY=... node generate-service-images.mjs [--force]
// Generates per-service images for the service detail pages.

import { fal } from '@fal-ai/client';
import { writeFileSync, mkdirSync, existsSync } from 'fs';

if (process.env.FAL_KEY) {
  fal.config({ credentials: process.env.FAL_KEY });
}

const OUT_DIR = './public/images/services';
mkdirSync(OUT_DIR, { recursive: true });

const FORCE = process.argv.includes('--force');

const services = [
  {
    slug: 'balayage',
    prompt:
      "Editorial close-up of a hair stylist's hands hand-painting balayage highlights onto long dark brown hair with a brush. Warm honey and caramel tones being painted on. Soft natural light streaming from a window, cream-toned upscale salon interior background, blurred. Magazine-quality beauty photography, shallow depth of field, warm color grading. No visible faces.",
  },
  {
    slug: 'highlights-lowlights',
    prompt:
      "Editorial close-up of foil highlights being placed in a woman's long hair by a stylist's hands. Clean, precise foils visible. Soft natural window light, cream and warm wood salon interior background blurred. Magazine-quality beauty photography, shallow depth of field, warm color grading. No visible faces.",
  },
  {
    slug: 'color-correction',
    prompt:
      "Editorial side-profile photograph of beautifully restored multi-tonal brunette hair with soft natural waves, catching warm afternoon light. Cream-colored boutique salon interior softly blurred behind. Editorial beauty photography, warm and luxurious, shallow depth of field, warm color grading. No visible face — focus on the hair.",
  },
  {
    slug: 'root-touch-up',
    prompt:
      "Editorial close-up of a stylist's gloved hands precisely applying color along the part line at the roots of dark hair. Soft warm natural light, cream-toned upscale salon background, blurred. Magazine-quality beauty photography, shallow depth of field, warm color grading. No visible faces.",
  },
  {
    slug: 'full-color',
    prompt:
      "Editorial photograph of a woman with a fresh, rich, glossy all-over brunette color, hair catching warm afternoon light beautifully. Soft warm window light, cream-toned boutique salon interior softly blurred. Magazine-quality beauty photography, shallow depth of field, warm color grading. No visible face.",
  },
  {
    slug: 'camouflage-color-for-men',
    prompt:
      "Editorial side-angle photograph of a distinguished middle-aged man with naturally softened salt-and-pepper hair — refined, polished, never looking dyed. Clean contemporary boutique salon setting in warm cream tones, soft natural light from a window. Magazine-quality, shallow depth of field, warm color grading. Profile or three-quarter view, dignified and understated.",
  },
  {
    slug: 'haircuts-women',
    prompt:
      "Editorial close-up of a hair stylist's skilled hands holding professional shears mid-cut through long wet dark hair. Warm natural light from a side window, cream and warm wood boutique salon interior background. Magazine-quality beauty photography, shallow depth of field, warm color grading. Focus on technique and hands. No visible faces.",
  },
  {
    slug: 'haircuts-men',
    prompt:
      "Editorial close-up photograph of a stylist's hands using professional shears to cut a man's hair with precision and focus on technique. Warm afternoon light, cream-toned upscale boutique salon background. Magazine-quality, shallow depth of field, warm color grading. Focus on hands and technique, no visible faces.",
  },
  {
    slug: 'blow-dry-styling',
    prompt:
      "Editorial close-up of a round brush smoothing long glossy dark hair beneath a professional blow dryer. Visible movement and texture in the hair, soft warm window light, cream-toned upscale salon background. Magazine-quality beauty photography, shallow depth of field, warm color grading. No visible faces.",
  },
  {
    slug: 'keratin-treatment',
    prompt:
      "Editorial close-up of a hair stylist smoothing a keratin treatment through long dark hair using a fine brush. Hair appears glossy, smooth, and healthy. Soft warm natural light, cream-toned upscale boutique salon background. Magazine-quality beauty photography, shallow depth of field, warm color grading. Focus on technique. No visible faces.",
  },
  {
    slug: 'consultations',
    prompt:
      "Editorial wide-angle photograph of a styling station in an upscale boutique hair salon — a chair facing a mirror, fresh flowers in a small vase on a side table, a notebook open on the counter, warm afternoon light filtering through large storefront windows. Cream walls, warm wood floors. Inviting, conversational atmosphere. No people. Architectural interior photography, warm color grading.",
  },
];

async function generate(svc) {
  const outPath = `${OUT_DIR}/${svc.slug}.png`;
  if (!FORCE && existsSync(outPath)) {
    console.log(`  ↷ skip ${svc.slug} (exists)`);
    return;
  }
  console.log(`Generating: ${svc.slug}...`);
  try {
    const result = await fal.subscribe('fal-ai/nano-banana-2', {
      input: {
        prompt: svc.prompt,
        num_images: 1,
        aspect_ratio: '4:5',
        output_format: 'png',
        resolution: '2K',
        safety_tolerance: '4',
      },
    });
    const url = result.data.images[0].url;
    const response = await fetch(url);
    const buffer = await response.arrayBuffer();
    writeFileSync(outPath, Buffer.from(buffer));
    console.log(`  ✓ saved ${outPath}`);
  } catch (err) {
    console.error(`  ✗ failed ${svc.slug}:`, err.message);
  }
}

for (const svc of services) {
  await generate(svc);
}

console.log('\nDone.');
