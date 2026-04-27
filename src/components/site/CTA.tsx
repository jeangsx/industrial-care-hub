import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import factoryImg from "@/assets/cta-factory.jpg";

const CTA = () => {
  return (
    <section id="contacto" className="relative py-28 md:py-40 overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={factoryImg}
          alt="Planta industrial iluminada con maquinaria operando"
          className="w-full h-full object-cover opacity-40"
          loading="lazy"
          width={1600}
          height={900}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/85 to-background/70" />
      </div>

      <div className="container mx-auto px-6 lg:px-10 relative">
        <div className="max-w-4xl">
          <span className="font-mono-ed text-xs text-primary tracking-[0.3em] block mb-8">
            — 04 / EMPECEMOS
          </span>
          <h2 className="font-display text-5xl md:text-7xl lg:text-8xl leading-[0.95] tracking-tight mb-10 text-balance">
            Hablemos antes
            <br />
            de la próxima <em className="text-primary not-italic">falla</em>.
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl leading-relaxed mb-12">
            Diagnóstico técnico sin costo en planta. Te entregamos un plan
            editorial con cifras, cronograma y ROI proyectado en menos de 7
            días hábiles.
          </p>

          <div className="flex flex-wrap items-center gap-6 mb-16">
            <Button variant="hero" size="xl" asChild>
              <a href="mailto:contacto@forjacero.mx">
                Solicitar diagnóstico <ArrowUpRight className="size-4" />
              </a>
            </Button>
            <Button variant="ghostLine" size="lg" asChild>
              <a href="tel:+5215555000000">+52 55 5500 0000</a>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border/60 border border-border max-w-3xl">
            {[
              { l: "Oficina central", v: "Av. Industria 1287, CDMX" },
              { l: "Operación 24/7", v: "urgencias@forjacero.mx" },
              { l: "Comercial", v: "Lun – Vie · 8:00 a 18:00" },
            ].map((b) => (
              <div key={b.l} className="bg-background/80 backdrop-blur-sm p-6">
                <div className="font-mono-ed text-[10px] uppercase tracking-[0.3em] text-primary mb-3">
                  {b.l}
                </div>
                <div className="text-sm text-foreground">{b.v}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
