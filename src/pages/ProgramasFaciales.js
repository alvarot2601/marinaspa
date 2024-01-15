import React, { useState, useRef } from "react";
import Layout_tratamientos from "../components/Layout_tratamientos";
import facial from "../assets/images/tratamiento-facial.JPG";
import Higienefacial from "../assets/images/higiene-facial.JPG";
import Lista from "../components/Lista";

const ProgramasfacialesPage = ({ title }) => {
  const antiAgingObj = {
    title: "BELLEZA - RITUALES Y PROGRAMAS FACIALES",
    category: "ANTI-AGING",
    category_text:
      "Los tratamientos anti-aging se enfocan en la prevención y corrección de los signos del envejecimiento, incluyendo arrugas, manchas, flacidez y otros signos de daño en la piel. Estos tratamientos están diseñados para retrasar el proceso de envejecimiento y promover la regeneración celular. ",
    images: [Higienefacial],
    treatments: [
      [
        "Ritual biocelular",
        "Regenera, estimula y potencia la energía natural de tu piel",
        48,
        "s_1"
      ],
      ["Ritual ácido hialurónico", "Efecto lifting natural", 48],
      [
        "Ritual de perlas",
        "Envuelve a tu piel en un halo de luminosidad y juventud",
        48,
        "s_2"
      ],
      [
        "Tratamiento facial láser frío Dioderma",
        " Aplicación de principios activos a gran profundidad rellenando arrugas e iluminando la piel",
        45,
        "s_3"
      ],
      [
        "Tratamiento facial Dermapen",
        "Estimula el colágeno y elastina, reduce las líneas de expresión y el tamaño del poro, disminuye la apariencia de cicatrices, mejora la firmeza de la piel",
        70,
        "s_4"
      ],
      [
        "INDIBA facial Express",
        "El mejor tratamiento que hay en el mercado para regenerar y revitalizar células de la piel, sin efectos secundarios",
        30,
        "s_5"
      ],
      [
        "INDIBA facial",
        "El mejor tratamiento que hay en el mercado para regenerar y revitalizar células de la piel, sin efectos secundarios, todo complementado con nuestra mejor cosmética y personalizada según caso",
        50,
        "s_6"
      ],
      [
        "HIFU facial Completo",
        "Ultrasonidos de alta frecuencia que hace efecto lifting sin cirugía",
        200,
        "s_7"
      ],
      ["HIFU por zona (facial)", "", 150, "s_8"],
      ["HIFU por zona (Cuello)", "", 100, "s_9"],
      [
        "Masaje ENERGILIFT",
        "Lifting manual, este masaje remodela la estructura natural de la piel, reposiciona los volúmenes y redibuja el contorno del rostro",
        35,
        "s_10"
      ],
      ["Programa facial personalizado (6 Sesiones)", "", 299,"s_11"],
      ["Mantenimiento facial", "", 52, "s_12"],
    ],
  };
  const higienefacialObj = {
    title: "BELLEZA - RITUALES Y PROGRAMAS facialES",
    category: "HIGIENE FACIAL OXIGENANTE",
    category_text:
      "La higiene facial oxigenante combina la limpieza profunda de la piel con la entrega de oxígeno a las células de la piel para mejorar su apariencia y salud. Además, la higiene facial oxigenante es una técnica no invasiva que puede realizarse en cualquier tipo de piel, desde la piel seca hasta la piel grasa.",
    images: [facial],
    treatments: [
      ["Limpieza en profundidad de la piel con cosmética profesional", "", 39, "s_13"],
      [
        "Higiene facial profunda con microdermoabrasión con punta de Diamante",
        "Tratamiento indoloro que elimina las células muertas de la piel a la vez que reafirma y las líneas de expresión se vuelven menos visibles",
        45,
        , "s_14"
      ],
      ["Hidravacuum – Detox – Limpieza – Exfoliación – Nutrición", "", 50, "s_15"],
      ["Ritual de regeneración y luminosidad", "", 48, "s_16"],

      [
        "Ritual equilibrio y purificador",
        " Restablece el equilibrio de las pieles mixtas y grasas, eliminando las imperfecciones y brillos de la piel",
        45,
        , "s_17"
      ],
    ],
  };

  /////////////ESTADOS
  const [higienefacialState, setHigienefacialState] =
    useState(higienefacialObj);
  const [antiAgingState, setAntiAgingState] = useState(antiAgingObj);
  ///referencias higiene facial
  const hf0 = useRef(null);
  const hf1 = useRef(null);
  const hf2 = useRef(null);
  const hf3 = useRef(null);
  const hf4 = useRef(null);
  const hf5 = useRef(null);

  ///referencias Anti Aging
  const aa0 = useRef(null);
  const aa1 = useRef(null);
  const aa2 = useRef(null);
  const aa3 = useRef(null);
  const aa4 = useRef(null);
  const aa5 = useRef(null);
  const aa6 = useRef(null);
  const aa7 = useRef(null);
  const aa8 = useRef(null);
  const aa9 = useRef(null);
  const aa10 = useRef(null);
  const aa11 = useRef(null);
  const aa12 = useRef(null);
  const aa13 = useRef(null);

  return (
    <>
      <Layout_tratamientos>
        <main>
          <Lista obj={[higienefacialState, antiAgingState]} />
        </main>
      </Layout_tratamientos>
    </>
  );
};

export default ProgramasfacialesPage;
