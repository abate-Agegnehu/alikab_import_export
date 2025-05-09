import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaTimes } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

// Import data files
import businessSectors from "../../assets/data/businessSectors.js";
import importItems from "../../assets/data/importItems.js";
import exportItems from "../../assets/data/exportItems.js";

const AboutHero = () => {
  const [activeTab, setActiveTab] = useState("transportation");
  const [selectedCard, setSelectedCard] = useState(null);
  const navigate = useNavigate();

  // Tab configuration
  const tabs = [
    { id: "transportation", label: "Transportation" },
    { id: "import", label: "Key Imports" },
    { id: "export", label: "Key Exports" },
    { id: "sectors", label: "Our Sectors" },
  ];

  return (
    <div className="bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <div className="relative flex justify-center items-center bg-gray-900 h-96 overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.7 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1283&q=80')] bg-cover bg-center"
        />

        <div className="absolute inset-0 bg-[#212A5E] opacity-30" />

        <div className="z-10 relative px-4 text-center">
          <motion.h1
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="mb-6 font-bold text-white text-4xl md:text-6xl"
          >
            <span className="text-yellow-400">Alikab</span> Global Trade
          </motion.h1>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="bg-yellow-500 mx-auto mb-8 w-24 h-1 origin-left"
          />

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mx-auto max-w-2xl text-gray-200 text-lg md:text-xl"
          >
            Comprehensive trade solutions across Import, Export, Transport,
            Agriculture, Manufacturing, Consulting, and Social Work
          </motion.p>
        </div>
      </div>

      {/* Main Content */}
      <div className="mx-auto px-4 py-16 md:py-24 max-w-7xl">
        {/* Tab Navigation */}
        <div className="mb-12">
          <div className="flex flex-wrap justify-center gap-4">
            {tabs.map((tab) => (
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
        </div>

        {/* Tab Content */}
        <div className="mb-20 min-h-[500px]">
          {/* Transportation Tab */}
          {activeTab === "transportation" && (
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
                  Alikab specializes in secure and reliable cargo transportation
                  services from Ethiopia to key destinations across Africa.
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
                      <li>Cross-border cargo across Africa</li>
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
                      <li>Trusted network across Africa</li>
                      <li>Experienced logistics experts</li>
                      <li>Flexible cargo solutions</li>
                    </ul>
                  </div>
                </div>

                <div className="mt-10 text-center">
                  <button
                    className="bg-[#212A5E] hover:bg-[#414c86] shadow-md px-8 py-3 rounded-full font-semibold text-white text-lg transition duration-300"
                    onClick={() => navigate("/transportation")}
                  >
                    Book Your Cargo Slot Now
                  </button>
                </div>
              </div>
            </motion.div>
          )}

          {/* Import Tab */}
          {activeTab === "import" && (
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
                      Comprehensive warranty and support
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
                      Full import and customs clearance
                    </span>
                  </li>
                </ul>
              </div>
            </motion.div>
          )}

          {/* Export Tab */}
          {activeTab === "export" && (
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
                      Direct sourcing from farmers
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-gray-500">✓</span>
                    <span className="text-gray-800">
                      Stringent quality control
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-gray-500">✓</span>
                    <span className="text-gray-800">
                      Competitive market prices
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-gray-500">✓</span>
                    <span className="text-gray-800">
                      Reliable logistics solutions
                    </span>
                  </li>
                </ul>
              </div>
            </motion.div>
          )}

          {/* Sectors Tab */}
          {activeTab === "sectors" && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="space-y-8"
            >
              <div className="bg-white shadow-lg p-8 md:p-10 border border-gray-100 rounded-2xl">
                <h3 className="mb-8 font-bold text-gray-800 text-2xl md:text-3xl text-center">
                  Our Business Sectors
                </h3>

                <div className="gap-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
                  {businessSectors.map((sector) => {
                    const IconComponent = sector.icon;
                    return (
                      <div
                        key={sector.id}
                        className="bg-gray-50 hover:bg-white p-6 border hover:border-gray-300 border-transparent rounded-lg transition-colors duration-300"
                      >
                        <div className="flex justify-center mb-3 text-[#212A5E] text-4xl">
                          <IconComponent />
                        </div>
                        <h4 className="mb-2 font-semibold text-gray-800 text-xl text-center">
                          {sector.title}
                        </h4>
                        <p className="text-gray-600 text-sm text-center">
                          {sector.description}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          )}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h3 className="mb-6 font-bold text-gray-800 text-2xl md:text-3xl">
            Partner With Alikab Global Trade
          </h3>
          <p className="mx-auto mb-8 max-w-2xl text-gray-600 text-lg">
            Whether you need reliable imports, export solutions, or
            comprehensive trade services, we bridge markets with quality and
            professionalism.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#212A5E] hover:bg-[#324197] shadow-lg px-8 py-3 rounded-full font-semibold text-white text-lg transition-all duration-300"
              onClick={() => navigate("/contact")}
            >
              Contact Our Import Team
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="hover:bg-gray-100 px-8 py-3 border-2 border-yellow-500 rounded-full font-semibold text-yellow-600 text-lg transition-all duration-300"
              onClick={() => navigate("/about")}
            >
              View Our Profile
            </motion.button>
          </div>
        </div>
      </div>

      {/* Card Detail Modal */}
      {selectedCard && (
        <div className="z-50 fixed inset-0 flex justify-center items-center bg-black bg-opacity-75 p-4">
          <div className="bg-[#F9F9F9] rounded-xl w-full max-w-4xl max-h-[90vh] overflow-y-auto">
            <div className="relative">
              <img
                src={selectedCard.expandedSrc}
                alt={selectedCard.title}
                className="rounded-t-xl w-full h-64 object-cover"
              />
              <button
                onClick={() => setSelectedCard(null)}
                className="top-4 right-4 absolute bg-white hover:bg-gray-100 shadow-lg p-3 rounded-full"
              >
                <FaTimes className="text-gray-700 text-xl" />
              </button>
            </div>

            <div className="p-8">
              <h2 className="mb-6 font-bold text-[#212A5E] text-3xl">
                {selectedCard.title}
              </h2>

              <div className="max-w-none text-[#4E4E4EB3] prose prose-lg">
                <p className="mb-6">{selectedCard.expandedDescription}</p>

                <h3 className="mb-4 font-semibold text-[#212A5E] text-xl">
                  Key Features
                </h3>
                <ul className="space-y-2 mb-6 pl-5 text-[#4E4E4EB3] list-disc">
                  {selectedCard.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>

                <h3 className="mb-4 font-semibold text-[#212A5E] text-xl">
                  Why Choose This Product?
                </h3>
                <p className="text-[#4E4E4EB3]">
                  Our {selectedCard.title.toLowerCase()} are carefully selected
                  to meet the highest standards of quality and performance.
                </p>
              </div>

              <div className="flex justify-center mt-10">
                <button
                  onClick={() => setSelectedCard(null)}
                  className="bg-[#212A5E] hover:bg-blue-600 px-8 py-3 rounded-lg font-medium text-white transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default AboutHero;
