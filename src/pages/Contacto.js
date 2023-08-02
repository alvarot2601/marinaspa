import React from "react";
import Layout from "../components/Layout";
import {FaFacebook, FaInstagram} from 'react-icons/fa';

const Contacto = () => {

    return (
        <Layout>
            <main className="contacto">
                <section className="contacto__wrapper">
                    <h1>Contacta con nosotros</h1>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3125.6839768741593!2d-6.422279524360653!3d38.42566757182862!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd11559abd5e2c03%3A0x1ebb75f3df570647!2sC.%20Reyes%20Huertas%2C%208%2C%2006300%20Zafra%2C%20Badajoz!5e0!3m2!1ses!2ses!4v1683385227177!5m2!1ses!2ses"  allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    <h2>Reserva una cita</h2>
                    <p>Contacta con nuestro equipo de profesionales que te realizará un análisis completo para ayudarte a elegir el tratamiento facial o corporal más adecuado.</p>
                    <div className="contacto__info">
                        <div className="contacto__datos">
                            <p>Datos de Contacto</p>
                            <span>+34 644 79 90 00</span>
                            <span>Calle Reyes Huertas, 8, <br></br>06300 Zafra, Badajoz</span>
                            <div>
                                <a href="" target="_blank"><FaFacebook/></a>
                                <a href="" target="_blank"><FaInstagram/></a>
                            </div>
                        </div>
                        <div className="contacto__horario">
                            <p>Horarios</p>
                            <div>
                                <span>Lunes a Viernes</span>
                                <span>09:30 - 20:00</span>
                            </div>
                            <div>
                                <span>Sábado</span>
                                <span>09:30 - 20:00</span>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </Layout>
    );
}

export default Contacto;