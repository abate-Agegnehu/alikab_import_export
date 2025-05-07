import React from "react";
// import coffee from "../../assets/images/coffee.jpg";
// import oilseeds from "../../assets/images/oilseeds.jpg";
// import pulses from "../../assets/images/pulses.jpg";
// import soybean from "../../assets/images/soybean.jpg";
// import beans from "../../assets/images/beans.jpg";
// import bean from "../../assets/images/bean.jpg";
import coffee from "../assets/images/coffee.jpg";
import oilseeds from "../assets/images/oilseeds.jpg";
import pulses from "../assets/images/pulses.jpg";
import soybean from "../assets/images/soybean.jpg";
import beans from "../assets/images/beans.jpg";
import bean from "../assets/images/bean.jpg";
import ProductCategoryGrid from "../components/export/ProductCategoryGrid";
import LandingExport from "../components/export/LandingExport";
const categories = [
  {
    title: "Coffee",
    image: coffee,
    description:
      "Premium coffee beans sourced from rich highland regions, known for their aroma and flavor.",
  },
  {
    title: "Oilseeds",
    image: oilseeds,
    description:
      "High-quality oilseeds used for producing vegetable oils and other nutritional products.",
  },
  {
    title: "Pulses",
    image: pulses,
    description:
      "A variety of nutritious pulses including lentils, chickpeas, and peas, rich in protein.",
  },
  {
    title: "Soybean",
    image: soybean,
    description:
      "Versatile soybeans cultivated for food products, oil extraction, and animal feed.",
  },
  {
    title: "Beans",
    image: beans,
    description:
      "Assorted beans known for their health benefits and use in global culinary traditions.",
  },
  {
    title: "Red Kidney Beans",
    image: bean,
    description:
      "Nutrient-dense red kidney beans commonly used in soups, stews, and salads.",
  },
];

const ExportPage = () => {
  return (
    <>
      <LandingExport categories={categories} />
      <ProductCategoryGrid categories={categories} />
    </>
  );
};

export default ExportPage;
