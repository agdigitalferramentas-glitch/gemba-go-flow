import { AnimatedSection } from "@/components/AnimatedSection";
import { useEffect } from "react";
import heroBg from "@/assets/bg-1-gemba-desktop.webp";
import heroBgMobile from "@/assets/bg-1-gemba-mobile.webp";

const HeroSection = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://gembahub.gembagroup.com.br/web-forms/forms/QBPo0Vv4qiJCzN13OULtFbdhjD31gQJ5sKBEgybXkSscHfrFkP/form.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
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

          {/* Right — Capture Form */}
          <div className="min-w-0">
            <AnimatedSection delay={0.3}>
              <div className="rounded-2xl p-6 sm:p-8 md:p-10 border border-white/10 bg-white/5 backdrop-blur-md shadow-2xl gemba-form-container">
                <h3 className="text-xl font-bold text-white mb-6 text-center">
                  Baixe o guia gratuito
                </h3>
                <div
                  dangerouslySetInnerHTML={{
                    __html: `
                      <form class="space-y-4">
                        <div class="mb-4">
                          <input type="text" name="persons[name]" id="persons[name]" placeholder="Seu nome" class="w-full rounded-xl bg-white/10 border border-white/15 text-white placeholder:text-white/30 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[hsl(190,100%,54%)]/50 transition-all" />
                        </div>
                        <div class="mb-4">
                          <input type="email" name="persons[emails][0][value]" id="persons[emails][0][value]" placeholder="Seu melhor e-mail" class="w-full rounded-xl bg-white/10 border border-white/15 text-white placeholder:text-white/30 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[hsl(190,100%,54%)]/50 transition-all" />
                          <input type="hidden" name="persons[emails][0][label]" value="work" />
                        </div>
                        <div class="mb-4">
                          <input type="text" name="persons[contact_numbers][0][value]" id="persons[contact_numbers][0][value]" placeholder="DDD + WhatsApp" class="w-full rounded-xl bg-white/10 border border-white/15 text-white placeholder:text-white/30 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[hsl(190,100%,54%)]/50 transition-all" />
                          <input type="hidden" name="persons[contact_numbers][0][label]" value="work" />
                        </div>
                        <div class="flex justify-center mt-2">
                          <button type="submit" class="group w-full bg-[hsl(142,100%,41%)] text-[hsl(213,80%,14%)] font-extrabold rounded-full px-2.5 py-1.5 text-sm shadow-[0_8px_20px_-8px_rgba(0,208,84,0.45)] hover:bg-white hover:shadow-[0_16px_32px_-8px_rgba(255,255,255,0.3)] hover:scale-[1.03] active:scale-[0.98] transition-all duration-300 ease-out whitespace-normal text-center inline-flex items-center justify-center gap-2">
                            <span class="flex-1 text-center">QUERO BAIXAR O GUIA GRATUITO</span>
                            <span class="w-11 h-11 rounded-full bg-white text-[hsl(213,80%,14%)] inline-flex items-center justify-center shadow-[0_2px_8px_rgba(0,0,0,0.15)] flex-shrink-0 group-hover:rotate-[360deg] transition-all duration-500 ease-out">
                              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="group-hover:translate-x-0.5 transition-transform duration-300"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                            </span>
                          </button>
                        </div>
                      </form>
                    `,
                  }}
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;