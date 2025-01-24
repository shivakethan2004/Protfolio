import React, { useRef, useState } from "react";
import {
  AnimatePresence,
  delay,
  easeIn,
  motion,
  useTransform,
  useScroll,
  useSpring,
  useMotionValueEvent,
} from "framer-motion";
import { useNavigate } from "react-router-dom";
import worksimg from "../static/works.png";
import Contact from "./contactPage";
const Works = ({ showwork, SECTION_HEIGHT }) => {
  const { scrollY } = useScroll();
const [showContact, setShowContact] = useState(false);
  const [compPosition, setCompPosition] = useState({ x: 0, y: 0, h: 0, w: 0 });
  const handleLinkClick = () => {
    window.location.href = "https://shivakethan2004.github.io/CarteringFrontEnd/"; // Opens the link in the current tab
  };
  // console.log(`sfs${SECTION_HEIGHT}`)
  const componentRef = useRef(null);
  const easing = [1, 0.7, 0.1, 1];
  const clipHeight = useTransform(
    scrollY,
    [3500, 3900, 4600],
    [
      `polygon(0 25%, 100% 25%, 100% 100%, 0 100%)`,
      `polygon(0 0%, 100% 0%, 100% 100%, 0 100%)`,
      `polygon(0 0%, 100% 0%, 100% 100%, 0 100%)`,
    ]
  );
  const y = useTransform(
    scrollY,
    [3700, 4000, 4100, 4200],
    [90, 0, -100, -150]
  );
  const handleMouseMove = (event) => {
    if (componentRef.current) {
        const mouseX = event.clientX;
        const mouseY = event.clientY;
    
        // Directly update the transform without checking boundaries
        componentRef.current.style.transform = `translate(${mouseX}px, ${mouseY+50}px)`;
      }
  };

  const getComponentPosition = () => {
    if (componentRef.current) {
      const rect = componentRef.current.getBoundingClientRect();
      setCompPosition({
        x: rect.x,
        y: rect.y,
        h: rect.height,
        w: rect.width,
      });
    }
  };
  const handleMouseLeave = () => {
    if (componentRef.current) {
      componentRef.current.style.transform = "translate(0px, 0px)";
    }
  };
 
  return (
    <div
      className=" w-screen relative   "
      style={{
        height: `${SECTION_HEIGHT}px `,
      }}
    >
      <div className="">
        <motion.div
          animate={{
            y: [0, "-100%"],
          }}
          // whileInView={{
          //     y: [100, 0],
          // }}
          transition={{
            duration: 0.6,
            ease: easing,
          }}
          exit={{
            y: ["-100%", 0],
            transition: {
              delay: 0.2,
              duration: 0.6,
              ease: easing,
            },
          }}
          className="bg-stone-400 absolute z-[110] top-0 h-[100vh] w-full"
        >
          {" "}
        </motion.div>
        <motion.div
          animate={{
            y: showwork ? [0, "-100%"] : [0, "100%"],
          }}
          exit={{
            y: ["-100%", 0],
            transition: {
              delay: 0.1,
              duration: 0.6,
              ease: easing,
            },
          }}
          transition={{
            duration: 0.6,
            delay: 0.1,
            ease: easing,
          }}
          className="bg-stone-600  absolute z-[120] h-[100vh] w-full"
        >
          {" "}
        </motion.div>
        <motion.div
          animate={{
            y: [0, "-100vh"],
          }}
          exit={{
            y: ["-100vh", 0],
            transition: {
              delay: 0,
              duration: 0.6,
              ease: easing,
            },
          }}
          transition={{
            duration: 0.6,
            delay: 0.2,
            ease: easing,
          }}
          style={{
            height: `2000px`,
          }}
          className="bg-stone-700  absolute z-[130] w-screen  flex justify-center items-center md:gap-[100px]"
        >
          <div
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          onMouseEnter={getComponentPosition}>
            
            <div className="flex flex-col w-screen absolute top-[30%] left-0">
              <span className="md:text-8xl font-Ballet text-white pr-[20%]">
                Recent
              </span>
              <span className="md:text-8xl font-Ballet text-white main pl-[20%]">
                {" "}
                WORK
              </span>
              
            </div>
            <motion.div
             onClick={handleLinkClick}
              style={{
                clipPath: clipHeight,
                height: `${500}px + 100vh `,
              }}
              className="relative md:top-[200px] w-screen"
            >
              <img
                className="h-[100vh] w-full sticky z-[0] top-0"
                src={worksimg}
                alt=""
              />
              <motion.div
               
                style={{
                  y,
                }}
                className="absolute top-0 text-white z-[50] w-[100%] h-[100%] flex flex-col justify-center items-center md:text-8xl"
              >
                <h1 className="main "> CATRING</h1>
                <h1 className="font-Ballet"> Event</h1>
              </motion.div>
              <div
                ref={componentRef}
                style={{
                  transition: "transform 0.2s ease-out",
                }}
                className="absolute z-[90] h-[50px] top-0 left-0 w-[50px] rounded-full font-bebas-neue text-white bg-tranparent backdrop-blur-xl flex items-center justify-center "
              >
                VIEW
              </div>
            </motion.div>
            <div className="absolute bottom-[50px] text-white z-[100] mx-auto text-2xl main">UPADATING SOON...</div>
          </div>
         
        </motion.div>
       
      </div>

    </div>
  );
};

export default Works;
