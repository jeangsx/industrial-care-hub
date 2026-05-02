import { useEffect, useState } from "react";
import HeroHeader from "@/components/site/HeroHeader";
import Footer from "@/components/site/Footer";
import heroGaleria from "@/assets/hero-galeria-real.jpg";
import g1 from "@/assets/galeria-1.jpg";
import g2 from "@/assets/galeria-2.jpg";
import g3 from "@/assets/galeria-3.jpg";
import g4 from "@/assets/galeria-4.jpg";
import g5 from "@/assets/galeria-5.jpg";
import g6 from "@/assets/galeria-6.jpg";
import g7 from "@/assets/galeria-7.jpg";
import g8 from "@/assets/galeria-8.jpg";
import { X } from "lucide-react";

const items = [
  { src: g1, title: "Caldera pirotubular", category: "Calderas", desc: "Instalación completa con tablero de control y línea de vapor." },
  { src: g2, title: "Quemador en operación", category: "Quemadores", desc: "Llama estable tras regulación de combustión y trim de O₂." },
  { src: g3, title: "Mantenimiento de tubos", category: "Servicios", desc: "Inspección y limpieza de tubos de fuego en parada técnica." },
  { src: g4, title: "Controlador Autoflame MK8", category: "Control", desc: "Tablero servomotorizado para gestión de combustión." },
  { src: g5, title: "Sala de calderas", category: "Plantas", desc: "Línea múltiple con calderas, valvulería y aislamiento." },
  { src: g6, title: "Mandrinado de tubos", category: "Servicios", desc: "Sellado hermético para devolver presión nominal." },
  { src: g7, title: "Aceite térmico", category: "Calentadores", desc: "Skid de calentador con bomba, tablero y tuberías aisladas." },
  { src: g8, title: "Análisis de combustión", category: "Diagnóstico", desc: "Medición de O₂, CO y temperatura de gases en chimenea." },
];

const Galeria = () => {
  const [active, setActive] = useState<number | null>(null);

  useEffect(() => {
    document.title = "Galería · ECC SAC · Calderas, Quemadores y Proyectos";
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setActive(null);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <HeroHeader
        theme="boiler"
        backgroundImage={heroGaleria}
        eyebrow="Galería · ECC SAC"
        title={
          <>
            Nuestros trabajos en
            <span className="block text-primary text-glow font-light mt-2">
              calderas y quemadores
            </span>
          </>
        }
        description="Proyectos reales de mantenimiento, modernización e instalación de sistemas térmicos industriales en distintas industrias del Perú."
      />

      <main className="container mx-auto px-6 lg:px-10 py-16">
        <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((it, i) => (
            <button
              key={it.title}
              onClick={() => setActive(i)}
              className="panel-3d group relative overflow-hidden rounded-3xl border border-border/70 bg-surface/70 text-left"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={it.src}
                  alt={it.title}
                  loading="lazy"
                  width={1280}
                  height={896}
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-background via-background/80 to-transparent p-6">
                <div className="font-mono-ed text-[10px] uppercase tracking-[0.3em] text-primary mb-2">
                  {it.category}
                </div>
                <h3 className="text-lg font-semibold mb-1">{it.title}</h3>
                <p className="text-sm text-muted-foreground line-clamp-2">{it.desc}</p>
              </div>
            </button>
          ))}
        </section>
      </main>

      {active !== null && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-background/90 backdrop-blur-md p-6 animate-fade-in"
          onClick={() => setActive(null)}
        >
          <button
            className="absolute top-6 right-6 rounded-full border border-border/70 bg-surface/80 p-3 text-foreground hover:text-primary"
            onClick={() => setActive(null)}
            aria-label="Cerrar"
          >
            <X className="size-5" />
          </button>
          <figure
            className="max-w-4xl w-full max-h-[90vh] flex flex-col animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex-1 min-h-0 flex items-center justify-center">
              <img
                src={items[active].src}
                alt={items[active].title}
                className="max-h-[70vh] w-auto max-w-full object-contain rounded-2xl border border-border/70 shadow-deep"
              />
            </div>
            <figcaption className="mt-4 text-center shrink-0">
              <div className="font-mono-ed text-[10px] uppercase tracking-[0.3em] text-primary mb-1">
                {items[active].category}
              </div>
              <div className="text-lg font-semibold">{items[active].title}</div>
              <div className="text-sm text-muted-foreground">{items[active].desc}</div>
            </figcaption>
          </figure>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Galeria;
