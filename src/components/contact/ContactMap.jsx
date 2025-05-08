import React from "react";
import { motion } from "framer-motion";

const ContactMap = () => {
  return (
    <section className="bg-gradient-to-br from-blue-50 to-indigo-50 px-4 py-16 md:py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mx-auto max-w-7xl"
      >
        <div className="mb-12 text-center">
          <h3 className="bg-clip-text bg-gradient-to-r from-[#212A5E] to-[#3A56A5] mb-4 font-bold text-transparent text-3xl md:text-4xl lg:text-5xl">
            Find Us on Map
          </h3>
          <p className="mx-auto max-w-2xl text-gray-600">
            Visit our location or get directions to our office
          </p>
        </div>

        <motion.div
          whileHover={{ scale: 1.01 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
          className="relative shadow-xl border-2 border-white rounded-2xl overflow-hidden"
        >
          <div className="z-10 absolute inset-0 bg-gradient-to-br from-[#212A5E]/20 to-[#3A56A5]/20 pointer-events-none" />

          <iframe
            title="Agona Location Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3944.013066544377!2d38.76741861477833!3d8.99060529208445!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b85b9825b812f%3A0xe03fcf4052953622!2sGotera%20Condominium!5e0!3m2!1sen!2set!4v1683039011921!5m2!1sen!2set"
            width="100%"
            height="500"
            style={{ border: "0" }}
            allowFullScreen=""
            loading="lazy"
            className="w-full h-full min-h-[400px] md:min-h-[500px]"
          />

          <div className="right-4 bottom-4 z-10 absolute">
            <a
              href="https://maps.google.com?q=Gotera+Condominium"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-white/90 hover:bg-white shadow-md backdrop-blur-sm px-4 py-2 rounded-lg text-[#212A5E] transition-all duration-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                  clipRule="evenodd"
                />
              </svg>
              Open in Maps
            </a>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ContactMap;
