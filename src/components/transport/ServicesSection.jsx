import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiArrowRight,
  FiCheckCircle,
  FiGlobe,
  FiTruck,
  FiAnchor,
  FiPackage,
  FiBarChart2,
  FiMapPin,
  FiClock,
  FiHeadphones,
} from "react-icons/fi";

const ServicesSection = () => {
  const [hoveredService, setHoveredService] = useState(null);
  const [activeFeature, setActiveFeature] = useState(0);

  const services = [
    {
      id: 1,
      title: "Global Shipping",
      description: "End-to-end ocean freight solutions with real-time tracking",
      icon: <FiAnchor className="text-3xl" />,
      stats: "98.7% on-time delivery",
      color: "from-blue-500 to-blue-600",
    },
    {
      id: 2,
      title: "Air Cargo",
      description: "Express air freight for time-sensitive shipments worldwide",
      icon: <FiGlobe className="text-3xl" />,
      stats: "24-48 hour delivery",
      color: "from-purple-500 to-purple-600",
    },
    {
      id: 3,
      title: "Land Transport",
      description:
        "Reliable road logistics with temperature-controlled options",
      icon: <FiTruck className="text-3xl" />,
      stats: "10,000+ vehicles",
      color: "from-emerald-500 to-emerald-600",
    },
    {
      id: 4,
      title: "Warehousing",
      description: "Secure storage solutions with inventory management",
      icon: <FiPackage className="text-3xl" />,
      stats: "5M+ sq. ft. space",
      color: "from-amber-500 to-amber-600",
    },
  ];

  const features = [
    {
      title: "Real-time Analytics",
      description:
        "Advanced dashboard with shipment analytics and predictive insights",
      icon: <FiBarChart2 className="text-2xl" />,
    },
    {
      title: "Global Coverage",
      description: "Seamless logistics network spanning 200+ countries",
      icon: <FiMapPin className="text-2xl" />,
    },
    {
      title: "Fast Delivery",
      description: "Guanteed time windows with our premium services",
      icon: <FiClock className="text-2xl" />,
    },
    {
      title: "Dedicated Support",
      description: "24/7 customer service with dedicated account managers",
      icon: <FiHeadphones className="text-2xl" />,
    },
  ];

  return (
    <div className="relative bg-white w-full min-h-screen overflow-hidden text-gray-900">
      {/* Decorative grid pattern */}
      <div className="absolute inset-0 opacity-5 [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_80%)]">
        <div className="absolute inset-0 bg-grid-gray-900/[0.04]"></div>
      </div>

      {/* Floating gradient circles */}
      <div className="absolute inset-0 opacity-15 overflow-hidden">
        <div className="-top-20 -right-20 absolute bg-blue-400/20 blur-3xl rounded-full w-96 h-96"></div>
        <div className="-bottom-20 -left-20 absolute bg-purple-400/20 blur-3xl rounded-full w-96 h-96"></div>
      </div>

      <div className="relative mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-blue-600 text-sm uppercase tracking-widest">
            Enterprise Solutions
          </h2>
          <h1 className="font-bold text-gray-900 text-4xl md:text-5xl">
            Next-Generation
            <span className="inline-block relative ml-3">
              Logistics
              <svg
                className="-bottom-2 left-0 absolute w-full h-2 text-blue-500"
                viewBox="0 0 200 20"
              >
                <motion.path
                  d="M0 10 Q 50 20 100 10 T 200 10"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  transition={{ duration: 1.5, delay: 0.5 }}
                />
              </svg>
            </span>
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-gray-600 text-lg">
            Our intelligent logistics platform combines cutting-edge technology
            with global infrastructure to deliver unparalleled supply chain
            performance.
          </p>
        </motion.div>

        <div className="gap-12 grid grid-cols-1 lg:grid-cols-2">
          {/* Services cards */}
          <div className="space-y-6">
            {services.map((service) => (
              <motion.div
                key={service.id}
                whileHover={{ y: -5 }}
                onHoverStart={() => setHoveredService(service.id)}
                onHoverEnd={() => setHoveredService(null)}
                className={`relative overflow-hidden bg-white rounded-xl p-6 border border-gray-200 shadow-sm hover:shadow-md cursor-pointer transition-all duration-300 group`}
              >
                <div className="flex items-start gap-5">
                  <div
                    className={`p-3 rounded-lg bg-gradient-to-br ${service.color} flex-shrink-0 shadow-sm group-hover:shadow-md transition-shadow`}
                  >
                    {service.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 text-xl">
                      {service.title}
                    </h3>
                    <p className="mt-2 text-gray-600">{service.description}</p>
                    <div className="flex items-center gap-2 mt-4 text-blue-600 text-sm">
                      <FiCheckCircle />
                      <span>{service.stats}</span>
                    </div>
                  </div>
                </div>
                <AnimatePresence>
                  {hoveredService === service.id && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="absolute inset-0 bg-gradient-to-br from-white to-gray-50/50 border border-blue-100 rounded-xl"
                    />
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>

          {/* Features panel */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white shadow-sm p-1 border border-gray-200 rounded-xl h-full"
          >
            <div className="p-7">
              <h3 className="mb-6 font-semibold text-gray-900 text-2xl">
                Core Features
              </h3>

              <div className="flex gap-4 -mx-2 mb-8 px-2 pb-2 overflow-x-auto">
                {features.map((feature, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveFeature(index)}
                    className={`px-4 py-2 rounded-lg whitespace-nowrap transition-colors ${
                      activeFeature === index
                        ? "bg-blue-50 text-blue-600 border border-blue-200"
                        : "text-gray-600 hover:bg-gray-50"
                    }`}
                  >
                    {feature.title}
                  </button>
                ))}
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeFeature}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="mb-8"
                >
                  <div className="flex items-start gap-4">
                    <div className="bg-blue-100 p-3 rounded-lg text-blue-600">
                      {features[activeFeature].icon}
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 text-lg">
                        {features[activeFeature].title}
                      </h4>
                      <p className="mt-2 text-gray-600">
                        {features[activeFeature].description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              <div className="space-y-6 mt-12">
                <div>
                  <h4 className="mb-3 text-gray-500 text-sm uppercase tracking-wider">
                    Industry Recognition
                  </h4>
                  <div className="flex flex-wrap gap-3">
                    {[
                      "Gartner Leader",
                      "Forbes Top 100",
                      "Supply Chain Excellence",
                      "Innovation Award",
                    ].map((item) => (
                      <div
                        key={item}
                        className="bg-gray-50 px-3 py-1.5 border border-gray-200 rounded-lg text-gray-700 text-sm"
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                </div>

                <motion.div whileHover={{ scale: 1.01 }} className="group mt-8">
                  <div className="bg-gradient-to-r from-blue-600 to-blue-700 shadow-lg p-6 rounded-xl">
                    <h4 className="mb-2 font-bold text-white text-lg">
                      Ready to transform your logistics?
                    </h4>
                    <p className="mb-4 text-blue-100 text-sm">
                      Speak with our experts for a customized solution
                    </p>
                    <button className="flex items-center gap-2 group-hover:gap-3 bg-white hover:bg-blue-50 px-5 py-2.5 rounded-lg font-medium text-blue-800 text-sm transition-all duration-300">
                      Contact Our Team
                      <FiArrowRight className="transition-transform group-hover:translate-x-1 duration-300" />
                    </button>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Stats section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="gap-6 grid grid-cols-2 md:grid-cols-4 mt-20"
        >
          {[
            {
              value: "200+",
              label: "Countries Served",
              icon: <FiGlobe className="text-blue-600" />,
            },
            {
              value: "10M+",
              label: "Annual Shipments",
              icon: <FiPackage className="text-blue-600" />,
            },
            {
              value: "99%",
              label: "On-Time Rate",
              icon: <FiClock className="text-blue-600" />,
            },
            {
              value: "24/7",
              label: "Global Support",
              icon: <FiHeadphones className="text-blue-600" />,
            },
          ].map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5 }}
              className="bg-white shadow-sm hover:shadow-md p-6 border border-gray-200 rounded-xl text-center transition-shadow"
            >
              <div className="flex justify-center mb-3 text-2xl">
                {stat.icon}
              </div>
              <div className="font-bold text-gray-900 text-3xl md:text-4xl">
                {stat.value}
              </div>
              <div className="mt-2 text-gray-600 text-sm uppercase tracking-wider">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default ServicesSection;
