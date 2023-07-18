import React, { useEffect, useRef, useLayoutEffect } from "react";
import FotoMari from "../assets/images/header-background.JPG";
import FotoTargeta from "../assets/images/cara.jpg";
import Diagnostico from "../assets/images/diagnostico.JPG";
import { AiOutlineArrowDown } from "react-icons/ai";
import Facial from "../assets/images/facial.jpg";
import { FaFacebook, FaInstagram } from "react-icons/fa";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import { Navigation } from "swiper";

//fotos
import AntiAgingPicture from "../assets/images/anti-aging.jpg";
import FacialPicture from "../assets/images/programas-faciales-background.jpg";
import hidromasajePicture from "../assets/images/hidromasaje.jpg";
import fotodepilacionPicture from "../assets/images/fotodepilacion.jpg";

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
            <button className="main__social-icons">
              <FaFacebook />
            </button>
            <button className="main__social-icons">
              <FaInstagram />
            </button>
            <button className="main__social-icons">
              <FaInstagram />
            </button>
          </div>
          <button className="button button--grey">
            BOOK A FREE CONSULTATION
          </button>
        </div>
      </section>

      <section className="tratamientos">
        <h2>NUESTROS TRATAMIENTOS</h2>
        <p className="tratamientos__general-info">
          Tu belleza es el reflejo de tu mejor imagen que proyecta tu cuerpo
          cuando está en pleno equilibrio, nosotros trabajamos para que ese
          reflejo y equilibrio se perpetúen y se mantengan inalterables a pesar
          de los años y puedas lucir tu mejor yo durante toda la vida. Con la
          ayuda de nuestro equipo de profesionales y de nuestros tratamientos
          Corporales y Faciales conseguirás frenar y hasta revertir el
          envejecimiento de la piel o el deterioro y desgaste que sufrimos cada
          año, para que así puedas lucir siempre la mejor versión de ti a pesar
          del paso del tiempo. Ven a tu Centro de Estética en Sóller
        </p>
        <button className="button button--transparent">
          NUESTROS SERVICIOS <AiOutlineArrowDown />
        </button>
        <Swiper
          className="tratamientos__slider"
          spaceBetween={20}
          slidesPerView={3}
          navigation={true}
          pagination={{
            dynamicBullets: true,
          }}
          modules={[Pagination, Navigation]}
        >
          <SwiperSlide>
            <div className="tratamientos__item tratamientos__item--1">
              <img src={AntiAgingPicture} alt="" />
              <div className="tratamientos__text">
                <span>TRATAMIENTOS FACIALES</span>
                <p>
                  Nuestros tratamientos faciales están diseñados para
                  revitalizar tu piel y brindarte un cutis radiante. Desde
                  limpiezas faciales profundas hasta peelings químicos y
                  terapias de rejuvenecimiento, siempre utilizaremos técnicas
                  avanzadas y productos de calidad para satisfacer tus
                  necesidades. Experimenta una piel más suave, luminosa y
                  juvenil.
                </p>
                <a href="tratamientos-faciales" className="button">
                  SABER MÁS <AiOutlineArrowDown />
                </a>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="tratamientos__item tratamientos__item--2">
              <img src={FacialPicture} alt="" />
              <div className="tratamientos__text">
                <span>ESTÉTICA GENERAL</span>
                <p>
                  En MarinaSpá, nos dedicamos a realzar tu belleza y brindarte
                  una experiencia estética excepcional. Nuestros servicios van
                  más allá de la depilación y la silueta corporal. Te ofrecemos
                  una amplia gama de tratamientos faciales, cuidado de la piel,
                  maquillaje y más.
                </p>
                <a href="/estetica-general" className="button button--transparent">
                  SABER MÁS <AiOutlineArrowDown />
                </a>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="tratamientos__item tratamientos__item--3">
              <img src={FacialPicture} alt="" />
              <div className="tratamientos__text">
                <span>SILUETA CORPORAL</span>
                <p>
                  En MarinaSpá, te ayudamos a alcanzar la silueta corporal de
                  tus sueños. Nuestros tratamientos avanzados, como la
                  criolipólisis y la radiofrecuencia, te permiten esculpir tu
                  cuerpo de manera segura y efectiva. Nuestro equipo de expertos
                  estará contigo en cada paso del camino para lograr resultados
                  visibles. ¡Reserva tu consulta hoy mismo y comienza a
                  transformar tu figura!
                </p>
                <a href="silueta-corporal" className="button button--transparent">
                  SABER MÁS <AiOutlineArrowDown />
                </a>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="tratamientos__item tratamientos__item--4">
              <img src={hidromasajePicture} alt="" />
              <div className="tratamientos__text">
                <span>BIENESTAR Y RELAJACIÓN</span>
                <p>
                  En MarinaSpá, te ofrecemos una experiencia de bienestar y
                  relajación incomparable. Nuestros masajes terapéuticos y
                  hidromasajes revitalizantes te transportarán a un estado de
                  total relajación. Nuestro equipo de terapeutas altamente
                  capacitados personalizará cada sesión para satisfacer tus
                  necesidades individuales. Descubre un oasis de tranquilidad y
                  renueva tu cuerpo y mente en MarinaSpá. ¡Reserva tu momento de
                  relajación hoy mismo!
                </p>
                <a href="bienestar-y-relajacion" className="button button--transparent">
                  SABER MÁS <AiOutlineArrowDown />
                </a>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="tratamientos__item tratamientos__item--5">
              <img src={fotodepilacionPicture} alt="" />
              <div className="tratamientos__text">
                <span>DEPILACIÓN</span>
                <p>
                  Experimenta la suavidad duradera con nuestra depilación
                  profesional en MarinaSpá. Ya sea que elijas la depilación
                  láser o la cera tradicional, garantizamos una experiencia
                  cómoda y efectiva. ¡Agenda tu cita y disfruta de una piel
                  suave y sin vello!
                </p>
                <a href="depilacion" className="button button--transparent">
                  SABER MÁS <AiOutlineArrowDown />
                </a>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
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

      <section className="diagnostico">
        <div className="diagnostico__wrapper">
          <h4 className="diagnostico__title">
            Diagnóstico <br />
            <span className="diagnostico__title--2">MARINASPÁ</span>
          </h4>
          <p>
            La clave del éxito en cualquier tipo de tratamiento de belleza
            reside en un previo diagnostico exhaustivo y personalizado para cada
            cliente, sin duda ese es el pilar donde se construyen los cimientos
            del éxito. por eso antes de pasar al tratamiento nos gustaría
            conocer un poco mas de ti y que es lo que te hace única.
          </p>
          <a href="/contacto" className="button">Solicitar Diagnóstico</a>
        </div>
        <img src={Diagnostico} alt="" />
      </section>
    </main>
  );
};

export default Main;
