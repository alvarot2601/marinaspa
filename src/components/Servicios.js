import { React, useEffect, useLayoutEffect, useRef } from "react";
import {
  FaSpa,
  FaPercent,
  FaTrophy,
  FaHandshake,
  FaHeartbeat,
} from "react-icons/fa";

import Mesoestetic from "../assets/images/logo-mesoestetic.svg";

import Massada from "../assets/images/massada.avif";
import Utsukusi from "../assets/images/utsukusy.png";
import Aromaterapia from "../assets/images/aromaterapia.jpg";
import ProgramaFidelizacion from "../assets/images/programa-fidelizacion.jpg";
import ShakeHands from "../assets/images/shake-hands.jpg";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Box } from "@mui/material";

const Servicios = (props) => {
  gsap.registerPlugin(ScrollTrigger);
  
  useLayoutEffect(() => {
    let sections = gsap.utils.toArray(".servicios__servicio");
    let ctx = gsap.context(() => {
      gsap.to(sections, {
        xPercent: -100 * (sections.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: ".servicios__wrapper",
          markers: false,
          pin: true,
          scrub: 1,
          snap: 1 / (sections.length - 1),
          // base vertical scrolling on how wide the container is so it feels more natural.
        },
      });
    });
    return () => ctx.revert();
  }, []);
  return (
    <div id="servicios-1" className={` ${props.classProp} text-center overflow-hidden`}>
      <h3 className="p-5 text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold bg-white text-primaryDarker">
        NUESTROS SERVICIOS
      </h3>
      {
        //<p className="text-3xl my-5 ">¿Qué nos diferencia del resto?</p>
      }
      <div className="servicios__wrapper h-screen text-primaryDarker">
        <div className="servicios__subwrapper h-full">
        <div className="servicios__servicio servicios__servicio--2  h-full">
            <div className="flex flex-col lg:flex-row h-full">
              <div className="hidden sm:block order-1 h-3/6 lg:h-full lg:w-5/12 xl:w-5/12">
                <img
                  loading="lazy"
                  src={ShakeHands}
                  className="object-cover rounded-none h-full w-full "
                />
              </div>
              <div className="h-full flex items-center px-10 py-5 h-3/6 lg:w-7/12 xl:w-7/12">
                <Box className="bg-white shadow-2xl rounded-2xl px-3 pb-5 h-fit flex flex-col items-center justify-center sm:justify-center gap-3">
                <div>
                  <FaHandshake className="text-6xl md:text-7xl lg:text-8xl" />
                </div>
                <p className="mb-3 font-bold text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-tight sm:leading-tight md:leading-tight lg:leading-tight">
                  Programas de fidelización y ofertas.
                </p>
                <p className="md:text-lg lg:text-xl font-medium italic">
                  ¡En MarinaSpá, valoramos a nuestros clientes y queremos
                  recompensar su lealtad! Ofrecemos irresistibles ofertas en una
                  amplia gama de servicios estéticos. Desde descuentos en
                  tratamientos faciales hasta promociones en masajes y
                  depilación, siempre encontrarás oportunidades para cuidar de
                  ti a precios increíbles.
                </p>
                </Box>
              </div>
            </div>
          </div>
        <div className="mejores-marcas servicios__servicio servicios__servicio--1 h-full">
            <div className="flex flex-col justify-center lg:flex-row h-full">
              <div className=" flex items-center px-10 py-5">
                <Box className="bg-white shadow-2xl rounded-2xl px-3 py-5 h-fit flex flex-col items-center justify-center sm:justify-center gap-3">
                <div className="flex gap-4 items-baseline">
                  <FaTrophy className="text-6xl lg:text-7xl" />
                  <FaTrophy className="text-7xl lg:text-8xl" />
                  <FaTrophy className="text-6xl lg:text-7xl" />
                </div>
                <p className="sm:mb-3 font-bold leading-snug text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-tight sm:leading-tight md:leading-tight lg:leading-tight">
                  Solo las mejores marcas.
                </p>
                <p className="md:text-lg lg:text-xl font-medium italic">
                  Nuestro compromiso con la calidad nos lleva a utilizar
                  exclusivamente las mejores marcas en todos nuestros
                  tratamientos y servicios para garantizar resultados
                  excepcionales y satisfacción total para nuestros clientes.
                  Desde tratamientos faciales hasta masajes y cuidado de la
                  piel, puedes confiar en que nuestras marcas premium te
                  brindarán resultados efectivos y duraderos.
                  <span className="hidden sm:inline-block">
                  Ven y asegúrate de
                  recibir los beneficios y la excelencia de las mejores marcas,
                  que respaldan nuestra misión de realzar tu belleza y
                  bienestar.
                  </span>
                </p>
                <div className="flex flex-wrap items-center justify-center servicios__img-container">
                  <img loading="lazy" src={Mesoestetic} className="mesoestetic w-1/3 max-w-[200px]" />
                  <img loading="lazy" src={Massada} className="massada w-1/3 max-w-[200px]" />
                  <img loading="lazy" src={Utsukusi} className="utsukusy w-1/3 max-w-[200px]" />
                </div>
                </Box>
                
              </div>
            </div>
          </div>
          <div className="servicios__servicio servicios__servicio--3  h-full">
            <div className="flex flex-col lg:flex-row h-full">
              <div className="hidden sm:block order-0 h-3/6 lg:h-full lg:w-5/12 xl:w-5/12">
                <img
                  loading="lazy"
                  src={Aromaterapia}
                  className="object-cover rounded-[100%] h-full w-full"
                />
              </div>
              <div className="h-full flex flex-col items-center justify-center gap-2 px-10 py-5 h-3/6 lg:w-7/12 xl:w-7/12">
              <Box className="bg-white shadow-2xl rounded-2xl px-3 py-5 h-fit flex flex-col items-center justify-center sm:justify-center gap-3">
                <div className="flex gap-4 items-center">
                  <FaSpa className="text-6xl md:text-7xl lg:text-8xl" />
                  <FaHeartbeat className="text-6xl md:text-7xl lg:text-8xl" />
                </div>

                <p className="mb-3 font-bold text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-tight sm:leading-tight md:leading-tight lg:leading-tight">
                  Terapias de bienestar holísticas.
                </p>
                <p className="md:text-lg lg:text-xl font-medium italic">
                  Te invitamos a experimentar nuestras terapias de bienestar
                  holísticas para alcanzar una armonía total de cuerpo y mente.
                  Sumérgete en un ambiente tranquilo y renueva tu ser con
                  nuestras terapias holísticas. ¡Reserva tu cita ahora y
                  descubre una sensación de paz y vitalidad en MarinaSpá!
                </p>
                </Box>
              </div>
            </div>
          </div>

          
        </div>
      </div>
    </div>
  );
};

export default Servicios;
