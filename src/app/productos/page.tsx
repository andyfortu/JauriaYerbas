"use client";

import { useState, useEffect } from "react";
import { yerba, te, botanicos } from "../../helpers/productsArray";
import ProductCard from "../../components/ProductsCard";

type TabType = "yerba" | "te" | "botanicos";
type CiudadType = "mendoza" | "buenosAires";

const Productos: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabType>("yerba");
  const [ciudad, setCiudad] = useState<CiudadType | null>(null);

  // Función para detectar la ubicación en el cliente
  useEffect(() => {
    const detectarUbicacion = async () => {
      try {
        const res = await fetch("https://ipapi.co/json/"); // API para obtener ubicación por IP
        const data = await res.json();

        // Filtrar la ciudad y establecerla en el estado
        if (data.region_code === "M") {
          setCiudad("mendoza");
        } else if (data.region_code === "B") {
          setCiudad("buenosAires");
        } else {
          setCiudad("mendoza"); // Default si no se detecta
        }
      } catch (error) {
        console.error("Error obteniendo la ubicación:", error);
        setCiudad("mendoza"); // Default en caso de error
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
    <div className="w-3/4 mx-auto my-6">
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

      {/* Renderizado de tarjetas */}
      <div className="place-items-center grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4">
        {tables[activeTab].map((item, index) => (
          <ProductCard
            key={`${item.tipo}-${index}`}
            product={item}
            ciudad={ciudad || "mendoza"} // Si aún no se detectó, usar "mendoza" por defecto
          />
        ))}
      </div>
    </div>
  );
};

export default Productos;
