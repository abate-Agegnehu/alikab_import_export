import { motion } from "framer-motion";
// hover fixed
const FeaturedProducts = ({ products, onRequestSpecifications }) => {
  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 50 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  };

  const hoverContent = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const featureItem = {
    hidden: { opacity: 0, x: -10 },
    show: { opacity: 1, x: 0 },
  };

  return (
    <div className="bg-gray-100 py-24" id="products">
      <div className="mx-auto px-4 container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20 text-center"
        >
          <h2 className="mb-4 font-bold text-gray-900 text-4xl">
            Featured <span className="text-green-600">Products</span>
          </h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-r from-green-400 to-green-600 mx-auto mb-6 w-24 h-1"
          />
          <p className="mx-auto max-w-3xl text-gray-600 text-xl">
            Our most requested agricultural chemical imports
          </p>
        </motion.div>

        {/* Products Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="gap-8 grid grid-cols-1 lg:grid-cols-3"
        >
          {products.map((product) => (
            <motion.div
              key={product.id}
              variants={item}
              className="group relative rounded-3xl h-[500px] overflow-hidden"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              {/* Product Image */}
              <motion.img
                src={product.image}
                alt={product.name}
                className="absolute inset-0 w-full h-full object-cover"
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.7 }}
              />

              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black to-transparent opacity-70"></div>

              {/* Product Content */}
              <motion.div
                initial={{ y: 0 }}
                whileHover={{ y: -20 }}
                transition={{ duration: 0.5 }}
                className="right-0 bottom-0 left-0 absolute p-8 text-white"
              >
                {/* Always Visible Content */}
                <motion.h3
                  className="mb-1 font-bold text-2xl"
                  initial={{ y: 0 }}
                  whileHover={{ y: -10 }}
                >
                  {product.name}
                </motion.h3>
                <motion.p
                  className="mb-4 font-medium text-green-300"
                  initial={{ y: 0 }}
                  whileHover={{ y: -10 }}
                >
                  {product.type}
                </motion.p>

                {/* Hover Content */}
                <motion.div
                  initial="hidden"
                  whileHover="show"
                  variants={hoverContent}
                  className="opacity-0 group-hover:opacity-100"
                >
                  <motion.ul className="space-y-2 mb-6">
                    {product.features.map((feature, i) => (
                      <motion.li
                        key={i}
                        variants={featureItem}
                        className="flex items-center"
                      >
                        <motion.svg
                          className="mr-2 w-4 h-4 text-green-400"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          initial={{ scale: 0 }}
                          whileInView={{ scale: 1 }}
                          viewport={{ once: true }}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          ></path>
                        </motion.svg>
                        {feature}
                      </motion.li>
                    ))}
                  </motion.ul>
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default FeaturedProducts;
