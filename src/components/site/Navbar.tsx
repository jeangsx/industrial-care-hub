import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { NavLink } from "react-router-dom";
import logoEcc from "@/assets/logo-ecc.png";

const links = [
  { to: "/capacidades", label: "Capacidades" },
  { to: "/servicios", label: "Servicios" },
  { to: "/compra-venta", label: "Compra/Venta" },
  { to: "/stack", label: "Stack" },
  { to: "/sectores", label: "Sectores" },
  { to: "/contacto", label: "Contacto" },
];

interface NavbarProps {
  overlayHero?: boolean;
}

const Navbar = ({ overlayHero = false }: NavbarProps) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const headerClass = overlayHero
    ? isScrolled
      ? "fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-background/40 backdrop-blur-md supports-[backdrop-filter]:bg-background/30 shadow-sm transition-all duration-300"
      : "fixed top-0 left-0 right-0 z-50 border-b border-transparent bg-transparent backdrop-blur-0 shadow-none transition-all duration-300"
    : "fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-background/40 backdrop-blur-md supports-[backdrop-filter]:bg-background/30 shadow-sm transition-all duration-300";

  return (
    <>
      <header className={headerClass}>
        <div className="container mx-auto px-6 lg:px-10 py-5 flex items-center justify-between">
          <NavLink to="/" className="flex items-center gap-3">
            <img src={logoEcc} alt="Logo ECC - Energía Combustión Calorífica" className="h-12 w-auto" />
            <div className="leading-tight hidden sm:block">
            <div className="font-mono-ed text-sm tracking-tight font-semibold">ECC</div>
            <div className="font-mono-ed text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
              Energía Combustión Calorífica
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
      </header>
      {!overlayHero && (
        <>
          <div className="divider-rule mx-6 lg:mx-10" />
          <div className="h-20 lg:h-24" aria-hidden="true" />
        </>
      )}
    </>
  );
};

export default Navbar;
