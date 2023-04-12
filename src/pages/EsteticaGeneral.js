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