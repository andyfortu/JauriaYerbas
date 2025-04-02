import { IProductCardProps } from "@/helpers/interfaces";
import Image from "next/image";

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
    <div className="w-80 rounded-lg shadow-lg overflow-hidden border border-[#beb6a5] bg-[#ebe8df] flex flex-col h-full">
      {/* Contenido principal */}
      <div className="p-4 flex flex-col items-center flex-grow">
        <div className="w-24 h-24 relative mb-2">
          <Image
            src={product.imagen}
            alt={`Imagen ${product.tipo}`}
            width={96}
            height={96}
            className="rounded-full object-cover"
          />
        </div>
        <h3 className="font-bold text-lg text-center">{product.tipo}</h3>
        <p className="text-gray-700 text-justify">{product.descripcion}</p>
      </div>

      {/* Contenedor de precios siempre pegado abajo */}
      <div className="mt-auto w-full bg-[#fffcf3] p-4 text-center border-t border-[#beb6a5]">
        <h4 className="font-semibold text-lg mb-1">Precio</h4>
        <p className="text-gray-600">Ubicación detectada: {ciudad}</p>
        <p className="text-gray-600 mb-2">Código: {ciudadCode}</p>

        <div className="text-gray-700">
          {product.precios?.buenosAires.kilo ||
          product.precios?.mendoza.kilo ? (
            <p>
              <span className="font-semibold">1kg:</span>{" "}
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
              <span className="font-semibold">500g:</span>{" "}
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
              <span className="font-semibold">100g:</span>{" "}
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
              <span className="font-semibold">10g:</span>{" "}
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
