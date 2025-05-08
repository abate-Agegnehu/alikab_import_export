import React from "react";
import ContactHero from "../components/contact/ContactHero";
import ContactMain from "../components/contact/ContactMain";
import Footer from "../components/footer/Footer";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import LandingContact from "../components/contact/LandingContact";
const Contact = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollTo === "contact-form") {
      const middle = document.body.scrollHeight / 2 - 500;
      window.scrollTo({ top: middle, behavior: "smooth" });
    }
  }, [location]);

  return (
    <div>
      <LandingContact />
      <ContactMain />
    </div>
  );
};

export default Contact;
