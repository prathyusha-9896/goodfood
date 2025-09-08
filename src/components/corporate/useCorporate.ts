// src/components/corporate/useCorporate.ts

export function useCorporate() {
  const headline = "Corporate Gifting That Builds Stronger Relationships";
  const buttonText = "Get a Corporate Quote";
  const tagline = "Trusted by India's Top Companies";

  const logos = [
    { src: "/src/assets/logos/google.png", alt: "Google" },
    { src: "/src/assets/logos/prime.png", alt: "Amazon Prime" },
    { src: "/src/assets/logos/forbes.png", alt: "Forbes" },
    { src: "/src/assets/logos/dream11.png", alt: "Dream11" },
  ];

  const gifts = [
    "/src/assets/carouselimages/image1.png",
    "/src/assets/carouselimages/image2.png",
    "/src/assets/carouselimages/image3.png",
    "/src/assets/carouselimages/image4.png",
    "/src/assets/carouselimages/image5.png",
    "/src/assets/carouselimages/image6.png",
    "/src/assets/carouselimages/image7.png",
    "/src/assets/carouselimages/image8.png",
    "/src/assets/carouselimages/image9.png",
    "/src/assets/carouselimages/image10.png",
  ];

  return { headline, buttonText, tagline, logos, gifts };
}
