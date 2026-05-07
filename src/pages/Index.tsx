import Navbar from "@/components/site/Navbar";
import Services from "@/components/site/Services";
import Industries from "@/components/site/Industries";
import Clientes from "@/components/site/Clientes";
import CTA from "@/components/site/CTA";
import Plans from "@/components/site/Plans";
import Autoflame from "@/components/site/Autoflame";
import WhyUs from "@/components/site/WhyUs";
import Footer from "@/components/site/Footer";
import { useEffect } from "react";
import burnerHero from "@/assets/burner-fire-hero.jpg";
import processEngineer from "@/assets/process-engineer.jpg";
import processPipework from "@/assets/process-pipework.jpg";
import serviceDiagnostics from "@/assets/service-diagnostics.jpg";
import serviceMaintenance from "@/assets/service-maintenance.jpg";
import burnerRealFire from "@/assets/burner-real-fire.png";
import about1 from "@/assets/about-1.jpg";
import about2 from "@/assets/about-2.jpg";
import about3 from "@/assets/about-3.jpg";

const Index = () => {
  useEffect(() => {
    document.title = "ECC SAC · Soluciones Térmicas Industriales · Calderas y Quemadores";
    const meta = document.querySelector('meta[name="description"]');
    const content =
      "Energía Combustión Calorífica ECC SAC: mantenimiento, reparación y modernización de calderas, quemadores, calentadores de aceite térmico y hornos. Calor confiable, producción imparable.";
    if (meta) meta.setAttribute("content", content);
    else {
      const m = document.createElement("meta");
      m.name = "description";
      m.content = content;
      document.head.appendChild(m);
    }
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar overlayHero />
      {/* Volcanic backdrop covering hero */}
      <div className="relative isolate">
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <img
            src={burnerHero}
            alt="Quemador industrial en funcionamiento"
            className="absolute inset-0 w-full h-full object-cover object-[55%_50%] animate-hero-pan"
            loading="eager"
            decoding="async"
            // @ts-ignore
            fetchpriority="high"
            width={1600}
            height={900}
          />
          <div className="absolute inset-0 bg-background/30" />
          <div className="absolute left-[55%] top-[48%] h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,_rgba(255,184,90,0.34),transparent_45%)] blur-3xl opacity-95 animate-fire-flicker" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/15 to-background" />
        </div>

        <div className="relative z-10">
          <section className="container mx-auto px-4 sm:px-6 lg:px-10 pt-28 sm:pt-32 md:pt-40 pb-20 sm:pb-28 md:pb-32 max-w-5xl text-center">
            <span className="font-mono-ed text-[11px] uppercase tracking-[0.3em] text-primary block mb-5">
              Energía Combustión Calorífica · ECC SAC
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight mb-5 sm:mb-6 text-balance">
              Soluciones térmicas industriales
              <span className="block text-primary text-glow font-light mt-2">
                Calor confiable, producción imparable
              </span>
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto px-2">
              Transformamos el calor en productividad. Especialistas en
              reparación, mantenimiento preventivo y correctivo de calderas,
              quemadores, calentadores de aceite térmico y hornos.
            </p>
          </section>
        </div>
      </div>

      <main className="container mx-auto px-6 lg:px-10 pb-24">

        {/* SOBRE NOSOTROS + GALERÍA */}
        <section id="sobre-nosotros" className="mb-24">
          <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr] items-start">
            <div className="rounded-3xl border border-border/70 bg-surface/80 p-6 md:p-8 panel-3d">
              <span className="font-mono-ed text-[11px] uppercase tracking-[0.3em] text-primary block mb-3">
                Sobre nosotros
              </span>
              <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-4">
                Tu socio en seguridad, eficiencia y confiabilidad térmica
              </h2>
              <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                En Energía Combustión Calorífica ECC SAC transformamos el calor
                en productividad. Nuestro compromiso es mantener tus procesos
                funcionando con la máxima seguridad, eficiencia y confiabilidad,
                ofreciendo soluciones a la medida respaldadas por un equipo
                técnico altamente capacitado y con amplia experiencia.
              </p>
              <div className="grid grid-cols-3 gap-3">
                {[
                  { k: "+10", v: "Años de experiencia" },
                  { k: "6", v: "Sectores industriales" },
                  { k: "24/7", v: "Atención de emergencias" },
                ].map((item) => (
                  <div key={item.v} className="rounded-xl bg-background/60 border border-border p-3">
                    <div className="text-2xl font-semibold text-primary">{item.k}</div>
                    <div className="text-[10px] text-muted-foreground mt-1 font-mono-ed uppercase tracking-wider leading-tight">
                      {item.v}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <img src={about1} alt="Operador en sala de control monitoreando calderas" className="w-full h-full object-cover rounded-2xl border border-border row-span-2 aspect-[3/4] sm:aspect-auto" loading="lazy" />
              <img src={about2} alt="Manómetros y tuberías de caldera industrial" className="w-full h-full object-cover rounded-2xl border border-border aspect-[4/3]" loading="lazy" />
              <img src={about3} alt="Técnico realizando soldadura industrial" className="w-full h-full object-cover rounded-2xl border border-border aspect-[4/3]" loading="lazy" />
            </div>
          </div>
        </section>

        <Services />
        <Autoflame />
        <Industries />
        <Plans />
        <WhyUs />
        <Clientes />

        {/* GALERÍA */}
        <section id="galeria" className="mb-8">
          <div className="mb-8">
            <span className="font-mono-ed text-[11px] uppercase tracking-[0.3em] text-primary block mb-3">
              Galería
            </span>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
              Trabajos en campo
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[processEngineer, serviceMaintenance, burnerRealFire, processPipework].slice(0, 4).map((img, i) => (
              <img key={i} src={img} alt={`Trabajo de mantenimiento térmico ECC ${i + 1}`} className="w-full aspect-square object-cover rounded-2xl border border-border hover:opacity-80 transition-opacity" loading="lazy" />
            ))}
          </div>
          <div className="mt-8 flex justify-center">
            <a
              href="/galeria"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-primary text-primary-foreground font-mono-ed text-xs uppercase tracking-[0.2em] shadow-glow hover:opacity-90 transition-opacity"
            >
              Ver galería completa
              <span aria-hidden>↗</span>
            </a>
          </div>
        </section>

        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
