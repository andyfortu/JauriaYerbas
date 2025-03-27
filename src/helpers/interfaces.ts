import { StaticImageData } from "next/image";

export interface IProduct {
  imagen: StaticImageData;
  tipo: string;
  descripcion: string;
  intensidad?: string;
  precios?: {
    mendoza: {
      kilo: string;
      medio: string;
    };
    buenosAires: {
      kilo: string;
      medio: string;
    };
  };
}

export interface IProductCardProps {
  product: IProduct;
  ciudad: string;
}
