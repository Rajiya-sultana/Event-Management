
import React, { useEffect, useState } from "react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import heroData from "../assets/heroData";

const Hero = () => {
  const [slides, setSlides] = useState([]);

  useEffect(() => {
    setSlides(heroData);
  }, []);

  return (
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      modules={[Autoplay, Pagination]}
      className="mySwiper"
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index}>
          <div className="relative w-full h-[650px] bg-fixed lg:px-24 flex justify-center items-center">
            <div
              className="relative h-full w-[100%] sm:w-[80%] bg-no-repeat bg-center bg-cover"
              style={{
                backgroundImage: `url(${slide.bgImg})`,
              }}
            >
              <div className="absolute inset-0 bg-customColor opacity-50 z-10"></div>
              <div>
                <h1
                  className="absolute bottom-40 sm:bottom-20 text-center leading-[50px] md:leading-[150px] text-white text-4xl md:text-8xl font-bold z-20"
                  dangerouslySetInnerHTML={{ __html: slide.h1Text }}
                ></h1>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Hero;
