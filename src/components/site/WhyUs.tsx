import { Award, Zap, Settings2 } from "lucide-react";

const reasons = [
  {
    icon: Award,
    title: "Experiencia y especialización",
    body: "Más de 7 años brindando soluciones térmicas a industrias de alto rendimiento, con un equipo técnico altamente capacitado.",
  },
  {
    icon: Zap,
    title: "Calidad y respuesta rápida",
    body: "Servicios con estándares técnicos exigentes y atención inmediata para reducir paradas no planificadas.",
  },
  {
    icon: Settings2,
    title: "Soluciones a la medida",
    body: "Mantenimientos, reparaciones, repuestos y modernizaciones adaptados a las necesidades específicas de cada cliente.",
  },
];

const WhyUs = () => {
  return (
    <section id="porque-elegirnos" className="mb-24">
      <div className="max-w-2xl mb-12">
        <span className="font-mono-ed text-[11px] uppercase tracking-[0.3em] text-primary block mb-3">
          ¿Por qué elegirnos?
        </span>
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
          Confianza, técnica y respuesta cuando tu planta lo necesita
        </h2>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        {reasons.map((r) => (
          <div key={r.title} className="rounded-3xl border border-border/70 bg-surface/70 p-8 panel-3d">
            <div className="size-12 rounded-md border border-border bg-background grid place-items-center mb-6">
              <r.icon className="size-5 text-primary" strokeWidth={1.6} />
            </div>
            <h3 className="text-xl font-semibold mb-3">{r.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{r.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyUs;
