import React from "react";
import VideoDiagnostico from "../assets/video/diagnostico.mp4";
import { Button } from "@mui/material";
import { NavLink } from "react-router-dom";
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import { theme } from "../theme";
const Diagnostico = () => {
    return (
      <section className="diagnostico flex flex-col gap-5 lg:flex-row  px-5 lg:text-left text-primaryDarker">
        <div className="w-full lg:w-7/12 flex flex-col gap-5 justify-center items-center text-center">
          <h4 className="text-5xl md:text-6xl lg:text-8xl font-bold">
            Diagnóstico Marina Spá
          </h4>
          <p className=" text-xl mb-2 px-5">
            La clave del éxito en cualquier tipo de tratamiento de belleza
            reside en un previo diagnostico exhaustivo y personalizado para cada
            cliente, sin duda ese es el pilar donde se construyen los cimientos
            del éxito. por eso antes de pasar al tratamiento nos gustaría
            conocer un poco mas de ti y que es lo que te hace única.
          </p>
          <Button component={NavLink} to="/contacto" className="text-primaryDarker" variant="outlined" endIcon={<EventAvailableIcon/>} size="large">Solicitar Diagnóstico</Button>
        </div>
        <div className="w-full lg:w-5/12 flex justify-center">
          <video controls muted autoPlay className="rounded-[5%] max-h-[700px]">
            <source src={VideoDiagnostico} type="video/mp4"/>
            Tu navegador no soporta videos.
          </video>
        </div>
      </section>
    );
}
export default Diagnostico;