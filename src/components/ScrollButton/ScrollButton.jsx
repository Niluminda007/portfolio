import React from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";

export const ScrollButton = () => {
  const handleClick = () => {};
  return (
    <div className="absolute xs:-bottom-[10rem] -bottom-20 w-full flex justify-center items-center ">
      <a href="#about-tech">
        <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
          <motion.div
            animate={{
              y: [0, 24, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "loop",
            }}
            className="w-3 h-3 rounded-full bg-secondary mb-1"
          />
        </div>
      </a>
    </div>
  );
};
