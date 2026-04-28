import Navbar from "@/components/site/Navbar";
import LogoMarquee from "@/components/site/LogoMarquee";
import Services from "@/components/site/Services";
import Industries from "@/components/site/Industries";
import CTA from "@/components/site/CTA";
import Plans from "@/components/site/Plans";
import Autoflame from "@/components/site/Autoflame";
import WhyUs from "@/components/site/WhyUs";
import Footer from "@/components/site/Footer";
import { useEffect } from "react";
import boilerInterior from "@/assets/ecc-boiler-interior.jpg";
import welder from "@/assets/ecc-welder.jpg";
import tubesheet from "@/assets/ecc-tubesheet.jpg";
import flanges from "@/assets/ecc-flanges.jpg";
import weldingInside from "@/assets/ecc-welding-inside.jpg";

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
      <Navbar />
      <main className="container mx-auto px-6 lg:px-10 py-24">
        {/* HERO */}
        <section className="max-w-5xl mx-auto mb-20 text-center">
          <span className="font-mono-ed text-[11px] uppercase tracking-[0.3em] text-primary block mb-5">
            Energía Combustión Calorífica · ECC SAC
          </span>
          <h1 className="text-4xl md:text-6xl font-semibold tracking-tight mb-6 text-balance">
            Soluciones térmicas industriales
            <span className="block text-primary text-glow font-light mt-2">
              Calor confiable, producción imparable
            </span>
          </h1>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            Transformamos el calor en productividad. Especialistas en
            reparación, mantenimiento preventivo y correctivo de calderas,
            quemadores, calentadores de aceite térmico y hornos.
          </p>
        </section>

        {/* SOBRE NOSOTROS + GALERÍA */}
        <section id="sobre-nosotros" className="mb-24">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] items-stretch">
            <div className="rounded-3xl border border-border/70 bg-surface/80 p-8 md:p-12">
              <span className="font-mono-ed text-[11px] uppercase tracking-[0.3em] text-primary block mb-4">
                Sobre nosotros
              </span>
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-5">
                Tu socio en seguridad, eficiencia y confiabilidad térmica
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                En Energía Combustión Calorífica ECC SAC transformamos el calor
                en productividad. Nuestro compromiso es mantener tus procesos
                funcionando con la máxima seguridad, eficiencia y confiabilidad,
                ofreciendo soluciones a la medida respaldadas por un equipo
                técnico altamente capacitado y con amplia experiencia.
              </p>
              <div className="grid grid-cols-3 gap-4">
                {[
                  { k: "+7", v: "Años de experiencia" },
                  { k: "6", v: "Sectores industriales" },
                  { k: "24/7", v: "Atención de emergencias" },
                ].map((item) => (
                  <div key={item.v} className="rounded-2xl bg-background/60 border border-border p-4">
                    <div className="text-3xl font-semibold text-primary">{item.k}</div>
                    <div className="text-xs text-muted-foreground mt-1 font-mono-ed uppercase tracking-wider">
                      {item.v}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 grid-rows-2 gap-3">
              <img src={boilerInterior} alt="Interior de caldera industrial pirotubular" className="w-full h-full object-cover rounded-2xl border border-border row-span-2" loading="lazy" />
              <img src={tubesheet} alt="Detalle de tubos de caldera tras mantenimiento" className="w-full h-full object-cover rounded-2xl border border-border" loading="lazy" />
              <img src={welder} alt="Técnico ECC ejecutando trabajos de soldadura en caldera" className="w-full h-full object-cover rounded-2xl border border-border" loading="lazy" />
            </div>
          </div>
        </section>

        <LogoMarquee />
        <Services />
        <Autoflame />
        <Industries />
        <Plans />
        <WhyUs />

        {/* GALERÍA */}
        <section id="galeria" className="mb-8">
          <div className="flex items-end justify-between gap-6 mb-8">
            <div>
              <span className="font-mono-ed text-[11px] uppercase tracking-[0.3em] text-primary block mb-3">
                Galería
              </span>
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
                Trabajos en campo
              </h2>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[boilerInterior, welder, weldingInside, flanges, tubesheet, boilerInterior, welder, weldingInside].slice(0, 4).map((img, i) => (
              <img key={i} src={img} alt={`Trabajo de mantenimiento térmico ECC ${i + 1}`} className="w-full aspect-square object-cover rounded-2xl border border-border hover:opacity-80 transition-opacity" loading="lazy" />
            ))}
          </div>
        </section>

        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
