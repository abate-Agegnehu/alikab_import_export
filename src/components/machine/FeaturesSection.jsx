import React from "react";
import { features } from "./data";

const FeatureCard = ({ title, description, icon }) => (
  <div className="bg-white shadow-md hover:shadow-xl p-8 rounded-xl transition-all hover:-translate-y-2 duration-300">
    <div className="mb-4 text-blue-600">
      <svg
        className="w-10 h-10"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d={icon}
        ></path>
      </svg>
    </div>
    <h3 className="mb-3 font-bold text-gray-800 text-xl">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const FeaturesSection = () => {
  return (
    <div className="bg-gray-100 py-24">
      <div className="mx-auto px-4 container">
        <div className="mb-16 text-center">
          <h2 className="mb-4 font-bold text-gray-900 text-4xl">
            <span className="text-blue-600">Why Choose</span> Our Equipment
          </h2>
          <div className="bg-gradient-to-r from-blue-400 to-blue-600 mx-auto mb-6 w-24 h-1"></div>
        </div>

        <div className="gap-8 grid grid-cols-1 md:grid-cols-3">
          {features.map((feature) => (
            <FeatureCard key={feature.id} {...feature} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;
