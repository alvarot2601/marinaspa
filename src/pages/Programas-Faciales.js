import React, { useState } from 'react';
import Layout from '../components/Layout';
import { AiFillCloseCircle } from 'react-icons/ai';
import Facial from "../assets/images/facial.jpg";

import { CiMenuKebab } from 'react-icons/ci';

const ProgramasFaciales = ({ title, obj, reference }) => {

    const [objState, setObjState] = useState(obj[0]);
    const [objState2, setObjState2] = useState(obj[1]);


    const handleClick = (ref, index, index2 = null, obj, objectType) => {

        let object = {
            ...obj
        };
        if (object.treatments[index][3] == 'close') {
            object.treatments[index][3] = 'open';
        } else if (object.treatments[index][3] == 'open') {
            object.treatments[index][3] = 'close';
        }

        setObjState(object);

        (ref.current.classList.contains('tratamientos__info--hidden')) ? ref.current.classList.toggle('tratamientos__info--hidden')
            : ref.current.classList.toggle('tratamientos__info--hidden');
    }

    return (
        <>
            <Layout>
                <div className='tratamientos'>
                    <header>
                        <h1>{objState.title}</h1>
                    </header>
                    <main>
                        {
                            obj.map((singleObj, i) => {
                                const reverseRowClass = (i % 2 === 0) ? '' : 'tratamientos__row--revert';
                                return (
                                    <div className="tratamientos__subwrapper">
                                        <div className={`tratamientos__row ${reverseRowClass}`}>
                                            <span>{singleObj.category}</span>
                                            <ul>
                                                {
                                                    singleObj.treatments.map((treatment, index) => {
                                                        let ref = null;
                                                        switch (index) {
                                                            case 0:
                                                                ref = reference[i][0];
                                                                break;
                                                            case 1:
                                                                ref = reference[i][1];
                                                                break;
                                                            case 2:
                                                                ref = reference[i][2];
                                                                break;
                                                            case 3:
                                                                ref = reference[i][3];
                                                                break;
                                                            case 4:
                                                                ref = reference[i][4];
                                                                break;
                                                            case 5:
                                                                ref = reference[i][5];
                                                                break;
                                                            case 6:
                                                                ref = reference[i][6];
                                                                break;
                                                            case 7:
                                                                ref = reference[i][7];
                                                                break;
                                                            case 8:
                                                                ref = reference[i][8];
                                                                break;
                                                            case 9:
                                                                ref = reference[i][9];
                                                                break;
                                                            case 10:
                                                                ref = reference[i][10];
                                                                break;
                                                            case 11:
                                                                ref = reference[i][11];
                                                                break;
                                                            case 12:
                                                                ref = reference[i][12];
                                                                break;
                                                            case 13:
                                                                ref = reference[i][13];
                                                                break;
                                                        }
                                                        return (
                                                            <li onClick={() => handleClick(ref, index, null, singleObj, 'hf')} key={`li_${singleObj.category}_${index}`} >
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
                                );
                            })
                        }
                    </main>
                </div>
            </Layout>
        </>
    );
}
export default ProgramasFaciales;
