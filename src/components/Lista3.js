import { Divider } from "@nextui-org/react";
import React from "react";
import { Accordion, AccordionItem } from "@nextui-org/react";

const Lista3 = ({ obj }) => {
  return obj.category.map((category, index) => {
    const reverseRowClass = index % 2 === 0 ? "" : "order-1";
    return (
      <div className="flex gap-5 text-gray-900">
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
            className="font-semibold pruebaaa"
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
              return (
                <AccordionItem
                  key={`accordion-${index2}`}
                  aria-label={`accordion-${index2}`}
                  title={treatment[0]}
                >
                  <div className="flex justify-between">
                    <span>{treatment[1]}</span>
                    <span>{treatment[2]}€</span>
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
