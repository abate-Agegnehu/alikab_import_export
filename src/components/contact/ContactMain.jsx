import React, { useState } from "react";
import ContactCard from "./ContactCard";
import ContactForm from "./ContactForm";
import ContactMap from "./ContactMap";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const ContactMain = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    department: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <div className="overflow-x-hidden">
      <section className="bg-gradient-to-br from-[#f5f7fa] to-[#e4eff7] px-6 py-20">
        <h3 className="mb-16 font-bold text-[#212A5E] text-4xl text-center">
          How to Reach Us
        </h3>

        <div className="justify-center gap-8 grid sm:grid-cols-2 md:grid-cols-4">
          <ContactCard
            icon={<MapPin size={24} />}
            title="Location"
            items={["Addis Ababa", "Bahir Dar"]}
          />
          <ContactCard
            icon={<Phone size={24} />}
            title="Call Us"
            items={["+251 911 60 44 44", "+251 911 23 54 68"]}
          />
          <ContactCard
            icon={<Mail size={24} />}
            title="Email Us"
            items={["alikab@gmail.com"]}
          />
          <ContactCard
            icon={<Clock size={24} />}
            title="Working Hours"
            items={["Mon-Fri: 8:00am to 5:00pm", "Sat: 8:00am to 12:00pm"]}
          />
        </div>
      </section>

      {/* Contact Form Section */}
      <ContactForm
        formData={formData}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />

      {/* Map Section */}
      <ContactMap />
    </div>
  );
};

export default ContactMain;
