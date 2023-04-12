import React, { useEffect, useState } from 'react';
import { AiFillCloseCircle } from 'react-icons/ai';
import Facial from "../assets/images/facial.jpg";
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
        <div className="tratamientos__subwrapper">
            <div className="tratamientos__row ">
                {
                    
                    obj.category.map((category, index) => {
                        return (
                            <>
                                {
                                    category !== '' ? <span className="tratamientos__category">{category}</span> : ''  
                                }
                                <ul>
                                    {
                                        
                                        obj.treatments[index].map((treatment, index2) => {
                                            let ref = null;
                                            let borderClass = '';
                                            borderClass = (index2 === obj.treatments[index].length - 1) ? 'li__border-bottom' : '';
                                            ref = reference[refCounter];
                                            refCounter++;
                                            return (
                                                <li className={borderClass} onClick={() => handleClick(ref, index, index2, obj, 'br')} key={`li_${obj.category[index]}_${index}`} >
                                                    <div>
                                                        <span className="tratamientos__tratamiento">{treatment[0]}</span>
                                                        {
                                                            (treatment[3] == 'close') ? <AiFillCloseCircle /> : <CiMenuKebab /> //ref.current.classList.contains('tratamientos__info--hidden') ? <CiMenuKebab /> : <AiFillCloseCircle/>
                                                        }
                                                    </div>
                                                    <div className="tratamientos__info tratamientos__info--hidden" ref={ref}>
                                                        {
                                                            treatment[2] !== ''
                                                                ? <span className="tratamientos__precio">{treatment[2]}</span>
                                                                : null
                                                        }
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
                                                    </div>
                                                </li>
                                            )
                                            
                                        })
                                    }
                                </ul>
                            </>
                        );
                    })
                }
                {
                    //bienestarRelajacionObj.category !== '' ? <span className="tratamientos__category">{bienestarRelajacionObj.category}</span> : ''
                }
            </div>
            <div className="tratamientos__row">
                <img src={Facial} alt="" />
            </div>
        </div>
    );
}

export default List3;