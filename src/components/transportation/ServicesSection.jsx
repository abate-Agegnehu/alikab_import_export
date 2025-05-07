import React, { useState } from "react";
import { motion } from "framer-motion";
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
import { useNavigate } from "react-router-dom";

const ServicesSection = () => {
  const [activeFeature, setActiveFeature] = useState(0);
  const navigate = useNavigate();
  const services = [
    {
      id: 1,
      title: "Land Transportation in Ethiopia",
      description:
        "Efficient and reliable road logistics for domestic deliveries across Ethiopia.",
      icon: <FiTruck className="text-3xl" />,
      stats: "99.7% on-time delivery in Ethiopia",
      color: "from-emerald-500 to-emerald-600",
    },
    {
      id: 2,
      title: "East Africa Land Transport",
      description:
        "Seamless road transport connecting Ethiopia to neighboring East African countries.",
      icon: <FiGlobe className="text-3xl" />,
      stats: "Connecting 5+ East African countries",
      color: "from-purple-500 to-purple-600",
    },
    {
      id: 3,
      title: "Border & Customs Logistics",
      description:
        "Expert handling of border customs for smooth cross-border transportation in East Africa.",
      icon: <FiAnchor className="text-3xl" />,
      stats: "Efficient cross-border clearance",
      color: "from-blue-500 to-blue-600",
    },
    {
      id: 4,
      title: "Warehousing & Distribution",
      description:
        "State-of-the-art storage facilities and inventory management in Ethiopia and East Africa.",
      icon: <FiPackage className="text-3xl" />,
      stats: "5M+ sq. ft. warehousing space across the region",
      color: "from-amber-500 to-amber-600",
    },
  ];

  const features = [
    {
      title: "Local Transportation Insights",
      description:
        "In-depth analysis of delivery patterns and shipment efficiency within Ethiopia and East Africa.",
      icon: <FiBarChart2 className="text-2xl" />,
    },
    {
      title: "East Africa Network",
      description:
        "Comprehensive land transport network connecting Ethiopia with key East African countries.",
      icon: <FiMapPin className="text-2xl" />,
    },
    {
      title: "On-Time Delivery Guarantee",
      description:
        "Reliable and punctual deliveries within agreed time windows in Ethiopia and East Africa.",
      icon: <FiClock className="text-2xl" />,
    },
    {
      title: "24/7 Support",
      description:
        "Round-the-clock customer support with dedicated managers to assist with logistics in the region.",
      icon: <FiHeadphones className="text-2xl" />,
    },
  ];

  return (
    <div className="relative bg-white w-full min-h-screen overflow-hidden text-gray-900">
      {/* Background visuals */}
      <div className="absolute inset-0 opacity-5 [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_80%)]">
        <div className="absolute inset-0 bg-grid-gray-900/[0.04]"></div>
      </div>
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
            Next-Generation{" "}
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
            Our intelligent logistics platform harnesses advanced technology and
            a robust regional network to deliver reliable land transportation
            across Ethiopia and East Africa, ensuring efficient and dependable
            supply chain solutions for businesses throughout the continent.
          </p>
        </motion.div>

        <div className="gap-12 grid grid-cols-1 lg:grid-cols-2">
          {/* Services Cards */}
          <div className="space-y-6">
            {services.map((service) => (
              <motion.div
                key={service.id}
                whileHover={{ y: -5 }}
                className="group relative bg-white shadow-sm hover:shadow-md p-6 border border-gray-200 rounded-xl overflow-hidden transition-all duration-300 cursor-pointer"
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
              </motion.div>
            ))}
          </div>

          {/* Features Panel */}
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
                    <button
                      className="flex items-center gap-2 group-hover:gap-3 bg-white hover:bg-blue-50 px-5 py-2.5 rounded-lg font-medium text-blue-800 text-sm transition-all duration-300"
                      onClick={() => navigate("/contact")}
                    >
                      Contact Our Team
                      <FiArrowRight className="transition-transform group-hover:translate-x-1 duration-300" />
                    </button>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Stats Section */}
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
