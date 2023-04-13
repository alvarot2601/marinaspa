import React, { useLayoutEffect, useEffect } from 'react';
import FotoMari from "../assets/images/header-background-removebg.png";
import Video from "../assets/video/corporal.mp4";
import NavBar from './NavBar';
import {BsArrowDownCircle} from "react-icons/bs";
const Header = ()=> {
    useEffect(()=>{
        
    }, []);

    return (
        <header className='header'>
            <div className='header__text-container wrap'>   
                <span className='header__name quote'>MARI AGUZA - </span><span className='header__job'>ESTILISTA PERSONAL</span>
                <br></br>
                <p>
                    <span>Centro de estética </span> <br /><span>MarinaSpá</span>
                </p>
            </div>
            <button className='button button--white'>
                Trabaja conmigo <BsArrowDownCircle/>
            </button>
            {
            //<img className='header__image header__image--0' src={FotoMari} alt="" />
            }
        </header>
    );
}
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