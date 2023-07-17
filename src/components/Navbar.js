import {React, useState, useEffect} from "react";
import { Link } from "react-router-dom";
const NavBar = (props)=> {

    const [isNavbarBig, setIsNavbarBig] = useState(false);
    let lastCoord = 0;
    const thresold = 100;
    useEffect(()=>{
        const handleScroll = (e)=>{
            if(window.scrollY > lastCoord){
                setIsNavbarBig(true);
                lastCoord = window.scrollY;
            }
            else {
                setIsNavbarBig(false);
                lastCoord = window.scrollY;
            }
        }
        window.addEventListener('scroll', handleScroll);
        return ()=> window.removeEventListener('scroll', handleScroll);
    }, []);
    return (
        <nav className={`nav ${isNavbarBig ? 'nav--big' : ''} ${props.transparent ? 'nav--transparent' : ''}`}>
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
                <Link to="/contacto">CONTACTO</Link>
            </div>
        </nav>
    );
}
export default NavBar;