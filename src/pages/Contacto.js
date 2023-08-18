import React from "react";
import Layout from "../components/Layout";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import {
  Card,
  CardBody,
  Image,
  Button,
  Progress,
  CardHeader,
} from "@nextui-org/react";
import { PhoneIcon } from "../components/Icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faMobile, faMapLocationDot, faShareNodes } from '@fortawesome/free-solid-svg-icons'

const Contacto = () => {
    

  return (
    <Layout>
      <main className="contacto">
        <section className="contacto__wrapper">
          <h2>Reserva una cita</h2>
          <p>
            Contacta con nuestro equipo de profesionales que te realizará un
            análisis completo para ayudarte a elegir el tratamiento facial o
            corporal más adecuado.
          </p>
          <Card
            isBlurred
            className="border-none bg-background/60 dark:bg-default-100/50 w-full]"
            shadow="sm"
          >
            <CardBody>
              <div className="grid grid-cols-6 lg:grid-cols-12 gap-6 md:gap-10 items-center justify-center">
                <div className="col-span-6 lg:col-span-6 ">
                  <iframe
                   className="w-full m-auto"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3125.6839768741593!2d-6.422279524360653!3d38.42566757182862!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd11559abd5e2c03%3A0x1ebb75f3df570647!2sC.%20Reyes%20Huertas%2C%208%2C%2006300%20Zafra%2C%20Badajoz!5e0!3m2!1ses!2ses!4v1683385227177!5m2!1ses!2ses"
                    allowFullScreen="true"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>

                <div className="flex flex-col col-span-6 lg:col-span-6">
                  <div className="flex lg:flex-col 2xl:flex-row lg:gap-8 justify-evenly">
                      <div className="flex flex-col gap-5 items-center font-bold">
                        <p className="text-4xl underline">Datos de Contacto</p>
                        <div className="flex gap-3 items-center justify-evenly w-7/12">
                            <FontAwesomeIcon icon={faMobile} shake/>
                            <span>+34 644 79 90 00</span>
                        </div>
                        <div className="flex gap-3 items-center justify-evenly w-7/12 ">
                            <FontAwesomeIcon icon={faMapLocationDot} shake/>
                            <span>
                            Calle Reyes Huertas, 8, <br></br>06300 Zafra, Badajoz
                            </span>
                        </div>
                        <div className="flex gap-5 justify-center">
                          <a href="" target="_blank">
                            <FaFacebook />
                          </a>
                          <a href="" target="_blank">
                            <FaInstagram />
                          </a>
                        </div>
                      </div>
                      <div className="flex flex-col gap-5 items-center font-bold">
                        <p className="text-4xl underline">Horarios</p>
                        <div className="flex flex-col items-center">
                          <span>Lunes a Viernes</span>
                          <span>09:30 - 20:00</span>
                        </div>
                        <div className="flex flex-col items-center">
                          <span>Sábado</span>
                          <span>09:30 - 20:00</span>
                        </div>
                      </div>
                  </div>
                </div>
              </div>
            </CardBody>
          </Card>
          <h1>Contacta con nosotros</h1>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3125.6839768741593!2d-6.422279524360653!3d38.42566757182862!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd11559abd5e2c03%3A0x1ebb75f3df570647!2sC.%20Reyes%20Huertas%2C%208%2C%2006300%20Zafra%2C%20Badajoz!5e0!3m2!1ses!2ses!4v1683385227177!5m2!1ses!2ses"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
          <h2>Reserva una cita</h2>
          <p>
            Contacta con nuestro equipo de profesionales que te realizará un
            análisis completo para ayudarte a elegir el tratamiento facial o
            corporal más adecuado.
          </p>
          <div className="contacto__info">
            <div className="contacto__datos">
              <p>Datos de Contacto</p>
              <span>+34 644 79 90 00</span>
              <span>
                Calle Reyes Huertas, 8, <br></br>06300 Zafra, Badajoz
              </span>
              <div>
                <a href="" target="_blank">
                  <FaFacebook />
                </a>
                <a href="" target="_blank">
                  <FaInstagram />
                </a>
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
};

export default Contacto;
