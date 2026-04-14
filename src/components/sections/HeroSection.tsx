import { AnimatedSection } from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import { useState } from "react";

const HeroSection = () => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-brand-navy-900">
      <div className="absolute inset-0 bg-gradient-to-br from-brand-navy-900 via-brand-navy-800 to-brand-navy-700" />
      <div className="absolute inset-0 opacity-20" style={{
        backgroundImage: "radial-gradient(circle at 20% 50%, hsl(190 100% 54% / 0.15), transparent 50%), radial-gradient(circle at 80% 20%, hsl(190 100% 54% / 0.1), transparent 40%)"
      }} />

      <div className="container relative z-10 px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left — Copy */}
          <div>
            <AnimatedSection>
              <span className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold mb-6 bg-brand-cyan-500/15 text-brand-cyan-500 border border-brand-cyan-500/30">
                Programa de Formação Profissional Lean
              </span>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-extrabold text-white leading-[1.1] tracking-tight mb-6 text-balance">
                Você entregou o projeto no prazo.{" "}
                <span className="text-brand-cyan-500">Seu colega foi promovido.</span>
              </h1>
            </AnimatedSection>

            <AnimatedSection delay={0.15}>
              <h2 className="text-lg md:text-xl text-white/80 font-semibold mb-4 leading-relaxed">
                Gestores não promovem quem trabalha mais. Eles promovem quem consegue mostrar, com dados, o impacto do próprio trabalho.
              </h2>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <p className="text-base md:text-lg text-white/60 leading-relaxed mb-4">
                Este guia ensina isso, passo a passo, em 30 dias.
              </p>
              <p className="text-base text-white/50 leading-relaxed">
                Você vai identificar um problema real no seu trabalho, estruturar uma solução com números, executar a melhoria e documentar o resultado de uma forma que nenhum gestor consegue ignorar.
              </p>
            </AnimatedSection>
          </div>

          {/* Right — Capture Form */}
          <AnimatedSection delay={0.3}>
            <div className="rounded-2xl p-8 md:p-10 border border-white/10 bg-white/5 backdrop-blur-md shadow-2xl">
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
                  <label className="text-white/60 text-sm font-medium mb-1.5 block">Nome</label>
                  <input
                    type="text"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                    placeholder="Seu nome completo"
                    className="w-full rounded-xl bg-white/10 border border-white/15 text-white placeholder:text-white/30 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-cyan-500/50 transition-all"
                  />
                </div>
                <div>
                  <label className="text-white/60 text-sm font-medium mb-1.5 block">E-mail</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="seu@email.com"
                    className="w-full rounded-xl bg-white/10 border border-white/15 text-white placeholder:text-white/30 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-cyan-500/50 transition-all"
                  />
                </div>
                <div>
                  <label className="text-white/60 text-sm font-medium mb-1.5 block">Telefone</label>
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
                  className="w-full bg-brand-green hover:bg-brand-green/90 text-brand-navy-900 font-extrabold rounded-full py-6 text-base shadow-lg shadow-brand-green/25 hover:scale-[1.02] transition-all duration-300 mt-2"
                >
                  QUERO BAIXAR O GUIA GRATUITO
                  <ArrowDown className="w-5 h-5 ml-2" />
                </Button>
              </form>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
