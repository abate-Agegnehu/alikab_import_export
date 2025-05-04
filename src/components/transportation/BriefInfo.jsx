import React, { useState } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "./tabs";
import myImage from "../../assets/carco.png";
import { motion, AnimatePresence } from "framer-motion";

const BriefInfo = () => {
  const [activeTab, setActiveTab] = useState("ship");
  const [hovered, setHovered] = useState(false);

  const transportData = {
    ship: {
      title: "Ocean Freight Solutions",
      desc: "Global shipping with competitive rates and reliable schedules",
      icon: "🛳️",
    },
    air: {
      title: "Air Cargo Express",
      desc: "Fastest delivery with our premium air freight services",
      icon: "✈️",
    },
    road: {
      title: "Overland Transport",
      desc: "Seamless road logistics with real-time tracking",
      icon: "🚛",
    },
  };

  return (
    <div className="relative bg-gradient-to-br from-[#0a162a] to-[#1a2d55] pt-20 w-full min-h-screen overflow-hidden text-white">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
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
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="bg-clip-text bg-gradient-to-r from-white to-blue-200 font-bold text-transparent text-4xl sm:text-5xl md:text-6xl leading-tight">
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Connecting Your Business
            </motion.span>
            <br />
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              To a World of
            </motion.span>{" "}
            <motion.span
              className="inline-block relative"
              onHoverStart={() => setHovered(true)}
              onHoverEnd={() => setHovered(false)}
            >
              <span className="z-10 relative">Possibilities</span>
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
            transition={{ delay: 0.6 }}
          >
            Revolutionizing logistics with cutting-edge technology and
            unparalleled service. We deliver more than packages - we deliver
            possibilities.
          </motion.p>

          <motion.div
            className="flex gap-4 mt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <button className="group relative bg-gradient-to-r from-blue-600 hover:from-blue-500 to-blue-500 hover:to-blue-400 shadow-lg hover:shadow-xl px-8 py-3 rounded-lg overflow-hidden font-semibold text-white transition-all duration-300">
              <span className="z-10 relative">Get Started</span>
              <span className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              <span className="absolute -inset-1 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></span>
            </button>

            <button className="group relative hover:bg-blue-900/30 px-8 py-3 border border-blue-400 rounded-lg overflow-hidden font-semibold text-blue-100 hover:text-white transition-all duration-300">
              <span className="z-10 relative">Learn More</span>
              <span className="absolute inset-0 bg-blue-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            </button>
          </motion.div>

          <div className="mt-12">
            <Tabs
              defaultValue="ship"
              onValueChange={(value) => setActiveTab(value)}
            >
              <TabsList className="flex flex-wrap sm:flex-nowrap space-x-2 bg-[#1e2e4d]/80 backdrop-blur-sm p-1 border border-blue-900/50 rounded-xl">
                {["ship", "air", "road"].map((tab) => (
                  <TabsTrigger
                    key={tab}
                    value={tab}
                    className={`relative px-4 py-2 rounded-lg font-medium text-sm transition-all duration-200 ${
                      activeTab === tab
                        ? "text-white bg-blue-600/90"
                        : "text-blue-200 hover:text-white hover:bg-blue-600/50"
                    }`}
                  >
                    {tab.charAt(0).toUpperCase() + tab.slice(1)} Transport
                    {activeTab === tab && (
                      <motion.span
                        layoutId="tabIndicator"
                        className="right-0 bottom-0 left-0 absolute bg-blue-300 h-0.5"
                        transition={{
                          type: "spring",
                          bounce: 0.2,
                          duration: 0.6,
                        }}
                      />
                    )}
                  </TabsTrigger>
                ))}
              </TabsList>

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="bg-[#1e2e4d]/50 backdrop-blur-sm mt-6 p-6 border border-blue-900/30 rounded-xl"
                >
                  <div className="flex items-start gap-4">
                    <div className="text-3xl">
                      {transportData[activeTab].icon}
                    </div>
                    <div>
                      <h3 className="font-bold text-blue-100 text-lg">
                        {transportData[activeTab].title}
                      </h3>
                      <p className="mt-1 text-blue-200 text-sm">
                        {transportData[activeTab].desc}
                      </p>
                    </div>
                  </div>

                  <div className="mt-6">
                    <p className="mb-2 font-semibold text-blue-100 text-sm tracking-wider">
                      DELIVERY DESTINATION
                    </p>
                    <div className="flex flex-wrap sm:flex-nowrap items-center gap-2 sm:gap-4">
                      <label className="flex items-center gap-2 bg-[#2a3b5f]/50 hover:bg-[#2a3b5f]/80 px-3 py-2 rounded-lg transition cursor-pointer">
                        <input
                          type="radio"
                          name="destination"
                          className="w-4 h-4 accent-blue-400"
                        />
                        <span className="text-blue-100 text-sm">
                          Port origin
                        </span>
                      </label>
                      <label className="flex items-center gap-2 bg-[#2a3b5f]/50 hover:bg-[#2a3b5f]/80 px-3 py-2 rounded-lg transition cursor-pointer">
                        <input
                          type="radio"
                          name="destination"
                          className="w-4 h-4 accent-blue-400"
                        />
                        <span className="text-blue-100 text-sm">
                          Port Destination
                        </span>
                      </label>
                      <button className="group relative bg-gradient-to-r from-blue-500 hover:from-blue-400 to-blue-600 hover:to-blue-500 shadow-md hover:shadow-lg ml-auto p-3 rounded-full overflow-hidden text-white transition-all duration-300">
                        <span className="z-10 relative">➤</span>
                        <span className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                      </button>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </Tabs>
          </div>
        </motion.div>

        <motion.div
          className="relative"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="z-10 relative flex justify-center items-center w-full h-full">
            <div className="relative w-full max-w-lg">
              <motion.img
                src={myImage}
                alt="Global Logistics"
                className="shadow-2xl border-4 border-blue-900/20 rounded-2xl w-full h-auto object-cover"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              />
              <motion.div
                className="-right-6 -bottom-6 z-20 absolute bg-gradient-to-br from-blue-600 to-blue-800 shadow-lg p-4 rounded-xl"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1, type: "spring" }}
              >
                <div className="font-bold text-white text-sm">
                  <div className="text-blue-200 text-xs">TRACKING ID</div>
                  <div>CARGO-2023-5A7B</div>
                </div>
              </motion.div>
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
          </div>
          <div className="-right-20 -bottom-20 absolute bg-blue-600/20 blur-3xl rounded-full w-64 h-64"></div>
          <div className="-top-20 -left-20 absolute bg-blue-400/20 blur-3xl rounded-full w-64 h-64"></div>
        </motion.div>
      </div>
    </div>
  );
};

export default BriefInfo;
