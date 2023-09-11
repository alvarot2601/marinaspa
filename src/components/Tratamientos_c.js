import React from "react";
import { AiOutlineArrowDown } from "react-icons/ai";

import {
  Navigation,
  EffectCoverflow,
  FreeMode,
  Pagination,
  Autoplay,
} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
//fotos
import TratamientosFacialesPicture from "../assets/images/tratamientos-faciales.jpg";

import AntiAgingPicture from "../assets/images/anti-aging.jpg";
import EsteticaGeneral from "../assets/images/estetica-general.jpg";

import SiluetaCorporal from "../assets/images/silueta-corporal.jpg";
import hidromasajePicture from "../assets/images/hidromasaje.jpg";
import fotodepilacionPicture from "../assets/images/fotodepilacion.jpg";
import { Button, Divider, Link } from "@nextui-org/react";

const Tratamientos_c = () => {
  return (
    <div className="tratamientos py-10 px-5 bg-gradient-to-b from-rose-200 to-rose-100 text-zinc-700  text-center">
      <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold">
        Nuestros tratamientos
      </h2>
      <p className="text-center sm:text-md text-lg mt-4 mb-8 mx-10 font-medium italic">
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
        <SwiperSlide className="swiper-slide max-w-[400px] lg:max-w-[500px]  2xl:max-w-[600px]">
          <div className="tratamientos__item tratamientos__item--1 flex flex-col">
            <div className="flex h-full h-[213px] lg:h-[240px]">
              <img
                className="w-full object-cover"
                loading="lazy"
                src={TratamientosFacialesPicture}
                alt=""
              />
            </div>
            <div className="flex flex-col p-5 tratamientos__text bg-gradient-to-br from-rose-300 via-orange-200 to-rose-300">
              <span className="text-xl font-semibold">
                TRATAMIENTOS FACIALES
              </span>
              <p className="mb-3 mt-2 font-semibold">
                Nuestros tratamientos faciales están diseñados para revitalizar
                tu piel y brindarte un cutis radiante. Desde limpiezas faciales
                profundas hasta peelings químicos y terapias de
                rejuvenecimiento, siempre utilizaremos técnicas avanzadas y
                productos de calidad para satisfacer tus necesidades.
                Experimenta una piel más suave, luminosa y juvenil.
              </p>
              <Button
                as={Link}
                href="/programas-faciales"
                radius="sm"
                className="px-5 sm:px-10 py-6 sm:py-8 mx-auto bg-zinc-700 text-white text-xl font-semibold shadow-xl shadow-zinc-600/50"
              >
                Saber más <AiOutlineArrowDown />
              </Button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className=" max-w-[400px] lg:max-w-[500px]  2xl:max-w-[600px]">
          <div className="tratamientos__item tratamientos__item--2 flex flex-col">
            <div className="flex h-full h-[213px] lg:h-[240px]">
              <img
                className="w-full h-full object-cover"
                loading="lazy"
                src={EsteticaGeneral}
                alt=""
              />
            </div>
            <div className="flex flex-1 flex-col p-5 tratamientos__text  bg-gradient-to-br from-orange-300 to-rose-300">
              <span className="text-xl font-semibold">ESTÉTICA GENERAL</span>
              <p className="mb-3 mt-2 font-semibold">
                En MarinaSpá, nos dedicamos a realzar tu belleza y brindarte una
                experiencia estética excepcional. Nuestros servicios van más
                allá de la depilación y la silueta corporal. Te ofrecemos una
                amplia gama de tratamientos faciales, cuidado de la piel,
                maquillaje y más.
              </p>
              <Button
                as={Link}
                href="/estetica-general"
                size="lg"
                radius="sm"
                className="px-5 sm:px-10 py-6 sm:py-8 mx-auto bg-zinc-700 text-white text-xl font-semibold shadow-xl shadow-zinc-600/50"
              >
                Saber más <AiOutlineArrowDown />
              </Button>{" "}
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className=" max-w-[400px] lg:max-w-[500px]  2xl:max-w-[600px]">
          <div className="tratamientos__item tratamientos__item--3 flex flex-col">
            <div className="flex h-full h-[213px] lg:h-[240px]">
              <img
                className="w-full object-cover"
                loading="lazy"
                src={SiluetaCorporal}
                alt=""
              />
            </div>
            <div className="flex flex-col p-5 tratamientos__text  bg-gradient-to-br from-orange-300 to-rose-300">
              <span className="text-xl font-semibold">SILUETA CORPORAL</span>
              <p className="mb-3 mt-2 font-semibold">
                En MarinaSpá, te ayudamos a alcanzar la silueta corporal de tus
                sueños. Nuestros tratamientos avanzados, como la criolipólisis y
                la radiofrecuencia, te permiten esculpir tu cuerpo de manera
                segura y efectiva. Nuestro equipo de expertos estará contigo en
                cada paso del camino para lograr resultados visibles. ¡Reserva
                tu consulta hoy mismo y comienza a transformar tu figura!
              </p>
              <Button
                as={Link}
                href="/silueta-corporal"
                size="lg"
                radius="sm"
                className="px-5 sm:px-10 py-6 sm:py-8 mx-auto bg-zinc-700 text-white text-xl font-semibold shadow-xl shadow-zinc-600/50"
              >
                Saber más <AiOutlineArrowDown />
              </Button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className=" max-w-[400px] lg:max-w-[500px]  2xl:max-w-[600px]">
          <div className="tratamientos__item tratamientos__item--4 flex flex-col">
            <div className="flex h-full h-[213px] lg:h-[240px]">
              <img
                className="w-full object-cover"
                loading="lazy"
                src={hidromasajePicture}
                alt=""
              />
            </div>
            <div className="flex flex-col p-5 tratamientos__text bg-gradient-to-br from-orange-300 to-rose-300">
              <span className="text-xl font-semibold">
                BIENESTAR Y RELAJACIÓN
              </span>
              <p className="mb-3 mt-2 font-semibold">
                En MarinaSpá, te ofrecemos una experiencia de bienestar y
                relajación incomparable. Nuestros masajes terapéuticos y
                hidromasajes revitalizantes te transportarán a un estado de
                total relajación. Nuestro equipo de terapeutas altamente
                capacitados personalizará cada sesión para satisfacer tus
                necesidades individuales. Descubre un oasis de tranquilidad y
                renueva tu cuerpo y mente en MarinaSpá. ¡Reserva tu momento de
                relajación hoy mismo!
              </p>
              <Button
                as={Link}
                href="/bienestar-y-relajacion"
                size="lg"
                radius="sm"
                className="px-5 sm:px-10 py-6 sm:py-8 mx-auto bg-zinc-700 text-white text-xl font-semibold shadow-xl shadow-zinc-600/50"
              >
                Saber más <AiOutlineArrowDown />
              </Button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className=" max-w-[400px] lg:max-w-[500px]  2xl:max-w-[600px]">
          <div className="tratamientos__item tratamientos__item--5 flex flex-col">
            <div className="flex h-full h-[213px] lg:h-[240px]">
              <img
                className="w-full object-cover"
                loading="lazy"
                src={fotodepilacionPicture}
                alt=""
              />
            </div>
            <div className="flex flex-col p-5 tratamientos__text  bg-gradient-to-br from-orange-300 to-rose-300">
              <span className="text-xl font-semibold">DEPILACIÓN</span>
              <p className="mb-3 mt-2 font-semibold">
                Experimenta la suavidad duradera con nuestra depilación
                profesional en MarinaSpá. Ya sea que elijas la depilación láser
                o la cera tradicional, garantizamos una experiencia cómoda y
                efectiva. ¡Agenda tu cita y disfruta de una piel suave y sin
                vello!
              </p>
              <Button
                as={Link}
                href="/depilacion"
                size="lg"
                radius="sm"
                className="px-5 sm:px-10 py-6 sm:py-8 mx-auto bg-zinc-700 text-white text-xl font-semibold shadow-xl shadow-zinc-600/50"
              >
                Saber más <AiOutlineArrowDown />
              </Button>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
export default Tratamientos_c;
