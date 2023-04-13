import React from "react"; 
import Header from '../components/Header';
import Main from '../components/Main';
import Testimonials from '../components/Testimonials';
import Layout from "../components/Layout";
import NavBar from "../components/NavBar";

const Home = () => {
    return (
        <>
                <div className="navHeaderWrapper">
                    <NavBar/>
                    <Header/>
                </div>
                <Main/>
                <Testimonials/>               
            
        </>
    );
}

export default Home;