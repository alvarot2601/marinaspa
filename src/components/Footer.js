import React from 'react';
import {FaFacebook, FaInstagram, FaCopyright} from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className='footer'>
            <div className="footer__col">
                <span className='footer__copyright'>
                    <FaCopyright/> Copyright 2023
                </span>
                <span>
                    Calle Bauça, 10 07100 Sóller
                </span>
                <span>
                    666666666
                </span>
            </div>
            <div className="footer__col">
                
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
            <div className="footer__col footer__col--2">
                <a href=""><FaFacebook/></a>
                <a href=""><FaInstagram/></a>
            </div>
        </footer>
    );
}
export default Footer;