import { Flame, Wrench, Settings, Zap, Droplets, Gauge, Cog, ShieldCheck } from "lucide-react";

const services = [
  {
    no: "01",
    icon: Wrench,
    title: "Mantenimiento integral de calderas",
    body: "Inspección, limpieza, cambio de tubos y puesta a punto de calderas pirotubulares y acuotubulares.",
    tag: "CALDERAS",
  },
  {
    no: "02",
    icon: Flame,
    title: "Mantenimiento de quemadores",
    body: "Servicio integral en quemadores, tren de combustión, y regulación con análisis de gases.",
    tag: "QUEMADORES",
  },
  {
    no: "03",
    icon: Settings,
    title: "Conversión a gas o dual",
    body: "Conversión de quemadores a Gas Natural, GLP o sistemas duales con ingeniería certificada.",
    tag: "CONVERSIÓN",
  },
  {
    no: "04",
    icon: Zap,
    title: "Tableros eléctricos & motores",
    body: "Fabricación de tableros nuevos, mejoramiento de existentes y mantenimiento de motores eléctricos.",
    tag: "ELÉCTRICO",
  },
  {
    no: "05",
    icon: Droplets,
    title: "Redes de vapor y agua",
    body: "Instalación de redes de vapor y condensado, sistemas de ablandamiento y alimentación a presión constante.",
    tag: "VAPOR · AGUA",
  },
  {
    no: "06",
    icon: Cog,
    title: "Refractario & aislamiento",
    body: "Reparación o fabricación de tapas, conos, tapones y forrado con aislamiento térmico de alto rendimiento.",
    tag: "REFRACTARIO",
  },
  {
    no: "07",
    icon: Gauge,
    title: "Ensayo hidrostático",
    body: "Pruebas de presión hidrostática certificadas para recipientes a presión y validación de integridad.",
    tag: "TESTING",
  },
  {
    no: "08",
    icon: ShieldCheck,
    title: "Fabricación de repuestos",
    body: "Fabricación de difusores y repuestos a medida con materiales originales y entrega oportuna.",
    tag: "REPUESTOS",
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
                — 01 / SERVICIOS ECC
              </span>
            </div>
            <h2 className="text-5xl md:text-6xl leading-[1.05] tracking-tight font-light">
              Trabajos que mantienen
              <br />
              <span className="text-primary text-glow font-normal">viva</span> tu industria.
            </h2>
          </div>
          <div className="lg:col-span-5 lg:col-start-8 flex items-end">
            <p className="text-lg text-muted-foreground max-w-md leading-relaxed">
              Especialistas en mantener, optimizar y modernizar tus sistemas térmicos.
              Personal altamente capacitado y equipos de última tecnología,
              con respuesta inmediata para reducir paradas no planificadas.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-border border border-border rounded-md overflow-hidden">
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
              <h3 className="text-xl mb-3 leading-snug font-medium group-hover:text-primary transition-colors">
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
