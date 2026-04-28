import { useEffect } from "react";
import Navbar from "@/components/site/Navbar";
import Industries from "@/components/site/Industries";
import Footer from "@/components/site/Footer";

const Sectores = () => {
  useEffect(() => {
    document.title = "Sectores · Axon Systems";
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="container mx-auto px-6 lg:px-10 py-24">
        <section className="max-w-4xl mx-auto mb-16">
          <span className="font-mono-ed text-[11px] uppercase tracking-[0.3em] text-primary block mb-4">
            Sectores
          </span>
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight mb-6">
            Soluciones hechas para tu industria
          </h1>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-8">
            Aplicamos experiencia en refinerías, plantas químicas, alimentación, energía y servicios para integrar control, seguridad y datos sin interrupciones.
          </p>
        </section>

        <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-3 mb-20">
          {[
            {
              title: "Refinerías",
              desc: "Automatización de procesos de carga, destilación y control de calidad con monitoreo continuo.",
            },
            {
              title: "Plantas químicas",
              desc: "Gestión segura de reactores, bombas y válvulas con SCADA y seguridad funcional.",
            },
            {
              title: "Energía y utilities",
              desc: "Integración de sistemas de generación, tratamiento de agua y distribución eléctrica.",
            },
            {
              title: "Alimentos y bebidas",
              desc: "Control higiénico de procesos y trazabilidad de lotes con visualización en tiempo real.",
            },
            {
              title: "Minería",
              desc: "Monitorización de flotas, carga de chancadores y automatización de sistemas críticos.",
            },
            {
              title: "Infraestructura",
              desc: "Control de servicios críticos y supervisión remota en instalaciones de gran escala.",
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
                Adaptación sectorial
              </div>
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-5">
                Respuesta específica para cada operación
              </h2>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-6">
                Diseñamos soluciones que respetan tus procesos y normativas propias de la industria. La implementación considera integridad, seguridad y continuidad de servicio.
              </p>
            </div>
            <div className="grid gap-4">
              <div className="rounded-3xl bg-background/70 p-6 border border-border">
                <div className="text-4xl font-semibold text-primary">12+</div>
                <div className="text-sm text-muted-foreground mt-2">sectores con proyectos entregados.</div>
              </div>
              <div className="rounded-3xl bg-background/70 p-6 border border-border">
                <div className="text-4xl font-semibold text-primary">4.8/5</div>
                <div className="text-sm text-muted-foreground mt-2">valoración de clientes en respuesta técnica.</div>
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
