import React from "react";

const HeroSection = ({ onExploreProducts, onContactTeam }) => {
  return (
    <div className="relative h-screen max-h-[800px] overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage:
            "url(https://camachem.com/pub/media/wysiwyg/Top_10_Chemicals_for_Agriculture_Industry.jpg)",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="absolute inset-0 bg-opacity-40"></div>
      </div>

      <div className="relative flex items-center h-full">
        <div className="mx-auto px-4 text-center container">
          <div className="inline-block bg-green-800 bg-opacity-90 mb-6 px-4 py-2 rounded-full">
            <span className="font-medium text-green-100 text-sm">
              Global Import Solutions
            </span>
          </div>
          <h1 className="mb-6 font-bold text-white text-5xl md:text-7xl leading-tight">
            Premium <span className="text-green-300">Agricultural</span>{" "}
            Chemicals
          </h1>
          <p className="mx-auto mb-10 max-w-3xl text-green-100 text-xl md:text-2xl">
            Sourcing the world's finest crop protection and nutrition products
            for your farming success
          </p>
          <div className="flex sm:flex-row flex-col justify-center gap-4">
            <button
              onClick={onExploreProducts}
              className="bg-green-600 hover:bg-green-700 shadow-lg px-10 py-4 rounded-lg font-medium text-white text-lg hover:scale-105 transition-all duration-300 transform"
            >
              Explore Products
            </button>
            <button
              onClick={onContactTeam}
              className="hover:bg-white px-10 py-4 border-2 border-white rounded-lg font-medium text-white hover:text-green-800 text-lg hover:scale-105 transition-all duration-300 transform"
            >
              Contact Import Team
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
