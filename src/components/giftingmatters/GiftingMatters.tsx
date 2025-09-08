type Point = { id: number; text: string; color: string };

type GiftingMattersProps = {
  title?: string;
  image: string;
  alt?: string;
  points?: Point[];
  ctaText?: string;
};

export default function GiftingMatters({
  title = "Why Corporate Gifting Matters",
  alt,
  points = [
    { id: 1, text: "63% of employees stay longer when they feel recognised.", color: "#34A0B8" }, // teal
    { id: 2, text: "80% feel more connected to their company when appreciated.", color: "#F2C94C" }, // yellow
    { id: 3, text: "94% of executives say gifting strengthens business relationships.", color: "#F2994A" }, // orange
    { id: 4, text: "Premium gifting doubles brand engagement on social media.", color: "#EB5757" }, // red
  ],
  ctaText = "Book a Meeting",
}: GiftingMattersProps) {
  return (
    <section className="w-full bg-[#FCFAF4] text-black">
      <div className="mx-auto max-w-7xl px-4 md:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left: Image Card */}
          <div className="rounded-3xl overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,.35)] ring-1 ring-white/10">
            <img
              src='/assets/giftingmatters.png'
              alt={alt || "Corporate gifting showcase"}
              className="w-full h-[360px] md:h-[440px] object-cover"
              loading="lazy"
            />
          </div>

          {/* Right: Content */}
          <div className="px-1">
            <h2 className="text-3xl md:text-5xl font-semibold leading-tight text-black">
              {title}
            </h2>

            <ul className="mt-8 space-y-5">
              {points.map((p) => (
                <li key={p.id} className="flex items-start gap-4">
                  {/* Number badge with colored ring */}
                  <span
                    className="inline-grid place-items-center w-8 h-8 rounded-full text-sm font-semibold"
                    style={{
                      color: p.color,
                      boxShadow: `inset 0 0 0 2px ${p.color}`,
                    }}
                  >
                    {p.id}
                  </span>
                  <p className="text-base md:text-lg text-black leading-relaxed">
                    {p.text}
                  </p>
                </li>
              ))}
            </ul>

            <button
              className="mt-8 inline-flex items-center justify-center rounded-full bg-[#FEC8B2] text-black px-6 md:px-7 py-3 md:py-3.5 font-medium hover:bg-[#fdb79c] transition shadow"
            >
              {ctaText}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
