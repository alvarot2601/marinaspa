import React, { useState, useRef, useEffect } from "react";
import Layout from "../components/Layout";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import {
  Card,
  CardBody,
  Button,
  CardHeader,
  Link,
  Divider,
} from "@nextui-org/react";
import { Skeleton } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMobile, faMapLocationDot } from "@fortawesome/free-solid-svg-icons";

const Contacto = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const iframeRef = useRef(null);
  const handleIframeLoad = () => {
    return setIsLoaded(true);
  };

  useEffect(() => {
    const iframe = iframeRef.current;
    if (iframe) {
      iframe.addEventListener("load", handleIframeLoad);
      return () => iframe.removeEventListener("load", handleIframeLoad);
    }
  }, []);
  return (
    <Layout>
      <section className="contacto text-center text-xl p-5">
        <Card
          isBlurred
          className="border-none bg-background/60 dark:bg-default-100/50 w-full md:w-10/12 mx-auto mt-5 text-primaryDark"
          shadow="md"
        >
          <CardHeader className="flex flex-col px-5">
            {
              isLoaded ? (
                <>
                  <h1 className="text-5xl md:text-6xl lg:text-8xl font-bold">Contacta con nosotros</h1>
                  <p className="my-5 text-xl md:text-2xl font-medium">
                    Reserva cita con nuestro equipo de profesionales que te realizará
                    un análisis completo para ayudarte a elegir el tratamiento facial
                    o corporal más adecuado.
                  </p>
                </>
              ) : (
                <>
                <Skeleton variant="text" animation="wave">
                  <h1 className="text-5xl md:text-6xl lg:text-8xl font-bold">Contacta con nosotros</h1>
                </Skeleton>
                <Skeleton variant="text" animation="wave">
                <p className="my-5 text-xl md:text-2xl font-medium">
                    Reserva cita con nuestro equipo de profesionales que te realizará
                    un análisis completo para ayudarte a elegir el tratamiento facial
                    o corporal más adecuado.
                  </p>
                </Skeleton>
                </>
              )
            }
            
          </CardHeader>
          <Divider />
          <CardBody className="p-1">
            <div className="grid grid-cols-6  lg:grid-cols-12 gap-6 md:gap-10 items-center justify-center">
              <div className="col-span-6 lg:col-span-6 ">
                {
                  isLoaded ? (
                    <iframe
                      className="w-full m-auto rounded-xl h-full min-h-[300px] lg:min-h-[400px] max-h-[400px] lg:max-h-[500px]"
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3125.6839768741593!2d-6.422279524360653!3d38.42566757182862!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd11559abd5e2c03%3A0x1ebb75f3df570647!2sC.%20Reyes%20Huertas%2C%208%2C%2006300%20Zafra%2C%20Badajoz!5e0!3m2!1ses!2ses!4v1683385227177!5m2!1ses!2ses"
                      allowFullScreen={true}
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                  ) : (
                    <Skeleton variant="rounded" animation="wave" width="100%" height="100%">
                      <iframe
                        ref={iframeRef}
                        className="w-full m-auto rounded-xl h-full min-h-[300px] lg:min-h-[400px] max-h-[400px] lg:max-h-[500px]"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3125.6839768741593!2d-6.422279524360653!3d38.42566757182862!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd11559abd5e2c03%3A0x1ebb75f3df570647!2sC.%20Reyes%20Huertas%2C%208%2C%2006300%20Zafra%2C%20Badajoz!5e0!3m2!1ses!2ses!4v1683385227177!5m2!1ses!2ses"
                        allowFullScreen={true}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                      ></iframe>
                    </Skeleton>
                  )
                }
              </div>
              <div className="flex flex-col justify-center text-center items-center col-span-6 lg:col-span-6 px-4 pb-5">
                <div className="flex flex-col sm:flex-row lg:flex-col 2xl:flex-row gap-5 lg:gap-8 justify-evenly">
                  {
                    isLoaded ? (
                      <>
                        <div className="flex flex-col gap-5 items-center font-medium">
                          <p className="text-4xl font-bold">
                            Datos de Contacto
                          </p>
                          <div className="flex gap-3 items-center justify-evenly ">
                            <FontAwesomeIcon icon={faMobile} />
                            <span className="animate-bounce">+34 644 79 90 00</span>
                          </div>
                          <div className="flex gap-3 items-center justify-evenly">
                            <FontAwesomeIcon icon={faMapLocationDot} />
                            <span>
                              Calle Reyes Huertas, 8, <br></br>06300 Zafra, Badajoz
                            </span>
                          </div>
                          <div className="flex gap-5 justify-center ">
                            <Button
                              isIconOnly
                              isExternal
                              as={Link}
                              href="https://www.facebook.com/marinaspabienvenida"
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
                              isExternal
                              as={Link}
                              href="https://www.instagram.com/marinaspazafra/"
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
                        <div className="flex flex-col gap-5 items-center font-medium">
                          <p className="text-4xl font-bold">Horarios</p>
                          <div className="flex flex-col items-center">
                            <span>Martes a Viernes</span>
                            <span>09:30 - 20:30</span>
                          </div>
                          <div className="flex flex-col items-center">
                            <span>Sábado</span>
                            <span>10:00 - 14:00</span>
                          </div>
                        </div></>
                    ) : (
                      <>

                        <div className="flex flex-col gap-5 items-center font-medium">
                          <Skeleton variant="text" animation="wave">
                            <p className="text-4xl font-bold">
                              Datos de Contacto
                            </p>
                          </Skeleton>
                          <div className="flex gap-3 items-center justify-evenly ">
                            <Skeleton variant="text" animation="wave">
                              <FontAwesomeIcon icon={faMobile} />
                              <span className="animate-bounce">+34 644 79 90 00</span>
                            </Skeleton>
                          </div>
                          <div className="flex gap-3 items-center justify-evenly">
                            <Skeleton variant="text" animation="wave">
                              <FontAwesomeIcon icon={faMapLocationDot} />
                              <span>
                                Calle Reyes Huertas, 8, <br></br>06300 Zafra, Badajoz
                              </span>
                            </Skeleton>
                          </div>
                          <div className="flex gap-5 justify-center ">
                            <Skeleton variant="circular">
                              <Button
                                isIconOnly
                                isExternal
                                as={Link}
                                href="https://www.facebook.com/marinaspabienvenida"
                                target="_blank"
                                className="border-indigo-700 text-indigo-700 hover:bg-indigo-700 hover:text-white"
                                size="lg"
                                radius="full"
                                variant="bordered"
                              >
                                <FaFacebook className="text-4xl" />
                              </Button>
                            </Skeleton>
                            <Skeleton variant="circular">
                              <Button
                                isIconOnly
                                isExternal
                                as={Link}
                                href="https://www.instagram.com/marinaspazafra/"
                                target="_blank"
                                className="border-pink-700 text-pink-700 hover:bg-pink-700 hover:text-white"
                                size="lg"
                                radius="full"
                                variant="bordered"
                              >
                                <FaInstagram className="text-4xl" />
                              </Button>
                            </Skeleton>
                          </div>
                        </div>

                        <div className="flex flex-col gap-5 items-center font-medium">
                          <Skeleton variant="text">
                            <p className="text-4xl font-bold">Horarios</p>
                          </Skeleton>
                          <div className="flex flex-col items-center">
                            <Skeleton variant="text" sx={{ fontSize: '1rem' }}>
                              <span>Martes a Viernes</span>
                              <span>09:30 - 20:30</span>
                            </Skeleton>
                          </div>
                          <div className="flex flex-col items-center" >
                            <Skeleton variant="text" sx={{ fontSize: '1rem' }}>
                              <span>Sábado</span>
                              <span>10:00 - 14:00</span>
                            </Skeleton>
                          </div>
                        </div>
                      </>
                    )
                  }
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
