import { FaCloudDownloadAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const BookHome = () => {
  return (
    <motion.div
      className="flex md:flex-row flex-col justify-between items-center bg-gradient-to-r from-blue-500 to-purple-500 shadow-lg mx-auto p-6 rounded-xl w-full max-w-6xl md:text-left text-center"
      animate={{ y: [0, -10, 0] }}
      transition={{
        duration: 2,
        ease: "easeInOut",
        repeat: Infinity,
        repeatType: "reverse",
      }}
    >
      {/* Text Content */}
      <div className="mb-4 md:mb-0">
        <h2 className="font-bold text-white text-lg sm:text-xl">
          Want to transport your object securely?
        </h2>
        <p className="opacity-80 text-white text-sm sm:text-base italic">
          “Secure your spot today and move with confidence.”
        </p>
      </div>

      {/* Book Now Button (no download) */}
      <motion.button
        className="flex items-center gap-2 bg-white hover:bg-gray-200 shadow-md px-4 sm:px-5 py-2 sm:py-3 rounded-lg font-semibold text-blue-600 text-sm sm:text-base transition-all"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <FaCloudDownloadAlt className="text-lg sm:text-xl" /> Book Now
      </motion.button>
    </motion.div>
  );
};

export default BookHome;
