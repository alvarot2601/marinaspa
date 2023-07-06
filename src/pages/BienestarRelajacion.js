import React, { useState, useRef } from 'react';
import Layout from '../components/Layout';

import List3 from '../components/List3';
import hidromasaje from "../assets/images/hidromasaje.jpg";
import peeling from "../assets/images/peeling.jpg";
import masaje from "../assets/images/masaje.jpg";
import relajacion from "../assets/images/relajacion.jpg";

const BienestarRelajacionPage = () => {
    //referencias bienestar y relajación
    const br0 = useRef(null);
    const br1 = useRef(null);
    const br2 = useRef(null);
    const br3 = useRef(null);
    const br4 = useRef(null);
    const br5 = useRef(null);
    const br6 = useRef(null);
    const br7 = useRef(null);
    const br8 = useRef(null);
    const br9 = useRef(null);
    const br10 = useRef(null);
    const br11 = useRef(null);
    const br12 = useRef(null);
    const br13 = useRef(null);
    const br14 = useRef(null);
    const br15 = useRef(null);

    const bienestarRelajacionObj = {
        title: 'BIENESTAR Y RELAJACIÓN',
        category: ['BAÑERAS DE HIDROMASAJE', 'PEELINGS CORPORALES', 'MASAJES', ''],
        category_text:['Sumérgete en un oasis de tranquilidad y deja que el poder curativo del agua y los beneficios terapéuticos de las burbujas mejoren tu bienestar físico y emocional. Ya sea que desees disfrutar de un momento de relajación solo, en pareja o con amigos, nuestras bañeras de hidromasajes son perfectas para cualquier ocasión.', 'Descubre la renovación total de tu piel con nuestros peelings corporales. Nuestros tratamientos de exfoliación profunda eliminan las células muertas y revelan una piel suave y radiante. Utilizamos productos de alta calidad y técnicas especializadas para brindarte resultados excepcionales.Además de mejorar la apariencia de la piel, los peelings corporales también pueden ayudar a reducir la apariencia de cicatrices, estrías y manchas. Permítenos cuidar de tu piel y rejuvenecer todo tu cuerpo.', 'Disfruta de la máxima relajación y bienestar con nuestros masajes profesionales. Nuestros terapeutas altamente capacitados te brindarán una experiencia única y revitalizante. Con técnicas especializadas y atención personalizada, cada masaje se adaptará a tus necesidades y preferencias individuales. Ya sea que busques aliviar el estrés, reducir la tensión muscular o simplemente relajarte, nuestros masajes te transportarán a un estado de calma y renovación'],
        images:[hidromasaje,peeling, masaje, relajacion],
        treatments: [
            [
                [
                    'Baño Sensación Océano', 'Sumérgete en un mar de relax absoluto (20 min.)', '15 €', 'close'
                ],
                [
                    'Baño Aromaceane', 'Drenante, ayuda a eliminar líquidos (20 min.)', '15 €', 'close'
                ]
            ],
            [
                [
                    'Peeling Vivificante', 'Elimina el estrés (35 min.)', '35 €', 'close'
                ],
                [
                    'Polinesia', 'Piel aterciopelada y con una luminosidad natural (35 min.)', '35 €', 'close'
                ],
                [
                    'Peeling Hidratante', 'Piel más suave y supe hidratada (35 min.)', '35 €', 'close'
                ]
            ],
            [
                [
                    'Masajes piernas cansadas + Presoterapia (50 min.)', '', '45 €', 'close'
                ],
                [
                    'Masaje antiestrés - (30 min.)', '', '25 €', 'close'
                ],
                [
                    'Peeling Hidratante', 'Piel más suave y supe hidratada (35 min.)', '45 €', 'close'
                ]
            ],
            [
                [
                    'POLINESIA - Aromas tropicales y experiencia de relajación', '(Bañera, exfoliación y masaje)- Aprox. 100 min', '80 €', 'close'
                ],
                [
                    'ÁRTICO - Experiencia estimulante nacida de la fusión del calor y el frío', '(Para una profunda relajación)- Aprox. 100 min', '80 €', 'close'
                ],
                [
                    'RITUAL THERMAL', 'Exfoliante + Envoltura de algas + bañera + masaje corporal + mascarilla facial – 100 min', '90 €', 'close'
                ],
                [
                    'RITUAL DE LA ALEGRÍA CON CÍTRICOS BY ALQUIMIA ', 'Tratamiento vitalizante y energético (100 min.)', '90 €', 'close'
                ],
                [
                    'ENVOLTURA DE ALGAS', '', '45 €', 'close'
                ],
                [
                    'ENVOLTURA INDOCEANE + 30 MINUTOS DE MASAJE', '(enriquecida en activos nutritivos que subliman la piel dejándola suave y aterciopelada)', '50 €', 'close'
                ],
                [
                    'BEAUTY PARTY (mínimo 4 personas/máximo 10 personas)', 'Cocktail de bienvenida, 30´ de masaje corporal, belleza iluminadora facial y maquillaje)', '50 €', 'close'
                ]
            ]
        ]
    };

    /////////////ESTADOS
    const [bienestarRelajacionState, setBienestarRelajacionState] = useState(bienestarRelajacionObj);

    return (
        <>
            <Layout>
                <div className='tratamientos'>
                    <header>
                        <h1>{bienestarRelajacionState.title}</h1>
                    </header>
                    <main>
                        <List3 states={[bienestarRelajacionState, setBienestarRelajacionState]} obj={bienestarRelajacionState} reference={[br0, br1, br2, br3, br4, br5, br6, br7, br8, br9, br10, br11, br12, br13, br14, br15]} />
                    </main>
                </div>
            </Layout>
        </>
    );
}

export default BienestarRelajacionPage;