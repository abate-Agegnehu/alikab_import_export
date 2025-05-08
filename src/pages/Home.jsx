import React, { useEffect } from "react";
import Header from "../components/header/Header";
import LandingPageHome from "../components/home/LandingPageHome";
import CompanyHistory from "../components/home/CompanyHistory";
import Testimonials from "../components/home/Testimonials";
import AboutHero from "../components/home/AboutHero";
import MarketingQuote from "../components/home/MarketingQuote";
import { useLocation } from "react-router-dom";

const Home = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollTo === "middle") {
      const middle = document.body.scrollHeight / 2 - 340;
      window.scrollTo({ top: middle, behavior: "smooth" });
    }

    if (location.state?.scrollTo === "quote") {
      const middle = document.body.scrollHeight / 1.3;
      window.scrollTo({ top: middle, behavior: "smooth" });
    }
    if (location.state?.scrollTo === "history") {
      const middle = document.body.scrollHeight / 2 - 340;
      window.scrollTo({ top: middle, behavior: "smooth" });
    }
  }, [location]);
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
