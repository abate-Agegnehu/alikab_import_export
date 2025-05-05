import React from "react";
import { motion } from "framer-motion";

const MarketingQuote = () => {
  return (
    <motion.div
      className="bg-[#212A5E] shadow-2xl mx-auto my-12 p-6 sm:p-16 md:p-16 rounded-2xl max-w-4xl text-center"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="mx-auto max-w-3xl">
        <motion.h2
          className="mb-6 pt-6 font-bold text-white text-xl sm:text-2xl md:text-4xl leading-snug"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
        >
          “Make a customer, not a sale.”
        </motion.h2>

        <motion.div
          className="flex md:flex-row flex-col justify-center items-center gap-6 mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 1 }}
        >
          <div className="bg-white/10 backdrop-blur-md p-5 rounded-xl w-full md:w-1/3">
            <h3 className="mb-2 font-semibold text-white text-lg">
              Global Reach
            </h3>
            <p className="text-gray-200 text-sm">
              Connecting suppliers to buyers across 50+ countries
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-md p-5 rounded-xl w-full md:w-1/3">
            <h3 className="mb-2 font-semibold text-white text-lg">
              Custom Solutions
            </h3>
            <p className="text-gray-200 text-sm">
              Tailored logistics for your unique import/export needs
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-md p-5 rounded-xl w-full md:w-1/3">
            <h3 className="mb-2 font-semibold text-white text-lg">
              Trusted Partner
            </h3>
            <p className="text-gray-200 text-sm">
              10+ years of reliable cross-border trade expertise
            </p>
          </div>
        </motion.div>

        <motion.p
          className="mt-8 text-gray-300 text-sm md:text-base italic"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 1 }}
        >
          — Alikab Import Export: Your Gateway to Global Trade
        </motion.p>
      </div>
    </motion.div>
  );
};

export default MarketingQuote;
