import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Coffee, Sprout, Truck, Globe, BarChart2 } from "lucide-react";

const HeroExport = () => {
  const [activeTab, setActiveTab] = useState("coffee");
  const [hovered, setHovered] = useState(false);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    setCursorPosition({ x: e.clientX, y: e.clientY });
  };

  const products = {
    coffee: {
      title: "Premium Ethiopian Coffee Exports",
      description:
        "Direct from Ethiopian highlands to global markets - specialty grade coffee with full traceability",
      icon: <Coffee className="w-8 h-8" />,
      stats: [
        { value: "Grade 1", label: "Quality" },
        { value: "100%", label: "Arabica" },
        { value: "200+", label: "Farm Partners" },
      ],
    },
    oilseeds: {
      title: "Quality Oilseeds Export",
      description:
        "Exporting premium sesame seeds and other oilseeds with strict quality control from farm to port",
      icon: <Sprout className="w-8 h-8" />,
      stats: [
        { value: "99.5%", label: "Purity" },
        { value: "ISO", label: "Certified" },
        { value: "10+", label: "Varieties" },
      ],
    },
    pulses: {
      title: "Nutritious Pulses Export",
      description:
        "High-protein beans and pulses sourced directly from Ethiopian farmers, processed for export",
      icon: <BarChart2 className="w-8 h-8" />,
      stats: [
        { value: "20K", label: "MT Annual" },
        { value: "15+", label: "Countries" },
        { value: "0%", label: "Additives" },
      ],
    },
  };

  // Coffee plant SVG component
  const CoffeePlant = ({ size = 100, position }) => (
    <motion.div
      className="absolute"
      style={{
        width: `${size}px`,
        height: `${size}px`,
        left: `${position.x}%`,
        top: `${position.y}%`,
        opacity: 0.3,
      }}
      animate={{
        y: [0, -10, 0],
      }}
      transition={{
        duration: 8 + Math.random() * 4,
        repeat: Infinity,
      }}
    >
      <svg viewBox="0 0 100 100" fill="none" stroke="rgba(200, 255, 200, 0.4)">
        {/* Coffee plant stem */}
        <path d="M50 80 L50 40" strokeWidth="2" strokeLinecap="round" />
        {/* Leaves */}
        <path
          d="M50 50 Q70 40 50 30"
          strokeWidth="2"
          fill="rgba(50, 120, 50, 0.1)"
        />
        <path
          d="M50 60 Q30 50 50 40"
          strokeWidth="2"
          fill="rgba(50, 120, 50, 0.1)"
        />
        {/* Coffee cherries */}
        <circle cx="50" cy="30" r="5" fill="rgba(200, 100, 50, 0.5)" />
        <circle cx="45" cy="35" r="4" fill="rgba(180, 80, 40, 0.5)" />
      </svg>
    </motion.div>
  );

  // Coffee bean component
  const CoffeeBean = ({ position, delay }) => (
    <motion.div
      className="absolute"
      style={{
        width: "20px",
        height: "12px",
        left: `${position.x}%`,
        top: `${position.y}%`,
        backgroundColor: "rgba(100, 60, 30, 0.3)",
        borderRadius: "50%",
        transform: `rotate(${Math.random() * 360}deg)`,
      }}
      animate={{
        y: [0, Math.random() * 20 - 10],
        x: [0, Math.random() * 10 - 5],
        opacity: [0.6, 0.9, 0.6],
      }}
      transition={{
        duration: 5 + Math.random() * 5,
        repeat: Infinity,
        repeatType: "reverse",
        delay: delay || 0,
      }}
    />
  );

  return (
    <div
      className="relative bg-gradient-to-br from-[#0a2a12] to-[#1d4a2d] pt-12 sm:pt-16 md:pt-20 lg:pt-16 w-full min-h-screen overflow-hidden text-white"
      onMouseMove={handleMouseMove}
    >
      {/* Sophisticated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Coffee plants in background */}
        {[
          { x: 10, y: 20, size: 120 },
          { x: 85, y: 30, size: 80 },
          { x: 25, y: 70, size: 150 },
          { x: 70, y: 80, size: 100 },
        ].map((plant, i) => (
          <CoffeePlant
            key={i}
            size={plant.size}
            position={{ x: plant.x, y: plant.y }}
          />
        ))}

        {/* Floating coffee beans */}
        {Array.from({ length: 15 }).map((_, i) => (
          <CoffeeBean
            key={i}
            position={{
              x: Math.random() * 100,
              y: Math.random() * 100,
            }}
            delay={i * 0.3}
          />
        ))}

        {/* Subtle topographic map pattern */}
        <svg
          className="absolute inset-0 opacity-10 w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
        >
          <pattern
            id="topography"
            width="40"
            height="40"
            patternUnits="userSpaceOnUse"
          >
            <path d="M 0 40 L 40 0" stroke="white" strokeWidth="0.5" />
            <path d="M 0 20 L 20 0" stroke="white" strokeWidth="0.5" />
            <path d="M 0 30 L 30 0" stroke="white" strokeWidth="0.5" />
            <path d="M 0 10 L 10 0" stroke="white" strokeWidth="0.5" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#topography)" />
        </svg>
      </div>

      {/* Dynamic spotlight effect */}
      <motion.div
        className="absolute bg-green-500/10 rounded-full pointer-events-none"
        style={{
          left: cursorPosition.x - 200,
          top: cursorPosition.y - 200,
          width: 400,
          height: 400,
          filter: "blur(80px)",
        }}
        animate={{
          opacity: [0.2, 0.4, 0.2],
          scale: [1, 1.05, 1],
        }}
        transition={{ duration: 5, repeat: Infinity }}
      />

      {/* Main content container */}
      <div className="z-10 relative flex md:flex-row flex-col justify-center items-center mx-auto px-6 py-24 container">
        {/* Left content section */}
        <motion.div
          className="mb-16 md:mb-0 md:w-1/2"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="mb-6 font-bold text-4xl md:text-5xl lg:text-6xl leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <span className="bg-clip-text bg-gradient-to-r from-white to-green-200 text-transparent">
              Ethiopian Agricultural
            </span>
            <br />
            <motion.span
              className="inline-block relative"
              onHoverStart={() => setHovered(true)}
              onHoverEnd={() => setHovered(false)}
            >
              <span className="z-10 relative">Export Excellence</span>
              <motion.span
                className="bottom-0 left-0 absolute bg-green-400 w-full h-1"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: hovered ? 1 : 0 }}
                transition={{ type: "spring", stiffness: 300 }}
              />
            </motion.span>
          </motion.h1>

          <motion.p
            className="mb-8 max-w-lg text-green-100 text-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            Connecting Ethiopian farmers to global markets with premium coffee,
            oilseeds, and pulses. Sustainable sourcing, fair trade practices,
            and direct export solutions.
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-4 mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <button className="group flex items-center bg-gradient-to-r from-green-600 hover:from-green-500 to-green-500 hover:to-green-400 shadow-lg hover:shadow-xl px-8 py-4 rounded-lg font-semibold transition-all duration-300">
              <Globe className="mr-2 w-5 h-5 group-hover:animate-pulse" />
              Explore Our Products
            </button>
            <button className="hover:bg-green-900/30 hover:shadow-lg px-8 py-4 border border-green-400 rounded-lg font-semibold transition-all duration-300">
              Request Export Catalog
            </button>
          </motion.div>

          <motion.div
            className="gap-4 grid grid-cols-3 max-w-md"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
          >
            {products[activeTab].stats.map((stat, index) => (
              <motion.div
                key={index}
                className="bg-green-900/20 backdrop-blur-sm p-4 border border-green-800/50 rounded-xl"
                whileHover={{
                  y: -5,
                  backgroundColor: "rgba(20, 83, 45, 0.4)",
                }}
              >
                <div className="font-bold text-green-300 text-2xl">
                  {stat.value}
                </div>
                <div className="text-green-200 text-xs">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Right content section */}
        <motion.div
          className="md:pl-12 md:w-1/2"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="relative bg-green-900/20 backdrop-blur-sm p-8 border border-green-800/50 rounded-2xl overflow-hidden">
            {/* Product tabs */}
            <div className="flex bg-green-900/30 mb-8 p-1 rounded-xl max-w-md">
              {Object.keys(products).map((key) => (
                <button
                  key={key}
                  className={`flex-1 py-3 px-4 rounded-lg text-sm font-medium transition-all ${
                    activeTab === key
                      ? "bg-green-600 text-white"
                      : "text-green-200 hover:text-white"
                  }`}
                  onClick={() => setActiveTab(key)}
                >
                  {key === "coffee"
                    ? "Coffee"
                    : key === "oilseeds"
                    ? "Oilseeds"
                    : "Pulses"}
                </button>
              ))}
            </div>

            {/* Animated product content */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-start mb-6">
                  <div className="bg-green-600/30 mr-4 p-3 rounded-lg">
                    {products[activeTab].icon}
                  </div>
                  <div>
                    <h3 className="mb-2 font-bold text-white text-xl">
                      {products[activeTab].title}
                    </h3>
                    <p className="text-green-200">
                      {products[activeTab].description}
                    </p>
                  </div>
                </div>

                {/* Product visualization */}
                <div className="relative bg-green-900/30 mt-8 rounded-xl h-64 overflow-hidden">
                  <div className="absolute inset-0 flex justify-center items-center">
                    {activeTab === "coffee" && (
                      <motion.div
                        className="flex flex-col items-center"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                      >
                        {/* Animated coffee cherries */}
                        <div className="relative mb-8">
                          {[...Array(3)].map((_, i) => (
                            <motion.div
                              key={i}
                              className="absolute bg-brown-700 rounded-full"
                              style={{
                                width: "50px",
                                height: "30px",
                                left: `${i * 30}px`,
                                top: `${Math.sin(i) * 5}px`,
                                transform: `rotate(${i * 15}deg)`,
                              }}
                              animate={{
                                y: [0, Math.sin(i) * 5],
                              }}
                              transition={{
                                duration: 3,
                                repeat: Infinity,
                                repeatType: "reverse",
                                delay: i * 0.2,
                              }}
                            />
                          ))}
                        </div>
                        <Globe className="w-12 h-12 text-green-300" />
                        <div className="mt-4 text-green-300 text-sm">
                          Exporting to 25+ countries worldwide
                        </div>
                      </motion.div>
                    )}
                    {activeTab === "oilseeds" && (
                      <motion.div
                        className="text-center"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                      >
                        <div className="flex justify-center space-x-4 mb-8">
                          {[...Array(3)].map((_, i) => (
                            <motion.div
                              key={i}
                              className="rounded-full"
                              style={{
                                width: "30px",
                                height: "20px",
                                backgroundColor: "rgba(210, 180, 140, 0.8)",
                              }}
                              animate={{
                                y: [0, -10, 0],
                                rotate: [0, 5, 0],
                              }}
                              transition={{
                                duration: 3,
                                repeat: Infinity,
                                delay: i * 0.3,
                              }}
                            />
                          ))}
                        </div>
                        <Truck className="mx-auto w-12 h-12 text-green-300" />
                        <div className="mt-4 text-green-300 text-sm">
                          Shipping 5000+ MT annually
                        </div>
                      </motion.div>
                    )}
                    {activeTab === "pulses" && (
                      <motion.div
                        className="text-center"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                      >
                        <div className="flex justify-center space-x-2 mb-8">
                          {[...Array(5)].map((_, i) => (
                            <motion.div
                              key={i}
                              className="rounded"
                              style={{
                                width: "25px",
                                height: "15px",
                                backgroundColor: "rgba(160, 82, 45, 0.8)",
                              }}
                              animate={{
                                y: [0, -5, 0],
                              }}
                              transition={{
                                duration: 2,
                                repeat: Infinity,
                                delay: i * 0.2,
                              }}
                            />
                          ))}
                        </div>
                        <BarChart2 className="mx-auto w-12 h-12 text-green-300" />
                        <div className="mt-4 text-green-300 text-sm">
                          Meeting international quality standards
                        </div>
                      </motion.div>
                    )}
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

export default HeroExport;
