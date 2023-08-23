import React, { useEffect, useRef, useLayoutEffect } from "react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Card, CardFooter, Image, CardHeader } from "@nextui-org/react";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  Button,
} from "@nextui-org/react";

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
    
 
  return (
    <main className={`main ${props.classProp}`} ref={comp}>
      <section className="first-section relative">
        {/*<div className="main__background-rectangle main__background-rectangle--1"></div>
          <div className="main__background-rectangle main__background-rectangle--2"></div>
          <div className="main__background-rectangle main__background-rectangle--3"></div>
          <div className="main__background-rectangle main__background-rectangle--4"></div>
          <div className="main__background-rectangle main__background-rectangle--5"></div>
          <div className="main__background-rectangle main__background-rectangle--down main__background-rectangle--down--1"></div>
          <div className="main__background-rectangle main__background-rectangle--down main__background-rectangle--down--2"></div>
          <div className="main__background-rectangle main__background-rectangle--down main__background-rectangle--down--3"></div>
          <div className="main__background-rectangle main__background-rectangle--down main__background-rectangle--down--4"></div>
          <div className="main__background-rectangle main__background-rectangle--down main__background-rectangle--down--5"></div>*/}

        <div className="main__first-section relative flex justify-center items-center parallax h-screen">
          <p className="absolute right-0 top-5 z-10 pr-14 pl-5 py-5 text-md font-medium w-5/12 rounded-l-lg text-slate-100 bg-gradient-to-tr from-gray-900 from-50%">
            En <span className="text-4xl font-bold text-lime-100 inline-block -rotate-6 m-3 underline underline-offset-8 decoration-2">MarinaSpá</span> ofrecemos
            una amplia gama de{" "}
            <span className="text-3xl font-semibold text-amber-200 inline-block skew-y-3 m-3 underline underline-offset-4 decoration-1 decoration-wavy">tratamientos</span> y{" "}
            <span className="text-3xl font-semibold text-amber-200 inline-block -skew-y-3 m-3 underline underline-offset-4 decoration-1 decoration-wavy">servicios</span> de belleza
            diseñados para realzar tu apariencia y aumentar tu confianza.
          </p>

          <p className="absolute right-0 top-50 z-10 pr-14 pl-5 py-5 text-md w-4/12 backdrop-blur-3xl rounded-l-lg text-slate-100 bg-gradient-to-tr from-gray-900 from-50%">
            En <span className="text-4xl font-bold text-amber-200">MarinaSpá</span> utilizamos
            solo los
            <span className="text-3xl font-semibold text-amber-200"> productos</span> y{" "}
            <span className="text-3xl font-semibold text-amber-200">
              {" "}
              tecnologías más avanzados{" "}
            </span>
            para asegurarnos de que cada visita sea una experiencia de lujo.
          </p>
          
          <Popover placement="right" showArrow={true}>
            <PopoverTrigger>
              <Button isIconOnly className="info absolute left-2 bottom-20 text-slate-100 bg-gray-900 ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-7 h-7 animate-bounce"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
                  />
                </svg>
              </Button>
            </PopoverTrigger>
            <PopoverContent className="text-md w-7/12 text-slate-100 bg-gray-900">
             
                Nuestras modernas instalaciones en nuestro centro de estética te
                brindarán un ambiente relajante y acogedor, donde podrás
                desconectar del ajetreo diario y disfrutar de una experiencia de
                bienestar total. Ya sea que desees un tratamiento facial
                revitalizante, un masaje relajante, un tratamiento de depilación
                láser de última generación o cualquier otro servicio de
                estética, estamos aquí para atender todas tus necesidades.
            </PopoverContent>
          </Popover>

          {/*<div>
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
          </Card>*/}
        </div>
      </section>
    </main>
  );
};

export default Main;
