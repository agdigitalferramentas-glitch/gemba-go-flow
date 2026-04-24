import { AnimatedSection } from "@/components/AnimatedSection";
import { useEffect } from "react";
import heroBg from "@/assets/bg-1-gemba-desktop.webp";
import heroBgMobile from "@/assets/bg-1-gemba-mobile.webp";

const AGSELL_ORIGIN = "https://site.agsell.com.br";
const AGSELL_FORM_URL = `${AGSELL_ORIGIN}/forms/40b46db9-0981-4268-9ed0-57cded476c2c`;

const HeroSectionTesteAg = () => {
  // Pré-conecta ao domínio do form para acelerar o carregamento do iframe
  useEffect(() => {
    const links: HTMLLinkElement[] = [];
    const rels: Array<{ rel: string; crossOrigin?: string }> = [
      { rel: "preconnect", crossOrigin: "anonymous" },
      { rel: "dns-prefetch" },
    ];
    rels.forEach(({ rel, crossOrigin }) => {
      const link = document.createElement("link");
      link.rel = rel;
      link.href = AGSELL_ORIGIN;
      if (crossOrigin) link.crossOrigin = crossOrigin;
      document.head.appendChild(link);
      links.push(link);
    });
    return () => {
      links.forEach((l) => l.parentNode?.removeChild(l));
    };
  }, []);

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

          {/* Right — Capture Form (agsell iframe) */}
          <div className="min-w-0">
            <AnimatedSection delay={0.3}>
              <div className="rounded-2xl p-6 sm:p-8 md:p-10 border border-white/10 bg-white/5 backdrop-blur-md shadow-2xl gemba-form-container">
                <h3 className="text-xl font-bold text-white mb-6 text-center">
                  Baixe o guia gratuito
                </h3>
                <iframe
                  src={AGSELL_FORM_URL}
                  title="Formulário de captura"
                  loading="eager"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full block border-0 bg-transparent"
                  style={{ height: 400, colorScheme: "normal" }}
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSectionTesteAg;
