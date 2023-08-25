import React, { useState } from "react";
import Layout from "../components/Layout";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import {
  Card,
  CardBody,
  Image,
  Button,
  Progress,
  CardHeader,
  Link,
  Skeleton,
} from "@nextui-org/react";
import { PhoneIcon } from "../components/Icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMobile, faMapLocationDot } from "@fortawesome/free-solid-svg-icons";

const Contacto = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const handleIframeLoad = () => {
    return setIsLoaded(true);
  };
  return (
    <Layout>
        <section className="contacto text-center text-xl p-10">
          
          <Card
            isBlurred
            
            className="border-none bg-background/60 dark:bg-default-100/50 w-10/12 mx-auto mt-5 p-5 text-slate-700"
            shadow="md"
          >
            <CardHeader className="flex flex-col">
            <h1 className="text-5xl font-black">Contacta con nosotros</h1>
          <p className="m-8 ">
            Reserva cita con nuestro equipo de profesionales que te realizará un
            análisis completo para ayudarte a elegir el tratamiento facial o
            corporal más adecuado.
          </p>
            </CardHeader>
            <CardBody>
              <div className="grid grid-cols-6 lg:grid-cols-12 gap-6 md:gap-10 items-center justify-center">
                <div className="col-span-6 lg:col-span-6 ">
                  <Skeleton isLoaded={isLoaded} className="rounded-xl">
                    <iframe
                      onLoad={handleIframeLoad}
                      className="w-full m-auto rounded-xl"
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3125.6839768741593!2d-6.422279524360653!3d38.42566757182862!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd11559abd5e2c03%3A0x1ebb75f3df570647!2sC.%20Reyes%20Huertas%2C%208%2C%2006300%20Zafra%2C%20Badajoz!5e0!3m2!1ses!2ses!4v1683385227177!5m2!1ses!2ses"
                      allowFullScreen="true"
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                  </Skeleton>
                </div>

                <div className="flex flex-col col-span-6 lg:col-span-6">
                  <div className="flex lg:flex-col 2xl:flex-row lg:gap-8 justify-evenly">
                    <Skeleton isLoaded={isLoaded} className="rounded-xl">
                      <div className="flex flex-col gap-5 items-center font-medium">
                        <p className="text-4xl underline font-bold">Datos de Contacto</p>
                        <div className="flex gap-3 items-center justify-evenly ">
                          <FontAwesomeIcon icon={faMobile} shake />
                          <span className="animate-bounce">+34 644 79 90 00</span>
                        </div>
                        <div className="flex gap-3 items-center justify-evenly">
                          <FontAwesomeIcon icon={faMapLocationDot} shake />
                          <span>
                            Calle Reyes Huertas, 8, <br></br>06300 Zafra,
                            Badajoz
                          </span>
                        </div>
                        <div className="flex gap-5 justify-center ">
                          <Button
                            isIconOnly
                            as={Link}
                            href=""
                            target="_blank"
                            className="border-indigo-700 text-indigo-700 hover:bg-indigo-700 hover:text-white"
                            size="lg"
                            radius="full"
                            variant="bordered"
                          >
                            <FaFacebook className="text-4xl" />
                          </Button>
                          <Button
                            isIconOnly
                            as={Link}
                            href=""
                            target="_blank"
                            className="border-pink-700 text-pink-700 hover:bg-pink-700 hover:text-white"
                            size="lg"
                            radius="full"
                            variant="bordered"
                          >
                            <FaInstagram className="text-4xl" />
                          </Button>
                        </div>
                      </div>
                    </Skeleton>
                    <Skeleton isLoaded={isLoaded} className="rounded-xl">
                    <div className="flex flex-col gap-5 items-center font-medium">
                      <p className="text-4xl underline font-bold">Horarios</p>
                      <div className="flex flex-col items-center">
                            <span>Lunes a Viernes</span>
                            <span>09:30 - 20:00</span>
                        </div>
                        <div className="flex flex-col items-center">
                            <span>Sábado</span>
                            <span>09:30 - 20:00</span>
                        </div>
                    </div>
                    </Skeleton>
                  </div>
                </div>
              </div>
            </CardBody>
          </Card>
        </section>
    </Layout>
  );
};

export default Contacto;
