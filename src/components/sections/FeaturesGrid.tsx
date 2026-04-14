import { AnimatedSection, AnimatedItem } from "@/components/AnimatedSection";
import { GraduationCap, Layers, BarChart3, Shield, Zap, Globe } from "lucide-react";

const features = [
  { icon: GraduationCap, title: "White Belt a Black Belt", description: "Trilhas completas de certificação Lean Six Sigma com conteúdos atualizados e práticos." },
  { icon: Layers, title: "Trilhas Personalizáveis", description: "Crie percursos de aprendizado sob medida para cada área, cargo ou nível de maturidade." },
  { icon: BarChart3, title: "Analytics em Tempo Real", description: "Painéis de acompanhamento de progresso, engajamento e desempenho de cada colaborador." },
  { icon: Shield, title: "Compliance & Governança", description: "Controle de acessos, certificados automáticos e auditoria completa das ações." },
  { icon: Zap, title: "Setup em 5 Minutos", description: "Plataforma pronta para uso imediato sem necessidade de infraestrutura ou equipe técnica." },
  { icon: Globe, title: "100% Cloud & Responsivo", description: "Acesse de qualquer dispositivo. Infraestrutura escalável sem preocupações com servidor." },
];

const FeaturesGrid = () => {
  return (
    <section className="py-20 md:py-28 bg-brand-navy-900 relative overflow-hidden">
      <div className="absolute inset-0 opacity-30" style={{
        backgroundImage: "radial-gradient(circle at 80% 80%, hsl(190 100% 54% / 0.12), transparent 50%)"
      }} />

      <div className="container relative z-10 px-4">
        <AnimatedSection>
          <div className="flex items-center gap-3 mb-4">
            <span className="w-9 h-9 rounded-full bg-white text-brand-navy-900 inline-grid place-items-center font-bold text-sm shadow-lg">2</span>
            <div className="flex-1 h-0.5 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
            <span className="bg-white/10 text-white text-xs font-bold px-3 py-1.5 rounded-full border border-white/20">
              Funcionalidades
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-4 tracking-tight">
            Tudo que você precisa em uma só plataforma
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mb-14">
            Módulos e funcionalidades pensadas para empresas que levam educação corporativa a sério.
          </p>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((feature, i) => (
            <AnimatedItem key={feature.title} delay={i * 0.1}>
              <div className="group rounded-2xl p-7 border border-white/8 hover:border-brand-cyan-500/30 bg-white/5 backdrop-blur-sm hover:bg-white/8 transition-all duration-300 hover:-translate-y-1">
                <div className="w-12 h-12 rounded-xl bg-brand-cyan-500/15 text-brand-cyan-500 inline-flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{feature.description}</p>
              </div>
            </AnimatedItem>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesGrid;
