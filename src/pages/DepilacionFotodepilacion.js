import React, { useState, useRef } from 'react';
import Layout from '../components/Layout';
import List3 from '../components/List3';
import cera from "../assets/images/depilacion-cera.jpg";
import fotodepilacion from "../assets/images/fotodepilacion.jpg";
const DepilacionPage = () => {
    //referencias depilacion 
    const dep0 = useRef(null);
    const dep1 = useRef(null);
    const dep2 = useRef(null);
    const dep3 = useRef(null);
    const dep4 = useRef(null);
    const dep5 = useRef(null);
    const dep6 = useRef(null);
    const dep7 = useRef(null);
    const dep8 = useRef(null);
    const dep9 = useRef(null);
    const dep10 = useRef(null);
    const dep11 = useRef(null);
    const dep12 = useRef(null);
    const dep13 = useRef(null);
    const dep14 = useRef(null);
    const dep15 = useRef(null);
    const dep16 = useRef(null);
    const dep17 = useRef(null);
    const dep18 = useRef(null);
    const dep19 = useRef(null);
    const dep20 = useRef(null);
    const dep21 = useRef(null);
    const dep22 = useRef(null);
    const dep23 = useRef(null);
    const dep24 = useRef(null);
    const dep25 = useRef(null);

    const fotodepilacionObj = {
        title: 'DEPILACIÓN Y FOTODEPILACIÓN',
        category: ['CERA', 'FOTODEPILACIÓN', 'BONOS (5 SESIONES)'],
        images:[cera, fotodepilacion, ''],
        category_text: ['En nuestro centro de belleza, ofrecemos servicios profesionales de depilación con cera que te brindarán resultados suaves y duraderos. Sabemos que eliminar el vello no deseado es una parte importante de tu rutina de cuidado personal, y nos comprometemos a hacerlo de la manera más efectiva y cómoda posible.', 'Nuestro personal especializado evaluará tu tipo de piel y vello para determinar el programa de tratamiento adecuado para ti. La fotodepilación requiere varias sesiones para lograr resultados óptimos, ya que solo afecta a los folículos en la fase de crecimiento activo. Trabajaremos contigo para diseñar un plan personalizado que se adapte a tus necesidades y objetivos específicos.', 'Sabemos que la consistencia y la continuidad son clave cuando se trata de obtener los resultados deseados en cualquier tratamiento. Con nuestros bonos de 5 sesiones, te brindamos la oportunidad de comprometerte con tu cuidado personal y ahorrar al mismo tiempo.'],
        treatments: [
            [
                [
                    'DEPILACIÓN Y DISEÑO DE CEJAS', '', '5€', 'close'
                ],
                [
                    'ZONA XS', 'Línea alba superior o inferior, pies, manos, mentón, labio superior, patillas, entrepecho, orejas, pómulos', '3€', 'close'
                ],
                [
                    'ZONA S', 'Cuello, axilas, ingles, interglúteos, glúteos, lumbar, nuca', '5€', 'close'
                ],
                [
                    'ZONA M', 'Brazos, medias piernas, espalda completa, torso completo, brazos, pubis completo', '5€', 'close'
                ],
                [
                    'ZONA L', 'Piernas completas', '15€', 'close'
                ],
                [
                    'ZONA XL', 'Cuerpo completo (1 zona L, 2 zonas S, 2 zonas XS)', '28€', 'close'
                ],
            ],
            [
                [
                    'ZONA XS', 'Línea alba superior o inferior, areolas, pies, manos, mentón, labio superior, entrecejo, patillas, entrepecho, orejas, cejas, frente, nariz, manos o pies, pómulos', '15€ / Sesión', 'close'
                ],
                [
                    'Ingles Normal', '', '20€ / Sesión', 'close'
                ],
                [
                    'Axilas', '', '20€ / Sesión', 'close'
                ],
                [
                    'Facial Completo', '', '30€ / Sesión', 'close'
                ],
                [
                    'Ingles Brasileñas o completas con Inter glúteos', '', '35€ / Sesión', 'close'
                ],
                [
                    'Medias Piernas', '', '38€ / Sesión', 'close'
                ],
                [
                    'Brazos', '', '40€ / Sesión', 'close'
                ],
                [
                    'Espalda', '', '45€ / Sesión', 'close'
                ],
                [
                    'Pecho', '', '45€ / Sesión', 'close'  
                ],
                [
                    'Piernas Completas', '', '50€ / Sesión', 'close'  
                ]
            ],
            [
                [
                    'Piernas Completas', '', '200€', 'close'  
                ],
                [
                    'Axilas + Ingles Completas', '', '200€', 'close'
                ],
                [
                    'Axilas + Ingles Normales', '', '175€ / Sesión', 'close'
                ],
                [
                    'Espalda', '', '175€', 'close'
                ],
                [
                    'Pecho', '', '175€', 'close'
                ],
                [
                    'Medias Piernas', '', '170€', 'close'
                ],
                [
                    'Brazos', '', '170€', 'close'
                ],
                [
                    'Ingles completas  + Perianal', '', '150€', 'close'
                ],
                [
                    'Axilas', '', '80€', 'close'  
                ]
            ]
        ]
    };

    /////////////ESTADOS
    const [depilacionState, setDepilacionState] = useState(fotodepilacionObj);

    return (
        <>
            <Layout>
                <div className='tratamientos'>
                    <header>
                        <h1>{depilacionState.title}</h1>
                    </header>
                    <main>
                        <List3 states={[depilacionState, setDepilacionState]} obj={depilacionState} reference={[dep0, dep1, dep2, dep3, dep4, dep5, dep6, dep7, dep8, dep9, dep10, dep11, dep12, dep13, dep14, dep15, dep16, dep17, dep18, dep19, dep20, dep21, dep22, dep23, dep24, dep25]} />
                    </main>
                </div>
            </Layout>
        </>
    );
}

export default DepilacionPage;