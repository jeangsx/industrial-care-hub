import { useEffect } from "react";
import HeroHeader from "@/components/site/HeroHeader";
import Services from "@/components/site/Services";
import Footer from "@/components/site/Footer";
import heroCapacidades from "@/assets/hero-capacidades-real.jpg";

const Capacidades = () => {
  useEffect(() => {
    document.title = "Capacidades · ECC SAC · Calderas y Combustión";
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <HeroHeader
        theme="boiler"
        backgroundImage={heroCapacidades}
        eyebrow="Capacidades · ECC SAC"
        title={
          <>
            Ingeniería térmica para
            <span className="block text-primary text-glow font-light mt-2">
              calderas, quemadores y hornos
            </span>
          </>
        }
        description="Diagnóstico, mantenimiento y modernización de sistemas de generación de vapor, aceite térmico y combustión industrial. Operamos con enfoque en seguridad, eficiencia y disponibilidad."
      />

      <main className="container mx-auto px-6 lg:px-10 py-16">
        <section className="grid gap-8 lg:grid-cols-3 mb-20">
          {[
            {
              title: "Calderas pirotubulares y acuotubulares",
              description:
                "Inspección de tubos, mandrinado, cambio de tubos, reparación de espejos y pruebas hidrostáticas con trazabilidad técnica.",
            },
            {
              title: "Quemadores y combustión",
              description:
                "Mantenimiento, regulación y conversión de quemadores a gas o dual con análisis de combustión para máxima eficiencia.",
            },
            {
              title: "Control y automatización",
              description:
                "Integración de tableros, controles Autoflame MK8/MK9 y sistemas de gestión de combustión y agua de alimentación.",
            },
          ].map((item) => (
            <article key={item.title} className="rounded-3xl border border-border/70 bg-surface/70 p-8 panel-3d">
              <h2 className="text-2xl font-semibold mb-4">{item.title}</h2>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
            </article>
          ))}
        </section>

        <section className="rounded-[2rem] border border-border/70 bg-surface/80 p-10 mb-20 panel-3d">
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <div className="font-mono-ed text-[11px] uppercase tracking-[0.3em] text-primary mb-4">
                Resultados medibles
              </div>
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-5">
                Eficiencia térmica y continuidad operativa
              </h2>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-6">
                Cada intervención en tu sala de calderas se entrega con métricas claras: ahorro de combustible, reducción de paradas y cumplimiento normativo.
              </p>
            </div>
            <div className="grid gap-4">
              {[
                { label: "Ahorro de combustible", value: "+8%" },
                { label: "Disponibilidad de planta", value: "99.5%" },
                { label: "Atención de emergencia", value: "24/7" },
              ].map((item) => (
                <div key={item.label} className="rounded-3xl bg-background/70 p-6 border border-border panel-3d">
                  <div className="text-4xl font-semibold text-primary">{item.value}</div>
                  <div className="text-sm text-muted-foreground mt-2">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Procesos detallados */}
        <section className="mb-20">
          <div className="max-w-2xl mb-10">
            <span className="font-mono-ed text-[11px] uppercase tracking-[0.3em] text-primary block mb-3">
              Nuestras capacidades técnicas
            </span>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
              Intervenciones especializadas en sala de calderas
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {[
              { t: "Cambio de tubos de fuego", d: "Retiro, mandrinado y soldadura certificada de tubos en calderas pirotubulares con prueba hidrostática." },
              { t: "Reparación de espejos", d: "Recuperación de espejos deformados, recargue por soldadura y verificación dimensional." },
              { t: "Refractarios y aislamientos", d: "Reparación de tapas, conos y forrado térmico de tuberías para minimizar pérdidas radiantes." },
              { t: "Conversión a gas natural", d: "Adecuación de quemadores, tren de gas y certificación segura para operación dual o GN puro." },
              { t: "Trim de O₂ y eficiencia", d: "Implementación de sondas de O₂, ajuste fino de mezcla aire-combustible y reducción de exceso de aire." },
              { t: "Tableros eléctricos", d: "Diseño, fabricación y modernización de tableros con PLC, variadores y enclavamientos de seguridad." },
              { t: "Sistemas de agua", d: "Ablandamiento, dosificación química, desgasificadores y bombas de presión constante." },
              { t: "Líneas de vapor y condensado", d: "Diseño e instalación con trampas, purgadores y aislamiento certificado." },
              { t: "Pruebas hidrostáticas", d: "Ensayos certificados de recipientes a presión con informes técnicos firmados." },
            ].map((c) => (
              <article key={c.t} className="rounded-3xl border border-border/70 bg-surface/70 p-6 panel-3d">
                <h3 className="text-lg font-semibold mb-2">{c.t}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{c.d}</p>
              </article>
            ))}
          </div>
        </section>

        <Services />
      </main>
      <Footer />
    </div>
  );
};

export default Capacidades;
