import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from "swiper";
import { Navigation } from "swiper";

// Import Swiper styles
import 'swiper/css';
import "swiper/css/navigation";
import "swiper/css/pagination";
const Testimonials = () => {
    return (
        <section className='testimonios'>
            <span>Testimonios</span>
            <Swiper
                 navigation={true}
                 pagination={{
                    dynamicBullets: true,
                  }}
                  modules={[Pagination, Navigation]}
            >
                <SwiperSlide>
                    <div className="testimonios__content">
                        <p>
                            <i>
                                "Hoy he disfrutado del beauty menú diciembre, q me regalaron por reyes. Totalmente recomendable. La hidratación corporal es muy agradable, así como el tratamiento facial 360. También me gustó el maquillaje. Muy profesionales y un ambiente muy relajante. Mi enhorabuena."
                            </i>
                        </p>
                        <i>Zaida González</i>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="testimonios__content">
                        <p>
                            <i>
                                "Hoy he disfrutado del beauty menú diciembre, q me regalaron por reyes. Totalmente recomendable. La hidratación corporal es muy agradable, así como el tratamiento facial 360. También me gustó el maquillaje. Muy profesionales y un ambiente muy relajante. Mi enhorabuena."
                            </i>
                        </p>
                        <i>Zaida González</i>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="testimonios__content">
                        <p>
                            <i>
                                "Hoy he disfrutado del beauty menú diciembre, q me regalaron por reyes. Totalmente recomendable. La hidratación corporal es muy agradable, así como el tratamiento facial 360. También me gustó el maquillaje. Muy profesionales y un ambiente muy relajante. Mi enhorabuena."
                            </i>
                        </p>
                        <i>Zaida González</i>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="testimonios__content">
                        <p>
                            <i>
                                "Hoy he disfrutado del beauty menú diciembre, q me regalaron por reyes. Totalmente recomendable. La hidratación corporal es muy agradable, así como el tratamiento facial 360. También me gustó el maquillaje. Muy profesionales y un ambiente muy relajante. Mi enhorabuena."
                            </i>
                        </p>
                        <i>Zaida González</i>
                    </div>
                </SwiperSlide>
                <SwiperSlide>Slide 7</SwiperSlide>
                <SwiperSlide>Slide 8</SwiperSlide>
                <SwiperSlide>Slide 9</SwiperSlide>
            </Swiper>
        </section>
    );
}
export default Testimonials;