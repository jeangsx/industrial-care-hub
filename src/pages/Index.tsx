import Navbar from "@/components/site/Navbar";
import LogoMarquee from "@/components/site/LogoMarquee";
import Services from "@/components/site/Services";
import Process from "@/components/site/Process";
import Industries from "@/components/site/Industries";
import Testimonial from "@/components/site/Testimonial";
import CTA from "@/components/site/CTA";
import Plans from "@/components/site/Plans";
import Footer from "@/components/site/Footer";
import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    document.title = "Axon Systems · Ingeniería Industrial & Sistemas de Control";
    const meta = document.querySelector('meta[name="description"]');
    const content =
      "Ingeniería industrial, automatización, SCADA y telemetría para plantas críticas. Diseño de procesos, PLC/DCS, IIoT y functional safety bajo IEC 61511.";
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
        <section className="max-w-4xl mx-auto mb-16">
          <span className="font-mono-ed text-[11px] uppercase tracking-[0.3em] text-primary block mb-4">
            Inicio
          </span>
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight mb-6">
            Soluciones industriales integradas para plantas críticas
          </h1>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-8">
            Implementamos control y telemetría con diseño de procesos, automatización y functional safety adaptados a tu operación.
          </p>
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="rounded-3xl border border-border/70 bg-surface/80 p-8">
              <h2 className="text-xl font-semibold mb-3">Control de procesos confiable</h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Diseñamos arquitecturas de PLC/DCS con redundancia y seguridad funcional para mantener tus líneas operando sin interrupciones.
              </p>
            </div>
            <div className="rounded-3xl border border-border/70 bg-surface/80 p-8">
              <h2 className="text-xl font-semibold mb-3">Telemetría en tiempo real</h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Conectamos sensores, sistemas y plataformas SCADA para que tus equipos generen datos útiles y decisiones inmediatas.
              </p>
            </div>
          </div>
        </section>

        <section className="rounded-[2rem] border border-border/70 bg-surface/80 p-8 mb-20">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] items-center">
            <div>
              <span className="font-mono-ed text-[11px] uppercase tracking-[0.3em] text-primary block mb-4">
                Qué hacemos
              </span>
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-5">
                Integramos ingeniería, automatización y seguridad operativa
              </h2>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-6">
                Nuestro enfoque une procesos industriales con sistemas de control y una operación segura. Desde la puesta en marcha hasta el soporte durante la vida útil, trabajamos con plantas que no pueden detenerse.
              </p>
              <ul className="grid gap-3 text-sm text-foreground">
                <li className="rounded-2xl border border-border p-4 bg-background/60">Análisis de procesos y definición de alcance.</li>
                <li className="rounded-2xl border border-border p-4 bg-background/60">Diseño de arquitecturas de control y comunicación.</li>
                <li className="rounded-2xl border border-border p-4 bg-background/60">Implementación de SCADA, IIoT y monitoreo remoto.</li>
              </ul>
            </div>
            <div className="rounded-3xl border border-border/70 bg-background/70 p-8">
              <div className="font-mono-ed text-[10px] uppercase tracking-[0.3em] text-primary mb-4">
                Impacto en operación
              </div>
              <div className="grid gap-4">
                {[
                  { title: "+18%", desc: "Reducción de tiempos de ciclo" },
                  { title: "99.97%", desc: "Disponibilidad de planta" },
                  { title: "3x", desc: "Visibilidad de datos de campo" },
                ].map((item) => (
                  <div key={item.title} className="rounded-2xl bg-surface p-5">
                    <div className="text-4xl font-semibold text-primary">{item.title}</div>
                    <div className="text-sm text-muted-foreground mt-2">{item.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <LogoMarquee />
        <Services />
        <Process />
        <Industries />
        <Plans />
        <Testimonial />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
