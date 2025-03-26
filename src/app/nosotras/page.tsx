import Image from "next/image";
import Card from "@/components/NosotrasCard";
import AgusPic from "../../../public/assets/AgusPic.jpg";
import AntoPic from "../../../public/assets/AntoPic.jpeg";
import HuellaFondo from "../../../public/assets/HuellaFondo.jpeg";

const Nosotras: React.FC = () => {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center bg-[#f5f1e6] py-6 px-6">
      {/* Imagen de fondo */}
      <Image
        src={HuellaFondo}
        alt="Huella de fondo"
        layout="fill"
        objectFit="cover"
        className="absolute inset-0 opacity-40"
      />

      {/* Contenido principal */}
      <div className="relative z-10 text-center mb-10">
        <h1 className="text-4xl font-bold text-[#4a3b2f]">Nosotras</h1>
        <p className="text-lg text-[#4a3b2f] mt-2">
          Conocé la historia detrás de Jauría
        </p>
      </div>

      <div className="relative z-10 flex flex-col md:flex-row items-center justify-center gap-10">
        <Card name="Agus" src={AgusPic} />
        <Card name="Anto" src={AntoPic} />
      </div>

      {/* Texto con margen superior para no tapar la huella */}
      <div className="relative z-10 max-w-3xl mx-auto mt-12 p-6 bg-white shadow-md rounded-lg">
        <p className="text-[#4a3b2f] text-lg leading-relaxed">
          Somos dos amigas, porteñas <span className="italic">-exiliadas-</span>{" "}
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
