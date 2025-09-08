import { useCorporateSolutions } from "./useCorporateSolutions";

type CardProps = {
  title: string;
  image: string;
  href?: string;
  size?: 'sm' | 'md' | 'lg';
};

function SolutionCard({ title, image, href, size = 'md' }: CardProps) {
  const h =
    size === 'lg' ? 'h-52 md:h-64' :
    size === 'sm' ? 'h-28 md:h-36' :
    'h-36 md:h-48';

  const Inner = (
    <div className="group relative overflow-hidden rounded-2xl shadow-sm ring-1 ring-black/5 bg-white">
      <img
        src={image}
        alt={title}
        className={`${h} w-full object-cover transition-transform duration-500 group-hover:scale-105`}
        loading="lazy"
        sizes="(min-width:1024px) 25vw, (min-width:640px) 50vw, 100vw"
      />
        <div className="bg-[#ffffff]">
          <div className="px-4 py-3 text-black text-sm md:text-base font-medium">
            {title}
          </div>
        </div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 translate-y-full transition-transform duration-300 group-hover:translate-y-0">
        <div className=" bg-[#F39B6A]">
          <div className="px-4 py-3 text-white text-sm md:text-base font-medium">
            {title}
          </div>
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

  // Distribute items round-robin into 4 columns
  const cols = Array.from({ length: 4 }, () => [] as typeof items);
  items.forEach((it, idx) => cols[idx % 4].push(it));

  const patterns: Array<Array<'sm' | 'md' | 'lg'>> = [
    ['sm','md','lg'], // col 1
    ['md','lg','sm'], // col 2
    ['sm','lg','md'], // col 3
    ['md','sm','lg'], // col 4
  ];

  return (
    <section className="w-full bg-[#FCFAF4]">
      <div className="mx-auto max-w-7xl px-4 md:px-8 py-12 md:py-16">
        <div className="flex w-full items-center justify-between">
          <h2 className="text-3xl md:text-4xl font-semibold text-[#333333] mb-8 md:mb-10">
            Our Corporate <br className="hidden sm:block" /> Gifting Solutions
          </h2>
          <button className="inline-block bg-[#FEC8B2] text-black px-6 py-3 rounded-full font-medium hover:bg-[#fdb79c] transition">
            We have something for everyone
          </button>
        </div>

        {/* Four real columns: 1 / 2 / 4 responsive */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
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

