import { Cpu, Network, GitBranch, Gauge, ShieldCheck, Workflow } from "lucide-react";

const services = [
  {
    no: "01",
    icon: Workflow,
    title: "Ingeniería de procesos",
    body: "Diseño, simulación y optimización de procesos continuos y batch. Balance de masa, energía y modelado dinámico.",
    tag: "PROCESS",
  },
  {
    no: "02",
    icon: Cpu,
    title: "Automatización & PLC",
    body: "Programación PLC/HMI sobre Siemens, Rockwell y Schneider. Control discreto, regulatorio y avanzado APC.",
    tag: "PLC · DCS",
  },
  {
    no: "03",
    icon: Network,
    title: "SCADA & integración",
    body: "Arquitecturas SCADA multi-planta, historización, OPC UA y bridges a MES/ERP bajo ISA-95.",
    tag: "SCADA · MES",
  },
  {
    no: "04",
    icon: Gauge,
    title: "Instrumentación",
    body: "Selección, calibración y loop tuning de sensores críticos. Documentación P&ID y loop sheets bajo ISA-5.1.",
    tag: "INSTRUM.",
  },
  {
    no: "05",
    icon: GitBranch,
    title: "Industrial IoT & analítica",
    body: "Edge computing, gemelos digitales y dashboards de telemetría con detección anómala basada en ML.",
    tag: "IIoT · ML",
  },
  {
    no: "06",
    icon: ShieldCheck,
    title: "Functional safety",
    body: "Estudios HAZOP/LOPA, diseño SIS y verificación SIL bajo IEC 61511. Cumplimiento auditado y firmado.",
    tag: "SIS · SIL",
  },
];

const Services = () => {
  return (
    <section id="capacidades" className="py-28 md:py-40 relative">
      <div className="container mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-10 mb-20">
          <div className="lg:col-span-6">
            <div className="flex items-center gap-3 mb-6">
              <span className="font-mono-ed text-[11px] text-primary tracking-[0.3em]">
                — 01 / CAPACIDADES
              </span>
            </div>
            <h2 className="text-5xl md:text-6xl leading-[1.05] tracking-tight font-light">
              Seis disciplinas.
              <br />
              <span className="text-primary text-glow font-normal">Un solo</span> stack
              <br />
              de control.
            </h2>
          </div>
          <div className="lg:col-span-5 lg:col-start-8 flex items-end">
            <p className="text-lg text-muted-foreground max-w-md leading-relaxed">
              Operamos como una extensión del equipo de ingeniería de planta.
              Cada loop, cada KPI y cada decisión queda documentada,
              versionada y respaldada por un ingeniero certificado.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border border border-border rounded-md overflow-hidden">
          {services.map((s) => (
            <article
              key={s.no}
              className="group bg-background p-8 transition-colors duration-500 hover:bg-surface-elevated relative"
            >
              <div className="flex items-start justify-between mb-10">
                <div className="size-12 rounded-md border border-border bg-surface grid place-items-center group-hover:border-primary/60 group-hover:shadow-glow transition-all">
                  <s.icon className="size-5 text-primary" strokeWidth={1.6} />
                </div>
                <div className="text-right">
                  <span className="font-mono-ed text-[10px] text-primary tracking-[0.22em] block">
                    {s.tag}
                  </span>
                  <span className="font-mono-ed text-[10px] text-muted-foreground tracking-[0.3em]">
                    {s.no}
                  </span>
                </div>
              </div>
              <h3 className="text-2xl mb-3 leading-snug font-medium group-hover:text-primary transition-colors">
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
