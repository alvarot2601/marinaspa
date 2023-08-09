import {React, useEffect} from 'react';
import Footer from './Footer';
import NavBar from './NavBar';
import {FaWhatsapp, FaArrowCircleUp} from 'react-icons/fa';

const Layout = ({ children }) => {
    const showScrollToTop = () => {
        if(window.pageYOffset > 500)
        {
            document.querySelector('.scrollToTop').style.display = "flex";
        }
        else   
            document.querySelector('.scrollToTop').style.display = "none";
    }
    useEffect(()=>{
        window.addEventListener('scroll', showScrollToTop);

        return ()=> {
           window.removeEventListener('scroll', showScrollToTop); 
        }
    });

    const scrollToTop = () => {
        window.scrollTo({top: - window.pageYOffset, behaviour: 'smooth'});
    }
    return (
        <>
            <NavBar/>
            { children }
            <Footer/>
            <button className='scrollToTop' onClick={scrollToTop}>
                <FaArrowCircleUp/>
            </button>
            <a href="tel:+34684025751" className='whatsapp-icon'>
                <FaWhatsapp/>
            </a>
        </>
        
    );
}
export default Layout;