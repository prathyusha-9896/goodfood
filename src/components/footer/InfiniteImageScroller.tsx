import { useEffect } from "react";

type ScrollerProps = {
  images: string[];          // absolute or /public paths
  speedSec?: number;         // full loop duration
  cols?: number;             // grid columns
  gap?: number;              // gap in px
  rounded?: string;          // tailwind radius class
};

export default function InfiniteImageScroller({
  images,
  speedSec = 28,
  cols = 2,
  gap = 12,
  rounded = "rounded-r-[28px]",
}: ScrollerProps) {
  // Inject keyframes once (works with Tailwind v4 without config edits)
  useEffect(() => {
    const id = "__infinite_scroller_keyframes";
    if (!document.getElementById(id)) {
      const style = document.createElement("style");
      style.id = id;
      style.innerHTML = `
        @keyframes scrollY {
          from { transform: translateY(0); }
          to   { transform: translateY(-50%); }
        }
      `;
      document.head.appendChild(style);
    }
  }, []);

  // Duplicate the grid twice to create a seamless loop
  const Grid = () => (
    <div
      className="grid"
      style={{
        gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))`,
        gap,
      }}
    >
      {images.map((src, i) => (
        <div key={i} className="overflow-hidden rounded-xl">
          <img
            src={src}
            alt={`tile-${i + 1}`}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
      ))}
    </div>
  );

  return (
    <div className={`relative h-full w-full overflow-hidden ${rounded}`}>
      {/* soft fade top/bottom for nicer loop */}
      <div className="pointer-events-none absolute inset-0 z-10"
           style={{ maskImage: "linear-gradient(to bottom, transparent 0%, black 10%, black 90%, transparent 100%)" }} />
      <div
        className="absolute left-0 top-0 w-full"
        style={{
          animation: `scrollY ${speedSec}s linear infinite`,
        }}
      >
        <Grid />
        <Grid />
      </div>
    </div>
  );
}
