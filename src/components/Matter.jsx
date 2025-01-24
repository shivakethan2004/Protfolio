import React, { useEffect, useRef, useState } from "react";
import { Engine, World, Render, Bodies, Runner, Matter } from "matter-js";
import { AnimatePresence, delay, easeIn, motion , useTransform, useScroll} from "framer-motion";
import backgroundImage from "../static/background.jpg"; // Adjust path to your image
import backgroundImage2 from "../static/background2.png"; // Adjust path to your image
import S from "../static/S.png";
import H from "../static/H.png";
import I from "../static/I.png";
import V from "../static/V.png";
import A from "../static/A.png";
// import './matter.css'
import NavBarContent from "./NavBarContentSmall";
import Menu from "./Menu";
import HomePage from "./HomePage";
import Experience from "./Experience";
import Works from "./Works";
import Contact from "./contactPage";
const Practice = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setMenuOpen(!menuOpen);
  };
  const [hovered, setHovered] = useState(false);
  const ch = window.innerHeight;
  const cw = window.innerWidth;
  const CanvasCon = useRef(null);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [isPhysicsActive, setPhysicsActive] = useState(false);
  const divRef = useRef();
  const SECTION_HEIGHT = 2500;
  const engineRef = useRef(null);
  useEffect(() => {
    engineRef.current = Engine.create();
    if (!CanvasCon.current) return;

    // Create engine and render instance
    engineRef.current.world.gravity.y = 10;
    const render = Render.create({
      element: CanvasCon.current, // Use the DOM node directly
      engine: engineRef.current,
      options: {
        width: cw,
        height: ch,
        background: "transparent", // Keep canvas background transparent
        wireframes: false, // Optional: if you don't want wireframes to be visible
      },
    });

    // Set up the beforeRender event to draw the background image once it's loaded

    // Add a simple body
    // const boxA = Bodies.polygon(400, 200, 80, 80);
    const boxB = Bodies.rectangle(0, ch - 20, 2 * cw, 20, {
      isStatic: true,
      restitution: 1,
      render: { fillStyle: "transparent" },
    });

    World.add(engineRef.current.world, [boxB]);

    // Run the engine and renderer
    Render.run(render);
    const runner = Runner.create();
    Runner.run(runner, engineRef.current);

    // Cleanup function to stop the engine and renderer
    return () => {
      Render.stop(render);
      Engine.clear(engineRef.current);
      render.canvas.remove();
      render.textures = {};
    };
  }, []);

  const handleClick = (event) => {
    if (!isPhysicsActive) {
      const div = event.currentTarget;
      const rect = div.getBoundingClientRect();
      const img = event.currentTarget.getAttribute("name");
      // Create a hexagonal physical body
      const radius = rect.width / 2; // Set radius based on div's width
      const box = Bodies.polygon(
        rect.x + rect.width / 2,
        rect.y + rect.height / 2,
        6, // Number of sides (6 for hexagon)
        radius, // Radius of the hexagon
        {
          restitution: 1,
          render: {
            sprite: {
              texture: img, // Image as the texture
              xScale: 1.3, // Scale of the image on the x-axis
              yScale: 1.3, // Scale of the image on the y-axis
            },
            fillStyle: "transparent", // Make the body transparent (since image will be used)
          },
        }
      );

      // Add the body to the world
      World.add(engineRef.current.world, box);
      //  setPhysicsActive(true);
    }
  };

  const letterAnime = {
    type: "spring",
    stiffness: 700,
    damping: 15,
    duration: 2,
  };

  const Style = () => {
    if (!isPhysicsActive) return {};
    return { display: "none" };
  };
  
  return (
    <div
      style={{
        height: `calc(${1.2*SECTION_HEIGHT}px + 400vh)`,
      }}
      className=" relative bg-stone-800  w-screen flex flex-col   "
    >
      <div className="sticky top-0 z-[100]">
        <li
          onClick={handleMenuClick}
          className="w-[50px] overflow-hidden absolute right-2 list-none z-[150] top-4 "
        >
          <div
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            className="flex flex-col justify-start "
          >
            <motion.li
              animate={{
                x: hovered ? -100 : 0,
              }}
              transition={{
                duration: 0.8,
                ease: [0, 1, 7, 2],
              }}
              className="w-[150px] h-[16px] overflow-hidden flex justify-center items-center"
            >
              <li className="inline-flex w-[200px] p-0">
                <span className=" border-white black border-[1px]  w-[100px]"></span>{" "}
                <span className=" border-white border-[1px]  w-[100px] ml-2"></span>
              </li>
            </motion.li>
            <motion.li
              animate={{
                x: hovered ? 0 : -100,
              }}
              transition={{
                duration: 0.8,
                ease: [0, 1, 7, 2],
              }}
              className="w-[150px]  h-[16px] overflow-hidden flex justify-center items-center"
            >
              {/* <span className="inline border-white border-[1px] w-[50px]"></span> <span className="inline border-white border-[1px] w-[50px] ml-6"></span> */}
              <li className="inline-flex w-[200px] p-0">
                <span className=" border-white black border-[1px]  w-[100px]"></span>{" "}
                <span className=" border-white border-[1px] w-[100px] ml-2"></span>
              </li>
            </motion.li>
          </div>
        </li>
        <AnimatePresence>
          {menuOpen && <Menu menuOpen={menuOpen}></Menu>}
        </AnimatePresence>
      </div>

      <div className="absolute top-0 ">
        <div
          className="w-screen h-[100vh] relative overflow-auto scrollbar-hidden bg-stone-800"
          style={
            {
              // backgroundImage: `url(${backgroundImage})`,
              // backgroundRepeat: "no-repeat",
              // backgroundSize: "cover",
            }
          }
        >
          <div className="absolute top-5 right-10 font-bebas-neue z-[50] ">
            <NavBar />
          </div>
          {/* The canvas container with transparent background */}
          <div
            ref={CanvasCon}
            className="absolute top-0 left-0 overflow-auto scrollbar-hidden w-screen h-[100%]"
            style={{}}
          >
            <div className="absolute top-0 h-[100%] w-[100%] overflow-auto scrollbar-hidden">
              {/* Your animated content */}
              <div className="h-[100%] text-white font-bebas-neue flex justify-center items-center gap-4 w-[100%] overflow-auto scrollbar-hidden">
                <motion.div
                  name={S}
                  ref={divRef}
                  onClick={handleClick}
                  initial={{ scale: 1 }}
                  whileHover={{ scale: 1.3 }}
                  // animate={{ y: [-500, 0] }}
                  animate={{
                    x: [-300, 0],
                    rotate: [0, 360],
                  }}
                  transition={{
                    x: { duration: 1.5 },

                    scale: { delay: 0, ...letterAnime },
                    // x: { ...letterAnime },
                    rotate: {
                      type: "spring",
                      stiffness: 30,
                      damping: 15,
                    },
                  }}
                  // className="md:text-6xl bg-zinc-800 h-[100px] w-[100px] flex items-center justify-center"
                  style={Style()}
                >
                  <img className="" src={S} alt="" />
                </motion.div>
                <motion.div
                  name={H}
                  ref={divRef}
                  onClick={handleClick}
                  initial={{ scale: 1 }}
                  whileHover={{ scale: 1.3 }}
                  // animate={{ y: [-60
                  // 0, 0] }}
                  animate={{
                    x: [-300, 0],
                    rotate: [0, 360],
                    height: [120, 50, 120],
                  }}
                  transition={{
                    x: { duration: 1.5 },
                    height: { delay: 1.7, duration: 0.5 },

                    scale: { delay: 0, ...letterAnime },
                    // x: { ...letterAnime },
                    rotate: {
                      type: "spring",
                      stiffness: 30,
                      damping: 15,
                    },
                  }}
                  // transition={{
                  //   scale: { delay: 0, ...letterAnime },
                  //   y: { delay: 0.5, ...letterAnime },
                  // }}
                  className=" h-[120px] w-[108px] flex justify-center items-center "
                  // style={Style()}
                >
                  <img className="w-fit h-fit " src={H} alt="" />
                </motion.div>

                <motion.div
                  name={I}
                  ref={divRef}
                  onClick={handleClick}
                  initial={{ scale: 1, opacity: 0 }}
                  whileHover={{ scale: 1.3 }}
                  animate={{
                    x: [-124, 0],
                    y: [0, -100, 0],

                    rotate: [0, 180],
                    opacity: 1,
                  }}
                  transition={{
                    x: { delay: 2, type: "spring", stiffness: 30, damping: 15 },
                    y: {
                      delay: 2,
                    },

                    opacity: {
                      delay: 2,
                    },

                    scale: { delay: 0, ...letterAnime },
                    // x: { ...letterAnime },
                    rotate: {
                      delay: 2,
                      type: "spring",
                      stiffness: 30,
                      damping: 15,
                    },
                  }}
                  // className="md:text-6xl bg-zinc-800 h-[100px] w-[100px] flex items-center justify-center"
                  style={Style()}
                >
                  <img className="" src={I} alt="" />
                </motion.div>
                <motion.div
                  name={V}
                  ref={divRef}
                  onClick={handleClick}
                  initial={{ scale: 1 }}
                  whileHover={{ scale: 1.3 }}
                  animate={{
                    x: [300, 0],
                    rotate: [360, 0],
                  }}
                  transition={{
                    x: { duration: 1.5 },

                    scale: { delay: 0, ...letterAnime },
                    // x: { ...letterAnime },
                    rotate: {
                      type: "spring",
                      stiffness: 30,
                      damping: 15,
                    },
                  }}
                  // className="md:text-6xl bg-zinc-800 h-[100px] w-[100px] flex items-center justify-center"
                  style={Style()}
                >
                  <img className="" src={V} alt="" />
                </motion.div>
                <motion.div
                  name={A}
                  ref={divRef}
                  onClick={handleClick}
                  initial={{ scale: 1 }}
                  whileHover={{ scale: 1.3 }}
                  animate={{
                    x: [300, 0],
                    rotate: [360, 0],
                  }}
                  transition={{
                    x: { duration: 1.5 },

                    scale: { delay: 0, ...letterAnime },
                    // x: { ...letterAnime },
                    rotate: {
                      type: "spring",
                      stiffness: 30,
                      damping: 15,
                    },
                  }}
                  // className="md:text-6xl bg-zinc-800 h-[100px] w-[100px] flex items-center justify-center"
                  style={Style()}
                >
                  <img className="" src={A} alt="" />
                </motion.div>
              </div>
            </div>
            {/* <div>
            <NavBar />
          </div> */}
          </div>
        </div>
      </div>

      <div className="bg-white relative top-[100vh] w-screen ">
        <HomePage SECTION_HEIGHT={SECTION_HEIGHT} />
      </div>
      <div
        SECTION_HEIGHT={SECTION_HEIGHT}
        className="relative top-[100vh] "
        style={{
          height: `${SECTION_HEIGHT-900}px `,
        }}
      >
        <Experience />

        
      </div>
      {/* <div 
     style={{
      position:'relative',
      top:`100vh`,
     }} 
      className="h-screen w-screen ">
        <Works/>

      </div> */}
     <div className="absolute bottom-0 w-screen h-screen">

      <Contact/>
     </div>

</div>
  
  );
};

const NavBar = () => {
  return (
    <nav>
      <motion.ul
        whileInView={{
          y: [15, 0],
          opacity: [0, 1],
        }}
        transition={{
          y: { duration: 0.2 },
          opacity: {
            duration: 1,
          },
        }}
        className="flex text-white justify-end md:gap-6 md:mr-10 overflow-hidden "
      >
        <li>
          <NavBarContent Children={["A", "B", "O", "U", "T"]}></NavBarContent>
        </li>
        <li>
          <NavBarContent
            Children={["C", "O", "N", "T", "A", "C", "T"]}
          ></NavBarContent>
        </li>
        <li>
          <NavBarContent Children={["W", "O", "R", "K", "S"]}></NavBarContent>
        </li>
        <li>|</li>
      </motion.ul>
    </nav>
  );
};

export default Practice;
