// src/hooks/useTrustedBrands.ts
export type Brand = {
  name: string;
  logo: string;
};

export default function useTrustedBrands() {
  const brands: Brand[] = [
    { name: "Google", logo: "/assets/brands/google.png" },
    { name: "CoinDCX", logo: "/assets/brands/coin.png" },
    { name: "Hyundai", logo: "/assets/brands/hyundai.png" },
    { name: "HCL", logo: "/assets/brands/hcl.png" },
    { name: "Public", logo: "/assets/brands/public.png" },
    { name: "One Impression", logo: "/assets/brands/oneimpression.png" },
    { name: "Inshorts", logo: "/assets/brands/inshorts.png" },
    { name: "Amazon Prime", logo: "/assets/brands/amazon.png" },
    { name: "Forbes", logo: "/assets/brands/forbes.png" },
    { name: "Dream", logo: "/assets/brands/dream.png" },
    { name: "Hyundai", logo: "/assets/brands/hyundai.png" },
    { name: "Google", logo: "/assets/brands/google.png" },
    { name: "CoinDCX", logo: "/assets/brands/coin.png" },
    { name: "Hyundai", logo: "/assets/brands/hyundai.png" },
    { name: "HCL", logo: "/assets/brands/hcl.png" },
    { name: "Public", logo: "/assets/brands/public.png" },
    { name: "One Impression", logo: "/assets/brands/oneimpression.png" },
    { name: "Inshorts", logo: "/assets/brands/inshorts.png" },
  ];

  // duplicate for seamless loop
  const loop = [...brands, ...brands];

  return { loop };
}
