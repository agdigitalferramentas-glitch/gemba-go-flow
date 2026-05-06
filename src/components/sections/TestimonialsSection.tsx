import { useState } from "react";
import { Play } from "lucide-react";
import { AnimatedSection, AnimatedItem } from "@/components/AnimatedSection";

const testimonials = [
  { id: "nkxiOrYzKps" },
  { id: "wJQeUW8ZQQA" },
  { id: "cnA_jrJDcRU" },
  { id: "YhS3Fz6iEYk" },
  { id: "mCfsnekzJ0o" },
  { id: "VRcPrcZigHM" },
];

const TestimonialCard = ({ videoId }: { videoId: string }) => {
  const [playing, setPlaying] = useState(false);
  const thumb = `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`;

  return (
    <div className="relative aspect-video w-full overflow-hidden rounded-2xl bg-brand-navy-800 shadow-2xl ring-1 ring-white/10">
      {playing ? (
        <iframe
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
          title="Depoimento"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute inset-0 h-full w-full"
        />
      ) : (
        <button
          type="button"
          onClick={() => setPlaying(true)}
          className="group absolute inset-0 h-full w-full"
          aria-label="Reproduzir depoimento"
        >
          <img src={thumb} alt="Depoimento" className="h-full w-full object-cover" loading="lazy" />
          <span className="absolute inset-0 bg-brand-navy-900/20 transition group-hover:bg-brand-navy-900/10" />
          <span className="absolute inset-0 grid place-items-center">
            <span className="grid h-16 w-16 place-items-center rounded-full bg-white text-brand-navy-900 shadow-[0_8px_24px_-6px_rgba(255,255,255,0.4)] transition-transform duration-300 group-hover:scale-110">
              <Play className="h-7 w-7 fill-brand-navy-900" />
            </span>
          </span>
        </button>
      )}
    </div>
  );
};

const TestimonialsSection = () => {
  return (
    <section className="py-20 md:py-28 bg-brand-navy-900 relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 20%, hsl(190 100% 54% / 0.12), transparent 50%)",
        }}
      />

      <div className="container relative z-10 px-6">
        <AnimatedSection className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            O que dizem quem já<br className="hidden sm:block" /> passou pelo método
          </h2>
          <p className="mt-5 text-white/70 text-base sm:text-lg font-light max-w-2xl mx-auto">
            Depoimentos reais de profissionais que aplicaram o método Gemba e transformaram suas carreiras.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {testimonials.map((t, i) => (
            <AnimatedItem key={t.id} delay={i * 0.05}>
              <TestimonialCard videoId={t.id} />
            </AnimatedItem>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
