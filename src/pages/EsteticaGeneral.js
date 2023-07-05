import React, { useState, useRef } from 'react';
import Layout from '../components/Layout';

import List from '../components/List';

const EsteticaGeneralPage = ({title}) => {
    ///referencias estetica general manicura y pedicura
    const eg0 = useRef(null);
    const eg1 = useRef(null);
    const eg2 = useRef(null);
    const eg3 = useRef(null);
    const eg4 = useRef(null);

    ///referencias estetica general manicura y pedicura
    const maq0 = useRef(null);
    const maq1 = useRef(null);
    const maq2 = useRef(null);

    const esteticaGeneralObj = {
        title: 'ESTÉTICA GENERAL',
        category: 'MANICURA | PEDICURA',
        category_text: 'Tus uñas merecen la mejor atención y cuidado, y en nuestra web encontrarás todo lo que necesitas para lucir unas manos y pies impecables. Nuestro equipo de expertos en belleza y estilistas profesionales se dedica a ofrecerte los tratamientos más innovadores y las últimas tendencias en el mundo de la manicura y pedicura.',
        treatments: [
            [
                "Manicura normal",
                "",
                12,
                'close'
            ],
            [
                "Manicura con esmaltado semipermanente",
                "",
                18,
                'close'
            ],
            ["Manicura Spa-Tratamiento completo de belleza en tus manos", "", 25, 'close'],
            ["Pedicura con esmaltado semipermanente", "", 18, 'close'],
            ["Pedicura Spa-Tratamiento completo de belleza en tus pies", "", 25, 'close'],
        ]
    };
    const maquillajeObj = {
        title: 'ESTÉTICA GENERAL',
        category: 'MAQUILLAJE',
        category_text: 'Si buscas resaltar tu belleza natural y expresar tu estilo único, estás en el lugar correcto. Nuestro equipo de expertos en belleza está aquí para ofrecerte los mejores consejos, tutoriales y productos de maquillaje que te ayudarán a lucir radiante en cualquier ocasión.',
        treatments: [
            [
                "Maquillaje social (día, tarde o noche)",
                "",
                '30€',
                'close'
            ],
            [
                "Maquillaje de novia (Incluye fijación flash de larga duración y prueba de maquillaje)",
                "(no incluye desplazamiento)",
                '90€',
                'close'
            ],
            ["Lifting de pestañas + Tinte", "", 30, 'close']
        ]
    };
    /////////////ESTADOS
    const [esteticaGeneralState, setEsteticaGeneral] = useState(esteticaGeneralObj);
    const [maquillajeState, setMaquillajeState] = useState(maquillajeObj);
    return (
        <>
            <Layout>
                <div className='tratamientos'>
                    <header>
                        <h1>{title}</h1>
                    </header>
                    <main>
                        <List states={[[esteticaGeneralState, setEsteticaGeneral], [maquillajeState, setMaquillajeState]]} obj={[esteticaGeneralState, maquillajeState]} reference={[[eg0, eg1, eg2, eg3, eg4], [maq0, maq1, maq2]]} />
                    </main>
                </div>
            </Layout>
        </>
    );
}

export default EsteticaGeneralPage;