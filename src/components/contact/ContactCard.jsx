import React from "react";
import { motion } from "framer-motion";
import { FiMail, FiPhone, FiMapPin } from "react-icons/fi";

const ContactCard = ({ icon, title, items, delay = 0 }) => {
  // Map icon names to actual components
  const iconMap = {
    mail: <FiMail className="w-6 h-6" />,
    phone: <FiPhone className="w-6 h-6" />,
    location: <FiMapPin className="w-6 h-6" />,
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{
        type: "spring",
        stiffness: 100,
        damping: 15,
        delay: delay * 0.15,
      }}
      whileHover={{
        y: -8,
        boxShadow:
          "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      }}
      className="group relative bg-gradient-to-br from-white to-gray-50 p-8 border border-gray-100 rounded-2xl overflow-hidden"
    >
      {/* Glow effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#212A5E]/5 to-[#3A56A5]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

      {/* Icon container with floating effect */}
      <motion.div
        whileHover={{ rotate: -5, scale: 1.1 }}
        className="z-10 relative flex justify-center items-center bg-gradient-to-br from-[#212A5E] to-[#3A56A5] shadow-lg mx-auto mb-6 rounded-xl w-16 h-16 text-white"
      >
        {iconMap[icon] || icon}
      </motion.div>

      {/* Title with subtle underline animation */}
      <motion.h5 className="relative bg-clip-text bg-gradient-to-r from-[#212A5E] to-[#3A56A5] mb-6 pb-2 font-bold text-transparent text-2xl text-center">
        {title}
        <motion.span
          className="bottom-0 left-1/2 absolute bg-gradient-to-r from-[#212A5E] to-[#3A56A5] h-0.5"
          initial={{ width: 0, x: "-50%" }}
          whileInView={{ width: "60%" }}
          transition={{ delay: delay * 0.15 + 0.2, duration: 0.6 }}
          viewport={{ once: true }}
        />
      </motion.h5>

      {/* Items with staggered animation */}
      <ul className="z-10 relative space-y-3">
        {items.map((item, i) => (
          <motion.li
            key={i}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              delay: delay * 0.15 + 0.3 + i * 0.1,
              duration: 0.4,
            }}
            className="flex justify-center items-center text-gray-600 hover:text-[#212A5E] transition-colors"
          >
            <span className="bg-[#3A56A5] mr-3 rounded-full w-2 h-2"></span>
            <span className="text-sm md:text-base">{item}</span>
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
};

export default ContactCard;
