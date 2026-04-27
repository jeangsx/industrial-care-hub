const Testimonial = () => {
  return (
    <section id="caso" className="py-28 md:py-40 bg-surface relative">
      <div className="absolute inset-0 bg-dots opacity-40" />
      <div className="container mx-auto px-6 lg:px-10 relative">
        <div className="max-w-5xl mx-auto">
          <span className="font-mono-ed text-[11px] text-primary tracking-[0.3em] block mb-10">
            — 04 / CASE_STUDY · 0042
          </span>

          <blockquote className="text-3xl md:text-5xl lg:text-6xl leading-[1.15] tracking-tight text-balance font-light">
            <span className="text-primary text-glow">“</span>
            Axon rediseñó nuestra capa de control y redujo el paro no
            programado un <span className="text-primary text-glow font-normal">71%</span> en
            diez meses. Hoy son parte del equipo de ingeniería.
            <span className="text-primary text-glow">”</span>
          </blockquote>

          <div className="mt-16 grid md:grid-cols-3 gap-10 items-center">
            <div className="md:col-span-2 flex items-center gap-5">
              <div className="size-14 rounded-full gradient-neon border border-primary/40 shadow-glow" />
              <div>
                <div className="text-lg font-medium">Mariana Esquivel</div>
                <div className="font-mono-ed text-[11px] uppercase tracking-[0.3em] text-muted-foreground mt-1">
                  Dir. operaciones · Grupo Acerica
                </div>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-6">
              {[
                { k: "71%", v: "↓ paros" },
                { k: "10", v: "meses" },
                { k: "$4.2M", v: "ahorro" },
              ].map((s) => (
                <div key={s.v} className="border-l border-primary/40 pl-4">
                  <div className="font-mono-ed text-3xl text-primary leading-none tabular-nums font-semibold">
                    {s.k}
                  </div>
                  <div className="font-mono-ed text-[10px] uppercase tracking-[0.25em] text-muted-foreground mt-2">
                    {s.v}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
