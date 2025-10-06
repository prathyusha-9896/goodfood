import {useState} from 'react'
import HelpForm from '../HelpForm';
// type LinkCol = { heading: string; items: { label: string; href?: string }[] };
type LinkCol = {
  heading: string;
  items: { label: string; href: string }[];
};
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
function isExternal(href?: string) {
  if (!href) return false;
  return /^https?:\/\//i.test(href) || href.startsWith('mailto:') || href.startsWith('tel:');
}

const defaultColumns: LinkCol[] = [
  {
    heading: 'Our Presence',
    items: [
      { label: 'Delhi/NCR', href: '#' },
      { label: 'Chennai', href: '#' },
      { label: 'Ahmedabad', href: '#' },
      { label: 'Mumbai', href: '#' },
      { label: 'Hyderabad', href: '#' },
      { label: 'Bangalore', href: '#' },
      { label: 'Pune', href: '#' },
      { label: 'Kolkata', href: '#' },
    ],
  },
  {
    heading: 'Social',
    items: [
      { label: 'Youtube', href: 'https://www.youtube.com/@thegoodroadd' },
      { label: 'Instagram', href: 'https://www.instagram.com/thegoodroad.in' },
      { label: 'Whatsapp', href: 'https://wa.me/919311205938' },
      { label: 'LinkedIn', href: 'https://www.linkedin.com/company/the-good-road/?viewAsMember=true' },
      { label: 'Pinterest', href: 'https://in.pinterest.com/thegoodroad/' },
    ],
  },
  {
    heading: 'Information',
    items: [
      { label: 'Home', href: '/' },
      { label: 'About', href: 'https://www.thegoodroad.in/pages/about-us-1' },
      { label: 'Portfolio', href: 'https://www.thegoodroad.in/pages/portfolio' },
      { label: 'Blog', href: 'https://www.thegoodroad.in/blogs/all-blogs' },
      { label: 'FAQS', href: 'https://www.thegoodroad.in/pages/faqs' },
    ],
  },
  {
    heading: 'Help',
    items: [
      { label: 'Contact', href: '/contact_us' },
      { label: 'Shipping & Return Policy', href: 'https://www.thegoodroad.in/pages/shipping-return-policy' },
      { label: 'Refund Policy', href: 'https://www.thegoodroad.in/policies/refund-policy' },
      { label: 'Terms & Conditions', href: 'https://www.thegoodroad.in/pages/terms-conditions' },
      { label: 'Terms of Service', href: 'https://www.thegoodroad.in/policies/terms-of-service' },
      { label: 'Privacy Policy', href: 'https://www.thegoodroad.in/pages/privacy-policy' },
    ],
  },
]


export default function FooterCta({
  ctaBody = "Make every gift count with curated, personalized solutions tailored to your brand and occasion. Start planning today and create lasting impressions for your team and clients.",
  primaryText = "Book a Meeting",
  secondaryText = "Send a Query",

  ctaImage,
  scrollImages,
  scrollSpeedSec = 28,

  email = "hello@thegoodroad.in",
  phone = "+91 93112 05938",
  address = "Esoteric Lifestyle LLP, Delhi, India",
  hours = "Mon – Fri | 10:00 AM – 06:30 PM",

columns = defaultColumns,
  payments = [
    { src: "/assets/footerlogos/GooglePay.png", alt: "GPay" },
    { src: "/assets/footerlogos/AmazonPay.png", alt: "Amazon Pay" },
    { src: "/assets/footerlogos/Visa.png", alt: "VISA" },
    { src: "/assets/footerlogos/AmericanExpress.png", alt: "American Express" },
  ],
}: FooterCtaProps) 

{
    const [open, setOpen] = useState(false);
  
  return (
    <footer className="w-full bg-[#2F2F2F] text-white">
      {/* OVERLAPPING CTA CARD */}
      <div className="mx-auto max-w-7xl mt-56 px-8 md:px-8">
        <div className="-translate-y-1/2">
          <div className="rounded-[28px] bg-[#F4EFE5] text-[#1E1E1E] shadow-xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Left copy */}
              <div className="p-8 md:p-10">
                <h3 style={{ fontFamily: "Albra, serif" }} className="text-[28px] text-[#333333] sm:text-[46px] lg:text-4xl font-medium leading-[124%]">
                  Ready to Plan Your <br /> Corporate Gifting?
                </h3>
                <p className="mt-4 text-sm sm:text-base text-[#333333] leading-[137%]">{ctaBody}</p>

                <div className="mt-6 flex items-center gap-3">
                  <a
                    href="/book_a_call"
                    className="rounded-full bg-[#FEC8B2] px-5 py-2.5 text-sm font-medium text-black shadow "
                  >
                    {primaryText}
                  </a>
                  <button
                    onClick={() => setOpen(true)} 
                    className="rounded-full border border-[#1A1A1A] px-5 py-2.5 text-sm font-medium text-[#1E1E1E] bg-transparent"
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
      <div className="mx-auto md:max-w-7xl max-w-lg px-8 -mt-8 pb-10 flex flex-col justify-center items-center">
        <div className="justify-center items-center pb-10 md:hidden block">
            <img
              src='/assets/footerlogos/footerlogo.svg'
              alt="The Good Road"
              className=""
            />
        </div>
        <div className="grid grid-cols-2 md:grid-cols-6 gap-20 ">
          {/* Brand + contact */}
          <div className="md:col-span-2 md:block hidden">
            <img
              src='/assets/footerlogos/footerlogo.svg'
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
          <div className="md:col-span-2 md:hidden block">
            <div className="mt-4 space-y-2 text-sm text-white/80">
              <div>{email}</div>
              <div>{address}</div>
            </div>
          </div>
          <div className="md:col-span-2 md:hidden block">
            <div className="mt-4 space-y-2 text-sm text-white/80">
              <div>{phone}</div>
              <div>{hours}</div>
            </div>
          </div>

{/* Link columns */}
{columns.map((col, i) => (
  <div key={i}>
    <h4 style={{ fontFamily: "Albra, serif" }} className="text-sm font-albra font-semibold text-white/90">
      {col.heading}
    </h4>
    <ul className="mt-3 space-y-2 text-sm text-white/70">
      {col.items.map((it, j) => {
        const external = isExternal(it.href);
        return (
          <li key={j}>
            {it.href ? (
              <a
                href={it.href}
                {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className="hover:text-white transition focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50 rounded-sm"
                aria-label={`${col.heading}: ${it.label}`}
              >
                {it.label}
              </a>
            ) : (
              <span className="cursor-default">{it.label}</span>
            )}
          </li>
        );
      })}
    </ul>
  </div>
))}

        </div>

        {/* Bottom bar */}
        <div className="mt-10 border-t border-white/10 pt-6 
                        flex flex-col items-center gap-4
                        md:flex-row md:items-center md:justify-between w-full">
          <p className="text-xs text-white/60">
            Copyright © {new Date().getFullYear()}. The Good Road Gifting. All Rights Reserved.
          </p>
          <div className="flex items-center gap-4">
            {payments.map((p, idx) => (
              <img key={idx} src={p.src} alt={p.alt} className="h-6" />
            ))}
          </div>
        </div>

      </div>
                  {/* Modal HelpForm */}
            <HelpForm
              isOpen={open}
              onClose={() => setOpen(false)}
              backgroundImage="/assets/helpformbg.png"
            />
    </footer>
  );
}
