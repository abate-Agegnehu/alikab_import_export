import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import img1 from "../../assets/images/homeImage/auto.png";
import img2 from "../../assets/images/homeImage/transport.png";
import img3 from "../../assets/images/oilseeds.jpg";

const services = [
  {
    title: "Automotives & Machinery",
    description:
      "We import electric, hybrid, agricultural, and construction vehicles to support Ethiopia’s development and sustainable future.",
    image: img1,
    stats: [
      { value: "100+", label: "Vehicles Delivered" },
      { value: "EV", label: "Options Available" },
      { value: "24/7", label: "Support" },
    ],
    color: "from-green-600 to-green-800",
  },
  {
    title: "Agricultural Exports",
    description:
      "We export Ethiopia’s finest agricultural products, including coffee, oilseeds, sesame, and pulses, to markets around the globe.",
    image: img3,
    stats: [
      { value: "50+", label: "Export Destinations" },
      { value: "100%", label: "Organic Certified" },
      { value: "24h", label: "Fulfillment" },
    ],
    color: "from-yellow-600 to-yellow-800",
  },
  {
    title: "Transport & Consultancy",
    description:
      "We provide transport services across Ethiopia and Djibouti, and offer expert consultancy on logistics and vehicle acquisition.",
    image: img2,
    stats: [
      { value: "2", label: "Countries Covered" },
      { value: "99.9%", label: "On-Time Delivery" },
      { value: "20+", label: "Expert Consultants" },
    ],
    color: "from-indigo-600 to-indigo-800",
  },
];

const ServiceCards = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className="relative bg-gradient-to-b from-gray-50 to-white py-20 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="top-20 left-10 absolute bg-[#FA812F]/10 blur-3xl rounded-full w-40 h-40"
        ></motion.div>
        <motion.div
          animate={{
            x: [0, -100, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
          className="right-20 bottom-10 absolute bg-[#212A5E]/10 blur-3xl rounded-full w-60 h-60"
        ></motion.div>
      </div>

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="relative mb-16 px-4 text-center"
      >
        <h2 className="mb-4 font-bold text-[#212A5E] text-4xl md:text-5xl">
          Export <span className="text-[#FA812F]">Acceleration</span> Services
        </h2>
        <div className="bg-[#FA812F] mx-auto mb-6 rounded-full w-24 h-1.5"></div>
        <p className="mx-auto max-w-2xl text-gray-600 text-lg">
          Specialized solutions that transform Ethiopian agricultural products
          into globally competitive exports
        </p>
      </motion.div>

      {/* Enhanced Service Cards */}
      <div className="relative mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="gap-8 grid grid-cols-1 lg:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
              className="group relative h-full"
            >
              {/* Card container with depth effect */}
              <div className="relative h-full">
                {/* Floating image container with parallax effect */}
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  className="z-10 relative shadow-2xl rounded-2xl h-64 overflow-hidden"
                >
                  <motion.img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                    initial={{ scale: 1 }}
                    animate={{
                      scale: hoveredIndex === index ? 1.1 : 1,
                    }}
                    transition={{ duration: 0.5 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                </motion.div>

                {/* Floating content panel with glass morphism effect */}
                <motion.div
                  initial={{ y: 0 }}
                  animate={{
                    y: hoveredIndex === index ? -20 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  className="z-20 relative bg-white/90 shadow-lg backdrop-blur-sm mx-4 -mt-8 p-6 border border-gray-100 rounded-xl"
                >
                  <h3 className="mb-3 font-bold text-[#212A5E] text-xl">
                    {service.title}
                  </h3>
                  <p className="mb-4 text-gray-600">{service.description}</p>

                  {/* Animated stats badges */}
                  <div className="flex flex-wrap gap-2 mb-5">
                    {service.stats.map((stat, i) => (
                      <motion.div
                        key={i}
                        initial={{ scale: 1 }}
                        whileHover={{ scale: 1.05 }}
                        className="bg-[#212A5E]/5 px-3 py-1 rounded-full"
                      >
                        <span className="font-bold text-[#212A5E]">
                          {stat.value}
                        </span>
                        <span className="ml-1 text-gray-500 text-xs">
                          {stat.label}
                        </span>
                      </motion.div>
                    ))}
                  </div>

                  {/* Animated CTA button */}
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-full mt-4 py-2 rounded-lg font-semibold text-white bg-gradient-to-r ${service.color} shadow-md`}
                  >
                    Learn More
                  </motion.button>
                </motion.div>

                {/* Floating decorative elements */}
                <AnimatePresence>
                  {hoveredIndex === index && (
                    <>
                      <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0 }}
                        className="-right-4 -bottom-4 z-0 absolute bg-[#FA812F]/20 rounded-full w-24 h-24"
                      ></motion.div>
                      <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0 }}
                        className="-top-4 -left-4 z-0 absolute bg-[#212A5E]/10 rounded-full w-16 h-16"
                      ></motion.div>
                    </>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceCards;
