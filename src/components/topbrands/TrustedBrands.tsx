type Brand = {
  name: string;
  logo: string;
};

const brands: Brand[] = [
  { name: "Google", logo: "/src/assets/brands/google.png" },
  { name: "CoinDCX", logo: "/src/assets/brands/coin.png" },
  { name: "Hyundai", logo: "/src/assets/brands/hyundai.png" },
  { name: "HCL", logo: "/src/assets/brands/hcl.png" },
  { name: "Public", logo: "/src/assets/brands/public.png" },
  { name: "One Impression", logo: "/src/assets/brands/oneimpression.png" },
  { name: "Inshorts", logo: "/src/assets/brands/inshorts.png" },
  { name: "Amazon Prime", logo: "/src/assets/brands/amazon.png" },
  { name: "Forbes", logo: "/src/assets/brands/forbes.png" },
  { name: "Dream", logo: "/src/assets/brands/dream.png" },
  { name: "Hyundai", logo: "/src/assets/brands/hyundai.png" },
  { name: "Google", logo: "/src/assets/brands/google.png" },
  { name: "CoinDCX", logo: "/src/assets/brands/coin.png" },
  { name: "Hyundai", logo: "/src/assets/brands/hyundai.png" },
  { name: "HCL", logo: "/src/assets/brands/hcl.png" },
  { name: "Public", logo: "/src/assets/brands/public.png" },
  { name: "One Impression", logo: "/src/assets/brands/oneimpression.png" },
  { name: "Inshorts", logo: "/src/assets/brands/inshorts.png" },
];

export default function TrustedBrands() {
  return (
    <section className="relative w-full bg-[#FCFAF4] py-12 md:py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
        {/* Heading */}
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">
          Trusted by Top Brands
        </h2>
        <p className="mt-3 text-sm md:text-base text-gray-600">
          Proudly serving top global brands with thoughtful, curated corporate gifting solutions.
        </p>

        {/* Logo Grid */}
        <div className="relative mt-10">
          {/* Gradient overlays */}
          <div
            className="absolute left-0 top-0 h-full w-[344px] pointer-events-none"
            style={{
              background:
                "linear-gradient(270deg, rgba(252, 250, 244, 0.00) 0%, #FCFAF4 87.5%)",
            }}
          />
          <div
            className="absolute right-0 top-0 h-full w-[344px] pointer-events-none"
            style={{
              background:
                "linear-gradient(90deg, rgba(252, 250, 244, 0.00) 0%, #FCFAF4 87.5%)",
            }}
          />

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-9 gap-6 place-items-center">
            {brands.map((brand, idx) => (
              <div
                key={idx}
                className="flex items-center justify-center "
              >
                <img
                  src={brand.logo}
                  alt={brand.name}
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
