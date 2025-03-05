"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";

const images = [
  "public/assets/SwiperImg1.jpg",
  "public/assets/SwiperImg2.jpeg",
  "public/assets/SwiperImg3.jpg",
];

const Carousel = () => {
  return (
    <div className="w-screen h-screen overflow-hidden">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={0} // No queremos espacio entre slides
        slidesPerView={1} // Solo 1 imagen por vista
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        className="w-full h-full"
      >
        {images.map((src, index) => (
          <SwiperSlide key={index} className="flex justify-center items-center">
            <Image
              src={src}
              alt={`Slide ${index + 1}`}
              width={50}
              height={50}
              className="w-full h-full object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousel;
