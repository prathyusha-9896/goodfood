import * as React from "react";

/* --------------------------------------------------------------------------
   Simple Vertical Image Stack
   - Renders images one after another vertically.
   - No sticky, no overlay, just a clean vertical list.
----------------------------------------------------------------------------*/

type ImageStackProps = {
  images: Array<{ src: string; alt?: string }>;
  radiusClass?: string;
  withShadow?: boolean;
  backgroundClass?: string;
};

function ImageStack({
  images,
  radiusClass = "rounded-2xl",
  withShadow = false,
  backgroundClass = "bg-white",
}: ImageStackProps) {
  return (
    <section className={`relative w-full ${backgroundClass}`}>
      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 space-y-6">
        {images.map((img, idx) => (
          <div
            key={idx}
            className={[
              "w-full overflow-hidden",
              radiusClass,
              withShadow ? "shadow-xl shadow-black/10" : "",
            ].join(" ")}
          >
            <img
              src={img.src}
              alt={img.alt ?? `Card ${idx + 1}`}
              className="block w-full h-auto select-none"
              draggable={false}
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export default function ImageStackDemo() {
  const images = [
    { src: "/assets/cards/card1.svg", alt: "Card 1" },
    { src: "/assets/cards/card2.svg", alt: "Card 2" },
    { src: "/assets/cards/card3.svg", alt: "Card 3" },
    { src: "/assets/cards/card4.svg", alt: "Card 4" },
  ];

  return (
    <div className="min-h-screen w-full bg-neutral-50 py-10">
      <header className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 mb-8">
        <h1 className="text-2xl font-medium tracking-tight text-[#333333] text-center" style={{ fontFamily: "Albra, serif" }}>Why Corporates Choose <br />The Good Road</h1>
      </header>

      <ImageStack images={images} radiusClass="rounded-2xl" withShadow backgroundClass="bg-neutral-50" />
    </div>
  );
}
