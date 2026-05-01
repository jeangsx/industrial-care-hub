import { useEffect } from "react";
import HeroHeader from "@/components/site/HeroHeader";
import LogoMarquee from "@/components/site/LogoMarquee";
import Footer from "@/components/site/Footer";
import heroStack from "@/assets/hero-stack-real.png";

const Stack = () => {
  useEffect(() => {
    document.title = "Stack técnico · ECC SAC · Combustión y Control";
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <HeroHeader
        theme="burner"
        backgroundImage={heroStack}
        eyebrow="Stack técnico · ECC SAC"
        title={
          <>
            Tecnología de combustión
            <span className="block text-primary text-glow font-light mt-2">
              de clase industrial
            </span>
          </>
        }
        description="Trabajamos con marcas líderes en quemadores, controladores de combustión, sensores y sistemas de gestión de calderas para garantizar eficiencia y seguridad en sala de máquinas."
      />

      <main className="container mx-auto px-6 lg:px-10 py-16">
        <section className="grid gap-8 lg:grid-cols-3 mb-20">
          {[
            {
              title: "Controladores de combustión",
              description: "Autoflame MK8 y MK9, Honeywell y Siemens LMV para control servomotorizado y trim de O₂.",
            },
            {
              title: "Quemadores industriales",
              description: "Weishaupt, Riello, Baltur y Bentone — mantenimiento, repuestos y conversión a gas natural o dual.",
            },
            {
              title: "Calderas y aceite térmico",
              description: "Cleaver-Brooks, Continental, Distral, Babcock — repuestos, refractarios, tubos y accesorios de seguridad.",
            },
          ].map((item) => (
            <article key={item.title} className="rounded-3xl border border-border/70 bg-surface/70 p-8 panel-3d">
              <h2 className="text-2xl font-semibold mb-4">{item.title}</h2>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
            </article>
          ))}
        </section>

        <section className="rounded-[2rem] border border-border/70 bg-surface/80 p-10 mb-20 panel-3d">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] items-center">
            <div>
              <div className="font-mono-ed text-[11px] uppercase tracking-[0.3em] text-primary mb-4">
                Integración total
              </div>
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-5">
                De la combustión al monitoreo de planta
              </h2>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-6">
                Combinamos quemadores, controles Autoflame y tableros eléctricos propios para entregarte una sala de calderas confiable, monitoreable y eficiente.
              </p>
            </div>
            <div className="grid gap-4">
              <div className="rounded-3xl bg-background/70 p-6 border border-border panel-3d">
                <div className="text-4xl font-semibold text-primary">+8%</div>
                <div className="text-sm text-muted-foreground mt-2">Ahorro promedio de combustible con trim de O₂.</div>
              </div>
              <div className="rounded-3xl bg-background/70 p-6 border border-border panel-3d">
                <div className="text-4xl font-semibold text-primary">MK8 / MK9</div>
                <div className="text-sm text-muted-foreground mt-2">Especialistas certificados Autoflame.</div>
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
