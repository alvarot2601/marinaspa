import React from 'react';
import FotoMari from "../assets/images/header-background.JPG";
import FotoTargeta from "../assets/images/cara.jpg";
import Facial from "../assets/images/facial.jpg";
import {FaFacebook, FaInstagram} from 'react-icons/fa';
import {AiFillInstagram} from 'react-icons/ai';

const Main = ()=> {
    return (
        <main className='main'>
            <section className='main__first-section'>
                <div className='main__background-rectangle'></div>
                <img src={FotoMari}/>
                <div>
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
                            <FaFacebook/>
                        </button>
                        <button className='main__social-icons'>
                            <FaInstagram/>
                        </button>
                        <button className='main__social-icons'>
                            <FaInstagram/>
                        </button>
                    </div>
                    <button className='button button--grey'>BOOK A FREE CONSULTATION</button>
                </div>
            </section>
            <section className="services">
                <h2>NUESTROS TRATAMIENTOS</h2>
                <p className='services__general-info'>
                    Tu belleza es el reflejo de tu mejor imagen que proyecta tu cuerpo cuando está en pleno equilibrio, nosotros trabajamos para que ese reflejo y equilibrio se perpetúen y se mantengan inalterables a pesar de los años y puedas lucir tu mejor yo durante toda la vida.
                    Con la ayuda de nuestro equipo de profesionales y de nuestros tratamientos Corporales y Faciales conseguirás frenar y hasta revertir el envejecimiento de la piel o el deterioro y desgaste que sufrimos cada año, para que así puedas lucir siempre la mejor versión de ti a pesar del paso del tiempo.
                    Ven a tu Centro de Estética en Sóller
                </p>
                <div className='services__container'>
                    <div className='services__item'>
                        <img src={Facial} alt="" />
                        <div className='services__info'>
                            <span>FACIAL</span>
                            <p>
                                Dime como sientes tu piel y te diré cómo cuidarla <br />
                                ¿Qué aspectos o partes de tu piel o tu cuerpo te gustaría mejorar, cuidar y mimar más?
                            </p>
                            <button className='button'>
                                SABER MÁS
                            </button>
                        </div> 
                    </div>
                    <div className='services__item'>
                        <img src={Facial} alt="" />
                        <div className='services__info'>
                            <span>FACIAL</span>
                            <p>
                                Dime como sientes tu piel y te diré cómo cuidarla <br />
                                ¿Qué aspectos o partes de tu piel o tu cuerpo te gustaría mejorar, cuidar y mimar más?
                            </p>
                            <button className='button'>
                                SABER MÁS
                            </button>
                        </div> 
                    </div>
                    <div className='services__item'>
                        <img src={Facial} alt="" />
                        <div className='services__info'>
                            <span>FACIAL</span>
                            <p>
                                Dime como sientes tu piel y te diré cómo cuidarla <br />
                                ¿Qué aspectos o partes de tu piel o tu cuerpo te gustaría mejorar, cuidar y mimar más?
                            </p>
                            <button className='button'>
                                SABER MÁS
                            </button>
                        </div> 
                    </div>
                    <div className='services__item'>
                        <img src={Facial} alt="" />
                        <div className='services__info'>
                            <span>FACIAL</span>
                            <p>
                                Dime como sientes tu piel y te diré cómo cuidarla <br />
                                ¿Qué aspectos o partes de tu piel o tu cuerpo te gustaría mejorar, cuidar y mimar más?
                            </p>
                            <button className='button'>
                                SABER MÁS
                            </button>
                        </div> 
                    </div>
                </div>
            </section>
        </main>
    );
}

export default Main;