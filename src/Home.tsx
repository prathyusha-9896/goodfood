import ChooseGift from "./components/choosegift/ChooseGift";
import Corporate from "./components/corporate/corporate";
import FooterCta from "./components/footer/FooterCta";
import GiftingMatters from "./components/giftingmatters/GiftingMatters";
import Header from "./components/Header";
import Headline from "./components/Headline";
import HowItWorks from "./components/howitworks/HowItWorks";
import PartnerBanner from "./components/PartnerBanner";
import ShowcaseWork from "./components/showcasework/ShowCaseWork";
import CorporateSolutions from "./components/solutions/CorporateSolutions";
import StickyStackDemo from "./components/StickyCard";
import Testimonials from "./components/testimonials/testimonials";
import TrustedBrands from "./components/topbrands/TrustedBrands";

function Home() {
  return (
    <>
    <Headline/>
    <Header/>
    <Corporate />
    <PartnerBanner />
    <CorporateSolutions />
    <TrustedBrands />
    <div className="block md:hidden">
        <StickyStackDemo />
    </div>
      {/* Mobile: simple grid */}
      <div className="hidden md:block">
        <ChooseGift />
      </div>
    <Testimonials />
    <GiftingMatters image="/path/to/image.jpg" />
    <HowItWorks image="/path/to/howitworks-image.jpg" />
    <ShowcaseWork />
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
      scrollSpeedSec={26} // optional
      onPrimary={() => console.log("Book a Meeting")}
      onSecondary={() => console.log("Send a Query")}
    />
    </>
  );
}

export default Home;
