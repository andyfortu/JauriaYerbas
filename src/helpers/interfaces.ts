import { StaticImageData } from "next/image";

export interface IProduct {
  imagen: StaticImageData;
  tipo: string;
  descripcion: string;
  intensidad?: string;
  precios?: {
    mendoza: {
      kilo?: string;
      medio?: string;
      cien?: string;
      diez?: string;
    };
    buenosAires: {
      kilo?: string;
      medio?: string;
      cien?: string;
      diez?: string;
    };
  };
}

export interface IProductCardProps {
  product: IProduct;
  ciudad: string;
  ciudadCode: string;
}
