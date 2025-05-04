import React from "react";
import { motion } from "framer-motion";
import {
  FiTrendingUp,
  FiGlobe,
  FiDollarSign,
  FiUsers,
  FiBox,
} from "react-icons/fi";

const AfricaGrowthSection = () => {
  const benefits = [
    {
      icon: <FiTrendingUp className="text-2xl" />,
      title: "Economic Expansion",
      description:
        "Enabling 30% faster trade growth for African businesses through efficient logistics",
    },
    {
      icon: <FiGlobe className="text-2xl" />,
      title: "Global Integration",
      description:
        "Connecting Ethiopian manufacturers directly to international markets with 40% cost reduction",
    },
    {
      icon: <FiDollarSign className="text-2xl" />,
      title: "Cost Efficiency",
      description:
        "Reducing logistics costs from 50% to 30% of product value for African exporters",
    },
    {
      icon: <FiUsers className="text-2xl" />,
      title: "Job Creation",
      description:
        "Supporting 5,000+ new logistics-related jobs annually across East Africa",
    },
    {
      icon: <FiBox className="text-2xl" />,
      title: "Infrastructure Development",
      description:
        "Modernizing 15+ warehouses and ports in Ethiopia with smart tracking technology",
    },
  ];

  return (
    <div className="relative bg-gray-50 py-20 w-full overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="top-0 left-0 absolute w-full h-full [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_70%)]">
          <div className="absolute inset-0 bg-grid-blue-900/20"></div>
        </div>
      </div>
      <div className="-top-20 -right-20 absolute bg-blue-400/10 blur-3xl rounded-full w-96 h-96"></div>
      <div className="-bottom-20 -left-20 absolute bg-purple-400/10 blur-3xl rounded-full w-96 h-96"></div>

      <div className="relative mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-blue-600 text-sm uppercase tracking-widest">
            Pan-African Impact
          </h2>
          <h1 className="font-bold text-gray-900 text-3xl md:text-4xl">
            Powering <span className="text-blue-600">Africa's</span> Economic
            Renaissance
          </h1>
          <p className="mx-auto mt-4 max-w-3xl text-gray-600 text-lg">
            Our smart logistics platform is specifically designed to overcome
            Africa's infrastructure challenges and unlock unprecedented trade
            growth.
          </p>
        </motion.div>

        <div className="items-center gap-12 grid md:grid-cols-2">
          <div className="space-y-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start gap-5 bg-white shadow-xs hover:shadow-sm p-6 border border-gray-200 rounded-xl transition-shadow"
              >
                <div className="flex-shrink-0 bg-blue-50 p-3 rounded-lg text-blue-600">
                  {benefit.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 text-lg">
                    {benefit.title}
                  </h3>
                  <p className="mt-2 text-gray-600">{benefit.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-white shadow-sm p-8 border border-gray-200 rounded-xl">
              <h3 className="mb-4 font-semibold text-gray-900 text-xl">
                Ethiopia Growth Highlights
              </h3>

              <div className="space-y-6">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium text-gray-600 text-sm">
                      Export Volume Increase
                    </span>
                    <span className="font-bold text-blue-600 text-sm">
                      +45%
                    </span>
                  </div>
                  <div className="bg-gray-200 rounded-full w-full h-2">
                    <div
                      className="bg-blue-600 rounded-full h-2"
                      style={{ width: "45%" }}
                    ></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium text-gray-600 text-sm">
                      Transit Time Reduction
                    </span>
                    <span className="font-bold text-blue-600 text-sm">
                      -60%
                    </span>
                  </div>
                  <div className="bg-gray-200 rounded-full w-full h-2">
                    <div
                      className="bg-green-500 rounded-full h-2"
                      style={{ width: "60%" }}
                    ></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium text-gray-600 text-sm">
                      Customs Clearance Speed
                    </span>
                    <span className="font-bold text-blue-600 text-sm">
                      3.2x Faster
                    </span>
                  </div>
                  <div className="bg-gray-200 rounded-full w-full h-2">
                    <div
                      className="bg-purple-500 rounded-full h-2"
                      style={{ width: "75%" }}
                    ></div>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 mt-8 p-6 border border-blue-100 rounded-lg">
                <h4 className="mb-3 font-semibold text-blue-800">
                  Smart Logistics Features for Africa:
                </h4>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500">✓</span>
                    <span>Mobile-first tracking for low-bandwidth areas</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500">✓</span>
                    <span>
                      Multi-language support (Amharic, Swahili, French)
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500">✓</span>
                    <span>
                      Blockchain-based documentation for border crossings
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500">✓</span>
                    <span>
                      Local payment integration (M-Pesa, Telebirr, etc.)
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Floating map element */}
            <div className="-right-10 -bottom-10 -z-10 absolute opacity-20 w-64 h-64">
              <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <path
                  fill="#3B82F6"
                  d="M42.8,-59.9C54.6,-53.1,62.5,-39.2,68.6,-23.8C74.7,-8.4,79,8.5,74.1,21.4C69.2,34.3,55.1,43.1,40.2,52.9C25.3,62.7,9.6,73.4,-5.2,77.9C-20,82.4,-39.9,80.6,-53.1,69.3C-66.3,58,-72.7,37.1,-73.9,16.9C-75.1,-3.3,-71.1,-23.9,-60.7,-39.6C-50.3,-55.3,-33.6,-66.2,-17.4,-71.5C-1.3,-76.8,14.4,-76.6,42.8,-59.9Z"
                  transform="translate(100 100)"
                />
              </svg>
            </div>
          </motion.div>
        </div>

        {/* Partnership logos */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <h3 className="mb-8 text-gray-500 text-sm text-center uppercase tracking-widest">
            Trusted by African Institutions
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {[
              "Ethiopian Shipping & Logistics",
              "African Continental Free Trade Area",
              "East African Community",
              "Djibouti Port Authority",
              "Kenya Trade Network Agency",
            ].map((partner, index) => (
              <div
                key={index}
                className="bg-white shadow-xs p-4 px-6 border border-gray-200 rounded-lg font-medium text-gray-700"
              >
                {partner}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AfricaGrowthSection;
