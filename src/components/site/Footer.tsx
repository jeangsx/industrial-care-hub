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
              <span className="font-mono-ed text-sm font-semibold tracking-tight">ECC SAC</span>
            </div>
            <p className="text-sm text-muted-foreground max-w-sm leading-relaxed">
              Energía Combustión Calorífica · Soluciones térmicas industriales:
              calderas, quemadores, calentadores de aceite térmico y hornos.
              Calor confiable, producción imparable.
            </p>
          </div>
          <div className="md:col-span-2">
            <h4 className="font-mono-ed text-[10px] uppercase tracking-[0.3em] text-primary mb-4">// Servicios</h4>
            <ul className="space-y-3 text-sm text-muted-foreground font-mono-ed">
              <li><a href="#capacidades" className="hover:text-primary transition-colors">Mantenimiento</a></li>
              <li><a href="#capacidades" className="hover:text-primary transition-colors">Quemadores</a></li>
              <li><a href="#autoflame" className="hover:text-primary transition-colors">Autoflame®</a></li>
              <li><a href="#capacidades" className="hover:text-primary transition-colors">Repuestos</a></li>
            </ul>
          </div>
          <div className="md:col-span-2">
            <h4 className="font-mono-ed text-[10px] uppercase tracking-[0.3em] text-primary mb-4">// Empresa</h4>
            <ul className="space-y-3 text-sm text-muted-foreground font-mono-ed">
              <li><a href="#sectores" className="hover:text-primary transition-colors">Sectores</a></li>
              <li><a href="#planes" className="hover:text-primary transition-colors">Planes</a></li>
              <li><a href="#porque-elegirnos" className="hover:text-primary transition-colors">¿Por qué ECC?</a></li>
              <li><a href="#contacto" className="hover:text-primary transition-colors">Contacto</a></li>
            </ul>
          </div>
          <div className="md:col-span-3">
            <h4 className="font-mono-ed text-[10px] uppercase tracking-[0.3em] text-primary mb-4">// Contacto</h4>
            <ul className="space-y-3 text-sm text-muted-foreground font-mono-ed">
              <li>Av. Metropolitana Mz G1 Lt 43, Ate – Lima</li>
              <li>+51 972 316 786 · +51 938 154 638</li>
              <li>ericksoria@calderas-ecc.com</li>
              <li>www.calderas-ecc.com</li>
            </ul>
          </div>
        </div>

        <div className="divider-rule mb-6" />
        <div className="flex flex-col md:flex-row justify-between gap-4 text-xs text-muted-foreground font-mono-ed uppercase tracking-[0.2em]">
          <span>© {new Date().getFullYear()} Energía Combustión Calorífica ECC SAC</span>
          <span className="flex items-center gap-3">
            <span className="size-1.5 rounded-full bg-primary animate-blink" />
            +10 años · Calor confiable · Producción imparable
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
