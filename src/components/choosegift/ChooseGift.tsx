import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useChooseGift } from "./useChooseGift";

// pill chip
function Chip({ children }: { children: React.ReactNode }) {
  return (
<span className="px-3 py-2 rounded-full border-2 border-dashed border-[#999999] bg-[#FDD1BA] text-[20px] text-[#333333] text-center font-semibold leading-none whitespace-nowrap mr-3">
  {children}
</span>
  );
}

function MarqueeRow({
  speed = 50,
  children,
}: {
  speed?: number;
  children: React.ReactNode;
}) {
  return (
    <div className="relative overflow-hidden">
      <div
        className="flex w-[200%] animate-[scrollX_var(--duration)_linear_infinite]"
        style={{ ["--duration" as keyof React.CSSProperties]: `${Math.max(10, 100 / speed)}s` }}
      >
        {/* first half */}
        <div className="flex items-center gap-6 pr-96 [&>*]:shrink-0">
          {children}
        </div>
        {/* clone for seamless loop */}
        <div className="flex items-center [&>*]:shrink-0" aria-hidden>
          {children}
        </div>
      </div>
    </div>
  );
}

export default function ChooseGift() {
  const { cards } = useChooseGift();
  const [openId, setOpenId] = React.useState<string | null>(null);

  return (
    <div className="justify-center items-center flex flex-col">
      <div className="w-7xl py-8 ">
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 xl:grid-cols-4">
          {cards.map((card) => (
            <GiftCard
              key={card.id}
              card={card}
              open={openId === card.id}
              onOpen={() => setOpenId(card.id)}
              onClose={() => setOpenId(null)}
            />
          ))}
        </div>

        {/* marquee keyframes */}
        <style>{`
          @keyframes scrollX { from { transform: translateX(0); } to { transform: translateX(-50%); } }
          .animate-[scrollX_var(--duration)_linear_infinite] {
            animation: scrollX var(--duration) linear infinite;
          }
        `}</style>
      </div>
    </div>
  );
}

function LogoPill({ src, alt }: { src: string; alt: string }) {
  return (
    <span className="inline-flex items-center justify-center h-9 md:h-10 px-4
                     rounded-full border-2 border-dashed border-[#999999]
                     bg-[#FDD1BA] shrink-0">
      <img src={src} alt={alt} className=" object-contain" />
    </span>
  );
}


function GiftCard({
  card,
  open,
  onOpen,
  onClose,
}: {
  card: ReturnType<typeof useChooseGift>["cards"][number];
  open: boolean;
  onOpen: () => void;
  onClose: () => void;
}) {
  const ref = React.useRef<HTMLDivElement>(null);
  const imgRef = React.useRef<HTMLImageElement>(null);

  React.useEffect(() => {
    const onDoc = (e: MouseEvent) => {
      if (!open) return;
      if (ref.current && !ref.current.contains(e.target as Node)) onClose();
    };
    document.addEventListener("mousedown", onDoc);
    return () => document.removeEventListener("mousedown", onDoc);
  }, [open, onClose]);

  // Sizes
  const CLOSED_H = 180; // px
  const OPEN_H = 280;   // px

  // How much of the image height is the bow (non-rectangular) at the top?
  // Tweak this to match your PNGs. 0.34 = 34% bow, 66% rectangle.
  const BOW_RATIO = 0.34;
  const RECT_RATIO = 1 - BOW_RATIO;

  // Track current image width to size the content box exactly to the gift width
  const [imgWidth, setImgWidth] = React.useState<number>(0);
  const currentH = open ? OPEN_H : CLOSED_H;

  React.useEffect(() => {
    function update() {
      if (imgRef.current) setImgWidth(imgRef.current.clientWidth);
    }
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return (
    <div
      ref={ref}
      className="group relative cursor-pointer"
      onMouseEnter={onOpen}
      onClick={() => (open ? onClose() : onOpen())}
      style={{ height: OPEN_H }} // reserve space to avoid page jump
    >
      {/* GIFT IMAGE — grows upward, bottom anchored */}
      <motion.img
        ref={imgRef}
        src={card.bg}
        alt={card.title}
        className="absolute left-1/2 -translate-x-1/2 bottom-0 w-auto z-0 pointer-events-none select-none"
        animate={{ height: currentH, scale: open ? 1.02 : 1 }}
        transition={{ duration: 0.35, type: "spring", stiffness: 260, damping: 28 }}
        onLoad={() => {
          if (imgRef.current) setImgWidth(imgRef.current.clientWidth);
        }}
      />

      {/* CONTENT BOX — clipped to the rectangular part of the gift only */}
      <div
        className="absolute left-1/2 -translate-x-1/2 z-10 overflow-hidden"
        style={{
          // position the top of the box right where the rectangle starts
          bottom: 0,
          width: imgWidth || "100%",                   // match gift width
          height: Math.round(currentH * RECT_RATIO),   // only rectangle height
        }}
      >
        {/* Title (inside rectangle). Adjust padding if needed. */}
        <div className="px-10 pt-3">
          <h3 className="text-[20px] md:text-[22px] leading-snug text-[#1C1C1C]">
            {card.title}
          </h3>
        </div>
        
        <AnimatePresence>
          {open && (
            <motion.div
              className="absolute left-0 right-0 bottom-0 z-20"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 70, opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ type: "tween", duration: 0.3 }}
            >
              <div className=" bg-transparent  pt-2">
                {card.logos && card.logos.length > 0 ? (
                  <MarqueeRow speed={55}>
                    {card.logos?.map((l, i) => (
                      <LogoPill key={i} src={l.src} alt={l.alt} />
                    ))}
                  </MarqueeRow>

                ) : (
                  // 🔁 Tags marquee (default for other cards)
                  <MarqueeRow speed={55}>
                    {card.tags.map((t, i) => (
                      <Chip key={`${t}-${i}`}>{t}</Chip>
                    ))}
                  </MarqueeRow>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </div>
  );
}

