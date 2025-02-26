"use client";

import Image from "next/image";
import Logo from "../../public/assets/Logo.png";
import LogoTexto from "../../public/assets/LogoTexto.png";
import Link from "next/link";

const Navbar: React.FC = () => {
  return (
    <div className="flex items-center justify-between w-full px-8">
      <div className="flex items-center">
        <Image src={Logo} alt="Logo" width={100} height={100} />

        <Link href={"/"}>
          <Image src={LogoTexto} alt="Logo Texto" width={200} height={200} />
        </Link>
      </div>
      <div className="flex gap-14 text-xl">
        <p>
          <Link href={"/nosotras"}>Sobre nosotras</Link>
        </p>
        <p>
          <Link href={"/productos"}>Productos</Link>
        </p>
        <p>
          <Link href={"/puntosdeventa"}>Puntos de venta</Link>
        </p>
        <p>
          <Link href={"/medios"}>Medios</Link>
        </p>
        <p>
          <Link href={"/significado"}>Significado del mate</Link>
        </p>
        <p>
          <Link href={"/contacto"}>Contacto</Link>
        </p>
      </div>
    </div>
  );
};

export default Navbar;
