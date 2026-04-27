import { Activity } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border py-14 bg-background">
      <div className="container mx-auto px-6 lg:px-10">
        <div className="grid md:grid-cols-12 gap-10 mb-12">
          <div className="md:col-span-5">
            <div className="flex items-center gap-3 mb-5">
              <div className="size-9 rounded-md border border-primary/60 grid place-items-center bg-primary/5">
                <Activity className="size-4 text-primary" strokeWidth={2.2} />
              </div>
              <span className="font-mono-ed text-sm font-semibold tracking-tight">AXON_SYSTEMS</span>
            </div>
            <p className="text-sm text-muted-foreground max-w-sm leading-relaxed">
              Ingeniería industrial y de sistemas para plantas que no pueden
              detenerse. Automatización, SCADA y telemetría desde 1987.
            </p>
          </div>
          <div className="md:col-span-2">
            <h4 className="font-mono-ed text-[10px] uppercase tracking-[0.3em] text-primary mb-4">// Stack</h4>
            <ul className="space-y-3 text-sm text-muted-foreground font-mono-ed">
              <li><a href="#capacidades" className="hover:text-primary transition-colors">Procesos</a></li>
              <li><a href="#capacidades" className="hover:text-primary transition-colors">PLC · DCS</a></li>
              <li><a href="#capacidades" className="hover:text-primary transition-colors">SCADA · MES</a></li>
              <li><a href="#capacidades" className="hover:text-primary transition-colors">IIoT · ML</a></li>
            </ul>
          </div>
          <div className="md:col-span-2">
            <h4 className="font-mono-ed text-[10px] uppercase tracking-[0.3em] text-primary mb-4">// Empresa</h4>
            <ul className="space-y-3 text-sm text-muted-foreground font-mono-ed">
              <li><a href="#stack" className="hover:text-primary transition-colors">Metodología</a></li>
              <li><a href="#sectores" className="hover:text-primary transition-colors">Sectores</a></li>
              <li><a href="#caso" className="hover:text-primary transition-colors">Casos</a></li>
              <li><a href="#contacto" className="hover:text-primary transition-colors">Contacto</a></li>
            </ul>
          </div>
          <div className="md:col-span-3">
            <h4 className="font-mono-ed text-[10px] uppercase tracking-[0.3em] text-primary mb-4">// Contacto</h4>
            <ul className="space-y-3 text-sm text-muted-foreground font-mono-ed">
              <li>Av. Industria 1287, CDMX</li>
              <li>+52 55 5500 0000</li>
              <li>ops@axonsystems.io</li>
            </ul>
          </div>
        </div>

        <div className="divider-rule mb-6" />
        <div className="flex flex-col md:flex-row justify-between gap-4 text-xs text-muted-foreground font-mono-ed uppercase tracking-[0.2em]">
          <span>© {new Date().getFullYear()} Axon Systems S.A. de C.V.</span>
          <span className="flex items-center gap-3">
            <span className="size-1.5 rounded-full bg-primary animate-blink" />
            ISA-95 · IEC 61511 · ISO 27001 · GAMP-5
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
