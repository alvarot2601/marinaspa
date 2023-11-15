import { React, lazy, Suspense } from 'react';
import logo from './logo.svg';
import './styles/css/styles.css';

import Home from './pages/Home';
import Tratamientos from './pages/Tratamientos';
import ProgramasFacialesPage from './pages/ProgramasFaciales';





//import SiluetaCorporalPage from './pages/SiluetaCorporal';
//import BienestarRelajacionPage from './pages/BienestarRelajacion';
//import DepilacionPage from './pages/DepilacionFotodepilacion';
//import Contacto from './pages/Contacto';
//import Galeria from './pages/Galeria';
//import PoliticaCookies from './pages/Politica-cookies';
//import PoliticaPrivacidad from './pages/PoliticaPrivacidad';
//import AvisoLegal from './pages/Aviso-legal';
const EsteticaGeneralPage = lazy(()=>import("./pages/EsteticaGeneral"));

const SiluetaCorporalPage = lazy(()=>import("./pages/SiluetaCorporal"));
const BienestarRelajacionPage = lazy(()=>import("./pages/BienestarRelajacion"));
const DepilacionPage = lazy(()=>import("./pages/DepilacionFotodepilacion"));
const Contacto = lazy(()=>import("./pages/Contacto"));
const Galeria = lazy(()=>import("./pages/Galeria"));
const PoliticaCookies = lazy(()=>import("./pages/Politica-cookies"));
const PoliticaPrivacidad = lazy(()=>import("./pages/PoliticaPrivacidad"));
const AvisoLegal = lazy(()=>import("./pages/Aviso-legal"));


function App() {
  return (
    ''
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