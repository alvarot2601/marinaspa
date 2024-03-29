import { Divider } from "@nextui-org/react";
import React, { useState } from "react";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import { Box } from "@mui/material";
import { FaArrowUp } from "react-icons/fa";
import { theme } from "../theme";
import { ThemeProvider } from "@emotion/react";
import { Skeleton } from "@mui/material";
const Lista3 = ({ obj }) => {
  const onlyNumbersRegEx = /^[0-9]+$/;
  const [expanded, setExpanded] = useState(false);
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  }
  const [isLoaded, setIsLoaded] = useState(false);
  const handleImageLoad = () => {
    setTimeout(() => {
      setIsLoaded(true);
    }, 1000);
  }
  const setAutoplay = () => {

  }
  const isVideo = ['.mpg', '.mp2', '.mpeg', '.mpe', '.mpv', '.mp4'];


  return obj.category.map((category, index) => {
    const reverseRowClass = 0;//index % 2 === 0 ? "" : "order-1";
    return (
      <ThemeProvider theme={theme}>
        <Box key={`lista-${index}`} className="flex gap-5">
          <div
            className={`w-full md:w-4/6  px-7 py-5 ${reverseRowClass} flex flex-col justify-center`}
          >
            {
              isLoaded ? (
                category !== "" ? (
                  <span className="animate-charcter text-6xl font-semibold" >{category}</span>
                ) : (
                  ""
                )
              ) : (
                <Skeleton variant="text" animation="wave">
                  <span className="animate-charcter text-6xl font-semibold" >{category}</span>
                </Skeleton>
              )
            }
            {
              isLoaded ? (!Array.isArray(obj.category_text) && obj.category_text !== "") ||
                (Array.isArray(obj.category_text) &&
                  obj.category_text[index] !== "") ? (
                <p className="text-xl mt-5 mb-3 italic text-primaryDark" >
                  {
                    Array.isArray(obj.category_text)
                      ? obj.category_text[index]
                      : obj.category_text
                  }
                </p>
              ) : (
                ""
              ) : (!Array.isArray(obj.category_text) && obj.category_text !== "") ||
                (Array.isArray(obj.category_text) &&
                  obj.category_text[index] !== "") ? (
                <Skeleton variant="text" animation="wave">
                  <p className="text-xl mt-5 mb-3 italic text-primaryDark" >
                    {
                      Array.isArray(obj.category_text)
                        ? obj.category_text[index]
                        : obj.category_text
                    }
                  </p>
                </Skeleton>
              ) : (
                ""
              )

            }

            <div>
              {obj.treatments[index].map((treatment, index2) => {
                let justifyClass =
                  treatment[1] !== "" ? "justify-between" : "justify-end";
                return (
                  <>
                    {
                      isLoaded ? (
                        <Accordion sx={{ backgroundColor: theme.palette.primary.main, color: "#fff" }} expanded={expanded === treatment[treatment.length - 1]} key={`accordion_${index}_${index2}`} onChange={handleChange(treatment[treatment.length - 1])}>
                          <AccordionSummary
                            expandIcon={<FaArrowUp style={{ color: '#fff' }} />}
                            aria-controls={`panel_${index}-${index2}a-header`}
                            id={`panel_${index}-${index2}a-header`}
                          >
                            <span>{treatment[0]}</span>
                          </AccordionSummary>
                          <AccordionDetails>
                            <div className={`flex ${justifyClass} items-center`}>
                              {treatment[1] !== "" ? (
                                <span className="basis-10/12">{treatment[1]}</span>
                              ) : (
                                ""
                              )}
                              <span className="flex justify-end basis-auto text-2xl ">
                                {onlyNumbersRegEx.test(treatment[2])
                                  ? treatment[2] + "€"
                                  : treatment[2]}
                              </span>
                            </div>
                          </AccordionDetails>
                        </Accordion>
                      ) : (
                        <Skeleton variant="rounded" animation="wave" width="100%">
                          <Accordion sx={{ backgroundColor: theme.palette.primary.main, color: "#fff" }} expanded={expanded === treatment[treatment.length - 1]} key={`accordion_${index}_${index2}`} onChange={handleChange(treatment[treatment.length - 1])}>
                            <AccordionSummary
                              expandIcon={<FaArrowUp style={{ color: '#fff' }} />}
                              aria-controls={`panel_${index}-${index2}a-header`}
                              id={`panel_${index}-${index2}a-header`}
                            >
                              <span>{treatment[0]}</span>
                            </AccordionSummary>
                            <AccordionDetails>
                              <div className={`flex ${justifyClass} items-center`}>
                                {
                                  treatment[1] !== "" ? (
                                    <span className="basis-10/12">{treatment[1]}</span>
                                  ) : (
                                    ""
                                  )
                                }
                                <span className="flex justify-end basis-auto text-2xl ">
                                  {onlyNumbersRegEx.test(treatment[2])
                                    ? treatment[2] + "€"
                                    : treatment[2]}
                                </span>
                              </div>
                            </AccordionDetails>
                          </Accordion>
                        </Skeleton>
                      )
                    }
                  </>
                );
              })}
            </div>
          </div>
          {
            isLoaded ? (
              Array.isArray(obj.images) ? (
                obj.images[index] !== "" ? (
                  <div className="hidden md:flex md:items-center w-2/6 ">
                    {
                      obj.images[index].includes('.mp4')
                        ?
                        (
                          <video className="w-full max-h-[600px]" controls autoPlay muted>
                            <source src={obj.images[index]} type="video/mp4" ></source>
                            Your browser does not support the video tag.
                          </video>
                        )
                        :
                        <img
                          onLoad={handleImageLoad}
                          className="h-full object-cover"
                          src={obj.images[index]}
                          alt=""
                        />
                    }
                  </div>
                ) : (
                  ""
                )
              ) : (
                ""
              )
            ) : (
              Array.isArray(obj.images) ? (
                obj.images[index] !== "" ? (
                  <div className="hidden md:flex md:items-center w-2/6 ">
                    {
                      obj.images[index].includes('.mp4')
                        ?
                        (
                          <Skeleton variant="rectangular" animation="wave" width="100%">
                            <video className="w-full max-h-[600px]" controls autoPlay muted>
                              <source src={obj.images[index]} type="video/mp4" ></source>
                              Your browser does not support the video tag.
                            </video>
                          </Skeleton>
                        )
                        :
                        <Skeleton variant="rectangular" animation="wave">
                          <img
                            onLoad={handleImageLoad}
                            className="h-full object-cover"
                            src={obj.images[index]}
                            alt=""
                          />
                        </Skeleton>
                    }
                  </div>
                ) : (
                  ""
                )
              ) : (
                ""
              )
            )
          }
        </Box>
      </ThemeProvider>
    );
  });
};

export default Lista3;
/*
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
          
          
          <AccordionItem
                  className="accordionItemLista"
                  key={`accordion-${index}-${index2}`}
                  aria-label={`accordion-${index2}`}
                  title={treatment[0]}
                >*/