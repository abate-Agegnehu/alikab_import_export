import React from "react";
import MainLayout from "../main/MainLayout";
import HeroCarousel from "./HeroExport";

const LandingExport = ({ categories }) => {
  return (
    <MainLayout>
      <HeroCarousel categories={categories} />
    </MainLayout>
  );
};

export default LandingExport;
