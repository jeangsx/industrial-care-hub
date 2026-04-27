import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-control-room.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-end overflow-hidden pt-32">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Sala de control industrial con telemetría en tiempo real para ingeniería de sistemas"
          className="w-full h-full object-cover opacity-55"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/85 to-background/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/50 to-transparent" />
        <div className="absolute inset-0 gradient-radial opacity-70" />
      </div>

      {/* Decorative grid */}
      <div className="absolute top-32 right-10 hidden lg:block w-72 h-72 bg-blueprint opacity-50" />

      <div className="container mx-auto px-6 lg:px-10 relative z-10 pb-20">
        <div className="grid lg:grid-cols-12 gap-10 items-end">
          {/* Left: hero copy */}
          <div className="lg:col-span-7 animate-fade-up">
            <div className="flex items-center gap-3 mb-8">
              <span className="size-1.5 rounded-full bg-primary animate-blink" />
              <span className="font-mono-ed text-[11px] uppercase tracking-[0.3em] text-primary">
                v.4.2 · Operating across 38 plants
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-[6.5rem] leading-[0.95] tracking-tight text-balance mb-10 font-light">
              Autonomous
              <br />
              <span className="text-primary text-glow font-normal">flow control</span>
              <br />
              for heavy industry.
            </h1>

            <p className="max-w-xl text-lg md:text-xl text-muted-foreground leading-relaxed mb-12">
              Sincronizamos throughput industrial con telemetría de precisión
              milimétrica. Ingeniería de procesos, automatización y sistemas
              SCADA para plantas que no pueden detenerse.
            </p>

            <div className="flex flex-wrap items-center gap-5">
              <Button variant="hero" size="xl" asChild>
                <a href="#contacto">
                  Iniciar secuencia <ArrowRight className="size-4" />
                </a>
              </Button>
              <Button variant="ghostLine" size="lg" asChild>
                <a href="#stack">Ver schematic</a>
              </Button>
            </div>
          </div>

          {/* Right: telemetry card */}
          <div className="lg:col-span-5 animate-fade-up" style={{ animationDelay: "120ms" }}>
            <div className="glass rounded-2xl p-6 shadow-deep">
              <div className="flex items-center justify-between mb-5 font-mono-ed text-[11px] uppercase tracking-[0.22em]">
                <div className="flex items-center gap-2 text-primary">
                  <span className="size-1.5 rounded-full bg-primary animate-blink" />
                  Live · Plant 04
                </div>
                <span className="text-muted-foreground">14:38:02 UTC</span>
              </div>

              {/* Load bar */}
              <div className="mb-6">
                <div className="flex justify-between font-mono-ed text-xs mb-2">
                  <span className="text-muted-foreground uppercase tracking-[0.2em]">System load</span>
                  <span className="text-primary tabular-nums">64.2%</span>
                </div>
                <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                  <div className="w-[64%] h-full bg-primary shadow-glow" />
                </div>
              </div>

              {/* Telemetry grid */}
              <div className="grid grid-cols-2 gap-3 mb-5">
                {[
                  { l: "Pressure", v: "442.8", u: "BAR" },
                  { l: "Temp", v: "84.1", u: "°C" },
                  { l: "Throughput", v: "1.24k", u: "T/H" },
                  { l: "Vibration", v: "0.18", u: "mm/s" },
                ].map((m) => (
                  <div key={m.l} className="bg-background/60 border border-border rounded-md p-3">
                    <div className="font-mono-ed text-[10px] uppercase tracking-[0.22em] text-muted-foreground mb-1">
                      {m.l}
                    </div>
                    <div className="font-mono-ed text-xl text-foreground tabular-nums">
                      {m.v}
                      <span className="text-[11px] text-muted-foreground ml-1">{m.u}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Status row */}
              <div className="flex items-center justify-between font-mono-ed text-[10px] uppercase tracking-[0.22em] pt-4 border-t border-border">
                <div className="flex items-center gap-2 text-primary">
                  <span className="size-1 rounded-full bg-primary" />
                  Nominal
                </div>
                <span className="text-muted-foreground">2,841 sensors · 0 alerts</span>
              </div>
            </div>
          </div>
        </div>

        {/* Stat strip */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-px bg-border border border-border rounded-md overflow-hidden">
          {[
            { k: "14.2", u: "ms", v: "Signal latency" },
            { k: "99.98", u: "%", v: "Uptime integrity" },
            { k: "2,841", u: "", v: "Active sensors" },
            { k: "24/7", u: "", v: "Ops response" },
          ].map((s) => (
            <div key={s.v} className="bg-background/80 backdrop-blur-sm px-6 py-7">
              <div className="font-mono-ed text-3xl md:text-4xl text-primary tabular-nums leading-none font-semibold">
                {s.k}
                <span className="text-base text-muted-foreground ml-1">{s.u}</span>
              </div>
              <div className="font-mono-ed text-[10px] uppercase tracking-[0.22em] text-muted-foreground mt-3">
                {s.v}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-6 right-10 hidden md:flex flex-col items-center gap-3 text-muted-foreground">
        <span className="font-mono-ed text-[10px] uppercase tracking-[0.3em] [writing-mode:vertical-rl]">
          Scroll · 00
        </span>
        <span className="h-16 w-px bg-gradient-to-b from-primary to-transparent" />
      </div>
    </section>
  );
};

export default Hero;
