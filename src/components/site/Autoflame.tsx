import { Check } from "lucide-react";
import autoflameMk8 from "@/assets/mk8.jpg";
import autoflameMk9 from "@/assets/mk9.webp";

const products = [
  {
    src: autoflameMk8,
    name: "MK8 MM",
    alt: "Controlador Autoflame MK8 MM en tablero industrial",
    desc: "Control de combustión servomotorizado",
  },
  {
    src: autoflameMk9,
    name: "MINI MK9 MM",
    alt: "Controlador Autoflame MINI MK9 MM con pantalla de combustión",
    desc: "Pantalla compacta para gestión total",
  },
];

const Autoflame = () => {
  return (
    <section id="autoflame" className="mb-24">
      <div className="rounded-[2rem] border border-border/70 bg-surface/80 overflow-hidden">
        <div className="grid lg:grid-cols-[1fr_0.95fr]">
          <div className="p-8 md:p-10 xl:p-12">
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
                <li
                  key={f}
                  className="group rounded-xl border border-border/70 bg-background/60 px-4 py-3 text-foreground/90 panel-3d flex items-start gap-3"
                >
                  <Check className="size-4 text-primary mt-0.5 shrink-0 transition-transform group-hover:scale-110" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="border-t border-border bg-[radial-gradient(circle_at_50%_35%,hsl(var(--primary)/0.12),transparent_42%),linear-gradient(135deg,hsl(var(--background)/0.96),hsl(var(--surface)/0.82))] p-5 sm:p-6 lg:border-l lg:border-t-0 xl:p-8">
            <div className="grid h-full content-center gap-5 sm:grid-cols-2">
              {products.map((product) => (
                <figure
                  key={product.name}
                  className="group rounded-3xl border border-border/70 bg-background/75 p-4 panel-3d"
                >
                  <div className="grid aspect-[1.12/1] place-items-center overflow-hidden rounded-2xl bg-white shadow-[inset_0_0_0_1px_rgba(15,23,42,0.08)]">
                    <img
                      src={product.src}
                      alt={product.alt}
                      className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  <figcaption className="pt-4">
                    <div className="font-mono-ed text-[10px] uppercase tracking-[0.3em] text-primary">
                      {product.name}
                    </div>
                    <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                      {product.desc}
                    </p>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Autoflame;
