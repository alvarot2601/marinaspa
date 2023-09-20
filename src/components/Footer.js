import { Divider, Link } from "@nextui-org/react";
import React from "react";
import { FaFacebook, FaInstagram, FaCopyright } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer px-5 py-10 bg-zinc-100 text-zinc-600 flex flex-col gap-8">
      <div className="flex gap-5 flex-col md:flex-row justify-evenly">
        <div className="flex flex-row md:flex-col items-center justify-center gap-5 flex-wrap flex-1">
          <span>Zafra – Calle Reyes Huertas Nº 8</span>
          <span>644 799 000</span>
          <div className="flex gap-1">
            <a href="">
              <FaFacebook className="text-blue-600"/>
            </a>
            <a href="">
              <FaInstagram className="text-pink-600"/>
            </a>
          </div>
        </div>
        <div className="flex flex-row md:flex-col order-3 items-center justify-center gap-3 flex-wrap flex-1">
          <a className="text-slate-600" href="/contacto">Contacto</a>
          <a href="/politica-cookies">Aviso Legal</a>
          <a href="/politica-privacidad">Política de privacidad</a>
          <a href="/politica-cookies">Política de cookies</a>
        </div>
        <Divider className="bg-zinc-400 h-[0.5px] md:h-auto w-full md:w-[0.5px]"></Divider>
        <div className="flex flex-row md:flex-col items-center justify-center gap-3 flex-wrap flex-1">
          <a href="/programas-faciales">Programas Faciales</a>
          <a href="/estetica-general">Estética General</a>
          <a href="/silueta-corporal">Silueta Corporal</a>
          <a href="/bienestar-y-relajacion">Bienestar y relajación</a>
          <a href="/depilacion-y-fotodepilacion">Depilación</a>
        </div>
        <Divider className="bg-zinc-400 h-[0.5px] md:h-auto w-full md:w-[0.5px]"></Divider>
      </div>
      <div className="flex justify-start text-zinc-950">
        <span className="flex items-center gap-2 text-sm">
          <FaCopyright className="text-xl"/> Copyright 2023
        </span>
      </div>
    </footer>
  );
};
export default Footer;
