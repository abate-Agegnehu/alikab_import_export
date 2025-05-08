import React, { useState, useEffect, useRef } from "react";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      quote:
        "Alikab International's logistics expertise transformed our export operations. Their end-to-end solutions saved us 30% in shipping costs.",
      name: "Albert Flores",
      role: "CEO, Mega Industrial",
      avatar:
        "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=200&q=80",
      bgImage:
        "url('https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80')",
    },
    {
      id: 2,
      quote:
        "Our agricultural exports doubled within a year thanks to Alikab's market connections and documentation support.",
      name: "Sarah Johnson",
      role: "Export Manager, Green Farms",
      avatar:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80",
      bgImage:
        "url('https://images.unsplash.com/photo-1607623488994-04f1a6c6fd5e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80')",
    },
    {
      id: 3,
      quote:
        "Reliable customs clearance and real-time tracking made our imports from China completely stress-free.",
      name: "Michael Chen",
      role: "Procurement Director, Global Trade",
      avatar:
        "https://images.unsplash.com/photo-1566492031773-4f4e44671857?w=200&q=80",
      bgImage:
        "url('https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80')",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoScroll, setAutoScroll] = useState(true);
  const timeoutRef = useRef(null);

  useEffect(() => {
    if (!autoScroll) return;

    const scrollNext = () => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
      timeoutRef.current = setTimeout(scrollNext, 5000);
    };

    timeoutRef.current = setTimeout(scrollNext, 5000);

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [currentIndex, autoScroll, testimonials.length]);

  const goToPrev = () => {
    const newIndex =
      (currentIndex - 1 + testimonials.length) % testimonials.length;
    setCurrentIndex(newIndex);
    setAutoScroll(false);
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => setAutoScroll(true), 10000);
  };

  const goToNext = () => {
    const newIndex = (currentIndex + 1) % testimonials.length;
    setCurrentIndex(newIndex);
    setAutoScroll(false);
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => setAutoScroll(true), 10000);
  };

  return (
    <div className="bg-[#F9F9F9] pb-6 sm:pb-16">
      <div className="relative bg-[#212a5e] rounded-2xl w-full min-h-[80vh] sm:min-h-screen overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center transition-opacity duration-1000"
          style={{
            backgroundImage: testimonials[currentIndex].bgImage,
            opacity: 0.8,
          }}
        >
          <div className="absolute inset-0 bg-[#212a5e] bg-opacity-60"></div>
        </div>

        <div className="z-10 relative flex flex-col justify-center items-center px-4 sm:px-8 py-10 sm:py-16 md:py-20 min-h-[80vh] sm:min-h-screen">
          {/* Header */}
          <div className="mb-6 sm:mb-10 max-w-xl text-center">
            <h2 className="mb-2 font-semibold text-blue-400 text-xs sm:text-sm uppercase tracking-wider">
              Testimonials
            </h2>
            <h1 className="font-bold text-white text-2xl sm:text-3xl md:text-5xl leading-tight">
              What Our Clients Say
            </h1>
            <p className="mt-3 sm:mt-4 text-gray-300 text-sm sm:text-base md:text-lg">
              Trusted by businesses across continents for reliable import/export
              solutions.
            </p>
          </div>

          {/* Testimonial Content */}
          <div className="px-2 sm:px-4 w-full max-w-3xl text-center">
            <svg
              className="mx-auto mb-5 sm:mb-6 w-10 sm:w-12 h-10 sm:h-12 text-blue-400"
              fill="currentColor"
              viewBox="0 0 32 32"
            >
              <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
            </svg>
            <p className="mb-6 text-white text-base sm:text-xl md:text-2xl leading-relaxed">
              "{testimonials[currentIndex].quote}"
            </p>
            <div className="flex justify-center items-center gap-4">
              <img
                className="border-2 border-blue-400 rounded-full w-12 sm:w-14 h-12 sm:h-14 object-cover"
                src={testimonials[currentIndex].avatar}
                alt={testimonials[currentIndex].name}
              />
              <div className="text-left">
                <p className="font-semibold text-white text-sm sm:text-base md:text-lg">
                  {testimonials[currentIndex].name}
                </p>
                <p className="text-gray-300 text-xs sm:text-sm">
                  {testimonials[currentIndex].role}
                </p>
              </div>
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex justify-between items-center mt-10 sm:mt-12 px-4 w-full max-w-4xl">
            <button
              onClick={goToPrev}
              className="bg-white bg-opacity-20 hover:bg-opacity-30 p-2 sm:p-3 rounded-full text-white transition"
              aria-label="Previous testimonial"
            >
              <svg
                className="w-5 sm:w-6 h-5 sm:h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            {/* Pagination Dots */}
            <div className="flex items-center space-x-1 sm:space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setCurrentIndex(index);
                    setAutoScroll(false);
                    if (timeoutRef.current) clearTimeout(timeoutRef.current);
                    timeoutRef.current = setTimeout(
                      () => setAutoScroll(true),
                      10000
                    );
                  }}
                  className={`h-2 sm:h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? "bg-white w-4 sm:w-6"
                      : "bg-white bg-opacity-40 hover:bg-opacity-60 w-2 sm:w-3"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={goToNext}
              className="bg-white bg-opacity-20 hover:bg-opacity-30 p-2 sm:p-3 rounded-full text-white transition"
              aria-label="Next testimonial"
            >
              <svg
                className="w-5 sm:w-6 h-5 sm:h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
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
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
