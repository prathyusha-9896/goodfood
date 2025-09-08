import { useState } from "react";

type Testimonial = {
  brand: string;
  logo: string;
  image: string;
  quote: string;
  name: string;
  role: string;
  avatar: string;
};
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";


const testimonials: Testimonial[] = [
  {
    brand: "Dream11",
    logo: "/assets/logos/dream11.png",
    image: "/assets/testimonial1.png",
    quote:
      "The Good Road made our corporate gifting seamless and memorable. The packaging, delivery, and personalization were flawless — our clients absolutely loved it!",
    name: "Priya Malhotra",
    role: "HR Head",
    avatar: "/assets/profile1.png",
  },
  {
    brand: "Xiaomi",
    logo: "/assets/MI.png",
    image: "/assets/testimonial2.png",
    quote:
      "Partnering with The Good Road has elevated our festive and event gifting. Their attention to detail and curated hampers reflect the quality we value as a brand.",
    name: "Rohit Sharma",
    role: "Program Manager",
    avatar: "/assets/profile1.png",
  },
  // add more...
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const total = testimonials.length;
  const t = testimonials[index];

  const prev = () => setIndex((i) => (i - 1 + total) % total);
  const next = () => setIndex((i) => (i + 1) % total);

  return (
    <section className="w-full bg-[#FCFAF4] text-white">
      <div className="mx-auto max-w-7xl px-4 md:px-8 py-12 md:py-16">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                    {/* Heading */}
        <h2 className="text-2xl md:text-3xl font-semibold text-[#333333] max-w-3xl">
          Real stories from brands that trust us to make every gifting experience unforgettable.
        </h2>
                {/* Arrows */}
        <div className="mt-6 flex justify-end gap-3">
          <button
            onClick={prev}
            className="w-9 h-9 rounded-full bg-[#FEC8B2] text-black grid place-items-center hover:bg-[#fdb79c] transition"
            aria-label="Previous testimonial"
          >
            <IoIosArrowRoundBack size={24}/>
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

        {/* Card */}
        <div className="mt-10 flex items-stretch ">
          {/* Image */}
          <div className="flex-1 overflow-hidden">
            <img
              src={t.image}
              alt={t.brand}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Testimonial */}
          <div className="flex-1 bg-white text-gray-800m flex flex-col  px-[56px] py-[48px]  justify-between">
            <div>
              <img src={t.logo} alt={t.brand} className=" mb-16" />
              <blockquote className="italic text-[34px] leading-[126%] tracking-tight font-light text-black">
                “{t.quote}”
              </blockquote>
            </div>
            <div className="mt-6 flex items-center gap-3">
              <img
                src={t.avatar}
                alt={t.name}
                className="w-10 h-10 rounded-full object-cover"
              />
              <div>
                <p className="font-semibold text-gray-900">{t.name}</p>
                <p className="text-sm text-gray-600">{t.role}</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
