import HeroSection from "@/components/sections/HeroSection";
import BentoGrid from "@/components/sections/BentoGrid";
import GembaSection from "@/components/sections/GembaSection";
import Footer from "@/components/sections/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <BentoGrid />
      <GembaSection />
      <Footer />
    </div>
  );
};

export default Index;
