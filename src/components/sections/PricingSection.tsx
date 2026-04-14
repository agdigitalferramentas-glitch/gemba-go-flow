import { AnimatedSection, AnimatedItem } from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";
import { Check, X, ArrowUpRight, Star } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "Sob consulta",
    description: "Para equipes que estão começando",
    features: [
      { text: "Até 50 colaboradores", included: true },
      { text: "5 trilhas de aprendizado", included: true },
      { text: "Certificados automáticos", included: true },
      { text: "Relatórios básicos", included: true },
      { text: "Analytics avançado", included: false },
      { text: "API & integrações", included: false },
    ],
    popular: false,
  },
  {
    name: "Professional",
    price: "Sob consulta",
    description: "Para empresas em crescimento",
    features: [
      { text: "Até 500 colaboradores", included: true },
      { text: "Trilhas ilimitadas", included: true },
      { text: "Certificados personalizados", included: true },
      { text: "Analytics avançado", included: true },
      { text: "Gamificação completa", included: true },
      { text: "Suporte prioritário", included: true },
    ],
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Sob consulta",
    description: "Para grandes operações",
    features: [
      { text: "Colaboradores ilimitados", included: true },
      { text: "White-label completo", included: true },
      { text: "API & integrações", included: true },
      { text: "SSO & LDAP", included: true },
      { text: "SLA dedicado", included: true },
      { text: "Customer Success Manager", included: true },
    ],
    popular: false,
  },
];

const PricingSection = () => {
  return (
    <section className="py-20 md:py-28 bg-muted relative overflow-hidden">
      <div className="absolute inset-0" style={{
        background: "radial-gradient(120% 180% at 110% -20%, hsl(222 96% 10% / 0.08) 0%, transparent 45%)"
      }} />

      <div className="container relative z-10 px-4">
        <AnimatedSection>
          <div className="flex items-center gap-3 mb-4">
            <span className="w-9 h-9 rounded-full bg-brand-navy-900 text-white inline-grid place-items-center font-bold text-sm shadow-lg">5</span>
            <div className="flex-1 h-0.5 bg-gradient-to-r from-transparent via-brand-navy-900/20 to-transparent" />
            <span className="bg-brand-navy-900 text-white text-xs font-bold px-3 py-1.5 rounded-full">
              Planos
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-brand-navy-900 mb-4 tracking-tight">
            Planos que cabem na sua operação
          </h2>
          <p className="text-brand-navy-900/70 text-lg max-w-2xl mb-14">
            Escolha o plano ideal e comece a transformar a educação corporativa da sua empresa.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-6 items-stretch">
          {plans.map((plan, i) => (
            <AnimatedItem key={plan.name} delay={i * 0.15}>
              <div
                className={`rounded-2xl p-7 h-full flex flex-col transition-all duration-300 hover:-translate-y-1 ${
                  plan.popular
                    ? "text-white shadow-2xl scale-[1.02] relative"
                    : "bg-white border border-brand-navy-900/10 shadow-lg"
                }`}
                style={plan.popular ? {
                  background: "linear-gradient(180deg, #031945, #021534 60%, #011133 100%)",
                  boxShadow: "0 0 40px -10px hsl(190 100% 54% / 0.3), 0 20px 44px -20px hsl(222 96% 10% / 0.5)"
                } : {}}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-brand-cyan-500/20 text-white border border-brand-cyan-500/35">
                      <Star className="w-3 h-3" /> Mais popular
                    </span>
                  </div>
                )}

                <div className="mb-6">
                  <div className={`w-12 h-12 rounded-xl inline-flex items-center justify-center mb-4 ${plan.popular ? "bg-brand-cyan-500/15 text-brand-cyan-500" : "bg-brand-cyan-100 text-brand-navy-900"}`}>
                    <ArrowUpRight className="w-6 h-6" />
                  </div>
                  <h3 className={`text-xl font-bold mb-1 ${plan.popular ? "text-white" : "text-brand-navy-900"}`}>{plan.name}</h3>
                  <p className={`text-sm ${plan.popular ? "text-white/60" : "text-brand-navy-900/60"}`}>{plan.description}</p>
                </div>

                <div className={`text-2xl font-extrabold mb-6 ${plan.popular ? "text-white" : "text-brand-navy-900"}`}>
                  {plan.price}
                </div>

                <div className="space-y-3 mb-8 flex-1">
                  {plan.features.map((f) => (
                    <div key={f.text} className={`flex items-center gap-2.5 text-sm ${!f.included ? "opacity-40" : ""}`}>
                      {f.included ? (
                        <Check className={`w-4 h-4 flex-shrink-0 ${plan.popular ? "text-brand-cyan-500" : "text-brand-cyan-600"}`} />
                      ) : (
                        <X className="w-4 h-4 flex-shrink-0" />
                      )}
                      <span>{f.text}</span>
                    </div>
                  ))}
                </div>

                <Button
                  className={`w-full rounded-full py-5 font-bold gap-2 mt-auto ${
                    plan.popular
                      ? "bg-white text-brand-navy-900 hover:bg-white/90"
                      : "bg-brand-navy-900 text-white hover:bg-brand-navy-800"
                  } transition-all duration-300 hover:scale-[1.02]`}
                >
                  Falar com especialista
                  <span className={`w-8 h-8 rounded-full inline-flex items-center justify-center ${plan.popular ? "bg-brand-navy-900 text-white" : "bg-white text-brand-navy-900"}`}>
                    <ArrowUpRight className="w-4 h-4" />
                  </span>
                </Button>
              </div>
            </AnimatedItem>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
