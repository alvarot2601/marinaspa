import React, { useEffect, useState } from "react";
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
  const [screenWidth, setScreenWidth] = useState(0);
  useEffect(() => {
    setScreenWidth(window.innerWidth);
  }, []);
  const opinions = [
    {
      user: "Virginia García",
      opinion:
        "¡Maravilloso! Me regalo mi marido una experiencia en Marina Spá para San Valentín y fue una pasada. Constaba de varias cosas, y a cuál mejor. El entorno ya invita a relajarte desde el inicio, y una vez que empiezas a recibir los tratos de Mari y sus compañeras... no os puedo explicar con palabras. Lo suyo es que vayáis a probar, que no os vais a arrepentir. ¡Recomendadísimo!",
      punctuation: [
        <FontAwesomeIcon icon={faStar} className="text-rose-400" />,
        <FontAwesomeIcon icon={faStar} className="text-rose-400" />,
        <FontAwesomeIcon icon={faStar} className="text-rose-400" />,
        <FontAwesomeIcon icon={faStar} className="text-rose-400" />,
        <FontAwesomeIcon icon={faStar} className="text-rose-400" />,
      ],
      url: "https://www.google.com/maps/contrib/106740853058942327357/place/ChIJJ5vuvJpVEQ0R9Zkm8NDy6ss/@37.8541735,-7.7390933,6.27z/data=!4m6!1m5!8m4!1e1!2s106740853058942327357!3m1!1e1?hl=es&entry=ttu",
    },
    {
      user: "Zaida Gonzalez",
      opinion:
        "Hoy he disfrutado del beauty menú diciembre, q me regalaron por reyes. Totalmente recomendable. La hidratación corporal es muy agradable, así como el tratamiento facial 360. También me gustó el maquillaje. Muy profesionales y un ambiente muy relajante. Mi enhorabuena. Muchas gracias Laura.",
      punctuation: [
        <FontAwesomeIcon icon={faStar} className="text-rose-400" />,
        <FontAwesomeIcon icon={faStar} className="text-rose-400" />,
        <FontAwesomeIcon icon={faStar} className="text-rose-400" />,
        <FontAwesomeIcon icon={faStar} className="text-rose-400" />,
        <FontAwesomeIcon icon={faStar} className="text-rose-400" />,
      ],
      url: "https://www.google.com/maps/contrib/115417099936205970083/place/ChIJJ5vuvJpVEQ0R9Zkm8NDy6ss/@37.4684953,-7.3078281,8z/data=!4m6!1m5!8m4!1e1!2s115417099936205970083!3m1!1e1?hl=es&entry=ttu",
    },
    {
      user: "Carmen Rojas",
      opinion:
        "Puedo decir que es mi peluquería de confianza, cuentan con muy buenas profesionales que saben qué necesita cada cabello en el momento. Además también tienen a disposición del cliente una innumerable cantidad de servicios como por ejemplo: depilación láser, tratamientos de exfoliación corporal, rejuvenecedores, lifting, tratamiento de presoterapia, distintos tipos de masajes, drenajes linfáticos subacuáticos.",
      punctuation: [
        <FontAwesomeIcon icon={faStar} className="text-rose-400" />,
        <FontAwesomeIcon icon={faStar} className="text-rose-400" />,
        <FontAwesomeIcon icon={faStar} className="text-rose-400" />,
        <FontAwesomeIcon icon={faStar} className="text-rose-400" />,
        <FontAwesomeIcon icon={faStar} className="text-rose-400" />,
      ],
      url: "https://www.google.com/maps/contrib/109386828765142338035/place/ChIJJ5vuvJpVEQ0R9Zkm8NDy6ss/@39.1399156,-5.9577313,8z/data=!4m6!1m5!8m4!1e1!2s109386828765142338035!3m1!1e1?hl=es&entry=ttu",
    },
    {
      user: "Teresa Corrales",
      opinion:
        "Lugar inmejorable y muy confortable, atención profesional, con unos tratamientos y maquinaria a la última, sin duda te hacen sentir guapa tanto por dentro como fuera. ¡Gracias por ser mi centro de confianza!",
      punctuation: [
        <FontAwesomeIcon icon={faStar} className="text-rose-400" />,
        <FontAwesomeIcon icon={faStar} className="text-rose-400" />,
        <FontAwesomeIcon icon={faStar} className="text-rose-400" />,
        <FontAwesomeIcon icon={faStar} className="text-rose-400" />,
        <FontAwesomeIcon icon={faStar} className="text-rose-400" />,
      ],
      url: "https://www.google.com/maps/contrib/106536559141181079408/place/ChIJJ5vuvJpVEQ0R9Zkm8NDy6ss/@38.8015452,-6.614352,7z/data=!4m6!1m5!8m4!1e1!2s106536559141181079408!3m1!1e1?hl=es&entry=ttu",
    },
    {
      user: "Mery RS",
      opinion:
        "¡Amplia oferta en tratamientos y servicios! Buen trato, personal muy amable! La estancia se hizo muy amena mientras nos realizaron las uñas semipermanentes. ¡Lo recomiendo y volveré!",
      punctuation: [
        <FontAwesomeIcon icon={faStar} className="text-rose-400" />,
        <FontAwesomeIcon icon={faStar} className="text-rose-400" />,
        <FontAwesomeIcon icon={faStar} className="text-rose-400" />,
        <FontAwesomeIcon icon={faStar} className="text-rose-400" />,
        <FontAwesomeIcon icon={faStar} className="text-rose-400" />,
      ],
      url: "https://www.google.com/maps/contrib/102483368780463811901/place/ChIJJ5vuvJpVEQ0R9Zkm8NDy6ss/@38.4236734,-6.4204059,16.46z/data=!4m4!1m3!8m2!1e1!2s102483368780463811901?hl=es&entry=ttu",
    },
    {
      user: "Carmina Barreiro",
      opinion:
        "Fuimos 3 amigas a consentirnos. Elegimos un beauty menú. Nos encantó el lugar, muy profesional y agradable el trato. 100% recomendable.",
      punctuation: [
        <FontAwesomeIcon icon={faStar} className="text-rose-400" />,
        <FontAwesomeIcon icon={faStar} className="text-rose-400" />,
        <FontAwesomeIcon icon={faStar} className="text-rose-400" />,
        <FontAwesomeIcon icon={faStar} className="text-rose-400" />,
        <FontAwesomeIcon icon={faStar} className="text-rose-400" />,
      ],
      url: "https://www.google.com/maps/contrib/109978121357351299597/place/ChIJJ5vuvJpVEQ0R9Zkm8NDy6ss/@38.4215337,-6.4284825,15.29z/data=!4m4!1m3!8m2!1e1!2s109978121357351299597?hl=es&entry=ttu",
    },
    {
      user: "M G",
      opinion:
        "¡Hacía mucho tiempo que no conseguía relajarme tanto! Magníficas profesionales, lugar de ensueño y tratamientos magníficos. Para terminar, su bañera hidromasaje te transporta a otros mundos! Volveré sin duda, ¡Gracias por todo 😊 !",
      punctuation: [
        <FontAwesomeIcon icon={faStar} className="text-rose-400" />,
        <FontAwesomeIcon icon={faStar} className="text-rose-400" />,
        <FontAwesomeIcon icon={faStar} className="text-rose-400" />,
        <FontAwesomeIcon icon={faStar} className="text-rose-400" />,
        <FontAwesomeIcon icon={faStar} className="text-rose-400" />,
      ],
      url: "https://www.google.com/maps/contrib/107280796014450744426/place/ChIJJ5vuvJpVEQ0R9Zkm8NDy6ss/@38.424423,-6.4202196,17.42z/data=!4m4!1m3!8m2!1e1!2s107280796014450744426?hl=es&entry=ttu",
    },
    {
      user: "Raquel González",
      opinion:
        "Sitio precioso, limpio, cuidado cada detalle, muy profesionales, buenos productos y en definitiva muy recomendable. Entrar en vuestro spá es dedicar una hora para ti, saliendo del estrés diario y en mano de las mejores profesionales.",
      punctuation: [
        <FontAwesomeIcon icon={faStar} className="text-rose-400" />,
        <FontAwesomeIcon icon={faStar} className="text-rose-400" />,
        <FontAwesomeIcon icon={faStar} className="text-rose-400" />,
        <FontAwesomeIcon icon={faStar} className="text-rose-400" />,
        <FontAwesomeIcon icon={faStar} className="text-rose-400" />,
      ],
      url: "https://www.google.com/maps/contrib/118237533843748638751/place/ChIJJ5vuvJpVEQ0R9Zkm8NDy6ss/@38.1739105,-7.0912821,7z/data=!4m6!1m5!8m4!1e1!2s118237533843748638751!3m1!1e1?hl=es&entry=ttu",
    },
  ];
  return (
    <section className="testimonios text-center py-10 px-5 bg-primary text-zinc-700">
      <h6 className="text-5xl md:text-6xl lg:text-8xl font-bold">
        Testimonios
      </h6>
      <div className="flex gap-3 items-center justify-center text-4xl my-4">
        <p className="text-xl sm:text-2xl md:text-4xl mx-5">
          Puntuación de
          <FontAwesomeIcon icon={faStar} className="text-rose-400 ml-1" />
          <FontAwesomeIcon icon={faStar} className="text-rose-400" />
          <FontAwesomeIcon icon={faStar} className="text-rose-400" />
          <FontAwesomeIcon icon={faStar} className="text-rose-400" />
          <FontAwesomeIcon icon={faStar} className="text-rose-400 mr-1" />
          basada en más de{" "}
          <Link
            className="text-3xl sm:text-4xl text-rose-400"
            isExternal
            href="https://www.google.com/search?q=opiniones+marinaspa&rlz=1C1UEAD_esES927ES927&oq=opiniones+marinaspa&gs_lcrp=EgZjaHJvbWUqBggAEEUYOzIGCAAQRRg7MgYIARBFGEAyCggCEAAYCBgNGB4yCggDEAAYCBgNGB7SAQgzNjQ3ajBqN6gCALACAA&sourceid=chrome&ie=UTF-8#lrd=0xd11559abcee9b27:0xcbeaf2d0f02699f5,1,,,,"
          >
            60 opiniones.
          </Link>
        </p>
      </div>

      <Swiper
        navigation={true}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        loop={true}
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination, Navigation]}
      >
        {opinions.map((op, index) => {
          return (
            <SwiperSlide className="w-full max-w-[490px]" key={`op-${index}`}>
              <Card className="w-2/4 mx-auto my-5 bg-zinc-100 w-11/12 min-h-[338px]">
                <CardHeader className="flex items-center justify-center gap-4">
                  <Avatar
                    icon={<AvatarIcon />}
                    className="hidden sm:block w-10 h-10 md:w-20 md:h-20"
                    classNames={{
                      base: "bg-gradient-to-br from-zinc-300 to-rose-300",
                      icon: "text-black/80",
                    }}
                  />
                  <span className="text-xl sm:text-2xl font-semibold">{op.user}</span>
                  <div>
                    {op.punctuation.map((star, index2) => {
                      return (
                        <span key={`start-${index}-${index2}`}>
                        {star}
                        </span>
                      );
                    })}
                  </div>
                </CardHeader>
                <Divider />
                <CardBody className="text-center flex justify-center">
                  <p className="italic line-clamp-5">{op.opinion}</p>
                </CardBody>
                <Divider />
                <CardFooter className="flex justify-center">
                  <Link
                    className="text-lg text-rose-400"
                    isExternal
                    showAnchorIcon
                    href={op.url}
                  >
                    Leer opinión {op.sitename}
                  </Link>
                </CardFooter>
              </Card>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};
export default Testimonials;
