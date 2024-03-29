import React, { useState, useRef } from "react";
import Layout_tratamientos from "../components/Layout_tratamientos";
import Lista3 from "../components/Lista3";
import cera from "../assets/images/depilacion-cera.jpg";
import VideoDepilacion from "../assets/video/depilacion.mp4";
import fotodepilacion from "../assets/images/fotodepilacion.jpg";
import Logo from "../assets/images/logo-marinaspa.jpg";
const DepilacionPage = () => {
  //referencias depilacion
  const dep0 = useRef(null);
  const dep1 = useRef(null);
  const dep2 = useRef(null);
  const dep3 = useRef(null);
  const dep4 = useRef(null);
  const dep5 = useRef(null);
  const dep6 = useRef(null);
  const dep7 = useRef(null);
  const dep8 = useRef(null);
  const dep9 = useRef(null);
  const dep10 = useRef(null);
  const dep11 = useRef(null);
  const dep12 = useRef(null);
  const dep13 = useRef(null);
  const dep14 = useRef(null);
  const dep15 = useRef(null);
  const dep16 = useRef(null);
  const dep17 = useRef(null);
  const dep18 = useRef(null);
  const dep19 = useRef(null);
  const dep20 = useRef(null);
  const dep21 = useRef(null);
  const dep22 = useRef(null);
  const dep23 = useRef(null);
  const dep24 = useRef(null);
  const dep25 = useRef(null);

  const fotodepilacionObj = {
    title: "DEPILACIÓN Y FOTODEPILACIÓN",
    category: ["CERA", "FOTODEPILACIÓN", "BONOS (5 SESIONES)"],
    images: [Logo, VideoDepilacion, Logo],
    category_text: [
      "En nuestro centro de belleza, ofrecemos servicios profesionales de depilación con cera que te brindarán resultados suaves y duraderos. Sabemos que eliminar el vello no deseado es una parte importante de tu rutina de cuidado personal, y nos comprometemos a hacerlo de la manera más efectiva y cómoda posible.",
      "Nuestro personal especializado evaluará tu tipo de piel y vello para determinar el programa de tratamiento adecuado para ti. La fotodepilación requiere varias sesiones para lograr resultados óptimos, ya que solo afecta a los folículos en la fase de crecimiento activo. Trabajaremos contigo para diseñar un plan personalizado que se adapte a tus necesidades y objetivos específicos.",
      "Sabemos que la consistencia y la continuidad son clave cuando se trata de obtener los resultados deseados en cualquier tratamiento. Con nuestros bonos de 5 sesiones, te brindamos la oportunidad de comprometerte con tu cuidado personal y ahorrar al mismo tiempo.",
    ],
    treatments: [
      [
        ["Depilación y diseño de cejas", "", 5, "section_0"],
        [
          "Zona XS",
          "Línea alba superior o inferior, pies, manos, mentón, labio superior, patillas, entrepecho, orejas, pómulos",
         3,
         "section_1"
        ],
        [
          "Zona S",
          "Cuello, axilas, ingles, interglúteos, glúteos, lumbar, nuca",
          7,
          "section_2"
        ],
        [
          "Zona M",
          "Brazos, medias piernas, espalda completa, torso completo, brazos, pubis completo",
          12,
          "section_3"
        ],
        ["Zona L", "Piernas completas", 17],
        [
          "Zona XL",
          "Cuerpo completo (1 zona L, 2 zonas S, 2 zonas XS)",
          28,
          "section_4"
        ],
      ],
      [
        [
          "Zona XS",
          "Línea alba superior o inferior, areolas, pies, manos, mentón, labio superior, entrecejo, patillas, entrepecho, orejas, cejas, frente, nariz, manos o pies, pómulos",
          "15€ / Sesión",
          "section_5"
        ],
        ["Ingles Normal", "", "20€ / Sesión","section_6"],
        ["Axilas", "", "20€ / Sesión","section_7"],
        ["Facial Completo", "", "30€ / Sesión", "section_8"],
        [
          "Ingles Brasileñas o completas con Inter glúteos",
          "",
          "35€ / Sesión",
          "section_9"
        ],
        ["Medias Piernas", "", "38€ / Sesión", "section_10"],
        ["Brazos", "", "40€ / Sesión","section_11"],
        ["Espalda", "", "45€ / Sesión", "section_12"],
        ["Pecho", "", "45€ / Sesión", "section_13"],
        ["Piernas Completas", "", "50€ / Sesión", "section_14"],
      ],
      [
        ["Piernas Completas", "", 200, "section_15"],
        ["Axilas + Ingles Completas", "", 200, "section_16"],
        ["Axilas + Ingles Normales", "", "175€ / Sesión", "section_17"],
        ["Espalda", "", 175, "section_18"],
        ["Pecho", "", 175, "section_19"],
        ["Medias Piernas", "", 170, "section_20"],
        ["Brazos", "", 170, "section_21"],
        ["Ingles completas  + Perianal", "", 150, "section_22"],
        ["Axilas", "", 80, "section_23"],
      ],
    ],
  };

  /////////////ESTADOS
  const [depilacionState, setDepilacionState] = useState(fotodepilacionObj);

  return (
    <div>
      <Layout_tratamientos>
        <main className="">
          <Lista3 obj={depilacionState}/>
        </main>
      </Layout_tratamientos>
    </div>
  );
};

export default DepilacionPage;
