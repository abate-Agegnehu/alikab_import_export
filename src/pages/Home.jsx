import React from "react";
import Header from "../components/header/Header";
import LandingPageHome from "../components/home/LandingPageHome";
import CompanyHistory from "../components/home/CompanyHistory";
import Testimonials from "../components/home/Testimonials";
import AboutHero from "../components/home/AboutHero";

const Home = () => {
  return (
    <div>
      <Header />
      <LandingPageHome />
      <AboutHero />
      <CompanyHistory />
      <Testimonials />
    </div>
  );
};

export default Home;
