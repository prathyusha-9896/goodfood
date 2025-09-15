// components/InteractiveGiftRow.tsx
import * as React from "react";
import { motion } from "framer-motion";
import { useChooseGift } from "./choosegift/useChooseGift";

function useMedia(query: string) {
  const [matches, setMatches] = React.useState(false);
  React.useEffect(() => {
    const mq = window.matchMedia(query);
    const onChange = () => setMatches(mq.matches);
    onChange();
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, [query]);
  return matches;
}

export default function InteractiveGiftRow() {
  const { cards } = useChooseGift();
  const isMdUp = useMedia("(min-width: 768px)");
  const [active, setActive] = React.useState<number | null>(0);

  // tweak to taste
  const ACTIVE_GROW = 1.6;
  const INACTIVE_GROW = 0.8;

  return (
    <div className="relative mt-8">
      {/* neutralize container side padding so right edge is flush */}
      <div className="-mx-8 md:-mx-8">
        {/* put left padding back only */}
        <div className="pl-8 md:pl-8">
          <div className="flex gap-3 md:gap-6 overflow-hidden">
            {cards.map((card, i) => {
              const isActive = isMdUp ? active === i : true;
              return (
                <motion.div
                  key={card.id ?? i}
                  className="relative min-w-0"
                  onMouseEnter={isMdUp ? () => setActive(i) : undefined}
                  onMouseLeave={isMdUp ? () => setActive(null) : undefined}
                  animate={{
                    flexGrow: isMdUp
                      ? active === null
                        ? 1
                        : isActive
                        ? ACTIVE_GROW
                        : INACTIVE_GROW
                      : 1,
                  }}
                  style={{ flexBasis: 0 }}
                  transition={{ type: "spring", stiffness: 260, damping: 28 }}
                >
                  {/* Card shell (simple, image + title). Replace with your GiftCard if exported */}
                  <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-white relative">
                    {card.bg && (
                      <img
                        src={card.bg}
                        alt={card.title}
                        className="absolute inset-0 w-full h-full object-contain pointer-events-none select-none"
                      />
                    )}
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <h3
                        style={{ fontFamily: "Albra, serif" }}
                        className="text-lg md:text-2xl font-medium text-[#333]"
                      >
                        {card.title}
                      </h3>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
