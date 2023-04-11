import React from 'react';
import Footer from './Footer';
import NavBar from './NavBar';
import {FaWhatsapp} from 'react-icons/fa';

const Layout = ({ children }) => {
    return (
        <>
            <NavBar/>
            { children }
            <Footer/>
            <a href="tel:+34684025751" className='whatsapp-icon'>
                <FaWhatsapp/>
            </a>
        </>
        
    );
}
export default Layout;