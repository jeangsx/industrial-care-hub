import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

const links = [
  { href: "#servicios", label: "Servicios" },
  { href: "#proceso", label: "Proceso" },
  { href: "#industrias", label: "Industrias" },
  { href: "#casos", label: "Casos" },
  { href: "#contacto", label: "Contacto" },
];

const Navbar = () => {
  return (
    <header className="absolute top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-6 lg:px-10 py-6 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3">
          <div className="size-9 border border-primary/60 grid place-items-center">
            <span className="font-display text-lg text-primary leading-none">F</span>
          </div>
          <div className="leading-tight">
            <div className="font-display text-base tracking-wide">Forjacero</div>
            <div className="font-mono-ed text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
              Industrial Engineering
            </div>
          </div>
        </a>

        <nav className="hidden lg:flex items-center gap-9">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-muted-foreground hover:text-primary transition-colors uppercase tracking-[0.18em]"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <a href="tel:+5215555000000" className="hidden md:flex items-center gap-2 text-sm text-foreground/80 hover:text-primary transition-colors">
            <Phone className="size-4 text-primary" />
            <span className="font-mono-ed">+52 55 5500 0000</span>
          </a>
          <Button variant="editorial" size="sm" asChild>
            <a href="#contacto">Cotizar</a>
          </Button>
        </div>
      </div>
      <div className="divider-rule mx-6 lg:mx-10" />
    </header>
  );
};

export default Navbar;
