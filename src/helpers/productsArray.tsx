//! precios del té y los botánicos

import foto from "../../public/assets/NosotrasPic.jpeg";

export const yerba = [
  {
    imagen: foto,
    tipo: "Canchada molienda fina",
    descripcion:
      "Lorem ipsum es el texto que se usa habitualmente en diseño gráfico.",
    intensidad: "Baja",
    precios: {
      mendoza: {
        kilo: "$5480",
        medio: "$3440",
      },
      buenosAires: {
        kilo: "$7400",
        medio: "$4000",
      },
    },
  },
  {
    imagen: foto,
    tipo: "Barbacuá tradicional",
    descripcion:
      "Lorem ipsum es el texto que se usa habitualmente en diseño gráfico en demostraciones de tipografías o de borradores de diseño para probar el diseño visual antes de insertar el texto final. Aunque no posee actualmente fuentes para justificar sus hipótesis, el profesor de filología clásica Richard McClintock asegura que su uso se remonta a los impresores de comienzos del siglo XVI. Su uso en algunos editores de texto muy conocidos en la actualidad ha dado al texto lorem ipsum nueva popularidad.",
    intensidad: "Baja",
    precios: {
      mendoza: {
        kilo: "$5480",
        medio: "$3440",
      },
      buenosAires: {
        kilo: "$7400",
        medio: "$4000",
      },
    },
  },
  {
    imagen: foto,
    tipo: "Despalada molienda media",
    descripcion:
      "Lorem ipsum es el texto que se usa habitualmente en diseño gráfico en demostraciones de tipografías o de borradores de diseño para probar el diseño visual antes de insertar el texto final. Aunque no posee actualmente fuentes para justificar sus hipótesis, el profesor de filología clásica Richard McClintock asegura que su uso se remonta a los impresores de comienzos del siglo XVI. Su uso en algunos editores de texto muy conocidos en la actualidad ha dado al texto lorem ipsum nueva popularidad.",
    intensidad: "Media",
    precios: {
      mendoza: {
        kilo: "$6360",
        medio: "$3840",
      },
      buenosAires: {
        kilo: "$8000",
        medio: "$5000",
      },
    },
  },
  {
    imagen: foto,
    tipo: "Despalada molienda fina",
    descripcion:
      "Lorem ipsum es el texto que se usa habitualmente en diseño gráfico en demostraciones de tipografías o de borradores de diseño para probar el diseño visual antes de insertar el texto final. Aunque no posee actualmente fuentes para justificar sus hipótesis, el profesor de filología clásica Richard McClintock asegura que su uso se remonta a los impresores de comienzos del siglo XVI. Su uso en algunos editores de texto muy conocidos en la actualidad ha dado al texto lorem ipsum nueva popularidad.",
    intensidad: "Alta",
    precios: {
      mendoza: {
        kilo: "$6680",
        medio: "$3960",
      },
      buenosAires: {
        kilo: "$8900",
        medio: "$5900",
      },
    },
  },
];

export const te = [
  {
    imagen: foto,
    tipo: "Verde",
    descripcion: "Suave y antioxidante",
    intensidad: "Baja",
  },
  {
    imagen: foto,
    tipo: "Rojo",
    descripcion: "Fuerte y con cafeína",
    intensidad: "Media",
  },
  {
    imagen: foto,
    tipo: "Negro",
    descripcion: "Fuerte y con cafeína",
    intensidad: "Alta",
  },
];

export const botanicos = [
  {
    imagen: foto,
    tipo: "Burrito",
    descripcion: "Refrescante y calmante",
  },
  {
    imagen: foto,
    tipo: "Caléndula",
    descripcion: "Refrescante y calmante",
  },
  {
    imagen: foto,
    tipo: "Cedrón",
    descripcion: "Refrescante y calmante",
  },
  {
    imagen: foto,
    tipo: "Lavanda",
    descripcion: "Refrescante y calmante",
  },
  {
    imagen: foto,
    tipo: "Manzanilla",
    descripcion: "Relajante y digestiva",
  },
];
