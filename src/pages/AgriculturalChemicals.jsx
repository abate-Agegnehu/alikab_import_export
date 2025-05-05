import React, { useState } from "react";
import ChemicalPortfolio from "../components/Agricutur/ChemicalPortfolio";
import FeaturedProducts from "../components/Agricutur/FeaturedProducts";
import StatsSection from "../components/Agricutur/StatsSection";
import CTASection from "../components/Agricutur/CTASection";
import ProductModal from "../components/Agricutur/ProductModal";
import LandingAgroChemical from "../components/Agricutur/LandingAgroChemical";
import {
  chemicalCategories,
  featuredProducts,
} from "../components/Agricutur/data";

const AgriculturalChemicals = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [requestType, setRequestType] = useState("");

  const handleExploreProduct = (product) => {
    setSelectedProduct(product);
    setRequestType("");
    setShowModal(true);
  };

  const handleViewProductRange = (category) => {
    setSelectedProduct({
      name: `${category.name} Product Range`,
      description: `Complete range of ${category.name.toLowerCase()} we import`,
      products: category.products,
    });
    setRequestType("range");
    setShowModal(true);
  };

  const handleRequestSpecifications = (product) => {
    setSelectedProduct(product);
    setRequestType("specs");
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedProduct(null);
    setRequestType("");
  };

  const handleContactTeam = () => {
    setSelectedProduct({
      name: "Contact Our Import Team",
      description:
        "Our specialists are ready to assist with your agricultural chemical import needs",
      specifications: [
        "24/7 support available",
        "Custom import solutions",
        "Competitive pricing",
        "Global sourcing network",
      ],
    });
    setShowModal(true);
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <ProductModal
        showModal={showModal}
        selectedProduct={selectedProduct}
        requestType={requestType}
        onClose={closeModal}
        onRequestSpecifications={handleRequestSpecifications}
      />

      <LandingAgroChemical
        onExploreProducts={() =>
          handleExploreProduct({
            name: "Our Product Portfolio",
            description:
              "Explore our complete range of imported agricultural chemicals",
            specifications: [
              "Herbicides: 30+ formulations",
              "Pesticides: 25+ specialized products",
              "Fungicides: 15+ disease solutions",
              "Fertilizers: Complete NPK range",
            ],
          })
        }
        onContactTeam={handleContactTeam}
      />

      <ChemicalPortfolio
        categories={chemicalCategories}
        onViewProductRange={handleViewProductRange}
      />

      <FeaturedProducts
        products={featuredProducts}
        onRequestSpecifications={handleRequestSpecifications}
      />

      <StatsSection />

      <CTASection
        onCustomQuote={() => {
          setSelectedProduct({
            name: "Request Custom Quote",
            description:
              "Provide us with your requirements and we'll prepare a competitive quote",
            specifications: [
              "Volume discounts available",
              "Flexible payment terms",
              "Door-to-door delivery options",
              "Custom formulations available",
            ],
          });
          setShowModal(true);
        }}
        onScheduleCall={() => {
          setSelectedProduct({
            name: "Schedule a Consultation",
            description:
              "Book a call with our import specialists to discuss your needs",
            specifications: [
              "Available Monday-Friday 8am-6pm",
              "Video or phone call options",
              "Technical experts available",
              "No obligation consultation",
            ],
          });
          setShowModal(true);
        }}
      />
    </div>
  );
};

export default AgriculturalChemicals;
