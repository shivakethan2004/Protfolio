import React, { Children, useState } from "react";
import { easeIn, easeInOut, easeOut, motion } from "framer-motion";
const NavBarContentBig = ({ Children }) => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const String = { Children };
  const easing = [1, 0.5, 0.1, 0.6];
  return (
    <div className="flex overflow-hidden h-[50px]">
      {React.Children.toArray(Children).map((value, index) => (
        <motion.div
          initial={{
            y: 0,
          }}
          whileHover={{
            y: [0, -49],
          }}
          transition={{
            duration: 0.4,
            ease: easing
          }}
          key={index}
          className="flex flex-col"
        >
         <li>{value}</li> 
          <li>{value}</li>
        </motion.div>
      ))}
    </div>
  );
};

export default NavBarContentBig;
