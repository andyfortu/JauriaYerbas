"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";

const images = [
  "/assets/SwiperImg1.jpg",
  "/assets/SwiperImg2.jpeg",
  "/assets/SwiperImg3.jpg",
];

const Carousel = () => {
  return (
    <div className="w-screen h-screen overflow-hidden relative">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        className="w-full h-full"
      >
        {images.map((src, index) => (
          <SwiperSlide key={index} className="relative w-full h-full">
            <Image
              src={src}
              alt={`Slide ${index + 1}`}
              fill
              className="object-contain"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousel;
