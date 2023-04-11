import logo from './logo.svg';
import './App.css';
import './styles/css/styles.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Tratamientos from './pages/Tratamientos';
import ProgramasFaciales from './pages/Programas-Faciales';

import { useRef } from 'react';
function App() {

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

    const antiAgingObj = {
      title: 'BELLEZA - RITUALES Y PROGRAMAS FACIALES',
      category: 'ANTI-AGING',
      treatments: [
          [
              "Ritual Biocelular",
              "Regenera, estimula y potencia la energía natural de tu piel",
              48,
              'close'
          ],
          [
              "Ritual Ácido Hialurónico",
              "Efecto lifting natural",
              48,
              'close'
          ],
          ["Ritual de Perlas", "Envuelve a tu piel en un halo de luminosidad y juventud", 48, 'close'],
          ["Tratamiento Facial Láser Frio Dioderma", " Aplicación de principios activos a gran profundidad rellenando arrugas e iluminando la piel", 45, 'close'],
          ["Ritual de regeneración y Luminosidad", "", 3, 'close'],
          [
              "Tratamiento Facial Dermapen",
              "Estimula el colágeno y elastina, reduce las líneas de expresión y el tamaño del poro, disminuye la apariencia de cicatrices, mejora la firmeza de la piel",
              70,
              'close'
          ],
          [
              "INDIBA Facial EXPRESS",
              "El mejor tratamiento que hay en el mercado para regenerar y revitalizar células de la piel, sin efectos secundarios",
              30,
              'close'
          ],
          [
              "INDIBA Facial",
              "El mejor tratamiento que hay en el mercado para regenerar y revitalizar células de la piel, sin efectos secundarios, todo complementado con nuestra mejor cosmética y personalizada según caso",
              50,
              'close'
          ],
          [
              "HIFU Facial COMPLETO",
              "Ultrasonidos de alta frecuencia que hace efecto lifting sin cirugía",
              200,
              'close'
          ],
          [
              "HIFU por Zona (Facial)",
              "",
              150,
              'close'
          ],
          [
              "HIFU por Zona (Cuello)",
              "",
              100,
              'close'
          ],
          [
              "Masaje ENERGILIFT",
              "Lifting manual, este masaje remodela la estructura natural de la piel, reposiciona los volúmenes y redibuja el contorno del rostro",
              35,
              'close'
          ],
          [
              "Programa facial personalizado (6 Sesiones)",
              "",
              280,
              'close'
          ],
          [
              "MANTENIMIENTO FACIAL",
              "",
              45,
              'close'
          ]
      ]
  };
  const higieneFacialObj = {
    title: 'BELLEZA - RITUALES Y PROGRAMAS FACIALES',
    category: 'HIGIENE FACIAL OXIGENANTE',
    treatments: [
        [
            "Limpieza en profundidad de la piel con cosmética profesional",
            "",
            36,
            'close'
        ],
        [
            "Higiene facial profunda con microdermoabrasión con punta de Diamante",
            "tratamiento indoloro que elimina las células muertas de la piel a la vez que reafirma y las líneas de expresión se vuelven menos visibles",
            3,
            'close'
        ],
        ["Limpieza en profundidad de la piel con cosmética profesional", "", 3, 'close'],
        ["Hidravacuum – Detox – Limpieza – Exfoliación – Nutrición", "", 50, 'close'],
        ["Ritual de regeneración y Luminosidad", "", 3, 'close'],

        [
            "Ritual equilibrio y purificador",
            " Restablece el equilibrio de las pieles mixtas y grasas, eliminando las imperfecciones y brillos de la piel",
            3,
            'close'
        ],

    ]
};


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/tratamientos" element={<Tratamientos/>}></Route>
        <Route path="/programas-faciales" element={<ProgramasFaciales title="Programas Faciales" obj = {[higieneFacialObj, antiAgingObj]} reference = {[[hf0, hf1, hf2, hf3, hf4, hf5], [aa0,aa1,aa2,aa3,aa4,aa5,aa6,aa7,aa8,aa9,aa10,aa11,aa12,aa13]]} />}></Route>
      </Routes>

    </BrowserRouter>
  );
}

export default App;
/*<div className="App">
      <NavBar/>
      <Header/>
      <Main/>
      <Testimonials/>
      <Footer/>
      <a href="tel:+34684025751" className='whatsapp-icon'>
        <FaWhatsapp/>
      </a>
    </div> */