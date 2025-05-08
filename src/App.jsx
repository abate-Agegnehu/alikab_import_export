import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Header from "./components/header/Header";
import Carcko from "./pages/Carcko";
import Contact from "./pages/Contact";
import Export from "./pages/Export";
import Home from "./pages/Home";
import Machine from "./pages/Machine";
import Transportation from "./pages/Transportation";
import Footer from "./components/footer/Footer";
import ScrollToTop from "./components/ScrollTop";
import AgriculturalChemicals from "./pages/AgriculturalChemicals";
import ConsultancyPage from "./pages/ConsultancyPage";
const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/vehicles" element={<Carcko />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/export" element={<Export />} />
        <Route path="/transportation" element={<Transportation />} />
        <Route path="/machinery" element={<Machine />} />
        <Route path="/agro-chemicals" element={<AgriculturalChemicals />} />
        <Route path="/consultancy" element={<ConsultancyPage />} />
      </Routes>
      <Footer />
      {/* <div>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis blanditiis cupiditate, voluptatum quos totam qui itaque molestias asperiores consequatur? Facilis illum vero totam culpa adipisci aut modi eveniet inventore beatae.</div> */}
    </Router>
  );
};

export default App;
