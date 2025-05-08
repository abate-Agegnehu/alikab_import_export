import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Truck, MapPin, Clock } from "lucide-react";
import { useNavigate } from "react-router-dom";

const ConsultationHero = () => {
  const [activeTab, setActiveTab] = useState("road");
  const [hovered, setHovered] = useState(false);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const navigate = useNavigate();
  const handleMouseMove = (e) => {
    setCursorPosition({ x: e.clientX, y: e.clientY });
  };

  const services = {
    road: {
      title: "Cross-Border Cargo Solutions",
      description:
        "Seamless road transport between Ethiopia and Djibouti with real-time tracking and customs clearance",
      icon: <Truck className="w-8 h-8" />,
      stats: [
        { value: "98.7%", label: "On-Time Delivery" },
        { value: "24/7", label: "Tracking" },
        { value: "500+", label: "Monthly Shipments" },
      ],
    },
    consultation: {
      title: "Expert Logistics Consultation",
      description:
        "Get personalized advice for your Ethiopia-Djibouti supply chain needs from our specialists",
      icon: <MapPin className="w-8 h-8" />,
      stats: [
        { value: "15+", label: "Years Experience" },
        { value: "100%", label: "Custom Solutions" },
        { value: "1hr", label: "Response Time" },
      ],
    },
  };

  return (
    <div
      className="relative bg-gradient-to-br from-[#0a1a2f] to-[#1a2d55] pt-12 sm:pt-16 md:pt-20 lg:pt-16 w-full min-h-screen overflow-hidden text-white"
      onMouseMove={handleMouseMove}
    >
      {/* Background visuals */}
      <div className="absolute inset-0 overflow-hidden">
        <svg className="absolute inset-0 opacity-20 w-full h-full">
          <motion.path
            d="M10,100 Q500,50 990,200"
            stroke="rgba(100,200,255,0.5)"
            strokeWidth="1"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
          <motion.path
            d="M50,300 Q400,150 950,400"
            stroke="rgba(100,200,255,0.3)"
            strokeWidth="1"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{
              duration: 4,
              delay: 0.5,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        </svg>

        {/* Floating visuals */}
        <motion.div
          className="top-1/3 left-1/4 absolute opacity-10"
          animate={{ y: [0, -20, 0], opacity: [0.1, 0.15, 0.1] }}
          transition={{ duration: 8, repeat: Infinity }}
        >
          <svg
            width="80"
            height="80"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
          >
            <path d="M21 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-6" />
            <path d="M21 10V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v4" />
            <path d="M7 10v4" />
            <path d="M12 10v4" />
            <path d="M17 10v4" />
          </svg>
        </motion.div>

        <motion.div
          className="right-1/4 bottom-1/3 absolute opacity-10"
          animate={{ y: [0, 20, 0], opacity: [0.1, 0.15, 0.1] }}
          transition={{ duration: 7, repeat: Infinity, delay: 0.3 }}
        >
          <svg
            width="60"
            height="60"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
          >
            <path d="M12 22s-8-4.5-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 8 8.2c0 7.3-8 11.8-8 11.8z" />
          </svg>
        </motion.div>
      </div>

      {/* Cursor spotlight */}
      <motion.div
        className="absolute bg-blue-500/10 rounded-full pointer-events-none"
        style={{
          left: cursorPosition.x - 200,
          top: cursorPosition.y - 200,
          width: 400,
          height: 400,
          filter: "blur(100px)",
        }}
        animate={{ opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 4, repeat: Infinity }}
      />

      {/* Main content */}
      <div className="z-10 relative flex md:flex-row flex-col items-center mx-auto px-6 py-24 container">
        {/* Left Section */}
        <motion.div
          className="mb-16 md:mb-0 md:w-1/2"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="mb-6 font-bold text-4xl md:text-6xl leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <span className="bg-clip-text bg-gradient-to-r from-white to-blue-300 text-transparent">
              Ethiopia-Djibouti
            </span>
            <br />
            <motion.span
              className="inline-block relative"
              onHoverStart={() => setHovered(true)}
              onHoverEnd={() => setHovered(false)}
            >
              <span className="z-10 relative">Transport Experts</span>
              <motion.span
                className="bottom-0 left-0 absolute bg-blue-400 w-full h-1"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: hovered ? 1 : 0 }}
                transition={{ type: "spring", stiffness: 300 }}
              />
            </motion.span>
          </motion.h1>

          <motion.p
            className="mb-8 max-w-lg text-blue-100 text-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            Specialized cargo transport and logistics consulting across
            Ethiopia, between Ethiopia and Djibouti, and from Djibouti to
            Ethiopia, including customs clearance and expert route optimization.
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-4 mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <button
              className="group flex items-center bg-gradient-to-r from-blue-600 hover:from-blue-500 to-blue-500 hover:to-blue-400 shadow-lg hover:shadow-xl px-8 py-4 rounded-lg font-semibold transition-all duration-300"
              onClick={() => navigate("/", { state: { scrollTo: "quote" } })}
            >
              <Clock className="mr-2 w-5 h-5 group-hover:animate-pulse" />
              Get Instant Quote
            </button>
            <button
              className="hover:bg-blue-900/30 hover:shadow-lg px-8 py-4 border border-blue-400 rounded-lg font-semibold transition-all duration-300"
              onClick={() =>
                navigate("/contact", { state: { scrollTo: "contact-form" } })
              }
            >
              Speak to Our Expert
            </button>
          </motion.div>

          <motion.div
            className="gap-4 grid grid-cols-3 max-w-md"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
          >
            {services[activeTab].stats.map((stat, index) => (
              <motion.div
                key={index}
                className="bg-blue-900/20 backdrop-blur-sm p-4 border border-blue-800/50 rounded-xl"
                whileHover={{
                  y: -5,
                  backgroundColor: "rgba(30, 58, 138, 0.4)",
                }}
              >
                <div className="font-bold text-blue-300 text-2xl">
                  {stat.value}
                </div>
                <div className="text-blue-200 text-xs">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Right Section */}
        <motion.div
          className="md:pl-12 md:w-1/2"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="relative bg-blue-900/20 backdrop-blur-sm p-8 border border-blue-800/50 rounded-2xl overflow-hidden">
            <div className="flex bg-blue-900/30 mb-8 p-1 rounded-xl max-w-md">
              {Object.keys(services).map((key) => (
                <button
                  key={key}
                  className={`flex-1 py-3 px-4 rounded-lg text-sm font-medium transition-all ${
                    activeTab === key
                      ? "bg-blue-600 text-white"
                      : "text-blue-200 hover:text-white"
                  }`}
                  onClick={() => setActiveTab(key)}
                >
                  {key === "road" ? "Cargo Transport" : "Consultation"}
                </button>
              ))}
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-start mb-6">
                  <div className="bg-blue-600/30 mr-4 p-3 rounded-lg">
                    {services[activeTab].icon}
                  </div>
                  <div>
                    <h3 className="mb-2 font-bold text-white text-xl">
                      {services[activeTab].title}
                    </h3>
                    <p className="text-blue-200">
                      {services[activeTab].description}
                    </p>
                  </div>
                </div>

                <div className="relative bg-blue-900/30 mt-8 rounded-xl h-64 overflow-hidden">
                  <div className="absolute inset-0 flex justify-center items-center">
                    <svg
                      width="80%"
                      viewBox="0 0 200 100"
                      className="text-blue-400"
                    >
                      <motion.path
                        d="M30,50 Q50,30 70,50 T110,50"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 1.5 }}
                      />
                      <motion.path
                        d="M130,50 Q150,30 170,50"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 1.5, delay: 0.3 }}
                      />
                      <motion.path
                        d="M110,50 L130,50"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeDasharray="5,3"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                      />
                      <motion.g
                        initial={{ x: 30 }}
                        animate={{ x: 170 }}
                        transition={{
                          duration: 5,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                      >
                        <Truck className="w-6 h-6" />
                      </motion.g>
                    </svg>
                  </div>
                  <div className="bottom-4 left-4 absolute text-blue-300 text-xs">
                    <div className="flex items-center">
                      <div className="bg-blue-500 mr-2 rounded-full w-3 h-3"></div>
                      Ethiopia
                    </div>
                  </div>
                  <div className="right-4 bottom-4 absolute text-blue-300 text-xs">
                    <div className="flex items-center">
                      <div className="bg-blue-400 mr-2 rounded-full w-3 h-3"></div>
                      Djibouti
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ConsultationHero;
