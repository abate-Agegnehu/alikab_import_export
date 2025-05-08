import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";

const ProductModal = ({ showModal, selectedProduct, requestType, onClose }) => {
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
  const navigate = useNavigate();
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
            className="bg-white mt-24 rounded-xl w-full max-w-4xl max-h-[75vh] overflow-y-auto"
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
                            navigate("/contact");
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
