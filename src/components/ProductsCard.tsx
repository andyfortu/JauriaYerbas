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
      return "bg-yellow-500";
    case "Alta":
      return "bg-red-500";
    default:
      return "bg-green-600";
  }
};

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="w-80 rounded-lg shadow-lg overflow-hidden border border-gray-300 bg-gray-200">
      <div className="p-4 flex flex-col items-center">
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
        <p className="text-sm text-gray-700 text-center">{product.descripcion}</p>
      </div>
      <div className={`h-4 ${getIntensityColor(product.intensidad)}`} />
    </div>
  );
};

export default ProductCard;
