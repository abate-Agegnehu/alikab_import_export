import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Vehicle images
const vehicles = [
  {
    src: suv1,
    category: "SUV",
    title: "Premium SUV Series",
    description:
      "Luxury SUVs with advanced safety features and superior comfort",
    stats: [
      { value: "5★", label: "Safety" },
      { value: "4WD", label: "Drive" },
      { value: "2023", label: "Model" },
    ],
  },
  {
    src: suv2,
    category: "SUV",
    title: "Urban Explorer",
    description:
      "Compact SUV perfect for city driving with excellent fuel efficiency",
    stats: [
      { value: "40mpg", label: "Economy" },
      { value: "Turbo", label: "Engine" },
      { value: "7", label: "Seats" },
    ],
  },
  // Add similar objects for all vehicles...
];

const CarckoMain = () => {
  const [selectedCategory, setSelectedCategory] = useState("Allcars");
  const [hoveredCard, setHoveredCard] = useState(null);

  const filteredVehicles =
    selectedCategory === "Allcars"
      ? vehicles
      : vehicles.filter((item) => item.category === selectedCategory);

  return (
    <div className="relative bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="top-20 left-10 absolute bg-[#FA812F] blur-3xl rounded-full w-40 h-40 filter"></div>
        <div className="right-20 bottom-10 absolute bg-[#212A5E] blur-3xl rounded-full w-60 h-60 filter"></div>
      </div>

      {/* Hero Section */}
      <section className="relative flex md:flex-row flex-col items-center gap-12 mx-auto px-4 sm:px-6 lg:px-8 py-20 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="md:w-1/2"
        >
          <h1 className="mb-4 font-bold text-[#212A5E] text-4xl md:text-5xl">
            Alikab <span className="text-[#FA812F]">Vehicles</span>
          </h1>
          <div className="bg-[#FA812F] mb-6 rounded-full w-24 h-1.5"></div>
          <p className="mb-8 text-gray-600 text-lg">
            In partnership with JAC Motors—a leading Chinese automobile
            manufacturer—we bring a diverse lineup including sedans, SUVs, MPVs,
            trucks, vans, and pickups.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-[#212A5E] to-[#FA812F] shadow-lg hover:shadow-xl px-8 py-3 rounded-lg font-semibold text-white transition-all"
          >
            Explore Inventory
          </motion.button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="relative md:w-1/2"
        >
          <div className="relative shadow-2xl rounded-2xl w-full aspect-square overflow-hidden">
            <img
              src={cargo}
              alt="Featured Vehicle"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
          </div>
          <div className="-right-6 -bottom-6 z-0 absolute bg-[#FA812F]/10 rounded-full w-32 h-32"></div>
        </motion.div>
      </section>

      {/* Vehicle Categories */}
      <section className="bg-white py-12">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex justify-center space-x-4 mb-12"
          >
            {["Allcars", "SUV", "Cargo"].map((cat) => (
              <motion.button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-2 rounded-full font-medium transition-colors ${
                  selectedCategory === cat
                    ? "bg-[#212A5E] text-white shadow-md"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {cat}
              </motion.button>
            ))}
          </motion.div>

          {/* Vehicle Grid */}
          <motion.div
            layout
            className="gap-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
          >
            <AnimatePresence>
              {filteredVehicles.map((vehicle, index) => (
                <motion.div
                  key={`${vehicle.category}-${index}`}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  whileHover={{ y: -10 }}
                  onMouseEnter={() => setHoveredCard(index)}
                  onMouseLeave={() => setHoveredCard(null)}
                  className="group relative"
                >
                  {/* Image Container */}
                  <div className="relative shadow-lg rounded-xl h-64 overflow-hidden">
                    <img
                      src={vehicle.src}
                      alt={vehicle.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  </div>

                  {/* Info Panel */}
                  <div className="z-10 relative bg-white shadow-md mx-4 -mt-8 p-6 border border-gray-100 rounded-lg">
                    <h3 className="mb-2 font-bold text-[#212A5E] text-xl">
                      {vehicle.title}
                    </h3>
                    <p className="mb-4 text-gray-600">{vehicle.description}</p>

                    {/* Stats */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {vehicle.stats.map((stat, i) => (
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

                    {/* Animated Button */}
                    <motion.div
                      animate={{
                        opacity: hoveredCard === index ? 1 : 0,
                        y: hoveredCard === index ? 0 : 10,
                      }}
                    >
                      <button className="flex items-center font-medium text-[#FA812F]">
                        <span>View Details</span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1 duration-300"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </button>
                    </motion.div>
                  </div>

                  {/* Decorative Accent */}
                  <div className="-right-4 -bottom-4 z-0 absolute bg-[#FA812F]/10 rounded-full w-24 h-24"></div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Proven Track Record */}
      <section className="relative bg-gradient-to-r from-[#212A5E] to-[#1a103d] py-20 text-white">
        <div className="flex md:flex-row flex-col items-center gap-12 mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="md:w-1/2"
          >
            <h2 className="mb-4 font-bold text-3xl md:text-4xl">
              Proven Track Record
            </h2>
            <div className="bg-[#FA812F] mb-6 rounded-full w-24 h-1.5"></div>
            <p className="mb-8 text-lg">
              With years of industry experience, Alikab has consistently
              delivered reliable vehicles and unmatched service across electric,
              hybrid, and commercial segments.
            </p>
            <div className="gap-4 grid grid-cols-2">
              {[
                { value: "100+", label: "Vehicles Delivered" },
                { value: "25+", label: "Commercial Clients" },
                { value: "4.9★", label: "Customer Rating" },
                { value: "24/7", label: "Support" },
              ].map((stat, i) => (
                <div
                  key={i}
                  className="bg-white/10 backdrop-blur-sm p-4 rounded-lg"
                >
                  <p className="font-bold text-[#FA812F] text-2xl">
                    {stat.value}
                  </p>
                  <p className="text-sm">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative md:w-1/2"
          >
            <div className="relative shadow-2xl rounded-2xl w-full aspect-video overflow-hidden">
              <img
                src={suv1}
                alt="Proven Track Record"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#212A5E]/80 to-transparent"></div>
            </div>
            <div className="-bottom-6 -left-6 z-0 absolute bg-[#FA812F]/10 rounded-full w-32 h-32"></div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default CarckoMain;
