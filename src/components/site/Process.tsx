import maintenanceImg from "@/assets/service-maintenance.jpg";
import diagnosticsImg from "@/assets/service-diagnostics.jpg";

const steps = [
  {
    no: "I.",
    title: "Diagnóstico",
    body: "Visita técnica sin costo. Levantamos historial, condición actual y criticidad operativa de cada activo.",
  },
  {
    no: "II.",
    title: "Plan editorial",
    body: "Entregamos un dossier ejecutivo con cronograma, KPIs medibles y proyección de ahorro a 12 y 36 meses.",
  },
  {
    no: "III.",
    title: "Intervención",
    body: "Cuadrillas certificadas, refacciones OEM y ventana coordinada con producción. Cero improvisación.",
  },
  {
    no: "IV.",
    title: "Garantía y monitoreo",
    body: "Reporte firmado, garantía hasta 24 meses y seguimiento remoto vía nuestro centro de telemetría.",
  },
];

const Process = () => {
  return (
    <section id="proceso" className="py-28 md:py-40 bg-surface relative overflow-hidden">
      <div className="absolute inset-0 bg-blueprint opacity-30" />
      <div className="container mx-auto px-6 lg:px-10 relative">
        <div className="max-w-3xl mb-20">
          <span className="font-mono-ed text-xs text-primary tracking-[0.3em] block mb-6">
            — 02 / METODOLOGÍA
          </span>
          <h2 className="font-display text-5xl md:text-6xl leading-[1.05] tracking-tight">
            Un proceso editado
            <br />
            con <em className="text-primary not-italic">disciplina suiza</em>.
          </h2>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5 space-y-px bg-border/60 border border-border">
            {steps.map((s) => (
              <div
                key={s.no}
                className="bg-background p-8 grid grid-cols-[auto_1fr] gap-6 items-start"
              >
                <span className="font-display text-3xl text-primary leading-none">{s.no}</span>
                <div>
                  <h3 className="font-display text-xl mb-2">{s.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{s.body}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="lg:col-span-7 grid grid-cols-2 gap-4">
            <div className="relative aspect-[3/4] overflow-hidden border border-border">
              <img
                src={maintenanceImg}
                alt="Ingeniero realizando mantenimiento de precisión a engranajes industriales"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                loading="lazy"
                width={1200}
                height={1200}
              />
              <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-background to-transparent">
                <span className="font-mono-ed text-[10px] uppercase tracking-[0.3em] text-primary">
                  · Intervención manual
                </span>
              </div>
            </div>
            <div className="relative aspect-[3/4] overflow-hidden border border-border mt-12">
              <img
                src={diagnosticsImg}
                alt="Técnico analizando datos de turbina industrial con tablet"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                loading="lazy"
                width={1200}
                height={1200}
              />
              <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-background to-transparent">
                <span className="font-mono-ed text-[10px] uppercase tracking-[0.3em] text-primary">
                  · Diagnóstico telemétrico
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
