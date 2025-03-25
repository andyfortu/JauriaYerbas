"use client";

import { useState } from "react";
import { yerba, te, botanicos } from "../../helpers/productsArray";
import ProductCard from "../../components/ProductsCard";

type TabType = "yerba" | "te" | "botanicos";

const Productos: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabType>("yerba");

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
    <>
      <div className="w-3/4 mx-auto my-6">
        {/* Solapas */}
        <div className="flex border-b border-darkgreen">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`px-8 py-2 font-semibold text-lg ${
                activeTab === tab.id ? "border-b-4 border-darkgreen text-darkgreen" : "text-gray-700"
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
            <ProductCard key={`${item.tipo}-${index}`} product={item} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Productos;
