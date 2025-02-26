"use client";

import Image from "next/image";
import Logo from "../../public/assets/Logo.png";
import LogoTexto from "../../public/assets/LogoTexto.png";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LuFlower } from "react-icons/lu";

const Navbar: React.FC = () => {
  const pathname = usePathname();

  return (
    <div className="flex items-center justify-between w-full px-8">
      <div className="flex items-center">
        <Image src={Logo} alt="Logo" width={100} height={100} />

        <Link href={"/"}>
          <Image src={LogoTexto} alt="Logo Texto" width={200} height={200} />
        </Link>
      </div>
      <div className="flex gap-14 text-xl">
        <p className="flex items-center gap-2">
          {pathname === "/nosotras" ? <LuFlower /> : null}
          <Link href={"/nosotras"}>Sobre nosotras</Link>
        </p>
        <p className="flex items-center gap-2">
          {pathname === "/productos" ? <LuFlower /> : null}
          <Link href={"/productos"}>Productos</Link>
        </p>
        <p className="flex items-center gap-2">
          {pathname === "/puntosdeventa" ? <LuFlower /> : null}
          <Link href={"/puntosdeventa"}>Puntos de venta</Link>
        </p>
        <p className="flex items-center gap-2">
          {pathname === "/medios" ? <LuFlower /> : null}
          <Link href={"/medios"}>Medios</Link>
        </p>
        <p className="flex items-center gap-2">
          {pathname === "/significado" ? <LuFlower /> : null}
          <Link href={"/significado"}>Significado del mate</Link>
        </p>
        <p className="flex items-center gap-2">
          {pathname === "/contacto" ? <LuFlower /> : null}
          <Link href={"/contacto"}>Contacto</Link>
        </p>
      </div>
    </div>
  );
};

export default Navbar;
