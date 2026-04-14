import { AnimatedSection, AnimatedItem } from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

const partners = [
  "Gazeta do Povo", "Globo.com", "iSpring", "Band News", "Diário Indústria"
];

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-brand-navy-900">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-navy-900 via-brand-navy-800 to-brand-navy-700" />
      <div className="absolute inset-0 opacity-20" style={{
        backgroundImage: "radial-gradient(circle at 20% 50%, hsl(190 100% 54% / 0.15), transparent 50%), radial-gradient(circle at 80% 20%, hsl(190 100% 54% / 0.1), transparent 40%)"
      }} />

      <div className="container relative z-10 text-center px-4 py-20">
        <AnimatedSection>
          <span className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold mb-6 bg-brand-cyan-500/15 text-brand-cyan-500 border border-brand-cyan-500/30">
            Plataforma EAD Corporativa
          </span>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight tracking-tight mb-6 text-balance max-w-5xl mx-auto">
            Sua Escola de Melhoria Contínua em{" "}
            <span className="text-brand-cyan-500">5 minutos</span> no ar
          </h1>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto mb-10 leading-relaxed">
            Ganhe velocidade nos programas de capacitação e se beneficie de uma plataforma completa para Lean, Lean Six Sigma e desenvolvimento corporativo.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.3}>
          <Button
            size="lg"
            className="bg-brand-green hover:bg-brand-green/90 text-brand-navy-900 font-bold rounded-full px-8 py-6 text-base gap-3 shadow-lg shadow-brand-green/25 hover:scale-105 transition-all duration-300"
          >
            <span>Falar com especialista</span>
            <span className="w-10 h-10 rounded-full bg-white text-brand-navy-900 inline-flex items-center justify-center shadow-sm">
              <MessageCircle className="w-5 h-5" />
            </span>
          </Button>
        </AnimatedSection>

        {/* Social Proof */}
        <AnimatedSection delay={0.5}>
          <div className="mt-16 pt-8 border-t border-white/10">
            <p className="text-white/40 text-sm font-medium uppercase tracking-wider mb-6">
              Presente na mídia
            </p>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
              {partners.map((name) => (
                <span
                  key={name}
                  className="text-white/30 font-bold text-sm md:text-base tracking-wide hover:text-white/60 transition-colors duration-300 cursor-default"
                >
                  {name}
                </span>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default HeroSection;
