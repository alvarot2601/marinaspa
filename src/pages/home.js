import React, { useEffect } from "react"; 
import Header from '../components/Header';
import Main from '../components/Main';
import Testimonials from '../components/Testimonials';
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

const Home = () => {
    return (
        <>
                <div className="navHeaderWrapper">
                    <NavBar transparent={true}/>
                    <Header/>
                </div>
                <Main/>
                <Testimonials/>
                <Footer/>         
            
        </>
    );
}

export default Home;