import React from "react";
import DiagnosticoImage from "../assets/images/diagnostico.JPG";
const Diagnostico = () => {
    return (
      <section className="diagnostico">
        <div className="diagnostico__wrapper">
          <h4 className="diagnostico__title">
            Diagnóstico <br />
            <span className="diagnostico__title--2">MARINASPÁ</span>
          </h4>
          <p>
            La clave del éxito en cualquier tipo de tratamiento de belleza
            reside en un previo diagnostico exhaustivo y personalizado para cada
            cliente, sin duda ese es el pilar donde se construyen los cimientos
            del éxito. por eso antes de pasar al tratamiento nos gustaría
            conocer un poco mas de ti y que es lo que te hace única.
          </p>
          <a href="/contacto" className="button">Solicitar Diagnóstico</a>
        </div>
        <img src={DiagnosticoImage} alt="" />
      </section>
    );
}
export default Diagnostico;