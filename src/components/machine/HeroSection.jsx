import React from "react";
import machinePhoto from "../../assets/images/machinePhoto.png";
const HeroSection = ({ onExplore, onContact }) => {
  return (
    <div className="relative h-screen max-h-[800px] overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: `url(${machinePhoto})`,
          backgroundAttachment: "fixed",
        }}
      >
        <div className="absolute inset-0 bg-opacity-40"></div>
      </div>

      <div className="relative flex items-center h-full">
        <div className="mx-auto px-4 text-center container">
          <h1 className="mb-6 font-bold text-white text-5xl md:text-7xl leading-tight">
            Industrial <span>Machinery</span> & Equipment
          </h1>
          <p className="mx-auto mb-10 max-w-3xl text-blue-100 text-xl md:text-2xl">
            Premium heavy equipment for construction, agriculture, and mining
            industries
          </p>
          <div className="flex sm:flex-row flex-col justify-center gap-4">
            <button
              onClick={onExplore}
              className="bg-blue-600 hover:bg-blue-700 shadow-lg hover:shadow-xl px-10 py-4 rounded-lg font-medium text-white text-lg hover:scale-105 transition-all duration-300 transform"
            >
              Explore Equipment
            </button>
            <button
              onClick={onContact}
              className="hover:bg-white px-10 py-4 border-2 border-white rounded-lg font-medium text-white hover:text-blue-800 text-lg hover:scale-105 transition-all duration-300 transform"
            >
              Contact Our Team
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
