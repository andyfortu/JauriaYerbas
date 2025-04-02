import Carousel from "@/components/Carousel";
import { GiPlantRoots } from "react-icons/gi";

export default function Home() {
  return (
    <>
      <Carousel />
      <div className="place-items-center text-xl my-7 space-y-3">
        <p>Yerba y té de Misiones,</p>
        <p>botánicos de fincas ubicadas en San Rafael, Mendoza.</p>
        <p>Productos orgánicos</p>
        <p>sin TACC, gluten ni agroquímicos.</p>
        <GiPlantRoots className="text-6xl" />
      </div>
    </>
  );
}
