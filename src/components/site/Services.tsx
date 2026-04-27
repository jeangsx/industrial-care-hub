import { Wrench, Activity, Cog, ShieldCheck, Cpu, Flame } from "lucide-react";

const services = [
  {
    no: "01",
    icon: Activity,
    title: "Mantenimiento predictivo",
    body: "Análisis de vibraciones, termografía y monitoreo de aceites para anticipar fallas antes de que ocurran.",
  },
  {
    no: "02",
    icon: Wrench,
    title: "Correctivo de emergencia",
    body: "Cuadrillas 24/7 con stock crítico. Tiempo de respuesta promedio menor a 4 horas en zona metropolitana.",
  },
  {
    no: "03",
    icon: Cog,
    title: "Overhaul y reconstrucción",
    body: "Recuperación integral de equipos al estado original o superior. Garantía escrita de 24 meses.",
  },
  {
    no: "04",
    icon: Cpu,
    title: "Retrofit y automatización",
    body: "Modernización de CNC, PLC y sistemas hidráulicos. Extendemos la vida útil 10–15 años.",
  },
  {
    no: "05",
    icon: ShieldCheck,
    title: "Auditoría y compliance",
    body: "Inspecciones bajo norma ISO 55000, OSHA y NOM-029. Reportes ejecutivos para tu dirección.",
  },
  {
    no: "06",
    icon: Flame,
    title: "Servicios especializados",
    body: "Soldadura TIG/MIG, balanceo dinámico, alineación láser y maquinado in situ con tolerancias <0.01 mm.",
  },
];

const Services = () => {
  return (
    <section id="servicios" className="py-28 md:py-40 relative">
      <div className="container mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-10 mb-20">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-4 mb-6">
              <span className="font-mono-ed text-xs text-primary tracking-[0.3em]">— 01 / SERVICIOS</span>
            </div>
            <h2 className="font-display text-5xl md:text-6xl leading-[1.05] tracking-tight">
              Seis disciplinas.
              <br />
              <em className="text-primary not-italic">Una sola</em> obsesión:
              <br />
              que nada se detenga.
            </h2>
          </div>
          <div className="lg:col-span-6 lg:col-start-7 flex items-end">
            <p className="text-lg text-muted-foreground max-w-md leading-relaxed">
              Operamos como una extensión de tu equipo de planta. Cada
              intervención queda documentada, auditada y respaldada por la
              firma de un ingeniero certificado.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border/60 border border-border">
          {services.map((s) => (
            <article
              key={s.no}
              className="group bg-background p-10 transition-colors duration-500 hover:bg-surface-elevated relative"
            >
              <div className="flex items-start justify-between mb-12">
                <s.icon className="size-8 text-primary" strokeWidth={1.4} />
                <span className="font-mono-ed text-xs text-muted-foreground tracking-[0.3em]">
                  {s.no}
                </span>
              </div>
              <h3 className="font-display text-2xl mb-4 leading-snug group-hover:text-primary transition-colors">
                {s.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed text-sm">{s.body}</p>
              <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-primary to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
