import { motion } from "framer-motion";

const ChemicalPortfolio = ({ categories, onViewProductRange }) => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="mx-auto px-4 py-12 md:py-24 container">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="mb-12 md:mb-20 text-center"
      >
        <h2 className="mb-4 font-bold text-gray-900 text-3xl md:text-4xl">
          Our Chemical <span className="text-green-600">Portfolio</span>
        </h2>
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-r from-green-400 to-green-600 mx-auto mb-6 w-24 h-1"
        />
        <p className="mx-auto px-4 max-w-3xl text-gray-600 text-lg md:text-xl">
          Carefully selected imports meeting the highest international standards
          for agricultural production
        </p>
      </motion.div>

      {/* Categories */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="space-y-16 md:space-y-32"
      >
        {categories.map((category, index) => (
          <motion.div
            key={category.id}
            variants={itemVariants}
            className="relative"
          >
            {/* Main Card Container */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className={`relative rounded-2xl md:rounded-3xl overflow-hidden ${
                index % 2 === 0 ? "ml-0" : "ml-auto"
              } w-full lg:w-11/12`}
            >
              {/* Image Background */}
              <div className="relative h-[300px] md:h-[500px]">
                <img
                  src={category.image}
                  alt={category.name}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black to-transparent opacity-70"></div>

                {/* Category Content */}
                <div
                  className={`absolute ${
                    index % 2 === 0
                      ? "left-4 md:left-10"
                      : "right-4 md:right-10"
                  } bottom-4 md:bottom-10 text-white max-w-md px-4 md:px-0`}
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="inline-block bg-green-600 mb-3 px-3 py-1 rounded-full font-bold text-xs"
                  >
                    {category.stats}
                  </motion.div>

                  <motion.h3
                    initial={{ x: -20, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="mb-3 md:mb-4 font-bold text-2xl md:text-3xl"
                  >
                    {category.name}
                  </motion.h3>

                  <motion.p
                    initial={{ y: 10, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className="mb-4 md:mb-6 text-sm md:text-base"
                  >
                    {category.description}
                  </motion.p>

                  <motion.button
                    whileHover={{ x: 5 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => onViewProductRange(category)}
                    className="flex items-center text-white hover:text-green-300 text-sm md:text-base transition-colors duration-300"
                  >
                    View Product Range
                    <svg
                      className="ml-2 w-4 md:w-5 h-4 md:h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      ></path>
                    </svg>
                  </motion.button>
                </div>
              </div>

              {/* Key Benefits - Now positioned below the image on mobile */}
              <motion.div
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className={`bg-white p-6 md:p-8 lg:p-12 rounded-b-xl md:rounded-2xl shadow-lg md:shadow-xl ${
                  index % 2 === 0
                    ? "md:absolute md:right-10 md:-bottom-10 md:w-96"
                    : "md:absolute md:left-10 md:-bottom-10 md:w-96"
                }`}
              >
                <h4 className="mb-3 font-bold text-gray-800 text-lg md:text-xl">
                  Key Benefits
                </h4>
                <ul className="space-y-2">
                  {[
                    "Certified organic options available",
                    "Bulk and retail packaging",
                    "Technical support included",
                  ].map((benefit, i) => (
                    <motion.li
                      key={i}
                      initial={{ x: 10, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 + i * 0.1 }}
                      className="flex items-start"
                    >
                      <svg
                        className="flex-shrink-0 mt-0.5 mr-2 w-5 h-5 text-green-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                      <span className="text-gray-700 md:text-green-500">
                        {benefit}
                      </span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default ChemicalPortfolio;
