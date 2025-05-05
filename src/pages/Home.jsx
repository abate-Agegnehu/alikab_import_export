import React from "react";
import Header from "../components/header/Header";
import LandingPageHome from "../components/home/LandingPageHome";
import CompanyHistory from "../components/home/CompanyHistory";
import Testimonials from "../components/home/Testimonials";
import AboutHero from "../components/home/AboutHero";
import MarketingQuote from "../components/home/MarketingQuote";

const Home = () => {
  return (
    <div>
      <LandingPageHome />
      <AboutHero />
      <CompanyHistory />
      <Testimonials />
      <MarketingQuote />
    </div>
  );
};

export default Home;
