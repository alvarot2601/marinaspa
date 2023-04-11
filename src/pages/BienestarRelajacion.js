import React, { useState, useRef } from 'react';
import Layout from '../components/Layout';

import List2 from '../components/List2';

const BienestarRelajacion = () => {
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
    const [bienestarRelajacion, setBienestarRelajacion] = useState(bienestarRelajacionObj);

    return (
        <>
            <Layout>
                <div className='tratamientos'>
                    <header>
                        <h1>{bienestarRelajacion.title}</h1>
                    </header>
                    <main>
                        <List2 states={[[bienestarRelajacion, setBienestarRelajacion]]} obj={[bienestarRelajacion]} reference={[[br0, br1, br2, br3, br4, br5, br6, br7, br8, br9, br10, br11, br12, br13, br14, br15]]} />
                    </main>
                </div>
            </Layout>
        </>
    );
}

export default BienestarRelajacion;