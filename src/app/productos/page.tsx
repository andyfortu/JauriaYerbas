"use client";

import { useState } from "react";
import { yerba, te, botanicos } from "../../helpers/productsArray";
import { FaCircle } from "react-icons/fa";

const Productos = () => {
  type TabType = "yerba" | "te" | "botanicos";
  const [activeTab, setActiveTab] = useState<TabType>("yerba");

  const tabs: { id: TabType; label: string }[] = [
    { id: "yerba", label: "Yerba" },
    { id: "te", label: "Té" },
    { id: "botanicos", label: "Botánicos" },
  ];

  type TableData = {
    tipo: string;
    descripcion: string;
    intensidad?: string;
  }[];

  const tables: Record<TabType, TableData> = {
    yerba,
    te,
    botanicos,
  };

  return (
    <>
      <h1 className="justify-self-center text-3xl text-center mb-6">
        CARROUSEL
      </h1>

      <div className="w-full max-w-4xl mx-auto mt-10">
        {/* Solapas */}
        <div className="flex border-b border-darkgreen">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`px-4 py-2 font-semibold ${
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

        {/* Tabla */}
        <div className="mt-4 overflow-hidden min-h-[400px] rounded-lg">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-darkgreen">
                <th className="p-4 border-2 border-darkgreen">Tipo</th>
                <th className="p-4 border-2 border-darkgreen">Descripción</th>
              </tr>
            </thead>
            <tbody>
              {tables[activeTab].map((item, index) => (
                <tr key={index} className="border-2 border-darkgreen">
                  <td className="p-4 border-darkgreen flex items-center gap-2">
                    {item.intensidad === "Baja" ? (
                      <FaCircle className="text-green-800" />
                    ) : item.intensidad === "Media" ? (
                      <FaCircle className="text-yellow-600" />
                    ) : item.intensidad === "Alta" ? (
                      <FaCircle className="text-red-700" />
                    ) : null}
                    <span>{item.tipo}</span>
                  </td>

                  <td className="p-4 border-2 border-darkgreen">
                    {item.descripcion}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Productos;
