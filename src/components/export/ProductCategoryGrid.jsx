import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ProductCategoryGrid = ({ categories }) => {
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [hoveredCard, setHoveredCard] = useState(null);

  const handleCardClick = (category) => {
    setSelectedCategory(category);
    setOpenDialog(true);
  };

  return (
    <div className="relative bg-gradient-to-b from-gray-50 to-white py-20 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="top-20 left-10 absolute bg-[#FA812F] blur-3xl rounded-full w-40 h-40 filter"></div>
        <div className="right-20 bottom-10 absolute bg-[#212A5E] blur-3xl rounded-full w-60 h-60 filter"></div>
      </div>

      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="relative mb-16 px-4 text-center"
      >
        <h2
          className="mb-4 font-bold text-[#212A5E] text-4xl md:text-5xl"
          id="exportproducts"
        >
          Our <span className="text-[#FA812F]">Premium</span> Exports
        </h2>
        <div className="bg-[#FA812F] mx-auto mb-6 rounded-full w-24 h-1.5"></div>
        <p className="mx-auto max-w-2xl text-gray-600 text-lg">
          Discover Ethiopia's finest agricultural products, carefully sourced
          and prepared for global markets
        </p>
      </motion.div>

      {/* Product Grid */}
      <div className="relative mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="gap-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {categories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
              onClick={() => handleCardClick(category)}
              className="group relative"
            >
              {/* Floating image container */}
              <div className="z-10 relative shadow-xl rounded-2xl h-64 overflow-hidden">
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              </div>

              {/* Floating content panel */}
              <div className="z-20 relative bg-white shadow-lg mx-4 -mt-8 p-6 border border-gray-100 rounded-xl">
                <h3 className="mb-3 font-bold text-[#212A5E] text-xl">
                  {category.title}
                </h3>
                <p className="mb-4 text-gray-600 line-clamp-2">
                  {category.shortDescription ||
                    category.description.substring(0, 100)}
                  ...
                </p>

                {/* Stats badges */}
                {category.stats && (
                  <div className="flex flex-wrap gap-2 mb-5">
                    {category.stats.map((stat, i) => (
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
                )}

                {/* Animated button */}
                <motion.div
                  animate={{
                    opacity: hoveredCard === index ? 1 : 0,
                    y: hoveredCard === index ? 0 : 10,
                  }}
                >
                  <button className="group flex items-center font-medium text-[#FA812F]">
                    <span>View details</span>
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

              {/* Decorative accent */}
              <div className="-right-4 -bottom-4 z-0 absolute bg-[#FA812F]/10 rounded-full w-24 h-24"></div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal Dialog */}
      <AnimatePresence>
        {openDialog && selectedCategory && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="z-50 fixed inset-0 flex justify-center items-center bg-black/50 backdrop-blur-sm p-4"
            onClick={() => setOpenDialog(false)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white shadow-2xl rounded-xl w-full max-w-2xl overflow-hidden"
            >
              {/* Modal Content */}
              <div className="relative w-full h-64 overflow-hidden">
                <img
                  src={selectedCategory.image}
                  alt={selectedCategory.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <h3 className="bottom-6 left-6 absolute font-bold text-white text-2xl">
                  {selectedCategory.title}
                </h3>
              </div>

              <div className="p-6">
                <p className="mb-6 text-gray-700">
                  {selectedCategory.description}
                </p>

                {selectedCategory.stats && (
                  <div className="gap-4 grid grid-cols-2 mb-6">
                    {selectedCategory.stats.map((stat, i) => (
                      <div key={i} className="bg-gray-50 p-3 rounded-lg">
                        <p className="font-medium text-gray-500 text-sm">
                          {stat.label}
                        </p>
                        <p className="font-semibold text-[#212A5E]">
                          {stat.value}
                        </p>
                      </div>
                    ))}
                  </div>
                )}

                <div className="flex justify-end">
                  <button
                    onClick={() => setOpenDialog(false)}
                    className="bg-[#212A5E] hover:bg-[#1a2249] px-6 py-2 rounded-lg font-medium text-white transition-colors duration-200"
                  >
                    Close
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ProductCategoryGrid;
