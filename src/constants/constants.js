// constants.js
import cofee from "../assets/Coffee.png";
import JacCar from "../assets/JAC.png";
import byd1 from "../assets/byd1.png";
import carco from "../assets/carco.png";

export const NAV_LINKS = [
  { name: "About Us", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Our Import", href: "#import" },
  { name: "Vehicles", href: "#vehicles" },
];

export const HERO_SLIDES = [
  {
    title: "New Electrical Cars",
    description: ["Automotives is one of the major sectors "],
    backgroundImage: cofee,
  },
  {
    title: "Commercial Vehicle Solutions",
    description: [
      "Automotives is one of the major sectors Tamrin is involved in. Tamrin is supplying various class vehicles, earthmoving machineries, and dump trucks.",
    ],
    backgroundImage: JacCar,
  },
  {
    title: "Passenger Vehicle Collection",
    description: [
      "Automotives is one of the major sectors Tamrin is involved in. Tamrin is supplying various class vehicles, earthmoving machineries, and dump trucks.",
    ],
    backgroundImage: byd1,
  },
  {
    title: "Assembly & Local Production",
    description: [
      "Automotives is one of the major sectors Tamrin is involved in. Tamrin is supplying various class vehicles, earthmoving machineries, and dump trucks.",
    ],
    backgroundImage: carco,
  },
];

const heroCards = [
  {
    title: "Automotives & Machineries",
    description:
      "We specialize in importing high-quality vehicles and industrial equipment.",
    icon: "FaTractor", // Just store the icon name as string
  },
  {
    title: "Agri Exports",
    description:
      "Premium agricultural products sourced directly from local farms.",
    icon: "GiWheat", // Just store the icon name as string
  },
  {
    title: "General Merchandise",
    description: "Wide range of quality products for all your business needs.",
    icon: "MdLocalShipping", // Just store the icon name as string
  },
];

export default heroCards;
