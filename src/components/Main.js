import React, { useEffect, useRef, useLayoutEffect } from "react";
import FotoMari from "../assets/images/header-background.JPG";
import FotoTargeta from "../assets/images/cara.jpg";

import Facial from "../assets/images/facial.jpg";
import { FaFacebook, FaInstagram } from "react-icons/fa";





// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Main = () => {
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
    <main className="main" ref={comp}>
      <section className="first-section">
        <div className="main__background-rectangle main__background-rectangle--1"></div>
        <div className="main__background-rectangle main__background-rectangle--2"></div>
        <div className="main__background-rectangle main__background-rectangle--3"></div>
        <div className="main__background-rectangle main__background-rectangle--4"></div>
        <div className="main__background-rectangle main__background-rectangle--5"></div>
        <div className="main__background-rectangle main__background-rectangle--down main__background-rectangle--down--1"></div>
        <div className="main__background-rectangle main__background-rectangle--down main__background-rectangle--down--2"></div>
        <div className="main__background-rectangle main__background-rectangle--down main__background-rectangle--down--3"></div>
        <div className="main__background-rectangle main__background-rectangle--down main__background-rectangle--down--4"></div>
        <div className="main__background-rectangle main__background-rectangle--down main__background-rectangle--down--5"></div>

        <div className="main__first-section">
          <div className="main__image"></div>
          <div className="main__first-text">
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
              brindarán un ambiente relajante y acogedor, donde podrás
              desconectar del ajetreo diario y disfrutar de una experiencia de
              bienestar total. Ya sea que desees un facial revitalizante, un
              masaje relajante, un tratamiento de depilación láser de última
              generación o cualquier otro servicio de estética, estamos aquí
              para atender todas tus necesidades.
            </p>
            <p>
              En <span className="big_text">MarinaSpá</span>, utilizamos solo
              los productos y tecnologías más avanzados para asegurarnos de que
              cada visita sea una experiencia de lujo. Nos enorgullece ofrecer
              un enfoque personalizado para cada cliente, comprendiendo tus
              objetivos y necesidades individuales para brindarte los mejores
              resultados posibles.
            </p>
            <p>
              No esperes más para consentirte y cuidar de ti mismo/a en
              MarinaSpá. Contáctanos hoy mismo para reservar tu cita y descubre
              cómo podemos ayudarte a lucir y sentirte lo mejor posible. ¡Te
              esperamos con los brazos abiertos en MarinaSpá, tu oasis de
              belleza y bienestar!
            </p>
          </div>
        </div>
      </section>
      <section className="main__target-section">
        <div className="main__target">
          <img src={FotoTargeta} alt="" />
          <p>
            HOLA <br></br> <span className="main__myName">Me llamo Mari</span>
          </p>
          <p>
            Nulla sodales est sit amet dignissim feugiat. Donec diam ligula,
            volutpat eget vestibulum vel, condimentum consectetur mi. Phasellus
            ornare ullamcorper augue, et tristique elit iaculis non. Maecenas
            sed enim neque. Nulla sodales est sit amet dignissim feugiat. Donec
            diam ligula.
          </p>
          <div className="main__social-icons-container">
            <a className="main__social-icons">
              <FaFacebook />
            </a>
            <a className="main__social-icons">
              <FaInstagram />
            </a>
            <a className="main__social-icons">
              <FaInstagram />
            </a>
          </div>
          <a className="button button--grey">
            BOOK A FREE CONSULTATION
          </a>
        </div>
      </section>
      <section className="servicios">
        <div className="separator"></div>
        <h3>Nuestros servicios</h3>
        <span>¿Qué nos diferencia del resto?</span>

        <div id="wrapper">
          <div id="content">
            <div className="spacer"></div>
            <div className="accordions">
              <div className="accordion">
                <p className="title">Terapias de bienestar holísticas</p>
                <p className="text">
                  Te invitamos a experimentar nuestras terapias de bienestar
                  holísticas para alcanzar una armonía total de cuerpo y mente.
                  Nos enfocamos en equilibrar tus energías y mejorar tu
                  bienestar general. Sumérgete en un ambiente tranquilo y
                  renueva tu ser con nuestras terapias holísticas. ¡Reserva tu
                  cita ahora y descubre una sensación de paz y vitalidad en
                  MarinaSpá!
                </p>
              </div>
             
              <div className="accordion">
                <p className="title">Programas de fidelización y ofertas.</p>
                <p className="text">
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
              <div className="accordion">
                <p className="title">Solo las mejores marcas.</p>
                <p className="text">
                  Nuestro compromiso con la calidad nos lleva a utilizar
                  exclusivamente las mejores marcas en todos nuestros
                  tratamientos y servicios para garantizar
                  resultados excepcionales y satisfacción total para nuestros
                  clientes. Desde tratamientos faciales hasta masajes y cuidado
                  de la piel, puedes confiar en que nuestras marcas premium te
                  brindarán resultados efectivos y duraderos. Ven y asegúrate de
                  recibir los beneficios y la excelencia de las mejores marcas,
                  que respaldan nuestra misión de realzar tu belleza y
                  bienestar.
                </p>
              </div>
              <div className="accordion">
                <p className="title"> Servicios personalizados.</p>
                <div className="text">
                  <p>
                    Ofrecemos ofertas exclusivas y promociones especiales en
                    distintos servicios Y tratamientos a nuestros clientes más
                    fieles y recurrentes.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="separator separator--bottom"></div>
      </section>
    </main>
  );
};

export default Main;
