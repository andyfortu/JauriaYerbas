"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
//import HuellaFondo from "../../../public/assets/HuellaFondo.jpeg";
import NosFondo from "../../../public/assets/NosFondo.jpeg";
import Nos1 from "../../../public/assets/Nos1.jpg";
import Nos2 from "../../../public/assets/Nos2.jpg";
import Nos3 from "../../../public/assets/Nos3.jpg";

const nosImages = [Nos1, Nos2, Nos3];

const Nosotras: React.FC = () => {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center bg-[#f5f1e6] py-6 px-6">
      {/* Imagen de fondo */}
      <Image
        src={NosFondo}
        alt="Huella de fondo"
        layout="fill"
        objectFit="cover"
        className="absolute inset-0 opacity-40"
      />

      {/* Contenido principal */}
      <div className="relative z-10 text-center mb-6">
        <h1 className="text-4xl font-bold text-[#4a3b2f]">Nosotras</h1>
        <p className="text-lg text-[#4a3b2f] mt-2">
          Conocé la historia detrás de Jauría
        </p>
      </div>

      {/* Swiper */}
      <div className="relative z-10 w-64 h-64">
        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={10}
          slidesPerView={1}
          navigation
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop
          className="w-full h-full"
        >
          {nosImages.map((image, index) => (
            <SwiperSlide
              key={index}
              className="flex justify-center items-center"
            >
              <Image
                src={image}
                alt={`Imagen ${index + 1}`}
                width={256}
                height={256}
                className="rounded-lg object-cover"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <p className="relative z-10 text-lg text-[#4a3b2f] mt-2">Agus y Anto</p>

      {/* Texto con margen superior para no tapar la huella */}
      <div className="text-justify relative z-10 max-w-3xl mx-auto mt-6 p-6 bg-white shadow-md rounded-lg">
        <p className="text-[#4a3b2f] text-lg leading-relaxed">
          Somos dos amigas, porteñas <span className="italic">exiliadas</span>{" "}
          en San Rafael, Mendoza. Unidas por muchas cosas, entre ellas el amor
          por los animales, de allí viene nuestro nombre <strong>JAURÍA</strong>
          .
        </p>
        <p className="text-[#4a3b2f] text-lg leading-relaxed mt-4">
          Pero también nos unen las ganas de hacer algo que deje huella, nos
          represente y sobre todo, que aporte valor a aquello que creemos y
          sentimos.
        </p>
        <p className="text-[#4a3b2f] text-lg leading-relaxed mt-4">
          Todo el proceso de envasado de nuestros productos es{" "}
          <strong>manual y artesanal</strong>. Los insumos que utilizamos son
          reciclados y/o reciclables. Apostamos a ser{" "}
          <strong>eco-friendly</strong> y a generar conciencia sobre la
          importancia de cuidar el medio ambiente que nos rodea.
        </p>
      </div>
    </div>
  );
};

export default Nosotras;
