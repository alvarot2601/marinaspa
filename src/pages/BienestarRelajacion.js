import React, { useState, useRef } from "react";
import Layout_tratamientos from "../components/Layout_tratamientos";
import Lista3 from "../components/Lista3";
//import List3 from '../components/List3';
import videoHidromasaje from "../assets/video/hidromasaje.mp4";
import VideoPeeling from "../assets/video/peelings.mp4";
import masaje from "../assets/images/masaje.jpg";
import relajacion from "../assets/images/relajacion.jpg";
import VideoMasajes from "../assets/video/masajes.mp4";
const BienestarRelajacionPage = () => {
  //referencias bienestar y relajación
  const br0 = useRef(null);
  const br1 = useRef(null);
  const br2 = useRef(null);
  const br3 = useRef(null);
  const br4 = useRef(null);
  const br5 = useRef(null);
  const br6 = useRef(null);
  const br7 = useRef(null);
  const br8 = useRef(null);
  const br9 = useRef(null);
  const br10 = useRef(null);
  const br11 = useRef(null);
  const br12 = useRef(null);
  const br13 = useRef(null);
  const br14 = useRef(null);
  const br15 = useRef(null);



  const esteticaGeneralObj = {
    title: "ESTÉTICA GENERAL",
    category: "MANICURA | PEDICURA",
    category_text:
      "Tus uñas merecen la mejor atención y cuidado, y en nuestra web encontrarás todo lo que necesitas para lucir unas manos y pies impecables. Nuestro equipo de expertos en belleza y estilistas profesionales se dedica a ofrecerte los tratamientos más innovadores y las últimas tendencias en el mundo de la manicura y pedicura.",
    images: [''],
    treatments: [
      ["Manicura normal", "", 14],
      ["Manicura con esmaltado semipermanente", "", 20],
      [
        "Manicura Spa-Tratamiento completo de belleza en tus manos",
        "",
        29
      ],
      ["Pedicura con esmaltado semipermanente", "", 20],
      [
        "Pedicura Spa-Tratamiento completo de belleza en tus pies",
        "",
        29
      ],
    ],
  };


  const bienestarRelajacionObj = {
    title: "BIENESTAR Y RELAJACIÓN",
    category: ["BAÑERAS DE HIDROMASAJE", "PEELINGS CORPORALES", "MASAJES", ""],
    category_text: [
      "Sumérgete en un oasis de tranquilidad y deja que el poder curativo del agua y los beneficios terapéuticos de las burbujas mejoren tu bienestar físico y emocional. Ya sea que desees disfrutar de un momento de relajación solo, en pareja o con amigos, nuestras bañeras de hidromasajes son perfectas para cualquier ocasión.",
      "Descubre la renovación total de tu piel con nuestros peelings corporales. Nuestros tratamientos de exfoliación profunda eliminan las células muertas y revelan una piel suave y radiante. Utilizamos productos de alta calidad y técnicas especializadas para brindarte resultados excepcionales.Además de mejorar la apariencia de la piel, los peelings corporales también pueden ayudar a reducir la apariencia de cicatrices, estrías y manchas. Permítenos cuidar de tu piel y rejuvenecer todo tu cuerpo.",
      "Disfruta de la máxima relajación y bienestar con nuestros masajes profesionales. Nuestros terapeutas altamente capacitados te brindarán una experiencia única y revitalizante. Con técnicas especializadas y atención personalizada, cada masaje se adaptará a tus necesidades y preferencias individuales. Ya sea que busques aliviar el estrés, reducir la tensión muscular o simplemente relajarte, nuestros masajes te transportarán a un estado de calma y renovación",
      ""
    ],
    images: [videoHidromasaje, VideoPeeling, VideoMasajes, ''],
    treatments: [
      [
        [
          "Baño Sensación Océano",
          "Sumérgete en un mar de relax absoluto (20 min)",
          15,
        ],
        [
          "Baño Aromaceane",
          "Drenante, ayuda a eliminar líquidos (20 min)",
          15,
        ],
      ],
      [
        ["Peeling Vivificante", "Elimina el estrés (35 min)", 35],
        [
          "Polinesia",
          "Piel aterciopelada y con una luminosidad natural (35 min)",
          35,
        ],
        [
          "Peeling Hidratante",
          "Piel más suave y súper hidratada (35 min)",
          35,
        ],
      ],
      [
        [
          "Masajes piernas cansadas + Presoterapia (50 min)",
          "",
          45,
        ],
        ["Masaje antiestrés - (30 min)", "", 25],
        [
          "Peeling Hidratante",
          "Piel más suave y supe hidratada (35 min+)",
          45,
        ],
        [
          "POLINESIA - Aromas tropicales y experiencia de relajación",
          "(Bañera, exfoliación y masaje)- Aprox. 100 min",
          80,
        ],
        [
          "ÁRTICO - Experiencia estimulante nacida de la fusión del calor y el frío",
          "(Para una profunda relajación)- Aprox. 100 min",
          80,
        ],
        [
          "RITUAL THERMAL",
          "Exfoliante + Envoltura de algas + bañera + masaje corporal + mascarilla facial – 100 min",
          90,
        ],
        [
          "RITUAL DE LA ALEGRÍA CON CÍTRICOS BY ALQUIMIA ",
          "Tratamiento vitalizante y energético (100 min)",
          90,
        ],
        ["ENVOLTURA DE ALGAS", "", 45],
        [
          "ENVOLTURA INDOCEANE + 30 MINUTOS DE MASAJE",
          "(enriquecida en activos nutritivos que subliman la piel dejándola suave y aterciopelada)",
          50,
        ],
        [
          "BEAUTY PARTY (mínimo 4 personas/máximo 10 personas)",
          "Cocktail de bienvenida, 30´ de masaje corporal, belleza iluminadora facial y maquillaje)",
          55,
        ],
      ],
      [
        
      ],
    ],
  };

  /////////////ESTADOS
  const [bienestarRelajacionState, setBienestarRelajacionState] = useState(bienestarRelajacionObj);
  
  return (
    <>
      <Layout_tratamientos>
        <main>
          <Lista3 obj={bienestarRelajacionObj} />
        </main>
      </Layout_tratamientos>
    </>
  );
};

export default BienestarRelajacionPage;
