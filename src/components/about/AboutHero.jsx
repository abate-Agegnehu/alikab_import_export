import React from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { KeyboardArrowDown } from "@mui/icons-material";

const AboutHero = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const backgroundX = useTransform(mouseX, [0, window.innerWidth], [-30, 30]);
  const backgroundY = useTransform(mouseY, [0, window.innerHeight], [-30, 30]);

  const handleMouseMove = (e) => {
    mouseX.set(e.clientX);
    mouseY.set(e.clientY);
  };

  return (
    <div
      className="relative bg-gradient-to-br from-[#0a0e23] via-[#1a103d] to-[#0a0e23] w-full min-h-screen overflow-hidden text-white"
      onMouseMove={handleMouseMove}
    >
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="top-20 left-10 absolute bg-[#FA812F] blur-3xl rounded-full w-40 h-40 filter"></div>
        <div className="right-20 bottom-10 absolute bg-[#212A5E] blur-3xl rounded-full w-60 h-60 filter"></div>
      </div>

      {/* Animated Gradient Background */}
      <motion.div
        className="absolute inset-0"
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%"],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{
          background: `linear-gradient(45deg, 
            #0a0e23 0%, 
            #1a103d 30%, 
            #212A5E 50%, 
            #1a103d 70%, 
            #0a0e23 100%)`,
          backgroundSize: "300% 300%",
        }}
      />

      {/* Floating 3D Shapes */}
      <motion.div
        className="top-1/4 left-1/4 absolute bg-gradient-to-br from-[#FA812F] to-[#212A5E] opacity-20 blur-3xl rounded-full w-64 h-64"
        animate={{
          x: [-50, 50, -50],
          y: [0, 40, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="top-1/3 right-1/4 absolute bg-gradient-to-tr from-[#212A5E] to-[#FA812F] opacity-15 blur-3xl w-72 h-72"
        style={{
          clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
        }}
        animate={{
          rotate: [0, 360],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Main Content */}
      <div className="z-10 relative flex flex-col justify-center items-center px-6 h-screen text-center">
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <motion.h1
            className="mb-6 font-extrabold text-5xl sm:text-6xl md:text-7xl lg:text-8xl"
            style={{
              background: "linear-gradient(90deg, #ffffff, #FA812F)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              color: "transparent",
              textShadow: "0 0 20px rgba(250, 129, 47, 0.3)",
            }}
          >
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              About
            </motion.span>{" "}
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="bg-clip-text bg-gradient-to-r from-[#FA812F] to-[#212A5E] text-transparent"
            >
              Alikab
            </motion.span>
          </motion.h1>

          <motion.div
            className="-top-8 -left-8 absolute bg-[#FA812F] opacity-20 blur-3xl rounded-full w-48 h-48 mix-blend-overlay"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
            }}
          />
        </motion.div>

        <motion.p
          className="mt-8 max-w-2xl md:max-w-3xl font-medium text-gray-300 text-lg md:text-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          Pioneering global trade solutions with integrity and innovation.
          Alikab specializes in premium vehicle imports, agricultural chemical
          distribution, and the export of Ethiopia's finest coffee and sesame to
          international markets.
        </motion.p>

        <motion.div
          className="flex flex-col items-center mt-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          <motion.button
            className="bg-gradient-to-r from-[#FA812F] to-[#212A5E] shadow-lg hover:shadow-xl mb-8 px-8 py-3 rounded-lg font-semibold text-white transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Discover Our Story
          </motion.button>

          <motion.div
            animate={{
              y: [0, 10, 0],
              opacity: [0.6, 1, 0.6],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
          >
            <KeyboardArrowDown className="text-white text-4xl" />
          </motion.div>
        </motion.div>
      </div>

      {/* Interactive Light Effect */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(circle at ${mouseX}px ${mouseY}px, rgba(250, 129, 47, 0.1) 0%, transparent 70%)`,
        }}
      />

      {/* Animated Grid Lines */}
      <motion.div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          x: backgroundX,
          y: backgroundY,
          backgroundSize: "60px 60px",
          backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,0.3) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.3) 1px, transparent 1px)
          `,
        }}
      />
    </div>
  );
};

export default AboutHero;
