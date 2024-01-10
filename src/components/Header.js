import React, { useEffect, useState } from "react";
import PosterImage from "../assets/images/esteticista_profesional-1.jpg";
import Video from "../assets/video/corporal.mp4";
import Video2 from "../assets/video/marinaspa.mp4";

//fontawesome
import { Tooltip, Button } from "@nextui-org/react";
import { Chip } from "@nextui-org/react";

const Header = (props) => {
  //const [isOpen, setIsOpen] = useState(false);
  /*useEffect(() => {
    if (window.innerWidth >= 640) {
      setTimeout(() => {
        //para que sea abra el tooltip automaticamente si el usuario no se ha desplazado hacia abajo mucho, mas concretamente se abrira si la coordenada y del boton del tooltip es inferior a la altura de la ventana y mayor o igual a la mitad de la altura de la ventana + 100px 
        if (document.getElementById("tooltip").getBoundingClientRect().top < window.innerHeight && document.getElementById("tooltip").getBoundingClientRect().top >= ((window.innerHeight / 2) - 100))
          setIsOpen(true);
      }, 2000);

      setTimeout(() => {
        setIsOpen(false);
      }, 4000);
    }
  }, []);*/

  useEffect(() => {
    const video = document.querySelector("video");

    //para quitarle el grayscale y el blur al video
    setTimeout(() => {
      video.classList.remove("grayscale");
    }, 2000);

    setTimeout(() => {
      video.classList.remove("blur-lg");
    }, 2500);
    //para abrir el toolbox

    const stopVideo = (e) => {
      //e.preventDefault();
      //video.pause();
      const videoWrapper = document.querySelector("#header__second-col");

      videoWrapper.classList.replace("relative", "absolute");

      //document.querySelector("#tooltip").classList.add("hidden");

      //para que no se mueva el texto del header con la animacion
      document
        .querySelector(".header")
        .classList.replace("justify-center", "justify-start");
      if (window.innerWidth >= 640) {
        videoWrapper.classList.add("right-0");
        videoWrapper.classList.add("bottom-0");
        videoWrapper.classList.toggle("sm:w-2/4");
      } else {
        videoWrapper.classList.add("right-0");
        videoWrapper.classList.add("bottom-0");
        videoWrapper.classList.replace("h-2/6", "h-full");
      }
      //document.querySelector('#header__first-col').classList.add('hidden')
    };
    const showControls = (hide) => {
      const chip = document.querySelector("#chip");
      //para añadirle los controles al video
      if (hide === true) {
        video.setAttribute("controls", true);
        chip.classList.add("hidden");
      } else {
        video.removeAttribute("controls");
        chip.classList.remove("hidden");
      }
    };

    video.addEventListener("play", stopVideo);
    video.addEventListener("mouseenter", () => showControls(true));
    video.addEventListener("mouseleave", () => showControls(false));
    //falta cleanup para todos los addevent listeners
    return () => {
      for (let i = 0; i < 3; i++) {
        if (i == 0) return video.removeEventListener("play", stopVideo);
      }
    };
  }, []);

  useEffect(() => {
    //ScrollReveal().reveal('.header__job', options);
    //ScrollReveal().reveal('h1', options);
    // ScrollReveal().reveal('.main__first-text p', options);
    //ScrollReveal().reveal('.accordion p.text', options);
    //ScrollReveal().reveal('.diagnostico p', options);
    //ScrollReveal().reveal('.tratamientos__general-info', options);
    //ScrollReveal().reveal('.swiper-slide:nth-of-type(1), .swiper-slide:nth-of-type(2), .swiper-slide:nth-of-type(3)', options);
  });

  return (
    <header
      className={`header ${props.classProp} h-[90vh] relative bg-primary text-rose-950 flex flex-col sm:flex-row justify-center items-center`}
    >
      <div
        id="header__first-col"
        className="w-full sm:w-2/4 h-[50vh] sm:h-full flex  flex-col justify-center  py-5 px-10 text-center"
      >

        <h1 className="animate-charcter font-extrabold leading-tight text-5xl md:text-5xl lg:text-7xl xl:text-8xl 2xl:text-9xl">
          <span>Centro de Estética</span> <br />
          <span>Marina Spá</span>
        </h1>
      </div>
      <div
        id="header__second-col"
        className="w-full sm:w-2/4 h-[40vh] sm:h-full relative"
      >
        <Chip
          id="chip"
          variant="shadow"
          className="absolute top-2 right-2 z-20 flex flex-row bg-zinc-900 text-primary animate-bounce"
          startContent={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z"
              />
            </svg>
          }
        >
          Video
        </Chip>
        <video
          className="w-full h-full  object-cover grayscale blur-lg z-10 hover:cursor-pointer"
          poster={PosterImage}
        >
          <source src={Video2} type="video/mp4" />
        </video>
      </div>
      
      {/*<a href='/contacto' className='button button--transparent'>
                Trabaja conmigo
                </a> */}
      {
        //<img className='header__image header__image--0' src={FotoMari} alt="" />
      }
    </header>
  );
};
export default Header;
/*<svg className='header__image header__image--1' viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <path fill="#000000" d="M64.2,-38C76.9,-15.1,76.6,14.5,63.7,38.5C50.8,62.5,25.4,81,-1.7,82C-28.8,83,-57.5,66.4,-71.7,41.6C-85.9,16.8,-85.6,-16.2,-71.2,-40.1C-56.8,-64,-28.4,-78.7,-1.3,-77.9C25.8,-77.2,51.5,-60.9,64.2,-38Z" transform="translate(100 100)" />
            </svg>
            <svg className='header__image header__image--2' viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <path fill="#000000" d="M63.8,-35C77.3,-13.5,79.1,16.6,66.5,37.8C54,58.9,27,71.2,0.9,70.6C-25.1,70.1,-50.3,56.8,-61.6,36.4C-72.9,16,-70.3,-11.5,-57.7,-32.5C-45.1,-53.4,-22.6,-67.8,1.3,-68.5C25.2,-69.3,50.4,-56.4,63.8,-35Z" transform="translate(100 100)" />
            </svg>
            <svg className='header__image header__image--3' viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <path fill="#FFFFFF" d="M64.2,-38C76.9,-15.1,76.6,14.5,63.7,38.5C50.8,62.5,25.4,81,-1.7,82C-28.8,83,-57.5,66.4,-71.7,41.6C-85.9,16.8,-85.6,-16.2,-71.2,-40.1C-56.8,-64,-28.4,-78.7,-1.3,-77.9C25.8,-77.2,51.5,-60.9,64.2,-38Z" transform="translate(100 100)" />
            </svg>
            
            
            <Tooltip
        isOpen={isOpen}
        onOpenChange={(open) => setIsOpen(open)}
        closeDelay={2000}
        showArrow={true}
        placement="right-end"
        className="w-2/4 p-5 text-lg"
        content="Nuestras modernas instalaciones en nuestro centro de estética te
                brindarán un ambiente relajante y acogedor, donde podrás
                desconectar del ajetreo diario y disfrutar de una experiencia de
                bienestar total. Ya sea que desees un tratamiento facial
                revitalizante, un masaje relajante, un tratamiento de depilación
                láser de última generación o cualquier otro servicio de
                estética, estamos aquí para atender todas tus necesidades."
      >
        <Button
          aria-label="tooltip"
          id="tooltip"
          isIconOnly
          className=" absolute left-2 bottom-5 text-rose-200 bg-zinc-700 z-0"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-7 h-7 animate-bounce"
          >
            <path
              stroke="round"
              strokeLinejoin="round"
              d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
            />
          </svg>
        </Button>
      </Tooltip>
            
            
            
            */
