import { IProductCardProps } from "@/helpers/interfaces";
import Image from "next/image";
// import { BiFullscreen } from "react-icons/bi";

const getIntensityColor = (intensidad?: string) => {
  switch (intensidad) {
    case "Media":
      return "bg-yellow-600";
    case "Alta":
      return "bg-red-700";
    case "Baja":
      return "bg-green-800";
  }
};

const ProductCard: React.FC<IProductCardProps> = ({
  product,
  ciudad,
  ciudadCode,
}) => {
  return (
    <div className="w-full rounded-lg shadow-lg overflow-hidden border border-[#beb6a5] bg-[#ebe8df] flex flex-col h-full">
      {/* Contenido principal */}
      <div className="p-4 flex flex-col items-center flex-grow">
        <div className="w-full h-52 relative mb-4">
          <Image
            src={product.imagen}
            alt={`Imagen ${product.tipo}`}
            // width={1200}
            // height={1200}
            // className="rounded-full object-cover"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
        <h3 className="font-bold text-lg text-center">{product.tipo}</h3>
        <p className="text-gray-700 text-justify">{product.descripcion}</p>
      </div>

      {/* Contenedor de precios siempre pegado abajo */}
      <div className="mt-auto w-full bg-[#fffcf3] p-4 text-center border-t border-[#beb6a5]">
      
        <p className="text-gray-600 text-sm mb-1">Ubicación detectada: {ciudad}</p>
        {/* <p className="text-gray-600 mb-2">Código: {ciudadCode}</p> */}
        <h4 className="font-semibold text-lg mb-1">Precio</h4>
        <div className="text-gray-700">
          {product.precios?.buenosAires.kilo ||
          product.precios?.mendoza.kilo ? (
            <p>
              <span className="font-semibold">&nbsp;&nbsp;1 kg.:</span>{" "}
              {ciudadCode === "M"
                ? product.precios?.mendoza.kilo
                : ciudadCode === "B" || ciudadCode === "C"
                ? product.precios?.buenosAires.kilo
                : "Consultar"}
            </p>
          ) : null}

          {product.precios?.buenosAires.medio ||
          product.precios?.mendoza.medio ? (
            <p>
              <span className="font-semibold">500 gr.:</span>{" "}
              {ciudadCode === "M"
                ? product.precios?.mendoza.medio
                : ciudadCode === "B" || ciudadCode === "C"
                ? product.precios?.buenosAires.medio
                : "Consultar"}
            </p>
          ) : null}

          {product.precios?.buenosAires.cien ||
          product.precios?.mendoza.cien ? (
            <p>
              <span className="font-semibold">100 gr:</span>{" "}
              {ciudadCode === "M"
                ? product.precios?.mendoza.cien
                : ciudadCode === "B" || ciudadCode === "C"
                ? product.precios?.buenosAires.cien
                : "Consultar"}
            </p>
          ) : null}

          {product.precios?.buenosAires.diez ||
          product.precios?.mendoza.diez ? (
            <p>
              <span className="font-semibold">10 gr:</span>{" "}
              {ciudadCode === "M"
                ? product.precios?.mendoza.diez
                : ciudadCode === "B" || ciudadCode === "C"
                ? product.precios?.buenosAires.diez
                : "Consultar"}
            </p>
          ) : null}
        </div>
      </div>

      {/* Barra de intensidad */}
      <div
        className={
          product.intensidad
            ? `h-4 ${getIntensityColor(product.intensidad)}`
            : "h-4 bg-[#fffcf3]"
        }
      />
    </div>
  );
};

export default ProductCard;
