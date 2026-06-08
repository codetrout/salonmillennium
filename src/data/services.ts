export type ServiceCategory = 'color' | 'other';

export interface Service {
  slug: string;
  name: string;
  category: ServiceCategory;
  shortDescription: string;
  intro: string;
  body: string[];
  whatToExpect: string[];
  seoTitle: string;
  seoDescription: string;
  imageAlt: string;
  imagePrompt: string;
}

export const services: Service[] = [
  {
    slug: 'balayage',
    name: 'Balayage',
    category: 'color',
    shortDescription:
      "Hand-painted highlights for a natural, sun-kissed look with a seamless grow-out. Elena hand-paints every piece to create natural dimension and movement.",
    intro:
      "Balayage is one of our most-requested services. Hand-painted highlights for a natural, sun-kissed look — designed to grow out beautifully so you can go months between appointments.",
    body: [
      "Balayage isn't a formula. It's a freehand technique that places highlights exactly where the light would naturally catch your hair — softer at the root, brighter through the lengths and ends. The result is dimensional, lived-in, and uniquely yours.",
      "Elena Butte has been doing balayage for over two decades. Clients across Palo Alto and the Peninsula come to her California Avenue studio specifically for this service — for the way she reads each head of hair, asks the right questions, and lands on the look you had in mind.",
      "Whether you're after warm honey ribbons, cool ash dimension, or a barely-there sun-kissed effect, every balayage at Salon Millennium starts with a real conversation about your hair, your routine, and the look you want to live with.",
    ],
    whatToExpect: [
      "A thorough consultation before any color is mixed — we want to see your hair in natural light and understand your day-to-day routine",
      "Hand-painted application tailored to your face shape, hair texture, and lifestyle",
      "A glossing or toning step to perfect the finished tone",
      "A blow dry so you leave looking your best",
      "Honest aftercare advice and product recommendations — never a hard sell",
    ],
    seoTitle: 'Balayage in Palo Alto — Salon Millennium | Elena Butte',
    seoDescription:
      "Hand-painted balayage by Elena Butte at Salon Millennium on California Ave, Palo Alto. Natural, dimensional color with a seamless grow-out.",
    imageAlt:
      'Stylist hand-painting balayage highlights through long dark hair in a warm Palo Alto salon',
    imagePrompt:
      "Editorial close-up of a hair stylist's hands hand-painting balayage highlights onto long dark brown hair with a brush. Warm honey and caramel tones being painted on. Soft natural light streaming from a window, cream-toned upscale salon interior background, blurred. Magazine-quality beauty photography, shallow depth of field, warm color grading. No visible faces.",
  },
  {
    slug: 'highlights-lowlights',
    name: 'Highlights & Lowlights',
    category: 'color',
    shortDescription:
      'Foil highlights and lowlights for precise, multi-dimensional color. From subtle brightness to bold contrast — tailored to your vision.',
    intro:
      "For the kind of bright, precise dimension that foils do best. Highlights and lowlights at Salon Millennium are placed with intention — never a one-size-fits-all wash.",
    body: [
      "Foil highlights remain the gold standard for clean, controlled brightness. We use them when you want crisp definition, lift around the face, or a polished finish that reads from across the room. Lowlights work the opposite direction — adding depth and richness where over-lightened hair has gone flat.",
      "Most clients walk in already knowing whether they want lighter, darker, or more dimensional. We spend the consultation figuring out where exactly to place the color so it flatters your features and works with your everyday routine. In our Palo Alto studio, that often means natural-looking dimension that holds up under sharp daylight on California Avenue.",
      "Highlights and lowlights pair beautifully with our balayage service when you want maximum dimension — ask about combining the two during your consultation.",
    ],
    whatToExpect: [
      'A consultation to map exactly where lift and depth will sit',
      'Precise foil placement — never rushed',
      'A glossing or toning step to refine the final tone',
      'Finishing blow dry and style',
      'Honest guidance on maintenance and timing for your next visit',
    ],
    seoTitle: 'Hair Highlights & Lowlights in Palo Alto — Salon Millennium',
    seoDescription:
      'Foil highlights and lowlights at Salon Millennium on California Ave, Palo Alto. Precise, dimensional color by Elena Butte.',
    imageAlt:
      'Stylist placing foil highlights in a client’s hair at a Palo Alto salon',
    imagePrompt:
      "Editorial close-up of foil highlights being placed in a woman's long hair by a stylist's hands. Clean, precise foils visible. Soft natural window light, cream and warm wood salon interior background blurred. Magazine-quality beauty photography, shallow depth of field, warm color grading. No visible faces.",
  },
  {
    slug: 'color-correction',
    name: 'Color Correction',
    category: 'color',
    shortDescription:
      "Careful correction for color that didn't go as planned elsewhere. Elena's patient approach is about restoring your hair to the shade you actually wanted.",
    intro:
      "When color doesn't go the way you'd hoped, we'll take a careful look and tell you honestly what's possible. Patient, methodical, and never overpromising — color correction at Salon Millennium is about getting you to the shade you actually wanted, with your hair's health intact.",
    body: [
      "Color correction is the most technical service in the salon. Whether you're dealing with brassy tones, an uneven box-dye job, banded highlights, or a transformation that didn't land — Elena will look at your hair under proper light, ask what happened, and tell you honestly what's possible in one visit versus several.",
      "Most corrections involve more than one technique: tone neutralizing, strategic lightening or depositing, glossing, and sometimes a treatment to rebuild the hair's structure. We don't shortcut the process. The goal is a result you love and hair that still feels healthy.",
      "Color correction is the service where honesty matters most. Elena will tell you what's realistic in one session versus several — and then quietly get to work.",
    ],
    whatToExpect: [
      'A careful diagnostic consultation, often including a strand test',
      'A clear plan — including whether one visit is enough or multiple are needed',
      'Honest pricing and timing before any work begins',
      'A bond-building or strengthening treatment when appropriate',
      'Aftercare guidance to keep your hair healthy as it grows out',
    ],
    seoTitle: 'Hair Color Correction in Palo Alto — Salon Millennium',
    seoDescription:
      'Color correction by Elena Butte at Salon Millennium on California Ave, Palo Alto. Honest consultation and careful technique to restore the shade you wanted.',
    imageAlt:
      'Beautifully corrected multi-tonal brunette hair photographed in warm afternoon light at a Palo Alto salon',
    imagePrompt:
      "Editorial side-profile photograph of beautifully restored multi-tonal brunette hair with soft natural waves, catching warm afternoon light. Cream-colored boutique salon interior softly blurred behind. Editorial beauty photography, warm and luxurious, shallow depth of field, warm color grading. No visible face — focus on the hair.",
  },
  {
    slug: 'root-touch-up',
    name: 'Root Touch-Up',
    category: 'color',
    shortDescription:
      'Seamless root coverage that blends naturally with your existing color. Maintain your look between full color appointments.',
    intro:
      'Quick, precise root coverage that keeps your color looking fresh between full appointments — without overprocessing the lengths.',
    body: [
      "A root touch-up is exactly what it sounds like: color applied only to the new growth at the root, blended seamlessly into your existing color. Done well, it's invisible — no demarcation line, no patchy edges, no over-darkened mid-lengths.",
      "We schedule touch-ups carefully around your existing color so the blend stays clean. Most clients in Palo Alto come in every 4–6 weeks depending on hair growth and how visible the regrowth feels to them.",
      "If your color hasn't been maintained for a while or your tone has shifted, we may suggest pairing the touch-up with a gloss to refresh the overall finish — we'll always discuss this with you first.",
    ],
    whatToExpect: [
      'A quick check of how your existing color has held up',
      'Precise application along the new growth only',
      'Optional gloss or toner to refresh the overall finish',
      'Blow dry and style to finish',
      'A suggested timing window for your next visit',
    ],
    seoTitle: 'Root Touch-Up Color in Palo Alto — Salon Millennium',
    seoDescription:
      'Seamless root touch-ups at Salon Millennium on California Ave, Palo Alto. Precise application that blends with your existing color — no demarcation lines.',
    imageAlt:
      'Stylist precisely applying root color along the part line of dark hair in a Palo Alto salon',
    imagePrompt:
      "Editorial close-up of a stylist's gloved hands precisely applying color along the part line at the roots of dark hair. Soft warm natural light, cream-toned upscale salon background, blurred. Magazine-quality beauty photography, shallow depth of field, warm color grading. No visible faces.",
  },
  {
    slug: 'full-color',
    name: 'Full Color',
    category: 'color',
    shortDescription:
      "All-over color for a fresh, even result. Whether you're going darker, brighter, or covering gray, we achieve rich, lasting color.",
    intro:
      "All-over color when you want a clean reset — going darker, going brighter, covering gray, or shifting your tone entirely. The result: rich, even, beautifully finished color that holds.",
    body: [
      "Full color is the right service when you're refreshing your entire shade — not adding dimension, not just touching up roots. It's the cleanest way to land on a single, consistent tone, and it's particularly effective for gray coverage.",
      "Every full color starts with a consultation. We look at your natural color, your skin tone, your eyes, and your day-to-day routine — and then we discuss what's actually achievable in one session versus what might need a follow-up. Honesty up front means no surprises in the mirror.",
      "Our Palo Alto clients often pair full color with a finishing gloss for extra shine and longevity. The KEVIN.MURPHY color line we work with is gentle, vibrant, and built to last between visits.",
    ],
    whatToExpect: [
      'A consultation to confirm tone, depth, and coverage goals',
      'Full application from root to ends, applied evenly and carefully',
      'Optional glossing step for extra shine',
      'A finishing blow dry',
      'Aftercare guidance and product recommendations',
    ],
    seoTitle: 'Full Hair Color in Palo Alto — Salon Millennium',
    seoDescription:
      'All-over hair color and gray coverage by Elena Butte at Salon Millennium on California Ave, Palo Alto. Rich, even, beautifully finished color.',
    imageAlt:
      'Glossy, freshly colored brunette hair catching warm light in a Palo Alto salon',
    imagePrompt:
      "Editorial photograph of a woman with a fresh, rich, glossy all-over brunette color, hair catching warm afternoon light beautifully. Soft warm window light, cream-toned boutique salon interior softly blurred. Magazine-quality beauty photography, shallow depth of field, warm color grading. No visible face.",
  },
  {
    slug: 'camouflage-color-for-men',
    name: 'Camouflage Color for Men',
    category: 'color',
    shortDescription:
      'A subtle, natural-looking blend that softens gray without ever looking dyed. Designed to grow out cleanly — no demarcation line, no upkeep stress.',
    intro:
      "A discreet, low-maintenance gray blend for men who want to look like themselves — just sharper. No flat color, no demarcation line as it grows out, no monthly upkeep stress.",
    body: [
      "Camouflage color isn't about hiding the fact that you have gray hair — it's about softening it. We use a translucent, demi-permanent formula that blends into your existing color and grows out invisibly. No visible line of regrowth, no high-contrast roots, no surprise when the light hits.",
      "The technique is quick, the result is natural, and the maintenance is minimal — most clients come in every 6–8 weeks depending on how visible the gray feels to them. It works just as well for executives and professionals on Palo Alto's California Avenue as it does for anyone who simply wants to look polished without looking dyed.",
      "If you've never done color before, this is a low-commitment, easy place to start. We'll walk you through everything during the consultation.",
    ],
    whatToExpect: [
      'A short consultation to assess your existing color and how much gray to soften',
      'Quick, low-fuss application — most appointments take under an hour',
      'A natural-looking result that grows out without a visible line',
      'Honest advice on timing and whether you actually need to come back when you think you do',
    ],
    seoTitle: 'Men’s Gray Blending & Camouflage Color in Palo Alto — Salon Millennium',
    seoDescription:
      "Natural-looking men's gray blending at Salon Millennium on California Ave, Palo Alto. Soft camouflage color with no demarcation line and low maintenance.",
    imageAlt:
      'Distinguished man with naturally softened salt-and-pepper hair in a warm Palo Alto salon',
    imagePrompt:
      "Editorial side-angle photograph of a distinguished middle-aged man with naturally softened salt-and-pepper hair — refined, polished, never looking dyed. Clean contemporary boutique salon setting in warm cream tones, soft natural light from a window. Magazine-quality, shallow depth of field, warm color grading. Profile or three-quarter view, dignified and understated.",
  },
  {
    slug: 'haircuts-women',
    name: "Haircuts — Women",
    category: 'other',
    shortDescription:
      'Precision cuts shaped to your face, hair type, and lifestyle. From long layers to short bobs, every cut is designed to move beautifully.',
    intro:
      "A precision cut shaped to your face, your hair texture, and the way you actually live. No formulas, no defaults — just a cut that grows out beautifully and feels right from the moment you leave.",
    body: [
      "A great haircut is one you don't have to fight. We shape every cut around your hair's natural movement, your face, and how much time you actually want to spend styling. Long layers, classic bobs, soft fringe, sharp lines — all of it starts with the same question: what do you want this cut to feel like every morning?",
      "Our stylists at Salon Millennium have decades of combined experience and a Palo Alto clientele that ranges from busy executives to graduate students to grandmothers. Every cut is finished with a proper blow dry so you can see how it'll look at home — and we'll show you the techniques to recreate it.",
      "Pair a cut with color the same day if you'd like — it's usually the most efficient way to get a full refresh.",
    ],
    whatToExpect: [
      "A consultation about your hair's behavior, your routine, and your goals",
      'A wash and scalp massage to start',
      'A precision cut, taking the time to get the shape right',
      'A finishing blow dry and styling demo',
      'Honest guidance on when to come back',
    ],
    seoTitle: "Women's Haircuts in Palo Alto — Salon Millennium",
    seoDescription:
      "Precision women's haircuts at Salon Millennium on California Ave, Palo Alto. Shaped to your face, texture, and lifestyle.",
    imageAlt: "Stylist's hands cutting long hair with precision shears in a Palo Alto salon",
    imagePrompt:
      "Editorial close-up of a hair stylist's skilled hands holding professional shears mid-cut through long wet dark hair. Warm natural light from a side window, cream and warm wood boutique salon interior background. Magazine-quality beauty photography, shallow depth of field, warm color grading. Focus on technique and hands. No visible faces.",
  },
  {
    slug: 'haircuts-men',
    name: "Haircuts — Men",
    category: 'other',
    shortDescription:
      'Clean, well-structured cuts with attention to detail. Classic or contemporary — tailored to how you want to look and how much you want to style.',
    intro:
      "Clean, well-structured haircuts with proper attention to detail. Classic, contemporary, or somewhere in between — built around how you actually want to look and how much time you actually want to spend.",
    body: [
      "We take men's haircuts as seriously as everything else we do. That means a real consultation, careful scissor and clipper work, attention to the neckline and around the ears, and a finish that looks intentional rather than rushed.",
      "Whether you want a sharp executive look that holds up on California Avenue in Palo Alto, a low-maintenance crop you can air-dry, or something in between, we'll cut for the way your hair actually grows — not against it.",
      "Pair with our camouflage color service if you want to soften gray at the same visit.",
    ],
    whatToExpect: [
      'A consultation about length, shape, and style',
      'A wash before the cut',
      'Careful scissor and clipper work',
      'Clean finish around the neckline and ears',
      'A styled finish so you can see how it sits',
    ],
    seoTitle: "Men's Haircuts in Palo Alto — Salon Millennium",
    seoDescription:
      "Clean, well-structured men's haircuts at Salon Millennium on California Ave, Palo Alto. Classic or contemporary, tailored to you.",
    imageAlt: "Barber's hands cutting a man's hair with precision in a Palo Alto salon",
    imagePrompt:
      "Editorial close-up photograph of a stylist's hands using professional shears to cut a man's hair with precision and focus on technique. Warm afternoon light, cream-toned upscale boutique salon background. Magazine-quality, shallow depth of field, warm color grading. Focus on hands and technique, no visible faces.",
  },
  {
    slug: 'blow-dry-styling',
    name: 'Blow Dry & Styling',
    category: 'other',
    shortDescription:
      'Professional blow dry for volume, smoothness, or texture. Perfect for events or when you simply want to look your best.',
    intro:
      'A proper professional blow dry — for the day, the event, or just because. Volume, smoothness, soft waves, or sharp polish — your call.',
    body: [
      "There's a real difference between a blow dry at home and a blow dry done by a professional. We use the right brush for your hair type, the right tension, and the right finish technique — so the result holds well past the end of the day.",
      "Popular before weddings, photo shoots, work events, or simply when you want to walk into Palo Alto feeling pulled together. We use KEVIN.MURPHY styling products — gentle, salon-quality, and tailored to whatever finish you're after.",
      "If you're not sure what would look best, we'll suggest. There are no wrong answers here.",
    ],
    whatToExpect: [
      'A quick wash with the right products for your hair type',
      'A finished blow dry tailored to the look you want',
      "Optional iron or wand work for waves, curls, or polish",
      'A long-lasting finish that holds well into the evening',
    ],
    seoTitle: 'Professional Blow Dry & Styling in Palo Alto — Salon Millennium',
    seoDescription:
      'Professional blow dry and styling at Salon Millennium on California Ave, Palo Alto. Volume, smoothness, or texture — finished to last.',
    imageAlt: 'Round brush smoothing glossy hair beneath a professional blow dryer at a Palo Alto salon',
    imagePrompt:
      "Editorial close-up of a round brush smoothing long glossy dark hair beneath a professional blow dryer. Visible movement and texture in the hair, soft warm window light, cream-toned upscale salon background. Magazine-quality beauty photography, shallow depth of field, warm color grading. No visible faces.",
  },
  {
    slug: 'keratin-treatment',
    name: 'Keratin Treatment',
    category: 'other',
    shortDescription:
      'Smooth frizz, reduce styling time, and add lasting shine. Our keratin treatments keep hair healthy, manageable, and beautifully sleek for months.',
    intro:
      'A keratin treatment that smooths frizz, cuts your daily styling time in half, and leaves hair glossy and manageable for months at a time.',
    body: [
      "Keratin treatments are one of the most life-changing services we offer — particularly for clients dealing with humidity-prone frizz, curl that's hard to manage, or long fine hair that takes forever to blow out at home. We use a high-quality formula that smooths the hair shaft without removing your natural texture entirely.",
      "Most clients see results that last 3–4 months. Day-to-day, you'll spend significantly less time styling, your hair will resist frizz, and it'll look glossy and healthy with minimal effort. Many of our Palo Alto regulars schedule a keratin treatment ahead of summer or before a big trip.",
      "We'll always discuss your hair's history, condition, and goals before recommending the right treatment for you — sometimes a gentler smoothing option is the better call.",
    ],
    whatToExpect: [
      'A consultation about your hair history and goals',
      'A clarifying wash to prep the hair',
      'Careful application and processing — plan for 2 to 3 hours total',
      'Aftercare instructions to maximize how long the treatment lasts',
      'Long-term product recommendations to maintain the result',
    ],
    seoTitle: 'Keratin Hair Treatments in Palo Alto — Salon Millennium',
    seoDescription:
      'Smoothing keratin treatments at Salon Millennium on California Ave, Palo Alto. Reduce frizz and styling time for months with healthy, glossy results.',
    imageAlt: 'Stylist smoothing a keratin treatment through long glossy dark hair in a Palo Alto salon',
    imagePrompt:
      "Editorial close-up of a hair stylist smoothing a keratin treatment through long dark hair using a fine brush. Hair appears glossy, smooth, and healthy. Soft warm natural light, cream-toned upscale boutique salon background. Magazine-quality beauty photography, shallow depth of field, warm color grading. Focus on technique. No visible faces.",
  },
  {
    slug: 'consultations',
    name: 'Consultations',
    category: 'other',
    shortDescription:
      "Not sure what you need? Book a consultation. We'll discuss your goals, assess your hair, and create a plan — no pressure, no obligation.",
    intro:
      "Not sure where to start? Book a consultation. We'll listen, look at your hair properly, and put together an honest plan — no pressure, no obligation to commit to a service.",
    body: [
      "Some of the best conversations we have happen during consultations. Maybe you're thinking about going lighter and don't know if it's realistic. Maybe you had a bad experience elsewhere and want a second opinion. Maybe you just moved to Palo Alto and are looking for a new colorist you can trust.",
      "We'll take time to actually look at your hair — its condition, history, and how it behaves — and then talk honestly about what's achievable, what it would take, and whether it's the right call. If you decide to book a service afterward, we'll work the consultation into the appointment plan.",
      "There's no awkwardness, no hard sell. Just an honest conversation with someone who's been doing this for 25+ years.",
    ],
    whatToExpect: [
      'A relaxed conversation about what you want and why',
      'A proper assessment of your hair under good light',
      'Honest, specific recommendations — including what NOT to do',
      'A clear timeline and price estimate if you choose to move forward',
    ],
    seoTitle: 'Hair Color & Cut Consultations in Palo Alto — Salon Millennium',
    seoDescription:
      'Free hair consultations at Salon Millennium on California Ave, Palo Alto. Honest advice from Elena Butte and her team — no pressure, no obligation.',
    imageAlt:
      'Stylist and client in conversation at a styling station in a warm Palo Alto salon',
    imagePrompt:
      "Editorial wide-angle photograph of a styling station in an upscale boutique hair salon — a chair facing a mirror, fresh flowers in a small vase on a side table, a notebook open on the counter, warm afternoon light filtering through large storefront windows. Cream walls, warm wood floors. Inviting, conversational atmosphere. No people. Architectural interior photography, warm color grading.",
  },
];

export const colorServices = services.filter((s) => s.category === 'color');
export const otherServices = services.filter((s) => s.category === 'other');

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
