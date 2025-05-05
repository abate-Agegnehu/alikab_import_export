import React from "react";

const ChemicalPortfolio = ({ categories, onViewProductRange }) => {
  return (
    <div className="mx-auto px-4 py-24 container">
      <div className="mb-20 text-center">
        <h2 className="mb-4 font-bold text-gray-900 text-4xl">
          Our Chemical <span className="text-green-600">Portfolio</span>
        </h2>
        <div className="bg-gradient-to-r from-green-400 to-green-600 mx-auto mb-6 w-24 h-1"></div>
        <p className="mx-auto max-w-3xl text-gray-600 text-xl">
          Carefully selected imports meeting the highest international standards
          for agricultural production
        </p>
      </div>

      <div className="space-y-32">
        {categories.map((category, index) => (
          <div key={category.id} className="relative">
            <div
              className={`relative h-[500px] rounded-3xl overflow-hidden ${
                index % 2 === 0 ? "ml-0" : "ml-auto"
              } w-full lg:w-11/12`}
            >
              <img
                src={category.image}
                alt={category.name}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black to-transparent opacity-70"></div>

              <div
                className={`absolute ${
                  index % 2 === 0 ? "left-10" : "right-10"
                } bottom-10 text-white max-w-md`}
              >
                <div className="inline-block bg-green-600 mb-3 px-3 py-1 rounded-full font-bold text-xs">
                  {category.stats}
                </div>
                <h3 className="mb-4 font-bold text-3xl">{category.name}</h3>
                <p className="mb-6">{category.description}</p>
                <button
                  onClick={() => onViewProductRange(category)}
                  className="flex items-center text-white hover:text-green-300 transition-colors duration-300"
                >
                  View Product Range
                  <svg
                    className="ml-2 w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    ></path>
                  </svg>
                </button>
              </div>

              <div
                className={`absolute ${
                  index % 2 === 0 ? "right-10 -bottom-10" : "left-10 -bottom-10"
                } bg-white p-8 rounded-2xl shadow-2xl max-w-sm`}
              >
                <h4 className="mb-3 font-bold text-gray-800 text-xl">
                  Key Benefits
                </h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <svg
                      className="flex-shrink-0 mt-0.5 mr-2 w-5 h-5 text-green-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                    <span className="text-green-500">
                      Certified organic options available
                    </span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="flex-shrink-0 mt-0.5 mr-2 w-5 h-5 text-green-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                    <span className="text-green-500">
                      Bulk and retail packaging
                    </span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="flex-shrink-0 mt-0.5 mr-2 w-5 h-5 text-green-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                    <span className="text-green-500">
                      Technical support included
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChemicalPortfolio;
