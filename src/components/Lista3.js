import { Divider } from "@nextui-org/react";
import React from "react";
import { Accordion, AccordionItem } from "@nextui-org/react";

const Lista3 = ({ obj }) => {
  const onlyNumbersRegEx = /^[0-9]+$/;

  return obj.category.map((category, index) => {
    const reverseRowClass = index % 2 === 0 ? "" : "order-1";
    return (
      <div key={`lista-${index}`} className="flex gap-5 text-zinc-700">
        <div
          className={`w-full md:w-2/4  px-7 py-5 ${reverseRowClass} flex flex-col justify-center`}
        >
          {category !== "" ? (
            <span className="text-4xl font-semibold">{category}</span>
          ) : (
            ""
          )}
          <p className="text-lg mt-5 mb-3 italic">
            {Array.isArray(obj.category_text)
              ? obj.category_text[index]
              : obj.category_text}
          </p>
          <Accordion
            isCompact
            variant="light"
            className="font-semibold"
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
            {obj.treatments[index].map((treatment, index2) => {
               let justifyClass =  (treatment[1] !== '' ?  'justify-between' :   'justify-end')
              return (
                <AccordionItem
                  className="accordionItemLista"
                  key={`accordion-${index}-${index2}`}
                  aria-label={`accordion-${index2}`}
                  title={treatment[0]}
                >
                  <div className={`flex ${justifyClass} items-center`}>
                    {
                      treatment[1] !== '' ? <span className="basis-10/12">{treatment[1]}</span> : ''
                    }
                    
                    <span className="flex justify-end basis-28">
                    {onlyNumbersRegEx.test(treatment[2])
                    ? treatment[2] + '€' 
                    : treatment[2]}
                    </span>
                  </div>
                </AccordionItem>
              );
            })}
          </Accordion>
        </div>
        {Array.isArray(obj.images) ? (
          obj.images[index] !== "" ? (
            <div className="hidden md:flex w-2/4">
              <img
                className="h-full object-cover"
                src={obj.images[index]}
                alt=""
              />
            </div>
          ) : (
            ""
          )
        ) : (
          ""
        )}
      </div>
    );
  });
};

export default Lista3;
