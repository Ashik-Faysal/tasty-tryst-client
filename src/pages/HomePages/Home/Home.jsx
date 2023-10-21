import BannerSection from "../BannerSection";
import CallUsSection from "../CallUsSection";
import OurMenuSection from "../OurMenuSection";
import PopularMenu from "../PopularMenu";
import RecommendsSection from "../RecommendsSection";
import SwiperSection from "../SwiperSection";
import TitleSection from "../TitleSection";
import TestimonialsSection from "../TestimonialsSection";
import { Helmet } from "react-helmet-async";


const Home = () => {
  return (
    <>
      <Helmet>
        <title>Tasty Tryst | Home</title>
      </Helmet>

      <BannerSection />
      <SwiperSection />
      <TitleSection />
      <PopularMenu />
      <CallUsSection />
      <RecommendsSection />
      <OurMenuSection />
      <TestimonialsSection />
    </>
  );
};

export default Home;
