import React, { useState, useRef } from "react";
import Layout_tratamientos from "../components/Layout_tratamientos";

import Lista from "../components/Lista";
//images
import Maquillaje from "../assets/images/maquillaje-2.jpg";
import Manicura from "../assets/images/manicura-2.jpg";
const EsteticaGeneralPage = ({ title }) => {
  ///referencias estetica general manicura y pedicura
  const eg0 = useRef(null);
  const eg1 = useRef(null);
  const eg2 = useRef(null);
  const eg3 = useRef(null);
  const eg4 = useRef(null);

  ///referencias estetica general manicura y pedicura
  const maq0 = useRef(null);
  const maq1 = useRef(null);
  const maq2 = useRef(null);

  const esteticaGeneralObj = {
    title: "ESTÉTICA GENERAL",
    category: "MANICURA | PEDICURA",
    category_text:
      "Tus uñas merecen la mejor atención y cuidado, y en nuestra web encontrarás todo lo que necesitas para lucir unas manos y pies impecables. Nuestro equipo de expertos en belleza y estilistas profesionales se dedica a ofrecerte los tratamientos más innovadores y las últimas tendencias en el mundo de la manicura y pedicura.",
    images: [Manicura],
    treatments: [
      ["Manicura normal", "", 14, "s_1"],
      ["Manicura con esmaltado semipermanente", "", 20, "s_2"],
      [
        "Manicura Spa-Tratamiento completo de belleza en tus manos",
        "",
        29,
        , "s_3"
      ],
      ["Pedicura con esmaltado semipermanente", "", 20, "s_4"],
      [
        "Pedicura Spa-Tratamiento completo de belleza en tus pies",
        "",
        29,
        , "s_5"
      ],
    ],
  };
  const maquillajeObj = {
    title: "ESTÉTICA GENERAL",
    category: "MAQUILLAJE",
    category_text:
      "Si buscas resaltar tu belleza natural y expresar tu estilo único, estás en el lugar correcto. Nuestro equipo de expertos en belleza está aquí para ofrecerte los mejores consejos, tutoriales y productos de maquillaje que te ayudarán a lucir radiante en cualquier ocasión.",
    images: [Maquillaje],
    treatments: [
      ["Maquillaje social (día, tarde o noche)", "", 30, "s_6"],
      [
        "Maquillaje de novia (Incluye fijación flash de larga duración y prueba de maquillaje)",
        "(no incluye desplazamiento)",
        110,
        , "s_7"
      ],
      ["Lifting de pestañas + Tinte", "", 35, "s_8"],
    ],
  };

  /////////////ESTADOS
  const [esteticaGeneralState, setEsteticaGeneral] = useState(esteticaGeneralObj);
  const [maquillajeState, setMaquillajeState] = useState(maquillajeObj);

  
  return (
    <Layout_tratamientos>
      <main>
        <Lista obj={[esteticaGeneralObj, maquillajeObj]} />
      </main>
    </Layout_tratamientos>
  );
};

export default EsteticaGeneralPage;
