import React, { useEffect, useState, useRef } from "react";
import Swiper from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import SectionTitle from "../Shared/SectionTitle";
import { Rating } from "@smastrom/react-rating";
import { SwiperSlide } from "swiper/react";
import { FaQuoteLeft } from "react-icons/fa";

import "@smastrom/react-rating/style.css";

const Testimonials = () => {
  const [reviews, setReviews] = useState([]);
  const swiperRef = useRef(null);

  useEffect(() => {
    // Replace the URL with the correct path to your reviews JSON file
    fetch("http://localhost:5000/reviews")
      .then((res) => res.json())
      .then((data) => {
        setReviews(data);

        // Initialize the Swiper after reviews data is loaded
        if (swiperRef.current) {
          swiperRef.current.destroy(true, true);
        }
        swiperRef.current = new Swiper(".mySwiper", {
          // Swiper options
          navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          },
          pagination: {
            el: ".swiper-pagination",
          },
        });
      });
  }, []);

  const goToSlide = (slideIndex) => {
    swiperRef.current.slideTo(slideIndex);
  };

  const slidePrev = () => {
    swiperRef.current.slidePrev();
  };

  const slideNext = () => {
    swiperRef.current.slideNext();
  };

  return (
    <section className="my-20 text-center">
      <SectionTitle subHeading="What Our Clients Say" heading="Testimonials" />

      <div className="swiper-container mySwiper w-3/4 mx-auto">
        <div className="swiper-wrapper">
          {reviews.map((review) => (
            <SwiperSlide key={review._id}>
              <div className="flex flex-col items-center mx-24 my-16">
                <FaQuoteLeft className="mb-12" size={100} />{" "}
                <Rating
                  style={{ maxWidth: 180 }}
                  value={review.rating}
                  readOnly
                />
                <p className="py-8">{review.details}</p>
                <h3 className="text-2xl text-orange-400">{review.name}</h3>
              </div>
            </SwiperSlide>
          ))}
        </div>
        <div className="swiper-pagination"></div>
        <div className="swiper-button-next"></div>
        <div className="swiper-button-prev"></div>
      </div>

      <div className="text-center mt-4">
        <button
          onClick={slidePrev}
          className="bg-gray-400 px-2 py-1 m-1 rounded-lg"
        >
          Previous
        </button>
        <button
          onClick={slideNext}
          className="bg-gray-400 hover-bg-gray-800 px-2 py-1 m-1 rounded-lg"
        >
          Next
        </button>
      </div>
    </section>
  );
};

export default Testimonials;
