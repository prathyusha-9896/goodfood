// src/components/corporate/useCorporate.ts

export function useCorporate() {
  const headline = "Corporate Gifting That Builds Stronger Relationships";
  const buttonText = "Get a Corporate Quote";
  const tagline = "Trusted by India's Top Companies";

  const logos = [
    { src: "/assets/logos/makemytrip.svg", alt: "MakeMyTrip" },
    { src: "/assets/logos/prime.svg", alt: "Amazon Prime" },
    { src: "/assets/portfoliologos/logo3.svg", alt: "CoinDcx" },
    { src: "/assets/logos/dream.svg", alt: "Dream11" },
  ];

  const gifts = [
    "/assets/carouselimages/image1.png",
    "/assets/carouselimages/image2.png",
    "/assets/carouselimages/image3.png",
    "/assets/carouselimages/image4.png",
    "/assets/carouselimages/image5.png",
    "/assets/carouselimages/image6.png",
    "/assets/carouselimages/image7.png",
    "/assets/carouselimages/image8.png",
    "/assets/carouselimages/image9.png",
    "/assets/carouselimages/image10.png",
  ];

  return { headline, buttonText, tagline, logos, gifts };
}
