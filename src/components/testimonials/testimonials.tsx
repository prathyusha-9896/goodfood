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
    logo: "/public/assets/dream.png",
    image: "/assets/testimonial1.png",
    quote:
      "I can confidently say that partnering with The Good Road has been nothing short of exceptional. We have trusted them with high-end luxury gift hampers for our brand ambassadors for 4 years now, and they surpass our expectations time and again. We feel so secure with them with such sensitive personal client data as well as making sure the gifts are of the very best quality and they always deliver.",
    name: "Abhinav Shukla",
    role: "Growth Specialist",
    avatar: "/public/assets/profile/profile_1.svg",
  },
  {
    brand: "inshort",
    logo: "/public/assets/inshorts.png",
    image: "/assets/testimonial2.png",
    quote:
      "The work anniversary hampers turned out to be so great. Everyone loved it!Thank you for curating with such care and detailing.",
    name: "Shikha Dhingra",
    role: "Employee Welfare Associate",
    avatar: "/public/assets/profile/profile_2.svg",
  },
    {
    brand: "hyundai",
    logo: "/public/assets/hyundai.png",
    image: "/assets/testimonial3.png",
    quote:
      "We sincerely appreciate your prompt support and efforts in arranging such beautiful hampers for our Women’s Day celebration.Your dedication and attention to detail truly made a difference, and we are sure these hampers will be loved by everyone. Thank you for going the extra mile to ensure everything was perfect. We value our partnership and look forward to working together again in the future!",
    name: "Riya Bedi",
    role: "Human Resources",
    avatar: "/public/assets/profile/profile_3.svg",
  },
    {
    brand: "inshort",
    logo: "/public/assets/inshorts.png",
    image: "/assets/testimonial4.png",
    quote:
      "For nearly three years, they have been our trusted official gifting partners, consistently impressing us with their attention to detail, creativity, and professionalism. From onboarding kits to anniversary hampers to diwali gifting, they take care of every gifting requirements of our company all year round and we look forward to continuing our partnership for many years to come.",
    name: "Soumi Chakraborty",
    role: "General Manager, HR",
    avatar: "/public/assets/profile/profile_4.svg",
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
          <div className="flex-1 md:block hidden overflow-hidden">
            <img
              src={t.image}
              alt={t.brand}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Testimonial */}
          <div className="flex-1 bg-white text-gray-800m flex flex-col  px-[56px] py-[48px]  justify-between">
            <div>
              <img src={t.logo} alt={t.brand} className="mb-8" />
              <blockquote className="italic md:text-[28px] text-[20px] leading-[126%] tracking-tight font-light text-black">
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
