import logo from './logo.svg';
import './App.css';
import './styles/css/styles.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Tratamientos from './pages/Tratamientos';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/tratamientos" element={<Tratamientos/>}></Route>
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