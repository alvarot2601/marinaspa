import React from 'react';

import Facial from "../assets/images/facial.jpg";

const Lista = ({obj}) => {
    return (
            obj.map((singleObj, i) => {
                const reverseRowClass = (i % 2 === 0) ? '' : 'tratamientos__row--revert';
                return (
                    <div className="tratamientos__subwrapper">
                    <div className={`tratamientos__row tratamientos__row--1 tratamientos__row--text ${reverseRowClass}`}>
                        {
                            singleObj.category !== '' ? <span className="tratamientos__category">{singleObj.category}</span> : ''
                            
                        }
                        <p>{singleObj.category_text}</p>
                        <ul>
                            {
                                singleObj.treatments.map((treatment, index) => {
                                    let infoClass = 'tratamientos__info';
                                    (typeof treatment[1] === 'object')
                                    ? infoClass = 'tratamientos__info--column'
                                    : infoClass = 'tratamientos__info'
                                    return (
                                        <li>
                                            <div>
                                                <span className="tratamientos__treatment">{treatment[0]}</span>
                                            </div>
                                        </li>
                                    );
                                })
                            }
                        </ul>
                    </div>
                    <div className="tratamientos__row">
                        <img src={singleObj.images[0]} alt="" />
                    </div>
                </div>
                );
            })
    );
}

export default Lista;