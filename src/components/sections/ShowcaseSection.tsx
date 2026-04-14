import { AnimatedSection, AnimatedItem } from "@/components/AnimatedSection";
import { Check, Monitor } from "lucide-react";

const highlights = [
  "Trilhas de aprendizagem com certificação",
  "Dashboards gerenciais para RH e líderes",
  "Gamificação e ranking de engajamento",
  "Integração com sistemas corporativos",
  "Suporte dedicado e onboarding guiado",
  "Ambiente seguro e LGPD compliance",
];

const ShowcaseSection = () => {
  return (
    <section className="py-20 md:py-28 bg-muted relative overflow-hidden">
      <div className="absolute inset-0" style={{
        background: "radial-gradient(110% 170% at 110% -20%, hsl(222 96% 10% / 0.08) 0%, transparent 45%)"
      }} />

      <div className="container relative z-10 px-4">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Mockup Side */}
          <AnimatedSection>
            <div className="relative">
              <div className="rounded-2xl bg-brand-navy-900 p-8 md:p-12 shadow-2xl shadow-brand-navy-900/30 border border-white/5">
                <div className="flex items-center gap-2 mb-6">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400" />
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                </div>
                <div className="space-y-3">
                  <div className="h-4 bg-white/10 rounded-full w-3/4" />
                  <div className="h-4 bg-white/10 rounded-full w-1/2" />
                  <div className="h-20 bg-brand-cyan-500/10 rounded-xl mt-4 border border-brand-cyan-500/20 flex items-center justify-center">
                    <Monitor className="w-8 h-8 text-brand-cyan-500/50" />
                  </div>
                  <div className="grid grid-cols-3 gap-2 mt-4">
                    <div className="h-16 bg-white/5 rounded-lg" />
                    <div className="h-16 bg-white/5 rounded-lg" />
                    <div className="h-16 bg-white/5 rounded-lg" />
                  </div>
                </div>
              </div>
              {/* Glow effect */}
              <div className="absolute -inset-4 bg-brand-cyan-500/5 rounded-3xl -z-10 blur-2xl" />
            </div>
          </AnimatedSection>

          {/* Content Side */}
          <div>
            <AnimatedSection>
              <div className="flex items-center gap-3 mb-4">
                <span className="w-9 h-9 rounded-full bg-brand-navy-900 text-white inline-grid place-items-center font-bold text-sm shadow-lg">3</span>
                <div className="flex-1 h-0.5 bg-gradient-to-r from-transparent via-brand-navy-900/20 to-transparent" />
                <span className="bg-brand-navy-900 text-white text-xs font-bold px-3 py-1.5 rounded-full">
                  Plataforma
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-brand-navy-900 mb-6 tracking-tight">
                Uma plataforma completa para o seu time
              </h2>
            </AnimatedSection>

            <div className="space-y-4">
              {highlights.map((item, i) => (
                <AnimatedItem key={item} delay={i * 0.08}>
                  <div className="flex items-start gap-3 group">
                    <div className="w-6 h-6 rounded-full bg-brand-cyan-100 text-brand-cyan-600 inline-flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform duration-200">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-brand-navy-900/80 font-medium">{item}</span>
                  </div>
                </AnimatedItem>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShowcaseSection;
