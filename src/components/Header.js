import React, {useEffect } from "react";
import PosterImage from "../assets/images/poster-video.jpg";
import Video from "../assets/video/corporal.mp4";

//fontawesome
import {FaVideoSlash } from "react-icons/fa";
import { BsArrowDownCircle } from "react-icons/bs";


const Header = (props) => {

  useEffect(() => {
    const video = document.querySelector('video'); 

    //para quitarle el grayscale y el blur al video
    setTimeout(()=>{
        video.classList.remove('grayscale');
    }, 2000);

    setTimeout(()=>{
        video.classList.remove('blur-lg');
    }, 2500);

    //para añadirle los controles al video
    setTimeout(()=>{
        video.setAttribute('controls', true);
    }, 3000);

    const stopVideo = (e)=>{
        //e.preventDefault();
        //video.pause();


        document.querySelector('#header__first-col').classList.add('-translate-x-2/4');
        
        //document.querySelector('#header__second-col').classList.add('-translate-x-full');
        document.querySelector('#header__second-col').classList.add('absolute');
        document.querySelector('#header__second-col').classList.add('right-0');
        document.querySelector('#header__second-col').classList.add('top-0');
        document.querySelector('#header__second-col').classList.replace('w-2/4', 'w-full');

      }

    video.addEventListener('play', stopVideo);

    return () => video.removeEventListener('play', stopVideo);
  }, []);

  const closeVideo = () => {
    document
      .querySelector(".header__text-container")
      .classList.remove("slide-out-blurred-top");
    document
      .querySelector(".video-container")
      .classList.remove("slide-in-elliptic-left-bck");
    document
      .querySelector(".video-container")
      .classList.add("slide-out-blurred-top");
    setTimeout(() => {
      document.querySelector(".video-container").style.display = "none";
      document.querySelector(".header__text-container").style.display = "flex";
      document
        .querySelector(".header__text-container")
        .classList.add("slide-in-elliptic-left-bck");
    }, 1000);
  };

  const showVideo = () => {
    document
      .querySelector(".video-container")
      .classList.remove("slide-out-blurred-top");
    document
      .querySelector(".header__text-container")
      .classList.remove("slide-in-elliptic-left-bck");
    document
      .querySelector(".header__text-container")
      .classList.add("slide-out-blurred-top");

    setTimeout(() => {
      document.querySelector(".header__text-container").style.display = "none";
      document.querySelector(".video-container").style.display = "flex";
      document
        .querySelector(".video-container")
        .classList.add("slide-in-elliptic-left-bck");
    }, 1000);
  };
  const options = {
    delay: 10,
    distance: "50px",
    interval: 100,
  };
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
    <header className={`header ${props.classProp} h-[90vh] relative bg-rose-200 text-rose-950`}>
      <div className="flex justify-center items-center h-full" >
        <div id="header__first-col" className="h-full w-2/4 flex flex-col justify-center py-5 pl-10" >
          <div>
          <p className="text-xl font-semibold">
            <span>MARI AGUZA - </span>
            <span>ESTILISTA PERSONAL</span>
          </p>
          <h1 className="font-bold">
            <span>Centro de estética </span> <br />
            <span>MarinaSpá</span>
          </h1>
          </div>
        </div>
        <div id="header__second-col" className="w-2/4 h-full" >
            <video className="w-full h-full object-cover grayscale blur-lg" poster={PosterImage}>
            <source src={Video} type="video/mp4" />
            </video>
        </div>
      </div>
      {/*<a href='/contacto' className='button button--transparent'>
                Trabaja conmigo
                </a> */}

      <BsArrowDownCircle className="animate-bounce" />
      {
        //<img className='header__image header__image--0' src={FotoMari} alt="" />
      }
      <div className="video-container">
        <video controls autoplay className="">
          <source src={Video} type="video/mp4" />
        </video>
        <button
          className="button button--round hide-video"
          onClick={closeVideo}
          id="hide-video-btn"
        >
          <FaVideoSlash />
        </button>
      </div>
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
            </svg> */
