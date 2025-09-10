type Brand = {
  name: string;
  logo: string;
};

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

export default function TrustedBrands() {
  return (
    <section className="relative w-full bg-[#FCFAF4] py-12 md:py-16 overflow-hidden">
      <div className="md:max-w-7xl max-w-lg mx-auto md:px-8 text-center">
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">
          Trusted by Top Brands
        </h2>
        <p className="mt-3 text-sm md:text-base text-gray-600">
          Proudly serving top global brands with thoughtful, curated corporate gifting solutions.
        </p>

        {/* Optional edge fades for nicer look */}
        <div className="relative mt-10">
          <div
            className="pointer-events-none absolute left-0 top-0 h-[120px] w-24 md:w-40"
            style={{
              background:
                "linear-gradient(270deg, rgba(252,250,244,0) 0%, #FCFAF4 87.5%)",
            }}
          />
          <div
            className="pointer-events-none absolute right-0 top-0 h-[120px] w-24 md:w-40"
            style={{
              background:
                "linear-gradient(90deg, rgba(252,250,244,0) 0%, #FCFAF4 87.5%)",
            }}
          />

          {/* Row 1: left -> right */}
          <div className="marquee no-scrollbar">
            <div className="marquee-content">
              {loop.map((b) => (
                  <img
                    src={b.logo}
                    alt={b.name}
                    className="object-contain "
                    loading="lazy"
                  />
              ))}
            </div>
          </div>

          {/* Row 2: right -> left (reverse) */}
          <div className="marquee reverse no-scrollbar mt-4 ">
            <div className="marquee-content">
              {loop.map((b) => (

                  <img
                    src={b.logo}
                    alt={b.name}
                    className="object-contain "
                    loading="lazy"
                  />
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
