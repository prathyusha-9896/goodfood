import { useShowcaseWork } from "./useShowcaseWork";
import * as React from "react";
import HelpForm from "../HelpForm";
import { useState } from "react";
function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full px-3 py-1 text-xs font-medium bg-[#E9DEC9] text-[#3B2F23] shadow-sm">
      {children}
    </span>
  );
}

function WorkCard({
  title,
  image,
  description,
  tags,
  href,
}: {
  title: string;
  image: string;
  description: string;
  tags: string[];
  href?: string;
}) {
  const CardInner = (
    <div className="group">
      <div className="overflow-hidden rounded-2xl ring-1 ring-white/10 bg-white/5">
        <img
          src={image}
          alt={title}
          className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          loading="lazy"
        />
      </div>

      <h3 style={{ fontFamily: "Albra, serif" }} className="mt-4 text-xl font-semibold text-[#333333]">{title}</h3>
      <p className="mt-2 text-[12px] leading-relaxed text-[#333333]">{description}</p>

      <div className="mt-4 flex flex-wrap gap-2">
        {tags.map((t, i) => (
          <Tag key={i}>{t}</Tag>
        ))}
      </div>
    </div>
  );

  return href ? (
    <a
      href={href}
      className="block focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FEC8B2] rounded-2xl"
    >
      {CardInner}
    </a>
  ) : (
    <div>{CardInner}</div>
  );
}

export default function ShowcaseWork() {
  const items = useShowcaseWork();
  const [open, setOpen] = useState(false);

  return (
    <section className="w-full bg-[#FCFAF4]">
      <div className="mx-auto md:max-w-7xl max-w-lg pl-8 md:px-8 py-12 md:py-16">
        {/* Header row */}
        <div className="mb-8 md:mb-12 flex items-start justify-between gap-6">
          <h2 style={{ fontFamily: "Albra, serif" }} className="text-[28px] md:text-[46px] font-medium leading-[124%] text-[#333333] max-w-3xl">
            From 50 hampers to 5,000, <br />
            we deliver with precision.
          </h2>

          <button
             onClick={() => setOpen(true)} 
            className="shrink-0 rounded-full bg-[#FEC8B2] px-5 py-2.5 text-sm font-medium text-[#333333] md:block hidden"
          >
            See More of our work
          </button>
        </div>

        {/* ===== Mobile: horizontal scroller showing ~1.5 cards ===== */}
        <div className="md:hidden overflow-hidden">
          <div
            className="
              no-scrollbar
              -mx-4 px-4
              flex gap-4 overflow-x-auto snap-x snap-mandatory scroll-pl-4
              pb-2
              touch-pan-x
            "
          >
            {items.map((it, idx) => (
              <div
                key={idx}
                className="
                  shrink-0 snap-start
                  w-[72vw]    /* ~1.5 cards visible */
                  sm:w-[65vw] /* slightly tighter on big small-screens */
                "
              >
                <WorkCard
                  title={it.title}
                  image={it.image}
                  description={it.description}
                  tags={it.tags}
                  href={it.href}
                />
              </div>
            ))}
          </div>
        </div>

        {/* ===== md+: original grid ===== */}
        <div className="hidden md:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-4">
          {items.map((it, idx) => (
            <WorkCard
              key={idx}
              title={it.title}
              image={it.image}
              description={it.description}
              tags={it.tags}
              href={it.href}
            />
          ))}
        </div>
      </div>

      {/* Hide scrollbar utility (if you don't already have one globally) */}
      <style>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
            {/* Modal HelpForm */}
            <HelpForm
              isOpen={open}
              onClose={() => setOpen(false)}
              backgroundImage="/assets/helpformbg.png"
            />
    </section>
  );
}
