import React from "react"; 
import Header from '../components/Header';
import Main from '../components/Main';
import Testimonials from '../components/Testimonials';
import Layout from "../components/Layout";

const Home = () => {
    return (
        <>
            <Layout>
                <Header/>
                <Main/>
                <Testimonials/>               
            </Layout>
        </>
    );
}

export default Home;