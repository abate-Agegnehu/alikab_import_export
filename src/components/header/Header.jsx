import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../../assets/logoUpdated.png";
import { useNavigate } from "react-router-dom";
const Header = ({ scrolled }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const menuRef = useRef(null);
  const buttonRef = useRef(null);

  const navigate = useNavigate();

  const NAV_ITEMS = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    {
      name: "Our Imports",
      subItems: [
        { name: "Vehicles", href: "/vichles" },
        { name: "Agriculture Chemicals", href: "#agro-chemicals" },
        { name: "Machinery", href: "/machinery" },
      ],
    },
    { name: "Our Exports", href: "/export" },
    {
      name: "Services",
      subItems: [
        { name: "Consultancy", href: "/consultancy" },
        { name: "Transportation", href: "/transportation" },
      ],
    },
  ];

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const toggleDropdown = (itemName) => {
    setOpenDropdown(openDropdown === itemName ? null : itemName);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target)
      ) {
        setIsMenuOpen(false);
        setOpenDropdown(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const menuVariants = {
    open: { opacity: 1, y: 0 },
    closed: { opacity: 0, y: -20 },
  };

  const dropdownVariants = {
    open: {
      opacity: 1,
      height: "auto",
      transition: { duration: 0.3 },
    },
    closed: {
      opacity: 0,
      height: 0,
      transition: { duration: 0.3 },
    },
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 200, damping: 20 }}
      className={`fixed top-0 left-0 z-50 flex justify-between items-center p-4 sm:p-6 w-full transition-all duration-300 ${
        scrolled
          ? "bg-[#212A5E] text-white shadow-md"
          : "bg-transparent text-white"
      }`}
    >
      {/* Logo */}
      <motion.div
        className="flex items-center space-x-4"
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
      >
        <img
          src={logo}
          alt="Logo"
          className="h-10 sm:h-14 lg:h-16 object-contain"
        />
      </motion.div>
      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center space-x-8">
        {NAV_ITEMS.map((item) => (
          <div
            key={item.name}
            className="relative"
            onMouseEnter={() => item.subItems && setOpenDropdown(item.name)}
            onMouseLeave={() => item.subItems && setOpenDropdown(null)}
          >
            {item.subItems ? (
              <>
                <motion.button
                  className="relative flex items-center hover:text-gray-300"
                  whileHover={{ scale: 1.05 }}
                >
                  {item.name}
                  {item.name === "Our Imports" && (
                    <motion.span
                      className="-top-2 -right-5 absolute bg-red-600 px-2 py-[2px] rounded-full text-[10px] text-white"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 10,
                      }}
                    >
                      NEW
                    </motion.span>
                  )}
                  <motion.span
                    animate={{ rotate: openDropdown === item.name ? 180 : 0 }}
                    className="ml-1"
                  >
                    ▼
                  </motion.span>
                </motion.button>

                <AnimatePresence>
                  {openDropdown === item.name && (
                    <motion.div
                      initial="closed"
                      animate="open"
                      exit="closed"
                      variants={dropdownVariants}
                      className="top-full left-0 absolute bg-white shadow-lg mt-2 rounded-md w-48 overflow-hidden text-gray-800"
                    >
                      {item.subItems.map((subItem) => (
                        <a
                          key={subItem.name}
                          href={subItem.href}
                          className="block hover:bg-blue-50 px-4 py-2"
                        >
                          {subItem.name}
                        </a>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </>
            ) : (
              <a href={item.href} className="hover:text-gray-300">
                {item.name}
              </a>
            )}
          </div>
        ))}

        <motion.button
          className="bg-blue-700 hover:bg-blue-800 px-6 py-2 rounded-md font-medium text-sm transition-colors"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => {
            navigate("/contact");
          }}
        >
          Contact Us
        </motion.button>
      </div>
      {/* Mobile Menu Button */}
      <motion.div
        className="md:hidden flex items-center"
        ref={buttonRef}
        whileTap={{ scale: 0.95 }}
      >
        <button
          onClick={toggleMenu}
          className="focus:outline-none text-white"
          aria-label="Toggle menu"
        >
          <motion.svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            animate={isMenuOpen ? "open" : "closed"}
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </motion.svg>
        </button>
      </motion.div>
      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            ref={menuRef}
            className="md:hidden top-20 right-4 left-4 z-40 fixed bg-gray-800 bg-opacity-95 shadow-lg px-6 py-4 rounded-lg"
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
          >
            <div className="flex flex-col space-y-4">
              {NAV_ITEMS.map((item) => (
                <div key={item.name}>
                  {item.subItems ? (
                    <>
                      <button
                        onClick={() => toggleDropdown(item.name)}
                        className="relative flex justify-between items-center py-2 w-full text-left"
                      >
                        {item.name}
                        {item.name === "Our Imports" && (
                          <span className="-top-2 -right-4 absolute bg-red-600 px-2 py-[2px] rounded-full text-[10px] text-white">
                            NEW
                          </span>
                        )}
                        <span>{openDropdown === item.name ? "▲" : "▼"}</span>
                      </button>

                      <AnimatePresence>
                        {openDropdown === item.name && (
                          <motion.div
                            initial="closed"
                            animate="open"
                            exit="closed"
                            variants={dropdownVariants}
                            className="pl-4 overflow-hidden"
                          >
                            {item.subItems.map((subItem) => (
                              <a
                                key={subItem.name}
                                href={subItem.href}
                                className="block py-2 hover:text-gray-300"
                                onClick={() => setIsMenuOpen(false)}
                              >
                                {subItem.name}
                              </a>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <a
                      href={item.href}
                      className="block py-2"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </a>
                  )}
                </div>
              ))}

              <motion.button
                className="bg-blue-600 mt-2 py-3 rounded-md w-full font-medium"
                whileTap={{ scale: 0.95 }}
              >
                Contact Us
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Header;
