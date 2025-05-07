import React, { useEffect } from "react";
import AboutMain from "../components/about/AboutMain";
import ExportProducts from "../components/about/ExportProducts";
import VisionAndMission from "../components/about/VisionAndMission";
import Team from "../components/about/Team";
import Award from "../components/about/Award";
import Footer from "../components/footer/Footer";
import LandingAbout from "../components/about/LandingAbout";
import { useLocation } from "react-router-dom";

const About = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollTo === "team") {
      const middle = document.body.scrollHeight / 1.7;
      window.scrollTo({ top: middle, behavior: "smooth" });
    }
  }, [location]);

  return (
    <div>
      <LandingAbout />
      <ExportProducts />
      <VisionAndMission />
      <Team />
      <Award />
    </div>
  );
};

export default About;
