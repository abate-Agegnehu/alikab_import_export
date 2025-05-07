import React from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { KeyboardArrowDown } from "@mui/icons-material";

const AboutHero = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const backgroundX = useTransform(mouseX, [0, window.innerWidth], [-50, 50]);
  const backgroundY = useTransform(mouseY, [0, window.innerHeight], [-50, 50]);

  const handleMouseMove = (e) => {
    mouseX.set(e.clientX);
    mouseY.set(e.clientY);
  };

  return (
    <div
      className="relative bg-gradient-to-br from-[#0a0e23] to-[#1a103d] w-full h-screen overflow-hidden text-white"
      onMouseMove={handleMouseMove}
    >
      {/* Animated Grid Background */}
      <motion.div
        className="absolute inset-0 bg-grid-pattern opacity-20"
        style={{
          x: backgroundX,
          y: backgroundY,
          backgroundSize: "60px 60px",
          backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,0.3) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.3) 1px, transparent 1px)
          `,
        }}
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%"],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Floating 3D Shapes */}
      <motion.div
        className="top-1/4 left-1/4 absolute bg-gradient-to-br from-purple-500 to-blue-600 opacity-40 blur-xl rounded-full w-32 h-32"
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
        className="top-1/3 right-1/4 absolute bg-gradient-to-tr from-cyan-400 to-blue-500 opacity-30 blur-xl w-40 h-40"
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

      <motion.div
        className="right-1/3 bottom-1/4 absolute bg-gradient-to-br from-pink-500 to-purple-600 opacity-20 blur-xl w-48 h-48"
        style={{
          borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70%",
        }}
        animate={{
          borderRadius: [
            "30% 70% 70% 30% / 30% 30% 70% 70%",
            "60% 40% 30% 70% / 60% 30% 70% 40%",
            "30% 70% 70% 30% / 30% 30% 70% 70%",
          ],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Dynamic Particles */}
      {[...Array(50)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute bg-white rounded-full"
          style={{
            width: `${Math.random() * 4 + 1}px`,
            height: `${Math.random() * 4 + 1}px`,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            opacity: Math.random() * 0.5,
          }}
          animate={{
            y: [0, -Math.random() * 200],
            x: [0, (Math.random() - 0.5) * 100],
            opacity: [0, Math.random() * 0.5, 0],
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            delay: Math.random() * 5,
            repeat: Infinity,
            repeatType: "loop",
          }}
        />
      ))}

      {/* Main Content */}
      <div className="z-10 relative flex flex-col justify-center items-center px-6 h-full text-center">
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <motion.h1
            className="mb-6 font-extrabold text-5xl md:text-8xl"
            style={{
              background: "linear-gradient(90deg, #ffffff, #a5b4fc)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              color: "transparent",
              textShadow: "0 0 20px rgba(165, 180, 252, 0.3)",
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
              className="bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent"
            >
              Us
            </motion.span>
          </motion.h1>

          <motion.div
            className="-top-8 -left-8 absolute bg-blue-500 opacity-20 blur-xl rounded-full w-32 h-32 mix-blend-overlay"
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
          className="mt-8 max-w-2xl font-medium text-blue-100 text-lg md:text-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          We're redefining what's possible through innovation, passion, and a
          commitment to excellence. Our story is one of relentless curiosity and
          boundary-pushing creativity.
        </motion.p>

        <motion.div
          className="mt-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
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
          background: `radial-gradient(circle at ${mouseX}px ${mouseY}px, rgba(100, 115, 255, 0.1) 0%, transparent 70%)`,
        }}
      />
    </div>
  );
};

export default AboutHero;
