const industries = [
  { name: "Automotriz", desc: "OEM y Tier-1 · líneas de prensado, soldadura robotizada, pintura." },
  { name: "Alimentos & Bebidas", desc: "Llenadoras, envasadoras, túneles de pasteurización y CIP." },
  { name: "Energía", desc: "Turbinas de vapor, generadores, compresores reciprocantes." },
  { name: "Acero & Minería", desc: "Hornos, laminadoras, molinos SAG, bandas transportadoras." },
  { name: "Farmacéutica", desc: "Equipo bajo GMP, validación IQ/OQ/PQ, salas limpias." },
  { name: "Petroquímica", desc: "Bombas API, intercambiadores, columnas y sistemas a fuego." },
];

const Industries = () => {
  return (
    <section id="industrias" className="py-28 md:py-40">
      <div className="container mx-auto px-6 lg:px-10">
        <div className="max-w-3xl mb-20">
          <span className="font-mono-ed text-xs text-primary tracking-[0.3em] block mb-6">
            — 03 / INDUSTRIAS
          </span>
          <h2 className="font-display text-5xl md:text-6xl leading-[1.05] tracking-tight">
            Donde la tolerancia
            <br />
            al error es <em className="text-primary not-italic">cero</em>.
          </h2>
        </div>

        <ul className="border-t border-border">
          {industries.map((i) => (
            <li
              key={i.name}
              className="group border-b border-border py-8 grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 items-baseline hover:bg-surface/50 transition-colors px-2 md:px-6 cursor-default"
            >
              <span className="md:col-span-1 font-mono-ed text-xs text-muted-foreground tracking-[0.3em]">
                /0{industries.indexOf(i) + 1}
              </span>
              <h3 className="md:col-span-4 font-display text-3xl md:text-4xl group-hover:text-primary transition-colors">
                {i.name}
              </h3>
              <p className="md:col-span-6 md:col-start-7 text-muted-foreground leading-relaxed">
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
