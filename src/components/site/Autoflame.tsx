import autoflameMk8 from "@/assets/autoflame-mk8.jpg";
import autoflameMk9 from "@/assets/autoflame-mk9.jpg";

const Autoflame = () => {
  return (
    <section id="autoflame" className="mb-24">
      <div className="rounded-[2rem] border border-border/70 bg-surface/80 overflow-hidden">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr]">
          <div className="p-8 md:p-12">
            <div className="flex items-center gap-3 mb-5">
              <span className="font-mono-ed text-[10px] uppercase tracking-[0.3em] bg-primary/15 text-primary px-3 py-1 rounded-full">
                AUTOFLAME®
              </span>
              <span className="font-mono-ed text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                Partner oficial
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-5">
              Innovación tecnológica con un sistema integral de combustión
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Automatizamos calderas y quemadores industriales con el controlador
              <span className="text-foreground font-medium"> MK8 MM</span> y el
              <span className="text-foreground font-medium"> MINI MK9 MM</span>:
              un sistema de micromodulación que ofrece control integral, mayor
              eficiencia y registro continuo de combustión.
            </p>
            <ul className="grid sm:grid-cols-2 gap-3 text-sm">
              {[
                "Micromodulación de aire/combustible",
                "Reducción de consumo y emisiones",
                "Histórico y diagnóstico remoto",
                "Cumplimiento ambiental certificado",
              ].map((f) => (
                <li key={f} className="rounded-xl border border-border bg-background/60 px-4 py-3 text-foreground/90">
                  {f}
                </li>
              ))}
            </ul>
          </div>
          <div className="grid grid-cols-2 bg-background/50">
            <figure className="relative border-l border-border">
              <img src={autoflameMk8} alt="Controlador Autoflame MK8 MM en tablero industrial" className="w-full h-full object-cover aspect-square" loading="lazy" />
              <figcaption className="absolute bottom-0 inset-x-0 bg-background/85 backdrop-blur-sm px-4 py-2 font-mono-ed text-[10px] uppercase tracking-[0.3em] text-primary">
                MK8 MM
              </figcaption>
            </figure>
            <figure className="relative border-l border-border">
              <img src={autoflameMk9} alt="Controlador Autoflame MINI MK9 MM con pantalla de combustión" className="w-full h-full object-cover aspect-square" loading="lazy" />
              <figcaption className="absolute bottom-0 inset-x-0 bg-background/85 backdrop-blur-sm px-4 py-2 font-mono-ed text-[10px] uppercase tracking-[0.3em] text-primary">
                MINI MK9 MM
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Autoflame;
