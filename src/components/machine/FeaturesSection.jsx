import React from "react";
import { motion } from "framer-motion";
import { features } from "./data";

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      when: "beforeChildren",
    },
  },
};

const itemVariants = {
  hidden: { y: 50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10,
      duration: 0.5,
    },
  },
  hover: {
    y: -10,
    scale: 1.03,
    transition: { duration: 0.3 },
  },
};

const iconVariants = {
  hidden: { scale: 0 },
  visible: {
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 150,
      damping: 10,
    },
  },
};

const FeatureCard = ({ title, description, icon }) => (
  <motion.div
    variants={itemVariants}
    whileHover="hover"
    className="bg-white shadow-md hover:shadow-xl p-8 rounded-xl"
  >
    <motion.div variants={iconVariants} className="mb-4 text-blue-600">
      <svg
        className="w-10 h-10"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d={icon}
        ></path>
      </svg>
    </motion.div>
    <motion.h3
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.2 }}
      className="mb-3 font-bold text-gray-800 text-xl"
    >
      {title}
    </motion.h3>
    <motion.p
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3 }}
      className="text-gray-600"
    >
      {description}
    </motion.p>
  </motion.div>
);

const FeaturesSection = () => {
  return (
    <div className="bg-gray-100 py-24 overflow-hidden">
      <div className="mx-auto px-4 container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 font-bold text-gray-900 text-4xl">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-blue-600"
            >
              Why Choose
            </motion.span>{" "}
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              Our Equipment
            </motion.span>
          </h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="bg-gradient-to-r from-blue-400 to-blue-600 mx-auto mb-6 w-24 h-1"
            style={{ originX: 0 }}
          />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="gap-8 grid grid-cols-1 md:grid-cols-3"
        >
          {features.map((feature) => (
            <FeatureCard key={feature.id} {...feature} />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default FeaturesSection;
