import React from "react";

import { Accordion, AccordionItem } from "@nextui-org/react";

const Lista = ({ obj }) => {
  return obj.map((singleObj, i) => {
    const reverseRowClass = i % 2 === 0 ? "" : "order-1";
    return (
      <div className="flex text-gray-900">
        <div
          className={`w-2/4 px-7 py-5 ${reverseRowClass} flex flex-col justify-center`}
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
                  <div>
                    <span className="text-sm">{treatment[0]}</span>
                  </div>
                </AccordionItem>
              );
            })}
          </Accordion>
        </div>
        <div className="w-2/4">
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
