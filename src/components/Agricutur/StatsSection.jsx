import React from "react";

const StatsSection = () => {
  return (
    <div className="bg-white py-24">
      <div className="mx-auto px-4 container">
        <div className="gap-8 grid grid-cols-2 md:grid-cols-4 text-center">
          <div className="p-6">
            <div className="mb-3 font-bold text-green-600 text-5xl">15+</div>
            <div className="text-gray-600">Years Experience</div>
          </div>
          <div className="p-6">
            <div className="mb-3 font-bold text-green-600 text-5xl">200+</div>
            <div className="text-gray-600">Products Imported</div>
          </div>
          <div className="p-6">
            <div className="mb-3 font-bold text-green-600 text-5xl">50+</div>
            <div className="text-gray-600">Countries Sourced</div>
          </div>
          <div className="p-6">
            <div className="mb-3 font-bold text-green-600 text-5xl">24/7</div>
            <div className="text-gray-600">Support Available</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsSection;
