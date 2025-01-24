import React, { useEffect, useState } from "react";
import backgroundImage from "../static/background.jpg";
import { Engine, World, Render, Bodies, Runner, Matter } from "matter-js";
import shiva from '../static/image-shiva.jpg'
import "./matter.css";
import {
  delay,
  motion,
  useMotionTemplate,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";
import { clipPath } from "framer-motion/client";

const HomePage = ({ SECTION_HEIGHT }) => {
  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, "change", (latest) => {
    console.log(latest);
  });
  const xRight = useTransform(scrollY, [10, 1000], [0, 100]);
  const xLeft = useTransform(scrollY, [10, 1000], [0, -100]);
  const clipPath2 = useTransform(
    scrollY,
    [1000, 1040, 1080, 1120, 1260, 1300, 1340, 1380, 1420, 1460, 1500, 1540, 1580, 1620, 1640],
    [
      `path('M 20 107 C 16 110 17 114 20 117 C 35 127 51 125 46 110 C 40 97 29 93 20 107')`,
      `path('M 20 107 C 16 110 17 114 20 117 C 35 127 51 125 75 86 C 40 97 29 93 20 107')`,
      `path('M 20 107 C 16 110 17 114 33 127 C 65 116 74 91 106 70 C 66 71 47 75 20 107')`,
      `path('M 20 107 C 16 110 17 114 33 127 C 60 105 113 76 168 61 C 102 55 93 54 21 106')`,
      `path('M 20 107 C 16 110 17 114 33 127 C 114 72 133 63 206 65 C 153 39 132 46 21 106')`,
      `path('M 20 107 C 16 110 17 114 33 127 C 120 66 154 47 200 102 C 178 38 161 35 21 106')`,
      `path('M 20 107 C 16 110 17 114 33 127 C 159 56 162 58 224 201 C 189 52 208 -2 21 106')`,
      `path('M 20 60 C 21 63 19 59 33 127 C 159 56 174 208 343 349 C 187 143 312 27 19 59')`,
      `path('M 20 60 C 21 63 19 59 33 127 C 223 269 192 409 525 353 C 160 321 247 74 19 59')`,
      `path('M 20 60 C 21 63 19 59 33 127 C 264 322 523 522 554 207 C 363 513 191 97 19 59')`,
      `path('M 20 60 C 21 63 19 59 33 127 C 591 495 751 137 1006 278 C 916 148 504 330 19 59')`,
      `path('M 20 60 C 21 63 19 59 33 127 C 591 495 751 137 1369 473 C 916 148 504 330 19 59')`,
      `path('M 366 120 C 365 120 369 119 218 250 C 591 495 751 137 1369 473 C 916 148 504 330 367 119')`,
      `path('M 849 201 C 815 226 817 271 840 298 C 1065 326 1235 258 1369 473 C 1314 347 1233 160 847 201')`,
      `path('M 1368 462 C 1368 462 1368 462 1368 462 C 1368 462 1368 462 1368 462 C 1368 462 1368 462 1368 462')`,
     
    ]
  );
  const stickyTop = useTransform(scrollY, [0, 500], [0, 100]);

  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: [0, 1],
      }}
      style={{
        height: `${SECTION_HEIGHT-1000}px `,
        position: "relative",
        overflow: "visible",
      }}
      transition={{
        duration: 1,
      }}
      className=" w-screen bg-zinc-800 main text-white relative  flex flex-col gap-4 pt-10"
    >
      <motion.div
        style={{
          x: xRight,
        }}
        className=" md:text-8xl md:pr-[50%]"
      >
        CRAFTING
      </motion.div>
      <motion.div
        style={{
          x: xLeft,
        }}
        className=" md:pr-[10%] md:text-8xl font-Ballet"
      >
        Outstanding
      </motion.div>
      <motion.div
        style={{
          x: xRight,
        }}
        className=" md:text-8xl md:pl-[40%]"
      >
        WEBSITES
      </motion.div>
      <motion.div
        style={{
          x: xLeft,
        }}
        className=" md:text-8xl md:pr-[30%]"
      >
        THAT LEAVE A{" "}
      </motion.div>
      <motion.div
        style={{
          x: xRight,
        }}
        className=" md:text-8xl  font-Ballet md:pl-[40%] "
      >
        Lasting Impression
      </motion.div>
    
        <motion.div
          className="bg-white h-[600px] w-screen sticky top-[10px] z-[50]"
          style={{
            clipPath: clipPath2,
          }}
        ></motion.div>
    
          <div className="absolute left-10 h-[600px] w-[40%] top-[100vh] ">
          <img src={shiva} className = 'rounded-2xl' alt="temp" />
          </div>
      <div className="flex absolute right-10 h-[600px] w-[40%] top-[100vh] ">
        <motion.div className="flex flex-col justify-center items-center text-left font-thin"
       
        >
          <h1>ABOUT ME</h1>
          <div>
            <span>
              "I am a Frontend Developer currently pursuing my final year of
              B.Tech, eager to learn and explore new technologies. I specialize
              in React.js and am proficient in TypeScript, with a foundational
              understanding of the MERN stack. If you're running a startup, I’m
              confident that I can offer significant value with my skills and
              enthusiasm to contribute and grow."
            </span>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default HomePage;
