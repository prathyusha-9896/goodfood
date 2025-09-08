// File: useChooseGift.ts
import { useMemo } from "react";

export type GiftCard = {
  id: string;
  title: string;
  bg: string; // background image url for the card body (Images 1 & 2)
  tags: string[]; // chips that should horizontally auto-scroll on hover/open
  logos?: { src: string; alt: string }[]; // optional brand logos row (will also marquee)
};

export function useChooseGift() {
  const cards: GiftCard[] = useMemo(
    () => [
      {
        id: "trusted",
        title: "Trusted by Industry Leaders",
        bg: "/src/assets/giftcards/cape_1.png",
        tags: [],
        logos: [
          { src: "/src/assets/hyundai.png", alt: "Hyundai" },
          { src: "/src/assets/inshorts.png", alt: "inshorts" },
          { src: "/src/assets/dream.png", alt: "Dream11" },
        ],
      },
      {
        id: "e2e",
        title: "End-to-End Solutions",
        bg: "/src/assets/giftcards/cape_2.png", 
        tags: [
          "Design",
          "Customisation",
          "Packaging",
        ],
      },
      {
        id: "premium",
        title: "Premium & Sustainable",
        bg: "/src/assets/giftcards/cape_1.png",
        tags: [
          "Artisanal",
          "Handcrafted",
          "Eco-Conscious Products",
        ],
      },
      {
        id: "support",
        title: "High-Touch Support",
        bg: "/src/assets/giftcards/cape_2.png",
        tags: [
          "Dedicated Account Managers",
          "Fast Response",
        ],
      },
    ],
    []
  );

  return { cards };
}
