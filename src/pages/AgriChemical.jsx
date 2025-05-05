import React from "react";
import ChemicalPortfolio from "../components/Agricutur/ChemicalPortfolio";
import Breadcrumbs from "../components/Agricutur/Breadcrumb";
import HeroSection from "../components/Agricutur/HeroSection";
import StatsSection from "../components/Agricutur/StatsSection";
import CTASection from "../components/Agricutur/CTASection";

const AgriChemical = () => {
  return (
    <div>
      <HeroSection />
      <Breadcrumbs />
      <ChemicalPortfolio />
      <StatsSection />
      <CTASection />
    </div>
  );
};

export default AgriChemical;
