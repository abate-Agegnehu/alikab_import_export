import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
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
import AdminDashboard from "./components/adminPage/AdminDashboard";

// Create a separate component that uses routing hooks
const AppContent = () => {
  const location = useLocation();
  const isAdminPage = location.pathname === "/admin";

  return (
    <div>
      <ScrollToTop />
      {!isAdminPage && <Header />}
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
        <Route path="/admin" element={<AdminDashboard />} />
      </Routes>
      {!isAdminPage && <Footer />}
    </div>
  );
};

// Main App component that wraps everything with Router
const App = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

export default App;
