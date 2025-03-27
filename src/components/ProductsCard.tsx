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

const ProductCard: React.FC<IProductCardProps> = ({ product, ciudad }) => {
  return (
    <div className="w-80 rounded-lg shadow-lg overflow-hidden border border-gray-300 bg-gray-200 flex flex-col h-full">
      <div className="p-4 flex flex-col items-center flex-grow">
        <div className="w-24 h-24 relative mb-2">
          <Image
            src={product.imagen}
            alt={`Imagen ${product.tipo}`}
            width={96} // Ajusta el tamaño según lo necesites
            height={96} // Ajusta el tamaño según lo necesites
            className="rounded-full object-cover"
          />
        </div>
        <h3 className="font-bold text-lg text-center">{product.tipo}</h3>
        <p className="text-sm text-gray-700 text-justify">
          {product.descripcion}
        </p>

        <div>
          <h4>Precio según tu ubicación</h4>
          <p>Ubicación detectada: {ciudad}</p>
          <p>
            Precio kilo:{" "}
            {ciudad === "mendoza"
              ? product.precios?.mendoza.kilo
              : product.precios?.buenosAires.kilo}
          </p>
          <p>
            Precio medio kilo:{" "}
            {ciudad === "mendoza"
              ? product.precios?.mendoza.medio
              : product.precios?.buenosAires.medio}
          </p>
        </div>
      </div>
      <div
        className={
          product.intensidad
            ? `h-4 ${getIntensityColor(product.intensidad)}`
            : "h-4 bg-gray-200"
        }
      />
    </div>
  );
};

export default ProductCard;
