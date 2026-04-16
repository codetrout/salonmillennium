// generate-images.mjs
// Usage: FAL_KEY=your_key_here node generate-images.mjs

import { fal } from "@fal-ai/client";
import { writeFileSync, mkdirSync } from "fs";

mkdirSync("./public/images", { recursive: true });

const images = [
  {
    name: "hero-salon",
    aspect_ratio: "16:9",
    prompt: "A luxurious hair salon interior photographed from inside, warm natural light streaming through large windows onto a tree-lined California avenue in Palo Alto. Cream and warm wood tones, elegant minimalist decor, a single styling chair in focus with beautiful warm lighting. Editorial photography style, shallow depth of field, soft golden hour light. No people. Clean, sophisticated, inviting atmosphere."
  },
  {
    name: "color-service",
    aspect_ratio: "4:5",
    prompt: "Close-up editorial photograph of a woman's hair being colored with balayage technique by a stylist's hands wearing black gloves. Beautiful warm honey-blonde highlights being painted onto dark brown hair with a brush. Soft studio lighting, shallow depth of field, warm color palette. Professional salon setting, cream-toned background. High-end editorial beauty photography."
  },
  {
    name: "balayage-result",
    aspect_ratio: "4:5",
    prompt: "Editorial beauty photograph of the back of a woman's head showing beautiful balayage hair color, warm honey and caramel tones blending through dark brown hair, soft loose waves. Soft natural window light from the left, cream-colored salon interior background blurred. Shot with 85mm lens, shallow depth of field. Warm, luxurious, magazine-quality."
  },
  {
    name: "products-display",
    aspect_ratio: "3:2",
    prompt: "A curated arrangement of high-end hair care products on a warm marble surface with soft natural light. Minimalist bottles and tubes in muted neutral tones, whites, creams, pale pinks. A small eucalyptus sprig and a wooden comb beside them. Clean editorial product photography, soft shadows, warm color grading. No visible brand names or text on bottles."
  },
  {
    name: "haircut-service",
    aspect_ratio: "4:5",
    prompt: "Editorial photograph of a hairstylist cutting a woman's hair in a beautiful salon. Focus on the stylist's skilled hands holding professional shears, cutting wet dark hair with precision. Warm natural lighting from a nearby window. Cream and warm wood salon interior. Shot from the side at a slight angle. Shallow depth of field, warm tones, professional beauty photography."
  },
  {
    name: "salon-atmosphere",
    aspect_ratio: "16:9",
    prompt: "Wide interior photograph of an upscale boutique hair salon on a tree-lined street in Palo Alto, California. Warm afternoon light filtering through large storefront windows. Two styling stations with elegant mirrors, fresh flowers in a vase, warm wood floors, cream walls. Cozy and sophisticated atmosphere. No people. Architectural interior photography, warm color grading."
  }
];

async function generateImages() {
  for (const img of images) {
    console.log(`Generating: ${img.name}...`);
    try {
      const result = await fal.subscribe("fal-ai/nano-banana-2", {
        input: {
          prompt: img.prompt,
          num_images: 1,
          aspect_ratio: img.aspect_ratio,
          output_format: "jpeg",
          resolution: "2K",
          safety_tolerance: "4"
        }
      });
      const url = result.data.images[0].url;
      const response = await fetch(url);
      const buffer = await response.arrayBuffer();
      writeFileSync(`./public/images/${img.name}.webp`, Buffer.from(buffer));
      console.log(`  ✓ Saved: public/images/${img.name}.webp`);
    } catch (err) {
      console.error(`  ✗ Failed: ${img.name}`, err.message);
    }
  }
  console.log("\nDone. Images saved to ./public/images/");
  console.log("Astro's <Image /> component will handle WebP conversion automatically.");
}

generateImages();
