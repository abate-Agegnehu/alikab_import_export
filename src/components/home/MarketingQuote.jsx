import React from "react";
import { motion } from "framer-motion";

// Animation variants for cleaner code
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
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

const cardVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: (index) => ({
    y: 0,
    opacity: 1,
    transition: {
      delay: index * 0.1,
      type: "spring",
      stiffness: 100,
      damping: 10,
    },
  }),
  hover: {
    y: -10,
    scale: 1.03,
    boxShadow:
      "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 10,
    },
  },
};

const MarketingQuote = () => {
  return (
    <motion.div
      className="bg-white shadow-2xl mx-auto my-12 p-6 sm:p-16 md:p-16 rounded-2xl max-w-4xl text-center"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        type: "spring",
        stiffness: 60,
        damping: 10,
        duration: 0.8,
      }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
    >
      <motion.div
        className="mx-auto max-w-3xl"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h2
          className="mb-6 pt-6 font-bold text-black text-xl sm:text-2xl md:text-4xl leading-snug"
          variants={itemVariants}
          whileHover={{ scale: 1.02 }}
        >
          "Make a customer, not a sale."
        </motion.h2>

        <motion.div
          className="flex md:flex-row flex-col justify-center items-center gap-6 mt-8"
          variants={containerVariants}
        >
          {[
            {
              title: "Global Reach",
              text: "Connecting suppliers to buyers across 50+ countries",
            },
            {
              title: "Custom Solutions",
              text: "Tailored logistics for your unique import/export needs",
            },
            {
              title: "Trusted Partner",
              text: "10+ years of reliable cross-border trade expertise",
            },
          ].map((card, index) => (
            <motion.div
              key={index}
              className="bg-black/10 backdrop-blur-md p-5 rounded-xl w-full md:w-1/3"
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              custom={index}
              whileHover="hover"
            >
              <h3 className="mb-2 font-semibold text-black text-lg">
                {card.title}
              </h3>
              <p className="text-black text-sm">{card.text}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.p
          className="mt-8 text-black text-sm md:text-base italic"
          variants={itemVariants}
          whileHover={{ scale: 1.01 }}
          whileTap={{ scale: 0.98 }}
        >
          — Alikab Import Export: Your Gateway to Global Trade
        </motion.p>
      </motion.div>
    </motion.div>
  );
};

export default MarketingQuote;
