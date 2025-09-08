// src/components/corporate/useCorporateSolutions.ts
export type SolutionItem = {
  title: string;
  image: string;
  href?: string;
};

export function useCorporateSolutions(): SolutionItem[] {
  return [
    { title: "New Employee Onboarding Kits", image: "/assets/cardimages/image1.png" },
    { title: "Corporate Event Favours", image: "/assets/cardimages/image2.png" },
    { title: "Exit / Farewell Gift Hampers", image: "/assets/cardimages/image3.png" },
    { title: "Women's Day Gift Hampers", image: "/assets/cardimages/image4.png" },
    { title: "Work Anniversary Hampers", image: "/assets/cardimages/image5.png" },
    { title: "PR Packages & Media Kits", image: "/assets/cardimages/image6.png" },
    { title: "Diwali Corporate Gift Hampers", image: "/assets/cardimages/image7.png" },
    { title: "Sustainable Corporate Gifting", image: "/assets/cardimages/image8.png" },
    { title: "Client Appreciation Gifts", image: "/assets/cardimages/image9.png" },
    { title: "Maternity & New Parents Gifts", image: "/assets/cardimages/image10.png" },
    { title: "All Corporate Gift Hampers", image: "/assets/cardimages/image12.png" },
    { title: "All Corporate Gift Hampers", image: "/assets/cardimages/image13.png" },
  ];
}
