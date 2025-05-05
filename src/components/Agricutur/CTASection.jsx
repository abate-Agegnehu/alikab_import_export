import { motion } from "framer-motion";

const CTASection = ({ onCustomQuote, onScheduleCall }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="relative bg-green-700 py-32 overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <motion.div
          className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"
          animate={{
            x: [0, 10, 0],
            y: [0, 5, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        ></motion.div>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="relative mx-auto px-4 text-center container"
      >
        <motion.h2
          variants={itemVariants}
          className="mb-6 font-bold text-white text-4xl"
        >
          Ready to Import Agricultural Chemicals?
        </motion.h2>
        <motion.p
          variants={itemVariants}
          className="mx-auto mb-10 max-w-3xl text-green-100 text-xl"
        >
          Our team specializes in hassle-free import of quality agricultural
          inputs from global manufacturers.
        </motion.p>
        <motion.div
          variants={itemVariants}
          className="flex sm:flex-row flex-col justify-center gap-4"
        >
          <motion.button
            onClick={onCustomQuote}
            className="bg-white hover:bg-gray-100 shadow-lg px-12 py-4 rounded-full font-medium text-green-700 text-lg"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.2)",
            }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            Get Custom Quote
          </motion.button>
          <motion.button
            onClick={onScheduleCall}
            className="hover:bg-white px-12 py-4 border-2 border-white rounded-full font-medium text-white hover:text-green-700 text-lg"
            whileHover={{
              scale: 1.05,
              backgroundColor: "#ffffff",
              color: "#065f46",
              boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.2)",
            }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <span className="flex justify-center items-center">
              <svg
                className="mr-2 w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                ></path>
              </svg>
              Schedule Call
            </span>
          </motion.button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default CTASection;
