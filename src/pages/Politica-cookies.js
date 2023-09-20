import React from "react";
import Layout from "../components/Layout";
const PoliticaCookies = () => {
  return (
    <Layout>
        <main className="text-center mx-auto p-10 w-full lg:w-10/12">
      <h1 className="text-6xl font-bold">Política de Cookies</h1>
      <div className="my-5">
        <p className="text-3xl font-semibold">¿Qué son las cookies?</p>
        <p>
          Las cookies son pequeños archivos de texto que se almacenan en tu
          dispositivo cuando visitas un sitio web. Estos archivos contienen
          información que ayuda a mejorar tu experiencia de navegación y
          permiten que el sitio funcione de manera más eficiente.
        </p>
      </div>
      <div className="my-5">
        <p className="text-3xl font-semibold">Uso de cookies en este sitio web</p>
        <p>
          En este sitio web no utilizamos cookies para almacenar información
          personal ni para realizar seguimientos de tus actividades en línea. No
          recopilamos datos que puedan identificarte de forma directa o
          indirecta.
        </p>
      </div>
      <div className="my-5">
        <p className="text-3xl font-semibold">Cookies de terceros</p>
        <p>
          No permitimos que terceros, como anunciantes o servicios de análisis,
          utilicen cookies en este sitio web para recopilar información sobre
          tus hábitos de navegación.
        </p>
      </div>
      <div className="my-5">
        <p className="text-3xl font-semibold">¿Cómo puedo gestionar las cookies?</p>
        <p>
          Puedes configurar tu navegador para que rechace todas las cookies o
          para que te informe cuando se está enviando una cookie. Consulta la
          ayuda de tu navegador para obtener instrucciones sobre cómo hacerlo.
          Recuerda que al deshabilitar las cookies, es posible que algunas
          funciones y características de este sitio web no estén disponibles o
          no funcionen correctamente.
        </p>
      </div>
      <div className="my-5">
        <p className="text-3xl font-semibold">Contacto</p>
        <p>
          Si tienes alguna pregunta o inquietud sobre nuestra política de
          cookies, no dudes en contactarnos.
        </p>
      </div>
    </main>
    </Layout>
  );
};

export default PoliticaCookies;
