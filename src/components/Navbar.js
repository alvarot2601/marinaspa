import React from "react";
import { Link } from "react-router-dom";
const NavBar = ()=> {
    return (
        <nav className="nav">
            <div className="nav__logo">
                MARINASPÁ
            </div>
            <div className="nav__links">
                <Link to="/" className="nav__link-active">HOME</Link>
                <div className="nav__dropdown-wrapper">
                    <Link to="/tratamientos">TRATAMIENTOS</Link>
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
                <Link to="d">HOME</Link>
                <Link to="d">HOME</Link>
                <Link to="d">HOME</Link>
                <Link to="d">HOME</Link>
                <Link to="d">HOME</Link>
            </div>
        </nav>
    );
}
export default NavBar;