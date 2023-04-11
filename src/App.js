import logo from './logo.svg';
import './App.css';
import './styles/css/styles.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Tratamientos from './pages/Tratamientos';
import ProgramasFaciales from './pages/ProgramasFaciales';

import { useRef } from 'react';
import EsteticaGeneral from './pages/EsteticaGeneral';
import SiluetaCorporal from './pages/SiluetaCorporal';
import BienestarRelajacion from './pages/BienestarRelajacion';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/tratamientos" element={<Tratamientos/>}></Route>
        <Route path="/programas-faciales" element={<ProgramasFaciales title="Programas Faciales"/>} ></Route>
        <Route path="/estetica-general" element={<EsteticaGeneral title="Estética General" />} ></Route>
        <Route path="/silueta-corporal" element={<SiluetaCorporal/>} ></Route>
        <Route path="/bienestar-relajacion" element={<BienestarRelajacion/>} ></Route>
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