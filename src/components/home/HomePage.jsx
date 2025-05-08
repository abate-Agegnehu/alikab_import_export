import React from "react";
import Hero from "./Hero";
import { HERO_SLIDES } from "../../constants/constants";

const HomePage = () => {
  const handleCtaClick = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Hero Section with responsive container */}
      <div className="relative overflow-hidden">
        <Hero
          slides={HERO_SLIDES}
          onCtaClick={handleCtaClick}
          className="hero-section"
        />
      </div>

      {/* Content Area */}
      <div className="relative bg-white">
        <div className="mx-auto px-0 w-full">
          {/* Your content sections go here */}
        </div>
      </div>

      {/* Add this to your global CSS or a CSS module */}
      <style jsx>{`
        .hero-section :global(.hero-bg-image) {
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          width: 100%;
          height: 100%;
        }

        @media (max-width: 768px) {
          .hero-section :global(.hero-bg-image) {
            background-size: contain;
            background-position: top center;
          }
        }
      `}</style>
    </>
  );
};

export default HomePage;
