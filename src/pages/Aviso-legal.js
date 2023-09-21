import React from "react";
import Layout from "../components/Layout";
const AvisoLegal = () => {
  return (
    <Layout>
      <main className="text-center mx-auto p-10 w-full lg:w-10/12">
        <h1 className="text-6xl font-bold">Aviso Legal</h1>
        <div className="my-5">
          <p className="text-2xl sm:text-3xl font-semibold">Responsable del sitio web</p>
          <p>
            Nombre de la empresa o persona responsable del sitio web: [Nombre de
            la empresa o persona]
          </p>
          <p>Dirección: [Dirección]</p>
          <p>Correo electrónico: [Correo electrónico de contacto]</p>
          <p>Teléfono: [Número de teléfono]</p>
        </div>
        <div className="my-5">
          <p className="text-2xl sm:text-3xl font-semibold">Condiciones de uso</p>
          <p>
            El acceso y uso de este sitio web están sujetos a los siguientes
            términos y condiciones:
          </p>
          <ol>
            <li>
              Aceptación de términos: Al acceder y utilizar este sitio web,
              aceptas y estás sujeto a estos términos y condiciones en su
              totalidad.
            </li>
            <li>
              Propiedad intelectual: Todos los derechos de propiedad intelectual
              del contenido de este sitio web, incluidos textos, gráficos,
              logotipos, imágenes y software, son propiedad de [Nombre de la
              empresa o persona] o de terceros y están protegidos por las leyes
              de propiedad intelectual.
            </li>
            <li>
              Uso permitido: Estás autorizado a ver, descargar temporalmente una
              copia de los materiales para uso personal y no comercial. No
              puedes modificar el material ni reproducirlo en otro sitio o forma
              de publicación sin el consentimiento previo por escrito de [Nombre
              de la empresa o persona].
            </li>
            <li>
              Limitaciones de responsabilidad: Este sitio web se proporciona
              "tal cual", sin garantías de ningún tipo, ya sean expresas o
              implícitas. [Nombre de la empresa o persona] no será responsable
              de los daños que puedan surgir del uso o la imposibilidad de uso
              de este sitio web.
            </li>
            <li>
              Enlaces a terceros: Este sitio web puede contener enlaces a sitios
              web de terceros. Estos enlaces son proporcionados solo para tu
              conveniencia y no implican respaldo o responsabilidad por parte de
              [Nombre de la empresa o persona] sobre el contenido de esos sitios
              enlazados.
            </li>
            <li>
              Modificaciones: [Nombre de la empresa o persona] se reserva el
              derecho de modificar estos términos y condiciones en cualquier
              momento. Los cambios serán efectivos inmediatamente después de la
              publicación de las modificaciones en este sitio web.
            </li>
          </ol>
        </div>
        <div className="my-5">
          <p className="text-2xl sm:text-3xl font-semibold">Ley aplicable</p>
          <p>
            Este aviso legal se rige por las leyes de [país/región]. Cualquier
            disputa que surja en relación con este aviso legal estará sujeta a
            la jurisdicción exclusiva de los tribunales de [ciudad/país].
          </p>
        </div>
        <div className="my-5">
          <p className="text-2xl sm:text-3xl font-semibold">Contacto</p>
          <p>
            Si tienes preguntas o inquietudes sobre este aviso legal, por favor
            contáctanos a través de la información proporcionada.
          </p>
        </div>
      </main>
    </Layout>
  );
};
export default AvisoLegal;
