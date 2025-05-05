import { motion, AnimatePresence } from "framer-motion";

const ProductModal = ({
  showModal,
  selectedProduct,
  requestType,
  onClose,
  onRequestSpecifications,
}) => {
  const modalVariants = {
    hidden: { opacity: 0, y: -50, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        damping: 25,
        stiffness: 500,
      },
    },
    exit: { opacity: 0, y: 50, scale: 0.95 },
  };

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 },
  };

  const itemVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <AnimatePresence>
      {showModal && selectedProduct && (
        <motion.div
          className="z-50 fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 p-4"
          variants={overlayVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <motion.div
            className="bg-white rounded-xl w-full max-w-4xl max-h-[90vh] overflow-y-auto"
            variants={modalVariants}
          >
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <motion.h3
                  variants={itemVariants}
                  className="font-bold text-gray-800 text-2xl"
                >
                  {selectedProduct.name}
                </motion.h3>
                <motion.button
                  onClick={onClose}
                  className="text-gray-500 hover:text-gray-700"
                  whileHover={{ rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </motion.button>
              </div>

              {requestType === "range" ? (
                <motion.div variants={itemVariants}>
                  <p className="mb-6 text-gray-600">
                    {selectedProduct.description}
                  </p>
                  <div className="space-y-6">
                    {selectedProduct.products.map((product) => (
                      <motion.div
                        key={product.id}
                        className="p-4 border border-gray-200 rounded-lg"
                        whileHover={{ scale: 1.01 }}
                      >
                        <h4 className="mb-2 font-semibold text-green-600 text-xl">
                          {product.name}
                        </h4>
                        <p className="mb-3 text-gray-600">
                          {product.description}
                        </p>
                        <ul className="space-y-2">
                          {product.specifications.map((spec, index) => (
                            <motion.li
                              key={index}
                              className="flex items-start"
                              variants={itemVariants}
                            >
                              <svg
                                className="flex-shrink-0 mt-1 mr-2 w-4 h-4 text-green-500"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                  d="M5 13l4 4L19 7"
                                />
                              </svg>
                              <span className="text-gray-700">{spec}</span>
                            </motion.li>
                          ))}
                        </ul>
                        <motion.button
                          onClick={() => {
                            onRequestSpecifications(product);
                          }}
                          className="flex items-center mt-4 font-medium text-green-600 hover:text-green-800"
                          whileHover={{ x: 5 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          Request Full Specifications
                          <svg
                            className="ml-1 w-4 h-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M9 5l7 7-7 7"
                            />
                          </svg>
                        </motion.button>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              ) : (
                <motion.div variants={itemVariants}>
                  <p className="mb-6 text-gray-600">
                    {selectedProduct.description}
                  </p>

                  <div className="mb-6">
                    <h4 className="mb-3 font-semibold text-gray-800 text-lg">
                      Specifications:
                    </h4>
                    <ul className="space-y-2">
                      {selectedProduct.specifications.map((spec, index) => (
                        <motion.li
                          key={index}
                          className="flex items-start"
                          initial={{ x: -20, opacity: 0 }}
                          animate={{ x: 0, opacity: 1 }}
                          transition={{ delay: index * 0.05 }}
                        >
                          <svg
                            className="flex-shrink-0 mt-1 mr-2 w-4 h-4 text-green-500"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                          <span className="text-gray-700">{spec}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  <motion.div
                    className="bg-gray-50 p-4 rounded-lg"
                    initial={{ scale: 0.95 }}
                    animate={{ scale: 1 }}
                  >
                    <h4 className="mb-3 font-semibold text-gray-800 text-lg">
                      Request More Information
                    </h4>
                    <form className="space-y-4">
                      <div className="gap-4 grid grid-cols-1 md:grid-cols-2">
                        <div>
                          <label className="block mb-1 font-medium text-gray-700 text-sm">
                            Name
                          </label>
                          <input
                            type="text"
                            className="px-3 py-2 border border-gray-300 rounded-md w-full"
                            required
                          />
                        </div>
                        <div>
                          <label className="block mb-1 font-medium text-gray-700 text-sm">
                            Email
                          </label>
                          <input
                            type="email"
                            className="px-3 py-2 border border-gray-300 rounded-md w-full"
                            required
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block mb-1 font-medium text-gray-700 text-sm">
                          Company
                        </label>
                        <input
                          type="text"
                          className="px-3 py-2 border border-gray-300 rounded-md w-full"
                        />
                      </div>
                      <div>
                        <label className="block mb-1 font-medium text-gray-700 text-sm">
                          Message
                        </label>
                        <textarea
                          className="px-3 py-2 border border-gray-300 rounded-md w-full"
                          rows="3"
                          defaultValue={`I'm interested in ${
                            selectedProduct.name
                          } and would like to request ${
                            requestType === "specs"
                              ? "the full specifications"
                              : "more information about the product range"
                          }.`}
                        ></textarea>
                      </div>
                      <div className="flex justify-end space-x-3">
                        <motion.button
                          type="button"
                          onClick={onClose}
                          className="hover:bg-gray-100 px-4 py-2 border border-gray-300 rounded-md text-gray-700"
                          whileHover={{ scale: 1.03 }}
                          whileTap={{ scale: 0.97 }}
                        >
                          Cancel
                        </motion.button>
                        <motion.button
                          type="submit"
                          className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded-md text-white"
                          whileHover={{ scale: 1.03 }}
                          whileTap={{ scale: 0.97 }}
                        >
                          Submit Request
                        </motion.button>
                      </div>
                    </form>
                  </motion.div>
                </motion.div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ProductModal;
