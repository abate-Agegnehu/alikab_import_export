import LandingPage from "../components/home/LandingPage";
import AboutHero from "../components/home/AboutHero";
import CompanyHistory from "../components/home/CompanyHistory";
import Testimonials from "../components/home/Testimonials";

const Home = () => {
  return (
    <div>
      <LandingPage />
      <AboutHero />
      <CompanyHistory />
      <Testimonials />
    </div>
  );
};

export default Home;
