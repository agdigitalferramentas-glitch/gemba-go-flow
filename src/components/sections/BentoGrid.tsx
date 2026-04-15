import { AnimatedSection, AnimatedItem } from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const weeks = [
  {
    week: "Semana 1",
    pain: "\"Terminei a semana sem conseguir apontar, com precisão, o que fiz e por que importou.\"",
    solution: "Na semana 1, você mapeia tudo que executa e separa o que gera visibilidade real do que passa despercebido. Ao final de sete dias você sabe exatamente qual problema vale resolver, e qual é o custo real de deixar ele parado.",
  },
  {
    week: "Semana 2",
    pain: "\"Já tive a ideia. Falei na reunião. Ninguém levou a sério.\"",
    solution: "Na semana 2, você estrutura a proposta com dados: problema descrito em fatos, solução definida, ganho estimado. Uma proposta apresentável antes mesmo de executar, porque a diferença entre quem cresce e quem fica não é a ideia, é como ela é comunicada.",
  },
  {
    week: "Semana 3",
    pain: "\"Fiz a melhoria. Não registrei. Meses depois, não tinha número nenhum para mostrar.\"",
    solution: "Na semana 3, você executa e documenta. Antes e depois em números concretos. Uma página com problema, ação tomada e resultado, que qualquer gestor lê em dois minutos e não consegue ignorar na próxima reunião de performance.",
  },
  {
    week: "Semana 4",
    pain: "\"Meu gestor não sabe o que eu fiz porque fiquei esperando o momento certo para contar. O momento certo nunca chegou.\"",
    solution: "Na semana 4, você apresenta o resultado de forma direta. Sem reunião formal, sem timing perfeito. Com um caso real documentado, você não precisa esperar ser reconhecido, você mostra o argumento.",
  },
];

const BentoGrid = () => {
  return (
    <section className="py-20 md:py-28 bg-muted relative overflow-hidden">
      <div className="absolute inset-0" style={{
        background: "radial-gradient(110% 170% at 110% -20%, hsl(222 96% 10% / 0.08) 0%, transparent 45%)"
      }} />

      <div className="container relative z-10 px-6">
        <AnimatedSection>
          <div className="flex items-center gap-3 mb-4">
            <span className="w-9 h-9 rounded-full bg-brand-navy-900 text-white inline-grid place-items-center font-bold text-sm shadow-lg">1</span>
            <div className="flex-1 h-0.5 bg-gradient-to-r from-transparent via-brand-navy-900/20 to-transparent" />
            <span className="bg-brand-navy-900 text-white text-xs font-bold px-3 py-1.5 rounded-full">
              O que o material faz por você
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-brand-navy-900 mb-4 tracking-tight">
            O que muda semana a semana
          </h2>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-6 mt-12">
          {weeks.map((w, i) => (
            <AnimatedItem key={w.week} delay={i * 0.12}>
              <div className="rounded-2xl p-8 md:p-9 h-full flex flex-col text-white shadow-xl hover:-translate-y-1 transition-all duration-300"
                style={{ background: "linear-gradient(180deg, #031945, #021534 60%, #011133 100%)" }}
              >
                <span className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-brand-cyan-500/15 text-brand-cyan-500 border border-brand-cyan-500/30 mb-5 w-fit">
                  {w.week}
                </span>
                <div className="rounded-xl bg-white/10 px-5 py-4 mb-4">
                  <p className="text-white italic text-sm leading-relaxed font-light">{w.pain}</p>
                </div>
                <p className="text-white leading-relaxed text-[0.95rem] font-light">{w.solution}</p>
              </div>
            </AnimatedItem>
          ))}
        </div>

        {/* Destaque final */}
        <AnimatedSection delay={0.3}>
          <div className="mt-12 rounded-2xl bg-white border border-brand-navy-900/10 p-8 md:p-10 shadow-lg">
            <h3 className="text-xl md:text-2xl font-extrabold text-brand-navy-900 mb-5">
              O que você tem ao final do mês
            </h3>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start gap-3 text-brand-navy-900/80 font-light">
                <span className="w-2 h-2 rounded-full bg-brand-cyan-500 mt-2 flex-shrink-0" />
                Um caso real de melhoria com números prontos para apresentar.
              </li>
              <li className="flex items-start gap-3 text-brand-navy-900/80 font-light">
                <span className="w-2 h-2 rounded-full bg-brand-cyan-500 mt-2 flex-shrink-0" />
                Um argumento concreto para a próxima conversa de promoção.
              </li>
              <li className="flex items-start gap-3 text-brand-navy-900/80 font-light">
                <span className="w-2 h-2 rounded-full bg-brand-cyan-500 mt-2 flex-shrink-0" />
                O início de um método que os profissionais que crescem mais rápido usam sem que ninguém perceba que é um sistema.
              </li>
            </ul>
            <Button
              size="lg"
              className="bg-brand-navy-900 hover:bg-brand-navy-800 text-white font-bold rounded-full px-6 sm:px-8 py-6 text-sm sm:text-base gap-2 sm:gap-3 shadow-lg hover:scale-[1.02] transition-all duration-300 w-full sm:w-auto"
            >
              QUERO COMEÇAR OS 30 DIAS AGORA
              <ArrowRight className="w-5 h-5 flex-shrink-0" />
            </Button>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default BentoGrid;
