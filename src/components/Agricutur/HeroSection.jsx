import { motion } from "framer-motion";
import imgHero from "../../assets/images/agriChemical.jpg";
import { useNavigate } from "react-router-dom";

const HeroSection = ({ onExploreProducts, onContactTeam }) => {
  const navigate = useNavigate();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
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
    <div className="relative h-screen max-h-[800px] overflow-hidden">
      <motion.div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: `url(${imgHero})`,
          backgroundAttachment: "fixed",
          filter: "brightness(0.7)",
        }}
        initial={{ scale: 1.2 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <div className="absolute inset-0 bg-opacity-40"></div>
      </motion.div>

      <motion.div
        className="relative flex items-center h-full"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="mx-auto px-4 text-center container">
          <motion.h1
            variants={itemVariants}
            className="mb-6 font-bold text-white text-5xl md:text-7xl leading-tight"
          >
            Premium <span className="text-green-300">Agricultural</span>{" "}
            Chemicals
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="mx-auto mb-10 max-w-3xl text-green-100 text-xl md:text-2xl"
          >
            Sourcing the world's finest crop protection and nutrition products
            for your farming success
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex sm:flex-row flex-col justify-center gap-4"
          >
            <motion.button
              onClick={() => {
                const productsSection = document.getElementById("products");
                if (productsSection) {
                  productsSection.scrollIntoView({ behavior: "smooth" });
                }
                // Optional: Call the original prop if needed
                if (onExploreProducts) onExploreProducts();
              }}
              className="bg-green-600 hover:bg-green-700 shadow-lg px-10 py-4 rounded-lg font-medium text-white text-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              Explore Products
            </motion.button>

            <motion.button
              className="hover:bg-white px-10 py-4 border-2 border-white rounded-lg font-medium text-white hover:text-green-800 text-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              onClick={() => navigate("/contact")}
            >
              Contact Import Team
            </motion.button>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default HeroSection;
