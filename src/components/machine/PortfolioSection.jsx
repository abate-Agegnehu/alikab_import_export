import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { machineryCategories } from "./data";

const PortfolioSection = ({ onExplore, onScheduleDemo }) => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedMachine, setSelectedMachine] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const navigate = useNavigate();

  const filteredCategories =
    activeCategory === "all"
      ? machineryCategories
      : machineryCategories.filter((cat) =>
          activeCategory === "agriculture"
            ? cat.name.includes("Horsch") || cat.name.includes("Tractor")
            : cat.name.includes("Bulldozer")
        );

  const openModal = (machine) => {
    setSelectedMachine(machine);
    setIsModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = "auto";
  };

  return (
    <div className="relative bg-gray-50 w-full overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 w-full h-full [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_70%)]">
          <div className="absolute inset-0 bg-grid-blue-900/20"></div>
        </div>
      </div>
      <div className="-top-20 -right-20 absolute bg-blue-400/10 blur-3xl rounded-full w-96 h-96"></div>
      <div className="-bottom-20 -left-20 absolute bg-purple-400/10 blur-3xl rounded-full w-96 h-96"></div>

      <div className="relative mx-auto px-4 py-12 sm:py-16 lg:py-20 container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-12 lg:mb-16 text-center"
        >
          <span className="inline-block bg-blue-100/80 backdrop-blur-sm mb-4 px-4 py-2 rounded-full font-semibold text-blue-800 text-sm">
            Industrial Solutions
          </span>
          <h2 className="mb-4 font-bold text-gray-900 text-3xl sm:text-4xl lg:text-5xl">
            Premium <span className="text-blue-600">Equipment</span> Portfolio
          </h2>
          <div className="bg-gradient-to-r from-blue-400 to-blue-600 mx-auto mb-6 rounded-full w-24 h-1.5"></div>
          <p className="mx-auto max-w-3xl text-gray-600 text-lg sm:text-xl">
            Cutting-edge machinery for agriculture and construction applications
          </p>
        </motion.div>

        {/* Category Filters */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex justify-center mb-8 sm:mb-12"
        >
          <div className="inline-flex bg-gray-100/50 shadow-sm backdrop-blur-sm p-1 border border-gray-200/50 rounded-xl">
            {["all", "agriculture", "construction"].map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-5 py-2.5 text-sm font-medium rounded-lg transition-all duration-300 flex items-center ${
                  activeCategory === category
                    ? "bg-white shadow-md text-blue-600 border border-white"
                    : "text-gray-600 hover:text-gray-800 hover:bg-white/50"
                }`}
              >
                <span className="capitalize">
                  {category === "all" ? "All Equipment" : category}
                </span>
              </button>
            ))}
          </div>
        </motion.div>

        {/* Equipment Cards */}
        <div className="gap-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {filteredCategories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative bg-white shadow-lg hover:shadow-xl border border-gray-100 rounded-xl overflow-hidden transition-all duration-300"
            >
              <div className="relative h-60 overflow-hidden">
                <img
                  src={category.images[0]}
                  alt={category.name}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                <div className="top-4 right-4 absolute flex items-center bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full font-bold text-blue-600 text-sm">
                  <svg
                    className="mr-1 w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    ></path>
                  </svg>
                  {category.stats.split(",")[0]}
                </div>
              </div>

              <div className="p-6">
                <h3 className="mb-2 font-bold text-gray-800 text-xl">
                  {category.name}
                </h3>
                <p className="mb-4 text-gray-600 text-sm line-clamp-2">
                  {category.description}
                </p>

                <div className="mb-4">
                  <h4 className="flex items-center mb-2 font-semibold text-blue-600 text-sm">
                    <svg
                      className="mr-2 w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                    KEY FEATURES
                  </h4>
                  <ul className="space-y-2">
                    {category.features.slice(0, 2).map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <div className="bg-blue-100 mr-2 p-1 rounded-full">
                          <div className="bg-blue-500 rounded-full w-2 h-2"></div>
                        </div>
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex justify-between items-center pt-4 border-gray-100 border-t">
                  <button
                    onClick={() => openModal(category)}
                    className="group flex items-center font-medium text-blue-600 hover:text-blue-800 text-sm"
                  >
                    View Details
                    <svg
                      className="ml-1 w-4 h-4 transition-transform group-hover:translate-x-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      ></path>
                    </svg>
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative bg-gradient-to-r from-blue-500 to-blue-600 mt-16 p-8 md:p-10 lg:p-12 rounded-2xl overflow-hidden text-white text-center"
        >
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1605000797499-95a51c5269ae?q=80&w=3000&auto=format&fit=crop')] bg-cover opacity-10"></div>
          <div className="z-10 relative">
            <h3 className="mb-4 font-bold text-2xl md:text-3xl">
              Ready to Transform Your Operations?
            </h3>
            <p className="mx-auto mb-6 max-w-2xl text-blue-100 text-lg">
              Our experts are standing by to help you select the perfect
              machinery for your needs.
            </p>
            <div className="flex sm:flex-row flex-col justify-center gap-4">
              <button
                onClick={() => navigate("/vichles")}
                className="flex justify-center items-center bg-white hover:bg-gray-100 shadow-md px-8 py-3 rounded-lg font-semibold text-blue-600 transition-colors"
              >
                Explore More Imports
              </button>
              <button
                onClick={() => navigate("/contact")}
                className="flex justify-center items-center bg-transparent hover:bg-white hover:shadow-xl px-8 py-3 border-2 border-white rounded-lg font-semibold text-white hover:text-blue-600 active:scale-95 transition-all duration-500 ease-in-out"
              >
                Contact Our Team
              </button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Modal */}
      {isModalOpen && selectedMachine && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={closeModal}
          className="z-50 fixed inset-0 flex justify-center items-center bg-black bg-opacity-80 p-2 sm:p-4"
        >
          <motion.div
            initial={{ scale: 0.9, y: 50 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.9, y: 50 }}
            onClick={(e) => e.stopPropagation()}
            className="relative bg-white shadow-xl p-4 sm:p-6 rounded-xl w-full max-w-md sm:max-w-2xl max-h-[90vh] overflow-y-auto"
          >
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="top-2 sm:top-3 right-2 sm:right-3 absolute text-gray-500 hover:text-gray-700 text-lg"
            >
              ✕
            </button>

            {/* Modal Content */}
            <h3 className="mb-2 font-bold text-lg sm:text-xl">
              {selectedMachine.name}
            </h3>
            <p className="mb-4 text-gray-600 text-sm sm:text-base">
              {selectedMachine.description}
            </p>

            {/* Image Grid */}
            <div className="gap-2 grid grid-cols-2 mb-4">
              {selectedMachine.images.slice(0, 4).map((img, i) => (
                <motion.img
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.1 }}
                  src={img}
                  alt={`img-${i}`}
                  className="rounded-md w-full h-32 sm:h-40 object-cover hover:scale-105 transition-transform"
                />
              ))}
            </div>

            {/* Features List */}
            <ul className="space-y-1 mb-6 text-gray-700 text-sm sm:text-base list-disc list-inside">
              {selectedMachine.features.map((f, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + i * 0.05 }}
                >
                  {f}
                </motion.li>
              ))}
            </ul>

            {/* Contact Now Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="mt-4 text-center"
            >
              <button
                onClick={() => {
                  onScheduleDemo(selectedMachine.name);
                  closeModal();
                }}
                className="inline-flex items-center bg-gradient-to-r from-blue-500 hover:from-blue-600 to-blue-600 hover:to-blue-700 shadow-md hover:shadow-lg px-5 py-3 rounded-lg font-semibold text-white text-sm sm:text-base transition-all"
              >
                📞 Contact Now
              </button>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default PortfolioSection;
