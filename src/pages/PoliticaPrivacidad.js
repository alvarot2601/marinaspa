import React from "react";
const PoliticaPrivacidad = () => {
  return (
    <Layout>
      <main className="text-center mx-auto p-10 w-full lg:w-10/12">
        <h1 className="text-6xl font-bold">Política de Privacidad</h1>
        <div className="my-5">
          <p className="text-3xl font-semibold">Información que recopilamos</p>
          <p>
            En este sitio web, no recopilamos información personal identificable
            de los usuarios de forma automática. Solo recopilamos información
            proporcionada voluntariamente por los usuarios a través de
            formularios de contacto u otras interacciones directas.
          </p>
        </div>
        <div className="my-5">
          <p className="text-3xl font-semibold">Uso de la información</p>
          <p>
            Cualquier información proporcionada por los usuarios será utilizada
            exclusivamente para responder a sus consultas y brindar el servicio
            solicitado. No compartiremos, venderemos ni cederemos información
            personal a terceros sin su consentimiento, excepto cuando sea
            requerido por ley.
          </p>
        </div>
        <div className="my-5">
          <p className="text-3xl font-semibold">Enlaces a sitios externos</p>
          <p>
            Este sitio web puede contener enlaces a sitios web externos. No nos
            hacemos responsables de las prácticas de privacidad de esos sitios.
            Al hacer clic en un enlace externo, se recomienda leer la política
            de privacidad del sitio web correspondiente.
          </p>
        </div>
        <div className="my-5">
          <p className="text-3xl font-semibold">Seguridad</p>
          <p>
            Implementamos medidas de seguridad razonables para proteger la
            información recopilada y almacenada. Sin embargo, no podemos
            garantizar la seguridad completa de los datos transmitidos a través
            de Internet.
          </p>
        </div>
        <div className="my-5">
          <p className="text-3xl font-semibold">
            Cambios en la política de privacidad
          </p>
          <p>
            Nos reservamos el derecho de actualizar o modificar esta política de
            privacidad en cualquier momento. Se alienta a los usuarios a revisar
            esta página periódicamente para estar informados sobre los cambios.
          </p>
        </div>
        <div className="my-5">
          <p className="text-3xl font-semibold">Contacto</p>
          <p>
            Si tienes preguntas o inquietudes sobre nuestra política de
            privacidad, por favor contáctanos.
          </p>
        </div>
      </main>
    </Layout>
  );
};
export default PoliticaPrivacidad;
