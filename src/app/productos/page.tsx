"use client";

import { useState, useEffect } from "react";
import { yerba, te, botanicos } from "../../helpers/productsArray";
import ProductCard from "../../components/ProductsCard";
import { BsAsterisk } from "react-icons/bs";

type TabType = "yerba" | "te" | "botanicos";
// type CiudadType = "Mendoza" | "Buenos Aires" | "Consultar";
// type CiudadCodeType = "M" | "B" | "C";

const Productos: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabType>("yerba");
  const [ciudad, setCiudad] = useState<string | null>(null);
  const [ciudadCode, setCiudadCode] = useState<string | null>(null);

  // Función para detectar la ubicación en el cliente
  useEffect(() => {
    const detectarUbicacion = async () => {
      try {
        const res = await fetch("https://ipapi.co/json/"); // API para obtener ubicación por IP
        const data = await res.json();

        // Filtrar la ciudad y establecerla en el estado
        if (data.region_code === "M") {
          setCiudad(data.region);
          setCiudadCode(data.region_code);
        } else if (data.region_code === "B" || data.region_code === "C") {
          setCiudad(data.region);
          setCiudadCode(data.region_code);
        } else {
          setCiudad("Desconocida"); // Si no se detecta
          setCiudadCode("Desconocido"); // Si no se detecta
        }
      } catch (error) {
        console.error("Error obteniendo la ubicación:", error); // En caso de error
        setCiudad("Error");
        setCiudadCode("Error");
      }
    };

    detectarUbicacion();
  }, []);

  const tabs: { id: TabType; label: string }[] = [
    { id: "yerba", label: "Yerba" },
    { id: "te", label: "Té" },
    { id: "botanicos", label: "Botánicos" },
  ];

  const tables: Record<TabType, typeof yerba | typeof te | typeof botanicos> = {
    yerba,
    te,
    botanicos,
  };

  return (
    <div className="w-3/4 m-auto">
      {/* Solapas */}
      <div className="flex border-b border-darkgreen">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`px-8 py-2 font-semibold text-lg ${
              activeTab === tab.id
                ? "border-b-4 border-darkgreen text-darkgreen"
                : "text-gray-700"
            }`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div>
        {activeTab !== "botanicos" ? (
          <p className="my-2">
            Intensidad del sabor: <span className="text-green-800">●</span> Baja{" "}
            <span className="text-yellow-600">●</span> Media{" "}
            <span className="text-red-700">●</span> Alta
          </p>
        ) : null}
      </div>

      {/* Renderizado de tarjetas */}
      <div className="place-items-center grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4">
        {tables[activeTab].map((item, index) => (
          <ProductCard
            key={`${item.tipo}-${index}`}
            product={item}
            ciudad={ciudad || "Desconocida"}
            ciudadCode={ciudadCode || "Desconocido"} // Si aún no se detectó, usar "mendoza" por defecto
          />
        ))}
      </div>
      <p className="flex items-center my-4 place-self-end gap-2">
        <BsAsterisk />
        Los precios pueden variar según la locación! Consultar ♡
      </p>
    </div>
  );
};

export default Productos;
