import { useEffect } from "react";
import Navbar from "@/components/site/Navbar";
import Process from "@/components/site/Process";
import Testimonial from "@/components/site/Testimonial";
import Footer from "@/components/site/Footer";

const Caso = () => {
  useEffect(() => {
    document.title = "Caso · Axon Systems";
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="container mx-auto px-6 lg:px-10 py-24">
        <section className="max-w-4xl mx-auto mb-16">
          <span className="font-mono-ed text-[11px] uppercase tracking-[0.3em] text-primary block mb-4">
            Caso de éxito
          </span>
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight mb-6">
            Desde diagnóstico hasta entrega llave en mano
          </h1>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-8">
            Un flujo de trabajo claro para proyectos industriales: definición de requerimientos, diseño de arquitectura, pruebas y puesta en marcha.
          </p>
        </section>

        <section className="grid gap-8 md:grid-cols-3 mb-20">
          {[
            {
              title: "Análisis de planta",
              desc: "Inspección de sistemas, evaluación de riesgos y definición de alcance con datos operativos reales.",
            },
            {
              title: "Diseño detallado",
              desc: "Arquitectura de control alineada con protocolos y buenas prácticas de seguridad industrial.",
            },
            {
              title: "Puesta en marcha",
              desc: "Integración, pruebas de aceptación y entrenamiento operativo para una transferencia segura.",
            },
          ].map((item) => (
            <article key={item.title} className="rounded-3xl border border-border/70 bg-surface/70 p-8 panel-3d">
              <h2 className="text-2xl font-semibold mb-4">{item.title}</h2>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
            </article>
          ))}
        </section>

        <section className="rounded-[2rem] border border-border/70 bg-surface/80 p-10 mb-20 panel-3d">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] items-center">
            <div>
              <div className="font-mono-ed text-[11px] uppercase tracking-[0.3em] text-primary mb-4">
                Resultados reales
              </div>
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-5">
                Casos con reducción de riesgo y mejora operativa
              </h2>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-6">
                Documentamos cada fase para que la mejora sea medible. Nuestro enfoque trae mayor estabilidad, menor intervención manual y mayor cumplimiento regulatorio.
              </p>
            </div>
            <div className="grid gap-4">
              {[
                { label: "Reducción de alarmas", value: "35%" },
                { label: "Menor retención de inventario", value: "18%" },
                { label: "Ciclos de puesta en marcha", value: "-22%" },
              ].map((item) => (
                <div key={item.label} className="rounded-3xl bg-background/70 p-6 border border-border panel-3d">
                  <div className="text-4xl font-semibold text-primary">{item.value}</div>
                  <div className="text-sm text-muted-foreground mt-2">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Process />

        <div className="mt-20">
          <Testimonial />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Caso;
