import React, { useEffect } from "react";
import Header from "../components/Header";
import Main from "../components/Main";
import Testimonials from "../components/Testimonials";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Diagnostico from "../components/Diagnostico";
import Tratamientos_c from "../components/Tratamientos_c";
import Layout from "../components/Layout";

const Home = () => {
  return (
    <Layout>
      <div className="navHeaderWrapper">
        <Header />
      </div>
      
      <Main />
      <Tratamientos_c />
      <Testimonials />
      <Diagnostico />
      
    </Layout>
  );
};

export default Home;
