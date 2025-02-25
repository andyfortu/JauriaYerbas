"use client";

import Image from "next/image";
import Logo from "../../public/assets/Logo.png";
import LogoTexto from "../../public/assets/LogoTexto.png";

const Navbar: React.FC = () => {
  return (
    <div className="flex items-center justify-between w-full px-8">
      <div className="flex items-center">
        <Image src={Logo} alt="Logo" width={100} height={100} />
        <Image src={LogoTexto} alt="Logo Texto" width={200} height={200} />
      </div>
      <div className="flex gap-14 text-lg">
        <p>Sobre nosotras</p>
        <p>Productos</p>
        <p>Puntos de venta</p>
        <p>Medios</p>
        <p>Significado del mate</p>
        <p>Contacto</p>
      </div>
    </div>
  );
};

export default Navbar;
