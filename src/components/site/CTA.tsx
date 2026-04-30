import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import ContactModal from "@/components/site/ContactModal";
import factoryImg from "@/assets/cta-automation.jpg";

const CTA = () => {
  return (
    <section id="contacto" className="relative py-28 md:py-40 overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={factoryImg}
          alt="Brazo robótico industrial en planta inteligente con sensores activos"
          className="w-full h-full object-cover opacity-35"
          loading="lazy"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/85 to-background/60" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/40 to-transparent" />
      </div>

      <div className="container mx-auto px-6 lg:px-10 relative">
        <div className="max-w-4xl">
          <span className="font-mono-ed text-[11px] text-primary tracking-[0.3em] block mb-8">
            — 05 / CONTACTO
          </span>
          <h2 className="text-5xl md:text-7xl lg:text-[6rem] leading-[0.95] tracking-tight mb-10 text-balance font-light">
            Hablemos antes
            <br />
            de la próxima <span className="text-primary text-glow font-normal">parada</span>.
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl leading-relaxed mb-12">
            Solicita una visita técnica a tu planta. Evaluamos tus equipos
            térmicos y te entregamos una propuesta de mantenimiento o
            modernización con cronograma claro.
          </p>

          <div className="flex flex-wrap items-center gap-5 mb-16">
            <ContactModal
              title="Solicitar visita técnica"
              trigger={
                <Button variant="hero" size="xl" className="inline-flex items-center gap-2">
                  Solicitar visita técnica <ArrowUpRight className="size-4" />
                </Button>
              }
            />
            <Button variant="ghostLine" size="lg" asChild>
              <a href="tel:+51972316786">+51 938 154 638</a>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border border border-border rounded-md overflow-hidden max-w-3xl">
            {[
              { l: "// SEDE", v: "Av. Metropolitana Mz G1 Lt 43, Ate – Lima" },
              { l: "// EMAIL", v: "ericksoria@calderas-ecc.com" },
              { l: "// TELÉFONOS", v: "+51 972 316 786 · +51 938 154 638" },
            ].map((b) => (
              <div key={b.l} className="bg-background/80 backdrop-blur-sm p-6">
                <div className="font-mono-ed text-[10px] uppercase tracking-[0.3em] text-primary mb-3">
                  {b.l}
                </div>
                <div className="text-sm text-foreground font-mono-ed">{b.v}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
