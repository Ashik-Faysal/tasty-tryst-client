import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import SectionTitle from "../Shared/SectionTitle";

const SwiperSection = () => {
  return (
    <div className="my-8"><SectionTitle heading="Order Online" subHeading=" From 11.00Am-10Pm"/>
      <Swiper
        spaceBetween={20}
        slidesPerView={4}
        allowSlideNext
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        // onSwiper={(swiper) =>
        //   console.log(swiper)
        // }
        onSlideChange={() => console.log("slide change")}
      >
        <SwiperSlide>
          <img
            src="https://i.ibb.co/BZhtP9K/pexels-taryn-elliott-4099237.jpg"
            alt="food-image"
          />
          <h3 className="uppercase text-3xl -mt-24 text-stone-200 shadow-md text-center">
            strawberry
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://i.ibb.co/NZzZZWW/pexels-kristina-paukshtite-1998920.jpg"
            alt="food-image"
          />
          <h3 className="uppercase text-3xl -mt-24 text-stone-200 shadow-md text-center">
            Fish
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://i.ibb.co/hD5cgqn/pexels-steve-3789885.jpg"
            alt="food-image"
          />{" "}
          <h3 className="uppercase text-3xl -mt-24 text-stone-200 shadow-md text-center">
            Egg
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://i.ibb.co/CwKCyhd/pexels-chokniti-khongchum-2280545.jpg"
            alt="food-image"
          />
          <h3 className="uppercase text-3xl -mt-24 text-stone-200 shadow-md text-center">
            Bargar
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://i.ibb.co/P1hgFgr/pexels-tijana-drndarski-3338681.jpg"
            alt="food-image"
          />
          <h3 className="uppercase text-3xl -mt-24 text-stone-200 shadow-md text-center">
            Chocolate
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://i.ibb.co/m0NKKNP/pexels-lumn-604969.jpg"
            alt="food-image"
          />{" "}
          <h3 className="uppercase text-3xl -mt-24 text-stone-200 shadow-md text-center">
            Pasta
          </h3>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default SwiperSection;
