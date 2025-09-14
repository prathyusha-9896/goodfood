import HelpForm from "../HelpForm";
import { useState } from "react";
type Step = {
  id: number;
  title: string;
  description: string;
  color?: string; // circle + line color
};

type HowItWorksProps = {
  title?: string;
  steps?: Step[];
  image: string;
  alt?: string;
  ctaText?: string;
  onCta?: () => void;
};

const pad2 = (n: number) => (n < 10 ? `0${n}` : `${n}`);

export default function HowItWorks({
  title = "How It Works",
  steps = [
    {
      id: 1,
      title: "Tell Us Your Requirement",
      description:
        "Share your gifting needs, preferences, and budget. Our team will understand exactly what you’re looking for.",
      color: "#E2564E", // red
    },
    {
      id: 2,
      title: "We Curate & Customise",
      description:
        "We carefully select thoughtful gifts and personalise them to match your brand and occasion.",
      color: "#F39B6A", // peach/orange
    },
    {
      id: 3,
      title: "Pan-India Delivery",
      description:
        "Enjoy smooth and reliable delivery to recipients anywhere across India.",
      color: "#F3CBA8", // light peach
    },
  ],
  alt,
  ctaText = "Request a Proposal",
}: HowItWorksProps) {
    const [open, setOpen] = useState(false);
  
  return (
    <section className="w-full bg-[#F4EFE5]">
      <div className="mx-auto max-w-7xl md:px-8 pb-12 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          {/* Left: Timeline */}
          <div className="md:block hidden">
            <h2 style={{ fontFamily: "Albra, serif" }} className="text-3xl md:text-5xl font-semibold text-gray-900 tracking-tight">
              {title}
            </h2>

            <ol className="mt-8 relative pt-5 pb-5 space-y-10">
              {/* continuous vertical line */}
              <span
                className="absolute left-5 top-5 bottom-0 w-[2px]"
                style={{ backgroundColor: "#E5D9C9", opacity: 0.6 }} // neutral track color
                aria-hidden="true"
              />

              {steps.map((s) => {
                const color = s.color || "#E2564E";
                return (
                  <li key={s.id} className="relative pl-14">
                    {/* bullet */}
                    <span
                      className="absolute left-0 top-0 z-10 grid place-items-center w-10 h-10 rounded-full text-white text-xs font-semibold shadow-sm"
                      style={{ backgroundColor: color }}
                    >
                      {pad2(s.id)}
                    </span>

                    {/* content */}
                    <h3 style={{ fontFamily: "Albra, serif" }} className="text-lg md:text-xl font-semibold text-gray-900">{s.title}</h3>
                    <p className="mt-2 text-gray-700 leading-relaxed">{s.description}</p>
                  </li>
                );
              })}
            </ol>
            <div className=" flex justify-center md:justify-start">
            <button
              onClick={() => setOpen(true)} 
              className=" inline-flex items-center justify-center rounded-full bg-[#FEC8B2] text-black px-6 py-3 font-medium "
            >
              {ctaText}
            </button>
            </div>
          </div>

          {/* Right: Image card */}
          <div className="md:rounded-3xl overflow-hidden bg-white ">
            <img
              src='/assets/howitworks.png'
              alt={alt || "How it works showcase"}
              className="w-full h-[578px] md:h-[520px] object-cover"
              loading="lazy"
            />
          </div>
          <div className="md:hidden block px-8">
            <h2 style={{ fontFamily: "Albra, serif" }} className="text-3xl md:text-5xl font-semibold text-gray-900 tracking-tight">
              {title}
            </h2>

            <ol className="mt-8 relative pt-5 pb-5 space-y-10">
              {/* continuous vertical line */}
              <span
                className="absolute left-5 top-5 bottom-0 w-[2px]"
                style={{ backgroundColor: "#E5D9C9", opacity: 0.6 }} // neutral track color
                aria-hidden="true"
              />

              {steps.map((s) => {
                const color = s.color || "#E2564E";
                return (
                  <li key={s.id} className="relative pl-14">
                    {/* bullet */}
                    <span
                      className="absolute left-0 top-0 z-10 grid place-items-center w-10 h-10 rounded-full text-white text-xs font-semibold shadow-sm"
                      style={{ backgroundColor: color }}
                    >
                      {pad2(s.id)}
                    </span>

                    {/* content */}
                    <h3 className="text-lg md:text-xl font-semibold text-gray-900">{s.title}</h3>
                    <p className="mt-2 text-gray-700 leading-relaxed">{s.description}</p>
                  </li>
                );
              })}
            </ol>
            <div className="mt-8 flex justify-center md:justify-start">
            <button
              onClick={() => setOpen(true)} 
              className="mt-10 inline-flex items-center justify-center rounded-full bg-[#FEC8B2] text-black px-6 py-3 font-medium shadow hover:bg-[#fdb79c] transition"
            >
              {ctaText}
            </button>
            </div>
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
