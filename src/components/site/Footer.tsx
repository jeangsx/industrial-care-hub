const Footer = () => {
  return (
    <footer className="border-t border-border py-14 bg-background">
      <div className="container mx-auto px-6 lg:px-10">
        <div className="grid md:grid-cols-12 gap-10 mb-12">
          <div className="md:col-span-5">
            <div className="flex items-center gap-3 mb-5">
              <div className="size-9 border border-primary/60 grid place-items-center">
                <span className="font-display text-lg text-primary leading-none">F</span>
              </div>
              <span className="font-display text-lg">Forjacero Industrial</span>
            </div>
            <p className="text-sm text-muted-foreground max-w-sm leading-relaxed">
              Mantenimiento de maquinaria industrial pesada con estándares
              editoriales de precisión desde 1987.
            </p>
          </div>
          <div className="md:col-span-2">
            <h4 className="font-mono-ed text-[10px] uppercase tracking-[0.3em] text-primary mb-4">Servicios</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><a href="#servicios" className="hover:text-primary transition-colors">Predictivo</a></li>
              <li><a href="#servicios" className="hover:text-primary transition-colors">Correctivo</a></li>
              <li><a href="#servicios" className="hover:text-primary transition-colors">Overhaul</a></li>
              <li><a href="#servicios" className="hover:text-primary transition-colors">Retrofit</a></li>
            </ul>
          </div>
          <div className="md:col-span-2">
            <h4 className="font-mono-ed text-[10px] uppercase tracking-[0.3em] text-primary mb-4">Empresa</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><a href="#proceso" className="hover:text-primary transition-colors">Proceso</a></li>
              <li><a href="#industrias" className="hover:text-primary transition-colors">Industrias</a></li>
              <li><a href="#casos" className="hover:text-primary transition-colors">Casos</a></li>
              <li><a href="#contacto" className="hover:text-primary transition-colors">Contacto</a></li>
            </ul>
          </div>
          <div className="md:col-span-3">
            <h4 className="font-mono-ed text-[10px] uppercase tracking-[0.3em] text-primary mb-4">Contacto</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>Av. Industria 1287, CDMX</li>
              <li>+52 55 5500 0000</li>
              <li>contacto@forjacero.mx</li>
            </ul>
          </div>
        </div>

        <div className="divider-rule mb-6" />
        <div className="flex flex-col md:flex-row justify-between gap-4 text-xs text-muted-foreground font-mono-ed uppercase tracking-[0.2em]">
          <span>© {new Date().getFullYear()} Forjacero S.A. de C.V.</span>
          <span>ISO 9001 · ISO 55000 · NOM-029</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
