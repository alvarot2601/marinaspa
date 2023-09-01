import React from 'react';
import {FaFacebook, FaInstagram, FaCopyright} from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className='footer bg-zinc-800'>
            <div className="footer__col">
                <span className='footer__copyright'>
                    <FaCopyright/> Copyright 2023
                </span>
                <span>
                    Zafra – Calle Reyes Huertas Nº 8
                </span>
                <span>
                    644 799 000
                </span>
                <div>
                    <a href=""><FaFacebook/></a>
                    <a href=""><FaInstagram/></a>
                </div>
            </div>
            
            <div className="footer__col">
                <a href="/contacto">
                    Contacto
                </a>
                <a href="">
                    Aviso Legal
                </a>
                <a href="">
                    Política de privacidad
                </a>
                <a href="">
                    Política de cookies
                </a>
            </div>
            <div className="footer__col">
                <a href="/programas-faciales">
                    Programas Faciales
                </a>
                <a href="/estetica-general">
                    Estética General
                </a>
                <a href="/silueta-corporal">
                    Silueta Corporal
                </a>
                <a href="/bienestar-y-relajacion">
                    Bienestar y relajación
                </a>
                <a href="/depilacion-y-fotodepilacion">
                    Depilación
                </a>
            </div>
        </footer>
    );
}
export default Footer;