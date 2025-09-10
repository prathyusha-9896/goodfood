import { useRef } from "react";
import { useCorporateSolutions } from "./useCorporateSolutions";

type CardProps = {
  title: string;
  image: string;
  href?: string;
  size?: "sm" | "md" | "lg";
  fluid?: boolean; // 👈 new
};

function SolutionCard({ title, image, href, size = "md", fluid = false }: CardProps) {
  const h =
    size === "lg" ? "h-52 md:h-64" :
    size === "sm" ? "h-28 md:h-36" :
    "h-64 md:h-48";

  // If fluid: let the card fill its parent. If not: keep your fixed 276px on sm, full on md+
  const rootW = fluid ? "w-full" : "w-[276px] sm:w-[276px] md:w-full";
  const imgW  = fluid ? "w-full" : "w-[276px] md:w-full";

  const Inner = (
    <div className={`group relative overflow-hidden rounded-2xl shadow-sm ring-1 ring-black/5 bg-white ${rootW}`}>
      <img
        src={image}
        alt={title}
        className={`${h} ${imgW} object-cover transition-transform duration-500 group-hover:scale-105`}
        loading="lazy"
        sizes={fluid
          ? "(min-width:1024px) 25vw, (min-width:640px) 60vw, 80vw"
          : "(min-width:1024px) 25vw, (min-width:640px) 50vw, 100vw"}
      />
      <div className="bg-[#ffffff]">
        <div className="px-4 py-3 text-black text-sm md:text-base font-medium">{title}</div>
      </div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 translate-y-full transition-transform duration-300 group-hover:translate-y-0">
        <div className="bg-[#F39B6A]">
          <div className="px-4 py-3 text-white text-sm md:text-base font-medium">{title}</div>
        </div>
      </div>
    </div>
  );

  return href ? (
    <a className="block focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F39B6A] rounded-2xl" href={href} aria-label={title}>
      {Inner}
    </a>
  ) : Inner;
}

export default function CorporateSolutions() {
  const items = useCorporateSolutions();

  // Distribute items round-robin into 4 columns (for md+ grid)
  const cols = Array.from({ length: 4 }, () => [] as typeof items);
  items.forEach((it, idx) => cols[idx % 4].push(it));

  const patterns: Array<Array<"sm" | "md" | "lg">> = [
    ["sm", "md", "lg"], // col 1
    ["md", "lg", "sm"], // col 2
    ["sm", "lg", "md"], // col 3
    ["md", "sm", "lg"], // col 4
  ];

  // Simple helpers for mobile arrows (optional)
  const scrollerRef = useRef<HTMLDivElement | null>(null);
  // const scrollByCards = (dir: -1 | 1) => {
  //   const scroller = scrollerRef.current;
  //   if (!scroller) return;
  //   // One "card width" = first card's width + gap (approx)
  //   const firstCard = scroller.querySelector<HTMLElement>(".carousel-card");
  //   const cardWidth = firstCard?.offsetWidth ?? 0;
  //   const gap = 16; // matches gap-4
  //   scroller.scrollBy({ left: dir * (cardWidth + gap), behavior: "smooth" });
  // };

  return (
    <section className="w-full bg-[#FCFAF4]">
      <div className="mx-auto md:max-w-7xl max-w-lg px-4 md:px-8 py-12 md:py-16">
        <div className="flex w-full items-center md:justify-between justify-center">
          <h2 style={{ fontFamily: "Albra, serif" }} className="text-3xl md:text-4xl md:text-left text-center font-semibold text-[#333333] mb-8 md:mb-10">
            Our Corporate <br className="hidden sm:block" /> Gifting Solutions
          </h2>
          <button className="md:block hidden bg-[#FEC8B2] text-black px-6 py-3 rounded-full font-medium hover:bg-[#fdb79c] transition">
            We have something for everyone
          </button>
        </div>
        {/* ===== MOBILE / SMALL: horizontal slider with 1.5 cards ===== */}
        <div className="md:hidden overflow-hidden">
          <div className="relative">
            <div
              ref={scrollerRef}
              className="
                no-scrollbar
                flex gap-4 overflow-x-auto snap-x snap-mandatory scroll-pl-4
                -mx-4 px-4 pb-2 touch-pan-x
              "
            >
              {items.map((it, i) => (
                <div
                  key={i}
                  className="
                    carousel-card shrink-0 snap-start
                    w-[calc(100vw/1.5)] /* 👈 ~1.5 cards visible */
                  "
                >
                  <SolutionCard
                    title={it.title}
                    image={it.image}
                    href={it.href}
                    size="md"
                    fluid                 
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center mt-6">
          <button className="md:hidden inline-block bg-[#FEC8B2] text-black px-6 py-3 rounded-full font-medium hover:bg-[#fdb79c] transition">
            We have something for everyone
          </button>
        </div>
        {/* ===== MD+ GRID: your original layout ===== */}
        <div className="hidden md:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
          {cols.map((colItems, colIdx) => (
            <div key={colIdx} className="flex flex-col gap-5">
              {colItems.map((it, i) => {
                const size = patterns[colIdx][i % patterns[colIdx].length];
                return (
                  <SolutionCard
                    key={`${colIdx}-${i}`}
                    title={it.title}
                    image={it.image}
                    href={it.href}
                    size={size}
                  />
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
