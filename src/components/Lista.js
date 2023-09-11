import React from "react";

import { Accordion, AccordionItem } from "@nextui-org/react";

const Lista = ({ obj }) => {
  //expresion regular para saber si contiene únicamente digitos o no
  const onlyNumbersRegEx = /^[0-9]+$/;

  return obj.map((singleObj, i) => {
    const reverseRowClass = i % 2 === 0 ? "" : "order-1";
    return (
      <div className="flex text-gray-900">
        <div
          className={`w-full md:w-7/12 lg:w-1/2 px-7 py-5 ${reverseRowClass} flex flex-col justify-center`}
        >
          {singleObj.category !== "" ? (
            <span className="text-4xl font-semibold">{singleObj.category}</span>
          ) : (
            ""
          )}
          <p className="text-lg mt-5 mb-3 italic">{singleObj.category_text}</p>
          <Accordion
            className="font-semibold"
            variant="light"
            motionProps={{
              variants: {
                enter: {
                  y: 0,
                  opacity: 1,
                  height: "auto",
                  transition: {
                    height: {
                      type: "spring",
                      stiffness: 500,
                      damping: 30,
                      duration: 1,
                    },
                    opacity: {
                      easings: "ease",
                      duration: 1,
                    },
                  },
                },
                exit: {
                  y: -10,
                  opacity: 0,
                  height: 0,
                  transition: {
                    height: {
                      easings: "ease",
                      duration: 0.25,
                    },
                    opacity: {
                      easings: "ease",
                      duration: 0.3,
                    },
                  },
                },
              },
            }}
          >
            {singleObj.treatments.map((treatment, index) => {
              return (
                <AccordionItem

                  key={`accordion-${index}`}
                  aria-label="Accordion 1"
                  title={treatment[0]}
                >
                  <div className={`flex ${(Array.isArray(treatment[3])) 
                      ? 'flex-col ' 
                      : (treatment[1] !== '') ? 'justify-between items-center gap-10' : 'justify-end'}`
                    }>
                    {

                      Array.isArray(treatment[3])
                        ? (
                          <div className="flex flex-col w-full order-1">
                            <p>{treatment[1]}</p>
                            {
                              
                              treatment[3].map((program) => {
                                return (
                                  <div className="flex justify-between">
                                    <span>{program[0]}</span>
                                    <span>{program[1]}€</span>
                                  </div>
                                );
                              })
                            }
                          </div>
                        )
                        : (treatment[1] !== ''
                          ? <span className="text-sm">{treatment[1]}</span>
                          : '')
                    }
                    {
                      treatment[2] !== 0 
                      ? <span className="text-right">
                        {onlyNumbersRegEx.test(treatment[2]) ? treatment[2] + '€' : treatment[2]}
                      </span>
                      : ''
                    }
                    
                  </div>
                </AccordionItem>
              );
            })}
          </Accordion>
        </div>
        <div className="md:w-5/12 lg:w-1/2 hidden md:block">
          <img className="h-full object-cover" src={singleObj.images[0]} alt="" />
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
