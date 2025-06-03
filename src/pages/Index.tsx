
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import SolarBenefits from "@/components/SolarBenefits";
import EnergyCalculator from "@/components/EnergyCalculator";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <SolarBenefits />
      <EnergyCalculator />
      <Footer />
      <ScrollToTopButton />
    </div>
  );
};

export default Index;
