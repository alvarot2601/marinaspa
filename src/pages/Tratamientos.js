import React, { useEffect, useRef, useState } from "react";
import Pdf from "../assets/alvaro.pdf";
import Facial from "../assets/images/facial.jpg";
import { AiFillCloseCircle } from 'react-icons/ai';

import { CiMenuKebab } from 'react-icons/ci';

const Tratamientos = () => {

    //estado para que renderice cada vez que cambia un icono de abrir/cerrar
    const [iconChanged, setiConChanged] = useState(false);

    ///referencias higiene facial
    const hf0 = useRef(null);
    const hf1 = useRef(null);
    const hf2 = useRef(null);
    const hf3 = useRef(null);
    const hf4 = useRef(null);
    const hf5 = useRef(null);


    let higieneFacialObj = {
        title: 'BELLEZA - RITUALES Y PROGRAMAS FACIALES',
        category: 'HIGIENE FACIAL OXIGENANTE',
        treatments: [
            [
                "Limpieza en profundidad de la piel con cosmética profesional",
                "",
                "36",
                'close'
            ],
            [
                "Higiene facial profunda con microdermoabrasión con punta de Diamante",
                "tratamiento indoloro que elimina las células muertas de la piel a la vez que reafirma y las líneas de expresión se vuelven menos visibles",
                3,
                'close'
            ],
            ["Limpieza en profundidad de la piel con cosmética profesional", "", 3, 'close'],
            ["Hidravacuum – Detox – Limpieza – Exfoliación – Nutrición", "", "50", 'close'],
            ["Ritual de regeneración y Luminosidad", "", 3, 'close'],

            [
                "Ritual equilibrio y purificador",
                " Restablece el equilibrio de las pieles mixtas y grasas, eliminando las imperfecciones y brillos de la piel",
                3,
                'close'
            ],

        ]
    };

    const [higieneFacialObjState, setHigieneFacialObjState] = useState(higieneFacialObj);

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


    const handleClick = (ref, index, obj) => {
        const iChanged = (iconChanged === true) ? false : true;
        setiConChanged(iChanged);
        //higieneFacialObj.treatments[index][3] = 3;
        //(higieneFacialObj.treatments[index][3] == <AiFillCloseCircle/>) ? higieneFacialObj.treatments[index][3] = <CiMenuKebab/> : higieneFacialObj.treatments[index][3] = <AiFillCloseCircle/>;
        let object = {
            ...higieneFacialObjState
        };
        if (object.treatments[index][3] == 'close') {
            object.treatments[index][3] = 'open';
        } else if (object.treatments[index][3] == 'open') {
            object.treatments[index][3] = 'close';
        }


        (ref.current.classList.contains('tratamientos__info--hidden')) ? ref.current.classList.toggle('tratamientos__info--hidden')
            : ref.current.classList.toggle('tratamientos__info--hidden');
    }



    useEffect(() => {

        //setHigieneFacialObjState(higieneFacialObj);

        console.log(higieneFacialObjState)
        //console.log(higieneFacialObjState);
    }, [higieneFacialObjState]);

    return (
        <section className="tratamientos">
            <h1>Tratamientos</h1>
            <div className="tratamientos__text">
                <p>
                    Todos nuestros tratamientos se llevan a cabo con los mejores productos
                    del mercado y la última tecnología
                </p>
            </div>
            <div className="tratamientos__wrapper">
                <h1>{higieneFacialObj.title}</h1>
                <div className="tratamientos__subwrapper">
                    <div className="tratamientos__row">
                        <span>{higieneFacialObjState.category}</span>
                        <ul>
                            {
                                higieneFacialObjState.treatments.map((treatment, index) => {
                                    let ref = null;
                                    switch (index) {
                                        case 0:
                                            ref = hf0;
                                            break;
                                        case 1:
                                            ref = hf1;
                                            break;
                                        case 2:
                                            ref = hf2;
                                            break;
                                        case 3:
                                            ref = hf3;
                                            break;
                                        case 4:
                                            ref = hf4;
                                            break;
                                        case 5:
                                            ref = hf5;
                                            break;
                                    }
                                    return (
                                        <li onClick={() => handleClick(ref, index, higieneFacialObj)} key={`li_${higieneFacialObj.category}_${index}`} >
                                            <div>
                                                <span>{treatment[0]}</span>
                                                {
                                                    (treatment[3] == 'close') ? <AiFillCloseCircle /> : <CiMenuKebab /> //ref.current.classList.contains('tratamientos__info--hidden') ? <CiMenuKebab /> : <AiFillCloseCircle/>
                                                }

                                            </div>
                                            <div className="tratamientos__info tratamientos__info--hidden" ref={ref}>
                                                {
                                                    treatment[1] !== ''
                                                        ? <p>{treatment[1]}</p>
                                                        : null
                                                }
                                                <span>Precio: {treatment[2]} €</span>

                                            </div>
                                        </li>
                                    );
                                })
                            }
                        </ul>
                    </div>
                    <div className="tratamientos__row">
                        <img src={Facial} alt="" />
                    </div>
                </div>
                <div className="tratamientos__subwrapper ">
                    <div className="tratamientos__row tratamientos__row--revert">
                        <span>{antiAgingObj.category}</span>
                        <ul>
                        {
                                higieneFacialObjState.treatments.map((treatment, index) => {
                                    let ref = null;
                                    switch (index) {
                                        case 0:
                                            ref = hf0;
                                            break;
                                        case 1:
                                            ref = hf1;
                                            break;
                                        case 2:
                                            ref = hf2;
                                            break;
                                        case 3:
                                            ref = hf3;
                                            break;
                                        case 4:
                                            ref = hf4;
                                            break;
                                        case 5:
                                            ref = hf5;
                                            break;
                                    }
                                    return (
                                        <li onClick={() => handleClick(ref, index, higieneFacialObj)} key={`li_${higieneFacialObj.category}_${index}`} >
                                            <div>
                                                <span>{treatment[0]}</span>
                                                {
                                                    (treatment[3] == 'close') ? <AiFillCloseCircle /> : <CiMenuKebab /> //ref.current.classList.contains('tratamientos__info--hidden') ? <CiMenuKebab /> : <AiFillCloseCircle/>
                                                }

                                            </div>
                                            <div className="tratamientos__info tratamientos__info--hidden" ref={ref}>
                                                {
                                                    treatment[1] !== ''
                                                        ? <p>{treatment[1]}</p>
                                                        : null
                                                }
                                                <span>Precio: {treatment[2]} €</span>

                                            </div>
                                        </li>
                                    );
                                })
                            }
                        </ul>
                    </div>
                    <div className="tratamientos__row">
                        <img src={Facial} alt="" />
                    </div>
                </div>
            </div>
        </section>
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