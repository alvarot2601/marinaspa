import React, { useState, useRef } from "react";
import Layout_tratamientos from "../components/Layout_tratamientos";

import Lista from "../components/Lista";
import SiluetaCorporal from "../assets/images/diagnostico.jpg";
const SiluetaCorporalPage = () => {
  ///referencias silueta corporal y programas
  const sc0 = useRef(0);
  const sc1 = useRef(0);
  const sc2 = useRef(0);
  const sc3 = useRef(0);
  const sc4 = useRef(0);
  const sc5 = useRef(0);
  const sc6 = useRef(0);
  const sc7 = useRef(0);
  const sc8 = useRef(0);
  const sc9 = useRef(0);
  const sc10 = useRef(0);
  const sc11 = useRef(0);

  const siluetaCorporalObj = {
    title: "SILUETA CORPORAL",
    category: "SILUETA CORPORAL",
    category_text:"¿Sueñas con conseguir la silueta corporal que siempre has deseado? Con los avances en la tecnología y la medicina estética, ahora es más posible que nunca lograr una figura esculpida y tonificada. Sumérgete en nuestra variedad de tratamientos de silueta corporal de vanguardia que pueden ayudarte a alcanzar tus objetivos de belleza y confianza. Desde la reducción de grasa localizada hasta el reafirmamiento de la piel, hay opciones para cada necesidad y preferencia.",
    treatments: [
      [
        "Envoltura de Algas “CURA DETOX”",
        "Sumérjase en una experiencia relajante, donde la riqueza mineral, el alto poder de penetración de las algas le permitirán drenar y desintoxicar el organismo, dejándolo libre de deshechos + Bañera Hidromasaje",
        45
        , "s_1"
      ],
      [
        "Tratamiento BODY-SCULPT",
        "Favorece la pérdida de grasa, remodela y tonifica: su diferencia la tecnología Body Palp (sin aparatología)",
        0,
        [
         [ "Programa 6 Curas: ", 150],
         ["Programa 12 Curas: ", 290]
        ],
        "s_2"
      ],
      [
        "Maderoterapia",
        '',
        "52€/sesión",
        [
          ["Programa 8 sesiones:", 300],
        ]
        , "s_3"
      ],
      [
        "Presoterapia",
        '',
        "15€/sesión",
        [
          ["Programa 10 sesiones", 100],
        ],
        , "s_4"
      ],
      [
        "Criolipólisis + presoterapia", '', 52, "s_5"
      ],
      ["Remodelante corporal V-SHAPE + Presoterapia", '', 52, "s_6"],
      [
        "Programa IWRAP. Sistema Integral de adelgazamiento (Criofrecuencia)",
        "",
        "52€/sesión",
        [
          ["Programa 10 sesiones: ",420]
        ]
        , "s_7"
      ],
      ["INDIBA corporal + Presoterapia", "", 52],
      [
        "WONDER",
        "",
        "69€/sesión",
        [
          ["Programa 8 sesiones:", 400],
          ["Programa 4 sesiones:", 236]
        ],
        , "s_8"
      ],
      [
        "LIPOSONIX",
        "Revolucionario tratamiento contra la grasa localizada a base de ultrasonidos",
        0,
        [
          ["Abdomen:", 90],
          ["Abdomen y flancos:", 150],
          ["Cartucheras:", 150],
          ["Brazos:", 150]
        ],
        "s_9"
      ],
      [
        "Programa integral",
        "10 sesiones de acción global sobre grasas profundas y superficiales, remodela la silueta y reduce la celulitis",
        0,
        [
          ["Programa 1 zona: ",420],
          ["Programa 2 zonas: ", 650]
        ],
        "s_10"
      ],
      ["MATENIMIENTO CORPORAL", "", 52, "s_11"],
    ],
    images: [SiluetaCorporal],
  };

  /////////////ESTADOS
  const [siluetaCorporal, setSiluetaCorporal] = useState(siluetaCorporalObj);

  return (
    <>
      <Layout_tratamientos>
        <main>
          <Lista
            obj={[siluetaCorporal]}
          />
        </main>
      </Layout_tratamientos>
    </>
  );
};

export default SiluetaCorporalPage;
