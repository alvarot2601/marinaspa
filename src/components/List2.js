import React, { useRef } from 'react';
import { AiFillCloseCircle } from 'react-icons/ai';
import Facial from "../assets/images/facial.jpg";

import { CiMenuKebab } from 'react-icons/ci';
const List2 = ({states, obj, reference}) => {
    let refCounter = 0;
    const handleClick = (ref, index, index2 = null, obj, i) => {
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
        
        states[i][1](object);
        console.log(ref);
        (ref.current.classList.contains('tratamientos__info--hidden')) ? ref.current.classList.toggle('tratamientos__info--hidden')
            : ref.current.classList.toggle('tratamientos__info--hidden');
    }

    return (
            obj.map((singleObj, i) => {
                const reverseRowClass = (i % 2 === 0) ? '' : 'tratamientos__row--revert';
                return (
                    <div className="tratamientos__subwrapper">
                    <div className="tratamientos__row ">
                        {
                            singleObj.category !== '' ? <span className="tratamientos__category">{singleObj.category}</span> : ''
                        }
                        <ul>
                            {
                                singleObj.treatments.map((treatment, index) => {
                                    let infoClass = 'tratamientos__info';
                                    let ref = null;
                                    ref = reference[refCounter];
                                    refCounter++;
                                    (typeof treatment[1] === 'object')
                                    ? infoClass = 'tratamientos__info--column'
                                    : infoClass = 'tratamientos__info'
                                    return (
                                        <li onClick={() => handleClick(ref, index, null, singleObj, i)} key={`li_${singleObj.category}_${index}`} >
                                            <div>
                                                <span className="tratamientos__treatment">{treatment[0]}</span>
                                                {
                                                    (treatment[3] == 'close') ? <AiFillCloseCircle /> : <CiMenuKebab /> //ref.current.classList.contains('tratamientos__info--hidden') ? <CiMenuKebab /> : <AiFillCloseCircle/>
                                                }
                                            </div>
                                            <div className={`tratamientos__info ${infoClass} tratamientos__info--hidden`} ref={ref}>
                                                {
                                                    typeof treatment[1] === 'object'
                                                        ? (
                                                            Object.keys(treatment[1]).map(property => {
                                                                return (
                                                                    property != '' ? <p><span>{property}</span> <span>{treatment[1][property]}</span></p>
                                                                    : <p>{treatment[1][property]}</p>
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
                                    );
                                })
                            }
                        </ul>
                    </div>
                    <div className="tratamientos__row">
                        <img src={Facial} alt="" />
                    </div>
                </div>
                );
            })
    );
}

export default List2;