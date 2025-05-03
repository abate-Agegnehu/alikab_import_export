import React, { useState, useEffect } from "react";
// import Header from "./Header";
// import Hero from "./Hero";
import Header from "../header/Header";
import Hero from "../home/Hero";
import { HERO_SLIDES } from "../constants/constants";

const LandingPage = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleCtaClick = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative flex flex-col bg-white w-full min-h-screen overflow-x-hidden">
      <Header scrolled={scrolled} />

      {/* Hero Section - No margins */}
      <div className="relative">
        <Hero slides={HERO_SLIDES} onCtaClick={handleCtaClick} />
      </div>

      {/* Content Area - No top margin */}
      <div className="relative bg-white">
        <div className="mx-auto px-0 w-full">
          {" "}
          {/* Removed horizontal padding */}
          {/* Your content goes here */}
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
