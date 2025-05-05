import React from "react";

const FeaturedProducts = ({ products, onRequestSpecifications }) => {
  return (
    <div className="bg-gray-100 py-24">
      <div className="mx-auto px-4 container">
        <div className="mb-20 text-center">
          <h2 className="mb-4 font-bold text-gray-900 text-4xl">
            Featured <span className="text-green-600">Products</span>
          </h2>
          <div className="bg-gradient-to-r from-green-400 to-green-600 mx-auto mb-6 w-24 h-1"></div>
          <p className="mx-auto max-w-3xl text-gray-600 text-xl">
            Our most requested agricultural chemical imports
          </p>
        </div>

        <div className="gap-8 grid grid-cols-1 lg:grid-cols-3">
          {products.map((product) => (
            <div
              key={product.id}
              className="group relative rounded-3xl h-[500px] overflow-hidden"
            >
              <img
                src={product.image}
                alt={product.name}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black to-transparent opacity-70"></div>

              <div className="right-0 bottom-0 left-0 absolute p-8 text-white transition-transform translate-y-20 group-hover:translate-y-0 duration-500 transform">
                <h3 className="mb-1 font-bold text-2xl">{product.name}</h3>
                <p className="mb-4 font-medium text-green-300">
                  {product.type}
                </p>

                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
                  <ul className="space-y-2 mb-6">
                    {product.features.map((feature, i) => (
                      <li key={i} className="flex items-center">
                        <svg
                          className="mr-2 w-4 h-4 text-green-400"
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
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button
                    onClick={() => onRequestSpecifications(product)}
                    className="flex items-center bg-green-600 hover:bg-green-700 px-6 py-2 rounded-full font-medium text-white transition-colors duration-300"
                  >
                    Request Specifications
                    <svg
                      className="ml-2 w-4 h-4"
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
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedProducts;
