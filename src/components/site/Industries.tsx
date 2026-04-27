const industries = [
  { name: "Petroquímica", desc: "Refinería, polímeros y especialidades · DCS DeltaV / 800xA, SIS, APC.", code: "PCH" },
  { name: "Generación eléctrica", desc: "Térmica, ciclo combinado y renovables · turbina, BoP, control coordinado.", code: "PWR" },
  { name: "Minería & metales", desc: "Concentradoras, fundición, laminación · MES, dispatch y energy management.", code: "MIN" },
  { name: "Alimentos & bebidas", desc: "Líneas continuas y batch · S88, CIP, trazabilidad, GMP digital.", code: "F&B" },
  { name: "Farmacéutica", desc: "Procesos GMP · validación CSV, GAMP-5, audit trail y data integrity ALCOA+.", code: "PHA" },
  { name: "Agua & utilities", desc: "Plantas potabilizadoras y de tratamiento · telemetría distribuida y IIoT.", code: "WTR" },
];

const Industries = () => {
  return (
    <section id="sectores" className="py-28 md:py-40">
      <div className="container mx-auto px-6 lg:px-10">
        <div className="max-w-3xl mb-20">
          <span className="font-mono-ed text-[11px] text-primary tracking-[0.3em] block mb-6">
            — 03 / SECTORES
          </span>
          <h2 className="text-5xl md:text-6xl leading-[1.05] tracking-tight font-light">
            Donde la tolerancia
            <br />
            al error es <span className="text-primary text-glow font-normal">cero</span>.
          </h2>
        </div>

        <ul className="border-t border-border">
          {industries.map((i, idx) => (
            <li
              key={i.name}
              className="group border-b border-border py-7 grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 items-baseline hover:bg-surface/50 transition-colors px-2 md:px-6 cursor-default"
            >
              <span className="md:col-span-1 font-mono-ed text-xs text-primary tracking-[0.3em]">
                {String(idx + 1).padStart(2, "0")} · {i.code}
              </span>
              <h3 className="md:col-span-4 text-3xl md:text-4xl font-light group-hover:text-primary transition-colors">
                {i.name}
              </h3>
              <p className="md:col-span-6 md:col-start-7 text-muted-foreground leading-relaxed font-mono-ed text-sm">
                {i.desc}
              </p>
              <span className="hidden md:inline-block md:col-span-1 text-primary translate-x-0 group-hover:translate-x-2 transition-transform">
                →
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Industries;
