import { useEffect } from "react";
import HeroHeader from "@/components/site/HeroHeader";
import CTA from "@/components/site/CTA";
import Footer from "@/components/site/Footer";
import heroContacto from "@/assets/hero-contacto-real.jpg";

const Contacto = () => {
  useEffect(() => {
    document.title = "Contacto · ECC SAC · Servicio de Calderas";
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <HeroHeader
        theme="boiler"
        backgroundImage={heroContacto}
        eyebrow="Contacto · ECC SAC"
        title={
          <>
            Hablemos de tu
            <span className="block text-primary text-glow font-light mt-2">
              sala de calderas
            </span>
          </>
        }
        description="Coordinamos visitas técnicas, diagnósticos y propuestas de mantenimiento para calderas, quemadores y sistemas de combustión. Respuesta rápida y soporte 24/7 en emergencias."
      />

      <main className="container mx-auto px-6 lg:px-10 py-16">
        <section className="grid gap-8 lg:grid-cols-3 mb-20">
          {[
            {
              title: "Visita técnica sin costo",
              desc: "Evaluamos tu sala de calderas, revisamos eficiencia, seguridad y oportunidades de modernización.",
            },
            {
              title: "Propuesta técnica clara",
              desc: "Recibe alcance, cronograma y costos detallados para mantenimiento, repuestos o conversión de quemadores.",
            },
            {
              title: "Atención 24/7",
              desc: "Acompañamos paradas programadas y respondemos emergencias para que tu producción no se detenga.",
            },
          ].map((item) => (
            <article key={item.title} className="rounded-3xl border border-border/70 bg-surface/70 p-8 panel-3d">
              <h2 className="text-2xl font-semibold mb-4">{item.title}</h2>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
            </article>
          ))}
        </section>

        <section className="rounded-[2rem] border border-border/70 bg-surface/80 p-10 mb-20 panel-3d">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-6">
            Conecta con nosotros
          </h2>
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="rounded-3xl border border-border p-8 bg-background/70 panel-3d">
              <div className="font-mono-ed text-[11px] uppercase tracking-[0.3em] text-primary mb-4">
                Oficina
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                Lima, Perú
              </p>
              <p className="text-sm font-semibold">Horario</p>
              <p className="text-sm text-muted-foreground">Lun – Sáb · 8:00 a 18:00 · Emergencias 24/7</p>
            </div>
            <div className="rounded-3xl border border-border p-8 bg-background/70 panel-3d">
              <div className="font-mono-ed text-[11px] uppercase tracking-[0.3em] text-primary mb-4">
                Contacto directo
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                Erick Soria · Gerente de Proyecto<br />
                +51 938 154 638
              </p>
              <p className="text-sm font-semibold">Solicitud de visita técnica</p>
              <p className="text-sm text-muted-foreground">Escríbenos a ericksoria@calderas-ecc.com y coordinamos visita en menos de 48 horas.</p>
            </div>
          </div>
        </section>

        {/* Preguntas frecuentes */}
        <section className="mb-20">
          <div className="max-w-2xl mb-10">
            <span className="font-mono-ed text-[11px] uppercase tracking-[0.3em] text-primary block mb-3">
              Preguntas frecuentes
            </span>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
              Lo que nuestros clientes nos preguntan
            </h2>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            {[
              { q: "¿Cuánto demora una visita técnica?", a: "Coordinamos visitas en menos de 48 horas en Lima y zonas aledañas, según urgencia." },
              { q: "¿Atienden emergencias fuera de horario?", a: "Sí, contamos con guardia técnica 24/7 para paradas no programadas en sala de calderas." },
              { q: "¿Trabajan con todas las marcas?", a: "Sí, intervenimos quemadores Weishaupt, Riello, Baltur, Bentone y calderas Cleaver-Brooks, Continental, Distral, entre otras." },
              { q: "¿Pueden modernizar el control de mi caldera?", a: "Sí, somos especialistas Autoflame MK8/MK9 y también integramos PLC, variadores y telemetría." },
            ].map((f) => (
              <article key={f.q} className="rounded-3xl border border-border/70 bg-surface/70 p-6 panel-3d">
                <h3 className="text-base font-semibold mb-2">{f.q}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{f.a}</p>
              </article>
            ))}
          </div>
        </section>

        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default Contacto;
