const industries = [
  { name: "Minería", desc: "Calderas y sistemas de vapor para procesos mineros y metalúrgicos.", code: "MIN" },
  { name: "Pesquera", desc: "Calderas para cocción, esterilizado y plantas de harina de pescado.", code: "PSC" },
  { name: "Textil", desc: "Vapor para teñido, planchado y procesos de acabado textil.", code: "TXT" },
  { name: "Agro-industrial", desc: "Calor de proceso para alimentos, lácteos y derivados agrícolas.", code: "AGR" },
  { name: "Hotelera", desc: "Sistemas de agua caliente sanitaria, lavandería y calefacción.", code: "HTL" },
  { name: "Comercial", desc: "Soluciones térmicas para hospitales, lavanderías y centros comerciales.", code: "COM" },
];

const Industries = () => {
  return (
    <section id="sectores" className="py-28 md:py-40">
      <div className="container mx-auto px-6 lg:px-10">
        <div className="max-w-3xl mb-20">
          <span className="font-mono-ed text-[11px] text-primary tracking-[0.3em] block mb-6">
            — 03 / SECTORES ATENDIDOS
          </span>
          <h2 className="text-5xl md:text-6xl leading-[1.05] tracking-tight font-light">
            Calor confiable,
            <br />
            producción <span className="text-primary text-glow font-normal">imparable</span>.
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
