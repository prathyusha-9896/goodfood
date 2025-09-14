// src/components/corporate/corporate.tsx
import { useCorporate } from "./useCorporate";
import { useState } from "react";
import HelpForm from "../HelpForm"; 
export default function Corporate() {
  const { headline, buttonText, tagline, logos, gifts } = useCorporate();
  const [open, setOpen] = useState(false);

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 min-h-screen">
      {/* Left Side */}
      <div className="flex flex-col justify-center md:justify-start md:items-start pt-16 md:pt-32 items-center px-8 md:px-32 bg-[#FCFAF4] text-white">
        <h1 style={{ fontFamily: "Albra, serif" }} className="text-[42px] md:text-5xl md:text-left text-center font-bold text-[#333333] leading-tight mb-7">
          {headline}
        </h1>
        <button onClick={() => setOpen(true)} className="inline-block bg-[#FEC8B2] text-[#1A1A1A] text-[16px] px-6 py-3 rounded-full  font-medium w-max">
          {buttonText}
        </button>

        <p className="mt-14 text-[12px] text-[#808080] font-semibold leading-[137%]">{tagline}</p>
        <div className="flex flex-wrap md:flex-nowrap justify-center items-center md:justify-start md:items-start gap-4 my-6">
          {logos.map((logo, idx) => (
            <img
              key={idx}
              src={logo.src}
              alt={logo.alt}
              className="w-[100px] h-[35px] object-contain"
            />
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
            {/* Modal HelpForm */}
            <HelpForm
              isOpen={open}
              onClose={() => setOpen(false)}
              backgroundImage="/public/assets/helpformbg.png"
            />
    </section>
  );
}
