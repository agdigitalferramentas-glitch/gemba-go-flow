import { Mail, MapPin } from "lucide-react";
import logoGemba from "@/assets/logo-gemba-group.png";

const Footer = () => {
  return (
    <footer className="bg-brand-navy-900 relative overflow-hidden">
      <div className="absolute inset-0" style={{
        background: "radial-gradient(120% 200% at 120% -40%, hsl(190 100% 54% / 0.08), transparent 45%)"
      }} />

      <div className="container relative z-10 px-4 py-12 md:py-16">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-10">
          <div>
            <img src={logoGemba} alt="Gemba Group" className="h-10 w-auto brightness-0 invert" />
            <p className="text-white/50 text-sm max-w-sm font-light">
              Capacitando profissionais para transformar empresas desde 2008.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 text-sm">
            <a href="#" className="flex items-center gap-2 text-white/60 hover:text-brand-cyan-500 transition-colors">
              <Mail className="w-4 h-4" /> contato@gembagroup.com.br
            </a>
            <span className="flex items-center gap-2 text-white/60">
              <MapPin className="w-4 h-4" /> Curitiba, PR — Brasil
            </span>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/40 text-sm">
            © {new Date().getFullYear()} Gemba Group. Todos os direitos reservados.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-white/40 hover:text-brand-cyan-500 text-sm transition-colors">
              Política de Privacidade
            </a>
            <a href="#" className="text-white/40 hover:text-brand-cyan-500 text-sm transition-colors">
              Termos de Uso
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
