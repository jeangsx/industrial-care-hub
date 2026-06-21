import { useEffect, useMemo, useState } from "react";
import HeroHeader from "@/components/site/HeroHeader";
import Footer from "@/components/site/Footer";
import heroGaleriaImg from "@/assets/11zon_IMG_7830.webp";
import g1 from "@/assets/galeria-1.jpg";
import g2 from "@/assets/galeria-2.jpg";
import g3 from "@/assets/galeria-3.jpg";
import g4 from "@/assets/galeria-4.jpg";
import g5 from "@/assets/galeria-5.jpg";
import g6 from "@/assets/galeria-6.jpg";
import g7 from "@/assets/galeria-7.jpg";
import g8 from "@/assets/galeria-8.jpg";
import r1 from "@/assets/real-1.jpg";
import r2 from "@/assets/real-2.jpg";
import r3 from "@/assets/real-3.jpg";
import r4 from "@/assets/real-4.jpg";
import r5 from "@/assets/real-5.jpg";
import r6 from "@/assets/real-6.jpg";
import r7 from "@/assets/real-7.jpg";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

type Item = { src: string; title: string; category: string; desc: string; real?: boolean };

const items: Item[] = [
  // Trabajos reales (destacados primero)
  { src: r1, title: "Quemador dual instalado en caldera", category: "Quemadores", desc: "Quemador con servomotores y conexionado de combustible montado en caldera pirotubular durante puesta en marcha.", real: true },
  { src: r7, title: "Quemador modulante con malla protectora", category: "Quemadores", desc: "Quemador industrial con servomotor Siemens y línea de gas en sala de calderas operativa.", real: true },
  { src: r3, title: "Ventilador y línea de combustible", category: "Componentes", desc: "Ventilador del quemador con línea de gas, regulador y control Allanson en planta industrial.", real: true },
  { src: r2, title: "Tren de válvulas de gas", category: "Control", desc: "Doble tren de válvulas Siemens VGD con manómetros y presostatos para control seguro de combustible.", real: true },
  { src: r4, title: "Llama estable en cámara de combustión", category: "Diagnóstico", desc: "Vista por mirilla de la llama tras regulación de aire y combustible: combustión limpia y centrada.", real: true },
  { src: r5, title: "Mantenimiento interno de caldera", category: "Servicios", desc: "Limpieza y revisión de espejo y tubos de fuego durante parada técnica programada.", real: true },
  { src: r6, title: "Soldadura de tubos de caldera", category: "Servicios", desc: "Soldadura TIG de tubos sobre espejo durante reparación mayor de caldera pirotubular.", real: true },
  // Galería editorial
  { src: g1, title: "Caldera pirotubular", category: "Calderas", desc: "Instalación completa con tablero de control y línea de vapor." },
  { src: g2, title: "Quemador en operación", category: "Quemadores", desc: "Llama estable tras regulación de combustión y trim de O₂." },
  { src: g3, title: "Mantenimiento de tubos", category: "Servicios", desc: "Inspección y limpieza de tubos de fuego en parada técnica." },
  { src: g4, title: "Controlador Autoflame MK8", category: "Control", desc: "Tablero servomotorizado para gestión de combustión." },
  { src: g5, title: "Sala de calderas", category: "Plantas", desc: "Línea múltiple con calderas, valvulería y aislamiento." },
  { src: g6, title: "Mandrinado de tubos", category: "Servicios", desc: "Sellado hermético para devolver presión nominal." },
  { src: g7, title: "Aceite térmico", category: "Calentadores", desc: "Skid de calentador con bomba, tablero y tuberías aisladas." },
  { src: g8, title: "Análisis de combustión", category: "Diagnóstico", desc: "Medición de O₂, CO y temperatura de gases en chimenea." },
];

const categories = ["Todos", "Quemadores", "Calderas", "Servicios", "Control", "Componentes", "Diagnóstico", "Plantas", "Calentadores"];

const Galeria = () => {
  const [active, setActive] = useState<number | null>(null);
  const [filter, setFilter] = useState<string>("Todos");

  useEffect(() => {
    document.title = "Galería · ECC SAC · Calderas, Quemadores y Proyectos";
  }, []);

  const filtered = useMemo(
    () => (filter === "Todos" ? items : items.filter((i) => i.category === filter)),
    [filter]
  );

  useEffect(() => {
    setActive(null);
  }, [filter]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (active === null) return;
      if (e.key === "Escape") setActive(null);
      if (e.key === "ArrowRight") setActive((a) => (a === null ? a : (a + 1) % filtered.length));
      if (e.key === "ArrowLeft") setActive((a) => (a === null ? a : (a - 1 + filtered.length) % filtered.length));
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [active, filtered.length]);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <HeroHeader
        theme="boiler"
        backgroundImage={heroGaleriaImg}
        eyebrow="Galería · ECC SAC"
        title={
          <>
            Trabajos reales en
            <span className="block text-primary text-glow font-light mt-2">
              calderas y quemadores
            </span>
          </>
        }
        description="Proyectos de mantenimiento, modernización e instalación de sistemas térmicos industriales. Imágenes capturadas en planta durante intervenciones reales del equipo ECC."
      />

      <main className="container mx-auto px-4 sm:px-6 lg:px-10 py-12 sm:py-16">
        {/* Filtros */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-10">
          {categories.map((c) => {
            const count = c === "Todos" ? items.length : items.filter((i) => i.category === c).length;
            const isActive = filter === c;
            return (
              <button
                key={c}
                onClick={() => setFilter(c)}
                className={`font-mono-ed text-[10px] sm:text-[11px] uppercase tracking-[0.22em] px-3 py-2 rounded-full border transition-all ${
                  isActive
                    ? "border-primary bg-primary/10 text-primary shadow-[0_0_20px_hsl(var(--primary)/0.25)]"
                    : "border-border/70 text-muted-foreground hover:text-foreground hover:border-border"
                }`}
              >
                {c} <span className="opacity-60">· {count}</span>
              </button>
            );
          })}
        </div>

        {/* Grid gallery */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((it, i) => (
            <button
              key={it.title}
              onClick={() => setActive(i)}
              className="panel-3d group relative overflow-hidden rounded-3xl border border-border/70 bg-surface/70 text-left"
            >
              <div className="overflow-hidden">
                <img
                  src={it.src}
                  alt={it.title}
                  loading="lazy"
                  className="w-full h-auto object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
                />
              </div>
              {it.real && (
                <span className="absolute top-3 left-3 font-mono-ed text-[9px] uppercase tracking-[0.25em] px-2 py-1 rounded-full bg-primary/90 text-primary-foreground">
                  Real · ECC
                </span>
              )}
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-background via-background/85 to-transparent p-5 sm:p-6">
                <div className="font-mono-ed text-[10px] uppercase tracking-[0.3em] text-primary mb-2">
                  {it.category}
                </div>
                <h3 className="text-base sm:text-lg font-semibold leading-snug mb-1">{it.title}</h3>
                <p className="text-xs sm:text-sm text-muted-foreground line-clamp-2">{it.desc}</p>
              </div>
            </button>
          ))}
        </section>

        {filtered.length === 0 && (
          <p className="text-center text-muted-foreground py-16">No hay imágenes en esta categoría aún.</p>
        )}
      </main>

      {active !== null && filtered[active] && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-background/95 backdrop-blur-md p-4 sm:p-6 animate-fade-in"
          onClick={() => setActive(null)}
        >
          <button
            className="absolute top-4 right-4 sm:top-6 sm:right-6 rounded-full border border-border/70 bg-surface/80 p-3 text-foreground hover:text-primary z-10"
            onClick={() => setActive(null)}
            aria-label="Cerrar"
          >
            <X className="size-5" />
          </button>
          <button
            className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 rounded-full border border-border/70 bg-surface/80 p-3 text-foreground hover:text-primary z-10"
            onClick={(e) => { e.stopPropagation(); setActive((a) => (a === null ? a : (a - 1 + filtered.length) % filtered.length)); }}
            aria-label="Anterior"
          >
            <ChevronLeft className="size-5" />
          </button>
          <button
            className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 rounded-full border border-border/70 bg-surface/80 p-3 text-foreground hover:text-primary z-10"
            onClick={(e) => { e.stopPropagation(); setActive((a) => (a === null ? a : (a + 1) % filtered.length)); }}
            aria-label="Siguiente"
          >
            <ChevronRight className="size-5" />
          </button>
          <figure
            className="max-w-5xl w-full max-h-[90vh] flex flex-col animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex-1 min-h-0 flex items-center justify-center">
              <img
                src={filtered[active].src}
                alt={filtered[active].title}
                className="max-h-[72vh] w-auto max-w-full object-contain rounded-2xl border border-border/70 shadow-deep"
              />
            </div>
            <figcaption className="mt-4 text-center shrink-0 px-4">
              <div className="font-mono-ed text-[10px] uppercase tracking-[0.3em] text-primary mb-1">
                {filtered[active].category} · {active + 1} / {filtered.length}
              </div>
              <div className="text-base sm:text-lg font-semibold">{filtered[active].title}</div>
              <div className="text-xs sm:text-sm text-muted-foreground max-w-2xl mx-auto mt-1">{filtered[active].desc}</div>
            </figcaption>
          </figure>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Galeria;
