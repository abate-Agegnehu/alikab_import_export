import React from "react";

const CTASection = ({ onRequestQuote, onScheduleDemo }) => {
  return (
    <div className="relative bg-[#212a5e] py-32 overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
      </div>

      <div className="relative mx-auto px-4 text-center container">
        <h2 className="mb-6 font-bold text-white text-4xl">
          Ready to Upgrade Your Equipment?
        </h2>
        <p className="mx-auto mb-10 max-w-3xl text-blue-100 text-xl">
          Our specialists will help you find the perfect machinery solutions for
          your operational needs.
        </p>
        <div className="flex sm:flex-row flex-col justify-center gap-4">
          <button
            onClick={onRequestQuote}
            className="bg-white hover:bg-gray-100 shadow-lg hover:shadow-xl px-12 py-4 rounded-full font-medium text-blue-700 text-lg hover:scale-105 transition-all duration-300 transform"
          >
            Get Equipment Quote
          </button>
          <button
            onClick={onScheduleDemo}
            className="hover:bg-white px-12 py-4 border-2 border-white rounded-full font-medium text-white hover:text-blue-700 text-lg hover:scale-105 transition-all duration-300 transform"
          >
            <span className="flex justify-center items-center">
              <svg
                className="mr-2 w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                ></path>
              </svg>
              Schedule Demo
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CTASection;
