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
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      tags: ["Corporate", "Eco-Friendly", "Customized"],
      href: "#",
    },
    {
      title: "Aditya Birla Group",
      image: "/assets/hampers/image2.png",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      tags: ["Diwali", "Customized"],
      href: "#",
    },
    {
      title: "Make My Trip",
      image: "/assets/hampers/image3.png",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      tags: ["Modern", "Curated Collection"],
      href: "#",
    },
    {
      title: "The Souled Store",
      image: "/assets/hampers/image4.png",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      tags: ["Luxury", "Client Appreciation"],
      href: "#",
    },
  ];
}
