type LinkCol = { heading: string; items: { label: string; href?: string }[] };

type FooterCtaProps = {
  // top CTA card
  ctaTitle?: string;
  ctaBody?: string;
  primaryText?: string;
  secondaryText?: string;
  onPrimary?: () => void;
  onSecondary?: () => void;

  // EITHER supply a static image...
  ctaImage?: string;
  // ...OR supply an array to render an infinite scroller (2 rows)
  scrollImages?: string[];
  scrollSpeedSec?: number; // default 28

  // footer logo + contact
  logo?: string;
  email?: string;
  phone?: string;
  address?: string;
  hours?: string;

  // columns
  columns?: LinkCol[];

  // payment icons (right of bottom bar)
  payments?: { src: string; alt: string }[];
};

/* Inject keyframes once (safe on SSR) */
function ensureKeyframes() {
  if (typeof document === "undefined") return;
  const id = "__infinite_rows_keyframes";
  if (document.getElementById(id)) return;
  const el = document.createElement("style");
  el.id = id;
  el.innerHTML = `
    @keyframes marqueeX {
      0%   { transform: translateX(0); }
      100% { transform: translateX(-50%); } /* move by half because we duplicate the content */
    }
  `;
  document.head.appendChild(el);
}

/** 2-row horizontal infinite scroller */
function InfiniteMosaicRows({
  images,
  speedSec = 28,
}: {
  images: string[];
  speedSec?: number;
}) {
  ensureKeyframes();
  const dup = [...images, ...images]; // duplicate for seamless loop

  function Row({ reverse }: { reverse?: boolean }) {
    return (
      <div
        className="flex w-full gap-3 will-change-transform"
        style={{
          animation: `marqueeX ${speedSec}s linear infinite`,
          animationDirection: reverse ? "reverse" : "normal",
        }}
      >
        {dup.map((src, i) => (
          <div key={i} className="overflow-hidden flex-none">
            <img
              src={src}
              alt={`mosaic-${i}`}
              className="h-40 md:h-44 w-40 md:w-44 object-cover"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="relative h-full min-h-[240px] lg:min-h-[280px] overflow-hidden rounded-[28px]">
      {/* edge fade */}
      <div className="pointer-events-none absolute inset-0 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]" />
      <div className="absolute inset-0 p-3">
        <div className="space-y-3">
          {/* Top: left → right */}
          <Row reverse />
          {/* Bottom: right → left */}
          <Row />
        </div>
      </div>
    </div>
  );
}

export default function FooterCta({
  ctaTitle = "Ready to Plan Your Corporate Gifting?",
  ctaBody = "Make every gift count with curated, personalized solutions tailored to your brand and occasion. Start planning today and create lasting impressions for your team and clients.",
  primaryText = "Book a Meeting",
  secondaryText = "Send a Query",
  onPrimary,
  onSecondary,

  ctaImage,
  scrollImages,
  scrollSpeedSec = 28,

  email = "hello@thegoodroad.in",
  phone = "+91 93112 09528",
  address = "Esoteric Lifestyle LLP, Delhi, India",
  hours = "Mon – Fri | 10:00 AM – 06:30 PM",

  columns = [
    {
      heading: "Our Presence",
      items: [
        { label: "Delhi/NCR" },
        { label: "Chennai" },
        { label: "Ahmedabad" },
        { label: "Mumbai" },
        { label: "Hyderabad" },
        { label: "Bangalore" },
        { label: "Pune" },
        { label: "Kolkata" },
      ],
    },
    {
      heading: "Shop",
      items: [
        { label: "Pre-packed Hampers" },
        { label: "Customised Gift Items" },
        { label: "Bridesmaid Gifts" },
        { label: "Clearance Sale" },
        { label: "Corporate Gifts" },
        { label: "Ready to Ship Diwali Hampers" },
      ],
    },
    {
      heading: "Social",
      items: [
        { label: "Youtube" },
        { label: "Instagram" },
        { label: "Twitter" },
        { label: "Whatsapp" },
        { label: "Facebook" },
        { label: "Pinterest" },
      ],
    },
    {
      heading: "Information",
      items: [{ label: "Home" }, { label: "About" }, { label: "Portfolio" }, { label: "Blog" }],
    },
    {
      heading: "Help",
      items: [{ label: "Contact" }, { label: "Help Center" }, { label: "Terms of Service" }, { label: "Privacy Policy" }],
    },
  ],

  payments = [
    { src: "/assets/footerlogos/GooglePay.png", alt: "GPay" },
    { src: "/assets/footerlogos/AmazonPay.png", alt: "Amazon Pay" },
    { src: "/assets/footerlogos/Visa.png", alt: "VISA" },
    { src: "/assets/footerlogos/AmericanExpress.png", alt: "American Express" },
  ],
}: FooterCtaProps) {
  return (
    <footer className="w-full bg-[#2F2F2F] text-white">
      {/* OVERLAPPING CTA CARD */}
      <div className="mx-auto max-w-7xl mt-56 px-8 md:px-8">
        <div className="-translate-y-1/2">
          <div className="rounded-[28px] bg-[#F4EFE5] text-[#1E1E1E] shadow-xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Left copy */}
              <div className="p-6 sm:p-8 lg:p-10">
                <h3 style={{ fontFamily: "Albra, serif" }} className="text-2xl  sm:text-3xl lg:text-4xl font-semibold leading-tight">
                  {ctaTitle}
                </h3>
                <p className="mt-4 text-sm sm:text-base text-[#433]">{ctaBody}</p>

                <div className="mt-6 flex items-center gap-3">
                  <button
                    onClick={onPrimary}
                    className="rounded-full bg-[#FEC8B2] px-5 py-2.5 text-sm font-medium text-black shadow hover:bg-[#fdb79c] transition"
                  >
                    {primaryText}
                  </button>
                  <button
                    onClick={onSecondary}
                    className="rounded-full border border-black/20 px-5 py-2.5 text-sm font-medium text-[#1E1E1E] bg-white hover:bg-white/90 transition"
                  >
                    {secondaryText}
                  </button>
                </div>
              </div>

              {/* Right panel: 2-row scroller OR static image */}
              <div className="relative min-h-[240px] lg:min-h-[380px] -rotate-65 md:block hidden">
                {scrollImages && scrollImages.length > 0 ? (
                  <InfiniteMosaicRows images={scrollImages} speedSec={scrollSpeedSec} />
                ) : ctaImage ? (
                  <img
                    src={ctaImage}
                    alt="CTA visual"
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FOOTER BODY */}
      <div className="mx-auto md:max-w-7xl max-w-lg px-4 md:px-8 -mt-8 pb-10 flex flex-col justify-center items-center">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-10 ">
          {/* Brand + contact */}
          <div className="md:col-span-2">
            <img
              src='/assets/footerlogos/footerlogo.png'
              alt="The Good Road"
              className=""
            />
            <div className="mt-4 space-y-2 text-sm text-white/80">
              <div>{email}</div>
              <div>{phone}</div>
              <div>{address}</div>
              <div>{hours}</div>
            </div>
          </div>

          {/* Link columns */}
          {columns.map((col, i) => (
            <div key={i} >
              <h4 style={{ fontFamily: "Albra, serif" }} className="text-sm font-albra font-semibold text-white/90">{col.heading}</h4>
              <ul className="mt-3 space-y-2 text-sm text-white/70">
                {col.items.map((it, j) => (
                  <li key={j}>
                    {it.href ? (
                      <a href={it.href} className="hover:text-white transition">
                        {it.label}
                      </a>
                    ) : (
                      <span className="cursor-default">{it.label}</span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-10 border-t border-white/10 pt-6 md:flex items-center justify-center md:justify-between gap-4">
          <p className="text-xs text-white/60">
            Copyright © {new Date().getFullYear()}. The Good Road Gifting. All Rights Reserved.
          </p>
          <div className="flex items-center gap-4">
            {payments.map((p, idx) => (
              <img key={idx} src={p.src} alt={p.alt} className="" />
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
