import React, { useState } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "./tabs";
import myImage from "../../assets/carco.png";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";

const BriefInfo = () => {
  const [hovered, setHovered] = useState(false);
  const navigate = useNavigate();

  const transportData = {
    road: {
      title: "Reliable Road Cargo Solutions",
      desc: "Fast and secure delivery across Ethiopia, Djibouti, and Africa using our own fleet of cargo vehicles.",
      icon: "🚛",
    },
  };

  return (
    <div className="relative bg-gradient-to-br from-[#0a162a] to-[#1a2d55] pt-20 w-full min-h-screen overflow-hidden text-white">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-blue-500 opacity-10 rounded-full"
            initial={{
              x: Math.random() * 100,
              y: Math.random() * 100,
              width: Math.random() * 300 + 100,
              height: Math.random() * 300 + 100,
            }}
            animate={{
              x: [null, Math.random() * 100],
              y: [null, Math.random() * 100],
            }}
            transition={{
              duration: Math.random() * 20 + 10,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        ))}
      </div>

      <div className="relative items-center gap-10 grid grid-cols-1 md:grid-cols-2 mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 max-w-7xl">
        {/* Left side - text */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="bg-clip-text bg-gradient-to-r from-white to-blue-200 font-bold text-transparent text-4xl sm:text-5xl md:text-6xl leading-tight">
            <motion.span>Delivering Cargo</motion.span>
            <br />
            <motion.span>Across Ethiopia</motion.span>{" "}
            <motion.span
              className="inline-block relative"
              onHoverStart={() => setHovered(true)}
              onHoverEnd={() => setHovered(false)}
            >
              <span className="z-10 relative text-white">And Beyond</span>
              <motion.span
                className="bottom-0 left-0 absolute bg-blue-400 w-full h-1"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: hovered ? 1 : 0 }}
                transition={{ type: "spring", stiffness: 300 }}
              />
            </motion.span>
          </h1>

          <motion.p
            className="mt-6 max-w-lg text-blue-100 text-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            We specialize in land cargo transport using our own fleet of cargo
            vehicles, operating throughout Ethiopia, Djibouti, and across
            Africa.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 mt-8" // Column on mobile, row on sm+
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <button
              className="group relative bg-gradient-to-r from-blue-600 hover:from-blue-500 to-blue-500 hover:to-blue-400 shadow-lg hover:shadow-xl px-8 py-3 rounded-lg font-semibold text-white transition-all duration-300"
              onClick={() => navigate("/vehicles")}
            >
              Book a Cargo Vehicle
            </button>

            <button
              className="group relative hover:bg-blue-900/30 px-8 py-3 border border-blue-400 rounded-lg font-semibold text-blue-100 hover:text-white transition-all duration-300"
              onClick={() => navigate("/about")}
            >
              Learn More
            </button>
          </motion.div>

          <div className="mt-12">
            <Tabs defaultValue="road">
              <TabsList className="flex bg-[#1e2e4d]/80 backdrop-blur-sm p-1 border border-blue-900/50 rounded-xl">
                <TabsTrigger
                  value="road"
                  className="relative bg-blue-600/90 px-4 py-2 rounded-lg font-medium text-white text-sm transition-all duration-200"
                >
                  Cargo Transport
                </TabsTrigger>
              </TabsList>

              <AnimatePresence mode="wait">
                <motion.div
                  key="road"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="bg-[#1e2e4d]/50 backdrop-blur-sm mt-6 p-6 border border-blue-900/30 rounded-xl"
                >
                  <div className="flex items-start gap-4">
                    <div className="text-3xl">{transportData.road.icon}</div>
                    <div>
                      <h3 className="font-bold text-blue-100 text-lg">
                        {transportData.road.title}
                      </h3>
                      <p className="mt-1 text-blue-200 text-sm">
                        {transportData.road.desc}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </Tabs>
          </div>
        </motion.div>

        {/* Right side - image & stats */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="relative w-full max-w-lg">
            <motion.img
              src={myImage}
              alt="Cargo Transport"
              className="shadow-2xl border-4 border-blue-900/20 rounded-2xl w-full h-auto object-cover"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            />

            {/* Bottom-right stat */}
            <motion.div
              className="-right-6 -bottom-6 z-20 absolute bg-gradient-to-br from-blue-600 to-blue-800 shadow-lg p-4 rounded-xl"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1, type: "spring" }}
            >
              <div className="font-bold text-white text-sm">
                <div className="text-blue-200 text-xs">TRACKING ID</div>
                <div>ET-671221</div>
              </div>
            </motion.div>

            {/* Top-left stat */}
            <motion.div
              className="-top-6 -left-6 z-20 absolute bg-white shadow-lg p-3 rounded-xl"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, type: "spring" }}
            >
              <div className="font-bold text-blue-900 text-sm">
                <div className="text-gray-500 text-xs">ON TIME</div>
                <div className="flex items-center gap-1">
                  <span className="text-green-500">✓</span> 98.7% Success Rate
                </div>
              </div>
            </motion.div>
          </div>

          <div className="-right-20 -bottom-20 absolute bg-blue-600/20 blur-3xl rounded-full w-64 h-64"></div>
          <div className="-top-20 -left-20 absolute bg-blue-400/20 blur-3xl rounded-full w-64 h-64"></div>
        </motion.div>
      </div>
    </div>
  );
};

export default BriefInfo;
