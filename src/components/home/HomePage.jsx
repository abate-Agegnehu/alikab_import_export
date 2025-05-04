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
      {/* Hero Section */}
      <div className="relative">
        <Hero slides={HERO_SLIDES} onCtaClick={handleCtaClick} />
      </div>

      {/* Content Area */}
      <div className="relative bg-white">
        <div className="mx-auto px-0 w-full">
          {/* Your content sections go here */}
        </div>
      </div>
    </>
  );
};

export default HomePage;
