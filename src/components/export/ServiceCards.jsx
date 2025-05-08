import React from "react";
import { motion } from "framer-motion";
import compeliance from "../../assets/images/compeliance.jpg";
import logistic from "../../assets/images/logistic.jpg";
import postharvesting from "../../assets/images/postharvesting.jpg";

const services = [
  {
    title: "Post-Harvest Excellence",
    description:
      "Premium cleaning, grading & packaging solutions that enhance product value and extend shelf life for international markets.",
    image: logistic,
    stats: [
      { value: "99.7%", label: "Quality Retention" },
      { value: "ISO", label: "Certified" },
      { value: "48h", label: "Processing" },
    ],
  },
  {
    title: "Global Logistics Network",
    description:
      "Temperature-controlled supply chain with real-time tracking from farm to destination port worldwide.",
    image: postharvesting,
    stats: [
      { value: "25+", label: "Countries" },
      { value: "-18°C", label: "Cold Chain" },
      { value: "24/7", label: "Monitoring" },
    ],
  },
  {
    title: "Compliance Mastery",
    description:
      "End-to-end certification management for GLOBALG.A.P., organic, and destination market requirements.",
    image: compeliance,
    stats: [
      { value: "100%", label: "Compliance" },
      { value: "50+", label: "Standards" },
      { value: "1wk", label: "Turnaround" },
    ],
  },
];

const ServiceCards = () => {
  return (
    <div className="relative bg-gradient-to-b from-gray-50 to-white py-20 overflow-hidden">
      {/* Decorative elements */}
      <div className="top-0 left-0 absolute opacity-10 w-full h-full">
        <div className="top-20 left-10 absolute bg-[#FA812F] blur-3xl rounded-full w-40 h-40 filter"></div>
        <div className="right-20 bottom-10 absolute bg-[#212A5E] blur-3xl rounded-full w-60 h-60 filter"></div>
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

      {/* Innovative Service Display */}
      <div className="relative mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="gap-12 grid grid-cols-1 lg:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group relative"
            >
              {/* Floating image container */}
              <div className="z-10 relative shadow-xl rounded-2xl h-64 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              </div>

              {/* Floating content panel */}
              <div className="z-20 relative bg-white shadow-lg mx-4 -mt-8 p-6 border border-gray-100 rounded-xl">
                <h3 className="mb-3 font-bold text-[#212A5E] text-xl">
                  {service.title}
                </h3>
                <p className="mb-4 text-gray-600">{service.description}</p>

                {/* Stats badges */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {service.stats.map((stat, i) => (
                    <div
                      key={i}
                      className="bg-[#212A5E]/5 px-3 py-1 rounded-full"
                    >
                      <span className="font-bold text-[#212A5E]">
                        {stat.value}
                      </span>
                      <span className="ml-1 text-gray-500 text-xs">
                        {stat.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Decorative accent */}
              <div className="-right-4 -bottom-4 z-0 absolute bg-[#FA812F]/10 rounded-full w-24 h-24"></div>
            </motion.div>
          ))}
        </div>

        {/* Alternative View CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        ></motion.div>
      </div>
    </div>
  );
};

export default ServiceCards;
