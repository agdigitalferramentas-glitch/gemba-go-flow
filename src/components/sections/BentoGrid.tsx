import { AnimatedSection, AnimatedItem } from "@/components/AnimatedSection";
import { TrendingUp, Users, BookOpen, Award } from "lucide-react";

const stats = [
  { value: "90%", label: "de economia com o orçamento", icon: TrendingUp },
  { value: "+500", label: "empresas atendidas", icon: Users },
  { value: "+1.200", label: "cursos publicados", icon: BookOpen },
  { value: "R$1bi", label: "em economia gerada", icon: Award },
];

const benefits = [
  {
    title: "Aprendizado que engaja",
    description: "Programas de capacitação continuada são um motor gerador de performance e retenção de talentos.",
  },
  {
    title: "Gestão simplificada",
    description: "Dashboards intuitivos, relatórios automáticos e trilhas personalizáveis para cada perfil de colaborador.",
  },
];

const BentoGrid = () => {
  return (
    <section className="py-20 md:py-28 bg-muted relative overflow-hidden">
      <div className="absolute inset-0" style={{
        background: "radial-gradient(110% 170% at 110% -20%, hsl(222 96% 10% / 0.08) 0%, transparent 45%)"
      }} />

      <div className="container relative z-10 px-4">
        <AnimatedSection>
          <div className="flex items-center gap-3 mb-4">
            <span className="w-9 h-9 rounded-full bg-brand-navy-900 text-white inline-grid place-items-center font-bold text-sm shadow-lg">1</span>
            <div className="flex-1 h-0.5 bg-gradient-to-r from-transparent via-brand-navy-900/20 to-transparent" />
            <span className="bg-brand-navy-900 text-white text-xs font-bold px-3 py-1.5 rounded-full">
              Indicadores
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-brand-navy-900 mb-4 tracking-tight">
            Resultados que falam por si
          </h2>
          <p className="text-brand-navy-900/70 text-lg max-w-2xl mb-12">
            Curadoria, trilhas e reaproveitamento de conteúdos elevam o ROI dos seus treinamentos.
          </p>
        </AnimatedSection>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          {stats.map((stat, i) => (
            <AnimatedItem key={stat.label} delay={i * 0.1}>
              <div className="bg-white rounded-xl p-6 border border-brand-navy-900/10 shadow-lg shadow-brand-navy-900/5 hover:-translate-y-1 hover:shadow-xl transition-all duration-300">
                <stat.icon className="w-6 h-6 text-brand-cyan-600 mb-3" />
                <div className="text-3xl md:text-4xl font-extrabold text-brand-navy-900 tracking-tight mb-1">
                  {stat.value}
                </div>
                <p className="text-brand-navy-900/60 text-sm">{stat.label}</p>
              </div>
            </AnimatedItem>
          ))}
        </div>

        {/* Benefit Cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {benefits.map((benefit, i) => (
            <AnimatedItem key={benefit.title} delay={0.2 + i * 0.15}>
              <div className="rounded-2xl p-8 md:p-10 text-white shadow-xl"
                style={{ background: "linear-gradient(180deg, #031945, #021534 60%, #011133 100%)" }}
              >
                <h3 className="text-xl md:text-2xl font-bold mb-3">{benefit.title}</h3>
                <p className="text-white/70 leading-relaxed">{benefit.description}</p>
              </div>
            </AnimatedItem>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BentoGrid;
