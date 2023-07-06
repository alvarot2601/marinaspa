import React, { useRef } from 'react';
import { AiFillCloseCircle } from 'react-icons/ai';
import FacialPicture from "../assets/images/programas-faciales-background.jpg";
import AntiAgingPicture from "../assets/images/anti-aging.jpg";

import { CiMenuKebab } from 'react-icons/ci';
const List = ({states, obj, reference}) => {
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

        (ref.current.classList.contains('tratamientos__info--hidden')) ? ref.current.classList.toggle('tratamientos__info--hidden')
            : ref.current.classList.toggle('tratamientos__info--hidden');
    }

    return (
            obj.map((singleObj, i) => {
                const reverseRowClass = (i % 2 === 0) ? '' : 'tratamientos__row--revert';
                return (
                    <div className="tratamientos__subwrapper">
                        <div className={`tratamientos__row tratamientos__row--1 ${reverseRowClass}`}>
                            <span className='tratamientos__category '>{singleObj.category}</span>
                            <p>{singleObj.category_text}</p>
                            <ul>
                                {
                                    singleObj.treatments.map((treatment, index) => {
                                        let ref = null;
                                        let right_align_class = '';
                                        ref = reference[refCounter];
                                        refCounter++;
                                        treatment[1] == '' ? right_align_class = 'tratamientos__info--right' : right_align_class = ''
                                        return (
                                            <li onClick={() => handleClick(ref, index, null, singleObj, i)} key={`li_${singleObj.category}_${index}`} >
                                                <div>
                                                    <span className='tratamientos__treatment'>{treatment[0]}</span>
                                                    {
                                                        (treatment[3] == 'close') ? <AiFillCloseCircle /> : <CiMenuKebab /> //ref.current.classList.contains('tratamientos__info--hidden') ? <CiMenuKebab /> : <AiFillCloseCircle/>
                                                    }
                                                </div>
                                                <div className={`tratamientos__info tratamientos__info--hidden ${right_align_class} `} ref={ref}>
                                                    {
                                                        treatment[1] !== ''
                                                            ? <p>{treatment[1]}</p>
                                                            : ''//<span>&nbsp;</span>
                                                    }
                                                    <span className='tratamientos__price'>{treatment[2]} €</span>
                                                </div>
                                            </li>
                                        );
                                    })
                                }
                            </ul>
                        </div>
                        <div className="tratamientos__row">
                            <img src={i==0 ? FacialPicture : AntiAgingPicture } alt="" />
                        </div>
                    </div>
                );
            })
    );
}

export default List;