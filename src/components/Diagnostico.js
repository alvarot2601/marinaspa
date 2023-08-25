import React from "react";
import DiagnosticoImage from "../assets/images/diagnostico.JPG";
const Diagnostico = () => {
    return (
      <section className="diagnostico bg-gradient-to-b from-indigo-300 to-violet-400 ">
        <div className="diagnostico__wrapper">
          <h4 className="text-6xl font-extrabold leading-tight bg-clip-text text-transparent bg-gradient-to-tr from-indigo-400 to-violet-950">
            Diagnóstico <br />
            <span className="">MARINASPÁ</span>
          </h4>
          <p className="font-bold text-xl max-w-[30vw] mt-8 my-10 bg-clip-text text-transparent bg-gradient-to-tr from-indigo-500 to-violet-950">
            La clave del éxito en cualquier tipo de tratamiento de belleza
            reside en un previo diagnostico exhaustivo y personalizado para cada
            cliente, sin duda ese es el pilar donde se construyen los cimientos
            del éxito. por eso antes de pasar al tratamiento nos gustaría
            conocer un poco mas de ti y que es lo que te hace única.
          </p>
          <a href="/contacto" className="button2 material-bubble">Solicitar Diagnóstico</a>
        </div>
        <img src={DiagnosticoImage} alt="" />
      </section>
    );
}
export default Diagnostico;