import BannerSection from "../HomePages/BannerSection";
import CallUsSection from "../HomePages/CallUsSection";
import OurMenuSection from "../HomePages/OurMenuSection";
import PopularMenu from "../HomePages/PopularMenu";
import RecommendsSection from "../HomePages/RecommendsSection";
import SwiperSection from "../HomePages/SwiperSection";
import TitleSection from "../HomePages/TitleSection";

const Home = () => {
  return (
    <>
      <BannerSection />
      <SwiperSection />
      <TitleSection />
      <PopularMenu />
      <CallUsSection />
      <RecommendsSection />
      <OurMenuSection/>
    </>
  );
};

export default Home;
