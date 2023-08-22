import React, { useState, useRef } from 'react';
import Layout from '../components/Layout';

import Lista from '../components/Lista';
import {Button} from "@nextui-org/react";
import CartaPrecios from '../assets/pdf/carta_precios_2022.pdf';
import {FaDownload, FaEye} from "react-icons/fa";
const SiluetaCorporalPage = () => {
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

    const siluetaCorporalObj = {
        title: 'SILUETA CORPORAL',
        category: 'SILUETA CORPORAL',
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
                    '': "Favorece la pérdida de grasa, remodela y tonifica: su diferencia la tecnología Body Pall (sin aparatología)",
                    "Programa 6 Curas: ": "150€",
                    "Programa 12 Curas: ": ' 290€'
                },
                '',
                'close'
            ],
            ["MADEROTERAPIA", {
            "Programa 8 Sesiones:" : ' 300€'
            }, '45€/sesión', 'close'],
            ["PRESOTERAPIA", "Programa 10 Sesiones: 90€", '12€/sesión', 'close'],
            ["CRIOLIPÓLISIS + presoterapia", "", '45€', 'close'],
            ["Remodelante corporal V-SHAPE + Presoterapia", "", '45€', 'close'],
            ["Programa IWRAP. Sistema Integral de adelgazamiento (Criofrecuencia)", {
                'Programa 10 Sesiones: ': '400€'
            }, '50€/sesión', 'close'],
            ["INDIBA CORPORAL + Presoterapia", "", '50€', 'close'],
            ["WONDER", { 'Programa 8 Sesiones:': '400€', 'Programa 4 Sesiones': '236€' }, "69€/sesión", 'close'],
            ["LIPOSONIX (revolucionario tratamiento contra la grasa localizada a base de ultrasonidos", { 'Abdomen': '90€', 'Abdomen y Flancos': '150€', 'Cartucheras': '150€', 'Brazos': '150€' }, '', 'close'],
            ['PROGRAMA INTEGRAL, personalizado de 10 sesiones de acción global sobre grasas profundas y superficiales, remodela la silueta y reduce la celulitis', { 'Programa 1 zona: ': '380€', 'Programa 2 zonas: ': '580€' }, '', 'close'],
            ['MATENIMIENTO CORPORAL', '', '45€', 'close']
            
        ],
        images : ['']
    };

    /////////////ESTADOS
    const [siluetaCorporal, setSiluetaCorporal] = useState(siluetaCorporalObj);

    return (
        <>
            <Layout>
                <div className='tratamientos silueta-corporal'>
                    <div className='flex justify-center gap-5'>
                        <Button href={CartaPrecios} target='_blank' className='material-bubble max-w-sm text-md px-20 py-10 outline-0 rounded border-2 border-transparent relative btn-transitions' >Ver Carta de precios <FaEye/></Button>
                        
                        <Button href={CartaPrecios} className='material-bubble max-w-sm text-md px-20 py-10 outline-0 rounded border-2 border-transparent relative btn-transitions' download={CartaPrecios}>Descargar Carta de precios <FaDownload/></Button>
                    </div>
                    <main>
                        <Lista obj={[siluetaCorporal]} reference={[sc0, sc1, sc2, sc3, sc4, sc5, sc6, sc7, sc8, sc9, sc10, sc11]} />
                    </main>
                </div>
            </Layout>
        </>
    );
}

export default SiluetaCorporalPage;