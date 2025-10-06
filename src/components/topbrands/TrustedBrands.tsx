// src/components/topbrands/TrustedBrands.tsx
import useTrustedBrands from "./useTrustedBrands";

type TrustedBrandsProps = {
  hideRow1?: boolean;
  title?: string;
  subtitle?: string;
};

export default function TrustedBrands({
  hideRow1 = false,
  title = "Trusted by Top Brands",
  subtitle = "Proudly serving top global brands with thoughtful, curated corporate gifting solutions.",
}: TrustedBrandsProps) {
  const { brands, makeLoopRow } = useTrustedBrands();

  // split into two disjoint sets (even / odd keeps balance even if list grows)
  const row1Base = hideRow1 ? [] : brands.filter((_, i) => i % 2 === 0);
  const row2Base = hideRow1 ? brands : brands.filter((_, i) => i % 2 === 1);

  const row1Loop = makeLoopRow(row1Base);
  const row2Loop = makeLoopRow(row2Base);

  return (
    <section className="relative w-full bg-[#FCFAF4] py-12 md:py-16 overflow-hidden">
      <div className="md:max-w-7xl max-w-lg mx-auto md:px-8 text-center">
        <h2 style={{ fontFamily: "Albra, serif" }} className="text-[34px] md:text-[58px] font-medium text-[#333333]">
          {title}
        </h2>
        <p className="mt-3 text-sm md:text-base text-[#595959]">
          {subtitle.split("<br/>")[0]}
          <br className="md:hidden block" />
          {subtitle.split("<br/>")[1] ?? ""}
        </p>

        <div className="relative mt-10 isolate">
          {/* Fades */}
          <div
            className="absolute inset-y-0 left-0 w-[344px] pointer-events-none z-20 md:block hidden"
            style={{ background: "linear-gradient(270deg, rgba(252,250,244,0) 0%, #FCFAF4 87.5%)" }}
          />
          <div
            className="absolute inset-y-0 right-0 w-[344px] pointer-events-none z-20 md:block hidden"
            style={{ background: "linear-gradient(90deg, rgba(252,250,244,0) 0%, #FCFAF4 87.5%)" }}
          />

          {/* Row 1 */}
          {!hideRow1 && (
            <div className="marquee no-scrollbar relative z-0">
              <div className="marquee-content">
                {row1Loop.map((b, i) => (
                  <img
                    key={`r1-${i}-${b.name}`}
                    src={b.logo}
                    alt={b.name}
                    className="object-contain"
                    loading="lazy"
                  />
                ))}
              </div>
            </div>
          )}

          {/* Row 2 */}
          <div className={`marquee reverse no-scrollbar ${hideRow1 ? "" : "mt-4"} relative z-0`}>
            <div className="marquee-content">
              {row2Loop.map((b, i) => (
                <img
                  key={`r2-${i}-${b.name}`}
                  src={b.logo}
                  alt={b.name}
                  className="object-contain"
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
