import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import React, { useRef, useEffect, useState } from "react";

const Agence = () => {
  const imageDivRef = useRef(null);

  const imagesArr = [
    "https://k72.ca/images/teamMembers/Carl_480x640.jpg?w=480&h=640&fit=crop&s=f0a84706bc91a6f505e8ad35f520f0b7",
    "https://k72.ca/images/teamMembers/Olivier_480x640.jpg?w=480&h=640&fit=crop&s=c13569c0753117d04f1a93cf7b446d64",
    "https://k72.ca/images/teamMembers/Lawrence_480x640.jpg?w=480&h=640&fit=crop&s=0a878205586092164001a9afe0ef4007",
    "https://k72.ca/images/teamMembers/HugoJoseph_480x640.jpg?w=480&h=640&fit=crop&s=f152025b8a59b062d1e7978b5d6544c3",
    "https://k72.ca/images/teamMembers/ChantalG_480x640.jpg?w=480&h=640&fit=crop&s=13093769c4a19cecd291ddcccd898991",
    "https://k72.ca/images/teamMembers/SophieA_480x640.jpg?w=480&h=640&fit=crop&s=fcb556060c29623e706dfbc4eeca87ac",
    "https://k72.ca/images/teamMembers/Michele_480X640.jpg?w=480&h=640&fit=crop&s=ce85dc6d140947736baa739d0e59dab2",
    "https://k72.ca/images/teamMembers/MEL_480X640.jpg?w=480&h=640&fit=crop&s=07c9bfee89816720b873e6748a276af6",
    "https://k72.ca/images/teamMembers/CAMILLE_480X640_2.jpg?w=480&h=640&fit=crop&s=74317575b2d72fd11c5296615c383e4a",
    "https://k72.ca/images/teamMembers/MEGGIE_480X640_2.jpg?w=480&h=640&fit=crop&s=3604b19f8fc7b40f517954147698d847",
    "https://k72.ca/images/teamMembers/joel_480X640_3.jpg?w=480&h=640&fit=crop&s=1cadbf143b3aa916b1b414464acbb4d6",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const imageRefs = useRef([]);

  // Preload all images
  useEffect(() => {
    imagesArr.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    // Use ScrollTrigger directly without gsap.to wrapper for real-time updates
    const st = ScrollTrigger.create({
      trigger: imageDivRef.current,
      // markers: true,
      start: "top 27.5%",
      end: "top -100%",
      pin: true,
      onUpdate: (self) => {
        let imgIndex;
        if (self.progress < 1) {
          imgIndex = Math.floor(self.progress * imagesArr.length);
        } else {
          imgIndex = imagesArr.length - 1;
        }
        
        // Update immediately using requestAnimationFrame for smooth updates
        requestAnimationFrame(() => {
          setCurrentIndex(imgIndex);
        });
      },
    });

    return () => {
      st.kill();
    };
  });

  return (
    <div>
      <div className="section1">
        <div
          ref={imageDivRef}
          className="absolute overflow-hidden h-[20vw] w-[15vw] rounded-3xl top-50 left-[30vw] border border-zinc-400/20"
        >
          {imagesArr.map((src, index) => (
            <img
              key={index}
              ref={(el) => (imageRefs.current[index] = el)}
              className="absolute top-0 left-0 h-full w-full object-cover"
              style={{
                opacity: index === currentIndex ? 1 : 0,
                pointerEvents: index === currentIndex ? 'auto' : 'none',
              }}
              src={src}
              alt={`Team member ${index + 1}`}
              loading={index < 3 ? 'eager' : 'lazy'}
            />
          ))}
        </div>
        <div className="relative font-[lausBold]">
          <div className="mt-[55vh]">
            <h1 className="text-[19vw] text-center uppercase leading-[17vw]">
              Soixan7e <br />
              Douze
            </h1>
          </div>

          <div className="pl-[40%] mt-16">
            <p className="text-5xl">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              Notre curiosité nourrit notre créativité. On reste humbles et on
              dit non aux gros egos, même le vôtre. Une marque est vivante. Elle
              a des valeurs, une personnalité, une histoire. Si on oublie ça, on
              peut faire de bons chiffres à court terme, mais on la tue à long
              terme. C'est pour ça qu'on s'engage à donner de la perspective,
              pour bâtir des marques influentes.
            </p>
          </div>
        </div>
      </div>

      <div className="section2 h-screen"></div>
    </div>
  );
};

export default Agence;
