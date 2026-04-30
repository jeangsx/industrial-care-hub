import { useEffect } from "react";
import HeroHeader from "@/components/site/HeroHeader";
import Industries from "@/components/site/Industries";
import Footer from "@/components/site/Footer";
import heroSectores from "@/assets/hero-sectores-real.png";

const Sectores = () => {
  useEffect(() => {
    document.title = "Sectores · ECC SAC · Soluciones Térmicas";
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <HeroHeader
        theme="boiler"
        backgroundImage={heroSectores}
        eyebrow="Sectores · ECC SAC"
        title={
          <>
            Calor confiable para
            <span className="block text-primary text-glow font-light mt-2">
              cada industria
            </span>
          </>
        }
        description="Damos servicio a salas de calderas y sistemas de combustión en minería, pesca, textil, agroindustria, hotelería y comercio. Cada sector exige una respuesta técnica diferente — y la tenemos."
      />

      <main className="container mx-auto px-6 lg:px-10 py-16">
        <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-3 mb-20">
          {[
            {
              title: "Minería",
              desc: "Calderas y calentadores de aceite térmico para procesos de lixiviación, secado y campamentos en altura.",
            },
            {
              title: "Pesca e industria conservera",
              desc: "Generación de vapor para cocción, esterilización y limpieza CIP con altos estándares sanitarios.",
            },
            {
              title: "Textil",
              desc: "Vapor estable para teñido, planchado y acabado, con eficiencia energética y bajo nivel de emisiones.",
            },
            {
              title: "Agroindustria",
              desc: "Calor de proceso para extracción, secado y producción alimentaria con trazabilidad y continuidad.",
            },
            {
              title: "Hotelería y salud",
              desc: "Calderas para agua caliente sanitaria, lavandería y climatización con mantenimiento programado.",
            },
            {
              title: "Comercial e industrial",
              desc: "Servicio integral a plantas comerciales, lavanderías industriales y centros logísticos con vapor.",
            },
          ].map((item) => (
            <article key={item.title} className="rounded-3xl border border-border/70 bg-surface/70 p-8">
              <h2 className="text-2xl font-semibold mb-3">{item.title}</h2>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
            </article>
          ))}
        </section>

        <section className="rounded-[2rem] border border-border/70 bg-surface/80 p-10 mb-20">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] items-center">
            <div>
              <div className="font-mono-ed text-[11px] uppercase tracking-[0.3em] text-primary mb-4">
                Especialización por sector
              </div>
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-5">
                Servicio térmico que entiende tu proceso
              </h2>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-6">
                Adaptamos planes de mantenimiento, repuestos y modernizaciones a la criticidad de cada industria, respetando normativas locales y de operación segura.
              </p>
            </div>
            <div className="grid gap-4">
              <div className="rounded-3xl bg-background/70 p-6 border border-border">
                <div className="text-4xl font-semibold text-primary">6+</div>
                <div className="text-sm text-muted-foreground mt-2">Sectores industriales atendidos en Perú.</div>
              </div>
              <div className="rounded-3xl bg-background/70 p-6 border border-border">
                <div className="text-4xl font-semibold text-primary">24/7</div>
                <div className="text-sm text-muted-foreground mt-2">Atención de emergencias en sala de calderas.</div>
              </div>
            </div>
          </div>
        </section>

        <Industries />
      </main>
      <Footer />
    </div>
  );
};

export default Sectores;
