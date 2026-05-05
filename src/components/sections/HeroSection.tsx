import { AnimatedSection } from "@/components/AnimatedSection";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import heroBg from "@/assets/bg-1-gemba-desktop.webp";
import heroBgMobile from "@/assets/bg-1-gemba-mobile.webp";
import logoPfpl from "@/assets/logo-pfpl.svg";

// Usando o ID do formulário mais recente fornecido pelo usuário
const AGSELL_SUBMIT_URL = "https://gmemxbfibakfpsjbsvyt.supabase.co/functions/v1/public-api/forms/d6cc9b67-fc6c-4bd9-854d-e24e5697b49c/submit";

const HeroSection = () => {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Normaliza o telefone para apenas dígitos (Agsell não aceita "+" nem máscara)
      const payload = {
        ...formData,
        phone: formData.phone.replace(/\D/g, ""),
      };

      // Envia para o Agsell via API (POST)
      // Usamos keepalive para garantir que a requisição termine mesmo com o redirecionamento
      fetch(AGSELL_SUBMIT_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
        keepalive: true
      });

      // Redireciona imediatamente para a página de obrigado, como solicitado anteriormente
      navigate("/pfpl-obrigado");
    } catch (error) {
      console.error("Erro ao enviar formulário:", error);
      // Mesmo com erro, redirecionamos para garantir a experiência do usuário
      navigate("/pfpl-obrigado");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

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
              <img src={logoPfpl} alt="PFPL - Programa de Formação Profissional Lean" className="h-20 sm:h-24 w-auto mb-6" />
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

          {/* Right — Capture Form (Nativo para controle total de estilo) */}
          <div className="min-w-0">
            <AnimatedSection delay={0.3}>
              <div className="gemba-form-container">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <input
                      type="text"
                      name="name"
                      placeholder="Seu nome"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full rounded-xl bg-white/10 border border-white/15 text-white placeholder:text-white/30 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-cyan-500/50 transition-all"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      name="email"
                      placeholder="Seu melhor e-mail"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full rounded-xl bg-white/10 border border-white/15 text-white placeholder:text-white/30 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-cyan-500/50 transition-all"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      name="phone"
                      placeholder="DDD + WhatsApp"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full rounded-xl bg-white/10 border border-white/15 text-white placeholder:text-white/30 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-cyan-500/50 transition-all"
                    />
                  </div>
                  
                  <div className="flex justify-center pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="group w-full bg-[hsl(142,100%,41%)] text-[hsl(213,80%,14%)] font-extrabold rounded-full px-2.5 py-1.5 text-sm shadow-[0_8px_20px_-8px_rgba(0,208,84,0.45)] hover:bg-white hover:shadow-[0_16px_32px_-8px_rgba(255,255,255,0.3)] hover:scale-[1.03] active:scale-[0.98] transition-all duration-300 ease-out whitespace-normal text-center inline-flex items-center justify-center gap-2 disabled:opacity-70"
                    >
                      <span className="flex-1 text-center">
                        {isSubmitting ? "ENVIANDO..." : <>QUERO BAIXAR O{"\u00A0"}GUIA{"\u00A0"}GRATUITO</>}
                      </span>
                      <span className="w-11 h-11 rounded-full bg-white text-[hsl(213,80%,14%)] inline-flex items-center justify-center shadow-[0_2px_8px_rgba(0,0,0,0.15)] flex-shrink-0 group-hover:rotate-[360deg] group-hover:bg-[hsl(213,80%,14%)] group-hover:text-white transition-all duration-500 ease-out">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-0.5 transition-transform duration-300"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                      </span>
                    </button>
                  </div>
                </form>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
