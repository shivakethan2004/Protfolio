import React, { useEffect, useState } from "react";
import backgroundImage2 from "../static/background2.png";
import {
  AnimatePresence,
  delay,
  easeIn,
  motion,
  useTransform,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { useNavigate } from "react-router-dom";
import Works from "./Works";
const Experience = ({ SECTION_HEIGHT }) => {
  const [showwork, setShowWork] = useState(false);
  const navigate = useNavigate();

  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest >= 3200) {
      setShowWork(true);
    } else {
      setShowWork(false);
    }
  });

  const opacity1 = useTransform(scrollY, [2000, 2200, 2600], [0, 1, 0]);
  const opacity2 = useTransform(
    scrollY,
    [2000, 2300, 2600, 2800],
    [0, 0, 0, 1]
  );
  const y1 = useTransform(scrollY, [2000, 2800], [200, 100]);
  const y2 = useTransform(scrollY, [2600, 2800], [0, -100]);
  return (
    <div className="sticky top-0 h-screen w-screen">
      <motion.div className="md:text-8xl text-white flex flex-col justify-center items-center h-screen">
        <motion.div
          style={{
            opacity: opacity1,
            y: y1,
          }}
          transition={{
            duration: 1,
          }}
        >
          <h1 className="main">2+ YEARS OF CODING </h1>
          <h2 className="font-Ballet">Experience </h2>
        </motion.div>
        <motion.div
          style={{
            opacity: opacity2,
            y: y2,
          }}
          transition={{
            duration: 2,
          }}
        >
          <h1 className="main">COMPLETED SOME HANDFULL </h1>
          <h2 className="font-Ballet">PROJECTS </h2>
        </motion.div>
      </motion.div>

      <img className="absolute z-[-1] top-0" src={backgroundImage2} alt="" />
      <AnimatePresence>{showwork && <Works showwork={showwork} SECTION_HEIGHT={SECTION_HEIGHT} />}</AnimatePresence>
    </div>
  );
};

export default Experience;
