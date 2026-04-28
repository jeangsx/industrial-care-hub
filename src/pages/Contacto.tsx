import { useEffect } from "react";
import Navbar from "@/components/site/Navbar";
import CTA from "@/components/site/CTA";
import Footer from "@/components/site/Footer";

const Contacto = () => {
  useEffect(() => {
    document.title = "Contacto · Axon Systems";
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="container mx-auto px-6 lg:px-10 py-24">
        <section className="max-w-4xl mx-auto mb-16">
          <span className="font-mono-ed text-[11px] uppercase tracking-[0.3em] text-primary block mb-4">
            Contacto
          </span>
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight mb-6">
            Hablemos del próximo proyecto de planta
          </h1>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-8">
            Nuestro equipo coordina diagnósticos, propuestas técnicas y soporte operativo para que tu planta integre control y datos sin fricción.
          </p>
        </section>

        <section className="grid gap-8 lg:grid-cols-3 mb-20">
          {[
            {
              title: "Diagnóstico sin costo",
              desc: "Evaluamos tu planta con prioridad en seguridad, continuidad y oportunidad de mejora productiva.",
            },
            {
              title: "Propuesta técnica clara",
              desc: "Entregamos alcances, cronogramas y métricas de retorno para tomar decisiones seguras.",
            },
            {
              title: "Soporte operativo",
              desc: "Acompañamos la implementación con pruebas, capacitación y transferencia de know‑how.",
            },
          ].map((item) => (
            <article key={item.title} className="rounded-3xl border border-border/70 bg-surface/70 p-8">
              <h2 className="text-2xl font-semibold mb-4">{item.title}</h2>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
            </article>
          ))}
        </section>

        <section className="rounded-[2rem] border border-border/70 bg-surface/80 p-10 mb-20">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-6">
            Conecta con nosotros
          </h2>
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="rounded-3xl border border-border p-8 bg-background/70">
              <div className="font-mono-ed text-[11px] uppercase tracking-[0.3em] text-primary mb-4">
                Oficina
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                Av. Industria 1287, Ciudad de México
              </p>
              <p className="text-sm font-semibold">Horario</p>
              <p className="text-sm text-muted-foreground">Lun – Vie · 8:00 a 18:00</p>
            </div>
            <div className="rounded-3xl border border-border p-8 bg-background/70">
              <div className="font-mono-ed text-[11px] uppercase tracking-[0.3em] text-primary mb-4">
                Contacto directo
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                ops@axonsystems.io<br />
                +52 55 5500 0000
              </p>
              <p className="text-sm font-semibold">Solicitud de diagnóstico</p>
              <p className="text-sm text-muted-foreground">Envíanos tus datos y te devolvemos un plan técnico en 5 días hábiles.</p>
            </div>
          </div>
        </section>

        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default Contacto;
