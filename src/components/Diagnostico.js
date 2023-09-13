import React from "react";
import DiagnosticoImage from "../assets/images/diagnostico.jpg";
import { Button, Link } from "@nextui-org/react";
const Diagnostico = () => {
    return (
      <section className="diagnostico bg-zinc-100 flex flex-col gap-5 lg:flex-row  py-10 px-5 text-center lg:text-left">
        <div className="w-full lg:w-6/12 flex flex-col gap-5 justify-center items-center lg:items-start">
          <h4 className="text-5xl md:text-6xl lg:text-8xl font-bold">
            Diagnóstico Marina Spá
          </h4>
          <p className=" text-xl mb-2 lg:max-w-[40vw] xl:max-w-[35vw]">
            La clave del éxito en cualquier tipo de tratamiento de belleza
            reside en un previo diagnostico exhaustivo y personalizado para cada
            cliente, sin duda ese es el pilar donde se construyen los cimientos
            del éxito. por eso antes de pasar al tratamiento nos gustaría
            conocer un poco mas de ti y que es lo que te hace única.
          </p>
          <Button as={Link} href="/contacto" size="lg" radius="sm" variant="shadow" className="w-max px-10 py-8 bg-zinc-700 text-zinc-50 text-xl font-semibold">Solicitar diagnóstico</Button>
        </div>
        <div className="w-ful lg:w-6/12">
          <img src={DiagnosticoImage} alt="" className="h-full object-cover rounded-xl" />
        </div>
      </section>
    );
}
export default Diagnostico;