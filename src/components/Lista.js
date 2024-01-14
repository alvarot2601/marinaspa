import {React, useState} from "react";

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import { theme } from "../theme";
import { ThemeProvider } from "@emotion/react";
import { FaArrowUp } from "react-icons/fa";
const Lista = ({ obj }) => {
  //expresion regular para saber si contiene únicamente digitos o no
  const onlyNumbersRegEx = /^[0-9]+$/;
  const [expanded, setExpanded] = useState(false);
  const handleChange = (panel) => (event, isExpanded)=> {
    setExpanded(isExpanded ? panel : false);
  }
  return obj.map((singleObj, i) => {
    const reverseRowClass = i % 2 === 0 ? "" : "";//"order-1";
    return (
      <div key={`lista-${i}`} className="flex text-zinc-700">
        <div
          className={`w-full md:w-7/12 lg:w-1/2 px-7 py-5 ${reverseRowClass} flex flex-col justify-center`}
        >
          {singleObj.category !== "" ? (
            <span className="animate-charcter text-6xl font-semibold">{singleObj.category}</span>
          ) : (
            ""
          )}
          <p className="text-xl mt-5 mb-3 italic text-primaryDark">{singleObj.category_text}</p>
            {singleObj.treatments.map((treatment, index) => {
              return (
                <Accordion sx={{backgroundColor:theme.palette.primary.main, color:"#fff"}} expanded={expanded===treatment[treatment.length-1]} key={`accordion_${i}_${index}`} onChange={handleChange(treatment[treatment.length-1])}>
                <AccordionSummary
                aria-controls={`panel_${i}-${index}a-header`}
                id={`panel_${i}-${index}a-header`}
                expandIcon={<FaArrowUp style={{color:'#fff'}}/>}
                >
                <span>{treatment[0]}</span>

                </AccordionSummary>
                <AccordionDetails>
                  <div className={`flex ${(Array.isArray(treatment[3])) 
                      ? 'flex-col ' 
                      : (treatment[1] !== '') ? 'justify-between items-center gap-10' : 'justify-end'}`
                    }>
                    {
                      Array.isArray(treatment[3])
                        ? (
                          <div className="flex flex-col w-full order-1 ">
                            <p>{treatment[1]}</p>
                            {
                              treatment[3].map((program, index2) => {
                                return (
                                  <div key={`program-${index}-${index2}`} className="flex justify-between">
                                    <span>{program[0]}</span>
                                    <span>{program[1]}€</span>
                                  </div>
                                );
                              })
                            }
                          </div>
                        )
                        : (treatment[1] !== ''
                          ? <span className="basis-10/12">{treatment[1]}</span>
                          : '')
                    }
                    {
                      treatment[2] !== 0 
                      ? <span className="flex justify-end basis-28 text-2xl ">
                        {onlyNumbersRegEx.test(treatment[2]) ? treatment[2] + '€' : treatment[2]}
                      </span>
                      : ''
                    }
                  </div>
                </AccordionDetails>
                </Accordion>
              );
            })}
        </div>
        <div className="md:w-5/12 lg:w-1/2 hidden md:flex md:items-center">
          <img className="w-full h-full object-cover max-h-[600px]" src={singleObj.images[0]} alt="" />
        </div>
      </div>
    );
  });
};

export default Lista;
/*<li>
                                            <Accordion variant="splitted">
                                                <AccordionItem className='text-sm bg-black' key="1" aria-label="Accordion 1" title={treatment[0]}>
                                                <div>
                                                    <span className="tratamientos__treatment text-sm">{treatment[0]}</span>
                                                </div>
                                                </AccordionItem>
                                            </Accordion>
                                        </li> */
