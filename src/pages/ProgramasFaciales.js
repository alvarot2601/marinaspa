import React, { useState, useRef } from 'react';
import Layout from '../components/Layout';
import Facial from "../assets/images/tratamiento-facial.JPG";
import HigieneFacial from "../assets/images/higiene-facial.JPG";
import Lista from '../components/Lista';
import {Button} from "@nextui-org/react";
import CartaPrecios from '../assets/pdf/carta_precios_2022.pdf';
import {FaDownload, FaEye} from "react-icons/fa";

const ProgramasFacialesPage = ({title}) => {

    const antiAgingObj = {
        title: 'BELLEZA - RITUALES Y PROGRAMAS FACIALES',
        category: 'ANTI-AGING',
        category_text:'Los tratamientos anti-aging se enfocan en la prevención y corrección de los signos del envejecimiento, incluyendo arrugas, manchas, flacidez y otros signos de daño en la piel. Estos tratamientos están diseñados para retrasar el proceso de envejecimiento y promover la regeneración celular. ',
        images : [HigieneFacial],
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
    const higieneFacialObj = {
        title: 'BELLEZA - RITUALES Y PROGRAMAS FACIALES',
        category: 'HIGIENE FACIAL OXIGENANTE',
        category_text:'La higiene facial oxigenante combina la limpieza profunda de la piel con la entrega de oxígeno a las células de la piel para mejorar su apariencia y salud. Además, la higiene facial oxigenante es una técnica no invasiva que puede realizarse en cualquier tipo de piel, desde la piel seca hasta la piel grasa.',
        images : [Facial],
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

    /////////////ESTADOS
    const [higieneFacialState, setHigieneFacialState] = useState(higieneFacialObj);
    const [antiAgingState, setAntiAgingState] = useState(antiAgingObj);
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

   

    return (
        <>
            <Layout>
                <div className='tratamientos programas-faciales'>
                    <div className='flex justify-center gap-5'>
                        <Button href={CartaPrecios} target='_blank' className='material-bubble max-w-sm text-md px-20 py-10 outline-0 rounded border-2 border-transparent relative btn-transitions' >Ver Carta de precios <FaEye/></Button>
                        
                        <Button href={CartaPrecios} className='material-bubble max-w-sm text-md px-20 py-10 outline-0 rounded border-2 border-transparent relative btn-transitions' download={CartaPrecios}>Descargar Carta de precios <FaDownload/></Button>
                    </div>
                    <main>
                        <Lista obj={[higieneFacialState, antiAgingState]}/>
                    </main>
                </div>
            </Layout>
        </>
    );
}
/*
//<a href={CartaPrecios} target='_blank' className='button2 material-bubble' >Ver Carta de precios <FaEye/></a>
<header>
                        <h1>Te ayudamos a encontrar el tratamiento facial ideal para tus necesidades.</h1>
                        <p className='t-center caveat'>Acude a nuestro centro de estética y descubre la última tecnología en programas faciales. <br></br>Revitaliza tu piel con nuestros programas faciales de vanguardia</p>
                        <button>Ver precios</button>
                    </header>
 */
export default ProgramasFacialesPage;
