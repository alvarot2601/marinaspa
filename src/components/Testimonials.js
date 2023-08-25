import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import { Navigation } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Link,
  Image,
} from "@nextui-org/react";
import { User } from "@nextui-org/react";
import { Avatar, AvatarIcon } from "@nextui-org/react";
import { faStar, faStarHalf, faHouse } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMobile, faMapLocationDot } from "@fortawesome/free-solid-svg-icons";
const Testimonials = () => {
  const opinions = [
    {
      user: "Virginia García",
      opinion:
        "¡Maravilloso! Me regalo mi marido una experiencia en Marina Spá para San Valentín y fue una pasada. Constaba de varias cosas, y a cuál mejor. El entorno ya invita a relajarte desde el inicio, y una vez que empiezas a recibir los tratos de Mari y sus compañeras... no os puedo explicar con palabras. Lo suyo es que vayáis a probar, que no os vais a arrepentir. ¡Recomendadísimo!",
      punctuation: [
        <FontAwesomeIcon icon={faStar} className="text-yellow-400" />,
        <FontAwesomeIcon icon={faStar} className="text-yellow-400" />,
        <FontAwesomeIcon icon={faStar} className="text-yellow-400" />,
        <FontAwesomeIcon icon={faStar} className="text-yellow-400" />,
        <FontAwesomeIcon icon={faStar} className="text-yellow-400" />,
      ],
      url: "https://www.google.com/maps/contrib/106740853058942327357/place/ChIJJ5vuvJpVEQ0R9Zkm8NDy6ss/@37.8541735,-7.7390933,6.27z/data=!4m6!1m5!8m4!1e1!2s106740853058942327357!3m1!1e1?hl=es&entry=ttu",
    },
    {
      user: "Zaida Gonzalez Rey",
      opinion:
        "Hoy he disfrutado del beauty menú diciembre, q me regalaron por reyes. Totalmente recomendable. La hidratación corporal es muy agradable, así como el tratamiento facial 360. También me gustó el maquillaje. Muy profesionales y un ambiente muy relajante. Mi enhorabuena. Muchas gracias Laura.",
      punctuation: [
        <FontAwesomeIcon icon={faStar} className="text-yellow-400" />,
        <FontAwesomeIcon icon={faStar} className="text-yellow-400" />,
        <FontAwesomeIcon icon={faStar} className="text-yellow-400" />,
        <FontAwesomeIcon icon={faStar} className="text-yellow-400" />,
        <FontAwesomeIcon icon={faStar} className="text-yellow-400" />,
      ],
      url: "https://www.google.com/maps/contrib/115417099936205970083/place/ChIJJ5vuvJpVEQ0R9Zkm8NDy6ss/@37.4684953,-7.3078281,8z/data=!4m6!1m5!8m4!1e1!2s115417099936205970083!3m1!1e1?hl=es&entry=ttu",
    },
    {
      user: "Carmen Rojas",
      opinion:
        "Puedo decir que es mi peluquería de confianza, cuentan con muy buenas profesionales que saben qué necesita cada cabello en el momento. Además también tienen a disposición del cliente una innumerable cantidad de servicios como por ejemplo: depilación láser, tratamientos de exfoliación corporal, rejuvenecedores, lifting, tratamiento de presoterapia, distintos tipos de masajes, drenajes linfáticos subacuáticos.",
      punctuation: [
        <FontAwesomeIcon icon={faStar} className="text-yellow-400" />,
        <FontAwesomeIcon icon={faStar} className="text-yellow-400" />,
        <FontAwesomeIcon icon={faStar} className="text-yellow-400" />,
        <FontAwesomeIcon icon={faStar} className="text-yellow-400" />,
        <FontAwesomeIcon icon={faStar} className="text-yellow-400" />,
      ],
      url: "https://www.google.com/maps/contrib/109386828765142338035/place/ChIJJ5vuvJpVEQ0R9Zkm8NDy6ss/@39.1399156,-5.9577313,8z/data=!4m6!1m5!8m4!1e1!2s109386828765142338035!3m1!1e1?hl=es&entry=ttu",
    },
    {
      user: "Teresa Corrales García",
      opinion:
        "Lugar inmejorable y muy confortable, atención profesional, con unos tratamientos y maquinaria a la última, sin duda te hacen sentir guapa tanto por dentro como fuera. ¡Gracias por ser mi centro de confianza!",
      punctuation: [
        <FontAwesomeIcon icon={faStar} className="text-yellow-400" />,
        <FontAwesomeIcon icon={faStar} className="text-yellow-400" />,
        <FontAwesomeIcon icon={faStar} className="text-yellow-400" />,
        <FontAwesomeIcon icon={faStar} className="text-yellow-400" />,
        <FontAwesomeIcon icon={faStar} className="text-yellow-400" />,
      ],
      url: "https://www.google.com/maps/contrib/106536559141181079408/place/ChIJJ5vuvJpVEQ0R9Zkm8NDy6ss/@38.8015452,-6.614352,7z/data=!4m6!1m5!8m4!1e1!2s106536559141181079408!3m1!1e1?hl=es&entry=ttu",
    },
    {
      user: "Mery RS",
      opinion:
        "¡Amplia oferta en tratamientos y servicios! Buen trato, personal muy amable! La estancia se hizo muy amena mientras nos realizaron las uñas semipermanentes. ¡Lo recomiendo y volveré!",
      punctuation: [
        <FontAwesomeIcon icon={faStar} className="text-yellow-400" />,
        <FontAwesomeIcon icon={faStar} className="text-yellow-400" />,
        <FontAwesomeIcon icon={faStar} className="text-yellow-400" />,
        <FontAwesomeIcon icon={faStar} className="text-yellow-400" />,
        <FontAwesomeIcon icon={faStar} className="text-yellow-400" />,
      ],
      url: "https://www.google.com/maps/contrib/102483368780463811901/place/ChIJJ5vuvJpVEQ0R9Zkm8NDy6ss/@38.4236734,-6.4204059,16.46z/data=!4m4!1m3!8m2!1e1!2s102483368780463811901?hl=es&entry=ttu",
    },
    {
      user: "Carmina Barreiro",
      opinion:
        "Fuimos 3 amigas a consentirnos. Elegimos un beauty menú. Nos encantó el lugar, muy profesional y agradable el trato. 100% recomendable.",
      punctuation: [
        <FontAwesomeIcon icon={faStar} className="text-yellow-400" />,
        <FontAwesomeIcon icon={faStar} className="text-yellow-400" />,
        <FontAwesomeIcon icon={faStar} className="text-yellow-400" />,
        <FontAwesomeIcon icon={faStar} className="text-yellow-400" />,
        <FontAwesomeIcon icon={faStar} className="text-yellow-400" />,
      ],
      url: "https://www.google.com/maps/contrib/109978121357351299597/place/ChIJJ5vuvJpVEQ0R9Zkm8NDy6ss/@38.4215337,-6.4284825,15.29z/data=!4m4!1m3!8m2!1e1!2s109978121357351299597?hl=es&entry=ttu",
    }
  ];
  return (
    <section className="testimonios text-center px-5 py-10 bg-gradient-to-b from-rose-100 to-indigo-300">
      <h6 className="text-8xl font-semibold bg-clip-text text-transparent bg-gradient-to-t from-rose-300 to-indigo-900">Testimonios</h6>
      <div className="flex gap-3 items-center justify-center text-4xl my-4">
        <span>4.9</span>
        <FontAwesomeIcon icon={faStar} className="text-yellow-400" />
        <FontAwesomeIcon icon={faStar} className="text-yellow-400" />
        <FontAwesomeIcon icon={faStar} className="text-yellow-400" />
        <FontAwesomeIcon icon={faStar} className="text-yellow-400" />
        <FontAwesomeIcon icon={faStar} className="text-yellow-400" />
      </div>
      <p className="text-lg">
        Puntuación basada en más de{" "}
        <Link
          isExternal
          href="https://www.google.com/search?q=opiniones+marinaspa&rlz=1C1UEAD_esES927ES927&oq=opiniones+marinaspa&gs_lcrp=EgZjaHJvbWUqBggAEEUYOzIGCAAQRRg7MgYIARBFGEAyCggCEAAYCBgNGB4yCggDEAAYCBgNGB7SAQgzNjQ3ajBqN6gCALACAA&sourceid=chrome&ie=UTF-8#lrd=0xd11559abcee9b27:0xcbeaf2d0f02699f5,1,,,,"
        >
          60 opiniones.
        </Link>
      </p>
      <Swiper
        navigation={true}
        slidesPerView={2}
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination, Navigation]}
      >
        {opinions.map((op) => {
          return (
            <SwiperSlide>
              <Card className="w-2/4 mx-auto my-5 bg-gray-200 w-11/12 min-h-[338px]">
                <CardHeader className="flex items-center justify-center gap-4">
                  <Avatar
                    icon={<AvatarIcon />}
                    className="w-20 h-20"
                    classNames={{
                      base: "bg-gradient-to-br from-indigo-300 to-[#FF705B]",
                      icon: "text-black/80",
                    }}
                  />
                  <span className="text-2xl font-semibold">{op.user}</span>
                  <div>
                    {op.punctuation.map((star) => {
                      return star;
                    })}
                  </div>
                </CardHeader>
                <Divider />
                <CardBody className="text-center flex justify-center">
                  <p className="italic ">{op.opinion}</p>
                </CardBody>
                <Divider />
                <CardFooter className="flex justify-center">
                  <Link isExternal showAnchorIcon href={op.url}>
                    Leer opinión {op.sitename}.
                  </Link>
                </CardFooter>
              </Card>
            </SwiperSlide>
          );
        })}

        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
    </section>
  );
};
export default Testimonials;
