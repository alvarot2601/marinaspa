import React, { useEffect, useRef, useState } from "react";
import Header from "../components/Header";
import Testimonials from "../components/Testimonials";
import Diagnostico from "../components/Diagnostico";
import Tratamientos_c from "../components/Tratamientos_c";
import Layout from "../components/Layout";
import Servicios from "../components/Servicios";
import { Divider } from "@nextui-org/react";

const Home = () => {
  const section_1 = useRef(null);
  const section_2 = useRef(null);
  const section_3 = useRef(null);
  const section_4 = useRef(null);
  const section_5 = useRef(null);
  const section_6 = useRef(null);

  const [activeSection, setActiveSection] = useState([]);
  const [prevSection, setPrevSection] = useState(null);
  const [nextSection, setNextSection] = useState(null);
  const [allSections, setAllSections] = useState([]);
  // Set the scroll speed factor
  let scrollSpeed = 0.0005;
  useEffect(() => {
    const section1 = document.querySelector(".section-1");
    const section2 = document.querySelector(".section-2");
    const section3 = document.querySelector(".section-3");
    const section4 = document.querySelector(".section-4");
    const section5 = document.querySelector(".section-5");
    const section6 = document.querySelector(".section-6");

    setAllSections([section_1, section_2, section_3]);
    //const allSections = [section1, section2, section3];
    setActiveSection(section_1);
    setNextSection(section_2);
  }, []);

  useEffect(() => {
    //recorremos el array de secciones para saber cual es la seccion anterior y posterior
    for (let i = 0; i < allSections.length; i++) {
      if (activeSection === allSections[i] && i !== 0) {
        setPrevSection(allSections[i - 1]);
        //console.log('allSections[i-1]', allSections[i-1])
      }

      if (activeSection === allSections[i] && i !== allSections.length - 1) {
        setNextSection(allSections[i + 1]);
        //console.log('allSections[i + 1]', allSections[i + 1])
        //console.log('activeSection', activeSection)
        //console.log('allSections.length - 1', allSections.length - 1)
        //console.log('i', i)
        //console.log('nextSection', allSections[i+1])
        //break;
      }
    }
  }, [activeSection]);

  useEffect(() => {
    const moveToSection = (e) => {
      if (nextSection == null) return;

      if (e.wheelDelta > 0) {
        console.log("hacia arriba");
        console.log("activesection", activeSection);
        console.log(
          "activesection.getBoundingClientRect().y",
          activeSection.current.getBoundingClientRect().y
        );
        console.log("window.innerHeight / 2", window.innerHeight / 2);
        if (
          window.innerHeight / 2 <
          activeSection.current.getBoundingClientRect().y
        ) {
          if (activeSection == section_2) {
            //window.scrollTo(0,0);
            setActiveSection(prevSection);
            return null;
          }

          // Calculate the new scroll position

          //prevSection.current.scrollIntoView({behavior:"smooth"});
          setActiveSection(prevSection);
          //activeSection.current.classList.remove('active-section');

          //nextSection.classList.add('active-section');
        }
      } else {
        //wheel hacia abajo

        console.log("activesection", activeSection);
        console.log("nextSection", nextSection);
        console.log(
          "nextSection.getBoundingClientRect().y",
          nextSection.current.getBoundingClientRect().y
        );
        console.log("window.innerHeight / 2", window.innerHeight / 2);
        //no se xq sigue entrando aqui

        if (
          window.innerHeight / 2 >
          nextSection.current.getBoundingClientRect().y
        ) {
          //nextSection.current.scrollIntoView({behavior:"smooth"});
          setActiveSection(nextSection);
          //activeSection.current.classList.remove('active-section');

          //nextSection.classList.add('active-section');
        }
      }
      //if (window.scrollY > 0)  a.scrollIntoView({behavior:"smooth"});
    };
    let timeout;
    const f = (e) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        if (e.wheelDelta > 0) {
          if (
            window.innerHeight / 2 >=
            activeSection.current.getBoundingClientRect().y
          ) {
            if (activeSection === section_1) {
              //window.scrollTo(0,0);
              return null;
            }
            //activeSection.current.scrollIntoView({behavior:"smooth"});
            return null;
          }
        } else {
          if (
            window.innerHeight / 2 <=
            nextSection.current.getBoundingClientRect().y
          ) {
            if (activeSection === section_1) {
              //window.scrollTo(0,0);
              return null;
            }
            //activeSection.current.scrollIntoView({behavior:"smooth"});
            return null;
          }
        }

        moveToSection(e);
      }, 400);
    };

    document.body.addEventListener("wheel", f);
    //window.addEventListener('scroll', moveToSection);
    //funcion cleanup del useeffect. Si no existe se ejecuta varias veces la funcion moveToSection cada vez que se dispare el evento
    return () => document.body.removeEventListener("wheel", f);
    //window.removeEventListener('scroll', moveToSection);
    //document.body.addEventListener('wheel', (e) => moveToSection(e));
  });

  return (
    <Layout>
      <section className="navHeaderWrapper section-1" ref={section_1}>
        <Header classProp="active-section section-1 text-zinc-700" />
      </section>

      <section ref={section_2} className="servicios section-3 text-zinc-700 ">
        <Servicios classProp="section-3" />
      </section>
      <section ref={section_3} className="tratamientos section-4 text-zinc-700">
        <Tratamientos_c />
      </section>
      <section className="text-zinc-700">
      <Testimonials />
      </section>
      <Divider/>
      <section className="text-zinc-700">
      <Diagnostico />
      </section>
    </Layout>
  );
};

export default Home;
