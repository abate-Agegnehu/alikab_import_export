import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Hero = ({ slides, onCtaClick }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(1);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setDirection(1);
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 8000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const goToSlide = (index) => {
    setDirection(index > currentSlide ? 1 : -1);
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setDirection(1);
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleCtaClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (onCtaClick) onCtaClick();
    navigate("/about");
  };

  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Background Slide */}
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={currentSlide}
          custom={direction}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="z-0 absolute inset-0 w-full h-full"
        >
          <div className="relative w-full h-full">
            <img
              src={slides[currentSlide].backgroundImage}
              alt={slides[currentSlide].title}
              className="w-full h-full object-center object-cover"
            />
            <div className="absolute inset-0 bg-black/40"></div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Foreground Content */}
      <div className="z-10 absolute inset-0 flex flex-col justify-center items-center px-4 sm:px-6 text-center pointer-events-none">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="max-w-4xl text-white pointer-events-auto"
          >
            <motion.h1
              className="mb-4 font-bold text-3xl sm:text-5xl lg:text-6xl leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              {slides[currentSlide].title}
            </motion.h1>

            <div className="space-y-2 px-4 sm:px-0 text-white text-base sm:text-xl">
              {slides[currentSlide].description.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <button
                onClick={handleCtaClick}
                className="z-50 bg-[#212A5E] hover:bg-blue-700 shadow-lg mt-6 px-8 py-3 rounded-full font-semibold text-lg hover:scale-105 transition-transform"
              >
                Learn More
              </button>
            </motion.div>
          </motion.div>
        </AnimatePresence>

        {/* Slide Indicators */}
        <div className="bottom-6 flex justify-center space-x-3 mt-6 sm:mt-8 pointer-events-auto">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? "bg-[#212A5E] w-8 shadow-md"
                  : "bg-white bg-opacity-30 hover:bg-opacity-50"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Navigation Arrows */}
      <div className="sm:top-1/2 bottom-4 left-1/2 z-30 absolute flex sm:justify-between space-x-6 sm:space-x-0 sm:px-6 sm:w-full -translate-x-1/2 sm:-translate-y-1/2 pointer-events-none transform">
        <button
          onClick={prevSlide}
          className="bg-transparent p-2 sm:p-3 rounded-full hover:scale-110 transition-transform pointer-events-auto"
          aria-label="Previous slide"
        >
          <svg
            className="w-6 sm:w-8 h-6 sm:h-8 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        <button
          onClick={nextSlide}
          className="bg-transparent p-2 sm:p-3 rounded-full hover:scale-110 transition-transform pointer-events-auto"
          aria-label="Next slide"
        >
          <svg
            className="w-6 sm:w-8 h-6 sm:h-8 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
    </section>
  );
};

Hero.propTypes = {
  slides: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.arrayOf(PropTypes.string).isRequired,
      backgroundImage: PropTypes.string.isRequired,
    })
  ).isRequired,
  onCtaClick: PropTypes.func,
};

Hero.defaultProps = {
  onCtaClick: () => {},
};

export default Hero;
