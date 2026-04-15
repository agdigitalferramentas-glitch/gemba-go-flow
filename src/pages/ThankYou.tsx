import { AnimatedSection } from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, BookOpen, Target, RefreshCw, Bookmark } from "lucide-react";
import Footer from "@/components/sections/Footer";

const DOWNLOAD_URL = "https://drive.google.com/file/d/1_Vhm22Qzz9_n5k4ryUFxrpHhGT9cnZdD/view?usp=sharing";

const ThankYou = () => {
  return (
    <div className="min-h-screen overflow-x-hidden bg-brand-navy-900">
      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              "radial-gradient(circle at 30% 20%, hsl(190 100% 54% / 0.18), transparent 50%), radial-gradient(circle at 70% 80%, hsl(147 100% 41% / 0.10), transparent 50%)",
          }}
        />

        <div className="relative z-10 w-full max-w-3xl mx-auto px-5 sm:px-8 py-20 sm:py-28 text-center">
          <AnimatedSection>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-semibold mb-8 bg-brand-green/15 text-brand-green border border-brand-green/30">
              <CheckCircle className="w-4 h-4" />
              Inscrição confirmada
            </span>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-extrabold text-white leading-[1.1] tracking-tight mb-6">
              Tudo pronto! Seu material{" "}
              <span className="text-brand-cyan-500">está&nbsp;liberado.</span>
            </h1>
          </AnimatedSection>

          <AnimatedSection delay={0.15}>
            <p className="text-base sm:text-lg md:text-xl text-white/80 font-light leading-relaxed mb-10 max-w-2xl mx-auto">
              Clique no botão abaixo para baixar o material e começar a se posicionar como o profissional que seu gestor vai&nbsp;promover.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <a href={DOWNLOAD_URL} target="_blank" rel="noopener noreferrer" className="inline-block w-full sm:w-auto">
              <Button
                size="lg"
                className="group w-full sm:w-auto bg-brand-green text-brand-navy-900 font-extrabold rounded-full px-2.5 py-1.5 sm:px-6 sm:py-2 text-sm sm:text-base shadow-[0_8px_20px_-8px_rgba(0,208,84,0.45)] hover:bg-white hover:shadow-[0_16px_32px_-8px_rgba(255,255,255,0.3)] hover:scale-[1.03] active:scale-[0.98] transition-all duration-300 ease-out leading-snug h-auto"
              >
                <span className="flex-1 text-center">BAIXAR O PLANO DE&nbsp;30&nbsp;DIAS</span>
                <span className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white text-brand-navy-900 inline-flex items-center justify-center shadow-[0_2px_8px_rgba(0,0,0,0.15)] flex-shrink-0 group-hover:bg-brand-navy-900 group-hover:text-white group-hover:rotate-[360deg] transition-all duration-500 ease-out">
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform duration-300" />
                </span>
              </Button>
            </a>
          </AnimatedSection>
        </div>
      </section>

      {/* Tips Section */}
      <section className="py-16 md:py-20 relative">
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: "radial-gradient(circle at 50% 0%, hsl(190 100% 54% / 0.1), transparent 60%)"
        }} />

        <div className="container relative z-10 px-6 max-w-4xl mx-auto">
          <AnimatedSection>
            <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-10 text-center tracking-tight">
              Como tirar o melhor proveito deste&nbsp;material:
            </h2>
          </AnimatedSection>

          <div className="grid sm:grid-cols-3 gap-6">
            <AnimatedSection delay={0.1}>
              <div className="rounded-2xl p-6 border border-white/10 bg-white/5 backdrop-blur-md h-full">
                <div className="w-12 h-12 rounded-xl bg-brand-cyan-500/15 text-brand-cyan-500 inline-flex items-center justify-center mb-4">
                  <Target className="w-6 h-6" />
                </div>
                <p className="text-white/80 text-sm sm:text-base leading-relaxed font-light">
                  Aplique o checklist em situações concretas do seu&nbsp;trabalho.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="rounded-2xl p-6 border border-white/10 bg-white/5 backdrop-blur-md h-full">
                <div className="w-12 h-12 rounded-xl bg-brand-cyan-500/15 text-brand-cyan-500 inline-flex items-center justify-center mb-4">
                  <BookOpen className="w-6 h-6" />
                </div>
                <p className="text-white/80 text-sm sm:text-base leading-relaxed font-light">
                  Identifique o que está travando o seu fluxo logo nos primeiros&nbsp;passos.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <div className="rounded-2xl p-6 border border-white/10 bg-white/5 backdrop-blur-md h-full">
                <div className="w-12 h-12 rounded-xl bg-brand-cyan-500/15 text-brand-cyan-500 inline-flex items-center justify-center mb-4">
                  <RefreshCw className="w-6 h-6" />
                </div>
                <p className="text-white/80 text-sm sm:text-base leading-relaxed font-light">
                  Não busque a perfeição de primeira; siga os passos e busque a melhoria&nbsp;contínua.
                </p>
              </div>
            </AnimatedSection>
          </div>

          <AnimatedSection delay={0.4}>
            <div className="mt-10 rounded-2xl p-6 border border-brand-cyan-500/20 bg-brand-cyan-500/5 backdrop-blur-md flex items-start gap-4">
              <Bookmark className="w-6 h-6 text-brand-cyan-500 flex-shrink-0 mt-0.5" />
              <p className="text-white/80 text-sm sm:text-base leading-relaxed font-light">
                <span className="text-brand-cyan-500 font-semibold">Dica extra:</span> Salve esta página nos seus favoritos caso precise baixar o arquivo em outro dispositivo mais&nbsp;tarde.
              </p>
            </div>
          </AnimatedSection>

          {/* Second CTA */}
          <AnimatedSection delay={0.5}>
            <div className="mt-12 flex justify-center">
              <a href={DOWNLOAD_URL} target="_blank" rel="noopener noreferrer" className="inline-block w-full sm:w-auto">
                <Button
                  size="lg"
                  className="group w-full sm:w-auto bg-brand-green text-brand-navy-900 font-extrabold rounded-full px-2.5 py-1.5 sm:px-6 sm:py-2 text-sm sm:text-base shadow-[0_8px_20px_-8px_rgba(0,208,84,0.45)] hover:bg-white hover:shadow-[0_16px_32px_-8px_rgba(255,255,255,0.3)] hover:scale-[1.03] active:scale-[0.98] transition-all duration-300 ease-out leading-snug h-auto"
                >
                  <span className="flex-1 text-center">BAIXAR O PLANO DE&nbsp;30&nbsp;DIAS</span>
                  <span className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white text-brand-navy-900 inline-flex items-center justify-center shadow-[0_2px_8px_rgba(0,0,0,0.15)] flex-shrink-0 group-hover:bg-brand-navy-900 group-hover:text-white group-hover:rotate-[360deg] transition-all duration-500 ease-out">
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform duration-300" />
                  </span>
                </Button>
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ThankYou;
