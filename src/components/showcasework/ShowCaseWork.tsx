import { useShowcaseWork } from "./useShowcaseWork";

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full px-3 py-1 text-xs font-medium
                     bg-[#E9DEC9] text-[#3B2F23] shadow-sm">
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

      <h3 className="mt-4 text-xl font-semibold text-[#333333]">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-[#333333]">{description}</p>

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

  return (
    <section className="w-full bg-[#FCFAF4]">
      <div className="mx-auto max-w-7xl px-4 md:px-8 py-12 md:py-16">
        {/* Header row */}
        <div className="mb-8 md:mb-12 flex items-start justify-between gap-6">
          <h2 className="text-3xl md:text-5xl font-semibold leading-tight text-[#333333] max-w-3xl">
            From 50 hampers to 5,000, <br className="hidden md:block" />
            we deliver with precision.
          </h2>

          <a
            href="#"
            className="shrink-0 rounded-full bg-[#FEC8B2] px-5 py-2.5 text-sm font-medium text-[#333333] "
          >
            See More of our work
          </a>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 ">
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
    </section>
  );
}
