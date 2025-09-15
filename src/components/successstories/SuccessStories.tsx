// src/components/topbrands/TrustedBrands.tsx
import HelpForm from "../HelpForm";
import useTrustedBrands from "../topbrands/useTrustedBrands";
import { useState } from "react";
type TrustedBrandsProps = {
  /** When true, hides the first marquee row (Row 1). Default = false */
  hideRow1?: boolean;
  /** Optional title/description overrides */
  title?: string;
  subtitle?: string;
};

export default function SuccessStories({
  hideRow1 = false,
  subtitle = "Trusted by India's Top Companies",
}: TrustedBrandsProps) {
  const { loop } = useTrustedBrands();
  const [open, setOpen] = useState(false);

  return (
    <section className="relative w-full bg-[#FCFAF4] py-12 md:py-16 overflow-hidden">
      <div className="md:max-w-full max-w-lg mx-auto md:px-8 text-center">
        <h2 style={{ fontFamily: "Albra, serif" }} className="text-[34px] md:text-[58px] font-medium text-[#333333] pb-10">
          Explore Our Corporate Gifting <br /> Success Stories
        </h2>
        <button onClick={() => setOpen(true)} className="inline-block bg-[#FEC8B2] text-[#1A1A1A] text-[16px] px-6 py-3 rounded-full  font-medium w-max">
          Get a Corporate Quote
        </button>
        <p className="mt-16 text-sm md:text-base text-[#595959]">
          {subtitle.split("<br/>")[0]}
          <br className="md:hidden block" />
          {subtitle.split("<br/>")[1] ?? ""}
        </p>

        {/* Optional edge fades for nicer look */}
        <div className="relative mt-10 isolate">
          {/* Left fade */}
          <div
            className="absolute inset-y-0 left-0 w-[344px] pointer-events-none z-20 md:block hidden"
            style={{
              background:
                "linear-gradient(270deg, rgba(252, 250, 244, 0.00) 0%, #FCFAF4 87.5%)",
            }}
          />
          {/* Right fade */}
          <div
            className="absolute inset-y-0 right-0 w-[344px] pointer-events-none z-20 md:block hidden"
            style={{
              background:
                "linear-gradient(90deg, rgba(252, 250, 244, 0.00) 0%, #FCFAF4 87.5%)",
            }}
          />

          {/* Row 1 (conditionally hidden) */}
          {!hideRow1 && (
            <div className="marquee no-scrollbar relative z-0">
              <div className="marquee-content">
                {loop.map((b, i) => (
                  <img
                    key={`row1-${i}-${b.name}`}
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
              {loop.map((b, i) => (
                <img
                  key={`row2-${i}-${b.name}`}
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
            {/* Modal HelpForm */}
            <HelpForm
              isOpen={open}
              onClose={() => setOpen(false)}
              backgroundImage="/assets/helpformbg.png"
            />
    </section>
  );
}
