import { useEffect, useMemo, useRef, useState } from "react";
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";

type Testimonial = {
  brand: string;
  logo: string;
  image: string;
  quote: string;
  name: string;
  role: string;
  avatar: string;
};

const testimonials: Testimonial[] = [
  {
    brand: "Dream11",
    logo: "/assets/dream11.svg",
    image: "/assets/testimonial1.png",
    quote:
      "I can confidently say that partnering with The Good Road has been nothing short of exceptional. We have trusted them with high-end luxury gift hampers for our brand ambassadors for 4 years now, and they surpass our expectations time and again. We feel so secure with them with such sensitive personal client data as well as making sure the gifts are of the very best quality and they always deliver.",
    name: "Abhinav Shukla",
    role: "Growth Specialist",
    avatar: "/assets/profile/profile_1.svg",
  },
  {
    brand: "inshort",
    logo: "/assets/inshort.svg",
    image: "/assets/testimonial2.png",
    quote:
      "The work anniversary hampers turned out to be so great. Everyone loved it! Thank you for curating with such care and detailing.",
    name: "Shikha Dhingra",
    role: "Employee Welfare Associate",
    avatar: "/assets/profile/profile_2.svg",
  },
  {
    brand: "hyundai",
    logo: "/assets/hyundai.svg",
    image: "/assets/testimonial3.png",
    quote:
      "We sincerely appreciate your prompt support and efforts in arranging such beautiful hampers for our Women’s Day celebration. Your dedication and attention to detail truly made a difference, and we are sure these hampers will be loved by everyone. Thank you for going the extra mile to ensure everything was perfect. We value our partnership and look forward to working together again in the future!",
    name: "Riya Bedi",
    role: "Human Resources",
    avatar: "/assets/profile/profile_3.svg",
  },
  {
    brand: "inshort",
    logo: "/assets/inshort.svg",
    image: "/assets/testimonial4.png",
    quote:
      "For nearly three years, they have been our trusted official gifting partners, consistently impressing us with their attention to detail, creativity, and professionalism. From onboarding kits to anniversary hampers to Diwali gifting, they take care of every gifting requirement of our company all year round and we look forward to continuing our partnership for many years to come.",
    name: "Soumi Chakraborty",
    role: "General Manager, HR",
    avatar: "/assets/profile/profile_4.svg",
  },
];

/** tiny hook: observe width of an element */
function useElementWidth<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);
  const [w, setW] = useState(0);
  useEffect(() => {
    if (!ref.current) return;
    const ro = new ResizeObserver(([entry]) => {
      setW(Math.floor(entry.contentRect.width));
    });
    ro.observe(ref.current);
    return () => ro.disconnect();
  }, []);
  return { ref, width: w };
}

export default function Testimonials() {
  const total = testimonials.length;
  const [index, setIndex] = useState(0);

  // container width + computed slide width
  const { ref: wrapRef, width: wrapW } = useElementWidth<HTMLDivElement>();

  // fraction of the NEXT slide you want visible. 0.5 = HALF of next slide.
const VISIBLE_NEXT_FRACTION = 0.1;
// gap between slides (px) — matches Tailwind `gap-6` (1.5rem @ 16px root)
const GAP = 24;

// slide width so container shows 1 full + fraction of next
const slideW = useMemo(() => {
  if (!wrapW) return 0;
  return Math.round(wrapW / (1 + VISIBLE_NEXT_FRACTION));
}, [wrapW, VISIBLE_NEXT_FRACTION]);


  const prev = () => setIndex((i) => (i - 1 + total) % total);
  const next = () => setIndex((i) => (i + 1) % total);

  return (
    <section className="w-full bg-[#FCFAF4]">
      <div className="mx-auto max-w-7xl px-8 md:px-8 py-12 md:py-16">
        {/* Header row */}
        <div className="flex flex-row items-end justify-between gap-0">
          <div>
            <h2
              style={{ fontFamily: "Albra, serif" }}
              className="md:block hidden text-[46px] font-semibold text-[#333333]"
            >
              Real stories from brands that trust us to make <br /> every
              gifting experience unforgettable.
            </h2>
            <h2
              style={{ fontFamily: "Albra, serif" }}
              className="md:hidden block text-[24px] font-semibold text-[#333333] max-w-3xl"
            >
              Real stories from <br /> brands that trust us
            </h2>
          </div>

          <div className="flex gap-3">
            <button
              onClick={prev}
              className="w-9 h-9 rounded-full bg-[#FEC8B2] text-black grid place-items-center hover:bg-[#fdb79c] transition"
              aria-label="Previous testimonial"
            >
              <IoIosArrowRoundBack size={24} />
            </button>
            <button
              onClick={next}
              className="w-9 h-9 rounded-full bg-[#FEC8B2] text-black grid place-items-center hover:bg-[#fdb79c] transition"
              aria-label="Next testimonial"
            >
              <IoIosArrowRoundForward size={24} />
            </button>
          </div>
        </div>
      </div>
        {/* Slider with next slide peeking */}
        <div
          ref={wrapRef}
          className="relative mt-10 overflow-hidden ml-40"
        >
          {/* track */}
          <div ref={wrapRef} className="relative mt-10 overflow-hidden">
            {/* track */}
            <div
              className="flex gap-6 transition-transform duration-500 ease-out"
              style={{
                // include gap in the translation so the last card sits flush right
                transform: `translateX(-${index * (slideW + GAP)}px)`,
                // let width be auto; flex + gap will size naturally
              }}
            >
              {testimonials.map((t, i) => (
                <div
                  key={i}
                  className="flex flex-row items-stretch" // ⬅️ no pr-6 here
                  style={{
                    flex: `0 0 ${slideW}px`,
                    maxWidth: `${slideW}px`,
                  }}
                >
                  {/* Image (desktop only) */}
                  <div className="flex-1 md:block hidden overflow-hidden rounded-l-[16px]">
                    <img src={t.image} alt={t.brand} className="w-full h-full object-cover" />
                  </div>

                  {/* Testimonial card */}
                  <div className="flex-1 bg-white text-gray-800 flex flex-col px-[28px] md:px-[56px] py-[28px] md:py-[48px] rounded-r-[16px]">
                    <div>
                      <img src={t.logo} alt={t.brand} className="mb-6 md:mb-8 h-7 md:h-auto" />
                      <blockquote className="italic md:text-[28px] text-[20px] leading-[126%] tracking-tight font-light text-black">
                        “{t.quote}”
                      </blockquote>
                    </div>
                    <div className="mt-6 flex items-center gap-3">
                      <img src={t.avatar} alt={t.name} className="w-10 h-10 rounded-full object-cover" />
                      <div>
                        <p className="font-semibold text-gray-900">{t.name}</p>
                        <p className="text-sm text-gray-600">{t.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
    </section>
  );
}
