import React, { useEffect, useState } from "react";
import { AiOutlineArrowDown } from "react-icons/ai";
import { faCircleDown } from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { EffectCoverflow, Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
//fotos
import TratamientosFacialesPicture from "../assets/images/tratamientos-faciales.jpg";

import EsteticaGeneral from "../assets/images/estetica-general.jpg";

import SiluetaCorporal from "../assets/images/silueta-corporal.jpg";
import hidromasajePicture from "../assets/images/hidromasaje.jpg";
import fotodepilacionPicture from "../assets/images/fotodepilacion.jpg";
import { Button, Link } from "@nextui-org/react";

const Tratamientos_c = () => {
  const tratamientos_array = [
    [
      "TRATAMIENTOS FACIALES",
      "Nuestros tratamientos faciales están diseñados para revitalizar tu piel y brindarte un cutis radiante. Desde limpiezas faciales profundas hasta peelings químicos y terapias de rejuvenecimiento, siempre utilizaremos técnicas avanzadas y productos de calidad para satisfacer tus necesidades. Experimenta una piel más suave, luminosa y juvenil.",
      TratamientosFacialesPicture,
      '/programas-faciales'
    ],
    [
      'ESTÉTICA GENERAL',
      'En MarinaSpá, nos dedicamos a realzar tu belleza y brindarte una experiencia estética excepcional. Nuestros servicios van más allá de la depilación y la silueta corporal. Te ofrecemos una amplia gama de tratamientos faciales, cuidado de la piel, maquillaje y más.',
      EsteticaGeneral,
      '/estetica-general'
    ],
    [
      'SILUETA CORPORAL'
      , 'En MarinaSpá, nos dedicamos a realzar tu belleza y brindarte una experiencia estética excepcional. Nuestros servicios van más allá de la depilación y la silueta corporal. Te ofrecemos una amplia gama de tratamientos faciales, cuidado de la piel, maquillaje y más.',
      SiluetaCorporal,
      '/silueta-corporal'
    ],
    [
      'BIENESTAR Y RELAJACIÓN',
      'En MarinaSpá, te ayudamos a alcanzar la silueta corporal de tus sueños. Nuestros tratamientos avanzados, como la criolipólisis y la radiofrecuencia, te permiten esculpir tu cuerpo de manera segura y efectiva. Nuestro equipo de expertos estará contigo en cada paso del camino para lograr resultados visibles. ¡Reserva tu consulta hoy mismo y comienza a transformar tu figura!',
      hidromasajePicture,
      '/bienestar-y-relajacion'
    ],
    [
      'DEPILACIÓN'
      , 'Experimenta la suavidad duradera con nuestra depilación profesional en MarinaSpá. Ya sea que elijas la depilación láser o la cera tradicional, garantizamos una experiencia cómoda y efectiva. ¡Agenda tu cita y disfruta de una piel suave y sin vello!',
      fotodepilacionPicture,
      '/depilacion-y-fotodepilacion'
    ]
  ];

  const [showMore, setShowMore] = useState(false);
  const [showBtn, setShowBtn] = useState(false);
  useEffect(() => {
    if (window.innerWidth < 1175) setShowBtn(true);
  }, []);
  const showMoreText = () => {
    setShowMore(!showMore);
  };
  return (
    <div className="tratamientos py-10 px-5 bg-zinc-50 text-zinc-700  text-center">
      <h2 className="text-5xl md:text-6xl lg:text-8xl font-bold">
        Nuestros tratamientos
      </h2>
      <p
        className={`text-center sm:text-md text-lg mt-4 mb-2 mx-5 font-medium italic ${showMore ? "" : "line-clamp-5"
          } ${showBtn ? "" : "mb-6"}`}
      >
        Tu belleza es el reflejo de tu mejor imagen que proyecta tu cuerpo
        cuando está en pleno equilibrio, nosotros trabajamos para que ese
        reflejo y equilibrio se perpetúen y se mantengan inalterables a pesar de
        los años y puedas lucir tu mejor yo durante toda la vida. Con la ayuda
        de nuestro equipo de profesionales y de nuestros tratamientos Corporales
        y Faciales conseguirás frenar y hasta revertir el envejecimiento de la
        piel o el deterioro y desgaste que sufrimos cada año, para que así
        puedas lucir siempre la mejor versión de ti a pesar del paso del tiempo.
        Ven a tu Centro de Estética en Sóller
      </p>
      <Button
        size="lg"
        className={`mb-4 border border-zinc-700 ${showBtn ? "" : "hidden"}`}
        variant="bordered"
        onClick={showMoreText}
        endContent={<AiOutlineArrowDown />}
      >
        Leer más
      </Button>

      <Swiper
        className="tratamientos__slider"
        effect="coverflow"
        initialSlide={1}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        pagination={true}
        modules={[EffectCoverflow, Pagination, Autoplay]}
      >
        {
          tratamientos_array.map((treatment, index) => {
            return (
              <SwiperSlide key={`slide-${index}`} className="swiper-slide max-w-[400px] lg:max-w-[500px]  2xl:max-w-[600px]">
                <div className="tratamientos__item tratamientos__item--1 flex flex-col">
                  <div className="flex h-[213px] lg:h-[240px]">
                    <img
                      className="w-full h-full object-cover"
                      loading="lazy"
                      src={treatment[2]}
                      alt=""
                    />
                  </div>
                  <div className="flex flex-col py-5 px-4 sm:px-5 tratamientos__text bg-primary">
                    <span className="text-xl font-semibold">
                      {treatment[0]}
                    </span>
                    <p className="mb-3 mt-2">
                      {treatment[1]}
                    </p>
                    <Button
                      as={Link}
                      href={treatment[3]}
                      radius="sm"
                      variant="shadow"
                      className="px-5 sm:px-10 py-6 sm:py-8 mx-auto bg-zinc-600 text-zinc-50 text-xl font-semibold shadow-xl shadow-zinc-600/50"
                    >
                      Saber más <AiOutlineArrowDown />
                    </Button>
                  </div>
                </div>
              </SwiperSlide>
            );
          })
        }
        
      </Swiper>
    </div>
  );
};
export default Tratamientos_c;
