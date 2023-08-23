import { React, useEffect, useRef } from "react";
import {
  FaSpa,
  FaPercent,
  FaTrophy,
} from "react-icons/fa";
import Mesoestetic from "../assets/images/logo-mesoestetic.svg";

import Massada from "../assets/images/massada.avif";
import Utsukusi from "../assets/images/utsukusy.png";
import Aromaterapia from "../assets/images/aromaterapia.jpg";
import ProgramaFidelizacion from "../assets/images/programa-fidelizacion.jpg";


import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import {
  Image,
} from "@nextui-org/react";


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
          markers: true,
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
    <div className={`${props.classProp}`}>
      <h3 className="text-6xl my-5">Nuestros servicios</h3>
      {
        //<p className="text-3xl my-5 ">¿Qué nos diferencia del resto?</p>
      }

      <div className="servicios__wrapper h-screen">
        <div className="servicios__subwrapper h-full">


          <div className="servicios__servicio servicios__servicio--1 h-full">
            <div className="flex flex-row h-full">
              <div className="h-full w-5/12">
                <Image
                  src={Aromaterapia}
                  className="object-cover rounded-none"
                />
              </div>
              <div className="w-7/12 flex flex-col items-center justify-center gap-5 p-10">
                <FaSpa className="text-8xl" />
                <p className="flex justify-center items-center text-6xl mx-auto font-bold underline underline-offset-8 decoration-2 leading-snug">
                  Terapias de bienestar holísticas
                </p>
                <p className="text-xl font-medium italic">
                  Te invitamos a experimentar nuestras terapias de bienestar
                  holísticas para alcanzar una armonía total de cuerpo y mente.
                  Nos enfocamos en equilibrar tus energías y mejorar tu
                  bienestar general. Sumérgete en un ambiente tranquilo y
                  renueva tu ser con nuestras terapias holísticas. ¡Reserva tu
                  cita ahora y descubre una sensación de paz y vitalidad en
                  MarinaSpá!
                </p>
              </div>
            </div>
          </div>

          <div className="servicios__servicio servicios__servicio--2 h-full">
            <div className="flex flex-row h-full">
              <div className="h-full w-5/12 order-1">
                <Image
                  src={ProgramaFidelizacion}
                  className="object-cover rounded-none"
                />
              </div>
              <div className="w-7/12 flex flex-col items-center justify-center gap-5  p-10">
                <FaPercent className="text-8xl" />
                <p className="flex justify-center items-center text-6xl mx-auto font-bold underline underline-offset-8 decoration-2 leading-snug">
                  Programas de fidelización y ofertas.
                </p>
                <p className="text-xl font-medium italic">
                  ¡En MarinaSpá, valoramos a nuestros clientes y queremos
                  recompensar su lealtad! Nuestros exclusivos Programas de
                  Fidelización están diseñados para brindarte ventajas
                  especiales y descuentos en cada visita. Acumula puntos por
                  cada servicio que disfrutes y canjéalos por tratamientos
                  gratuitos y productos de primera calidad. Además de nuestros
                  programas de fidelización, ofrecemos irresistibles ofertas en
                  una amplia gama de servicios estéticos. Desde descuentos en
                  tratamientos faciales hasta promociones en masajes y
                  depilación, siempre encontrarás oportunidades para cuidar de
                  ti a precios increíbles.
                </p>
              </div>
            </div>
          </div>

          <div className="servicios__servicio servicios__servicio--3 h-full ">
            <div className="flex flex-row h-full">
              
              <div className=" flex flex-col items-center justify-center gap-5 p-10">
                <FaTrophy className="text-8xl" />
                <p className="flex justify-center items-center text-6xl mx-auto font-bold underline underline-offset-8 decoration-2 leading-snug">
                  Solo las mejores marcas.
                </p>
                <p className="text-xl font-medium italic">
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
                <div className="flex items-center justify-center">
                  <img src={Mesoestetic} className="mesoestetic"/>

                  <img src={Massada} className="massada" />
                  <img src={Utsukusi} className="utsukusy" />
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
