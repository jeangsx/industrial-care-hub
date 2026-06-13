import { useEffect, useState } from "react";
import HeroHeader from "@/components/site/HeroHeader";
import Services from "@/components/site/Services";
import Footer from "@/components/site/Footer";
import ContactModal from "@/components/site/ContactModal";
import heroServicios from "@/assets/hero-servicios-real.jpg";
import { Button } from "@/components/ui/button";

const Servicios = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.title = "Servicios · ECC SAC · Calderas, Quemadores y Vapor";
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <HeroHeader
        theme="burner"
        backgroundImage={heroServicios}
        eyebrow="Servicios térmicos premium · ECC SAC"
        title={
          <>
            Tus calderas y quemadores
            <span className="block text-primary text-glow font-light mt-2">
              siempre al máximo
            </span>
          </>
        }
        description="Mantenimiento, modernización y fabricación de repuestos con ritmo industrial, alta respuesta y control total de tu sala de calderas."
      />
      <main className="container mx-auto px-6 lg:px-10 py-16">
        <section className="max-w-5xl mx-auto mb-16 text-center">
        </section>

        <section className="grid gap-6 lg:grid-cols-2 mb-20">
          {[
            {
              title: "Mantenimiento Preventivo",
              subtitle: "Previene fallas y asegura tu producción",
              description:
                "Chequear, limpiar y ajustar equipos antes de que fallen para evitar paradas no planificadas y proteger tu plantilla productiva.",
            },
            {
              title: "Mantenimiento Correctivo",
              subtitle: "Respuesta rápida cuando más importa",
              description:
                "Intervenciones ágiles con diagnóstico y reparación inmediatos para devolver la operación en tiempo récord.",
            },
            {
              title: "Fabricación y Venta de Repuestos",
              subtitle: "Piezas originales con fabricación propia",
              description:
                "Repuestos críticos en stock y fabricación bajo demanda para mantener tu planta operando con calidad certificada.",
            },
            {
              title: "Actualizamos tu Caldera",
              subtitle: "Tecnología que maximiza eficiencia",
              description:
                "Renovamos sistemas de control, combustión y rendimiento para reducir consumo y elevar seguridad.",
            },
          ].map((item, index) => (
            <article
              key={item.title}
              className="group rounded-[2rem] border border-border/70 bg-surface/80 p-6 sm:p-8 panel-3d animate-fade-up"
              style={{ animationDelay: `${index * 80}ms` }}
            >
              <div className="text-primary font-mono-ed text-[11px] uppercase tracking-[0.34em] mb-4">
                {item.title}
              </div>
              <h2 className="text-2xl font-semibold mb-4 transition-colors duration-300 group-hover:text-primary">
                {item.subtitle}
              </h2>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
            </article>
          ))}
        </section>

        <section className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] items-start mb-20">
          <div className="rounded-[2rem] border border-border/70 bg-surface/80 p-10 shadow-lg shadow-transparent animate-fade-up panel-3d">
            <div className="font-mono-ed text-[11px] uppercase tracking-[0.3em] text-primary mb-4">
              Soluciones detalladas
            </div>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-5">
              Mantenimiento y soporte técnico integral
            </h2>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-8">
              Cubrimos cada etapa del servicio industrial con orden, precisión y seguimiento continuo. Nuestro objetivo es que tu planta funcione sin interrupciones.
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                "Mantenimiento integral para calderas.",
                "Conversión de quemadores para gas o dual.",
                "Mantenimiento integral de quemadores.",
                "Mantenimiento en tren de combustión.",
                "Regulación y análisis de combustión.",
                "Fabricación de tablero eléctrico nuevo o mejoramiento.",
                "Mantenimiento preventivo y correctivo de motores eléctricos.",
                "Instalación de redes de vapor y condensado.",
                "Cambio de tubos para calderas.",
                "Reparación o fabricación con material refractario en tapas, conos, tapones, etc.",
                "Forrado con aislamiento térmico.",
                "Fabricación de difusores.",
                "Mantenimiento en sistemas de ablandamiento de agua.",
                "Mantenimiento de sistema de alimentación de agua de presión constante.",
                "Ensayo de presión hidrostático de recipientes a presión.",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3 text-sm text-muted-foreground leading-relaxed">
                  <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-primary" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-border/70 bg-gradient-to-br from-background/80 via-surface/90 to-background/80 p-10 shadow-lg shadow-transparent animate-fade-up" style={{ animationDelay: "100ms" }}>
            <div className="text-primary font-mono-ed text-[11px] uppercase tracking-[0.3em] mb-4">
              ¿Por qué elegirnos?
            </div>
            <div className="space-y-6">
              {[
                {
                  title: "Control proactivo",
                  text: "Diagnóstico continuo, correctivos veloces y prevención programada en una sola operación.",
                },
                {
                  title: "Repuestos confiables",
                  text: "Fabricación bajo estándar industrial y entrega rápida para reducir tiempos de inactividad.",
                },
                {
                  title: "Tecnología aplicada",
                  text: "Modernizamos calderas y quemadores con soluciones de eficiencia y gestión térmica.",
                },
              ].map((item) => (
                <div key={item.title} className="rounded-3xl border border-border/70 bg-background/80 p-6 hover:border-primary/60 transition-colors duration-300">
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* REPOTENCIAMOS TU CALDERA */}
        <section id="repotenciamiento" className="mb-20 animate-fade-up" style={{ animationDelay: "120ms" }}>
          <div className="relative overflow-hidden rounded-[2.5rem] border border-primary/30 bg-gradient-to-br from-background via-surface/90 to-background p-10 md:p-14 shadow-[0_40px_120px_-50px_hsl(var(--primary)/0.4)]">
            {/* Decorative glow */}
            <div
              aria-hidden="true"
              className="absolute -top-20 -right-20 w-96 h-96 rounded-full opacity-30 blur-3xl pointer-events-none"
              style={{ background: "radial-gradient(circle, hsl(var(--primary)) 0%, transparent 70%)" }}
            />

            <div className="relative grid gap-10 lg:grid-cols-[1.05fr_0.95fr] items-center">
              <div>
                <div className="inline-flex items-center gap-2 font-mono-ed text-[11px] uppercase tracking-[0.3em] text-primary mb-5">
                  <span className="size-1.5 rounded-full bg-primary animate-blink" />
                  Servicio destacado
                </div>
                <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-5 text-balance">
                  Repotenciamos
                  <span className="block text-primary text-glow font-light mt-1">tu caldera</span>
                </h2>
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-8 max-w-xl">
                  Recuperamos la capacidad original de tu equipo —y la superamos. Intervenimos
                  componentes críticos, modernizamos el control de combustión y ajustamos la
                  eficiencia térmica para que tu caldera produzca más vapor con menos combustible.
                </p>

                <div className="grid grid-cols-3 gap-4 mb-8">
                  {[
                    { k: "+8%", v: "Eficiencia recuperada" },
                    { k: "−15%", v: "Consumo de combustible" },
                    { k: "+10", v: "Años de vida útil" },
                  ].map((s) => (
                    <div key={s.v} className="rounded-2xl border border-border/70 bg-background/60 p-4">
                      <div className="font-mono-ed text-2xl md:text-3xl text-primary font-semibold tabular-nums">{s.k}</div>
                      <div className="font-mono-ed text-[10px] uppercase tracking-[0.22em] text-muted-foreground mt-2 leading-snug">
                        {s.v}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-3">
                  <ContactModal
                    title="Solicitar diagnóstico de repotenciamiento"
                    trigger={
                      <Button variant="hero" size="lg">Solicitar diagnóstico</Button>
                    }
                  />
                  <a href="https://wa.me/51941388698" target="_blank" rel="noopener noreferrer">
                    <Button variant="ghostLine" size="lg">Hablar con un técnico</Button>
                  </a>
                </div>
              </div>

              <div className="grid gap-3">
                {[
                  {
                    title: "Cambio y mandrinado de tubos",
                    text: "Reemplazo de tubos de fuego o agua y sellado hermético para devolver la presión nominal.",
                  },
                  {
                    title: "Modernización del quemador",
                    text: "Conversión a gas/dual y upgrade a control Autoflame MK8/MK9 con servoposicionamiento.",
                  },
                  {
                    title: "Optimización de combustión",
                    text: "Análisis de gases, ajuste de mezcla aire–combustible y reducción de exceso de O₂.",
                  },
                  {
                    title: "Refractario y aislamiento",
                    text: "Reparación de tapas, conos y forrado térmico para minimizar pérdidas por radiación.",
                  },
                  {
                    title: "Tablero eléctrico y seguridad",
                    text: "Renovación del tren de combustión, sensores y enclavamientos certificados.",
                  },
                ].map((item, i) => (
                  <div
                    key={item.title}
                    className="group rounded-2xl border border-border/70 bg-background/60 p-5 hover:border-primary/60 hover:bg-background/80 transition-all duration-300"
                  >
                    <div className="flex items-start gap-4">
                      <div className="font-mono-ed text-[11px] uppercase tracking-[0.22em] text-primary tabular-nums mt-1">
                        0{i + 1}
                      </div>
                      <div>
                        <h3 className="text-base md:text-lg font-semibold mb-1 group-hover:text-primary transition-colors">
                          {item.title}
                        </h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">{item.text}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="mb-20 animate-fade-up" style={{ animationDelay: "140ms" }}>
          <Services />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Servicios;
