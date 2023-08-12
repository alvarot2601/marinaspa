import React from "react";

import Facial from "../assets/images/facial.jpg";
import { Accordion, AccordionItem } from "@nextui-org/react";

const Lista = ({ obj }) => {
  return obj.map((singleObj, i) => {
    const reverseRowClass = i % 2 === 0 ? "" : "tratamientos__row--revert";
    return (
      <div className="tratamientos__subwrapper">
        <div
          className={`tratamientos__row tratamientos__row--1 tratamientos__row--text ${reverseRowClass}`}
        >
          {singleObj.category !== "" ? (
            <span className="tratamientos__category">{singleObj.category}</span>
          ) : (
            ""
          )}
          <p>{singleObj.category_text}</p>
          <Accordion
            className="font-medium"
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
              let infoClass = "tratamientos__info";
              typeof treatment[1] === "object"
                ? (infoClass = "tratamientos__info--column")
                : (infoClass = "tratamientos__info");
              return (
                <AccordionItem
                  className="text-sm bg-dark"
                  key={`accordion-${index}`}
                  aria-label="Accordion 1"
                  title={treatment[0]}
                >
                  <div>
                    <span className="text-sm bg">{treatment[0]}</span>
                  </div>
                </AccordionItem>
              );
            })}
          </Accordion>
        </div>
        <div className="tratamientos__row">
          <img src={singleObj.images[0]} alt="" />
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
