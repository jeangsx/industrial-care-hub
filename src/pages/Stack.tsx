import { useEffect } from "react";
import Navbar from "@/components/site/Navbar";
import LogoMarquee from "@/components/site/LogoMarquee";
import Footer from "@/components/site/Footer";

const Stack = () => {
  useEffect(() => {
    document.title = "Stack · Axon Systems";
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="container mx-auto px-6 lg:px-10 py-24">
        <section className="max-w-4xl mx-auto mb-16">
          <span className="font-mono-ed text-[11px] uppercase tracking-[0.3em] text-primary block mb-4">
            Stack tecnológico
          </span>
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight mb-6">
            Nuestra columna vertebral de automatización
          </h1>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-8">
            Tecnologías y protocolos industriales certificados para integración de plantas, comunicaciones de campo y control distribuido en tiempo real.
          </p>
        </section>

        <section className="grid gap-8 lg:grid-cols-3 mb-20">
          {[
            {
              title: "Protocolos industriales",
              description: "OPC UA, Modbus TCP, PROFINET, Ethernet/IP y MQTT para conectar sistemas legacy y modernos.",
            },
            {
              title: "Sistemas de control",
              description: "Integración con Siemens, Rockwell, ABB, Schneider y Emerson para máxima interoperabilidad.",
            },
            {
              title: "Plataformas SCADA",
              description: "Visualización y control con Ignition, Wonderware y soluciones certificadas de monitoreo remoto.",
            },
          ].map((item) => (
            <article key={item.title} className="rounded-3xl border border-border/70 bg-surface/70 p-8">
              <h2 className="text-2xl font-semibold mb-4">{item.title}</h2>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
            </article>
          ))}
        </section>

        <section className="rounded-[2rem] border border-border/70 bg-surface/80 p-10 mb-20">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] items-center">
            <div>
              <div className="font-mono-ed text-[11px] uppercase tracking-[0.3em] text-primary mb-4">
                Integración escalable
              </div>
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-5">
                Stack pensado para disponibilidad y evolución continua
              </h2>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-6">
                Elegimos tecnologías que permiten crecer sin rehacer la planta. Nuestro stack combina sistemas robustos de control con conectividad segura y datos accesibles en la nube o en sitio.
              </p>
            </div>
            <div className="grid gap-4">
              <div className="rounded-3xl bg-background/70 p-6 border border-border">
                <div className="text-4xl font-semibold text-primary">3x</div>
                <div className="text-sm text-muted-foreground mt-2">Mayor disponibilidad de datos operativos.</div>
              </div>
              <div className="rounded-3xl bg-background/70 p-6 border border-border">
                <div className="text-4xl font-semibold text-primary">99.98%</div>
                <div className="text-sm text-muted-foreground mt-2">Conectividad entre controladores y SCADA.</div>
              </div>
            </div>
          </div>
        </section>

        <LogoMarquee />
      </main>
      <Footer />
    </div>
  );
};

export default Stack;
