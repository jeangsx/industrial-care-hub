import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { NavLink } from "react-router-dom";

const plans = [
  {
    code: "PLN_01",
    name: "Esencial",
    price: "Desde $1.2k",
    period: "/ mes",
    tagline: "Monitoreo y soporte preventivo para plantas pequeñas.",
    features: [
      "Inspección mensual de equipos críticos",
      "Telemetría básica (hasta 50 tags)",
      "Reportes de salud operacional",
      "Soporte remoto en horario laboral",
    ],
    featured: false,
  },
  {
    code: "PLN_02",
    name: "Industrial",
    price: "Desde $3.8k",
    period: "/ mes",
    tagline: "Operación continua con SCADA y mantenimiento predictivo.",
    features: [
      "SCADA dedicado + dashboards a medida",
      "Mantenimiento predictivo con IIoT",
      "Soporte 24/7 con SLA < 4h",
      "Integraciones PLC/DCS multi-marca",
      "Auditoría trimestral ISA-95",
    ],
    featured: true,
  },
  {
    code: "PLN_03",
    name: "Mission Critical",
    price: "Custom",
    period: "",
    tagline: "Functional safety y arquitectura redundante para plantas que no se detienen.",
    features: [
      "Diseño SIS bajo IEC 61511",
      "Redundancia hot-standby end-to-end",
      "Ingeniero residente on-site",
      "Hardening ciberseguridad OT (IEC 62443)",
      "Roadmap de modernización a 36 meses",
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
            Planes · Tier
          </span>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
            Elige el nivel de operación que tu planta necesita
          </h2>
        </div>
        <div className="hidden md:flex items-center gap-2 font-mono-ed text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
          <span className="size-1.5 rounded-full bg-primary animate-blink" />
          PRICING · USD / MES
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {plans.map((p) => (
          <div
            key={p.code}
            className={`relative rounded-3xl border p-8 flex flex-col ${
              p.featured
                ? "border-primary/60 bg-surface shadow-[var(--shadow-glow)]"
                : "border-border/70 bg-surface/70"
            }`}
          >
            {p.featured && (
              <div className="absolute -top-3 left-8 font-mono-ed text-[10px] uppercase tracking-[0.3em] bg-primary text-primary-foreground px-3 py-1 rounded-full">
                Recomendado
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
              <span className="text-4xl font-semibold text-foreground">{p.price}</span>
              <span className="font-mono-ed text-xs text-muted-foreground">{p.period}</span>
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

            <Button
              variant={p.featured ? "editorial" : "outline"}
              className="w-full"
              asChild
            >
              <NavLink to="/contacto">Solicitar propuesta</NavLink>
            </Button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Plans;
