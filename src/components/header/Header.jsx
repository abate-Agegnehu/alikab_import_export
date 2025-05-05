import React, { useState, useEffect, useRef } from "react";
import logo from "../../assets/logoUpdated.png";
import { Link, useNavigate } from "react-router-dom";

const Header = ({ scrolled }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const menuRef = useRef(null);
  const buttonRef = useRef(null);
  const dropdownTimeoutRef = useRef(null);

  const navigate = useNavigate();

  const NAV_ITEMS = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    {
      name: "Our Imports",
      subItems: [
        { name: "Vehicles", href: "/vichles" },
        { name: "Agriculture Chemicals", href: "/agro-chemicals" },
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

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

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
      clearTimeout(dropdownTimeoutRef.current);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 z-50 flex justify-between items-center p-4 sm:p-6 w-full transition-all duration-300 ${
        scrolled
          ? "bg-[#212A5E] text-white shadow-md"
          : "bg-transparent text-white"
      }`}
    >
      {/* Logo */}
      <div className="flex items-center space-x-4">
        <img
          src={logo}
          alt="Logo"
          className="h-10 sm:h-14 lg:h-16 object-contain"
        />
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center space-x-8">
        {NAV_ITEMS.map((item) => (
          <div
            key={item.name}
            className="relative"
            onMouseEnter={() => {
              if (item.subItems) {
                clearTimeout(dropdownTimeoutRef.current);
                setOpenDropdown(item.name);
              }
            }}
            onMouseLeave={() => {
              if (item.subItems) {
                dropdownTimeoutRef.current = setTimeout(() => {
                  setOpenDropdown(null);
                }, 200);
              }
            }}
          >
            {item.subItems ? (
              <>
                <button className="relative flex items-center hover:text-gray-300">
                  {item.name}
                  {item.name === "Our Imports" && (
                    <span className="-top-2 -right-5 absolute bg-red-600 px-2 py-[2px] rounded-full text-[10px] text-white">
                      NEW
                    </span>
                  )}
                  <span className="ml-1">▼</span>
                </button>

                {openDropdown === item.name && (
                  <div className="top-full left-0 z-40 absolute bg-white shadow-lg mt-2 rounded-md w-48 overflow-hidden text-gray-800">
                    {item.subItems.map((subItem) => (
                      <Link
                        key={subItem.name}
                        to={subItem.href}
                        className="block hover:bg-blue-50 px-4 py-2"
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </>
            ) : (
              <Link to={item.href} className="hover:text-gray-300">
                {item.name}
              </Link>
            )}
          </div>
        ))}

        <button
          className="bg-blue-700 hover:bg-blue-800 px-6 py-2 rounded-md font-medium text-sm transition-colors"
          onClick={() => navigate("/contact")}
        >
          Contact Us
        </button>
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden flex items-center" ref={buttonRef}>
        <button
          onClick={toggleMenu}
          className="focus:outline-none text-white"
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
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
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div
          ref={menuRef}
          className="md:hidden top-20 right-4 left-4 z-40 fixed bg-gray-800 bg-opacity-95 shadow-lg px-6 py-4 rounded-lg"
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

                    {openDropdown === item.name && (
                      <div className="pl-4 overflow-hidden">
                        {item.subItems.map((subItem) => (
                          <Link
                            key={subItem.name}
                            to={subItem.href}
                            className="block py-2 hover:text-gray-300"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    to={item.href}
                    className="block py-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}

            <button
              className="bg-blue-600 mt-2 py-3 rounded-md w-full font-medium"
              onClick={() => {
                navigate("/contact");
                setIsMenuOpen(false);
              }}
            >
              Contact Us
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;
