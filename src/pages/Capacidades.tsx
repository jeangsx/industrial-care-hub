import { useEffect } from "react";
import Navbar from "@/components/site/Navbar";
import Services from "@/components/site/Services";
import Footer from "@/components/site/Footer";

const Capacidades = () => {
  useEffect(() => {
    document.title = "Capacidades · Axon Systems";
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="container mx-auto px-6 lg:px-10 py-24">
        <section className="max-w-4xl mx-auto mb-16">
          <span className="font-mono-ed text-[11px] uppercase tracking-[0.3em] text-primary block mb-4">
            Capacidades
          </span>
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight mb-6">
            Ingeniería y automatización a escala industrial
          </h1>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-8">
            Desarrollamos arquitecturas de control con PLC, SCADA, telemetría y functional safety para plantas que requieren alta disponibilidad y tolerancia al riesgo.
          </p>
        </section>

        <section className="grid gap-8 lg:grid-cols-3 mb-20">
          {[
            {
              title: "Arquitectura de control",
              description:
                "Diseño y validación de sistemas PLC/DCS confiables con respaldo de seguridad funcional y acceso remoto seguro.",
            },
            {
              title: "Monitoreo SCADA",
              description:
                "Implementamos paneles operativos, alarmas inteligentes y visualizaciones que permiten decisiones rápidas en planta.",
            },
            {
              title: "Data y IIoT",
              description:
                "Integramos datos de campo, protocolos industriales y plataformas para análisis predictivo y operación conectada.",
            },
          ].map((item) => (
            <article key={item.title} className="rounded-3xl border border-border/70 bg-surface/70 p-8">
              <h2 className="text-2xl font-semibold mb-4">{item.title}</h2>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
            </article>
          ))}
        </section>

        <section className="rounded-[2rem] border border-border/70 bg-surface/80 p-10 mb-20">
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <div className="font-mono-ed text-[11px] uppercase tracking-[0.3em] text-primary mb-4">
                Nuestra oferta
              </div>
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-5">
                Capacity engineering con resultados medibles
              </h2>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-6">
                Centramos la mejora operativa en eficiencia, seguridad y continuidad. Cada solución se valida con métricas claras y entregables que se integran con tu operación actual.
              </p>
            </div>
            <div className="grid gap-4">
              {[
                { label: "Eficiencia", value: "+12%" },
                { label: "Disponibilidad", value: "99.9%" },
                { label: "Seguridad", value: "IEC 61511" },
              ].map((item) => (
                <div key={item.label} className="rounded-3xl bg-background/70 p-6 border border-border">
                  <div className="text-4xl font-semibold text-primary">{item.value}</div>
                  <div className="text-sm text-muted-foreground mt-2">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Services />
      </main>
      <Footer />
    </div>
  );
};

export default Capacidades;
