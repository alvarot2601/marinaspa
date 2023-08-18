import React, { useEffect, useRef, useLayoutEffect } from "react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Card, CardFooter, Image, CardHeader } from "@nextui-org/react";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Main = (props) => {
  const comp = useRef();
  

  
  /*
    useEffect( () => {
        var el = document.querySelector('.overflowed_paragraph');
        var divHeight = el.offsetHeight;
        var lineHeight = el.style.lineHeight;
        var lines = parseInt(divHeight) / lineHeight;
        alert("lineheight: " + lineHeight);  
        alert("Lines: " + lines);  
    }); */

  useLayoutEffect(() => {
    // create our context. This function is invoked immediately and all GSAP animations and ScrollTriggers created during the execution of this function get recorded so we can revert() them later (cleanup)
    let ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".accordions",
          pin: true,
          start: "top top",
          end: "bottom top",
          scrub: 1,
          ease: "linear",
        },
      });

      tl.to(".accordion .text", {
        height: 0,
        paddingBottom: 0,
        opacity: 0,
        stagger: 0.5,
      });
      tl.to(
        ".accordion",
        {
          marginBottom: 1,
          stagger: 0.5,
        },
        "<"
      );
    }, comp); // <- IMPORTANT! Scopes selector text

    return () => ctx.revert(); // cleanup
  }, []);

  return (
    <main className={`main ${props.classProp}`} ref={comp} >
      <section className="first-section">
        {
          /*<div className="main__background-rectangle main__background-rectangle--1"></div>
          <div className="main__background-rectangle main__background-rectangle--2"></div>
          <div className="main__background-rectangle main__background-rectangle--3"></div>
          <div className="main__background-rectangle main__background-rectangle--4"></div>
          <div className="main__background-rectangle main__background-rectangle--5"></div>
          <div className="main__background-rectangle main__background-rectangle--down main__background-rectangle--down--1"></div>
          <div className="main__background-rectangle main__background-rectangle--down main__background-rectangle--down--2"></div>
          <div className="main__background-rectangle main__background-rectangle--down main__background-rectangle--down--3"></div>
          <div className="main__background-rectangle main__background-rectangle--down main__background-rectangle--down--4"></div>
          <div className="main__background-rectangle main__background-rectangle--down main__background-rectangle--down--5"></div>*/
        }

        <div className="main__first-section relative flex justify-center items-center parallax h-screen">
          <p className="absolute right-0 top-5 z-10 pr-14 pl-5 py-5 text-md font-medium w-5/12 rounded-l-lg text-slate-100 bg-slate-900 hover:opacity-0">
            En <span className="text-4xl font-bold">MarinaSpá</span> ofrecemos una amplia gama de <span className="text-3xl font-bold">tratamientos</span> y <span className="text-3xl font-bold">servicios</span> de belleza
            diseñados para realzar tu apariencia y aumentar tu confianza.
          </p>
          
          <p className="absolute right-0 top-50 z-10 pr-14 pl-5 py-5 text-md w-4/12 backdrop-blur-3xl rounded-l-lg text-slate-100 bg-slate-900 hover:opacity-0">
            En <span className="text-4xl font-bold">MarinaSpá</span> utilizamos solo los
            <span className="text-3xl font-bold"> productos</span> y <span className="text-3xl font-bold"> tecnologías más avanzados </span>para asegurarnos de que cada
            visita sea una experiencia de lujo.
          </p>
          <p className="absolute left-0 bottom-20 z-10 pl-14 pr-5 py-5 text-md w-7/12 backdrop-blur-3xl rounded-r-lg text-slate-100 bg-slate-900 hover:opacity-0">
            Nuestras modernas instalaciones en nuestro centro de estética te
            brindarán un ambiente relajante y acogedor, donde podrás desconectar
            del ajetreo diario y disfrutar de una experiencia de bienestar
            total. Ya sea que desees un tratamiento facial revitalizante, un masaje
            relajante, un tratamiento de depilación láser de última generación o
            cualquier otro servicio de estética, estamos aquí para atender todas
            tus necesidades.
          </p>
         {
          /*<div>
         <p>
            En <span className="big_text">MarinaSpá</span>, nos enorgullece
            ofrecer una amplia gama de tratamientos y servicios de belleza
            diseñados para realzar tu apariencia y aumentar tu confianza.
            Nuestro equipo de expertos esteticistas altamente capacitados y
            apasionados se dedica a brindar experiencias únicas y resultados
            excepcionales.
          </p>
          <p>
            Nuestras modernas instalaciones en nuestro centro de estética te
            brindarán un ambiente relajante y acogedor, donde podrás desconectar
            del ajetreo diario y disfrutar de una experiencia de bienestar
            total. Ya sea que desees un facial revitalizante, un masaje
            relajante, un tratamiento de depilación láser de última generación o
            cualquier otro servicio de estética, estamos aquí para atender todas
            tus necesidades.
          </p>
          <p>
            En <span className="big_text">MarinaSpá</span>, utilizamos solo los
            productos y tecnologías más avanzados para asegurarnos de que cada
            visita sea una experiencia de lujo. Nos enorgullece ofrecer un
            enfoque personalizado para cada cliente, comprendiendo tus objetivos
            y necesidades individuales para brindarte los mejores resultados
            posibles.
          </p>
         </div>
         
         
         
         
         
         
         <Card isFooterBlurred  className="border-none z-0 w-10/12 mt-10">
            
            <Image
              alt="Woman listing to music"
              className="object-cover w-full"
              src={FotoMari}
            />
            <CardFooter className="justify-center before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
              <p className="text-2xl text-white/90">
                Mari Aguza - Esteticista profesional
              </p>
            </CardFooter>
          </Card>*/
         }
        </div>
      </section>
    </main>
  );
};

export default Main;
