import { motion } from "framer-motion";

const StatsSection = () => {
  const stats = [
    { value: "15+", label: "Years Experience" },
    { value: "200+", label: "Products Imported" },
    { value: "50+", label: "Countries Sourced" },
    { value: "24/7", label: "Support Available" },
  ];

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        when: "beforeChildren",
      },
    },
  };

  const statItem = {
    hidden: { y: 40, opacity: 0, scale: 0.8 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
        mass: 0.5,
      },
    },
  };

  const numberItem = {
    hover: {
      scale: 1.1,
      color: "#16a34a", // green-600
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 10,
      },
    },
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      className="bg-white py-24"
    >
      <div className="mx-auto px-4 container">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="gap-8 grid grid-cols-2 md:grid-cols-4 text-center"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={statItem}
              whileHover={{ y: -5 }}
              className="p-6"
            >
              <motion.div
                className="mb-3 font-bold text-green-600 text-5xl"
                variants={numberItem}
                whileHover="hover"
              >
                {stat.value}
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + index * 0.1 }}
                className="text-gray-600"
              >
                {stat.label}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default StatsSection;
