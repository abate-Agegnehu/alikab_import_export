import React from "react";
import { motion } from "framer-motion";
import machinePhoto from "../../assets/images/machinePhoto.png";

const HeroSection = ({ onExplore, onContact }) => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        when: "beforeChildren",
      },
    },
  };

  const textVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  };

  const buttonVariants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 15,
      },
    },
    hover: {
      scale: 1.05,
      transition: { duration: 0.2 },
    },
    tap: {
      scale: 0.98,
    },
  };

  return (
    <div className="relative h-screen max-h-[800px] overflow-hidden">
      {/* Background Image with Parallax Effect */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: `url(${machinePhoto})`,
          backgroundAttachment: "fixed",
        }}
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
      >
        <motion.div
          className="absolute inset-0 bg-black bg-opacity-40"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4 }}
          transition={{ duration: 1.5 }}
        />
      </motion.div>

      {/* Content */}
      <motion.div
        className="relative flex items-center h-full"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div className="mx-auto px-4 text-center container">
          {/* Title */}
          <motion.h1
            className="mb-6 font-bold text-white text-5xl md:text-7xl leading-tight"
            variants={textVariants}
          >
            Industrial{" "}
            <motion.span
              className="text-blue-400"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
            >
              Machinery
            </motion.span>{" "}
            & Equipment
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="mx-auto mb-10 max-w-3xl text-blue-100 text-xl md:text-2xl"
            variants={textVariants}
          >
            Premium heavy equipment for construction, agriculture, and mining
            industries
          </motion.p>

          {/* Buttons */}
          <motion.div
            className="flex sm:flex-row flex-col justify-center gap-4"
            variants={containerVariants}
          >
            <motion.button
              onClick={onExplore}
              className="bg-blue-600 hover:bg-blue-700 shadow-lg hover:shadow-xl px-10 py-4 rounded-lg font-medium text-white text-lg"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              Explore Equipment
            </motion.button>
            <motion.button
              onClick={onContact}
              className="hover:bg-white px-10 py-4 border-2 border-white rounded-lg font-medium text-white hover:text-blue-800 text-lg"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              transition={{ delay: 0.1 }}
            >
              Contact Our Team
            </motion.button>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default HeroSection;
