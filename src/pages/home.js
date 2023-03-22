import React from "react"; 
import Header from '../components/Header';
import Main from '../components/Main';
import {FaWhatsapp} from 'react-icons/fa';
import Footer from '../components/Footer';
import Testimonials from '../components/Testimonials';
import NavBar from '../components/Navbar';

const Home = () => {
    return (
        <>
            <NavBar/>
            <Header/>
            <Main/>
            <Testimonials/>
            <Footer/>
            <a href="tel:+34684025751" className='whatsapp-icon'>
                <FaWhatsapp/>
            </a>
        </>
    );
}

export default Home;