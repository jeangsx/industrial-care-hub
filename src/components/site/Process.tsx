import pipeworkImg from "@/assets/process-pipework.jpg";
import engineerImg from "@/assets/process-engineer.jpg";

const steps = [
  {
    no: "00",
    title: "Discovery",
    body: "Auditoría in situ del proceso. Levantamos P&ID, arquitectura de red, criticidad y baseline operativo.",
  },
  {
    no: "01",
    title: "Architecture",
    body: "Diseño de la arquitectura de control: PLC, SCADA, redes industriales y capa de datos histórico.",
  },
  {
    no: "02",
    title: "Deployment",
    body: "Implementación, FAT y SAT. Programación versionada en Git, documentación bajo ISA-5.1 y ISA-95.",
  },
  {
    no: "03",
    title: "Operate",
    body: "Soporte 24/7, monitoreo remoto, KPIs vivos y mejora continua de loops con detección anómala.",
  },
];

const Process = () => {
  return (
    <section id="stack" className="py-28 md:py-40 bg-surface relative overflow-hidden">
      <div className="absolute inset-0 bg-blueprint opacity-30" />
      <div className="container mx-auto px-6 lg:px-10 relative">
        <div className="max-w-3xl mb-20">
          <span className="font-mono-ed text-[11px] text-primary tracking-[0.3em] block mb-6">
            — 02 / METODOLOGÍA
          </span>
          <h2 className="text-5xl md:text-6xl leading-[1.05] tracking-tight font-light">
            Un pipeline de despliegue
            <br />
            con <span className="text-primary text-glow font-normal">disciplina de software</span>.
          </h2>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5 space-y-px bg-border border border-border rounded-md overflow-hidden">
            {steps.map((s, i) => (
              <div
                key={s.no}
                className="bg-background p-7 grid grid-cols-[auto_1fr] gap-6 items-start group hover:bg-surface-elevated transition-colors"
              >
                <div className="flex flex-col items-center gap-2">
                  <span className="font-mono-ed text-2xl text-primary leading-none font-semibold">
                    {s.no}
                  </span>
                  {i < steps.length - 1 && (
                    <span className="w-px h-12 bg-border group-hover:bg-primary/60 transition-colors" />
                  )}
                </div>
                <div>
                  <h3 className="font-mono-ed text-sm uppercase tracking-[0.22em] mb-2 text-primary">
                    {s.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{s.body}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="lg:col-span-7 grid grid-cols-2 gap-4">
            <div className="relative aspect-[3/4] overflow-hidden rounded-md border border-border">
              <img
                src={pipeworkImg}
                alt="Instrumentación industrial con sensores digitales y manómetros"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                loading="lazy"
                width={1200}
                height={1600}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <span className="font-mono-ed text-[10px] uppercase tracking-[0.3em] text-primary">
                  · Instrumentación · ISA-5.1
                </span>
              </div>
            </div>
            <div className="relative aspect-[3/4] overflow-hidden rounded-md border border-border mt-12">
              <img
                src={engineerImg}
                alt="Ingeniero supervisando dashboards SCADA en sala de control"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                loading="lazy"
                width={1200}
                height={1600}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <span className="font-mono-ed text-[10px] uppercase tracking-[0.3em] text-primary">
                  · SCADA · 24/7 ops
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
