import img1 from "../../assets/machine/img1.jpg";
import img2 from "../../assets/machine/img2.webp";
import img3 from "../../assets/machine/img3.jpg";
import img4 from "../../assets/machine/img4.jpg";
import img5 from "../../assets/machine/img5.jpg";
import img6 from "../../assets/machine/img6.jpg";

export const machineryCategories = [
  {
    id: 1,
    name: "Horsch Terrano 4FX Cultivator",
    description:
      "The Horsch Terrano 4FX is a versatile grower that revolutionized the preparation of agricultural soils. Manufactured by the German brand Horsch, this tooth-trimming tool is an effective solution for optimizing soil preparation work.",
    stats: "Working width: 4m, Weight: 2400 kg",
    images: [img1, img1, img1, img1, img1, img1],
    features: [
      "Deep mixing capability",
      "Adjustable working depth",
      "Robust TerraGrip tines",
      "Ideal for stubble and seedbed preparation",
    ],
    applications: [
      "Soil preparation",
      "Scalping",
      "Seedbed preparation",
      "Stubble cultivation",
    ],
  },
  {
    id: 2,
    name: "Agricultural Tractor on Roads",
    description:
      "When driving a tractor on roads over 40 km/h, specific rules must be followed. Tractors can be approved for speeds of up to 50–60 km/h, but the legal limit is often 40 km/h when towing. A heavy vehicle license is required for higher speeds.",
    stats: "Max road speed: 40–60 km/h",
    images: [img2, img2, img2, img2, img2, img2],
    features: [
      "Speed-limited when towing",
      "Requires Category C license above 40 km/h",
      "Convoi and width rules apply",
      "Ensures road safety and legal compliance",
    ],
    applications: [
      "Farm-to-field transport",
      "Towing agricultural implements",
      "Road travel with trailers",
    ],
  },
  {
    id: 3,
    name: "Horsch Terrano 4FX (Performance Focus)",
    description:
      "The Horsch Terrano 4FX stands out for its robustness and versatility. Farmers appreciate its 4-meter width, 2400 kg build, and deep soil mixing efficiency. Proper power is needed for best results.",
    stats: "Powerful and efficient",
    images: [img3, img3, img3, img3, img3, img3],
    features: [
      "TerraGrip tines with high strength",
      "Depth control for optimal soil blending",
      "Multiple use: scalping, tilling, preparation",
      "Requires strong tractor pairing",
    ],
    applications: [
      "Versatile tillage operations",
      "Seedbed optimization",
      "Heavy soil cultivation",
    ],
  },
  {
    id: 4,
    name: "Bulldozer",
    description:
      "Bulldozers are essential earthmoving machines in construction and mining. They excel in pushing soil, grading, and rough terrain leveling. Known for their brute power and track stability.",
    stats: "Tracked dozers with blade force",
    images: [img4, img4, img4, img4, img4, img4],
    features: [
      "Powerful front blade",
      "Excellent traction",
      "GPS leveling (modern models)",
      "Used in mining and road works",
    ],
    applications: [
      "Earthmoving",
      "Land clearing",
      "Road base grading",
      "Mining site prep",
    ],
  },
];

export const features = [
  {
    id: 1,
    title: "High Performance",
    description:
      "Engineered for maximum productivity and efficiency in demanding environments with advanced power systems.",
    icon: "M13 10V3L4 14h7v7l9-11h-7z",
  },
  {
    id: 2,
    title: "Reliable Operation",
    description:
      "Built with premium components and rigorous testing for dependable performance year after year.",
    icon: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z",
  },
  {
    id: 3,
    title: "Global Support",
    description:
      "Comprehensive service network with parts availability and technical support worldwide.",
    icon: "M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z",
  },
];
