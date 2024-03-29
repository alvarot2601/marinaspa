import React, { useEffect, useRef, useState } from "react";

import Carta from "../assets/pdf/carta_precios_2023.pdf";
import Layout from "../components/Layout";
const Tratamientos = () => {

    ///referencias higiene facial
    const hf0 = useRef(null);
    const hf1 = useRef(null);
    const hf2 = useRef(null);
    const hf3 = useRef(null);
    const hf4 = useRef(null);
    const hf5 = useRef(null);

    ///referencias Anti Aging
    const aa0 = useRef(null);
    const aa1 = useRef(null);
    const aa2 = useRef(null);
    const aa3 = useRef(null);
    const aa4 = useRef(null);
    const aa5 = useRef(null);
    const aa6 = useRef(null);
    const aa7 = useRef(null);
    const aa8 = useRef(null);
    const aa9 = useRef(null);
    const aa10 = useRef(null);
    const aa11 = useRef(null);
    const aa12 = useRef(null);
    const aa13 = useRef(null);

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
    ///referencias silueta corporal y programas
    const sc0 = useRef(null);
    const sc1 = useRef(null);
    const sc2 = useRef(null);
    const sc3 = useRef(null);
    const sc4 = useRef(null);
    const sc5 = useRef(null);
    const sc6 = useRef(null);
    const sc7 = useRef(null);
    const sc8 = useRef(null);
    const sc9 = useRef(null);
    const sc10 = useRef(null);
    const sc11 = useRef(null);

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
    const higieneFacialObj = {
        title: 'BELLEZA - RITUALES Y PROGRAMAS FACIALES',
        category: 'HIGIENE FACIAL OXIGENANTE',
        treatments: [
            [
                "Limpieza en profundidad de la piel con cosmética profesional",
                "",
                36,
                'close'
            ],
            [
                "Higiene facial profunda con microdermoabrasión con punta de Diamante",
                "tratamiento indoloro que elimina las células muertas de la piel a la vez que reafirma y las líneas de expresión se vuelven menos visibles",
                3,
                'close'
            ],
            ["Limpieza en profundidad de la piel con cosmética profesional", "", 3, 'close'],
            ["Hidravacuum – Detox – Limpieza – Exfoliación – Nutrición", "", 50, 'close'],
            ["Ritual de regeneración y Luminosidad", "", 3, 'close'],

            [
                "Ritual equilibrio y purificador",
                " Restablece el equilibrio de las pieles mixtas y grasas, eliminando las imperfecciones y brillos de la piel",
                3,
                'close'
            ],

        ]
    };
    const antiAgingObj = {
        title: 'BELLEZA - RITUALES Y PROGRAMAS FACIALES',
        category: 'ANTI-AGING',
        treatments: [
            [
                "Ritual Biocelular",
                "Regenera, estimula y potencia la energía natural de tu piel",
                48,
                'close'
            ],
            [
                "Ritual Ácido Hialurónico",
                "Efecto lifting natural",
                48,
                'close'
            ],
            ["Ritual de Perlas", "Envuelve a tu piel en un halo de luminosidad y juventud", 48, 'close'],
            ["Tratamiento Facial Láser Frio Dioderma", " Aplicación de principios activos a gran profundidad rellenando arrugas e iluminando la piel", 45, 'close'],
            ["Ritual de regeneración y Luminosidad", "", 3, 'close'],
            [
                "Tratamiento Facial Dermapen",
                "Estimula el colágeno y elastina, reduce las líneas de expresión y el tamaño del poro, disminuye la apariencia de cicatrices, mejora la firmeza de la piel",
                70,
                'close'
            ],
            [
                "INDIBA Facial EXPRESS",
                "El mejor tratamiento que hay en el mercado para regenerar y revitalizar células de la piel, sin efectos secundarios",
                30,
                'close'
            ],
            [
                "INDIBA Facial",
                "El mejor tratamiento que hay en el mercado para regenerar y revitalizar células de la piel, sin efectos secundarios, todo complementado con nuestra mejor cosmética y personalizada según caso",
                50,
                'close'
            ],
            [
                "HIFU Facial COMPLETO",
                "Ultrasonidos de alta frecuencia que hace efecto lifting sin cirugía",
                200,
                'close'
            ],
            [
                "HIFU por Zona (Facial)",
                "",
                150,
                'close'
            ],
            [
                "HIFU por Zona (Cuello)",
                "",
                100,
                'close'
            ],
            [
                "Masaje ENERGILIFT",
                "Lifting manual, este masaje remodela la estructura natural de la piel, reposiciona los volúmenes y redibuja el contorno del rostro",
                35,
                'close'
            ],
            [
                "Programa facial personalizado (6 Sesiones)",
                "",
                280,
                'close'
            ],
            [
                "MANTENIMIENTO FACIAL",
                "",
                45,
                'close'
            ]
        ]
    };
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


    const siluetaCorporalObj = {
        title: 'SILUETA CORPORAL',
        category: '',
        treatments: [
            [
                "Envoltura de Algas “CURA DETOX”",
                "Sumérjase en una experiencia relajante, donde la riqueza mineral, el alto poder de penetración de las algas le permitirán drenar y desintoxicar el organismo, dejándolo libre de deshechos + Bañera Hidromasaje",
                '45€',
                'close'
            ],
            [
                "Tratamiento BODY-SCULPT",
                {
                    info: "(favorece la pérdida de grasa, remodela y tonifica: su diferencia la tecnología Body Pall (sin aparatología)",
                    "Programa 6 Curas: ": "150€",
                    "Programa 12 Curas: ": ' 290€'
                },
                '',
                'close'
            ],
            ["MADEROTERAPIA", "Programa 8 Sesiones: 300€", '45€/sesión', 'close'],
            ["PRESOTERAPIA", "Programa 10 Sesiones: 90€", '12€/sesión', 'close'],
            ["CRIOLIPÓLISIS + presoterapia", "", '45€', 'close'],
            ["Remodelante corporal V-SHAPE + Presoterapia", "", '45€', 'close'],
            ["Programa IWRAP. Sistema Integral de adelgazamiento (Criofrecuencia)", {
                'Programa 10 Sesiones: ': '400€'
            }, '50€/sesión', 'close'],
            ["INDIBA CORPORAL + Presoterapia", "", 50, 'close'],
            ["WONDER", { 'Programa 8 Sesiones:': '400 €', 'Programa 4 Sesiones': '236 €' }, "69€/sesión", 'close'],
            ["LIPOSONIX (revolucionario tratamiento contra la grasa localizada a base de ultrasonidos", { 'Abdomen': '90€', 'Abdomen y Flancos': '150€', 'Cartucheras': '150€', 'Brazos': '150€' }, '', 'close'],
            ['PROGRAMA INTEGRAL, personalizado de 10 sesiones de acción global sobre grasas profundas y superficiales, remodela la silueta y reduce la celulitis', { 'Programa 1 zona: ': '380€', 'Programa 2 zonas: ': '580€' }, '', 'close'],
            ['MATENIMIENTO CORPORAL', '', '45€', 'close']
        ]
    };

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

    const fotodepilacionObj = {
        title: 'DEPILACIÓN Y FOTODEPILACIÓN',
        category: ['CERA', 'FOTODEPILACIÓN'],
        treatments: [
            [
                [
                    'DEPILACIÓN Y DISEÑO DE CEJAS', '', '5 €', 'close'
                ],
                [
                    'ZONA XS', 'Línea alba superior o inferior, pies, manos, mentón, labio superior, patillas, entrepecho, orejas, pómulos', '3 €', 'close'
                ],
                [
                    'ZONA S', 'Cuello, axilas, ingles, interglúteos, glúteos, lumbar, nuca', '5 €', 'close'
                ],
                [
                    'ZONA M', 'Brazos, medias piernas, espalda completa, torso completo, brazos, pubis completo', '5 €', 'close'
                ],
                [
                    'ZONA L', 'Piernas completas', '15 €', 'close'
                ],
                [
                    'ZONA XL', 'Cuerpo completo (1 zona L, 2 zonas S, 2 zonas XS)', '28 €', 'close'
                ],
            ],
            [
                [
                    'ZONA XS', 'Línea alba superior o inferior, areolas, pies, manos, mentón, labio superior, entrecejo, patillas, entrepecho, orejas, cejas, frente, nariz, manos o pies, pómulos', '15 € / Sesión', 'close'
                ],
                [
                    'Ingles Normal', '', '20 € / Sesión', 'close'
                ],
                [
                    'Axilas', '', '20 € / Sesión', 'close'
                ],
                [
                    'Facial Completo', '', '30 € / Sesión', 'close'
                ],
                [
                    'Ingles Brasileñas o completas con Inter glúteos', '', '35 € / Sesión', 'close'
                ],
                [
                    'Medias Piernas', '', '38 € / Sesión', 'close'
                ],
                [
                    'Brazos', '', '40 € / Sesión', 'close'
                ],
                [
                    'Espalda', '', '45 € / Sesión', 'close'
                ],
                [
                    'Pecho', '', '45 € / Sesión', 'close'  
                ],
                [
                    'Piernas Completas', '', '50 € / Sesión', 'close'  
                ]
            ]
        ]
    };

    /////////////ESTADOS
    const [higieneFacialState, setHigieneFacialState] = useState(higieneFacialObj);
    const [antiAgingState, setAntiAgingState] = useState(antiAgingObj);
    const [esteticaGeneralState, setEsteticaGeneralState] = useState(esteticaGeneralObj);
    const [maquillajeState, setMaquillajeState] = useState(maquillajeObj);
    const [siluetaCorporalState, setSiluetaCorporalState] = useState(siluetaCorporalObj);
    const [bienestarRelajacionState, setBienestarRelajacionState] = useState(bienestarRelajacionObj);
    const [depilacionState, setDepilacionState] = useState(fotodepilacionObj);

    const handleClick = (ref, index, index2 = null, obj, objectType) => {
        //higieneFacialObj.treatments[index][3] = 3;
        //(higieneFacialObj.treatments[index][3] == <AiFillCloseCircle/>) ? higieneFacialObj.treatments[index][3] = <CiMenuKebab/> : higieneFacialObj.treatments[index][3] = <AiFillCloseCircle/>;
        let object = {
            ...obj
        };
        if (object.treatments[index][3] == 'close') {
            object.treatments[index][3] = 'open';
        } else if (object.treatments[index][3] == 'open') {
            object.treatments[index][3] = 'close';
        }
        switch (objectType) {
            case 'aa':
                setAntiAgingState(object);
                break;
            case 'hf':
                setHigieneFacialState(object);
                break;
            case 'eg':
                setEsteticaGeneralState(object);
                break;
            case 'maq':
                setMaquillajeState(object);
                break;
            case 'sc':
                setSiluetaCorporalState(object);
                break;
            case 'br':
                setBienestarRelajacionState(object);
                break;
        }

        (ref.current.classList.contains('tratamientos__info--hidden')) ? ref.current.classList.toggle('tratamientos__info--hidden')
            : ref.current.classList.toggle('tratamientos__info--hidden');
    }



    useEffect(() => {
        
    }, [higieneFacialState, antiAgingState, esteticaGeneralState, maquillajeState, bienestarRelajacionState]);
    return (
        <Layout>
            <iframe src={Carta}>

            </iframe>
            <object data={Carta} type="application/pdf">
                <div>No online PDF viewer installed</div>
            </object>

        </Layout>
    );
};
export default Tratamientos;
/*

else{
                                    return treatmentCategory.map((treatmentSubcategory, index2) => {
                                        if(index2 === 0){
                                            return (
                                                <div>
                                                    <span>{treatmentSubcategory}</span>
                                                </div> 
                                            )
                                        }
                                        else{
                                            return treatmentSubcategory.map(treatment => {
                                                console.log('treatment', treatment)
                                                return (
                                                    <li>
                                                        <span>{treatment[0]}</span>
                                                        <span>{treatment[2]}</span>
                                                    </li>
                                                )
                                            })
                                        }
                                    })
                                }


<span>HIGIENE FACIAL OXIGENANTE</span>
                        <ul>
                            <li>
                                <span>Limpieza en profundidad de la piel con cosmética profesional</span> <span>36€</span>
                            </li>
                            <li>
                                <span>Higiene facial profunda con microdermoabrasión con punta de Diamante</span> <span>45€</span>
                            </li>
                        </ul>*/


/*
 
{treatmentsArr.map((treatment, index) => {
    return (
        <div className="tratamientos__categoria">
            {
                (typeof treatment === "string") ? <div className="tratamientos__title"><p>{treatment}</p></div>
                    : (typeof treatment === "object" && Array.isArray(treatment)) ? (
                        treatment.map((subtreatment) => {
                            if (typeof subtreatment === "string") {
                                return <div className="tratamientos__subtitle"><span>{subtreatment}</span></div>;
                            } else {
                                return (
                                    <ul>
                                        {
                                            subtreatment.map((treatmentType, index3) => {
                                                return (
                                                    <li onClick={() => handleClick(index3)}>
                                                        <div className="tratamientos__row">
                                                            <span>{treatmentType[0] + ` (${treatmentType[2]} €)`}</span> <AiFillCloseCircle />
                                                        </div>
                                                        <p className="tratamientos__hidden-info" id={`tratamientos__hidden-info--${index3}`}>
                                                            {treatmentType[1]}
                                                        </p>
                                                    </li>
                                                );
                                            })
                                        }
                                    </ul>
                                )
                            }
                        })
                    )
                        : null
            }
        </div>
    );

})}*/