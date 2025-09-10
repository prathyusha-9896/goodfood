// src/components/corporate/corporate.tsx
import { useCorporate } from "./useCorporate";

export default function Corporate() {
  const { headline, buttonText, tagline, logos, gifts } = useCorporate();

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 min-h-screen">
      {/* Left Side */}
      <div className="flex flex-col justify-center items-center px-8 md:px-36 bg-[#FCFAF4] text-white">
        <h1 className="text-4xl md:text-5xl md:text-left text-center font-bold text-[#333333] leading-tight mb-7">
          {headline}
        </h1>
        <button className="inline-block bg-[#FEC8B2] text-black px-6 py-3 rounded-full font-medium hover:bg-[#fdb79c] transition w-max">
          {buttonText}
        </button>

        <p className="mt-14 text-sm text-gray-400">{tagline}</p>
        <div className="grid md:grid-cols-4 grid-cols-3 justify-center items-center gap-6 mt-6">
          {logos.map((logo, idx) => (
            <img key={idx} src={logo.src} alt={logo.alt}  />
          ))}
        </div>
      </div>

      {/* Right Side */}
      <div className="relative overflow-hidden bg-[#FCFAF4] flex flex-col justify-center items-center gap-6 ">
        {/* Left Fade Gradient */}
      <div
        className="pointer-events-none absolute inset-y-0 left-0 w-1/2 z-10
                  md:bg-gradient-to-r from-[#FCFAF4] to-[#FCFAF4]/0"
      />
        {/* Top Row → Right to Left */}
        <div className="marquee">
          <div className="marquee-content">
            {gifts.concat(gifts).map((src, idx) => (
              <img
                key={`top-${idx}`}
                src={src}
                alt={`Gift ${idx + 1}`}
                className="w-52 h-52 object-cover "
              />
            ))}
          </div>
        </div>

        {/* Bottom Row → Left to Right */}
        <div className="marquee reverse">
          <div className="marquee-content">
            {gifts.concat(gifts).map((src, idx) => (
              <img
                key={`bottom-${idx}`}
                src={src}
                alt={`Gift ${idx + 1}`}
                className="w-52 h-52 object-cover "
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
