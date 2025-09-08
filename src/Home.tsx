import ChooseGift from "./components/choosegift/ChooseGift";
import Corporate from "./components/corporate/corporate";
import FooterCta from "./components/footer/FooterCta";
import GiftingMatters from "./components/giftingmatters/GiftingMatters";
import HowItWorks from "./components/howitworks/HowItWorks";
import PartnerBanner from "./components/PartnerBanner";
import ShowcaseWork from "./components/showcasework/ShowCaseWork";
import CorporateSolutions from "./components/solutions/CorporateSolutions";
import Testimonials from "./components/testimonials/testimonials";
import TrustedBrands from "./components/topbrands/TrustedBrands";

function Home() {
  return (
    <>
    <Corporate />
    <PartnerBanner />
    <CorporateSolutions />
    <TrustedBrands />
    <ChooseGift />
    <Testimonials />
    <GiftingMatters image="/path/to/image.jpg" />
    <HowItWorks image="/path/to/howitworks-image.jpg" />
    <ShowcaseWork />
    <FooterCta
      scrollImages={[
        "/src/assets/footerimages/image1.png",
        "/src/assets/footerimages/image2.png",
        "/src/assets/footerimages/image3.png",
        "/src/assets/footerimages/image4.png",
        "/src/assets/footerimages/image5.png",
        "/src/assets/footerimages/image6.png",
        "/src/assets/footerimages/image7.png",
        "/src/assets/footerimages/image8.png",
        "/src/assets/footerimages/image9.png",
        "/src/assets/footerimages/image10.png",
      ]}
      scrollSpeedSec={26} // optional
      onPrimary={() => console.log("Book a Meeting")}
      onSecondary={() => console.log("Send a Query")}
    />
    </>
  );
}

export default Home;
