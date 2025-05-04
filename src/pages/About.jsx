import React from "react";
import AboutMain from "../components/about/AboutMain";
import ExportProducts from "../components/about/ExportProducts";
import VisionAndMission from "../components/about/VisionAndMission";
import Team from "../components/about/Team";
import Award from "../components/about/Award";
import Footer from "../components/footer/Footer";
import LandingAbout from "../components/about/LandingAbout";

const About = () => {
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
