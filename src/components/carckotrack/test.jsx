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
  // Add similar objects for all vehicles...
];

const CarckoMain = () => {
  const [activeTab, setActiveTab] = useState("transportation");
  const [selectedCard, setSelectedCard] = useState(null);
  const navigate = useNavigate();

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
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {[
              { id: "allcar", label: "All Car" },
              { id: "suv", label: "SUV" },
              { id: "cargo", label: "Cargo" },
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
            {/* All Tab - Transport Focus */}
            {activeTab === "allcar" && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="space-y-8"
              >
                <div className="bg-[#F9F9F9] p-8 md:p-12 border border-gray-100 rounded-2xl">
                  <h3 className="mb-6 font-extrabold text-[#212A5E] text-2xl md:text-4xl tracking-tight">
                    Efficient Cargo Transport Across Africa
                  </h3>
                  <p className="mb-6 text-gray-700 text-lg leading-relaxed">
                    Alikab specializes in secure and reliable cargo
                    transportation services from Ethiopia to key destinations
                    across Africa. Whether it's commercial goods, bulk
                    shipments, or custom logistics, we ensure timely and
                    cost-effective delivery with full transparency.
                  </p>
                  <div className="gap-10 grid md:grid-cols-2">
                    <div className="space-y-4">
                      <h4 className="flex items-center font-semibold text-blue-700 text-xl">
                        <span className="inline-block bg-blue-100 mr-3 rounded-full w-6 h-6 font-bold text-blue-700 text-center">
                          ✓
                        </span>
                        What We Offer
                      </h4>
                      <ul className="space-y-1 pl-1 text-gray-600 list-disc list-inside">
                        <li>
                          Cross-border cargo from Ethiopia to multiple African
                          countries
                        </li>
                        <li>Real-time tracking & secure handling</li>
                        <li>Competitive pricing & custom logistics plans</li>
                      </ul>
                    </div>
                    <div className="space-y-4">
                      <h4 className="flex items-center font-semibold text-blue-700 text-xl">
                        <span className="inline-block bg-blue-100 mr-3 rounded-full w-6 h-6 font-bold text-blue-700 text-center">
                          ✓
                        </span>
                        Why Choose Us
                      </h4>
                      <ul className="space-y-1 pl-1 text-gray-600 list-disc list-inside">
                        <li>
                          Trusted network across East, West, and Central Africa
                        </li>
                        <li>Experienced logistics experts</li>
                        <li>Flexible cargo solutions tailored to your needs</li>
                      </ul>
                    </div>
                  </div>
                  <div className="mt-10 text-center">
                    <button
                      className="bg-[#212A5E] hover:bg-[#414c86] shadow-md px-8 py-3 rounded-full font-semibold text-white text-lg transition duration-300"
                      onClick={() => navigate("/vehicles")}
                    >
                      Book Your Cargo Slot Now
                    </button>
                  </div>
                </div>
              </motion.div>
            )}

            {/* SUV Tab */}
            {activeTab === "suv" && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="space-y-8"
              >
                <h3 className="mb-10 font-bold text-[#212A5E] text-2xl md:text-3xl text-center">
                  Our Key Import Items
                </h3>
                <div className="gap-8 grid grid-cols-1 md:grid-cols-3">
                  {importItems.map((item) => (
                    <motion.div
                      key={item.id}
                      whileHover={{ y: -5 }}
                      className="bg-white shadow-lg hover:shadow-xl border border-gray-200 rounded-xl overflow-hidden transition-all duration-300"
                    >
                      <img
                        src={item.src}
                        alt={item.title}
                        className="w-full h-64 object-cover"
                      />
                      <div className="p-6">
                        <h4 className="mb-3 font-bold text-[#212A5E] text-xl">
                          {item.title}
                        </h4>
                        <p className="mb-4 text-gray-600">{item.description}</p>
                        <button
                          onClick={() => setSelectedCard(item)}
                          className="full-rounded font-medium text-blue-600 hover:text-blue-700"
                        >
                          Read More
                        </button>
                      </div>
                    </motion.div>
                  ))}
                </div>
                <div className="bg-gray-50 mt-10 p-8 rounded-xl">
                  <h4 className="mb-4 font-semibold text-gray-800 text-xl">
                    Why Choose Our Imports?
                  </h4>
                  <ul className="gap-4 grid grid-cols-1 md:grid-cols-2">
                    <li className="flex items-start">
                      <span className="mr-2 text-gray-500">✓</span>
                      <span className="text-gray-800">
                        Customized for African operating conditions
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-gray-500">✓</span>
                      <span className="text-gray-800">
                        Comprehensive warranty and after-sales support
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-gray-500">✓</span>
                      <span className="text-gray-800">
                        Competitive pricing with flexible financing
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-gray-500">✓</span>
                      <span className="text-gray-800">
                        Full import and customs clearance services
                      </span>
                    </li>
                  </ul>
                </div>
              </motion.div>
            )}

            {/* Export Tab */}
            {activeTab === "cargo" && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="space-y-8"
              >
                <h3 className="mb-10 font-bold text-[#212A5E] text-2xl md:text-3xl text-center">
                  Our Key Export Items
                </h3>
                <div className="gap-8 grid grid-cols-1 md:grid-cols-3">
                  {exportItems.map((item) => (
                    <motion.div
                      key={item.id}
                      whileHover={{ y: -5 }}
                      className="bg-white shadow-lg hover:shadow-xl border border-gray-200 rounded-xl overflow-hidden transition-all duration-300"
                    >
                      <img
                        src={item.src}
                        alt={item.title}
                        className="w-full h-64 object-cover"
                      />
                      <div className="p-6">
                        <h4 className="mb-3 font-bold text-[#212A5E] text-xl">
                          {item.title}
                        </h4>
                        <p className="mb-4 text-gray-600">{item.description}</p>
                        <button
                          onClick={() => setSelectedCard(item)}
                          className="font-medium text-blue-600 hover:text-blue-700"
                        >
                          Read More
                        </button>
                      </div>
                    </motion.div>
                  ))}
                </div>
                <div className="bg-gray-50 mt-10 p-8 rounded-xl">
                  <h4 className="mb-4 font-semibold text-gray-800 text-xl">
                    Our Export Advantages
                  </h4>
                  <ul className="gap-4 grid grid-cols-1 md:grid-cols-2">
                    <li className="flex items-start">
                      <span className="mr-2 text-gray-500">✓</span>
                      <span className="text-gray-800">
                        Direct sourcing from farmers and cooperatives
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-gray-500">✓</span>
                      <span className="text-gray-800">
                        Stringent quality control at every stage
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-gray-500">✓</span>
                      <span className="text-gray-800">
                        Competitive international market prices
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-gray-500">✓</span>
                      <span className="text-gray-800">
                        Reliable logistics and shipping solutions
                      </span>
                    </li>
                  </ul>
                </div>
              </motion.div>
            )}
          </div>
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
