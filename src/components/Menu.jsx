import React from "react";
import NavBarContent from "./NavBarContentSmall";
import { AnimatePresence, delay, easeIn, motion } from "framer-motion";
import NavBarContentBig from "./NavBarContentBig";

const Menu = ({ menuOpen }) => {
    const easing = [1, 0.7, 0.1, 1];
  return (
    <div className=" w-screen h-screen sticky top-0 ">
        <div className="">
        <motion.div
        animate={{
          y: ["100%", 0],
        }}
        transition={{
          duration: 0.6,
          ease: easing
        }}
        exit={{
          y: [0, "100%"],
          transition: {
            delay: 0.2,
            duration: 0.6,
            ease: easing
          },
        }}
        className="bg-stone-400 absolute z-[110] top-0 h-full w-full"
      >
        {" "}
      </motion.div>
      <motion.div
        animate={{
          y: menuOpen ? ["100%", 0] : [0, "100%"],
        }}
        exit={{
          y: [0, "100%"],
          transition: {
            delay: 0.1,
            duration: 0.6,
            ease: easing
          },
        }}
        transition={{
          duration: 0.6,
          delay: 0.1,
          ease: easing
        }}
        className="bg-stone-600  absolute z-[120] h-full w-full"
      >
        {" "}
      </motion.div>
      <motion.div
        animate={{
          y: ["100%", 0],
        }}
        exit={{
          y: [0, "100%"],
          transition: {
            delay: 0,
            duration: 0.6,
            ease: easing
          },
        }}
        transition={{
          duration: 0.6,
          delay: 0.2,
          ease: easing
        }}
        className="bg-stone-700  absolute z-[130] h-full w-full flex justify-center items-center md:gap-[100px]"
      >
        <ul className="flex flex-col justify-center items-center h-[100vh] text-white font-bebas-neue md:gap-10">
          <li className="md:text-5xl">
            <NavBarContentBig
              Children={["A", "B", "O", "U", "T"]}
            ></NavBarContentBig>
          </li>
          <li className="md:text-5xl">
            <NavBarContentBig
              Children={["C", "O", "N", "T", "A", "C", "T"]}
            ></NavBarContentBig>
          </li>
          <li className="md:text-5xl">
          <NavBarContentBig Children={["W", "O", "R", "K", "S"]}></NavBarContentBig>
        </li>
        </ul>
        {/* <button onClick={handleMenuClick}>close</button> */}
        <div className="md:h-[80%] border-white border-[1px] "></div>
        <div className="md:h-[80%] md:w-[300px] flex items-end justify-center text-white font-mono">
        asoffo
        </div>
      </motion.div>
      
        </div>
        
    </div>
  );
};

export default Menu;
