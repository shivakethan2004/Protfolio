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
import { div } from "framer-motion/client";
import background from '../static/asthetic4.png'
import Linkdin from '../static/linkdin.png'
import github from '../static/github.gif'
import git from '../static/git.svg'
const Contact = ({ showContact, SECTION_HEIGHT }) => {
  const { scrollY } = useScroll();

  // console.log(`sfs${SECTION_HEIGHT}`)
  const componentRef = useRef(null);
  const easing = [1, 0.7, 0.1, 1];
  const [hover, setHover] = useState(false);
  const [open, setOpen] = useState(false);
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

  const left = useTransform(scrollY, [4600, 5400], [-100, 0]);
  const right = useTransform(scrollY, [4600, 5400], [100, 0]);

  return (
    <div>
      <div className="flex flex-col md:text-8xl text-white justify-center items-center md:gap-5">
        <motion.div
          style={{
            x: left,
          }}
          className="main pl-[20%] 
              
              "
        >
          LET'S START{" "}
        </motion.div>
        <motion.div
          style={{
            x: right,
          }}
          className="font-Ballet pr-[20%]"
        >
          Something Great{" "}
        </motion.div>
        <motion.div
          style={{
            x: left,
          }}
          className="main pl-[20%]"
        >
          TOGETHER
        </motion.div>
        <motion.div
          whileHover={{}}
          onClick={() => {
            setOpen(true);
          }}
          onMouseEnter={() => {
            setHover(true);
          }}
          onMouseLeave={() => {
            setHover(false);
          }}
          className="md:h-[300px] w-[300px] rounded-full bg-white mr-[50%] relative flex justify-center items-center"
        >
          <motion.div
            initial={{
              height: "0%",
              width: "0%",
            }}
            animate={{
              height: hover ? "100%" : 0,
              width: hover ? "100%" : 0,
            }}
            transition={{
              duration: 1,
              ease: easing,
            }}
            className="bg-stone-900   rounded-full flex justify-center items-center"
          ></motion.div>
          <span
            style={{
              color: hover ? "white" : "black",
            }}
            className="md:text-sm absolute font-thin"
          >
            Open Connect Form
          </span>
        </motion.div>
      </div>
      <AnimatePresence>
        {open && (
          <div className="absolute z-[200] top-0 h-screen w-screen bg-transparent backdrop-blur-md flex justify-center items-center ">
            <motion.div
              initial={{
                y: "-100%",
              }}
              animate={{
                y: ["-100%", 0],
              }}
              transition={{
                duration: 1,
                ease: easing,
              }}
              exit={{
                y: [0, "-110%"],
                transition: {
                  delay: 1,
                  duration: 1,
                  ease: easing,
                },
              }}
              className="h-[95%] w-full ml-5 bg-zinc-900 flex flex-col justify-center items-center text-white "
            >
              <motion.div 
              animate={{
                y:[30, 0],
                opacity:[0, 1],
                transition:{
                    delay:1,
                    duration:0.4,
                    ease:easeIn
                }
              }}
              transition={{
                opacity:{
                    delay:1
                },
                y:{
                    delay:0.3
                }
              }}
              exit={{
                y:[0, 30],

                opacity:[1, 0],
                transition:{
                    duration:0.7,
                    ease:easeIn
                }
              }}
              className="flex flex-col justify-center items-center w-[80% ] gap-10">
                <div className="flex flex-col justify-center items-center w-[100%] ">
                  <span className="main md:text-7xl">GET IN</span>
                  <span className="font-Ballet md:text-7xl pl-10">Touch</span>
                </div>
                <div className="flex w-[100%] justify-center items-center gap-4">
                  <div className="border-white border-[0.5px] ">
                    <input
                      className="bg-transparent p-2 font-thin text-sm"
                      type="text"
                      placeholder="Your Name"
                    />
                  </div>
                  <div className="border-white border-[0.1px] ">
                    <input
                      className="bg-transparent p-2 font-thin text-sm"
                      type="text"
                      placeholder="Your Email Address"
                    />
                  </div>
                </div>
                <div className="w-full flex justify-center flex-col items-center">
                  <div className=" border-white border-[0.5px] w-full h-[200px] overflow-scroll scrollbar-hide " >
                    <input className="bg-transparent p-2 font-thin text-sm h-[100%] w-[100%]" type="text" name="" id="" placeholder="What Can I help you with?" />
                  </div>
                  
                </div>
                <motion.button
                whileHover={{

                }}
                className="hover:bg-stone-300 hover:text-black text-white border-white border-[1px] h-[40px] pd-2 w-[200px] outline-none rounded-3xl font-thin">SUBMIT MESSAGE</motion.button>
              </motion.div>
            </motion.div>
            <motion.div
              initial={{
                y: "100%",
              }}
              animate={{
                y: ["100%", 0],
              }}
              transition={{
                duration: 1,
                ease: easing,
              }}
              exit={{
                y: [0, "110%"],
                transition: {
                  delay: 1,
                  duration: 1,
                  ease: easing,
                },
              }}
              className="h-[95%] w-full mr-5 bg-stone-300 flex flex-col justify-center items-center text-white"
            >
                <motion.div
                 animate={{
                  y:[30, 0],
                  opacity:[0, 1],
                  transition:{
                      delay:1,
                      duration:0.4,
                      ease:easeIn
                  }
                }}
                transition={{
                  opacity:{
                      delay:1
                  },
                  y:{
                      delay:0.3
                  }
                }}
                exit={{
                  y:[0, 30],
  
                  opacity:[1, 0],
                  transition:{
                      duration:0.7,
                      ease:easeIn
                  }
                }}
                className="w-[100%] h-[100%] ">
                    <img className="h-full w-full"
                    src={background} alt="" />
                <img className="absolute bottom-20 right-10 " src={Linkdin} alt="" />
                <img className="absolute bottom-20 right-[100px] h-[50px]" src={git} alt="" />
                
                </motion.div>
            </motion.div>
            <motion.button
              whileHover={{
                scale: 0.9,
              }}
              exit={{
                scale: 0,
              }}
              onClick={() => setOpen(false)}
              className="absolute z-[200] top-10 right-10 h-[50px] w-[50px] bg-zinc-900 rounded-full"
            >
              ❌
            </motion.button>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Contact;
