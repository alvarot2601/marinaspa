import { React, useEffect, useState } from "react";
import Layout from "../components/Layout";
import antiaging from "../assets/images/anti-aging.jpg";
import aromaterapia from "../assets/images/aromaterapia.jpg";
import img1 from "../assets/images/galeria (1).JPG";
import img2 from "../assets/images/galeria (2).JPG";
import img3 from "../assets/images/galeria (3).JPG";
import img4 from "../assets/images/galeria (4).JPG";
import img5 from "../assets/images/galeria (5).JPG";
import img6 from "../assets/images/galeria (6).JPG";
import img7 from "../assets/images/galeria (7).JPG";
import img8 from "../assets/images/galeria (8).JPG";
import img9 from "../assets/images/galeria (9).JPG";
import img10 from "../assets/images/galeria (10).JPG";
import img11 from "../assets/images/galeria (11).JPG";
import img12 from "../assets/images/galeria (12).JPG";
import img13 from "../assets/images/galeria (13).JPG";
import img14 from "../assets/images/galeria (14).JPG";
import img15 from "../assets/images/galeria (15).JPG";
import img16 from "../assets/images/galeria (16).JPG";
import img17 from "../assets/images/galeria (17).JPG";
import img18 from "../assets/images/galeria (18).JPG";
import img19 from "../assets/images/galeria (19).JPG";
import img20 from "../assets/images/galeria (20).JPG";
import img21 from "../assets/images/galeria (21).JPG";
import img22 from "../assets/images/galeria (22).JPG";
import img23 from "../assets/images/galeria (23).JPG";
import img24 from "../assets/images/galeria (24).JPG";
import img25 from "../assets/images/galeria (25).JPG";
import img26 from "../assets/images/galeria (26).JPG";
import img27 from "../assets/images/galeria (27).JPG";
import img28 from "../assets/images/galeria (28).JPG";
import img29 from "../assets/images/galeria (29).JPG";
import img30 from "../assets/images/galeria (30).JPG";
import img31 from "../assets/images/galeria (31).JPG";
import img32 from "../assets/images/galeria (32).JPG";
import img33 from "../assets/images/galeria (33).JPG";
import img34 from "../assets/images/galeria (34).JPG";
import img35 from "../assets/images/galeria (35).JPG";
import img36 from "../assets/images/galeria (36).JPG";
import img37 from "../assets/images/galeria (37).JPG";
import img38 from "../assets/images/galeria (38).JPG";
import img39 from "../assets/images/galeria (39).JPG";
import img40 from "../assets/images/galeria (40).JPG";
import img41 from "../assets/images/galeria (41).JPG";
import img42 from "../assets/images/galeria (42).JPG";
import img43 from "../assets/images/galeria (43).JPG";
import contacto from "../assets/images/contacto.jpg";
import depilacion from "../assets/images/depilacion-cera.jpg";
import diagnostico from "../assets/images/diagnostico.jpg";
import esteticista_profesional from "../assets/images/esteticista_profesional.jpg";
import fotodepilacion from "../assets/images/fotodepilacion.jpg";
import hidromasaje from "../assets/images/hidromasaje.jpg";
import maquillaje from "../assets/images/maquillaje.jpg";
import esteticaGeneral from "../assets/images/estetica-general.jpg";
import mujerMaquillada from "../assets/images/woman made up.jpg";
import lipstick from "../assets/images/lipstick.jpg";
import makeup from "../assets/images/makeup.jpg";
import spa from "../assets/images/spa.jpg";

//gsap and scrolltrigger
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

//nextui
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
  Button,
} from "@nextui-org/react";

const Galeria = () => {
  const galeria_array = [
    [
      esteticista_profesional,
      makeup,
      img15,
      img38,
      img34,
      esteticaGeneral,
      img42,
      diagnostico,
      img7,
    ],
    [lipstick, hidromasaje, img16, img37, img33, img21, img40, img20, img8],
    [contacto, mujerMaquillada, img36, img32, img31, img41, img19, img9, img10],
    [spa, img6, img27, img13, img18, img23, img22, fotodepilacion, img29],
  ];
  //img24, img26,img25, img30

  const { isOpen, onOpen, onClose, onOpenChange } = useDisclosure();

  const [imgLink, setImgLink] = useState("");

  const [wrapperDirection, setWrapperDirection] = useState('flex-row');
  const [wrapperWidth, setWrapperWidth] = useState('w-[calc(50%-2.5px)]');
  const handleClick = (e) => {
    setImgLink(e.target.src);
    onOpen();
  };

  useEffect(()=>{
    if(window.innerWidth > 460 && window.innerHeight < 700){
        setWrapperDirection('flex-row');
    }
  }, []);

  useEffect(() => {
    let proxy = { skew: 0 },
      skewSetter = gsap.quickSetter(".skewElem", "skewY", "deg"), // fast
      clamp = gsap.utils.clamp(-20, 20); // don't let the skew go beyond 20 degrees.
    ScrollTrigger.create({
      onUpdate: (self) => {
        let skew = clamp(self.getVelocity() / -300);
        // only do something if the skew is MORE severe. Remember, we're always tweening back to 0, so if the user slows their scrolling quickly, it's more natural to just let the tween handle that smoothly rather than jumping to the smaller skew.
        if (Math.abs(skew) > Math.abs(proxy.skew)) {
          proxy.skew = skew;
          gsap.to(proxy, {
            skew: 0,
            duration: 0.8,
            ease: "power3",
            overwrite: true,
            onUpdate: () => skewSetter(proxy.skew),
          });
        }
      },
    });

    // make the right edge "stick" to the scroll bar. force3D: true improves performance
    gsap.set(".skewElem", { transformOrigin: "right center", force3D: true });
  });

  return (
    <Layout>
      <main className="galeria py-5 text-center text-zinc-700 bg-rose-200">
        <div className="px-3">
        <h1 className="text-5txl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold">
          galería
        </h1>
        <p className="my-5 text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl">Adéntrate en nuestra galería y descubre cómo son nuestras instalaciones.</p>
        </div>
        <section className={`flex ${wrapperDirection} flex-wrap sm:flex-row gap-[5px] px-[5px] pt-2 pb-7 `}>
          {galeria_array.map((images, index) => {
            let flexDirectionClass = "flex-col";
            let widthImgClass = "w-full";
            let widthWrapperClass = "w-[calc(50%-5px)]";
            if (index >= 2 && window.innerWidth >= 640) {
              //&& window.innerWidth >= 1000
              //flexDirectionClass = "flex-row";
              //widthImgClass = "w-[calc(50%-5px)]";
              //widthWrapperClass = "w-full";
            }
            return (
              <div
                key={`galeria-${index}`}
                className={`flex ${flexDirectionClass} md:${flexDirectionClass} gap-[5px] ${wrapperWidth} sm:${widthWrapperClass} md:w-[calc(25%-3.75px)]`}
              >
                {images.map((image, index2) => {
                  return (
                      <img
                        key={`imagen-galeria-${index}-${index2}`}
                        loading="lazy"
                        src={image}
                        className={`${widthImgClass} vertical-middle object-cover skewElem cursor-pointer`}
                        onClick={handleClick}
                      />
                  );
                })}
              </div>
            );
          })}
          <Modal isOpen={isOpen} onOpenChange={onOpenChange} size="full">
            <ModalContent>
              {(onClose) => (
                <ModalBody className="flex justify-center p-[5px]">
                  <img
                    loading="lazy"
                    src={imgLink}
                    className="w-auto h-[calc(100vh-10px)] object-contain mx-auto "
                  />
                </ModalBody>
              )}
            </ModalContent>
          </Modal>
        </section>
      </main>
    </Layout>
  );
};
export default Galeria;
