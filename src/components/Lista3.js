import React, { useEffect, useState } from 'react';
import { AiFillCloseCircle } from 'react-icons/ai';
import { CiMenuKebab } from 'react-icons/ci';

const Lista3 = ({obj}) => {

   
    return (
            obj.category.map((category, index) => {
                const reverseRowClass = (index % 2 === 0) ? '' : 'tratamientos__row--revert';
                return (
                    <div className="tratamientos__subwrapper">
                    <div className={`${reverseRowClass} tratamientos__row tratamientos__row--text`}>
                    
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
                                    return (
                                        <li key={`li_${obj.category[index]}_${index}`} >
                                            <div>
                                                <span className="tratamientos__treatment">{treatment[0]}</span>
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

export default Lista3;