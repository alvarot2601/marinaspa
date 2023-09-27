import { React, useEffect } from "react";
import Footer from "./Footer";
import Navbar2 from "./Navbar2";
import { FaWhatsapp, FaArrowCircleUp } from "react-icons/fa";
import { Button, Divider, Link } from "@nextui-org/react";

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
      <Navbar2 />
      {children}
      <Divider />
      <Footer />
      <Button
        aria-aria-label="Scroll to top Button"
        isIconOnly
        className="fixed bottom-20 right-10 rounded-full z-50 bg-slate-600 text-white"
        variant="shadow"
        id="scrollToTop"
        onClick={scrollToTop}
      >
        <FaArrowCircleUp />
      </Button>
      <Button
        as={Link}
        aria-label="whatsapp Button"
        variant="shadow"
        href="tel:+34684025751"
        isIconOnly
        className="fixed bottom-5 right-10 bg-green-600 text-white rounded-full z-50"
      >
        <FaWhatsapp className="text-xl" />
      </Button>
    </>
  );
};
export default Layout;
