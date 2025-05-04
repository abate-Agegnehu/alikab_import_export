import React, { useState, useEffect } from "react";
import Header from "../header/Header";
const MainLayout = ({ children }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative flex flex-col bg-white w-full min-h-screen overflow-x-hidden">
      <Header scrolled={scrolled} />
      <main>{children}</main>
    </div>
  );
};

export default MainLayout;
