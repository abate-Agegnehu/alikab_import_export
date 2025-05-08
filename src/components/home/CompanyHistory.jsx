import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const CompanyHistory = () => {
  const navigate = useNavigate();

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        when: "beforeChildren",
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
        duration: 0.5,
      },
    },
  };

  const imageVariants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const buttonVariants = {
    hover: {
      scale: 1.05,
      backgroundColor: "#D97706", // Darker yellow
      transition: {
        duration: 0.3,
      },
    },
    tap: {
      scale: 0.98,
    },
  };

  const productItemVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="bg-gray-100 px-4 sm:px-6 lg:px-8 py-12 min-h-screen"
    >
      <div className="mx-auto max-w-6xl">
        {/* Main container with image and content */}
        <motion.div
          variants={containerVariants}
          className="bg-white shadow-lg rounded-xl overflow-hidden"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[700px]">
            {/* Left Column - Image with bottom section */}
            <div className="flex flex-col">
              {/* Top Image Section */}
              <motion.div
                variants={imageVariants}
                className="flex flex-grow justify-center items-center bg-blue-50"
              >
                <img
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
                  alt="Ethiopian products"
                  className="w-full h-full object-cover"
                />
              </motion.div>

              {/* Bottom Dark Section */}
              <motion.div
                variants={containerVariants}
                className="bg-[#212a5e] p-8 text-white"
              >
                <motion.h2
                  variants={itemVariants}
                  className="mb-4 font-semibold text-2xl"
                >
                  Alikab International Trading PLC
                </motion.h2>
                <motion.p
                  variants={itemVariants}
                  className="mb-6 text-gray-300 leading-relaxed"
                >
                  We are a trading company based in Addis Ababa, Ethiopia,
                  exporting Ethiopia's finest products worldwide.
                </motion.p>

                <motion.div variants={containerVariants} className="mb-6">
                  <motion.h3
                    variants={itemVariants}
                    className="mb-3 font-medium text-gray-200 text-lg"
                  >
                    Our Products:
                  </motion.h3>
                  <ul className="gap-3 grid grid-cols-2">
                    {[
                      "Coffee",
                      "Mung Beans",
                      "Sesame",
                      "Live Animals",
                      "Meat Products",
                    ].map((product, index) => (
                      <motion.li
                        key={index}
                        variants={productItemVariants}
                        custom={index}
                        className="flex items-center"
                      >
                        <span className="bg-blue-400 mr-2 rounded-full w-2 h-2"></span>
                        <span className="text-gray-300">{product}</span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>

                <motion.button
                  whileHover="hover"
                  whileTap="tap"
                  variants={buttonVariants}
                  className="bg-yellow-600 hover:bg-yellow-800 px-3 py-3 rounded-lg w-75 font-medium text-white transition duration-300"
                  onClick={() => navigate("/export")}
                >
                  Learn More About Our Products
                </motion.button>
              </motion.div>
            </div>

            {/* Right Column - Our History */}
            <div className="flex flex-col p-8">
              <motion.div
                variants={containerVariants}
                className="mb-8 text-center"
              >
                <motion.h1
                  variants={itemVariants}
                  className="font-bold text-[#212A5E] text-4xl"
                >
                  Brief History
                </motion.h1>
                <motion.h2
                  variants={itemVariants}
                  className="pt-1 font-bold text-[#FA812F] text-4xl leading-3"
                >
                  ...
                </motion.h2>
              </motion.div>
              <motion.div
                variants={containerVariants}
                className="space-y-4 text-gray-600 leading-relaxed"
              >
                <motion.p variants={itemVariants}>
                  Alikab International Trading Private Limited Company took its
                  name from a great merchant from the ancient Kingdom of Axum
                  (Ethiopia). As one of Ethiopia's thriving trading companies,
                  Alikab has been providing both local and international
                  customers with satisfying services. The company has
                  established several sister companies including Amante
                  Construction Works, Melens PLC, Demera Hotel and Tour PLC, and
                  Kibrom G/Glorgis Transport Service. Over the years, Alikab has
                  grown to become one of the most prominent private trading
                  companies in Ethiopia.
                </motion.p>
                <motion.p variants={itemVariants}>
                  We take pride in contributing to Ethiopia's economic growth
                  through employment and local support. Innovation has always
                  been at the heart of our operations as we seek better ways to
                  serve customers. Today, we stand as a bridge between
                  Ethiopia's agricultural heritage and the global marketplace.
                  Our sustainable business practices help preserve Ethiopia's
                  natural resources. Alikab's story is one of perseverance,
                  innovation, and commitment to excellence.
                </motion.p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default CompanyHistory;
