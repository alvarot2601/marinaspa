import React, { useEffect, useRef, useLayoutEffect } from "react";
import FotoMari from "../assets/images/header-background.JPG";
import FotoTargeta from "../assets/images/cara.jpg";
import Massada from "../assets/images/massada.avif";
import Utsukusi from "../assets/images/utsukusy.png";
import Facial from "../assets/images/facial.jpg";
import { FaFacebook, FaInstagram, FaFire, FaSpa, FaPercent, FaTrophy } from "react-icons/fa";
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
          <a className="button button--grey">BOOK A FREE CONSULTATION</a>
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
                <p className="title"><FaSpa/>  Terapias de bienestar holísticas <FaSpa/></p>
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
                <p className="title"><FaPercent/> Programas de fidelización y ofertas. <FaPercent/></p>
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
                <p className="title"><FaTrophy/> Solo las mejores marcas. <FaTrophy/></p>
                
                <p className="text">
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
                <div className="logos-marcas">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="159"
                    height="73"
                    viewBox="0 0 159 73"
                  >
                    <g>
                      <g>
                        <g>
                          <path d="M85.23 27.496h-.86v-1.32h.86V24.73h1.847v1.448h1.41v1.32h-1.41v3.227c0 .525.243.794.743.794.27 0 .502-.038.706-.128v1.435a3.39 3.39 0 0 1-1.13.179c-1.423 0-2.167-.717-2.167-2.113zm6.569-4.358v4.104c.347-.667 1.053-1.218 2.181-1.218.667 0 1.219.206 1.629.616.397.423.628 1.09.628 1.975v4.27h-1.86v-4.001c0-.923-.357-1.346-1.179-1.346-.809 0-1.399.487-1.399 1.475v3.873H89.94v-9.748zm5.777 6.482v-.102c0-1.066.372-1.927 1-2.543.617-.605 1.476-.95 2.448-.95.874 0 1.681.256 2.284.808.604.553.988 1.413.988 2.608v.513H99.46c.052 1.13.642 1.76 1.67 1.76.87 0 1.28-.373 1.396-.938h1.757c-.217 1.452-1.358 2.26-3.206 2.26-1.013 0-1.884-.308-2.5-.911-.629-.579-1-1.425-1-2.505zm1.912-.812h3c-.064-1.027-.576-1.502-1.464-1.502-.831 0-1.397.54-1.536 1.502zm8.624.812v-.102c0-1.066.372-1.927 1-2.543.617-.605 1.475-.95 2.449-.95.873 0 1.68.256 2.283.808.603.553.988 1.413.988 2.608v.513h-4.835c.052 1.13.64 1.76 1.668 1.76.871 0 1.281-.373 1.397-.938h1.757c-.217 1.452-1.358 2.26-3.206 2.26-1.014 0-1.884-.308-2.501-.911-.628-.579-1-1.425-1-2.505zm1.912-.812h3c-.064-1.027-.577-1.502-1.463-1.502-.832 0-1.398.54-1.537 1.502zm6.236-5.67h1.846v9.748h-1.846zm3.285 6.482v-.102c0-1.066.372-1.927 1-2.543.617-.605 1.476-.95 2.45-.95.872 0 1.68.256 2.283.808.602.553.988 1.413.988 2.608v.513h-4.836c.052 1.13.642 1.76 1.67 1.76.869 0 1.28-.373 1.396-.938h1.757c-.219 1.452-1.358 2.26-3.206 2.26-1.014 0-1.885-.308-2.502-.911-.628-.579-1-1.425-1-2.505zm1.911-.812h3c-.063-1.027-.576-1.502-1.461-1.502-.833 0-1.397.54-1.539 1.502zm8.046-2.63v1.028c.346-.63 1.038-1.182 2.051-1.182.884 0 1.55.36 1.873 1.169.551-.823 1.397-1.169 2.256-1.169.617 0 1.168.193 1.579.604.397.424.628 1.079.628 1.965v4.303h-1.846v-4.098c0-.873-.385-1.246-1.052-1.246-.719 0-1.295.45-1.295 1.375v3.969h-1.848v-4.098c0-.873-.397-1.246-1.052-1.246-.716 0-1.294.45-1.294 1.375v3.969h-1.86v-6.717zm9.728 3.442v-.102c0-1.066.371-1.927 1-2.543.616-.605 1.476-.95 2.449-.95.873 0 1.68.256 2.283.808.603.553.989 1.413.989 2.608v.513h-4.837c.052 1.13.64 1.76 1.669 1.76.87 0 1.281-.373 1.396-.938h1.758c-.218 1.452-1.359 2.26-3.207 2.26-1.012 0-1.884-.308-2.5-.911-.629-.579-1-1.425-1-2.505zm1.911-.812h3c-.064-1.027-.576-1.502-1.462-1.502-.833 0-1.397.54-1.538 1.502zm8.043-2.63v1.066c.346-.668 1.05-1.22 2.178-1.22.666 0 1.216.206 1.626.617.396.424.626 1.091.626 1.977v4.278h-1.856v-4.008c0-.925-.358-1.348-1.177-1.348-.808 0-1.397.488-1.397 1.477v3.879h-1.856v-6.717zm6.47 1.318h-.857v-1.32h.857V24.73h1.843v1.448h1.407v1.32h-1.407v3.227c0 .525.242.794.742.794.269 0 .5-.038.704-.128v1.435a3.37 3.37 0 0 1-1.127.179c-1.42 0-2.162-.717-2.162-2.113zM84.37 42.897v-1.32h.886v-.77c0-1.578.897-2.347 2.397-2.347.399 0 .669.038.964.129v1.397a2.11 2.11 0 0 0-.68-.115c-.604 0-.835.37-.835.886v.82h1.463v1.32h-1.463v5.388h-1.846v-5.388zm4.826 2.11v-.103c0-1.042.385-1.928 1.013-2.531.627-.604 1.51-.95 2.522-.95 1.012 0 1.895.334 2.523.938.615.602 1 1.463 1 2.505v.102c0 1.065-.385 1.926-1.012 2.53-.628.604-1.513.937-2.524.937-1.012 0-1.882-.333-2.51-.937-.627-.578-1.012-1.451-1.012-2.492zm5.19-.121c0-1.284-.603-2.053-1.645-2.053-1.03 0-1.647.744-1.647 2.028v.102c0 1.281.58 2.052 1.647 2.052 1.042 0 1.646-.757 1.646-2.04zm5.138-3.309v1.282c.424-.91 1.077-1.372 2.167-1.386v1.733c-1.384-.014-2.167.435-2.167 1.718v3.36h-1.86v-6.707zm7.637 4.61c.089.605.36.952 1.18.952.72 0 1.052-.27 1.052-.733 0-.462-.386-.655-1.36-.795-.885-.143-1.5-.334-1.898-.656-.41-.321-.576-.784-.576-1.438 0-.706.32-1.221.821-1.58.473-.348 1.154-.514 1.832-.514.732 0 1.385.141 1.886.461.474.323.797.85.885 1.62h-1.706c-.102-.553-.396-.81-1.051-.81-.603 0-.948.283-.948.694 0 .424.32.59 1.294.73.833.117 1.488.298 1.937.605.424.322.667.783.667 1.503 0 1.45-1.039 2.21-2.821 2.21-1.81 0-2.862-.798-2.925-2.249zm7.211-7.65v5.869l2.154-2.832h1.974l-2.434 3.05 2.628 3.65h-2.102l-2.22-3.164v3.165h-1.86v-9.738zm6.378.102c.603 0 1.065.438 1.065 1.014 0 .578-.462 1.013-1.065 1.013-.604 0-1.052-.435-1.052-1.013 0-.576.448-1.014 1.052-1.014zm-.91 2.938h1.846v6.698h-1.846zm5.564 0v1.064c.346-.667 1.05-1.218 2.178-1.218.665 0 1.216.205 1.624.615.398.424.628 1.09.628 1.975v4.272h-1.856v-4.002c0-.923-.358-1.347-1.177-1.347-.809 0-1.397.488-1.397 1.476v3.873h-1.857v-6.708zm5.78 3.441v-.102c0-1.079.385-1.953 1.012-2.568.63-.604 1.488-.925 2.45-.925.77 0 1.526.166 2.104.577.565.411.962 1.067 1.052 2.03h-1.757c-.117-.77-.579-1.144-1.361-1.144-.975 0-1.603.72-1.603 2.005v.102c0 1.349.603 2.042 1.642 2.042.757 0 1.347-.423 1.438-1.297h1.679c-.052.81-.36 1.478-.912 1.939-.55.477-1.32.758-2.296.758-.973 0-1.845-.308-2.462-.885-.615-.579-.986-1.44-.986-2.532zm7.546 1.414c0-.783.36-1.323.976-1.67.615-.346 1.488-.489 2.513-.489h.756v-.268c0-.81-.23-1.233-1.09-1.233-.73 0-1.052.373-1.14.95h-1.758c.05-.784.41-1.374.937-1.747.525-.372 1.256-.552 2.076-.552.82 0 1.512.166 2.027.566.5.397.783 1.013.783 1.925v4.38H143v-.81c-.396.554-.96.951-2.026.951-.615 0-1.166-.154-1.577-.474-.41-.323-.667-.822-.667-1.529zm4.245-1.059h-.718c-1.077 0-1.706.232-1.706.948 0 .501.295.81.976.81.82 0 1.448-.438 1.448-1.193zm5.437-3.796v1.282c.423-.91 1.074-1.372 2.162-1.386v1.733c-1.381-.014-2.162.435-2.162 1.718v3.36h-1.855v-6.707zm3.009 3.441v-.102c0-1.065.372-1.926 1-2.543.616-.604 1.476-.95 2.448-.95.874 0 1.68.257 2.284.81.603.55.989 1.411.989 2.606v.513h-4.837c.052 1.13.642 1.76 1.669 1.76.871 0 1.28-.373 1.397-.938h1.757c-.218 1.453-1.358 2.261-3.207 2.261-1.013 0-1.884-.308-2.5-.913-.628-.576-1-1.423-1-2.504zm1.912-.802h3c-.064-1.032-.576-1.511-1.464-1.511-.832 0-1.396.543-1.536 1.51zM84.537 59.842v-.102c0-1.064.372-1.923 1-2.54.616-.603 1.477-.948 2.45-.948.873 0 1.679.256 2.282.808.604.55.99 1.41.99 2.602v.513h-4.837c.052 1.13.64 1.757 1.668 1.757.872 0 1.282-.371 1.397-.936h1.757c-.217 1.451-1.358 2.258-3.205 2.258-1.014 0-1.886-.308-2.502-.912-.628-.575-1-1.422-1-2.5zm1.912-.808h3c-.064-1.025-.577-1.5-1.463-1.5-.833 0-1.397.539-1.537 1.5zm5.415-2.628h2.13l1.257 2.01 1.231-2.01h1.925l-2.143 3.136 2.36 3.561h-2.142l-1.41-2.254-1.45 2.254H91.71l2.297-3.418zm9.829 0v1.05c.373-.653 1.154-1.204 2.144-1.204.82 0 1.55.307 2.077.884.525.577.845 1.436.845 2.554v.101c0 1.116-.32 1.976-.832 2.551-.526.604-1.258.912-2.09.912-1.04 0-1.796-.512-2.144-1.168v3.311h-1.859v-8.991zm3.172 3.295c0-1.372-.665-2.025-1.599-2.025-.971 0-1.636.678-1.636 2.025v.102c0 1.347.626 2.002 1.648 2.002 1.024 0 1.587-.68 1.587-2.002zm2.887.14v-.101c0-1.064.371-1.923 1-2.54.616-.603 1.476-.948 2.449-.948.872 0 1.68.256 2.283.808.603.55.989 1.41.989 2.602v.513h-4.837c.052 1.13.642 1.757 1.669 1.757.87 0 1.28-.371 1.397-.936h1.757c-.218 1.451-1.36 2.258-3.207 2.258-1.013 0-1.884-.308-2.5-.912-.629-.575-1-1.422-1-2.5zm1.911-.807h3c-.063-1.025-.576-1.5-1.462-1.5-.833 0-1.397.539-1.538 1.5zm8.046-2.628v1.282c.424-.91 1.077-1.373 2.167-1.386v1.732c-1.384-.013-2.167.436-2.167 1.72v3.36h-1.859v-6.708zm3.887 1.317h-.857v-1.319h.857v-1.449h1.843v1.45h1.407v1.318h-1.407v3.23c0 .523.242.792.741.792.27 0 .5-.039.705-.127v1.434c-.257.09-.628.178-1.127.178-1.42 0-2.162-.715-2.162-2.113zm6.02 3.286c.089.603.36.95 1.18.95.72 0 1.052-.27 1.052-.732 0-.46-.385-.653-1.36-.794-.885-.142-1.5-.333-1.898-.655-.41-.32-.577-.782-.577-1.436 0-.704.32-1.219.822-1.577.474-.347 1.154-.513 1.832-.513.732 0 1.385.14 1.886.46.474.323.795.849.884 1.617h-1.705c-.102-.55-.396-.807-1.052-.807-.602 0-.948.281-.948.692 0 .423.32.59 1.295.73.832.115 1.488.296 1.937.603.424.322.667.782.667 1.501 0 1.449-1.04 2.206-2.821 2.206-1.81 0-2.862-.796-2.925-2.245zM9.45 23.733h7.459l5.82 15.51 5.752-15.51h7.32v24.921h-5.612V31.157l-6.902 17.497H21.44l-6.936-17.497v17.497H9.45zm28.614 15.754c0-5.75 4.08-9.48 9.382-9.48 4.708 0 8.893 2.753 8.893 9.27v1.395H43.19c.14 3.033 1.778 4.775 4.533 4.775 2.337 0 3.488-1.01 3.801-2.544h4.778c-.593 3.939-3.731 6.134-8.718 6.134-5.51 0-9.52-3.45-9.52-9.271zm13.34-1.917c-.174-2.753-1.566-4.078-3.968-4.078-2.263 0-3.795 1.499-4.178 4.078zM9.73 58.02h1.402v.774c.25-.474.791-.89 1.545-.89.667 0 1.17.28 1.411.88.406-.609 1.063-.88 1.7-.88.938 0 1.663.59 1.663 1.933v3.237H16.06v-3.082c0-.648-.29-.937-.792-.937-.541 0-.976.347-.976 1.033v2.986H12.9v-3.082c0-.648-.299-.937-.792-.937-.541 0-.975.347-.975 1.033v2.986H9.73zm8.474 2.513c0-1.594 1.133-2.628 2.605-2.628 1.307 0 2.469.763 2.469 2.57v.387h-3.65c.038.84.494 1.323 1.258 1.323.649 0 .968-.28 1.055-.705h1.327c-.164 1.092-1.036 1.7-2.42 1.7-1.53 0-2.644-.956-2.644-2.57zm3.711-.532c-.049-.763-.437-1.13-1.106-1.13-.63 0-1.058.415-1.164 1.13zm3.137 1.489c.058.453.28.714.889.714.541 0 .792-.203.792-.55 0-.348-.299-.493-1.024-.6-1.343-.202-1.865-.589-1.865-1.574 0-1.053.967-1.575 2-1.575 1.121 0 1.962.405 2.087 1.565h-1.285c-.076-.415-.309-.61-.791-.61-.455 0-.716.214-.716.523 0 .319.242.445.976.55 1.266.184 1.961.504 1.961 1.585 0 1.092-.792 1.663-2.125 1.663-1.363 0-2.155-.6-2.203-1.691zm3.472-.966c0-1.585 1.152-2.62 2.672-2.62 1.52 0 2.662 1.015 2.662 2.59v.078c0 1.594-1.152 2.609-2.672 2.609-1.51 0-2.662-1.006-2.662-2.58zm3.914-.01c0-.966-.456-1.546-1.242-1.546-.777 0-1.242.56-1.242 1.526v.078c0 .966.446 1.546 1.242 1.546.786 0 1.242-.58 1.242-1.537zm1.91.02c0-1.595 1.13-2.63 2.6-2.63 1.303 0 2.463.764 2.463 2.57v.388h-3.643c.038.84.493 1.323 1.256 1.323.647 0 .966-.28 1.053-.705h1.324c-.164 1.092-1.034 1.7-2.415 1.7-1.527 0-2.638-.956-2.638-2.57zm3.7-.533c-.048-.763-.434-1.13-1.1-1.13-.63 0-1.055.415-1.16 1.13zm3.147 1.489c.059.453.28.714.89.714.54 0 .792-.203.792-.55 0-.348-.3-.493-1.024-.6-1.344-.202-1.865-.589-1.865-1.574 0-1.053.966-1.575 2-1.575 1.121 0 1.962.405 2.086 1.565H42.79c-.078-.415-.31-.61-.792-.61-.455 0-.716.214-.716.523 0 .319.242.445.976.55 1.266.184 1.962.504 1.962 1.585 0 1.092-.793 1.663-2.126 1.663-1.363 0-2.155-.6-2.203-1.691zm3.954-2.474H44.5v-.995h.648v-1.093h1.39v1.093h1.063v.995H46.54v2.435c0 .405.203.599.56.599.213 0 .367-.03.532-.097v1.082a2.544 2.544 0 0 1-.85.135c-1.064 0-1.633-.54-1.633-1.593zm2.825 1.517c0-1.594 1.132-2.628 2.604-2.628 1.307 0 2.468.763 2.468 2.57v.387h-3.65c.039.84.494 1.323 1.259 1.323.649 0 .969-.28 1.056-.705h1.326c-.165 1.092-1.036 1.7-2.42 1.7-1.53 0-2.643-.956-2.643-2.57zm3.7-.532c-.049-.763-.435-1.13-1.101-1.13-.629 0-1.054.415-1.16 1.13zm2.279-.985h-.648v-.995h.648v-1.093h1.39v1.093h1.064v.995h-1.063v2.435c0 .405.203.599.56.599.213 0 .367-.03.531-.097v1.082a2.54 2.54 0 0 1-.85.135c-1.062 0-1.632-.54-1.632-1.593zm3.909-3.208c.455 0 .802.326.802.758s-.347.758-.802.758c-.444 0-.792-.326-.792-.758s.348-.758.792-.758zm-.686 2.213h1.391v5.053h-1.391zm2.16 2.512c0-1.633 1.168-2.628 2.608-2.628 1.17 0 2.25.512 2.377 1.961h-1.324c-.096-.59-.454-.86-1.024-.86-.725 0-1.208.542-1.208 1.508v.077c0 1.015.454 1.536 1.237 1.536.56 0 1.014-.328 1.082-.976h1.266c-.077 1.198-.947 2.03-2.415 2.03-1.48 0-2.6-.919-2.6-2.57zm-4.92-48.73c-.628-.261-1.005-.744-1.005-1.44 0-1.199 1.15-1.884 2.444-1.884 1.325 0 2.426.696 2.426 1.874 0 .696-.396 1.17-1.005 1.44.812.28 1.266.88 1.266 1.7 0 1.353-1.16 2.098-2.696 2.098-1.527 0-2.706-.706-2.706-2.059 0-.84.484-1.45 1.276-1.73zm1.44.521c-.638 0-1.16.377-1.16 1.063 0 .687.512 1.063 1.15 1.063.657 0 1.15-.386 1.15-1.073 0-.676-.493-1.053-1.14-1.053zm0-2.754c-.55 0-.986.339-.986.899s.455.899.996.899c.56 0 .966-.338.966-.909 0-.53-.425-.889-.977-.889zm4.726 3.849c.086.58.318.965 1.111.965.705 0 1.082-.492 1.082-1.226 0-.742-.426-1.205-1.121-1.205-.648 0-1.044.231-1.324.55h-.87l.097-3.928h4.378v1.187h-3.209l-.029 1.727c.271-.328.754-.636 1.537-.636 1.256 0 2.116.858 2.116 2.325 0 1.466-1.054 2.403-2.648 2.403-1.7 0-2.493-.927-2.56-2.162zM0 0h72.708v72.708H0zm4.076 68.622h64.545V4.077H4.076zM77.514.001c1.356 0 2.395 1.048 2.395 2.352 0 1.324-1.06 2.351-2.395 2.351s-2.406-1.016-2.406-2.34c0-1.305 1.06-2.363 2.406-2.363zm0 .401c-1.134 0-1.95.805-1.95 1.961 0 1.165.858 1.94 1.95 1.94 1.101 0 1.95-.795 1.95-1.95 0-1.156-.817-1.95-1.95-1.95zm-.869.763h.901c.604 0 .943.245.943.732v.01c0 .34-.18.52-.424.625l.562.955h-.68l-.476-.838h-.17v.838h-.656zm.869 1.07c.223 0 .339-.097.339-.29v-.011c0-.194-.127-.27-.34-.27h-.212v.572z"></path>
                        </g>
                      </g>
                    </g>
                  </svg>
                  
                  <img src={Massada} className="massada"/>
                  <img src={Utsukusi} className="utsukusy"/>
                </div>
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
