import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaUser,
  FaEnvelope,
  FaPhone,
  FaRegComment,
  FaPaperPlane,
  FaCheck,
} from "react-icons/fa";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const EthiopianNames = [
  "Abebe Kebede",
  "Alemnesh Bekele",
  "Tewodros Assefa",
  "Selamawit Girma",
];

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [focusedField, setFocusedField] = useState(null);

  const getRandomPlaceholder = (type) => {
    if (type === "name")
      return EthiopianNames[Math.floor(Math.random() * EthiopianNames.length)];
    if (type === "phone") return "0943599259";
    return "";
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }
    if (formData.phone && !/^[0-9]{10}$/.test(formData.phone)) {
      newErrors.phone = "Please enter a valid 10-digit phone number";
    }
    if (!formData.message.trim()) newErrors.message = "Message is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;
    setIsLoading(true);

    try {
      const response = await fetch(import.meta.env.VITE_WEB3FORMS_API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: import.meta.env.VITE_WEB3FORMS_ACCESS_KEY,
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
          subject: "Alikab Import Export website New Message",
        }),
      });

      const result = await response.json();
      if (result.success) {
        setIsSubmitted(true);
        toast.success("Message sent successfully!", {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: true,
        });
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        throw new Error(result.message || "Failed to send message");
      }
    } catch (error) {
      toast.error(
        error.message || "Failed to send message. Please try again.",
        {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: true,
        }
      );
    } finally {
      setIsLoading(false);
    }
  };

  if (isSubmitted) {
    return (
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="bg-gradient-to-br from-blue-50 to-indigo-50 px-4 py-16 md:py-12"
      >
        <motion.div className="bg-white shadow-2xl mx-auto p-10 rounded-2xl w-full max-w-4xl text-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="flex justify-center mb-6"
          >
            <div className="bg-green-100 p-4 rounded-full">
              <FaCheck className="text-green-600 text-4xl" />
            </div>
          </motion.div>
          <h3 className="mb-4 font-bold text-gray-800 text-3xl">Thank You!</h3>
          <p className="mb-6 text-gray-600">
            Your message has been sent successfully. We'll get back to you soon.
          </p>
          <button
            onClick={() => setIsSubmitted(false)}
            className="bg-[#212A5E] hover:bg-[#1a2258] px-6 py-3 rounded-lg text-white transition-colors"
          >
            Send Another Message
          </button>
        </motion.div>
      </motion.section>
    );
  }

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-gradient-to-br from-blue-50 to-indigo-50 px-4 py-16 md:py-12"
    >
      <motion.div
        whileHover={{ scale: 1.005 }}
        className="bg-white shadow-2xl mx-auto p-6 md:p-10 rounded-2xl w-full max-w-4xl"
      >
        <div className="mb-10 text-center">
          <motion.h3
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="bg-clip-text bg-gradient-to-r from-[#212A5E] to-[#3A56A5] mb-3 font-bold text-transparent text-4xl md:text-5xl"
          >
            Get in Touch
          </motion.h3>
          <motion.p
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-gray-600"
          >
            We'd love to hear from you!
          </motion.p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="gap-6 grid grid-cols-1 md:grid-cols-2">
            {/* Name */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="group relative"
            >
              <label
                htmlFor="name"
                className="ml-1 font-medium text-gray-700 text-sm"
              >
                Your Name
              </label>
              <div className="relative">
                <motion.div
                  animate={{
                    color: focusedField === "name" ? "#212A5E" : "#9CA3AF",
                    scale: focusedField === "name" ? 1.1 : 1,
                  }}
                  className="left-0 absolute inset-y-0 flex items-center pl-3 pointer-events-none"
                >
                  <FaUser />
                </motion.div>
                <input
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  onFocus={() => setFocusedField("name")}
                  onBlur={() => setFocusedField(null)}
                  placeholder={getRandomPlaceholder("name")}
                  className={`block py-3 pl-10 pr-4 border ${
                    errors.name ? "border-red-300" : "border-gray-300"
                  } focus:ring-2 focus:ring-[#212A5E] focus:border-transparent w-full rounded-xl text-[#212A5E]`}
                />
              </div>
              {errors.name && (
                <motion.p className="mt-1 text-red-500 text-sm">
                  {errors.name}
                </motion.p>
              )}
            </motion.div>

            {/* Email */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              className="group relative"
            >
              <label
                htmlFor="email"
                className="ml-1 font-medium text-gray-700 text-sm"
              >
                Email Address
              </label>
              <div className="relative">
                <motion.div
                  animate={{
                    color: focusedField === "email" ? "#212A5E" : "#9CA3AF",
                    scale: focusedField === "email" ? 1.1 : 1,
                  }}
                  className="left-0 absolute inset-y-0 flex items-center pl-3 pointer-events-none"
                >
                  <FaEnvelope />
                </motion.div>
                <input
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  onFocus={() => setFocusedField("email")}
                  onBlur={() => setFocusedField(null)}
                  placeholder="you@example.com"
                  className={`block py-3 pl-10 pr-4 border ${
                    errors.email ? "border-red-300" : "border-gray-300"
                  } focus:ring-2 focus:ring-[#212A5E] focus:border-transparent w-full rounded-xl text-[#212A5E]`}
                />
              </div>
              {errors.email && (
                <motion.p className="mt-1 text-red-500 text-sm">
                  {errors.email}
                </motion.p>
              )}
            </motion.div>

            {/* Phone */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="group relative md:col-span-2"
            >
              <label
                htmlFor="phone"
                className="ml-1 font-medium text-gray-700 text-sm"
              >
                Phone Number
              </label>
              <div className="relative">
                <motion.div
                  animate={{
                    color: focusedField === "phone" ? "#212A5E" : "#9CA3AF",
                    scale: focusedField === "phone" ? 1.1 : 1,
                  }}
                  className="left-0 absolute inset-y-0 flex items-center pl-3 pointer-events-none"
                >
                  <FaPhone />
                </motion.div>
                <input
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  onFocus={() => setFocusedField("phone")}
                  onBlur={() => setFocusedField(null)}
                  onKeyPress={(e) => !/[0-9]/.test(e.key) && e.preventDefault()}
                  maxLength="10"
                  placeholder="0943599259"
                  className={`block py-3 pl-10 pr-4 border ${
                    errors.phone ? "border-red-300" : "border-gray-300"
                  } focus:ring-2 focus:ring-[#212A5E] focus:border-transparent w-full rounded-xl text-[#212A5E]`}
                />
              </div>
              {errors.phone && (
                <motion.p className="mt-1 text-red-500 text-sm">
                  {errors.phone}
                </motion.p>
              )}
            </motion.div>

            {/* Message */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="group relative md:col-span-2"
            >
              <label
                htmlFor="message"
                className="ml-1 font-medium text-gray-700 text-sm"
              >
                Your Message
              </label>
              <div className="relative">
                <motion.div
                  animate={{
                    color: focusedField === "message" ? "#212A5E" : "#9CA3AF",
                    scale: focusedField === "message" ? 1.1 : 1,
                  }}
                  className="top-3 left-3 absolute"
                >
                  <FaRegComment />
                </motion.div>
                <textarea
                  name="message"
                  rows="6"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  onFocus={() => setFocusedField("message")}
                  onBlur={() => setFocusedField(null)}
                  placeholder="How can we help you?"
                  className={`block py-3 pl-10 pr-4 border ${
                    errors.message ? "border-red-300" : "border-gray-300"
                  } focus:ring-2 focus:ring-[#212A5E] focus:border-transparent w-full rounded-xl text-[#212A5E]`}
                />
              </div>
              {errors.message && (
                <motion.p className="mt-1 text-red-500 text-sm">
                  {errors.message}
                </motion.p>
              )}
            </motion.div>
          </div>

          <div className="text-center">
            <button
              type="submit"
              disabled={isLoading}
              className="flex items-center gap-2 bg-[#212A5E] hover:bg-[#1a2258] mx-auto px-8 py-3 rounded-xl text-white transition-all"
            >
              {isLoading ? (
                <svg
                  className="w-5 h-5 animate-spin"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="white"
                    strokeWidth="4"
                  />
                  <path
                    className="opacity-75"
                    fill="white"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                  />
                </svg>
              ) : (
                <>
                  <FaPaperPlane /> Send Message
                </>
              )}
            </button>
          </div>
        </form>
      </motion.div>
    </motion.section>
  );
};

export default ContactForm;
