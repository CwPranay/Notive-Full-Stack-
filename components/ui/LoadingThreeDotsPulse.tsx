"use client";

import { motion, Variants } from "framer-motion"; // Corrected: use "framer-motion" not "motion/react"
import React from "react";

const LoadingThreeDotsPulse: React.FC = () => {
  const dotVariants: Variants = {
    pulse: {
      scale: [0.5, 1, 0.5],
      transition: {
        duration: 1.2,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <motion.div
      animate="pulse"
      transition={{ staggerChildren: -0.2, staggerDirection: -1 }}
      className="container"
    >
      <motion.div className="dot " variants={dotVariants} />
      <motion.div className="dot" variants={dotVariants} />
      <motion.div className="dot" variants={dotVariants} />
      <StyleSheet />
    </motion.div>
  );
};

const StyleSheet: React.FC = () => {
  return (
    <style>
      {`
        .container {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 20px;
        }

        .dot {
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background-color: #4a5568; 
          
          will-change: transform;
        }
      `}
    </style>
  );
};

export default LoadingThreeDotsPulse;
