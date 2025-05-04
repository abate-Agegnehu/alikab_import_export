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

  // Auto-scroll functionality
  useEffect(() => {
    if (!autoScroll) return;

    const scrollNext = () => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
      timeoutRef.current = setTimeout(scrollNext, 5000); // 5 seconds interval
    };

    timeoutRef.current = setTimeout(scrollNext, 5000);

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [currentIndex, autoScroll, testimonials.length]);

  // Navigation controls
  const goToPrev = () => {
    const newIndex =
      (currentIndex - 1 + testimonials.length) % testimonials.length;
    setCurrentIndex(newIndex);
    setAutoScroll(false);
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = setTimeout(() => setAutoScroll(true), 10000);
  };

  const goToNext = () => {
    const newIndex = (currentIndex + 1) % testimonials.length;
    setCurrentIndex(newIndex);
    setAutoScroll(false);
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = setTimeout(() => setAutoScroll(true), 10000);
  };

  return (
    <div className="relative w-full min-h-screen overflow-hidden bg-[#212a5e]">
      {/* Dynamic Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-opacity duration-1000"
        style={{
          backgroundImage: testimonials[currentIndex].bgImage,
          opacity: 0.8,
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-[#212a5e] bg-opacity-60"></div>
      </div>

      <div className="z-10 relative flex flex-col justify-center items-center py-20 min-h-screen">
        {/* Header */}
        <div className="mb-8 md:mb-12 text-center">
          <h2 className="mb-2 font-semibold text-blue-400 text-sm uppercase tracking-wider">
            Testimonials
          </h2>
          <h1 className="font-bold text-white text-3xl sm:text-4xl md:text-5xl">
            What Our Clients Say
          </h1>
          <p className="mx-auto mt-4 max-w-3xl text-gray-300 text-lg">
            Trusted by businesses across continents for reliable import/export
            solutions.
          </p>
        </div>

        {/* Testimonial Content */}
        <div className="px-4 w-full max-w-4xl">
          <div className="text-center">
            <svg
              className="mx-auto mb-6 w-12 h-12 text-blue-400"
              fill="currentColor"
              viewBox="0 0 32 32"
            >
              <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
            </svg>
            <p className="mb-8 text-white text-xl md:text-2xl leading-relaxed">
              "{testimonials[currentIndex].quote}"
            </p>
            <div className="flex justify-center items-center">
              <img
                className="border-2 border-blue-400 rounded-full w-14 h-14 object-cover"
                src={testimonials[currentIndex].avatar}
                alt={testimonials[currentIndex].name}
              />
              <div className="ml-4 text-left">
                <p className="font-semibold text-white text-lg">
                  {testimonials[currentIndex].name}
                </p>
                <p className="text-gray-300">
                  {testimonials[currentIndex].role}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Controls */}
        <div className="flex justify-between mt-12 px-4 w-full max-w-4xl">
          <button
            onClick={goToPrev}
            className="bg-white bg-opacity-20 hover:bg-opacity-30 p-3 rounded-full text-white transition"
            aria-label="Previous testimonial"
          >
            <svg
              className="w-6 h-6"
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
          <div className="flex items-center space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentIndex(index);
                  setAutoScroll(false);
                  if (timeoutRef.current) {
                    clearTimeout(timeoutRef.current);
                  }
                  timeoutRef.current = setTimeout(
                    () => setAutoScroll(true),
                    10000
                  );
                }}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentIndex
                    ? "bg-white w-6"
                    : "bg-white bg-opacity-40 hover:bg-opacity-60"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          <button
            onClick={goToNext}
            className="bg-white bg-opacity-20 hover:bg-opacity-30 p-3 rounded-full text-white transition"
            aria-label="Next testimonial"
          >
            <svg
              className="w-6 h-6"
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
  );
};

export default Testimonials;
