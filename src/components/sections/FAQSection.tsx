import { AnimatedSection } from "@/components/AnimatedSection";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "O que é a Gemba Ensina?",
    answer: "A Gemba Ensina é a plataforma de educação a distância da Gemba Group, especializada em melhoria contínua, Lean, Lean Six Sigma e desenvolvimento corporativo. Permite que empresas publiquem, gerenciem e escalem seus próprios cursos online.",
  },
  {
    question: "Quanto tempo leva para colocar a plataforma no ar?",
    answer: "Em apenas 5 minutos sua escola de melhoria contínua pode estar funcionando. O setup é rápido, sem necessidade de equipe técnica ou infraestrutura própria.",
  },
  {
    question: "Posso personalizar a plataforma com a marca da minha empresa?",
    answer: "Sim! No plano Enterprise você tem acesso ao white-label completo, com personalização de cores, logotipo, domínio e certificados alinhados à identidade visual da sua empresa.",
  },
  {
    question: "Quais certificações estão disponíveis?",
    answer: "Oferecemos trilhas completas de White Belt, Yellow Belt, Green Belt e Black Belt em Lean Six Sigma, além de programas personalizáveis de desenvolvimento corporativo.",
  },
  {
    question: "A plataforma atende à LGPD?",
    answer: "Sim. A Gemba Ensina segue rigorosos padrões de segurança e privacidade, em conformidade com a Lei Geral de Proteção de Dados (LGPD), garantindo a proteção dos dados de todos os colaboradores.",
  },
  {
    question: "Existe suporte para implantação?",
    answer: "Todos os planos incluem suporte para implantação. No plano Professional e Enterprise, você conta com suporte prioritário e um Customer Success Manager dedicado.",
  },
];

const FAQSection = () => {
  return (
    <section className="py-20 md:py-28 bg-white relative">
      <div className="container px-4">
        <AnimatedSection>
          <div className="flex items-center gap-3 mb-4">
            <span className="w-9 h-9 rounded-full bg-brand-navy-900 text-white inline-grid place-items-center font-bold text-sm shadow-lg">6</span>
            <div className="flex-1 h-0.5 bg-gradient-to-r from-transparent via-brand-navy-900/20 to-transparent" />
            <span className="bg-brand-navy-900 text-white text-xs font-bold px-3 py-1.5 rounded-full">
              FAQ
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-brand-navy-900 mb-4 tracking-tight">
            Perguntas frequentes
          </h2>
          <p className="text-brand-navy-900/70 text-lg max-w-2xl mb-14">
            Tire suas dúvidas sobre a plataforma e nossos serviços.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-3">
              {faqs.map((faq, i) => (
                <AccordionItem
                  key={i}
                  value={`item-${i}`}
                  className="bg-white border border-brand-navy-900/10 rounded-2xl overflow-hidden shadow-md shadow-brand-navy-900/5 px-2"
                >
                  <AccordionTrigger className="text-left font-bold text-brand-navy-900 hover:no-underline py-5 px-4 text-base">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-brand-navy-900/70 px-4 pb-5 leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default FAQSection;
