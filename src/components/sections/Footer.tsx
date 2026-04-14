import { Mail, MapPin, Phone } from "lucide-react";

const footerLinks = {
  Plataforma: ["Funcionalidades", "Planos", "Integrações", "Segurança"],
  Recursos: ["Blog", "Cases de Sucesso", "Webinars", "Central de Ajuda"],
  Empresa: ["Sobre a Gemba", "Carreiras", "Parceiros", "Contato"],
};

const Footer = () => {
  return (
    <footer className="bg-brand-navy-900 relative overflow-hidden">
      <div className="absolute inset-0" style={{
        background: "radial-gradient(120% 200% at 120% -40%, hsl(190 100% 54% / 0.08), transparent 45%)"
      }} />

      <div className="container relative z-10 px-4 py-16 md:py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-extrabold text-white mb-3">
              Gemba<span className="text-brand-cyan-500">Ensina</span>
            </h3>
            <p className="text-white/60 leading-relaxed max-w-sm mb-6">
              Plataforma EAD corporativa dedicada à melhoria contínua, Lean e Lean Six Sigma.
            </p>
            <div className="space-y-3">
              <a href="#" className="flex items-center gap-2.5 text-white/70 hover:text-brand-cyan-500 transition-colors text-sm">
                <Mail className="w-4 h-4" /> contato@gembaensina.com.br
              </a>
              <a href="#" className="flex items-center gap-2.5 text-white/70 hover:text-brand-cyan-500 transition-colors text-sm">
                <Phone className="w-4 h-4" /> (41) 3000-0000
              </a>
              <span className="flex items-center gap-2.5 text-white/70 text-sm">
                <MapPin className="w-4 h-4" /> Curitiba, PR — Brasil
              </span>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h5 className="font-bold text-white mb-4">{title}</h5>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-white/60 hover:text-brand-cyan-500 transition-colors text-sm relative group">
                      {link}
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-cyan-500 group-hover:w-full transition-all duration-200" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/50 text-sm">
            © {new Date().getFullYear()} Gemba Group. Todos os direitos reservados.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-white/50 hover:text-brand-cyan-500 text-sm transition-colors">
              Política de Privacidade
            </a>
            <a href="#" className="text-white/50 hover:text-brand-cyan-500 text-sm transition-colors">
              Termos de Uso
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
