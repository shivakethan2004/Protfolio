import React, { Children, useState } from "react";
import { easeIn, easeInOut, easeOut, motion } from "framer-motion";
const NavBarContent = ({ Children }) => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const String = { Children };
  return (
    <div className="flex overflow-hidden h-[20px]">
      {React.Children.toArray(Children).map((value, index) => (
        <motion.div
          initial={{
            y: 0,
          }}
          whileHover={{
            y: [0, -25],
          }}
          transition={{
            duration: 0.4,
            ease: easeIn
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

export default NavBarContent;
