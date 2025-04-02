import DF from "../../public/assets/DF.jpg";
import DM from "../../public/assets/DM.jpg";
import BT from "../../public/assets/BT.jpg";
import CF from "../../public/assets/CF.webp";

import teVERDE from "../../public/assets/teVERDE.jpg";
import teROJO from "../../public/assets/teROJO.jpg";
import teNEGRO from "../../public/assets/teNEGRO.jpg";

import CEDRON from "../../public/assets/CEDRON.jpg";
import CALENDULA from "../../public/assets/CALENDULA.jpg";
import BURRO from "../../public/assets/BURRO.jpg";
import MANZANILLA from "../../public/assets/MANZANILLA.jpg";
import LAVANDA from "../../public/assets/LAVANDA.jpg";

export const yerba = [
  {
    imagen: CF,
    tipo: "Canchada molienda fina",
    descripcion:
      "Estacionamiento: de 12 a 18 meses. Se separa el palo de la hoja y a este se le realizan dos cortes para mayor prolijidad, luego se junta con la hoja reduciendo así el contenido del polvo.",
    intensidad: "Media",
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
    imagen: BT,
    tipo: "Barbacuá tradicional",
    descripcion:
      "Estacionamiento: de 18 a 24 meses. Se separa la hoja del palo y se realiza la molienda por separado, reduciendo así el contenido de polvo al mínimo. Su proceso de ahumado a leña le da el acento al sabor.",
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
    imagen: DM,
    tipo: "Despalada molienda media",
    descripcion:
      "Estacionamiento: 24 meses.  90% de separación de palo y molienda de grosor medio. Sin polvo.",
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
    imagen: DF,
    tipo: "Despalada molienda fina",
    descripcion:
      "Estacionamiento: de 24 a 33 meses. Se separa el palo de la hoja para la molienda fina, de este modo no contiene polvo y su durabilidad es mayor.",
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
    imagen: teVERDE,
    tipo: "Verde",
    descripcion:
      "Rico en antioxidantes, especialmente catequinas y polifenoles, que combaten el estrés oxidativo y reducen la inflamación. Entre sus beneficios, se destaca su capacidad para mejorar la concentración y el estado de alerta gracias a la combinación de cafeína y L-teanina. También favorece el metabolismo, ayudando en la quema de grasa, y contribuye a la salud cardiovascular al reducir el colesterol y la presión arterial. Además, fortalece el sistema inmunológico y puede tener propiedades neuroprotectoras, ayudando a prevenir enfermedades degenerativas.",
    intensidad: "Baja",
    precios: {
      mendoza: {
        kilo: "$6000",
        medio: "$3000",
        cien: "$1000",
      },
      buenosAires: {
        kilo: "$8000",
        medio: "$5000",
        cien: "$2000",
      },
    },
  },
  {
    imagen: teROJO,
    tipo: "Rojo",
    descripcion:
      "Es conocido por su capacidad para estimular el metabolismo y favorecer la digestión de grasas, convirtiéndolo en un aliado para el control del peso. Además, ayuda a reducir los niveles de colesterol y triglicéridos, beneficiando la salud cardiovascular. Su contenido en antioxidantes y compuestos bioactivos también refuerza el sistema inmunológico y puede mejorar la función hepática, facilitando la desintoxicación del organismo.",
    intensidad: "Media",
    precios: {
      mendoza: {
        kilo: "$6000",
        medio: "$3000",
        cien: "$1000",
      },
      buenosAires: {
        kilo: "$8000",
        medio: "$5000",
        cien: "$2000",
      },
    },
  },
  {
    imagen: teNEGRO,
    tipo: "Negro",
    descripcion:
      "Es una fuente natural de antioxidantes, como los flavonoides, que protegen el corazón al mejorar la circulación y reducir el colesterol. Su contenido de cafeína lo convierte en un estimulante natural, favoreciendo la concentración y el estado de alerta. Además, ayuda a la digestión, fortalece el sistema inmunológico y puede contribuir a la regulación del azúcar en sangre, beneficiando a personas con riesgo de diabetes.",
    intensidad: "Alta",
    precios: {
      mendoza: {
        kilo: "$6000",
        medio: "$3000",
        cien: "$1000",
      },
      buenosAires: {
        kilo: "$8000",
        medio: "$5000",
        cien: "$2000",
      },
    },
  },
];

export const botanicos = [
  {
    imagen: BURRO,
    tipo: "Burrito",
    descripcion:
      "Posee propiedades ansiolíticas naturales, con efecto calmante. Es además, un excelente digestivo que ayuda a calmar cualquier dolencia estomacal.",
    precios: {
      mendoza: {
        diez: "$600",
      },
      buenosAires: {
        diez: "Sin stock",
      },
    },
  },
  {
    imagen: CALENDULA,
    tipo: "Caléndula",
    descripcion:
      "Conocida por su acción terapéutica como astringente, antiséptica, funguicida y antiinflamatoria. Además otorga un efecto cicatrizante y calmante de dolores menstruales. A nivel dérmico aporta apariencia suave y radiante en sus diversas formas de uso y consumo.",
    precios: {
      mendoza: {
        diez: "Sin stock",
      },
      buenosAires: {
        diez: "Sin stock",
      },
    },
  },
  {
    imagen: CEDRON,
    tipo: "Cedrón",
    descripcion:
      "Se usa reconocidamente para aliviar afecciones gastrointestinales. También es favorecedor en el tratamiento de resfriados y estados febriles leves. Su aroma marcado nos permite disfrutar deliciosas infusiones.",
    precios: {
      mendoza: {
        diez: "$800",
      },
      buenosAires: {
        diez: "Sin stock",
      },
    },
  },
  {
    imagen: LAVANDA,
    tipo: "Lavanda",
    descripcion:
      "Aporta un efecto relajante que provee su compuesto químico, el linanool. Además su agradable aroma ayuda a aliviar la ansiedad y favorecer la estimulación neuronal influyendo positivamente en nuestro estado de ánimo.",
    precios: {
      mendoza: {
        diez: "$600",
      },
      buenosAires: {
        diez: "Sin stock",
      },
    },
  },
  {
    imagen: MANZANILLA,
    tipo: "Manzanilla",
    descripcion:
      "Conocida ancestralmente para aliviar procesos inflamatorios a todo nivel y con carácter medicinal. Tiene un gran efecto calmante además de un delicioso aroma.",
    precios: {
      mendoza: {
        diez: "$900",
      },
      buenosAires: {
        diez: "Sin stock",
      },
    },
  },
];
