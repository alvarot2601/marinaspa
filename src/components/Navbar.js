import { React, useState, useEffect } from "react";
import { Link } from "react-router-dom";
const NavBar = (props) => {
  var prueba = "home";
  //const [change, setChange] = useState("");
  const [activeLink, setActiveLink] = useState("");
  const [isNavbarBig, setIsNavbarBig] = useState(false);
  let lastCoord = 0;
  const thresold = 100;

 
  useEffect(() => {
    if (window.location.href.search('contacto') !== -1){
            setActiveLink('contacto');
        }
    else if (window.location.href.search('tratamientos') !== -1 || window.location.href.search('programas-faciales') !== -1 || window.location.href.search('estetica-general') !== -1 || window.location.href.search('silueta-corporal') !== -1 || window.location.href.search('bienestar') !== -1 || window.location.href.search('depilacion') !== -1){
        setActiveLink('tratamientos');
    }
    else{
        setActiveLink('home');
    }
  });
  useEffect(() => {
    const handleScroll = (e) => {
      if (window.scrollY > lastCoord) {
        setIsNavbarBig(true);
        lastCoord = window.scrollY;
      } else {
        setIsNavbarBig(false);
        lastCoord = window.scrollY;
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <nav className={`nav ${isNavbarBig ? 'nav--big' : ''}`}>
      <div className="nav__logo">MARINASPÁ</div>
      <div className="nav__links">
        <Link
          to="/"
          className={`${activeLink == "home" ? "nav__link-active " : ""}`}
        >
          HOME
        </Link>
        <div className="nav__dropdown-wrapper">
          <Link
            to="/tratamientos"
            className={`${
              activeLink === "tratamientos" ? "nav__link-active " : ""
            }`}
          >
            TRATAMIENTOS
          </Link>
          <ul className="nav__dropdown">
            <li>
              <Link to="/programas-faciales">Programas Faciales</Link>
            </li>
            <li>
              <Link to="/estetica-general">Estética General</Link>
            </li>
            <li>
              <Link to="/silueta-corporal">Silueta Corporal</Link>
            </li>
            <li>
              <Link to="/bienestar-y-relajacion">Bienestar y Relajación</Link>
            </li>
            <li>
              <Link to="/depilacion-y-fotodepilacion">Depilación</Link>
            </li>
          </ul>
        </div>
        <Link
          to="/contacto"
          className={`${activeLink === "contacto" ? "nav__link-active " : ""}`}
        >
          CONTACTO
        </Link>
      </div>
    </nav>
  );
};
export default NavBar;
