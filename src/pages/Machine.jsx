import React from "react";

import HeroSection from "../components/machine/HeroSection";
import PortfolioSection from "../components/machine/PortfolioSection";
import FeaturesSection from "../components/machine/FeaturesSection";
import CTASection from "../components/machine/CTASection";
import useMachineryActions from "../components/machine/useMachineryActions";
import LandingMachine from "../components/machine/LandingMachine";

const Machine = () => {
  const {
    handleExploreEquipment,
    handleContactTeam,
    handleCategoryClick,
    handleRequestQuote,
    handleScheduleDemo,
  } = useMachineryActions();

  return (
    <div className="bg-gray-50 min-h-screen">
      <LandingMachine
        onExplore={handleExploreEquipment}
        onContact={handleContactTeam}
      />
      <PortfolioSection
        onExplore={handleExploreEquipment}
        onCategoryClick={handleCategoryClick}
        onScheduleDemo={handleScheduleDemo}
      />
      <FeaturesSection />
    </div>
  );
};

export default Machine;
