import { useEffect } from "react";
import HeroHeader from "@/components/site/HeroHeader";
import CTA from "@/components/site/CTA";
import Footer from "@/components/site/Footer";
import heroCompraVenta from "@/assets/hero-compra-venta-real.png";
import burnerRealFire from "@/assets/burner-real-fire.png";
import serviceDiagnostics from "@/assets/service-diagnostics.jpg";

const CompraVenta = () => {
  useEffect(() => {
    document.title = "Compra y Venta · ECC SAC · Equipos y Repuestos";
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <HeroHeader
        theme="boiler"
        backgroundImage={heroCompraVenta}
        eyebrow="Compra y Venta · ECC SAC"
        title={
          <>
            Equipos, repuestos y soluciones de
            <span className="block text-primary text-glow font-light mt-2">
              compra y venta industrial
            </span>
          </>
        }
        description="Adquirimos y vendemos calderas, quemadores, controles y repuestos industriales con garantía técnica, asesoría de aplicaciones y respuesta inmediata para plantas modernas."
      />

      <main className="container mx-auto px-6 lg:px-10 py-16">
        <section className="grid gap-6 mb-16 lg:grid-cols-2">
          <article className="group overflow-hidden rounded-[2rem] border border-border/70 bg-surface/80 shadow-sm transition-transform duration-300 ease-out hover:-translate-y-2 hover:scale-[1.01] hover:border-primary/50">
            <img
              src={serviceDiagnostics}
              alt="Inspección técnica de caldera industrial"
              className="h-80 w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105 animate-float-slow"
            />
            <div className="p-8">
              <div className="font-mono-ed text-[11px] uppercase tracking-[0.3em] text-primary mb-3">
                Calderas
              </div>
              <h3 className="text-2xl font-semibold mb-3">Soluciones en calderas</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Equipos con historial probado, revisados y listos para operación. Compra y venta con soporte técnico garantizado.
              </p>
            </div>
          </article>

          <article className="group overflow-hidden rounded-[2rem] border border-border/70 bg-surface/80 shadow-sm transition-transform duration-300 ease-out hover:-translate-y-2 hover:scale-[1.01] hover:border-primary/50">
            <img
              src={burnerRealFire}
              alt="Quemador industrial con flama brillante"
              className="h-80 w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105 animate-float-slow"
            />
            <div className="p-8">
              <div className="font-mono-ed text-[11px] uppercase tracking-[0.3em] text-primary mb-3">
                Quemadores
              </div>
              <h3 className="text-2xl font-semibold mb-3">Venta de quemadores</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Repuestos y equipos diseñados para procesos térmicos industriales, con asesoría de instalación y control de rendimiento.
              </p>
            </div>
          </article>
        </section>

        <section className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] mb-20">
          <div className="rounded-3xl border border-border/70 bg-surface/80 p-8 md:p-12 transition-transform duration-300 ease-out hover:-translate-y-2 hover:scale-[1.005] hover:border-primary/50 hover:shadow-glow">
            <span className="font-mono-ed text-[11px] uppercase tracking-[0.3em] text-primary block mb-4">
              Compra
            </span>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-5">
              Compramos tu equipo o repuesto industrial
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Si tienes calderas, quemadores, intercambiadores de calor o sistemas de combustión que ya no usas o quieres renovar, ofrecemos compra directa con evaluación técnica y pago competitivo.
            </p>
            <ul className="grid gap-4 text-sm text-muted-foreground">
              <li>Evaluación técnica de condiciones y vida útil.</li>
              <li>Compra de calderas, quemadores y quemadores usados.</li>
              <li>Repuestos complementarios: válvulas, controles, inyectores, mangueras.</li>
              <li>Recepción en planta o retiro con logística propia.</li>
            </ul>
          </div>

          <div className="rounded-3xl border border-border/70 bg-surface/80 p-8 md:p-12 transition-transform duration-300 ease-out hover:-translate-y-2 hover:scale-[1.005] hover:border-primary/50 hover:shadow-glow">
            <span className="font-mono-ed text-[11px] uppercase tracking-[0.3em] text-primary block mb-4">
              Venta
            </span>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-5">
              Vendemos equipos listos para operar
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Contamos con equipos nuevos y reacondicionados, siempre conforme a normas térmicas y con la documentación técnica necesaria para tu planta industrial.
            </p>
            <ul className="grid gap-4 text-sm text-muted-foreground">
              <li>Calderas pirotubulares y acuotubulares.</li>
              <li>Quemadores industriales para gas, diesel y combustibles sólidos.</li>
              <li>Controles de llama, paneles de automatización y sensores.</li>
              <li>Repuestos críticos con garantía y asesoría de instalación.</li>
            </ul>
          </div>
        </section>

        <section className="rounded-[2rem] border border-border/70 bg-surface/80 p-10 mb-20">
          <div className="grid gap-8 lg:grid-cols-2">
            <div>
              <h3 className="text-2xl font-semibold mb-4">Cómo trabajamos</h3>
              <ol className="space-y-4 text-muted-foreground text-sm leading-relaxed list-decimal list-inside">
                <li>Analizamos tu solicitud para proponer la mejor opción de compra o venta.</li>
                <li>Verificamos especificaciones, compatibilidad y disponibilidad de stock.</li>
                <li>Entregamos propuesta técnica con plazo de entrega y condiciones de servicio.</li>
                <li>Coordinamos instalación, pruebas y puesta en marcha si lo necesitas.</li>
              </ol>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-4">Por qué elegir ECC</h3>
              <ul className="space-y-4 text-muted-foreground text-sm leading-relaxed">
                <li>Experiencia en calderas y quemadores industriales con historial comprobado.</li>
                <li>Asesoría técnica personalizada y selección de equipos según tu proceso.</li>
                <li>Stock de repuestos y opciones de adquisición rápida.</li>
                <li>Soporte postventa, instalación y mantenimiento preventivo.</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="grid gap-8 lg:grid-cols-3 mb-20">
          {[
            {
              title: "Repuestos esenciales",
              desc: "Inyectores, válvulas, aros de sello, quemadores, controles y otros componentes críticos para mantener tu sistema operativo.",
            },
            {
              title: "Equipos completos",
              desc: "Calderas y quemadores nuevos o reacondicionados listos para instalación con soporte técnico especializado.",
            },
            {
              title: "Asesoría de compra",
              desc: "Te apoyamos a elegir el equipo correcto según capacidad térmica, combustible y condiciones de tu planta.",
            },
          ].map((item) => (
            <article key={item.title} className="rounded-3xl border border-border/70 bg-background/60 p-8 transition-transform duration-300 ease-out hover:-translate-y-2 hover:scale-[1.01] hover:border-primary/50 hover:shadow-glow">
              <h4 className="text-xl font-semibold mb-3">{item.title}</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
            </article>
          ))}
        </section>

        <section className="rounded-3xl border border-border/70 bg-surface/80 p-10 mb-20">
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="rounded-3xl bg-background/70 border border-border p-8">
              <h3 className="text-2xl font-semibold mb-4">Compra segura</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                Si deseas vender equipos o repuestos, hacemos la propuesta de compra más justa basada en inspección técnica y condiciones reales del activo.
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Pagos rápidos, condiciones transparentes y logística adaptada a tu planta.
              </p>
            </div>
            <div className="rounded-3xl bg-background/70 border border-border p-8">
              <h3 className="text-2xl font-semibold mb-4">Venta confiable</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                Comercializamos equipos con soporte técnico y documentación de aplicación, para que tu planta tenga respaldo durante toda su operación.
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Entregas a medida, pruebas en campo y orientación de montaje garantizada por nuestro equipo de ingenieros.
              </p>
            </div>
          </div>
        </section>

        <section className="rounded-[2rem] border border-border/70 bg-surface/80 p-10">
          <div className="grid gap-6 lg:grid-cols-3">
            {[
              { label: "Contacto inmediato", value: "+51 938 154 638" },
              { label: "Correo comercial", value: "ericksoria@calderas-ecc.com" },
              { label: "Solicitud", value: "Visita técnica y cotización en 48 horas" },
            ].map((item) => (
              <div key={item.label} className="rounded-3xl border border-border p-6 bg-background/70 transition-transform duration-300 ease-out hover:-translate-y-1 hover:scale-[1.01] hover:border-primary/50 hover:shadow-glow">
                <div className="text-[11px] uppercase tracking-[0.3em] text-primary font-mono-ed mb-3">
                  {item.label}
                </div>
                <div className="text-sm text-foreground font-semibold">{item.value}</div>
              </div>
            ))}
          </div>
        </section>

        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default CompraVenta;
