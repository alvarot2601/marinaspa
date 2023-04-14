import React, { useEffect, useRef, useLayoutEffect } from 'react';
import FotoMari from "../assets/images/header-background.JPG";
import FotoTargeta from "../assets/images/cara.jpg";
import Diagnostico from "../assets/images/diagnostico.JPG";

import Facial from "../assets/images/facial.jpg";
import { FaFacebook, FaInstagram } from 'react-icons/fa';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from "swiper";
import { Navigation } from "swiper";

// Import Swiper styles
import 'swiper/css';
import "swiper/css/navigation";
import "swiper/css/pagination";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Main = () => {

    const comp = useRef();

    useLayoutEffect(() => {
  
        // create our context. This function is invoked immediately and all GSAP animations and ScrollTriggers created during the execution of this function get recorded so we can revert() them later (cleanup)
        let ctx = gsap.context(() => {
          
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: '.accordions',
                    pin: true,
                    start: 'top top',
                    end: 'bottom top',
                    scrub: 1,
                    ease: 'linear',
                  }
              })
              
              tl.to('.accordion .text', {
                height: 0,
                paddingBottom: 0,
                opacity: 0,
                stagger: .5,
              })
              tl.to('.accordion', {
                marginBottom: 1,
                stagger: .5,
              }, '<')
          
        }, comp); // <- IMPORTANT! Scopes selector text
        
        return () => ctx.revert(); // cleanup
        
      }, []);

    return (
        <main className='main' ref={comp} >
            <section className='main__first-section'>
                <div className='main__background-rectangle'></div>
                <div className='main__background-rectangle main__background-rectangle--2'></div>
                <img src={FotoMari} />
                <div className='main__first-text'>
                    <h1>
                        1 on 1 Personal Styling & Coaching
                    </h1>
                    <p>
                        Nulla porttitor accumsan tincidunt. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.
                    </p>
                    <p>
                        Cras ultricies ligula sed magna dictum porta. Curabitur aliquet quam id dui posuere blandit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Curabitur arcu erat, id imperdiet et, porttitor at sem. Nulla porttitor accumsan tincidunt. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Curabitur non nulla sit amet nisl convallis quis ac lectus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, sit amet ligula. Mauris blandit aliquet elit
                    </p>
                </div>
            </section>
            <section className='main__target-section'>
                <div className="main__target">
                    <img src={FotoTargeta} alt="" />
                    <p>HOLA <br></br> <span className='main__myName'>Me llamo Mari</span></p>
                    <p>
                        Nulla sodales est sit amet dignissim feugiat. Donec diam ligula, volutpat eget vestibulum vel, condimentum consectetur mi. Phasellus ornare ullamcorper augue, et tristique elit iaculis non. Maecenas sed enim neque. Nulla sodales est sit amet dignissim feugiat. Donec diam ligula.
                    </p>
                    <div className='main__social-icons-container'>
                        <button className='main__social-icons'>
                            <FaFacebook />
                        </button>
                        <button className='main__social-icons'>
                            <FaInstagram />
                        </button>
                        <button className='main__social-icons'>
                            <FaInstagram />
                        </button>
                    </div>
                    <button className='button button--grey'>BOOK A FREE CONSULTATION</button>
                </div>
            </section>

            <section className="tratamientos">
                <h2>NUESTROS TRATAMIENTOS</h2>
                <p className='tratamientos__general-info'>
                    Tu belleza es el reflejo de tu mejor imagen que proyecta tu cuerpo cuando está en pleno equilibrio, nosotros trabajamos para que ese reflejo y equilibrio se perpetúen y se mantengan inalterables a pesar de los años y puedas lucir tu mejor yo durante toda la vida.
                    Con la ayuda de nuestro equipo de profesionales y de nuestros tratamientos Corporales y Faciales conseguirás frenar y hasta revertir el envejecimiento de la piel o el deterioro y desgaste que sufrimos cada año, para que así puedas lucir siempre la mejor versión de ti a pesar del paso del tiempo.
                    Ven a tu Centro de Estética en Sóller
                </p>
                <button className='button'>
                    NUESTROS SERVICIOS
                </button>
                <Swiper
                    className='tratamientos__slider'
                    spaceBetween={20}
                    slidesPerView={3}
                    navigation={true}
                    pagination={{
                        dynamicBullets: true,
                    }}
                    modules={[Pagination, Navigation]}
                >
                    <SwiperSlide>
                        <div className='tratamientos__item tratamientos__item--1'>
                            <img src={Facial} alt="" />
                            <div className='tratamientos__info'>
                                <span>FACIAL</span>
                                <p>
                                    Dime como sientes tu piel y te diré cómo cuidarla <br />
                                    ¿Qué aspectos o partes de tu piel o tu cuerpo te gustaría mejorar, cuidar y mimar más?
                                </p>
                                <button className='button button--malva'>
                                    SABER MÁS
                                </button>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='tratamientos__item tratamientos__item--2'>
                            <img src={Facial} alt="" />
                            <div className='tratamientos__info'>
                                <span>FACIAL</span>
                                <p>
                                    Dime como sientes tu piel y te diré cómo cuidarla <br />
                                    ¿Qué aspectos o partes de tu piel o tu cuerpo te gustaría mejorar, cuidar y mimar más?
                                </p>
                                <button className='button button--malva'>
                                    SABER MÁS
                                </button>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='tratamientos__item tratamientos__item--3'>
                            <img src={Facial} alt="" />
                            <div className='tratamientos__info'>
                                <span>FACIAL</span>
                                <p>
                                    Dime como sientes tu piel y te diré cómo cuidarla <br />
                                    ¿Qué aspectos o partes de tu piel o tu cuerpo te gustaría mejorar, cuidar y mimar más?
                                </p>
                                <button className='button button--malva'>
                                    SABER MÁS
                                </button>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='tratamientos__item tratamientos__item--4'>
                            <img src={Facial} alt="" />
                            <div className='tratamientos__info'>
                                <span>FACIAL</span>
                                <p>
                                    Dime como sientes tu piel y te diré cómo cuidarla <br />
                                    ¿Qué aspectos o partes de tu piel o tu cuerpo te gustaría mejorar, cuidar y mimar más?
                                </p>
                                <button className='button button--malva'>
                                    SABER MÁS
                                </button>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='tratamientos__item tratamientos__item--5'>
                            <img src={Facial} alt="" />
                            <div className='tratamientos__info'>
                                <span>FACIAL</span>
                                <p>
                                    Dime como sientes tu piel y te diré cómo cuidarla <br />
                                    ¿Qué aspectos o partes de tu piel o tu cuerpo te gustaría mejorar, cuidar y mimar más?
                                </p>
                                <button className='button button--malva'>
                                    SABER MÁS
                                </button>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </section>
            <section className="servicios">
                <h3>Nuestros servicios</h3>
                <span>Qué ofrecemos?</span>
                
                <div id="wrapper">
                    <div id="content">
                        <div className="spacer"></div>
                        <div className="accordions">
                            <div className="accordion">
                                <div className="title">
                                    Servicios personalizados.
                                </div>
                                <div className="text">
                                En MarinaSpá ofrecemos tratamientos (faciales, corporales, relajantes...) con la tecnología más avanzada del mercado.
                                </div>
                            </div>
                            <div className="accordion">
                                <div className="title"> Servicios personalizados.</div>
                                <div className="text">
                                Ofrecemos ofertas exclusivas y promociones especiales en distintos servicios Y tratamientos a nuestros clientes más fieles y recurrentes.
                                </div>
                            </div>
                            <div className="accordion">
                                <div className="title">Programas de fidelización y ofertas.</div>
                                <div className="text">
                                Ofrecemos ofertas exclusivas y promociones especiales en distintos servicios a nuestros clientes más fieles y recurrentes.
                                </div>
                            </div>
                            <div className="accordion">
                                <div className="title">Solo las mejores marcas.</div>
                                <div className="text">En MarinaSpá únicamente trabajamos con las mejores marcas, sí o sí notarás la diferencia.</div>
                            </div>
                        </div>
                        <div className="spacer"></div>
                    </div>
                </div>
            </section>
            <section className="diagnostico">
                <div>
                    <h4 className='diagnostico__title'>Diagnóstico <br /><span className='diagnostico__title--2'>MARINASPÁ</span></h4>
                    <p>
                        La clave del éxito en cualquier tipo de tratamiento de belleza reside en un previo diagnostico exhaustivo y personalizado para cada cliente, sin duda ese es el pilar donde se construyen los cimientos del éxito.
                        por eso antes de pasar al tratamiento nos gustaría conocer un poco mas de ti y que es lo que te hace única.
                    </p>
                    <button className='button'>Solicitar Diagnóstico</button>
                </div>
                <img src={Diagnostico} alt="" />
            </section>
        </main>
    );
    
}

export default Main;