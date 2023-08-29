import React from "react";
import DiagnosticoImage from "../assets/images/diagnostico.jpg";
import { Button, Link } from "@nextui-org/react";
const Diagnostico = () => {
    return (
      <section className="diagnostico bg-rose-100 flex items-center justify-envenly py-10 px-10">
        <div className="w-6/12">
          <h4 className="text-6xl font-extrabold leading-tight text-zinc-700">
            Diagnóstico <br />
            <span className="">MARINASPÁ</span>
          </h4>
          <p className="font-semibold text-xl max-w-[30vw] mt-4 my-10 ">
            La clave del éxito en cualquier tipo de tratamiento de belleza
            reside en un previo diagnostico exhaustivo y personalizado para cada
            cliente, sin duda ese es el pilar donde se construyen los cimientos
            del éxito. por eso antes de pasar al tratamiento nos gustaría
            conocer un poco mas de ti y que es lo que te hace única.
          </p>
          <Button as={Link} href="/contacto" size="lg" radius="sm" variant="shadow" className="px-10 py-8 bg-zinc-700 text-zinc-50 text-xl font-semibold">Solicitar diagnóstico</Button>
        </div>
        <div className="w-6/12 h-full">
          <img src={DiagnosticoImage} alt="" className="object-cover rounded-xl" />
        </div>
      </section>
    );
}
export default Diagnostico;