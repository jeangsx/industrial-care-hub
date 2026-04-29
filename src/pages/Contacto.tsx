import { useEffect } from "react";
import VolcanicHeader from "@/components/site/VolcanicHeader";
import CTA from "@/components/site/CTA";
import Footer from "@/components/site/Footer";

const Contacto = () => {
  useEffect(() => {
    document.title = "Contacto · ECC SAC · Servicio de Calderas";
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <VolcanicHeader
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
                Lima, Perú
              </p>
              <p className="text-sm font-semibold">Horario</p>
              <p className="text-sm text-muted-foreground">Lun – Sáb · 8:00 a 18:00 · Emergencias 24/7</p>
            </div>
            <div className="rounded-3xl border border-border p-8 bg-background/70">
              <div className="font-mono-ed text-[11px] uppercase tracking-[0.3em] text-primary mb-4">
                Contacto directo
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                Erick Soria · Gerente Técnico<br />
                +51 941 388 698
              </p>
              <p className="text-sm font-semibold">Solicitud de visita técnica</p>
              <p className="text-sm text-muted-foreground">Escríbenos por WhatsApp y coordinamos visita en menos de 48 horas.</p>
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
