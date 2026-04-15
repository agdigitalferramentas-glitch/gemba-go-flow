import { AnimatedSection } from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useState } from "react";
import heroBg from "@/assets/bg-1-gemba-desktop.webp";
import heroBgMobile from "@/assets/bg-1-gemba-mobile.webp";

const HeroSection = () => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-brand-navy-900">
      {/* Desktop bg */}
      <div
        className="absolute inset-0 hidden sm:block"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: "cover",
          backgroundPosition: "top center",
          backgroundRepeat: "no-repeat",
        }}
      />
      {/* Mobile bg */}
      <div
        className="absolute inset-0 block sm:hidden"
        style={{
          backgroundImage: `url(${heroBgMobile})`,
          backgroundSize: "cover",
          backgroundPosition: "top center",
          backgroundRepeat: "no-repeat",
        }}
      />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-5 sm:px-8 pt-10 sm:py-20 pb-20">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left — Copy */}
          <div className="min-w-0">
            <AnimatedSection>
              <span className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold mb-6 bg-brand-cyan-500/15 text-brand-cyan-500 border border-brand-cyan-500/30">
                Programa de Formação Profissional Lean
              </span>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-extrabold text-white leading-[1.1] tracking-tight mb-6">
                Você entregou o&nbsp;projeto no&nbsp;prazo.{" "}
                <span className="text-brand-cyan-500">Seu colega foi&nbsp;promovido.</span>
              </h1>
            </AnimatedSection>

            <AnimatedSection delay={0.15}>
              <h2 className="text-base sm:text-lg md:text-xl text-white font-semibold mb-4 leading-relaxed">
                Gestores não promovem quem trabalha mais. Eles promovem quem consegue mostrar, com dados, o impacto do próprio trabalho.
              </h2>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <p className="text-sm sm:text-base md:text-lg text-white/90 font-light leading-relaxed mb-4">
                Este guia ensina isso, passo a passo, em&nbsp;30&nbsp;dias.
              </p>
              <p className="text-sm sm:text-base text-white/80 font-light leading-relaxed">
                Você vai identificar um problema real no seu trabalho, estruturar uma solução com números, executar a melhoria e documentar o resultado de uma forma que nenhum gestor consegue ignorar.
              </p>
            </AnimatedSection>
          </div>

          {/* Right — Capture Form */}
          <div className="min-w-0">
            <AnimatedSection delay={0.3}>
              <div className="rounded-2xl p-6 sm:p-8 md:p-10 border border-white/10 bg-white/5 backdrop-blur-md shadow-2xl">
                <h3 className="text-xl font-bold text-white mb-6 text-center">
                  Baixe o guia gratuito
                </h3>
                <form
                  className="space-y-4"
                  onSubmit={(e) => {
                    e.preventDefault();
                  }}
                >
                  <div>
                    <input
                      type="text"
                      value={nome}
                      onChange={(e) => setNome(e.target.value)}
                      placeholder="Seu nome completo"
                      className="w-full rounded-xl bg-white/10 border border-white/15 text-white placeholder:text-white/30 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-cyan-500/50 transition-all"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="seu@email.com"
                      className="w-full rounded-xl bg-white/10 border border-white/15 text-white placeholder:text-white/30 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-cyan-500/50 transition-all"
                    />
                  </div>
                  <div>
                    <input
                      type="tel"
                      value={telefone}
                      onChange={(e) => setTelefone(e.target.value)}
                      placeholder="(00) 00000-0000"
                      className="w-full rounded-xl bg-white/10 border border-white/15 text-white placeholder:text-white/30 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-cyan-500/50 transition-all"
                    />
                  </div>
                  <Button
                    type="submit"
                    size="lg"
                    className="group w-full bg-brand-green text-brand-navy-900 font-extrabold rounded-full px-2.5 py-1.5 sm:px-3 sm:py-2 text-xs sm:text-base shadow-[0_8px_20px_-8px_rgba(0,208,84,0.45)] hover:bg-white hover:shadow-[0_16px_32px_-8px_rgba(255,255,255,0.3)] hover:scale-[1.03] active:scale-[0.98] transition-all duration-300 ease-out mt-2 leading-snug focus:outline-none focus:ring-[3px] focus:ring-brand-cyan-500/35 h-auto"
                  >
                    <span className="flex-1 text-left">QUERO BAIXAR O&nbsp;GUIA&nbsp;GRATUITO</span>
                    <span className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white text-brand-navy-900 inline-flex items-center justify-center shadow-[0_2px_8px_rgba(0,0,0,0.15)] flex-shrink-0 group-hover:bg-brand-navy-900 group-hover:text-white group-hover:rotate-[360deg] transition-all duration-500 ease-out">
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform duration-300" />
                    </span>
                  </Button>
                </form>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;