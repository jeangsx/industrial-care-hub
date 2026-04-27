const Testimonial = () => {
  return (
    <section id="casos" className="py-28 md:py-40 bg-surface relative">
      <div className="container mx-auto px-6 lg:px-10">
        <div className="max-w-5xl mx-auto">
          <span className="font-display text-[10rem] md:text-[14rem] text-primary/20 leading-none block -mb-8">
            “
          </span>
          <blockquote className="font-display text-3xl md:text-5xl lg:text-6xl leading-[1.15] tracking-tight text-balance">
            Forjacero rediseñó nuestro programa de mantenimiento y redujo el
            paro no programado un <em className="text-primary not-italic">71%</em> en
            diez meses. Hoy son parte de la planta.
          </blockquote>

          <div className="mt-16 grid md:grid-cols-3 gap-10 items-center">
            <div className="md:col-span-2 flex items-center gap-5">
              <div className="size-14 rounded-full bg-gradient-to-br from-primary to-secondary border border-primary/40" />
              <div>
                <div className="font-display text-lg">Mariana Esquivel</div>
                <div className="font-mono-ed text-[11px] uppercase tracking-[0.3em] text-muted-foreground">
                  Directora de operaciones · Grupo Acerica
                </div>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-6">
              {[
                { k: "71%", v: "Menos paros" },
                { k: "10", v: "Meses" },
                { k: "$4.2M", v: "Ahorrados" },
              ].map((s) => (
                <div key={s.v}>
                  <div className="font-display text-3xl text-primary leading-none tabular-nums">
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
