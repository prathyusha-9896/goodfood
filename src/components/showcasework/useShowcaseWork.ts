// Data hook for the “From 50 hampers…” section

export type ShowcaseItem = {
  title: string;
  image: string;          // path in /public
  description: string;
  tags: string[];
  href?: string;          // optional link for the card
};

export function useShowcaseWork(): ShowcaseItem[] {
  return [
    {
      title: "Dream 11",
      image: "/assets/hampers/image1.png",
      description:
        "Creating exquisite Diwali hampers for the Indian Cricket Team & members of the BCCI four years in a row for our incredible clients at Dream11.",
      tags: ["Corporate", "Eco-Friendly", "Customized"],
      href: "#",
    },
    {
      title: "Aditya Birla Group",
      image: "/assets/hampers/image2.png",
      description:
        "Our meticulously curated hampers are designed to express gratitude and strengthen business relationships.",
      tags: ["Diwali", "Customized"],
      href: "#",
    },
    {
      title: "Make My Trip",
      image: "/assets/hampers/image3.png",
      description:
        "To celebrate Women’s Day, we curated thoughtful gift hampers that honoured and appreciated the women at Make My Trip.",
      tags: ["Modern", "Curated Collection"],
      href: "#",
    },
    {
      title: "The Souled Store",
      image: "/assets/hampers/image4.png",
      description:
        "Growing demand for eco-friendly gifting options, we developed sustainable Diwali gift hampers for our clients at The Souled Store.",
      tags: ["Luxury", "Client Appreciation"],
      href: "#",
    },
  ];
}
