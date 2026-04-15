import { AnimatedSection } from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import gembaTeamImg from "@/assets/gemba-team.webp";

const GembaSection = () => {
  return (
    <section className="py-20 md:py-28 bg-brand-navy-900 relative overflow-hidden">
      <div className="absolute inset-0 opacity-30" style={{
        backgroundImage: "radial-gradient(circle at 80% 80%, hsl(190 100% 54% / 0.12), transparent 50%)"
      }} />

      <div className="container relative z-10 px-6">
        <AnimatedSection>
          <div className="flex items-center gap-3 mb-4">
            <span className="w-9 h-9 rounded-full bg-white text-brand-navy-900 inline-grid place-items-center font-bold text-sm shadow-lg">2</span>
            <div className="flex-1 h-0.5 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
            <span className="bg-white/10 text-white text-xs font-bold px-3 py-1.5 rounded-full border border-white/20">
              Quem é a Gemba Group
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-8 tracking-tight">
            O método por trás deste guia
          </h2>
        </AnimatedSection>

        <div className="flex flex-col lg:flex-row gap-10 lg:gap-14 items-center">
          <AnimatedSection delay={0.15} className="lg:w-1/2">
            <div className="space-y-6">
              <p className="text-white/70 text-lg leading-relaxed font-light">
                O Gemba Group foi fundado em 2008 por Vânia Batista e Marcelo Rodrigues com um propósito que não mudou desde o primeiro dia: capacitar profissionais para transformar empresas.
              </p>
              <p className="text-white/70 text-lg leading-relaxed font-light">
                Em 2009, criaram o primeiro Programa de Formação Profissional Lean da história. Em 2023, chegaram à 100ª edição com a mesma estrutura, o mesmo rigor e resultados que continuam aparecendo nas empresas onde os alunos trabalham.
              </p>
              <p className="text-white/70 text-lg leading-relaxed font-light">
                Hoje o Gemba Group é referência nacional em melhoria contínua e excelência operacional. Os projetos de certificação dos alunos já ultrapassaram{" "}
                <span className="text-brand-cyan-500 font-bold">R$ 1 bilhão em ganhos comprovados</span> para os clientes.
              </p>
              <p className="text-white/70 text-lg leading-relaxed font-light">
                Não ensinamos teoria. Ensinamos o que funciona dentro de empresas de verdade, com gente de verdade, gerando resultado que aparece nos relatórios de quem contratou.
              </p>
              <p className="text-white/90 text-lg font-semibold">
                Este guia é a porta de entrada para esse método.
              </p>
            </div>

            <div className="mt-10">
              <Button
                size="lg"
                className="bg-brand-green hover:bg-brand-green/90 text-brand-navy-900 font-extrabold rounded-full px-6 sm:px-8 py-6 text-sm sm:text-base gap-2 sm:gap-3 shadow-lg shadow-brand-green/25 hover:scale-[1.02] transition-all duration-300 w-full sm:w-auto"
              >
                QUERO O GUIA GRATUITO AGORA
                <ArrowRight className="w-5 h-5 flex-shrink-0" />
              </Button>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.3} className="lg:w-1/2">
            <img
              src={gembaTeamImg}
              alt="Equipe Gemba Group"
              className="w-full aspect-square object-cover rounded-2xl shadow-2xl"
            />
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default GembaSection;
