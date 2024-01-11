import { React, useEffect } from "react";
import Footer from "./Footer";
import Navbar2 from "./Navbar2";
import Navbar from "./Navbar";
import { FaWhatsapp, FaArrowCircleUp } from "react-icons/fa";
import {Divider,  } from "@nextui-org/react";
import {IconButton} from "@mui/material";
import { Link } from 'react-router-dom';

const Layout = ({ children }) => {
  const showScrollToTop = () => {
    if (window.pageYOffset > 500) {
      document.querySelector("#scrollToTop").style.display = "flex";
    } else document.querySelector("#scrollToTop").style.display = "none";
  };
  useEffect(() => {
    window.addEventListener("scroll", showScrollToTop);

    return () => {
      window.removeEventListener("scroll", showScrollToTop);
    };
  });

  const scrollToTop = () => {
    window.scrollTo({ top: -window.pageYOffset, behaviour: "smooth" });
  };

  const startOnTop = () => {
    if (window.scrollY !== 0) {
      setTimeout(() => {
        window.scrollTo(0, 0);
      }, 25);
    }
  };
  //para que la pagina aparezca siempre desde el inicio, para no permitir que se vean secciones inferiores
  useEffect(() => {
    
    window.addEventListener("load", startOnTop);
    return () => window.removeEventListener("load", startOnTop);
  }, []);
  return (
    <>
      <Navbar />
      {children}
      <Divider />
      <Footer />
      
      <IconButton
        variant="outlined"
        sx={{position:"fixed", bottom:"70px", right:"20px", borderRadius:"100%", zIndex:50, bgcolor:"#9e8479",transition: 'all 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
        boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)', // Sombra base
        ':hover': {
          backgroundColor: '#f5ede8',
          boxShadow: '0px 8px 16px rgba(0, 0, 0, 0.2)', // Sombra en hover
          scale:'1.1'
        },}}
        id="scrollToTop"
        onClick={scrollToTop}
      >
        <FaArrowCircleUp className="text-xl"/>
      </IconButton>
      <IconButton
        component={Link}        
        variant="outlined"
        to="https://api.whatsapp.com/send?phone=34684025751"
        sx={{position:"fixed", bottom:"20px", right:"20px", borderRadius:"100%", zIndex:50, bgcolor:"#25D366",
        transition: 'all 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
        boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)', // Sombra base
        ':hover': {
          backgroundColor: 'hsl(134, 70%, 75%)',
          boxShadow: '0px 8px 16px rgba(0, 0, 0, 0.2)', // Sombra en hover
          scale:'1.1'
        },}}
      >
        <FaWhatsapp className="text-xl"/>
      </IconButton>
    </>
  );
};
export default Layout;
