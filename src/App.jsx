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
// import Consultancy from "./pages/Consultancy";
const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/vichles" element={<Carcko />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/export" element={<Export />} />
        {/* <Route path="/consultancy" element={<Consultancy />} /> */}
        <Route path="/transportation" element={<Transportation />} />
        <Route path="/machinery" element={<Machine />} />
        {/* <Route path="/agro-chemical" element={<AgricultureChemicals />} /> */}
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
