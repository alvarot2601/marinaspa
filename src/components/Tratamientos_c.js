import React from "react";
import { AiOutlineArrowDown } from "react-icons/ai";

import { Pagination } from "swiper";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
//fotos
import AntiAgingPicture from "../assets/images/anti-aging.jpg";
import FacialPicture from "../assets/images/programas-faciales-background.jpg";
import hidromasajePicture from "../assets/images/hidromasaje.jpg";
import fotodepilacionPicture from "../assets/images/fotodepilacion.jpg";
import {Button, Link} from "@nextui-org/react";

const Tratamientos_c = ()=>{
    return (
        <section className="tratamientos py-10 px-5 bg-gradient-to-b from-rose-300 to-rose-100 text-rose-950">
        <h2 className="text-8xl font-bold text-center underline underline-offset-8 decoration-4">NUESTROS TRATAMIENTOS</h2>
        <p className="text-center text-lg my-2 font-medium italic">
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
        <a className="button2 shrink-border my-3 mx-auto bg-transparent">
          NUESTROS SERVICIOS <AiOutlineArrowDown />
        </a>
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
              <div className="flex flex-col p-5 tratamientos__text bg-gradient-to-b from-rose-200 to-rose-300">
                <span className="text-xl font-semibold">TRATAMIENTOS FACIALES</span>
                <p className="mb-3 mt-2">
                  Nuestros tratamientos faciales están diseñados para
                  revitalizar tu piel y brindarte un cutis radiante. Desde
                  limpiezas faciales profundas hasta peelings químicos y
                  terapias de rejuvenecimiento, siempre utilizaremos técnicas
                  avanzadas y productos de calidad para satisfacer tus
                  necesidades. Experimenta una piel más suave, luminosa y
                  juvenil.
                </p>
                <Button as={Link} href="/tratamientos-faciales" target='_blank' className='material-bubble max-w-sm text-md px-20 py-8 outline-0 rounded border-2 border-transparent relative mx-auto btn-transitions' >Saber más <AiOutlineArrowDown/> </Button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="tratamientos__item tratamientos__item--2">
              <img src={FacialPicture} alt="" />
              <div className="flex flex-col p-5 tratamientos__text bg-gradient-to-b from-rose-200 to-rose-300">
                <span className="text-xl font-semibold text-slate-800">ESTÉTICA GENERAL</span>
                <p className="mb-3 mt-2">
                  En MarinaSpá, nos dedicamos a realzar tu belleza y brindarte
                  una experiencia estética excepcional. Nuestros servicios van
                  más allá de la depilación y la silueta corporal. Te ofrecemos
                  una amplia gama de tratamientos faciales, cuidado de la piel,
                  maquillaje y más.
                </p>
                <Button as={Link} href="/estetica-general" target='_blank' className='material-bubble max-w-sm text-md px-20 py-8 outline-0 rounded  border-transparent relative mx-auto btn-transitions' >Saber más <AiOutlineArrowDown/> </Button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="tratamientos__item tratamientos__item--3">
              <img src={FacialPicture} alt="" />
              <div className="flex flex-col p-5 tratamientos__text bg-gradient-to-b from-rose-200 to-rose-300">
                <span className="text-xl font-semibold">SILUETA CORPORAL</span>
                <p className="mb-3 mt-2">
                  En MarinaSpá, te ayudamos a alcanzar la silueta corporal de
                  tus sueños. Nuestros tratamientos avanzados, como la
                  criolipólisis y la radiofrecuencia, te permiten esculpir tu
                  cuerpo de manera segura y efectiva. Nuestro equipo de expertos
                  estará contigo en cada paso del camino para lograr resultados
                  visibles. ¡Reserva tu consulta hoy mismo y comienza a
                  transformar tu figura!
                </p>
                <Button as={Link} href="/silueta-corporal" target='_blank' className='material-bubble max-w-sm text-md px-20 py-8 outline-0 rounded border-2 border-transparent relative mx-auto btn-transitions' >Saber más <AiOutlineArrowDown/> </Button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="tratamientos__item tratamientos__item--4">
              <img src={hidromasajePicture} alt="" />
              <div className="flex flex-col p-5 tratamientos__text bg-gradient-to-b from-rose-200 to-rose-300">
                <span className="text-xl font-semibold">BIENESTAR Y RELAJACIÓN</span>
                <p className="mb-3 mt-2">
                  En MarinaSpá, te ofrecemos una experiencia de bienestar y
                  relajación incomparable. Nuestros masajes terapéuticos y
                  hidromasajes revitalizantes te transportarán a un estado de
                  total relajación. Nuestro equipo de terapeutas altamente
                  capacitados personalizará cada sesión para satisfacer tus
                  necesidades individuales. Descubre un oasis de tranquilidad y
                  renueva tu cuerpo y mente en MarinaSpá. ¡Reserva tu momento de
                  relajación hoy mismo!
                </p>
                <Button as={Link} href="/bienestar-y-relajacion" target='_blank' className='material-bubble max-w-sm text-md px-20 py-8 outline-0 rounded border-2 border-transparent relative mx-auto btn-transitions' >Saber más <AiOutlineArrowDown/> </Button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="tratamientos__item tratamientos__item--5">
              <img src={fotodepilacionPicture} alt="" />
              <div className="flex flex-col p-5 tratamientos__text bg-gradient-to-b from-rose-200 to-rose-300">
                <span className="text-xl font-semibold">DEPILACIÓN</span>
                <p className="mb-3 mt-2">
                  Experimenta la suavidad duradera con nuestra depilación
                  profesional en MarinaSpá. Ya sea que elijas la depilación
                  láser o la cera tradicional, garantizamos una experiencia
                  cómoda y efectiva. ¡Agenda tu cita y disfruta de una piel
                  suave y sin vello!
                </p>
                <Button as={Link} href="/depilacion-y-fotodepilacion" target='_blank' className='material-bubble max-w-sm text-md px-20 py-8 outline-0 rounded border-2 border-transparent relative mx-auto btn-transitions' >Saber más <AiOutlineArrowDown/> </Button>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </section>
      
    );
}
export default Tratamientos_c;