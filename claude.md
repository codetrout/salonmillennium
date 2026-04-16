# Salon Millennium — Website Rebuild (claude.md)

## Project Overview
A complete website refresh for **Salon Millennium**, a hair salon established in 2000, now located at 409 California Ave, Palo Alto, CA 94306 (inside Casual Chic Salon). The site is built with **Astro JS** — static, fast, and SEO-optimized. The current Wix site is essentially non-functional: every subpage redirects to a near-empty homepage with broken links and dead pages (COVID Policy, Just Roots, San Carlos location, etc.). This is a ground-up rebuild.

---

## Business Details
- **Name:** Salon Millennium
- **Owner:** Elena Butte (Master Stylist & Colorist)
- **Established:** 2000 (originally in San Carlos, CA — do NOT reference the old location on the site)
- **Current Location:** 409 California Ave, Palo Alto, CA 94306 (Inside Casual Chic Salon)
- **Phone:** (650) 654-2088
- **Current Website:** https://www.salonmillennium.com
- **Minority-owned business**

## Team
- **Elena Butte** — Owner, Master Stylist & Colorist. 25+ years of experience. Known as the best colorist in the Bay Area by loyal clients. Specializes in hair color, balayage, color correction, highlights, haircuts. Her mother-daughter dynamic with Sahar is beloved by clients.
- **Sahar** — Elena's daughter. Skilled in balayage, curling, keratin treatments. Clients love her warmth, personalized approach, and attention to individual needs.
- **Quy Tran** — Stylist. Known for efficiency, same-day availability, and excellent haircuts. Regular clients praise her skill and friendliness.
- **Cindy** — Stylist. Praised for dedication, thoroughness, and quality haircuts. Years of experience.

## Products
Salon Millennium exclusively features products from **KEVIN.MURPHY** — "Skin Care for Your Hair."
- Product link: https://kevinmurphy.com.au/us/en/pro/
- Categories: Washes, Rinses, Treatments, Styling, Colour Care, Tools
- Regimens: Blonde, Blow.Dry, Curl, Detox, Hydrate, Protect, Repair, Smooth, Volume, Thickening
- Products are sold at fair, non-inflated prices (per client feedback)
- KEVIN.MURPHY brand ethos: sustainable, cruelty-free, salon-quality, fashion-forward — this aligns well with the Palo Alto clientele

## Services Offered
- **Hair Color** (specialty — balayage, highlights, color correction, root touch-ups)
- **Haircuts** (men & women)
- **Blow Dry / Styling**
- **Keratin Treatment**
- **Manicures**
- **Consultations**

---

## Key Narrative & Messaging

Elena Butte is the heart of Salon Millennium. She founded the salon in 2000 and has built a loyal clientele over 25+ years through exceptional color work, genuine warmth, and a family atmosphere. Her daughter Sahar works alongside her — clients describe them as looking more like sisters. The salon is known for:

1. **Color Excellence** — Elena is repeatedly called "the best colorist in the Bay Area." She listens, consults carefully, and delivers exactly what clients envision. Color is the salon's signature.
2. **Warm, Personal Service** — Walking in feels like coming home. Every client is greeted warmly and given a thorough consultation.
3. **Family Atmosphere** — The mother-daughter duo of Elena and Sahar creates a unique, fun, genuine energy that clients love.
4. **Quality Products** — KEVIN.MURPHY products exclusively, sold at fair prices.
5. **Prime Palo Alto Location** — On California Ave in downtown Palo Alto, in the heart of the neighborhood.

## Primary Call to Action
**"Book Your Color Appointment"** — Link to the salon's online booking page (URL TBD — confirm with salon owner). Use a prominent button in the hero, in the nav, and repeated throughout service descriptions. Use `#book` as a placeholder href until the actual booking URL is confirmed.

Secondary CTA: **"Call (650) 654-2088"** — always visible in header/footer.

## Cancellation Policy
24-hour cancellation policy. Mention subtly in footer or booking context — not as a headline.

---

## Curated Reviews (use for testimonials section)

### From Yelp (163 reviews):
- **Simone D., Belmont** — Praised the warm greeting, called Elena the best colorist in the Bay Area, highlighted her listening skills and great advice. Noted the salon is beautiful and products are fairly priced.
- **Maki U., Palo Alto** — Praised Quy for being friendly, squeezing her in same-day, and delivering a haircut she loves. Hair felt and looked healthy.
- **Nidhi S., Sunnyvale** — Got balayage from Elena. Praised the thorough consultation, exact replication of her desired look, Sahar's curling skills, and the mother-daughter dynamic. Called the salon beautiful and clean.

### From Google (4.0 stars, 48 reviews):
- **Stinger GT2 tv** — Called the salon truly exceptional, praised Elena's professionalism, warm welcome, and creative approach.
- **Ady** — Raved about Sahar's balayage work and personalized approach.
- **Marina Azova** — Loyal client, praised Elena's cuts, color, and blow dry services.
- **Lisa Newman** — Long-time client, called Elena "pure magic" with highlights. Praised her speed (highlights + cut in ~90 minutes).
- **diana anvari** — Called it the best hair she's ever had.
- **Aditi Lonhari** — Praised Elena, professional and friendly environment, reasonable prices.
- **Suraj Borkar** — Regular client of Quy, highly recommended.
- **Himica Khurana** — Praised Cindy's talent, thoroughness, and experience.

### Aggregate Ratings:
- **Yelp:** 163 reviews
- **Google:** 4.0/5 (48 reviews)
- **Vagaro:** 4.9/5 (12 reviews)
- **Groupon:** 4.2/5 (573 reviews)

---

## Site Architecture

### Pages:
1. **Home** (`/`) — Hero with salon name + booking CTA, brief "about Elena" section, featured testimonials (3), services overview cards, KEVIN.MURPHY products mention, contact bar with map
2. **About** (`/about`) — Elena's story and philosophy, the team (Elena, Sahar, Quy, Cindy), salon values
3. **Services** (`/services`) — Color services (primary, top of page), cuts, treatments, styling. Each with booking CTA.
4. **Reviews** (`/reviews`) — Curated testimonial wall with platform aggregate ratings
5. **Contact** (`/contact`) — Address, phone, hours placeholder, embedded Google Map, booking CTA

### Navigation:
`Home | About | Services | Reviews | Contact | [Book Now]` — "Book Now" is a visually distinct CTA button, not a plain link.

### Footer:
Address, phone, hours placeholder, KEVIN.MURPHY link, copyright. Simple and clean.

---

## Design Direction & Aesthetic

### Overall Vibe
**Refined California luxury.** The website should feel like it belongs on California Ave in Palo Alto — upscale but approachable, polished but warm, never cold or pretentious. Think curated boutique, not corporate spa chain. The aesthetic should appeal to Palo Alto's educated, design-conscious clientele — people who appreciate quality, subtlety, and taste. The feel should land somewhere between Aesop and a high-end architectural magazine.

### Color Palette
- **Background:** Warm off-white / cream (`#FAF7F2`) — never stark white
- **Primary text:** Deep warm charcoal (`#2C2825`) — never pure black
- **Accent:** Warm gold / antique bronze (`#B8926A`) — for CTAs, highlights, and decorative elements. This is the signature color. Use sparingly for maximum impact.
- **Secondary accent:** Soft sage or muted olive (`#8A9A7B`) — optional, for subtle variety
- **Card/section backgrounds:** Very light warm gray (`#F0ECE6`) for alternating sections
- **CTA button:** Warm gold (`#B8926A`) background with cream (`#FAF7F2`) text. Hover: darken to `#A07B55`.

Avoid: pink, purple, neon, anything that reads as generic "salon" or "spa." No gradients unless very subtle and warm-toned.

### Typography

**Headings / Display:** Use **Cormorant Garant** (Google Fonts) — an elegant, high-contrast serif with an editorial feel. It reads as refined and literary without being stuffy. Use weights 300 (light) for large hero text and 500 (medium) for section headings. Generous letter-spacing on uppercase usage (`0.15em`–`0.2em`).

**Body text:** Use **Jost** (Google Fonts) — a geometric sans-serif inspired by 1920s Futura but warmer and more contemporary. It pairs beautifully with Cormorant and reads as modern-European, which fits the salon's sensibility. Weight 300 (light) for body copy, 400 (regular) for UI elements, 500 (medium) for emphasis.

**Monospace / Detail text (optional):** Use **Jost** at a smaller size with increased letter-spacing for labels, nav items, or metadata.

**Type Scale:**
- Hero headline: `clamp(2.5rem, 5vw, 4.5rem)` — Cormorant, light weight, uppercase, wide letter-spacing
- Section headlines: `clamp(1.75rem, 3vw, 2.75rem)` — Cormorant, medium weight
- Sub-headlines: `1.25rem` — Jost, medium weight, uppercase, letter-spacing `0.1em`
- Body: `1.0625rem` (17px) — Jost, light weight, line-height `1.7`
- Small / caption: `0.8125rem` — Jost, regular weight

**Font loading:** Use `<link rel="preconnect">` for Google Fonts. Include `font-display: swap` to avoid FOIT.

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Cormorant+Garant:wght@300;400;500;600&family=Jost:wght@300;400;500&display=swap" rel="stylesheet">
```

### Layout & Spacing
- **Generous whitespace.** Let the content breathe. Palo Alto clients appreciate restraint.
- **Max content width:** `1200px`, centered. Side padding: `clamp(1.5rem, 5vw, 4rem)`.
- **Section padding:** `clamp(4rem, 8vw, 8rem)` vertical.
- **Asymmetric grids** where possible — avoid rigid 50/50 splits. Use 40/60 or 1/3 + 2/3 layouts for image/text pairs.
- **Editorial feel:** Large pull-quotes from reviews. Oversized section numbers or decorative type.
- **Horizontal rules:** Thin (`1px`), warm gold, used sparingly as section dividers.

### Photography & Imagery
Use AI-generated images (see Image Generation section below). The imagery should feel editorial and warm — soft natural lighting, shallow depth of field, warm color grading. No stock photo clichés (women laughing while touching their hair). Focus on: texture of hair, salon atmosphere, products, hands at work.

### Logo
Use the existing text-based logo from the current website. The logo reads "SALON MILLENNIUM" — recreate it in **Cormorant Garant**, uppercase, wide letter-spacing (`0.2em`), to match the site's typography. The "M" can be slightly larger or styled distinctly as a nod to the current logo treatment.

### Micro-interactions & Animation
- Subtle fade-in-up on scroll for content sections (use CSS `@keyframes` + `IntersectionObserver`, no heavy libraries)
- Elegant hover states on CTAs: background color transition (`0.3s ease`), slight scale (`1.02`)
- Smooth scroll behavior (`scroll-behavior: smooth`)
- Navigation: clean, minimal. On mobile, a simple slide-in menu.
- **No parallax.** No scroll-jacking. Keep it fast and respectful.

### Mobile
- Mobile-first CSS
- Full-bleed hero image on mobile
- Sticky header with phone number and book CTA always accessible
- Touch-friendly tap targets (min `44px`)
- Testimonials as a horizontal swipe carousel on mobile

---

## Technical Requirements
- **Framework:** Astro JS (static site generation, zero JS by default)
- **Styling:** Scoped `<style>` within Astro components. No Tailwind, no CSS frameworks. Hand-written CSS for precision.
- **Fonts:** Google Fonts — Cormorant Garant (300, 400, 500, 600) + Jost (300, 400, 500)
- **Images:** WebP format, lazy-loaded, with descriptive alt text. Use Astro's built-in `<Image />` component for optimization.
- **SEO:** Proper `<title>`, meta description, Open Graph tags, canonical URLs, semantic HTML5 (`<header>`, `<main>`, `<section>`, `<article>`, `<footer>`)
- **Performance:** Target Lighthouse score 95+. Inline critical CSS, defer non-critical. Minimal JS (only for IntersectionObserver animations and mobile nav toggle).
- **Accessibility:** WCAG 2.1 AA. Proper heading hierarchy, alt text, skip links, focus styles, color contrast ratios ≥ 4.5:1, aria labels where needed.
- **Hosting:** Cloudflare Pages. Configure Astro for static output compatible with Cloudflare Pages deployment.

---

## Image Generation

Generate images using the **fal.ai Nano Banana 2** model (`fal-ai/nano-banana-2`). All images should have a consistent warm, editorial aesthetic with soft natural lighting and shallow depth of field. Output as PNG at 2K resolution, then convert to WebP for production.

### Required Images

#### 1. `hero-salon.png` — Hero Background
- **Aspect ratio:** 16:9
- **Prompt:** "A luxurious hair salon interior photographed from inside, warm natural light streaming through large windows onto a tree-lined California avenue in Palo Alto. Cream and warm wood tones, elegant minimalist decor, a single styling chair in focus with beautiful warm lighting. Editorial photography style, shallow depth of field, soft golden hour light. No people. Clean, sophisticated, inviting atmosphere."

#### 2. `color-service.png` — Color Service
- **Aspect ratio:** 4:5
- **Prompt:** "Close-up editorial photograph of a woman's hair being colored with balayage technique by a stylist's hands wearing black gloves. Beautiful warm honey-blonde highlights being painted onto dark brown hair with a brush. Soft studio lighting, shallow depth of field, warm color palette. Professional salon setting, cream-toned background. High-end editorial beauty photography."

#### 3. `balayage-result.png` — Finished Balayage
- **Aspect ratio:** 4:5
- **Prompt:** "Editorial beauty photograph of the back of a woman's head showing beautiful balayage hair color, warm honey and caramel tones blending through dark brown hair, soft loose waves. Soft natural window light from the left, cream-colored salon interior background blurred. Shot with 85mm lens, shallow depth of field. Warm, luxurious, magazine-quality."

#### 4. `products-display.png` — Salon Products
- **Aspect ratio:** 3:2
- **Prompt:** "A curated arrangement of high-end hair care products on a warm marble surface with soft natural light. Minimalist bottles and tubes in muted neutral tones, whites, creams, pale pinks. A small eucalyptus sprig and a wooden comb beside them. Clean editorial product photography, soft shadows, warm color grading. No visible brand names or text on bottles."

#### 5. `haircut-service.png` — Haircut Service
- **Aspect ratio:** 4:5
- **Prompt:** "Editorial photograph of a hairstylist cutting a woman's hair in a beautiful salon. Focus on the stylist's skilled hands holding professional shears, cutting wet dark hair with precision. Warm natural lighting from a nearby window. Cream and warm wood salon interior. Shot from the side at a slight angle. Shallow depth of field, warm tones, professional beauty photography."

#### 6. `salon-atmosphere.png` — Salon Atmosphere
- **Aspect ratio:** 16:9
- **Prompt:** "Wide interior photograph of an upscale boutique hair salon on a tree-lined street in Palo Alto, California. Warm afternoon light filtering through large storefront windows. Two styling stations with elegant mirrors, fresh flowers in a vase, warm wood floors, cream walls. Cozy and sophisticated atmosphere. No people. Architectural interior photography, warm color grading."

### Generation Script

```javascript
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
          output_format: "png",
          resolution: "2K",
          safety_tolerance: "4"
        }
      });
      const url = result.data.images[0].url;
      const response = await fetch(url);
      const buffer = await response.arrayBuffer();
      writeFileSync(`./public/images/${img.name}.png`, Buffer.from(buffer));
      console.log(`  ✓ Saved: public/images/${img.name}.png`);
    } catch (err) {
      console.error(`  ✗ Failed: ${img.name}`, err.message);
    }
  }
  console.log("\nDone. Convert to WebP for production:");
  console.log("  npx @aspect-build/rules_js sharp --input public/images/*.png --output public/images/ --format webp --quality 85");
  console.log("  — or use Astro's built-in <Image /> component which handles this automatically.");
}

generateImages();
```

Run with:
```bash
npm install @fal-ai/client
mkdir -p public/images
FAL_KEY=your_key_here node generate-images.mjs
```

---

## DO NOT Include
- COVID Policies page (outdated)
- "Just Roots" page/link
- Broken external links from the old site
- San Carlos location references (they moved years ago)
- Any negative reviews
- Groupon/voucher promotions as primary messaging
- Any specific booking platform link until confirmed with the salon owner — use `#book` as placeholder
- Generic stock photography
- Any reference to the old Wix site structure
