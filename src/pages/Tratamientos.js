import React from 'react';
import Pdf from "../assets/alvaro.pdf";
import Facial from "../assets/images/facial.jpg";
const Tratamientos = ()=>{
    const treatmetnsObject  = {
        category: 'BELLEZA - RITUALES Y PROGRAMAS FACIALES',
        subcategory: 'HIGIENE FACIAL OXIGENANTE',
        treatments: [
                ['Limpieza en profundidad de la piel con cosmética profesional', '', '36'],
                ['Higiene facial profunda con microdermoabrasión con punta de Diamante', 'tratamiento indoloro que elimina las células muertas de la piel a la vez que reafirma y las líneas de expresión se vuelven menos visibles', '45'],
                ['Limpieza en profundidad de la piel con cosmética profesional', '', '45'],
                ['Hidravacuum – Detox – Limpieza – Exfoliación – Nutrición', '', '50'],
                ['Ritual de regeneración y Luminosidad', '', '45'],
                ['Ritual equilibrio y purificador', ' Restablece el equilibrio de las pieles mixtas y grasas, eliminando las imperfecciones y brillos de la piel', '45']
        ],
        category: 'BELLEZA - RITUALES Y PROGRAMAS FACIALES',
        subcategory: 'HIGIENE FACIAL OXIGENANTE',
        treatments: [
                ['Limpieza en profundidad de la piel con cosmética profesional', '', '36'],
                ['Higiene facial profunda con microdermoabrasión con punta de Diamante', 'tratamiento indoloro que elimina las células muertas de la piel a la vez que reafirma y las líneas de expresión se vuelven menos visibles', '45'],
                ['Limpieza en profundidad de la piel con cosmética profesional', '', '45'],
                ['Hidravacuum – Detox – Limpieza – Exfoliación – Nutrición', '', '50'],
                ['Ritual de regeneración y Luminosidad', '', '45'],
                ['Ritual equilibrio y purificador', ' Restablece el equilibrio de las pieles mixtas y grasas, eliminando las imperfecciones y brillos de la piel', '45']
        ]
    }



    const treatmentsArr = [
        'BELLEZA - RITUALES Y PROGRAMAS FACIALES',
        [
            'HIGIENE FACIAL OXIGENANTE',
            [
                ['Limpieza en profundidad de la piel con cosmética profesional', '', '36'],
                ['Higiene facial profunda con microdermoabrasión con punta de Diamante', 'tratamiento indoloro que elimina las células muertas de la piel a la vez que reafirma y las líneas de expresión se vuelven menos visibles', '45'],
                ['Limpieza en profundidad de la piel con cosmética profesional', '', '45'],
                ['Hidravacuum – Detox – Limpieza – Exfoliación – Nutrición', '', '50'],
                ['Ritual de regeneración y Luminosidad', '', '45'],
                ['Ritual equilibrio y purificador', ' Restablece el equilibrio de las pieles mixtas y grasas, eliminando las imperfecciones y brillos de la piel', '45']
            ]
            
        ],
        'ANTI-AGING',
        [
            'HIGIENE FACIAL OXIGENANTE',
            [
                ['Ritual Biocelular', 'Regenera, estimula y potencia la energía natural de tu piel', '36'],
                ['Ritual Ácido Hialurónico', 'Efecto lifting natural', '45'],
                ['Ritual de Perlas', 'Envuelve a tu piel en un halo de luminosidad y juventud', '45'],
                ['Tratamiento Facial Láser Frio Dioderma', 'Aplicación de principios activos a gran profundidad rellenando arrugas e iluminando la piel', '50'],
                ['Tratamiento Facial Dermapen', 'Estimula el colágeno y elastina, reduce las líneas de expresión y el tamaño del poro, disminuye la apariencia de cicatrices, mejora la firmeza de la piel', '45'],
                ['INDIBA Facial EXPRESS', 'El mejor tratamiento que hay en el mercado para regenerar y revitalizar células de la piel, sin efectos secundarios', '45'],
                ['INDIBA Facial', '. El mejor tratamiento que hay en el mercado para regenerar y revitalizar células de la piel, sin efectos secundarios, todo complementado con nuestra mejor cosmética y personalizada según caso', '50'],
                ['HIFU Facial COMPLETO', 'Ultrasonidos de alta frecuencia que hace efecto lifting sin cirugía', '45'],
                ['HIFU por Zona (Facial)', '', '45'],
                ['HIFU por Zona (Cuello)', '', '100'],
                ['Masaje ENERGILIFT', '. Lifting manual, este masaje remodela la estructura natural de la piel, reposiciona los volúmenes y redibuja el contorno del rostro', '45'],
                ['Programa facial personalizado (6 Sesiones)', '', '45'],
                ['MANTENIMIENTO FACIAL', '', '100']
            ]
            
        ],
    ];
    console.log(treatmentsArr)
    return (
        <section className='tratamientos'>
            <h1>Tratamientos</h1>
            <div className='tratamientos__subtitle'>
                <p>Todos nuestros tratamientos se llevan a cabo con los mejores productos del mercado y la última tecnología</p>
            </div>
            <div className="tratamientos__wrapper">


                <div className='tratamientos__tratamiento'>
                    <div>
                        <div className='tratamientos__'>
                            <span>YOUR CLOSET</span>
                            <p>Belleza - Rituales y Programas Faciales</p>
                        </div>
                        {
                            treatmentsArr.map((treatmentCategory, index)=>{
                                if(index === 0){
                                    return (
                                        <div>
                                            <span>{treatmentCategory}</span>
                                        </div>
                                    )
                                }
                                 
                            })
                        }  
                    </div>
                    <div>
                        <img src={Facial} alt="" />
                    </div>
                </div>


            </div>
        </section>
    );
}
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