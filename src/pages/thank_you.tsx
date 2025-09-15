import FooterCta from "../components/footer/FooterCta";
import Header from "../components/Header";
import Headline from "../components/Headline";
import ThankYou from "../components/ThankYou";

function Home() {
  return (
    <>
    <Headline/>
    <Header/>
    <ThankYou />
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
