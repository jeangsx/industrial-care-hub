import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { NavLink } from "react-router-dom";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import logoEcc from "@/assets/logo-ecc-new.png";

const links = [
  { to: "/capacidades", label: "Capacidades" },
  { to: "/servicios", label: "Servicios" },
  { to: "/compra-venta", label: "Compra/Venta" },
  { to: "/stack", label: "Stack" },
  { to: "/sectores", label: "Sectores" },
  { to: "/galeria", label: "Galería" },
  { to: "/contacto", label: "Contacto" },
];

interface NavbarProps {
  overlayHero?: boolean;
}

const Navbar = ({ overlayHero = false }: NavbarProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Always use a solid backdrop so menu links are readable on every page,
  // including when scrolling over light/photo backgrounds.
  const headerClass = overlayHero && !isScrolled
    ? "fixed top-0 left-0 right-0 z-50 border-b border-transparent bg-transparent backdrop-blur-none transition-all duration-300"
    : "fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-background/90 backdrop-blur-md supports-[backdrop-filter]:bg-background/75 shadow-sm transition-all duration-300";

  return (
    <>
      <header className={headerClass}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-10 py-4 flex items-center justify-between">
          <NavLink to="/" className="flex items-center gap-3 shrink-0">
            <img
              src={logoEcc}
              alt="Logo ECC - Energía Combustión Calorífica"
              loading="lazy"
              decoding="async"
              className="h-16 sm:h-20 w-auto"
            />
          </NavLink>

          <nav className="hidden lg:flex items-center gap-7">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                className={({ isActive }) =>
                  `font-mono-ed text-xs uppercase tracking-[0.22em] transition-colors ${
                    isActive ? "text-primary" : "text-foreground/90 hover:text-primary"
                  }`
                }
              >
                {l.label}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <div className="hidden xl:flex items-center gap-2 font-mono-ed text-[11px] uppercase tracking-[0.22em] text-foreground/70">
              <span className="size-1.5 rounded-full bg-primary animate-blink" />
              <span>SYS · ONLINE</span>
            </div>

            {/* Mobile menu */}
            <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
              <SheetTrigger asChild>
                <button
                  aria-label="Abrir menú"
                  className="lg:hidden inline-flex items-center justify-center size-10 rounded-md border border-border bg-background/70 text-foreground hover:text-primary"
                >
                  <Menu className="size-5" />
                </button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[80vw] max-w-xs bg-background">
                <nav className="mt-10 flex flex-col gap-1">
                  {links.map((l) => (
                    <NavLink
                      key={l.to}
                      to={l.to}
                      onClick={() => setMobileOpen(false)}
                      className={({ isActive }) =>
                        `font-mono-ed text-sm uppercase tracking-[0.2em] py-3 px-2 rounded-md transition-colors ${
                          isActive
                            ? "text-primary bg-primary/10"
                            : "text-foreground hover:text-primary hover:bg-accent"
                        }`
                      }
                    >
                      {l.label}
                    </NavLink>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
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
