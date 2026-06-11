import { Mail, MapPin, Phone, Globe2 } from "lucide-react";
import { NavLink } from "react-router-dom";
import logoEcc from "@/assets/logo-ecc-new.png";

const footerLinkClass = "hover:text-primary transition-colors";

const Footer = () => {
  return (
    <footer className="border-t border-border py-14 bg-background">
      <div className="container mx-auto px-6 lg:px-10">
        <div className="grid md:grid-cols-12 gap-10 mb-12">
          <div className="md:col-span-5">
            <div className="flex items-center gap-4 mb-5">
              <img
                src={logoEcc}
                alt="Logo ECC SAC"
                loading="lazy"
                decoding="async"
                className="h-14 w-auto drop-shadow-[0_2px_10px_rgba(0,0,0,0.45)]"
              />
              <div className="flex flex-col">
                <span className="font-mono-ed text-sm font-semibold tracking-tight">ECC SAC</span>
                <span className="font-mono-ed text-[10px] uppercase tracking-[0.25em] text-primary/80">
                  Energía · Combustión · Calorífica
                </span>
              </div>
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
              <li><NavLink to="/servicios" className={footerLinkClass}>Mantenimiento</NavLink></li>
              <li><NavLink to="/servicios" className={footerLinkClass}>Quemadores</NavLink></li>
              <li><NavLink to="/#autoflame" className={footerLinkClass}>Autoflame®</NavLink></li>
              <li><NavLink to="/servicios" className={footerLinkClass}>Repuestos</NavLink></li>
            </ul>
          </div>
          <div className="md:col-span-2">
            <h4 className="font-mono-ed text-[10px] uppercase tracking-[0.3em] text-primary mb-4">// Empresa</h4>
            <ul className="space-y-3 text-sm text-muted-foreground font-mono-ed">
              <li><NavLink to="/sectores" className={footerLinkClass}>Sectores</NavLink></li>
              <li><NavLink to="/#planes" className={footerLinkClass}>Planes</NavLink></li>
              <li><NavLink to="/#porque-elegirnos" className={footerLinkClass}>¿Por qué ECC?</NavLink></li>
              <li><NavLink to="/contacto" className={footerLinkClass}>Contacto</NavLink></li>
            </ul>
          </div>
          <div className="md:col-span-3">
            <h4 className="font-mono-ed text-[10px] uppercase tracking-[0.3em] text-primary mb-4">// Contacto</h4>
            <ul className="space-y-4 text-sm text-muted-foreground font-mono-ed">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 size-4 shrink-0 text-primary" />
                <span>Av. Metropolitana Mz G1 Lt 43, Ate – Lima</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="mt-0.5 size-4 shrink-0 text-primary" />
                <div className="flex flex-col gap-2">
                  <a href="tel:+51972316786" className="whitespace-nowrap hover:text-primary transition-colors">
                    +51 972 316 786
                  </a>
                  <a href="tel:+51938154638" className="whitespace-nowrap hover:text-primary transition-colors">
                    +51 938 154 638
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="mt-0.5 size-4 shrink-0 text-primary" />
                <a href="mailto:ericksoria@calderas-ecc.com" className="break-all hover:text-primary transition-colors">
                  ericksoria@calderas-ecc.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Globe2 className="mt-0.5 size-4 shrink-0 text-primary" />
                <a href="https://calderas-ecc.com" className="break-all hover:text-primary transition-colors">
                  calderas-ecc.com
                </a>
              </li>
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
