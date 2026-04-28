import { Button } from "@/components/ui/button";
import { NavLink } from "react-router-dom";
import logoEcc from "@/assets/logo-ecc.png";

const links = [
  { to: "/capacidades", label: "Capacidades" },
  { to: "/stack", label: "Stack" },
  { to: "/sectores", label: "Sectores" },
  { to: "/caso", label: "Caso" },
  { to: "/contacto", label: "Contacto" },
];

const Navbar = () => {
  return (
    <header className="sticky top-0 left-0 right-0 z-50 border-b border-border/70 bg-background/90 backdrop-blur-sm">
      <div className="container mx-auto px-6 lg:px-10 py-5 flex items-center justify-between">
        <NavLink to="/" className="flex items-center gap-3">
          <img src={logoEcc} alt="Logo ECC - Energía Combustión Calorífica" className="h-12 w-auto" />
          <div className="leading-tight hidden sm:block">
            <div className="font-mono-ed text-sm tracking-tight font-semibold">AXON_SYSTEMS</div>
            <div className="font-mono-ed text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
              Industrial · Engineering
            </div>
          </div>
        </NavLink>

        <nav className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) =>
                `font-mono-ed text-xs uppercase tracking-[0.22em] transition-colors ${
                  isActive ? "text-primary" : "text-muted-foreground hover:text-primary"
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center gap-2 font-mono-ed text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
            <span className="size-1.5 rounded-full bg-primary animate-blink" />
            <span>SYS · ONLINE</span>
          </div>
          <Button variant="editorial" size="sm" asChild>
            <NavLink to="/contacto">Iniciar</NavLink>
          </Button>
        </div>
      </div>
      <div className="divider-rule mx-6 lg:mx-10" />
    </header>
  );
};

export default Navbar;
