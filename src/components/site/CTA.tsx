import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
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
            — 05 / INITIATE_SEQUENCE
          </span>
          <h2 className="text-5xl md:text-7xl lg:text-[6rem] leading-[0.95] tracking-tight mb-10 text-balance font-light">
            Hablemos antes
            <br />
            de la próxima <span className="text-primary text-glow font-normal">parada</span>.
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl leading-relaxed mb-12">
            Diagnóstico técnico sin costo en planta. Te entregamos una
            propuesta de arquitectura de control con cronograma, KPIs y ROI
            proyectado en menos de 7 días hábiles.
          </p>

          <div className="flex flex-wrap items-center gap-5 mb-16">
            <Button variant="hero" size="xl" asChild>
              <a href="mailto:ops@axonsystems.io">
                Solicitar diagnóstico <ArrowUpRight className="size-4" />
              </a>
            </Button>
            <Button variant="ghostLine" size="lg" asChild>
              <a href="tel:+5215555000000">+52 55 5500 0000</a>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border border border-border rounded-md overflow-hidden max-w-3xl">
            {[
              { l: "// HQ", v: "Av. Industria 1287, CDMX" },
              { l: "// 24/7 OPS", v: "ops@axonsystems.io" },
              { l: "// COMERCIAL", v: "Lun – Vie · 8:00 a 18:00" },
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
