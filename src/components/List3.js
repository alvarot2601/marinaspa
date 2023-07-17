import React, { useEffect, useState } from 'react';
import { AiFillCloseCircle } from 'react-icons/ai';
import { CiMenuKebab } from 'react-icons/ci';

const List3 = ({ states, obj, reference }) => {

    const [referenceCounter, setReferenceCounter] = useState(0);
    let refCounter = 0;
    const handleClick = (ref, index, index2 = null, obj, i) => {
        let object = {
            ...obj
        };
        if (object.treatments[index][index2][3] == 'close') {
            object.treatments[index][index2][3] = 'open';
        } else if (object.treatments[index][index2][3] == 'open') {
            object.treatments[index][index2][3] = 'close';
        }
        console.log('ref', ref);
        console.log('object.treatments[index][index2][3]', object.treatments[index][index2][3]);
        
        states[1](object);
        (ref.current.classList.contains('tratamientos__info--hidden')) ? ref.current.classList.toggle('tratamientos__info--hidden')
            : ref.current.classList.toggle('tratamientos__info--hidden');
    }
    
    useEffect(()=>{
        setReferenceCounter(refCounter);
        console.log(refCounter)
    }, [refCounter]);
    return (
            obj.category.map((category, index) => {
                const reverseRowClass = (index % 2 === 0) ? '' : 'tratamientos__row--revert';
                return (
                    <div className="tratamientos__subwrapper">
                    <div className={`${reverseRowClass} tratamientos__row`}>
                    
                        {
                            category !== '' ? <span className="tratamientos__category">{category}</span> : ''  
                        }
                        <p>
                            {
                                Array.isArray(obj.category_text) ? obj.category_text[index] : obj.category_text
                            }
                        </p>
                        <ul>
                            {  
                                obj.treatments[index].map((treatment, index2) => {
                                    let ref = null;
                                    //let clase = (typeof treatment[1] === 'object' || treatment[1] !== '') ? '' : 'tratamientos_info--right'
                                    //let borderClass = '';
                                    //borderClass = (index2 === obj.treatments[index].length - 1) ? 'li__border-bottom' : '';
                                    ref = reference[refCounter];
                                    refCounter++;
                                    return (
                                        <li onClick={() => handleClick(ref, index, index2, obj, 'br')} key={`li_${obj.category[index]}_${index}`} >
                                            <div>
                                                <span className="tratamientos__treatment">{treatment[0]}</span>
                                                {
                                                    (treatment[3] == 'close') ? <AiFillCloseCircle /> : <CiMenuKebab /> //ref.current.classList.contains('tratamientos__info--hidden') ? <CiMenuKebab /> : <AiFillCloseCircle/>
                                                }
                                            </div>
                                            <div className={`tratamientos__info tratamientos__info--hidden`} ref={ref}> 
                                                {
                                                    typeof treatment[1] === 'object'
                                                        ? (
                                                            Object.keys(treatment[1]).map(property => {
                                                                return (
                                                                    <p>
                                                                        <span>{property}</span> <span>{treatment[1][property]}</span>
                                                                    </p>
                                                                )
                                                            })
                                                        )
                                                        : (treatment[1] !== '')
                                                            ? <p>{treatment[1]}</p>
                                                            : null
                                                }
                                                {
                                                    treatment[2] !== ''
                                                        ? <span className="tratamientos__precio">{treatment[2]}</span>
                                                        : null
                                                }
                                            </div>
                                        </li>
                                    )
                                    
                                })
                            }
                        </ul>
                    </div>
                        {
                            (Array.isArray(obj.images))
                            ? (obj.images[index] !== '') 
                            ? <div className="tratamientos__row"><img src={obj.images[index]} alt="" /></div>
                            : ''
                            : ''
                        }
                    </div>
                );
            })
    );
}

export default List3;