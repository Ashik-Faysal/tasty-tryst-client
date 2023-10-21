import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

// for this page I use "react-responsive-carousel"

const BannerSection = () => {
  return (
    <div className="w-full">
      <Carousel infiniteLoop autoPlay interval={3000}>
        <div className="w-full">
          <img
            src="https://i.ibb.co/HDHWqL9/pasta-spaghetti-with-shrimps-sauce.jpg"
            alt="Image 1"
            className="w-full h-auto"
          />
        </div>
        <div className="w-full">
          <img
            src="https://i.ibb.co/zQBJwQ5/food-mix-salad-noodles-grillea-chicken-garlic-greena-top-view.jpg"
            alt="Image 2"
            className="w-full h-auto"
          />
        </div>
        <div className="w-full">
          <img
            src="https://i.ibb.co/BwM8zHp/top-view-delicious-noodles-concept.jpg"
            alt="Image 3"
            className="w-full h-auto"
          />
        </div>
        <div className="w-full">
          <img
            src="https://i.ibb.co/m00R31Q/chicken-skewers-with-slices-sweet-peppers-dill.jpg"
            alt="Image 4"
            className="w-full h-auto"
          />
        </div>
        <div className="w-full">
          <img
            src="https://i.ibb.co/dDqmD9c/top-view-table-full-delicious-food-composition.jpg"
            alt="Image 5"
            className="w-full h-auto"
          />
        </div>
        <div className="w-full">
          <img
            src="https://i.ibb.co/Pcqb6Cf/delicious-fried-chicken-plate.jpg"
            alt="Image 6"
            className="w-full h-auto"
          />
        </div>
      </Carousel>
    </div>
  );
};

export default BannerSection;
