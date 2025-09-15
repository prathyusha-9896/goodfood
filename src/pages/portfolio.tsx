import FooterCta from "../components/footer/FooterCta";
import Header from "../components/Header";
import Headline from "../components/Headline";
import SuccessStories from "../components/successstories/SuccessStories";
import Growth from "../components/growth/Growth";

// ---- Move your data ABOVE the component and split by side ----
const contentData = [
  {
    logo: "/assets/portfoliologos/logo1.svg",
    title: "Jasprit Bumrah & Rohit Sharma",
    image: "/assets/portfolio/image1.png",
    description:
      "We've had the privilege of creating exquisite Diwali hampers for the Indian Cricket Team & members of the BCCI four years in a row for our incredible clients at Dream11.",
    isLeft: true,
  },
  {
    logo: "/assets/portfoliologos/logo2.svg",
    title: "Amazon Prime",
    image: "/assets/portfolio/image2.png",
    description:
      "For Amazon Prime Video’s high-profile media event, we curated sophisticated media baskets for attendees. These baskets included premium products, informational material, and event memorabilia, ensuring an elevated experience.",
    isLeft: false,
  },
  {
    logo: "/assets/portfoliologos/logo3.svg",
    title: "Inshorts",
    image: "/assets/portfolio/image3.png",
    description:
      "We designed elegant onboarding hampers for Inshorts for the last 2 years, including high-quality essentials, personalized items, and branded merchandise.",
    isLeft: true,
  },
  {
    logo: "/assets/portfoliologos/logo4.svg",
    title: "Xiaomi",
    image: "/assets/portfolio/image4.png",
    description:
      "Impactful PR packages for Xiaomi’s CIVI 14 launch including the product, complementary items, and personalised notes.",
    isLeft: false,
  },
  {
    logo: "/assets/portfoliologos/logo5.svg",
    title: "Optimum Nutrition",
    image: "/assets/portfolio/image5.png",
    description:
      "Premium PR kits for Optimum Nutrition’s Mango flavour tub launch to delight creators and press.",
    isLeft: true,
  },
  {
    logo: "/assets/portfoliologos/logo6.svg",
    title: "Redington",
    image: "/assets/portfolio/image6.png",
    description:
      "Curated corporate event baskets with personalized products and memorabilia to boost attendee engagement.",
    isLeft: false,
  },
  {
    logo: "/assets/portfoliologos/logo7.svg",
    title: "Redington",
    image: "/assets/portfolio/image7.png",
    description:
      "For Redington's corporate event, we curated sophisticated gift baskets for their attendees. These baskets included personalized products, informational materials, and event memorabilia, ensuring that the media representatives felt valued and well-informed. Our baskets enhanced the overall experience and engagement at the event.",
    isLeft: false,
  },
  {
    logo: "/assets/portfoliologos/logo8.svg",
    title: "Redington",
    image: "/assets/portfolio/image8.png",
    description:
      "For Redington's corporate event, we curated sophisticated gift baskets for their attendees. These baskets included personalized products, informational materials, and event memorabilia, ensuring that the media representatives felt valued and well-informed. Our baskets enhanced the overall experience and engagement at the event.",
    isLeft: false,
  },
];

// Build explicit left/right arrays from the flag
// const leftItems = contentData.filter((i) => i.isLeft);
// const rightItems = contentData.filter((i) => !i.isLeft);

function Portfolio() {
  return (
    <>
      <Headline />
      <Header />
      <SuccessStories hideRow1 />
      {/* Pass data to the component */}
      {/* <AlternatingLeftRightCards
        items={contentData}
        leftItemsOverride={leftItems}
        rightItemsOverride={rightItems}
        vhPerStep={120}
        className="bg-[#02050E]"
        cardClassName="bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80"
      /> */}
      <Growth />
      <FooterCta
        scrollImages={[
          "/assets/footerimages/image1.png",
          "/assets/footerimages/image2.png",
          "/assets/footerimages/image3.png",
          "/assets/footerimages/image4.png",
          "/assets/footerimages/image5.png",
          "/assets/footerimages/image6.png",
          "/assets/footerimages/image7.png",
          "/assets/footerimages/image8.png",
          "/assets/footerimages/image9.png",
          "/assets/footerimages/image10.png",
        ]}
        scrollSpeedSec={26}
        onPrimary={() => console.log("Book a Meeting")}
        onSecondary={() => console.log("Send a Query")}
      />
    </>
  );
}

export default Portfolio;
