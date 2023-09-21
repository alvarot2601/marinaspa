import {React, useEffect} from 'react';
import Footer from './Footer';
import Navbar2 from './Navbar2';
import {FaWhatsapp, FaArrowCircleUp} from 'react-icons/fa';
import {Button, Divider, Link} from "@nextui-org/react";

const Layout = ({ children }) => {
    
    const showScrollToTop = () => {
        if(window.pageYOffset > 500)
        {
            document.querySelector('#scrollToTop').style.display = "flex";
        }
        else   
            document.querySelector('#scrollToTop').style.display = "none";
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
            <Navbar2/>
            { children }
            <Divider/>
            <Footer/>
            <Button isIconOnly className='fixed bottom-20 right-10 rounded-full z-50' color="secondary" variant="light" id="scrollToTop" onClick={scrollToTop}>
                <FaArrowCircleUp/>
            </Button>
            <Button as={Link} variant="shadow" href="tel:+34684025751" isIconOnly className='fixed bottom-5 right-10 bg-green-500 text-white rounded-full z-50' >
                <FaWhatsapp className="text-xl"/>
            </Button>
        </>
        
    );
}
export default Layout;