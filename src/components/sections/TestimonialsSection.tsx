import { AnimatedSection, AnimatedItem } from "@/components/AnimatedSection";

const testimonials = [
  {
    quote: "O Hoshin Kanri envolveu todo o chão de fábrica com metas claras. A plataforma da Gemba nos deu estrutura para escalar o programa.",
    name: "Marcos Polo",
    role: "Gerente de Operações",
    avatar: "MP",
    variant: "dark" as const,
  },
  {
    quote: "Reduzimos 40% do tempo de onboarding com trilhas automatizadas. O ROI foi visível já no primeiro trimestre.",
    name: "Carla Mendes",
    role: "Diretora de RH",
    avatar: "CM",
    variant: "light" as const,
  },
  {
    quote: "A melhor decisão que tomamos foi centralizar toda a capacitação na Gemba Ensina. Simplicidade e resultados reais.",
    name: "Roberto Silva",
    role: "CEO",
    avatar: "RS",
    variant: "primary" as const,
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 md:py-28 bg-muted relative overflow-hidden">
      <div className="absolute inset-0" style={{
        background: "radial-gradient(110% 170% at 110% -20%, hsl(222 96% 10% / 0.08) 0%, transparent 45%)"
      }} />

      <div className="container relative z-10 px-4">
        <AnimatedSection>
          <div className="flex items-center gap-3 mb-4">
            <span className="w-9 h-9 rounded-full bg-brand-navy-900 text-white inline-grid place-items-center font-bold text-sm shadow-lg">4</span>
            <div className="flex-1 h-0.5 bg-gradient-to-r from-transparent via-brand-navy-900/20 to-transparent" />
            <span className="bg-brand-navy-900 text-white text-xs font-bold px-3 py-1.5 rounded-full">
              Depoimentos
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-brand-navy-900 mb-4 tracking-tight">
            Palavra dos nossos clientes
          </h2>
          <p className="text-brand-navy-900/70 text-lg max-w-2xl mb-14">
            Empresas que transformaram sua educação corporativa com a Gemba Ensina.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => {
            const isDark = t.variant === "dark";
            const isPrimary = t.variant === "primary";
            const bgClass = isDark
              ? "bg-brand-navy-900 text-white"
              : isPrimary
                ? "text-white"
                : "bg-white border border-brand-navy-900/10 text-brand-navy-900";
            const bgStyle = isPrimary
              ? { background: "linear-gradient(180deg, #031945, #021534 60%, #011133 100%)" }
              : isDark
                ? {}
                : {};

            return (
              <AnimatedItem key={t.name} delay={i * 0.15}>
                <div
                  className={`rounded-2xl p-7 h-full flex flex-col justify-between shadow-lg hover:-translate-y-1 transition-all duration-300 ${bgClass}`}
                  style={bgStyle}
                >
                  <div>
                    <p className="text-sm mb-3 opacity-70">Palavra do Colaborador</p>
                    <p className="text-lg font-semibold leading-relaxed mb-6">
                      <span className="opacity-40 font-bold">"</span>
                      {t.quote}
                      <span className="opacity-40 font-bold">"</span>
                    </p>
                  </div>
                  <div className="flex items-center gap-3 mt-auto">
                    <div className={`w-11 h-11 rounded-full inline-flex items-center justify-center font-bold text-sm ${isDark || isPrimary ? "bg-white/20 text-white" : "bg-brand-navy-900/10 text-brand-navy-900"}`}>
                      {t.avatar}
                    </div>
                    <div>
                      <p className="font-semibold text-sm">{t.name}</p>
                      <p className="text-sm opacity-60">{t.role}</p>
                    </div>
                  </div>
                </div>
              </AnimatedItem>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
