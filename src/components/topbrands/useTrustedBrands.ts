// src/hooks/useTrustedBrands.ts
export type Brand = { name: string; logo: string };

const raw: Brand[] = [
  { name: "Forbes", logo: "/assets/brands/forbes.png" },
  { name: "Dream11", logo: "/assets/brands/dream.png" },
  { name: "Chalo", logo: "/assets/brands/chalo.png" },
  { name: "JLL", logo: "/assets/brands/jll.png" },
  { name: "Hendrick's Gin", logo: "/assets/brands/hen.png" },
  { name: "Canara Bank", logo: "/assets/brands/canara.png" },
  { name: "Redington", logo: "/assets/brands/redington.png" },
  { name: "Teleperformance", logo: "/assets/brands/tele.png" },
  { name: "One Impression", logo: "/assets/brands/oneimpression.png" },
  { name: "Inshorts", logo: "/assets/brands/inshorts.png" },
  { name: "Google", logo: "/assets/brands/google.png" },
  { name: "CoinDCX", logo: "/assets/brands/coin.png" },
  { name: "Hyundai", logo: "/assets/brands/hyundai.png" },
  { name: "HCL", logo: "/assets/brands/hcl.png" },
  { name: "Public App", logo: "/assets/brands/public.png" },
  { name: "Amazon Prime", logo: "/assets/brands/amazon.png" },
];

// remove duplicates by normalized name
function dedupe(brands: Brand[]) {
  const seen = new Set<string>();
  return brands.filter(b => {
    const key = b.name.trim().toLowerCase();
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

// make a seamless marquee loop for a given row only
function makeLoopRow(items: Brand[]) {
  return [...items, ...items];
}

export default function useTrustedBrands() {
  const brands = dedupe(raw);
  return { brands, makeLoopRow };
}
