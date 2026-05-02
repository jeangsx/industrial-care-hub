import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import ContactModal from "@/components/site/ContactModal";

const plans = [
  {
    code: "PLN_T",
    name: "Trimestral",
    period: "/ cada 3 meses",
    tagline: "Ideal para plantas con operación continua que requieren control frecuente.",
    features: [
      "Inspección y limpieza de caldera",
      "Revisión del tren de combustión",
      "Análisis y regulación de combustión",
      "Reporte técnico con fotografías",
      "Atención prioritaria ante emergencias",
    ],
    featured: false,
  },
  {
    code: "PLN_S",
    name: "Semestral",
    period: "/ cada 6 meses",
    tagline: "Equilibrio entre cobertura y costo para industrias de mediana exigencia.",
    features: [
      "Mantenimiento integral de caldera y quemador",
      "Calibración de instrumentos y controles",
      "Revisión de sistema de alimentación de agua",
      "Pruebas de seguridad y eficiencia",
      "Asesoría técnica y soporte remoto",
    ],
    featured: true,
  },
  {
    code: "PLN_A",
    name: "Anual",
    period: "/ cada 12 meses",
    tagline: "Plan completo para plantas con operación estable que buscan confiabilidad.",
    features: [
      "Mantenimiento integral end-to-end",
      "Ensayo hidrostático de recipientes a presión",
      "Revisión refractaria y aislamiento térmico",
      "Diagnóstico de eficiencia energética",
      "Garantía extendida sobre intervenciones",
    ],
    featured: false,
  },
];

const Plans = () => {
  return (
    <section id="planes" className="mb-24">
      <div className="flex items-end justify-between gap-6 mb-10">
        <div>
          <span className="font-mono-ed text-[11px] uppercase tracking-[0.3em] text-primary block mb-3">
            Planes de Mantenimiento · ECC
          </span>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
            Elige la frecuencia que tu caldera necesita
          </h2>
          <p className="text-muted-foreground mt-3 max-w-2xl text-sm md:text-base">
            Programas diseñados para mantener tus equipos térmicos operando con la máxima seguridad, eficiencia y confiabilidad.
          </p>
        </div>
        <div className="hidden md:flex items-center gap-2 font-mono-ed text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
          <span className="size-1.5 rounded-full bg-primary animate-blink" />
          ECC SAC · MAINTENANCE TIERS
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {plans.map((p) => (
          <div
            key={p.code}
            className={`relative rounded-3xl border p-8 flex flex-col panel-3d ${
              p.featured
                ? "border-primary/60 bg-surface shadow-[var(--shadow-glow)]"
                : "border-border/70 bg-surface/70"
            }`}
          >
            {p.featured && (
              <div className="absolute -top-3 left-8 font-mono-ed text-[10px] uppercase tracking-[0.3em] bg-primary text-primary-foreground px-3 py-1 rounded-full">
                Más solicitado
              </div>
            )}

            <div className="font-mono-ed text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-3">
              {p.code}
            </div>
            <h3 className="text-2xl font-semibold mb-2">{p.name}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed mb-6 min-h-[3rem]">
              {p.tagline}
            </p>

            <div className="flex items-baseline gap-1 mb-6">
              <span className="text-3xl font-semibold text-foreground">Cotización</span>
              <span className="font-mono-ed text-xs text-muted-foreground ml-1">{p.period}</span>
            </div>

            <div className="divider-rule mb-6" />

            <ul className="space-y-3 mb-8 flex-1">
              {p.features.map((f) => (
                <li key={f} className="flex items-start gap-3 text-sm">
                  <Check className="size-4 text-primary mt-0.5 shrink-0" />
                  <span className="text-foreground/90">{f}</span>
                </li>
              ))}
            </ul>

            <ContactModal
              title="Solicitar cotización"
              trigger={
                <Button variant={p.featured ? "editorial" : "outline"} className="w-full">
                  Solicitar cotización
                </Button>
              }
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Plans;
