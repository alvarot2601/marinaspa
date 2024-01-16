import { React, lazy, Suspense } from 'react';
import logo from './logo.svg';
import './styles/css/styles.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Tratamientos from './pages/Tratamientos';
import ProgramasFacialesPage from './pages/ProgramasFaciales';
import { theme } from './theme';
import { ThemeProvider } from '@mui/material';
import {Skeleton} from '@mui/material';


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
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Suspense fallback={<Skeleton variant='rectangular' height='10vh'/>}>
        <ThemeProvider theme={theme}>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/tratamientos" element={<Tratamientos />}></Route>
          <Route path="/programas-faciales" element={<ProgramasFacialesPage title="Programas Faciales" />} ></Route>
          <Route path="/estetica-general" element={<EsteticaGeneralPage title="Estética General" />} ></Route>
          <Route path="/silueta-corporal" element={<SiluetaCorporalPage />} ></Route>
          <Route path="/bienestar-y-relajacion" element={<BienestarRelajacionPage />} ></Route>
          <Route path="/depilacion-y-fotodepilacion" element={<DepilacionPage />} ></Route>
          <Route path="/galeria" element={<Galeria />} ></Route>
          <Route path="/contacto" element={<Contacto />} ></Route>
          <Route path="/politica-cookies" element={<PoliticaCookies />}></Route>
          <Route path="/politica-privacidad" element={<PoliticaPrivacidad />}></Route>
          <Route path="/aviso-legal" element={<AvisoLegal />}></Route>
        </Routes>
        </ThemeProvider>
      </Suspense>
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