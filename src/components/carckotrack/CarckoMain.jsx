import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import suv1 from "../../assets/images/vehicles/suv1.jpg";
import suv2 from "../../assets/images/vehicles/suv2.jpg";
import cargo from "../../assets/images/vehicles/cargo.jpg";
import { useNavigate } from "react-router-dom";

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
  {
    src: cargo,
    category: "Cargo",
    title: "Heavy Duty Cargo",
    description: "Reliable cargo transport for commercial needs",
    stats: [
      { value: "5T", label: "Capacity" },
      { value: "Diesel", label: "Engine" },
      { value: "2022", label: "Model" },
    ],
  },
  // Add more vehicles as needed
];

const CarckoMain = () => {
  const [activeTab, setActiveTab] = useState("Allcars");
  const [selectedCard, setSelectedCard] = useState(null);
  const [hoveredCard, setHoveredCard] = useState(null);
  const navigate = useNavigate();

  // Filter vehicles based on active tab
  const filteredVehicles =
    activeTab === "Allcars"
      ? vehicles
      : vehicles.filter((vehicle) => vehicle.category === activeTab);

  return (
    <div className="relative bg-gradient-to-b from-gray-50 to-white overflow-hidden">
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
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {[
              { id: "Allcars", label: "All Vehicles" },
              { id: "SUV", label: "SUV" },
              { id: "Cargo", label: "Cargo" },
            ].map((tab) => (
              <motion.button
                key={tab.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 font-medium rounded-full transition-all ${
                  activeTab === tab.id
                    ? "bg-[#212A5E] text-white shadow-lg"
                    : "text-gray-700 hover:bg-gray-100 border border-gray-200"
                }`}
              >
                {tab.label}
              </motion.button>
            ))}
          </div>

          <div className="min-h-[500px]">
            {/* Vehicle Grid */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="gap-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
            >
              {filteredVehicles.map((vehicle, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -5 }}
                  onHoverStart={() => setHoveredCard(index)}
                  onHoverEnd={() => setHoveredCard(null)}
                  className="bg-white shadow-lg hover:shadow-xl border border-gray-200 rounded-xl overflow-hidden transition-all duration-300"
                >
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={vehicle.src}
                      alt={vehicle.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-bold text-[#212A5E] text-xl">
                        {vehicle.title}
                      </h4>
                      <span className="bg-[#FA812F]/10 text-[#FA812F] text-xs px-2 py-1 rounded">
                        {vehicle.category}
                      </span>
                    </div>
                    <p className="mb-4 text-gray-600">{vehicle.description}</p>
                    <div className="flex justify-between">
                      {vehicle.stats.map((stat, i) => (
                        <div key={i} className="text-center">
                          <p className="font-bold text-[#212A5E]">
                            {stat.value}
                          </p>
                          <p className="text-xs text-gray-500">{stat.label}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {filteredVehicles.length === 0 && (
              <div className="text-center py-12">
                <h3 className="text-xl font-semibold text-gray-700">
                  No vehicles found in this category
                </h3>
                <p className="text-gray-500 mt-2">
                  Please check back later or browse other categories
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

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
