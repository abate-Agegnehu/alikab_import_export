import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Truck,
  MapPin,
  Clock,
  ShieldCheck,
  ArrowRight,
  ChevronDown,
  Phone,
  Mail,
  Loader,
  Check,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const TransportMainPage = () => {
  const navigate = useNavigate();
  const [activeService, setActiveService] = useState("road");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    cargoType: "",
    route: "ethiopia-djibouti",
  });

  const services = {
    road: {
      title: "Road Freight Solutions",
      description:
        "Reliable cargo transport between Ethiopia and Djibouti ports with customs clearance",
      icon: <Truck className="w-6 h-6" />,
      features: [
        "Real-time GPS tracking",
        "Door-to-door service",
        "Customs documentation",
        "Temperature-controlled options",
      ],
    },
    consultation: {
      title: "Logistics Consultation",
      description:
        "Expert advice for optimizing your cross-border supply chain",
      icon: <MapPin className="w-6 h-6" />,
      features: [
        "Route optimization",
        "Cost analysis",
        "Regulatory compliance",
        "Risk assessment",
      ],
    },
  };

  const stats = [
    {
      value: "500+",
      label: "Monthly Shipments",
      icon: <Truck className="w-5 h-5" />,
    },
    {
      value: "98.7%",
      label: "On-Time Delivery",
      icon: <Check className="w-5 h-5" />,
    },
    {
      value: "24/7",
      label: "Customer Support",
      icon: <Phone className="w-5 h-5" />,
    },
    {
      value: "15+",
      label: "Years Experience",
      icon: <ShieldCheck className="w-5 h-5" />,
    },
  ];

  return (
    <div className="bg-gradient-to-b from-[#0a162a] to-[#0f172a] text-white">
      {/* Services Section */}
      <section className="bg-white py-20 text-gray-800">
        <div className="mx-auto px-6 container">
          <motion.div
            className="mb-16 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="mb-4 font-bold text-gray-900 text-3xl md:text-4xl">
              Our Services
            </h2>
            <p className="mx-auto max-w-2xl text-gray-500">
              Comprehensive logistics solutions tailored for the
              Ethiopia-Djibouti corridor and across Ethiopia.
            </p>
          </motion.div>

          <div className="flex md:flex-row flex-col gap-8 mb-16">
            {Object.entries(services).map(([key, service]) => (
              <motion.div
                key={key}
                className={`flex-1 rounded-xl border ${
                  activeService === key
                    ? "border-blue-500 shadow-lg"
                    : "border-gray-200 shadow-md"
                } bg-white p-8 hover:shadow-xl transition-all duration-300 cursor-pointer`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: key === "road" ? 0.2 : 0.4,
                }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                onClick={() => setActiveService(key)}
              >
                <div className="flex items-center mb-4">
                  <div className="bg-blue-100 mr-4 p-2 rounded-lg text-blue-600">
                    {service.icon}
                  </div>
                  <h3 className="font-bold text-gray-800 text-xl">
                    {service.title}
                  </h3>
                </div>
                <p className="mb-6 text-gray-600">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-gray-700">
                      <Check className="mr-2 w-4 h-4 text-blue-500" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="bg-gray-50 shadow-md p-8 border border-gray-200 rounded-2xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex md:flex-row flex-col items-center">
              <div className="mb-8 md:mb-0 md:w-1/2">
                <h3 className="mb-4 font-bold text-gray-900 text-2xl">
                  Why Choose Our Transport Service?
                </h3>
                <p className="mb-6 text-gray-600">
                  Backed by years of experience across Ethiopia and the
                  Ethiopia-Djibouti corridor, we deliver seamless, reliable
                  logistics
                </p>
                <button
                  className="bg-blue-600 hover:bg-blue-500 shadow px-6 py-3 rounded-lg font-semibold text-white transition-all duration-300"
                  onClick={() => navigate("/about")}
                >
                  Learn More About Us
                </button>
              </div>
              <div className="gap-4 grid grid-cols-2 md:w-1/2">
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    className="bg-white shadow-sm p-4 border border-gray-200 rounded-xl"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex items-center mb-2">
                      {stat.icon}
                      <span className="ml-2 font-bold text-gray-800 text-2xl">
                        {stat.value}
                      </span>
                    </div>
                    <div className="text-gray-500 text-sm">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      <section className="bg-[#0a162a] py-12 md:py-20">
        <div className="mx-auto px-4 sm:px-6 container">
          <motion.div
            className="mb-12 md:mb-16 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="mb-3 font-bold text-white text-2xl sm:text-3xl md:text-4xl">
              How It Works
            </h2>
            <p className="mx-auto max-w-2xl text-blue-200 text-sm sm:text-base">
              Simple, transparent process for your cargo transportation needs
            </p>
          </motion.div>

          <div className="relative">
            {/* Vertical line - hidden on mobile */}
            <div className="hidden md:block top-0 left-1/2 absolute bg-gradient-to-b from-blue-600 via-blue-400 to-blue-600 w-0.5 h-full -translate-x-1/2"></div>

            {/* Mobile timeline */}
            <div className="md:hidden">
              <div className="relative pl-6">
                {/* Vertical line for mobile */}
                <div className="top-0 left-0 absolute bg-blue-600/50 ml-3 w-0.5 h-full"></div>

                <div className="space-y-8">
                  {[
                    {
                      step: "1",
                      title: "Request a Quote",
                      description:
                        "Fill out our simple form or contact our team to get a customized quote",
                      icon: <Mail className="w-5 h-5" />,
                      color: "from-blue-500 to-blue-600",
                    },
                    {
                      step: "2",
                      title: "Document Preparation",
                      description:
                        "We handle all customs documentation and regulatory requirements",
                      icon: <ShieldCheck className="w-5 h-5" />,
                      color: "from-purple-500 to-purple-600",
                    },
                    {
                      step: "3",
                      title: "Cargo Pickup",
                      description:
                        "Our team collects your cargo at the specified location",
                      icon: <Truck className="w-5 h-5" />,
                      color: "from-emerald-500 to-emerald-600",
                    },
                    {
                      step: "4",
                      title: "Tracking & Delivery",
                      description:
                        "Monitor your shipment in real-time until safe delivery",
                      icon: <MapPin className="w-5 h-5" />,
                      color: "from-amber-500 to-amber-600",
                    },
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      className="relative pl-8"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      {/* Step number bubble */}
                      <div
                        className={`absolute -left-1 top-0 flex items-center justify-center rounded-full w-8 h-8 bg-gradient-to-br ${item.color} shadow-lg`}
                      >
                        <span className="font-bold text-white text-sm">
                          {item.step}
                        </span>
                      </div>

                      {/* Content */}
                      <div className="space-y-2 pt-1">
                        <h3 className="font-semibold text-white text-lg">
                          {item.title}
                        </h3>
                        <p className="text-blue-200 text-sm leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* Desktop layout */}
            <div className="hidden md:block space-y-0">
              {[
                {
                  step: "1",
                  title: "Request a Quote",
                  description:
                    "Fill out our simple form or contact our team to get a customized quote",
                  icon: <Mail className="w-5 h-5" />,
                  color: "from-blue-500 to-blue-600",
                },
                {
                  step: "2",
                  title: "Document Preparation",
                  description:
                    "We handle all customs documentation and regulatory requirements",
                  icon: <ShieldCheck className="w-5 h-5" />,
                  color: "from-purple-500 to-purple-600",
                },
                {
                  step: "3",
                  title: "Cargo Pickup",
                  description:
                    "Our team collects your cargo at the specified location",
                  icon: <Truck className="w-5 h-5" />,
                  color: "from-emerald-500 to-emerald-600",
                },
                {
                  step: "4",
                  title: "Tracking & Delivery",
                  description:
                    "Monitor your shipment in real-time until safe delivery",
                  icon: <MapPin className="w-5 h-5" />,
                  color: "from-amber-500 to-amber-600",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="relative flex flex-row items-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div
                    className={`w-1/2 ${
                      index % 2 === 0 ? "pr-12 text-right" : "pl-12 text-left"
                    }`}
                  >
                    {index % 2 === 0 && (
                      <div className="ml-auto max-w-md">
                        <div className="inline-flex items-center gap-2 mb-2">
                          {item.icon}
                          <h3 className="font-semibold text-white text-xl">
                            {item.title}
                          </h3>
                        </div>
                        <p className="text-blue-200">{item.description}</p>
                      </div>
                    )}
                  </div>

                  <div className="z-10 relative flex justify-center items-center mx-auto">
                    <div
                      className={`rounded-full w-16 h-16 flex items-center justify-center bg-gradient-to-br ${item.color} shadow-lg border-4 border-blue-900/30`}
                    >
                      <span className="font-bold text-white text-xl">
                        {item.step}
                      </span>
                    </div>
                  </div>

                  <div
                    className={`w-1/2 ${
                      index % 2 === 0 ? "pl-12 text-left" : "pr-12 text-right"
                    }`}
                  >
                    {index % 2 !== 0 && (
                      <div className="mr-auto max-w-md">
                        <div className="inline-flex items-center gap-2 mb-2">
                          {item.icon}
                          <h3 className="font-semibold text-white text-xl">
                            {item.title}
                          </h3>
                        </div>
                        <p className="text-blue-200">{item.description}</p>
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-white py-20">
        <div className="mx-auto px-6 text-center container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="mb-6 font-bold text-gray-900 text-3xl md:text-4xl">
              Ready to Ship Your Cargo?
            </h2>
            <p className="mx-auto mb-8 max-w-2xl text-gray-600">
              Contact us today for a personalized quote and experience seamless
              cross-border transportation.
            </p>
            <div className="flex sm:flex-row flex-col justify-center gap-4">
              <button
                className="bg-gradient-to-r from-blue-600 hover:from-blue-500 to-blue-500 hover:to-blue-400 shadow-lg hover:shadow-xl px-8 py-4 rounded-lg font-semibold text-white transition-all duration-300"
                onClick={() => navigate("/", { state: { scrollTo: "quote" } })}
              >
                Get Instant Quote
              </button>
              <button
                className="flex justify-center items-center hover:bg-blue-900/30 hover:shadow-lg px-8 py-4 border border-blue-400 rounded-lg font-semibold text-blue-600 transition-all duration-300"
                onClick={() => navigate("/contact")}
              >
                <Phone className="mr-2 w-5 h-5" />
                Call Us Now
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default TransportMainPage;
