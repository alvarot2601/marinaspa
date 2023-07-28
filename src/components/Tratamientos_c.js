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
const Tratamientos_c = ()=>{
    return (
        <section className="tratamientos">
        <h2>NUESTROS TRATAMIENTOS</h2>
        <p className="tratamientos__general-info">
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
        <a className="button button--transparent">
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
              <div className="tratamientos__text">
                <span>TRATAMIENTOS FACIALES</span>
                <p>
                  Nuestros tratamientos faciales están diseñados para
                  revitalizar tu piel y brindarte un cutis radiante. Desde
                  limpiezas faciales profundas hasta peelings químicos y
                  terapias de rejuvenecimiento, siempre utilizaremos técnicas
                  avanzadas y productos de calidad para satisfacer tus
                  necesidades. Experimenta una piel más suave, luminosa y
                  juvenil.
                </p>
                <a href="tratamientos-faciales" className="button">
                  SABER MÁS <AiOutlineArrowDown />
                </a>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="tratamientos__item tratamientos__item--2">
              <img src={FacialPicture} alt="" />
              <div className="tratamientos__text">
                <span>ESTÉTICA GENERAL</span>
                <p>
                  En MarinaSpá, nos dedicamos a realzar tu belleza y brindarte
                  una experiencia estética excepcional. Nuestros servicios van
                  más allá de la depilación y la silueta corporal. Te ofrecemos
                  una amplia gama de tratamientos faciales, cuidado de la piel,
                  maquillaje y más.
                </p>
                <a href="/estetica-general" className="button button--transparent">
                  SABER MÁS <AiOutlineArrowDown />
                </a>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="tratamientos__item tratamientos__item--3">
              <img src={FacialPicture} alt="" />
              <div className="tratamientos__text">
                <span>SILUETA CORPORAL</span>
                <p>
                  En MarinaSpá, te ayudamos a alcanzar la silueta corporal de
                  tus sueños. Nuestros tratamientos avanzados, como la
                  criolipólisis y la radiofrecuencia, te permiten esculpir tu
                  cuerpo de manera segura y efectiva. Nuestro equipo de expertos
                  estará contigo en cada paso del camino para lograr resultados
                  visibles. ¡Reserva tu consulta hoy mismo y comienza a
                  transformar tu figura!
                </p>
                <a href="silueta-corporal" className="button button--transparent">
                  SABER MÁS <AiOutlineArrowDown />
                </a>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="tratamientos__item tratamientos__item--4">
              <img src={hidromasajePicture} alt="" />
              <div className="tratamientos__text">
                <span>BIENESTAR Y RELAJACIÓN</span>
                <p>
                  En MarinaSpá, te ofrecemos una experiencia de bienestar y
                  relajación incomparable. Nuestros masajes terapéuticos y
                  hidromasajes revitalizantes te transportarán a un estado de
                  total relajación. Nuestro equipo de terapeutas altamente
                  capacitados personalizará cada sesión para satisfacer tus
                  necesidades individuales. Descubre un oasis de tranquilidad y
                  renueva tu cuerpo y mente en MarinaSpá. ¡Reserva tu momento de
                  relajación hoy mismo!
                </p>
                <a href="bienestar-y-relajacion" className="button button--transparent">
                  SABER MÁS <AiOutlineArrowDown />
                </a>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="tratamientos__item tratamientos__item--5">
              <img src={fotodepilacionPicture} alt="" />
              <div className="tratamientos__text">
                <span className="caveat">DEPILACIÓN</span>
                <p>
                  Experimenta la suavidad duradera con nuestra depilación
                  profesional en MarinaSpá. Ya sea que elijas la depilación
                  láser o la cera tradicional, garantizamos una experiencia
                  cómoda y efectiva. ¡Agenda tu cita y disfruta de una piel
                  suave y sin vello!
                </p>
                <a href="depilacion" className="button button--transparent">
                  SABER MÁS <AiOutlineArrowDown />
                </a>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </section>
      
    );
}
export default Tratamientos_c;