import React, { useRef } from 'react';
import { AiFillCloseCircle } from 'react-icons/ai';
import Facial from "../assets/images/facial.jpg";

import { CiMenuKebab } from 'react-icons/ci';
const List2 = ({states, obj, reference}) => {
    
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
                                    let ref = null;
                                    switch (index) {
                                        case 0:
                                            ref = reference[0][0];
                                            break;
                                        case 1:
                                            ref = reference[0][1];
                                            break;
                                        case 2:
                                            ref = reference[0][2];
                                            break;
                                        case 3:
                                            ref = reference[0][3];
                                            break;
                                        case 4:
                                            ref = reference[0][4];
                                            break;
                                        case 5:
                                            ref = reference[0][5];
                                            break;
                                        case 6:
                                            ref = reference[0][6];
                                            break;
                                        case 7:
                                            ref = reference[0][7];
                                            break;
                                        case 8:
                                            ref = reference[0][8];
                                            break;
                                        case 9:
                                            ref = reference[0][9];
                                            break;
                                        case 10:
                                            ref = reference[0][10];
                                            break;
                                        case 11:
                                            ref = reference[0][11];
                                            break;
                                    }
                                    return (
                                        <li onClick={() => handleClick(ref, index, null, singleObj, i)} key={`li_${singleObj.category}_${index}`} >
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