import * as React from "react";
import { motion } from "framer-motion";
import { useChooseGift } from "./useChooseGift";

/* ------------------------------- Tiny Hook ------------------------------- */
// Detects Tailwind's md breakpoint (>=768px)
function useIsMdUp() {
  const [isMdUp, setIsMdUp] = React.useState(false);
  React.useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const onChange = () => setIsMdUp(mq.matches);
    onChange();
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);
  return isMdUp;
}

/* ------------------------------ Confetti Layer --------------------------- */
type ConfettiLayerProps = {
  active: boolean;            // run animation when true, pause/reset when false
  density?: number;           // particles per ~10,000 px² (approx)
  className?: string;
  style?: React.CSSProperties;
};

function ConfettiLayer({
  active,
  density = 0.015,
  className,
  style,
}: ConfettiLayerProps) {
  const wrapRef = React.useRef<HTMLDivElement>(null);
  const canvasRef = React.useRef<HTMLCanvasElement>(null);
  const rafRef = React.useRef<number | null>(null);
  const particlesRef = React.useRef<Particle[]>([]);
  const lastTimeRef = React.useRef<number>(0);

  type Particle = {
    x: number; y: number;
    vx: number; vy: number;
    w: number; h: number;
    rot: number; vr: number;
    hue: number; alpha: number;
    life: number; maxLife: number;
    shape: 0 | 1; // 0=rect, 1=circle
  };

  const resizeCanvas = React.useCallback(() => {
    const wrap = wrapRef.current, c = canvasRef.current;
    if (!wrap || !c) return;
    const rect = wrap.getBoundingClientRect();
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    c.width = Math.max(1, Math.floor(rect.width * dpr));
    c.height = Math.max(1, Math.floor(rect.height * dpr));
    c.style.width = `${rect.width}px`;
    c.style.height = `${rect.height}px`;
  }, []);

  const spawn = React.useCallback((count: number) => {
    const c = canvasRef.current;
    if (!c) return;
    for (let i = 0; i < count; i++) {
      const w = 4 + Math.random() * 8;
      const h = 3 + Math.random() * 6;
      particlesRef.current.push({
        x: Math.random() * c.width,
        y: -10,
        vx: (-0.4 + Math.random() * 0.8) * 0.5,
        vy: 0.5 + Math.random() * 1.2,
        w, h,
        rot: Math.random() * Math.PI * 2,
        vr: (-0.03 + Math.random() * 0.06),
        hue: Math.floor(Math.random() * 360),
        alpha: 0.9,
        life: 0,
        maxLife: 3 + Math.random() * 5,
        shape: Math.random() < 0.4 ? 1 : 0,
      });
    }
  }, []);

  const resetParticles = React.useCallback(() => {
    const c = canvasRef.current;
    if (!c) return;
    particlesRef.current = [];
    const area = (c.width * c.height) / (window.devicePixelRatio || 1);
    const target = Math.max(25, Math.floor((area * density) / 10_000));
    spawn(target);
  }, [density, spawn]);

  const tick = React.useCallback((t: number) => {
    const c = canvasRef.current;
    if (!c) return;
    const ctx = c.getContext("2d");
    if (!ctx) return;

    const dt = Math.min(33, t - (lastTimeRef.current || t)) / 16.67; // ~frames
    lastTimeRef.current = t;

    ctx.clearRect(0, 0, c.width, c.height);

    const wind = Math.sin(t * 0.0007) * 0.04; // gentle horizontal wind

    const ps = particlesRef.current;
    for (let i = ps.length - 1; i >= 0; i--) {
      const p = ps[i];
      p.vx += wind * 0.02;
      p.vy += 0.015 * dt; // gravity
      p.x += p.vx * dt * 2;
      p.y += p.vy * dt * 2;
      p.rot += p.vr * dt;
      p.life += dt * 0.02;

      // draw
      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate(p.rot);
      ctx.globalAlpha = Math.max(0, p.alpha * (1 - Math.max(0, p.life / p.maxLife - 0.6)));
      ctx.fillStyle = `hsl(${p.hue} 90% 55%)`;
      if (p.shape === 0) {
        ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
      } else {
        ctx.beginPath();
        ctx.arc(0, 0, p.w * 0.5, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.restore();

      // recycle
      if (p.y > c.height + 20 || p.life > p.maxLife) {
        ps.splice(i, 1);
      }
    }

    if (active) {
      const area = (c.width * c.height) / (window.devicePixelRatio || 1);
      const target = Math.max(25, Math.floor((area * density) / 10_000));
      if (ps.length < target) spawn(Math.min(8, target - ps.length));
      if (Math.random() < 0.03) spawn(4); // occasional tiny burst
    }

    rafRef.current = requestAnimationFrame(tick);
  }, [active, density, spawn]);

  React.useEffect(() => {
    resizeCanvas();
    const ro = new ResizeObserver(resizeCanvas);
    if (wrapRef.current) ro.observe(wrapRef.current);
    window.addEventListener("resize", resizeCanvas);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", resizeCanvas);
    };
  }, [resizeCanvas]);

  React.useEffect(() => {
    if (!active) {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
      const c = canvasRef.current;
      const ctx = c?.getContext("2d");
      if (c && ctx) ctx.clearRect(0, 0, c.width, c.height);
      return;
    }
    resetParticles();
    lastTimeRef.current = 0;
    rafRef.current = requestAnimationFrame(tick);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
    };
  }, [active, tick, resetParticles]);

  return (
    <div ref={wrapRef} className={className} style={{ ...style, position: "relative" }}>
      <canvas ref={canvasRef} style={{ display: "block" }} />
    </div>
  );
}

/* --------------------------------- UI Bits -------------------------------- */
function Chip({ children }: { children: React.ReactNode }) {
  return (
    <span className="px-3 py-2 rounded-full border-2 border-dashed border-[#999999] bg-[#FDD1BA] text-[20px] text-[#333333] text-center font-semibold leading-none whitespace-nowrap mr-3">
      {children}
    </span>
  );
}

function LogoPill({ src, alt }: { src: string; alt: string }) {
  return (
    <span
      className="inline-flex items-center justify-center h-9 md:h-10 px-4
                 rounded-full border-2 border-dashed border-[#999999]
                 bg-[#FDD1BA] shrink-0"
    >
      <img src={src} alt={alt} className="object-contain" />
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
        style={{
          ["--duration" as keyof React.CSSProperties]: `${Math.max(10, 100 / speed)}s`,
        }}
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

/* ------------------------------ Main Section ----------------------------- */
export default function ChooseGift() {
  const { cards } = useChooseGift();
  const [openId, setOpenId] = React.useState<string | null>(null);

  return (
    <div className="justify-center items-center flex flex-col bg-[#EEE9DD]">
      <div className="md:w-7xl w-lg md:pb-0 pb-1 pt-10 ">
        <h3
          style={{ fontFamily: "Albra, serif" }}
          className="pb-16 text-[34px] text-center md:text-[46px] font-medium leading-[124%] text-[#333333]"
        >
          Why Corporates Choose<br />The Good Road
        </h3>

        {/* 2 items per row on small; 4 on md+ */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6 md:mx-0 mx-6">
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

/* -------------------------------- GiftCard -------------------------------- */
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
  const isMdUp = useIsMdUp();
  const ref = React.useRef<HTMLDivElement>(null);
  const imgRef = React.useRef<HTMLImageElement>(null);

  // Close on outside click (md+ only where interactivity exists)
  React.useEffect(() => {
    if (!isMdUp) return;
    const onDoc = (e: MouseEvent) => {
      if (!open) return;
      if (ref.current && !ref.current.contains(e.target as Node)) onClose();
    };
    document.addEventListener("mousedown", onDoc);
    return () => document.removeEventListener("mousedown", onDoc);
  }, [isMdUp, open, onClose]);

  // Sizes
  const CLOSED_H = 180; // px
  const OPEN_H = 280; // px

  // Bow/rect split (tune to your assets)
  const BOW_RATIO = 0.34;
  const RECT_RATIO = 1 - BOW_RATIO;

  // Track image width to size content box exactly to gift width
  const [imgWidth, setImgWidth] = React.useState<number>(0);

  // On small screens: always “open” + no hover/click toggles
  const effectiveOpen = isMdUp ? open : true;
  const currentH = effectiveOpen ? OPEN_H : CLOSED_H;

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
      className={`group relative ${isMdUp ? "cursor-pointer" : "cursor-default"}`}
      // Interactions only on md+
      onMouseEnter={isMdUp ? onOpen : undefined}
      onMouseLeave={isMdUp ? onClose : undefined}
      // Reserve full open height on all to keep grid steady
      style={{ height: OPEN_H }}
    >
      {/* Gift image — grows upward, bottom-anchored */}
      <motion.img
        ref={imgRef}
        src={card.bg}
        alt={card.title}
        className="absolute left-1/2 -translate-x-1/2 bottom-0 w-auto z-0 pointer-events-none select-none"
        animate={{ height: currentH, scale: effectiveOpen ? 1.02 : 1 }}
        transition={{ duration: 0.35, type: "spring", stiffness: 260, damping: 28 }}
        onLoad={() => {
          if (imgRef.current) setImgWidth(imgRef.current.clientWidth);
        }}
      />

      {/* Confetti layer — clipped to rectangular (bottom) area; runs when open */}
      <motion.div
        className="absolute left-1/2 -translate-x-1/2 z-10 overflow-hidden pointer-events-none"
        style={{
          bottom: 0,
          width: imgWidth || "100%",
          height: Math.round(currentH * RECT_RATIO),
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: effectiveOpen ? 1 : 0 }}
        transition={{ duration: 0.25 }}
      >
        <ConfettiLayer active={effectiveOpen} />
      </motion.div>

      {/* Content box — clipped to the rectangular part only (above confetti) */}
      <div
        className="absolute left-1/2 -translate-x-1/2 z-20 overflow-hidden"
        style={{
          bottom: 0,
          width: imgWidth || "100%",
          height: Math.round(currentH * RECT_RATIO),
        }}
      >
        <div className="px-7 pt-3 ">
          <h3
            style={{ fontFamily: "Albra, serif" }}
            className="text-[18px] md:text-[28px] text-center leading-snug text-[#333333]"
          >
            {card.title}
          </h3>
        </div>

        {/* Marquee — always visible on small; conditional on md+ when open */}
        {(effectiveOpen || !isMdUp) && (
          <motion.div
            className="absolute left-0 right-0 bottom-0 z-30"
            initial={isMdUp ? { height: 0, opacity: 0 } : false}
            animate={{ height: 70, opacity: 1 }}
            exit={isMdUp ? { height: 0, opacity: 0 } : undefined}
            transition={{ type: "tween", duration: 0.3 }}
          >
            <div className="bg-transparent pt-2">
              {card.logos && card.logos.length > 0 ? (
                <MarqueeRow speed={55}>
                  {card.logos.map((l, i) => (
                    <LogoPill key={i} src={l.src} alt={l.alt} />
                  ))}
                </MarqueeRow>
              ) : (
                <MarqueeRow speed={55}>
                  {card.tags.map((t, i) => (
                    <Chip key={`${t}-${i}`}>{t}</Chip>
                  ))}
                </MarqueeRow>
              )}
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}
