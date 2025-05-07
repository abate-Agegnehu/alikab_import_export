import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Coffee, Sprout, Truck, Globe, BarChart2 } from "lucide-react";
import imgHero from "../../assets/Coffee.png";
import coffeeSeed from "../../assets/images/coffee-seed.jpg";
import sesameSeed from "../../assets/images/sesame-seed.jpg";
import beansSeed from "../../assets/images/bean-seed.jpg";

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

  return (
    <div
      className="relative w-full min-h-screen overflow-hidden text-white"
      onMouseMove={handleMouseMove}
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={imgHero}
          alt="Agricultural background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60" /> {/* Dark overlay */}
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
      <div className="z-10 relative flex md:flex-row flex-col justify-center items-center mx-auto mt-10 px-6 py-24 container">
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
          <div className="relative bg-green-950/40 shadow-xl backdrop-blur-lg p-8 border border-green-800/50 rounded-3xl overflow-hidden">
            {/* Product tabs */}
            <div className="flex bg-green-800/30 shadow-inner mx-auto mb-10 p-1 rounded-full max-w-lg">
              {Object.keys(products).map((key) => (
                <button
                  key={key}
                  className={`flex-1 py-2 px-4 rounded-full text-sm font-semibold transition-all duration-300 ${
                    activeTab === key
                      ? "bg-green-600 text-white shadow-md"
                      : "text-green-100 hover:text-white hover:bg-green-700/30"
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
                transition={{ duration: 0.4 }}
                className="space-y-6"
              >
                <div className="flex items-start">
                  <div className="bg-green-600/40 shadow-md mr-4 p-3 rounded-xl">
                    {products[activeTab].icon}
                  </div>
                  <div>
                    <h3 className="mb-1 font-bold text-white text-2xl">
                      {products[activeTab].title}
                    </h3>
                    <p className="text-green-200 text-sm leading-relaxed">
                      {products[activeTab].description}
                    </p>
                  </div>
                </div>

                {/* Product visualization */}
                <div className="relative bg-green-800/30 shadow-lg rounded-2xl h-64 overflow-hidden">
                  <div className="absolute inset-0">
                    {/* Coffee */}
                    {activeTab === "coffee" && (
                      <motion.div
                        className="w-full h-full"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                      >
                        <img
                          src={coffeeSeed}
                          alt="Coffee Export"
                          className="w-full h-full object-cover"
                        />
                      </motion.div>
                    )}

                    {/* Oilseeds */}
                    {activeTab === "oilseeds" && (
                      <motion.div
                        className="w-full h-full"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                      >
                        <img
                          src={sesameSeed}
                          alt="Oilseed Export"
                          className="w-full h-full object-cover"
                        />
                      </motion.div>
                    )}

                    {/* Pulses */}
                    {activeTab === "pulses" && (
                      <motion.div
                        className="w-full h-full"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                      >
                        <img
                          src={beansSeed}
                          alt="Pulse Export"
                          className="w-full h-full object-cover"
                        />
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
