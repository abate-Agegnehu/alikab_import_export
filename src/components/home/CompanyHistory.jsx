import React from "react";

const CompanyHistory = () => {
  return (
    <div className="bg-gray-100 px-4 sm:px-6 lg:px-8 py-12 min-h-screen">
      <div className="mx-auto max-w-6xl">
        {/* Main container with image and content */}
        <div className="bg-white shadow-lg rounded-xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[700px]">
            {/* Left Column - Image with bottom section */}
            <div className="flex flex-col">
              {/* Top Image Section - Now full height with padding removed */}
              <div className="flex flex-grow justify-center items-center bg-blue-50">
                <img
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
                  alt="Ethiopian products"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Bottom Dark Section */}
              <div className="bg-[#212a5e] p-8 text-white">
                <h2 className="mb-4 font-semibold text-2xl">
                  Alikab International Trading PLC
                </h2>
                <p className="mb-6 text-gray-300 leading-relaxed">
                  We are a trading company based in Addis Ababa, Ethiopia,
                  exporting Ethiopia's finest products worldwide.
                </p>

                <div className="mb-6">
                  <h3 className="mb-3 font-medium text-gray-200 text-lg">
                    Our Products:
                  </h3>
                  <ul className="gap-3 grid grid-cols-2">
                    <li className="flex items-center">
                      <span className="bg-blue-400 mr-2 rounded-full w-2 h-2"></span>
                      <span className="text-gray-300">Coffee</span>
                    </li>
                    <li className="flex items-center">
                      <span className="bg-blue-400 mr-2 rounded-full w-2 h-2"></span>
                      <span className="text-gray-300">Mung Beans</span>
                    </li>
                    <li className="flex items-center">
                      <span className="bg-blue-400 mr-2 rounded-full w-2 h-2"></span>
                      <span className="text-gray-300">Sesame</span>
                    </li>
                    <li className="flex items-center">
                      <span className="bg-blue-400 mr-2 rounded-full w-2 h-2"></span>
                      <span className="text-gray-300">Live Animals</span>
                    </li>
                    <li className="flex items-center">
                      <span className="bg-blue-400 mr-2 rounded-full w-2 h-2"></span>
                      <span className="text-gray-300">Meat Products</span>
                    </li>
                  </ul>
                </div>

                <button className="bg-yellow-600 hover:bg-yellow-800 px-6 py-3 rounded-lg w-100 font-medium text-white transition duration-300">
                  Learn More About Our Products
                </button>
              </div>
            </div>

            {/* Right Column - Our History */}
            <div className="flex flex-col p-8">
              <div className="mb-8 text-center">
                <h1 className="font-bold text-gray-800 text-4xl">
                  Brief History
                </h1>
                <h2 className="pt-1 font-bold text-yellow-600 text-4xl leading-3">
                  ...
                </h2>
              </div>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Alikab International Trading Private Limited Company took its
                  name from a great merchant from the ancient Kingdom of Axum
                  (Ethiopia). As one of Ethiopia's thriving trading companies,
                  Alikab has been providing both local and international
                  customers with satisfying services. The company has
                  established several sister companies including Amante
                  Construction Works, Melens PLC, Demera Hotel and Tour PLC, and
                  Kibrom G/Glorgis Transport Service. Over the years, Alikab has
                  grown to become one of the most prominent private trading
                  companies in Ethiopia. Our journey began with a vision to
                  connect Ethiopia's rich resources with global markets while
                  maintaining high standards of quality. We've faced numerous
                  challenges but have always remained committed to our core
                  values of honesty and reliability. In the early years, we
                  focused on domestic trade, building strong relationships with
                  local producers across Ethiopia. As we gained experience, we
                  expanded to international markets, introducing Ethiopian
                  products worldwide. Our success is built on the dedication of
                  our team members who ensure product quality.
                </p>
                <p>
                  We take pride in contributing to Ethiopia's economic growth
                  through employment and local support. Innovation has always
                  been at the heart of our operations as we seek better ways to
                  serve customers. Today, we stand as a bridge between
                  Ethiopia's agricultural heritage and the global marketplace.
                  Our sustainable business practices help preserve Ethiopia's
                  natural resources. Alikab's story is one of perseverance,
                  innovation, and commitment to excellence.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyHistory;
