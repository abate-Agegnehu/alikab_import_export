import React from "react";
import { motion } from "framer-motion";

const MarketingQuote = () => {
  return (
    <div className="relative bg-gradient-to-br from-[#f8f9fa] to-[#e9ecef] py-24 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-20 overflow-hidden">
        <div className="top-1/4 left-10 absolute bg-[#212A5E] blur-[100px] rounded-full w-80 h-80 filter"></div>
        <div className="right-20 bottom-1/3 absolute bg-[#FA812F] blur-[120px] rounded-full w-96 h-96 filter"></div>
      </div>

      <motion.div
        className="relative mx-auto px-6 max-w-7xl"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        {/* Main quote card */}
        <motion.div
          className="relative bg-white/90 shadow-2xl backdrop-blur-lg p-8 sm:p-12 md:p-16 border border-white/20 rounded-3xl overflow-hidden"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 60,
            damping: 10,
            duration: 0.8,
          }}
        >
          {/* Decorative accent */}
          <div className="top-0 right-0 absolute bg-[#FA812F]/10 rounded-full w-32 h-32 -translate-y-16 translate-x-16 transform"></div>
          <div className="bottom-0 left-0 absolute bg-[#212A5E]/10 rounded-full w-40 h-40 -translate-x-20 translate-y-20 transform"></div>

          <motion.div
            className="mx-auto max-w-4xl"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.2,
                },
              },
            }}
          >
            <motion.div
              className="inline-block relative"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    type: "spring",
                    stiffness: 100,
                    damping: 10,
                  },
                },
              }}
            >
              <svg
                className="-top-8 -left-10 absolute w-16 h-16 text-[#FA812F]/20"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z" />
              </svg>
              <motion.h2
                className="bg-clip-text bg-gradient-to-r from-[#212A5E] to-[#FA812F] mb-8 font-bold text-transparent text-3xl sm:text-4xl md:text-5xl leading-tight"
                whileHover={{ scale: 1.02 }}
              >
                "Make a connection, not just a transaction"
              </motion.h2>
            </motion.div>

            {/* Feature cards */}
            <motion.div
              className="gap-6 grid grid-cols-1 md:grid-cols-3 mt-12"
              variants={{
                hidden: {},
                visible: {
                  transition: {
                    staggerChildren: 0.1,
                  },
                },
              }}
            >
              {[
                {
                  title: "Global Network",
                  text: "Connecting suppliers to buyers across 50+ countries",
                  icon: (
                    <svg
                      className="w-8 h-8 text-[#FA812F]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  ),
                },
                {
                  title: "Tailored Solutions",
                  text: "Custom logistics for your unique import/export needs",
                  icon: (
                    <svg
                      className="w-8 h-8 text-[#212A5E]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                      />
                    </svg>
                  ),
                },
                {
                  title: "Trusted Expertise",
                  text: "10+ years of reliable cross-border trade experience",
                  icon: (
                    <svg
                      className="w-8 h-8 text-[#FA812F]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                      />
                    </svg>
                  ),
                },
              ].map((card, index) => (
                <motion.div
                  key={index}
                  className="bg-white shadow-lg hover:shadow-xl p-6 border border-gray-100 rounded-xl transition-shadow"
                  variants={{
                    hidden: { opacity: 0, y: 30 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: {
                        type: "spring",
                        stiffness: 100,
                        damping: 10,
                      },
                    },
                  }}
                  whileHover={{
                    y: -8,
                    transition: {
                      type: "spring",
                      stiffness: 300,
                      damping: 10,
                    },
                  }}
                >
                  <div className="flex items-center mb-4">
                    {card.icon}
                    <h3 className="ml-3 font-bold text-[#212A5E] text-xl">
                      {card.title}
                    </h3>
                  </div>
                  <p className="text-gray-600">{card.text}</p>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              className="mt-16 text-center"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    delay: 0.4,
                  },
                },
              }}
            >
              <p className="mb-2 text-gray-500 text-sm uppercase tracking-wider">
                Our Promise
              </p>
              <motion.p
                className="font-medium text-[#212A5E] text-xl"
                whileHover={{ scale: 1.01 }}
              >
                "Alikab Import Export: Building bridges in global trade"
              </motion.p>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default MarketingQuote;
