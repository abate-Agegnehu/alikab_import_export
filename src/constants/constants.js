// constants.js
import coffeeSeed from "../assets/images/coffee-seed.jpg";
import cargoTruck from "../assets/images/Hero/truck-hero.jpg";
import byd from "../assets/images/Hero/byd.jpg";
import agriTruck from "../assets/images/Hero/agri-truck.jpg";
import Fsr from "../assets/images/Hero/fsr.jpg";

export const NAV_LINKS = [
  { name: "About Us", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Our Import", href: "#import" },
  { name: "Vehicles", href: "#vehicles" },
];

export const HERO_SLIDES = [
  {
    title: "Coffee Seed",
    description: [
      "Alikab is actively involved in the export of high-quality Ethiopian coffee beans, delivering rich flavors and heritage to the global market.",
    ],
    backgroundImage: coffeeSeed,
  },
  {
    title: "BYD",
    description: [
      "We import eco-friendly hybrid and electric vehicles like BYD to promote green transportation solutions in Ethiopia and beyond.",
    ],
    backgroundImage: byd,
  },
  {
    title: "Cargo Truck",
    description: [
      "Our robust cargo trucks are essential for transporting goods across cities and rural areas, supporting logistics and supply chain operations.",
    ],
    backgroundImage: cargoTruck,
  },
  {
    title: "FSR Cargo",
    description: [
      "FSR cargo vehicles offer versatile and reliable performance for medium to large-scale commercial transport and cargo delivery operations.",
    ],
    backgroundImage: Fsr,
  },
  {
    title: "Agri Truck",
    description: [
      "Our agricultural trucks are tailored for farm operations, offering dependable transportation of produce and supplies across various terrains.",
    ],
    backgroundImage: agriTruck,
  },
];

const heroCards = [
  {
    title: "Automotives & Heavy Machinery",
    description:
      "We import electric, hybrid, agricultural, and construction vehicles to support Ethiopia's growing infrastructure and sustainability goals.",
    icon: "FaTractor", // Just store the icon name as string
  },
  {
    title: "Agricultural Exports",
    description:
      "Exporting premium-grade coffee, oilseeds, sesame, and pulses directly from Ethiopian farms to international markets.",
    icon: "GiWheat", // Just store the icon name as string
  },
  {
    title: "Transportation & Consultancy",
    description:
      "Providing reliable transportation services across Ethiopia and Djibouti, along with expert consultancy in automotive and logistics solutions.",
    icon: "MdLocalShipping", // Just store the icon name as string
  },
];

export default heroCards;
