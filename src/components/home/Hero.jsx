import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Hero = ({ slides, onCtaClick }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();
  const intervalRef = useRef();
  const heroRef = useRef();

  // Intersection Observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.1 }
    );
    if (heroRef.current) observer.observe(heroRef.current);
    return () => observer.disconnect();
  }, []);

  // Auto-rotation with pause on hover
  useEffect(() => {
    if (isVisible && !isHovered) {
      intervalRef.current = setInterval(() => {
        setDirection(1);
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }, 8000);
    }
    return () => clearInterval(intervalRef.current);
  }, [isVisible, isHovered, slides.length]);

  const goToSlide = (index) => {
    setDirection(index > currentSlide ? 1 : -1);
    setCurrentSlide(index);
    resetInterval();
  };

  const nextSlide = () => {
    setDirection(1);
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    resetInterval();
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    resetInterval();
  };

  const resetInterval = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setDirection(1);
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 8000);
  };

  const handleCtaClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (onCtaClick) onCtaClick();
    navigate("/about");
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowRight") nextSlide();
      if (e.key === "ArrowLeft") prevSlide();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentSlide]);

  // Preload images
  useEffect(() => {
    slides.forEach((slide) => {
      const img = new Image();
      img.src = slide.backgroundImage;
    });
  }, [slides]);

  return (
    <section
      ref={heroRef}
      className="relative w-full h-screen overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      aria-label="Image carousel"
    >
      {/* Background Slide with Parallax Effect */}
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={currentSlide}
          custom={direction}
          initial={{ opacity: 0, x: direction * 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -direction * 100 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="z-0 absolute inset-0 w-full h-full"
        >
          <div className="relative w-full h-full">
            <motion.img
              src={slides[currentSlide].backgroundImage}
              alt={slides[currentSlide].title}
              className="w-full h-full object-center object-cover"
              initial={{ scale: 1.1 }}
              animate={{ scale: 1 }}
              transition={{ duration: 8, ease: "linear" }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/30"></div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Foreground Content */}
      <div className="z-10 absolute inset-0 flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 text-center pointer-events-none">
        <AnimatePresence mode="wait">
          <motion.div
            key={`content-${currentSlide}`}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.8, ease: "easeInOut", delay: 0.2 }}
            className="mx-auto max-w-4xl text-white pointer-events-auto"
          >
            <motion.h1
              className="mb-4 font-bold text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-tight tracking-tight"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              {slides[currentSlide].title}
            </motion.h1>

            <motion.div
              className="space-y-3 mx-auto px-4 sm:px-0 max-w-3xl text-white text-lg sm:text-xl lg:text-2xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              {slides[currentSlide].description.map((paragraph, index) => (
                <p key={index} className="leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="mt-8"
            >
              <button
                onClick={handleCtaClick}
                className="group z-50 relative bg-[#212A5E] hover:bg-blue-700 shadow-lg px-10 py-4 rounded-full font-semibold text-lg lg:text-xl hover:scale-105 transition-all duration-300"
                aria-label="Learn more about our services"
              >
                <span className="z-10 relative">
                  {slides[currentSlide].ctaText || "Learn More"}
                </span>
                <span className="absolute inset-0 bg-blue-600 opacity-0 group-hover:opacity-100 rounded-full transition-opacity duration-300"></span>
              </button>
            </motion.div>
          </motion.div>
        </AnimatePresence>

        {/* Slide Indicators */}
        <div className="bottom-4 absolute flex justify-center space-x-3 pointer-events-auto">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white ${
                index === currentSlide
                  ? "bg-white w-6 shadow-md"
                  : "bg-white/30 hover:bg-white/50"
              }`}
              aria-label={`Go to slide ${index + 1}`}
              aria-current={index === currentSlide}
            />
          ))}
        </div>
      </div>

      {/* Navigation Arrows */}
      <div className="hidden top-1/2 right-0 left-0 z-30 absolute sm:flex justify-between px-6 w-full -translate-y-1/2 pointer-events-none">
        <motion.button
          onClick={prevSlide}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="bg-black/30 hover:bg-black/50 backdrop-blur-sm p-3 rounded-full transition-all pointer-events-auto"
          aria-label="Previous slide"
        >
          <svg
            className="w-8 h-8 text-white"
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
        </motion.button>

        <motion.button
          onClick={nextSlide}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="bg-black/30 hover:bg-black/50 backdrop-blur-sm p-3 rounded-full transition-all pointer-events-auto"
          aria-label="Next slide"
        >
          <svg
            className="w-8 h-8 text-white"
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
        </motion.button>
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
      ctaText: PropTypes.string,
    })
  ).isRequired,
  onCtaClick: PropTypes.func,
};

Hero.defaultProps = {
  onCtaClick: () => {},
};

export default Hero;
