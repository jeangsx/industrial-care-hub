import { Button } from "@/components/ui/button";
import { Activity } from "lucide-react";

const links = [
  { href: "#capacidades", label: "Capacidades" },
  { href: "#stack", label: "Stack" },
  { href: "#sectores", label: "Sectores" },
  { href: "#caso", label: "Caso" },
  { href: "#contacto", label: "Contacto" },
];

const Navbar = () => {
  return (
    <header className="absolute top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-6 lg:px-10 py-6 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3">
          <div className="size-9 rounded-md border border-primary/60 grid place-items-center bg-primary/5">
            <Activity className="size-4 text-primary" strokeWidth={2.2} />
          </div>
          <div className="leading-tight">
            <div className="font-mono-ed text-sm tracking-tight font-semibold">AXON_SYSTEMS</div>
            <div className="font-mono-ed text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
              Industrial · Engineering
            </div>
          </div>
        </a>

        <nav className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="font-mono-ed text-xs text-muted-foreground hover:text-primary transition-colors uppercase tracking-[0.22em]"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center gap-2 font-mono-ed text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
            <span className="size-1.5 rounded-full bg-primary animate-blink" />
            <span>SYS · ONLINE</span>
          </div>
          <Button variant="editorial" size="sm" asChild>
            <a href="#contacto">Iniciar</a>
          </Button>
        </div>
      </div>
      <div className="divider-rule mx-6 lg:mx-10" />
    </header>
  );
};

export default Navbar;
