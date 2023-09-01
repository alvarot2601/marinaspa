import { React, useEffect, useRef } from "react";
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


const Servicios = (props) => {
  gsap.registerPlugin(ScrollTrigger);
  const ref = useRef(null);
  let sections = gsap.utils.toArray(".servicios__servicio");
  useEffect(() => {
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
  });
  return (
    <div className={`${props.classProp} text-center overflow-hidden `}>
      <h3 className="p-5 text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold bg-gradient-to-t lg:bg-gradient-to-r  from-zinc-100">
        NUESTROS SERVICIOS
      </h3>
      {
        //<p className="text-3xl my-5 ">¿Qué nos diferencia del resto?</p>
      }
      <div className="servicios__wrapper h-screen">
        <div className="servicios__subwrapper h-full">

          <div className="servicios__servicio bg-gradient-to-b lg:bg-gradient-to-r  from-zinc-100 h-full">
            <div className="flex flex-col lg:flex-row h-full">
              <div className="order-1 h-3/6 lg:h-full w-full lg:w-5/12 xl:w-5/12">
                <img
                  src={ShakeHands}
                  className="object-cover rounded-none h-full w-full "
                />
              </div>
              <div className="h-3/6 lg:h-full flex flex-col items-center justify-center gap-2 px-5 lg:px-10 pb-4 pt-2 lg:py-5 h-3/6 lg:w-7/12 xl:w-7/12">
                <div>
                  <FaHandshake className="text-6xl md:text-7xl lg:text-8xl" />
                </div>
                <p className=" mb-3 font-bold underline underline-offset-4 decoration-2 text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-tight sm:leading-tight md:leading-tight lg:leading-tight">
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
              </div>
            </div>
          </div>

          <div className="servicios__servicio h-full bg-rose-200 ">
            <div className="flex flex-col lg:flex-row h-full">
              <div className="order-1 h-3/6 lg:h-full lg:w-5/12 xl:w-5/12">
                <img
                  src={Aromaterapia}
                  className="object-cover rounded-none h-full w-full"
                />
              </div>
              <div className="h-full flex flex-col items-center justify-center gap-2 px-5 lg:px-10 pb-5 pt-4 lg:py-5 h-3/6 lg:w-7/12 xl:w-7/12">
                <div className="flex gap-4 items-center">
                  <FaSpa className="text-6xl md:text-7xl lg:text-8xl" />
                  <FaHeartbeat className="text-6xl md:text-7xl lg:text-8xl" />
                </div>

                <p className="mb-3 font-bold underline underline-offset-4 decoration-2 text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-tight sm:leading-tight md:leading-tight lg:leading-tight">
                  Terapias de bienestar holísticas.
                </p>
                <p className="md:text-lg lg:text-xl font-medium italic">
                  Te invitamos a experimentar nuestras terapias de bienestar
                  holísticas para alcanzar una armonía total de cuerpo y mente.
                  Sumérgete en un ambiente tranquilo y renueva tu ser con
                  nuestras terapias holísticas. ¡Reserva tu cita ahora y
                  descubre una sensación de paz y vitalidad en MarinaSpá!
                </p>
              </div>
            </div>
          </div>

          <div className="servicios__servicio h-full bg-gradient-to-l from-orange-200 to-rose-200">
            <div className="flex flex-col justify-center lg:flex-row h-full">
              <div className=" flex flex-col items-center justify-center gap-5 p-10">
                <div className="flex gap-4 items-baseline">
                  <FaTrophy className="text-6xl md:text-7xl lg:text-8xl" />
                  <FaTrophy className="text-7xl md:text-8xl lg:text-9xl" />
                  <FaTrophy className="text-6xl md:text-7xl lg:text-8xl" />
                </div>
                <p className="mb-3 font-bold underline underline-offset-4 decoration-2 leading-snug text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-tight sm:leading-tight md:leading-tight lg:leading-tight">
                  Solo las mejores marcas.
                </p>
                <p className="md:text-lg lg:text-xl font-medium italic">
                  Nuestro compromiso con la calidad nos lleva a utilizar
                  exclusivamente las mejores marcas en todos nuestros
                  tratamientos y servicios para garantizar resultados
                  excepcionales y satisfacción total para nuestros clientes.
                  Desde tratamientos faciales hasta masajes y cuidado de la
                  piel, puedes confiar en que nuestras marcas premium te
                  brindarán resultados efectivos y duraderos. Ven y asegúrate de
                  recibir los beneficios y la excelencia de las mejores marcas,
                  que respaldan nuestra misión de realzar tu belleza y
                  bienestar.
                </p>
                <div className="flex flex-wrap items-center justify-center">
                  <img src={Mesoestetic} className="mesoestetic w-1/3" />
                  <img src={Massada} className="massada w-1/3" />
                  <img src={Utsukusi} className="utsukusy w-1/3" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Servicios;
