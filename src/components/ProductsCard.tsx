import Image from "next/image";

interface Product {
  tipo: string;
  descripcion: string;
  intensidad?: string;
}

interface ProductCardProps {
  product: Product;
}

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

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="w-80 rounded-lg shadow-lg overflow-hidden border border-gray-300 bg-gray-200 flex flex-col h-full">
      <div className="p-4 flex flex-col items-center flex-grow">
        <div className="w-24 h-24 relative mb-2">
          <Image
            src="/placeholder-image.png"
            alt="Producto"
            layout="fill"
            objectFit="cover"
            className="rounded-full"
          />
        </div>
        <h3 className="font-bold text-lg text-center">{product.tipo}</h3>
        <p className="text-sm text-gray-700 text-justify">
          {product.descripcion}
        </p>
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
