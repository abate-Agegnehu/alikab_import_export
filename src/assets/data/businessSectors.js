// businessSectors.js
import {
  FaBoxOpen,
  FaShippingFast,
  FaTruckMoving,
  FaSeedling,
  FaIndustry,
  FaChartBar,
  FaHandsHelping,
} from "react-icons/fa";

const businessSectors = [
  {
    id: "import",
    title: "Import",
    description: "Importing high-quality vehicles and machinery...",
    icon: FaBoxOpen,
  },
  {
    id: "export",
    title: "Export",
    description: "Exporting agricultural products to global markets...",
    icon: FaShippingFast,
  },
  {
    id: "transport",
    title: "Transport",
    description: "Efficient logistics solutions across continents...",
    icon: FaTruckMoving,
  },
  {
    id: "agriculture",
    title: "Agriculture",
    description: "Sustainable farming and environmentally friendly sourcing...",
    icon: FaSeedling,
  },
  {
    id: "manufacturing",
    title: "Manufacturing",
    description: "Converting raw materials into high-quality products...",
    icon: FaIndustry,
  },
  {
    id: "consulting",
    title: "Consulting",
    description: "Optimizing supply chains and offering global trade advice...",
    icon: FaChartBar,
  },
  {
    id: "social",
    title: "Social Work",
    description: "Empowering communities and improving social cohesion...",
    icon: FaHandsHelping,
  },
];

export default businessSectors;
