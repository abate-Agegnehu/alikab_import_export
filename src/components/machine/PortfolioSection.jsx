import React from "react";
import { machineryCategories } from "./data";

const PortfolioSection = ({ onExplore, onCategoryClick, onScheduleDemo }) => {
  return (
    <div className="mx-auto px-4 py-24 container">
      <div className="mb-20 text-center">
        <h2 className="mb-4 font-bold text-gray-900 text-4xl">
          Our <span className="text-blue-600">Machinery</span> Portfolio
        </h2>
        <div className="bg-gradient-to-r from-blue-400 to-blue-600 mx-auto mb-6 w-24 h-1"></div>
        <p className="mx-auto max-w-3xl text-gray-600 text-xl">
          High-performance equipment for industrial applications
        </p>
      </div>

      <div className="gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {machineryCategories.map((category) => (
          <div
            key={category.id}
            className="group relative shadow-lg hover:shadow-2xl rounded-xl h-96 overflow-hidden transition-all duration-500"
          >
            <img
              src={category.image}
              alt={category.name}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-70"></div>

            <div className="top-4 right-4 z-10 absolute bg-blue-600 px-3 py-1 rounded-full font-bold text-white text-xs">
              {category.stats}
            </div>

            <div className="absolute inset-0 flex items-end p-6 transition-all translate-y-20 group-hover:translate-y-0 duration-500 transform">
              <div className="w-full">
                <div className="bg-white bg-opacity-90 opacity-0 group-hover:opacity-100 shadow-lg backdrop-blur-sm p-6 rounded-lg transition-all duration-500 transform">
                  <h3 className="mb-2 font-bold text-gray-800 text-2xl">
                    {category.name}
                  </h3>
                  <p className="mb-4 text-gray-600">{category.description}</p>

                  <div className="mb-4 max-h-0 group-hover:max-h-96 overflow-hidden transition-all duration-500">
                    <h4 className="mb-2 font-semibold text-blue-600">
                      Key Features:
                    </h4>
                    <ul className="space-y-2 text-blue-600 text-sm">
                      {category.features.map((feature, i) => (
                        <li key={i} className="flex items-start">
                          <svg
                            className="flex-shrink-0 mt-0.5 mr-2 w-4 h-4 text-blue-500"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M5 13l4 4L19 7"
                            ></path>
                          </svg>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex justify-between items-center">
                    <button
                      onClick={() =>
                        onCategoryClick(category.name, category.id)
                      }
                      className="flex items-center font-medium text-blue-600 hover:text-blue-800"
                    >
                      View Details
                      <svg
                        className="ml-1 w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        ></path>
                      </svg>
                    </button>
                    <button
                      onClick={() => onScheduleDemo(category.name)}
                      className="bg-blue-600 hover:bg-blue-700 shadow-md hover:shadow-lg px-4 py-2 rounded-lg font-medium text-white transition-colors duration-300"
                    >
                      Demo
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <button
          onClick={onExplore}
          className="inline-flex items-center bg-blue-600 hover:bg-blue-700 shadow-sm px-8 py-4 border border-transparent rounded-full font-medium text-white text-lg hover:scale-105 transition-all duration-300 transform"
        >
          View Full Portfolio
          <svg
            className="-mr-1 ml-3 w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default PortfolioSection;
