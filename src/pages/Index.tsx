import HeroSection from "@/components/sections/HeroSection";
import BentoGrid from "@/components/sections/BentoGrid";
import FeaturesGrid from "@/components/sections/FeaturesGrid";
import ShowcaseSection from "@/components/sections/ShowcaseSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import PricingSection from "@/components/sections/PricingSection";
import FAQSection from "@/components/sections/FAQSection";
import Footer from "@/components/sections/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <BentoGrid />
      <FeaturesGrid />
      <ShowcaseSection />
      <TestimonialsSection />
      <PricingSection />
      <FAQSection />
      <Footer />
    </div>
  );
};

export default Index;
