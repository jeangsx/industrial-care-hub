import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-machine.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-end overflow-hidden pt-32">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Centro de mecanizado CNC de precisión en mantenimiento industrial"
          className="w-full h-full object-cover opacity-70"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/85 to-background/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/40 to-transparent" />
        <div className="absolute inset-0 gradient-radial opacity-60" />
      </div>

      {/* Decorative blueprint corner */}
      <div className="absolute top-32 right-10 hidden lg:block w-72 h-72 bg-blueprint opacity-60 border border-primary/20" />

      <div className="container mx-auto px-6 lg:px-10 relative z-10 pb-24">
        <div className="max-w-4xl animate-fade-up">
          <div className="flex items-center gap-4 mb-10">
            <span className="h-px w-14 bg-primary" />
            <span className="font-mono-ed text-xs uppercase tracking-[0.3em] text-primary">
              Est. 1987 · CDMX, Monterrey, Bajío
            </span>
          </div>

          <h1 className="font-display text-5xl md:text-7xl lg:text-[8rem] leading-[0.95] tracking-tight text-balance mb-10">
            Precisión que <em className="text-primary not-italic">jamás</em>
            <br />
            se detiene.
          </h1>

          <p className="max-w-xl text-lg md:text-xl text-muted-foreground leading-relaxed mb-12">
            Mantenimiento predictivo, correctivo y overhaul de maquinaria
            industrial pesada. 38 años manteniendo en marcha plantas que no
            pueden parar.
          </p>

          <div className="flex flex-wrap items-center gap-6 mb-20">
            <Button variant="hero" size="xl" asChild>
              <a href="#contacto">
                Agendar diagnóstico <ArrowRight className="size-4" />
              </a>
            </Button>
            <Button variant="ghostLine" size="lg" asChild>
              <a href="#servicios">Ver servicios</a>
            </Button>
          </div>

          {/* Stat strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-border/60 border border-border">
            {[
              { k: "38+", v: "Años de operación" },
              { k: "1,200", v: "Máquinas activas" },
              { k: "99.4%", v: "Uptime garantizado" },
              { k: "24/7", v: "Respuesta urgencia" },
            ].map((s) => (
              <div key={s.v} className="bg-background/80 backdrop-blur-sm px-6 py-7">
                <div className="font-display text-4xl md:text-5xl text-primary tabular-nums leading-none">
                  {s.k}
                </div>
                <div className="font-mono-ed text-[11px] uppercase tracking-[0.2em] text-muted-foreground mt-3">
                  {s.v}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-6 right-10 hidden md:flex flex-col items-center gap-3 text-muted-foreground">
        <span className="font-mono-ed text-[10px] uppercase tracking-[0.3em] [writing-mode:vertical-rl]">
          Scroll
        </span>
        <span className="h-16 w-px bg-gradient-to-b from-primary to-transparent" />
      </div>
    </section>
  );
};

export default Hero;
