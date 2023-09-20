import logo from './logo.svg';
import './styles/css/styles.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Tratamientos from './pages/Tratamientos';
import ProgramasFacialesPage from './pages/ProgramasFaciales';

import { useRef } from 'react';
import EsteticaGeneralPage from './pages/EsteticaGeneral';
import SiluetaCorporalPage from './pages/SiluetaCorporal';
import BienestarRelajacionPage from './pages/BienestarRelajacion';
import DepilacionPage from './pages/DepilacionFotodepilacion';
import Contacto from './pages/Contacto';
import Galeria from './pages/Galeria';
import PoliticaCookies from './pages/Politica-cookies';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/tratamientos" element={<Tratamientos/>}></Route>
        <Route path="/programas-faciales" element={<ProgramasFacialesPage title="Programas Faciales"/>} ></Route>
        <Route path="/estetica-general" element={<EsteticaGeneralPage title="Estética General" />} ></Route>
        <Route path="/silueta-corporal" element={<SiluetaCorporalPage/>} ></Route>
        <Route path="/bienestar-y-relajacion" element={<BienestarRelajacionPage/>} ></Route>
        <Route path="/depilacion-y-fotodepilacion" element={<DepilacionPage/>} ></Route>
        <Route path="/galeria" element={<Galeria/>} ></Route>
        <Route path="/contacto" element={<Contacto/>} ></Route>
        <Route path="politica-cookies" element={<PoliticaCookies/>}></Route>
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