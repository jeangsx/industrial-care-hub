import { useEffect, useState } from "react";
import VolcanicHeader from "@/components/site/VolcanicHeader";
import Services from "@/components/site/Services";
import Footer from "@/components/site/Footer";
import volcanicBg from "@/assets/volcanic-bg-servicios.jpg";
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const Servicios = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.title = "Servicios · ECC SAC · Calderas, Quemadores y Vapor";
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <VolcanicHeader
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
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Dialog open={open} onOpenChange={setOpen}>
              <DialogTrigger asChild>
                <Button variant="hero" size="xl" className="min-w-[200px]">
                  Solicitar visita técnica
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-md">
                <DialogHeader className="text-left">
                  <DialogTitle>Solicita tu visita técnica</DialogTitle>
                  <DialogDescription className="pt-2">
                    Tus datos se enviarán directo al WhatsApp <span className="font-semibold text-foreground">+51 941 388 698</span>
                  </DialogDescription>
                </DialogHeader>

                <form
                  className="mt-6 space-y-4"
                  onSubmit={(event) => {
                    event.preventDefault();
                    const form = new FormData(event.currentTarget as HTMLFormElement);
                    const nombre = form.get("nombre")?.toString().trim() ?? "";
                    const empresa = form.get("empresa")?.toString().trim() ?? "";
                    const telefono = form.get("telefono")?.toString().trim() ?? "";
                    const email = form.get("email")?.toString().trim() ?? "";
                    const mensaje = form.get("mensaje")?.toString().trim() ?? "";
                    const text = `Hola, solicito una visita técnica.%0A%0A*Nombre:* ${nombre}%0A*Empresa:* ${empresa}%0A*Teléfono:* ${telefono}%0A*Email:* ${email}%0A*Detalles:* ${mensaje}`;
                    window.open(`https://wa.me/51941388698?text=${encodeURIComponent(text)}`, "_blank");
                    setOpen(false);
                  }}
                >
                  <div className="space-y-3">
                    <div>
                      <Label htmlFor="nombre" className="text-xs">Nombre</Label>
                      <Input id="nombre" name="nombre" placeholder="Tu nombre" required className="mt-1 h-9" />
                    </div>
                    <div>
                      <Label htmlFor="empresa" className="text-xs">Empresa</Label>
                      <Input id="empresa" name="empresa" placeholder="Nombre de empresa" required className="mt-1 h-9" />
                    </div>
                    <div>
                      <Label htmlFor="telefono" className="text-xs">Teléfono</Label>
                      <Input id="telefono" name="telefono" placeholder="+51..." required className="mt-1 h-9" />
                    </div>
                    <div>
                      <Label htmlFor="email" className="text-xs">Email</Label>
                      <Input id="email" name="email" type="email" placeholder="correo@empresa.com" required className="mt-1 h-9" />
                    </div>
                    <div>
                      <Label htmlFor="mensaje" className="text-xs">Mensaje</Label>
                      <textarea
                        id="mensaje"
                        name="mensaje"
                        rows={3}
                        className="w-full h-20 rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 resize-none"
                        placeholder="Describe tu situación"
                      />
                    </div>
                  </div>

                  <div className="flex gap-2 pt-4">
                    <DialogClose asChild>
                      <Button variant="outline" type="button" className="flex-1 h-9">
                        Cancelar
                      </Button>
                    </DialogClose>
                    <Button variant="hero" type="submit" className="flex-1 h-9">
                      Enviar
                    </Button>
                  </div>
                </form>
              </DialogContent>
            </Dialog>

            <a href="https://wa.me/51941388698" target="_blank" rel="noopener noreferrer" className="inline-block">
              <Button variant="outline" size="lg" className="h-14 px-6">
                <span className="text-sm">
                  <div className="font-mono-ed text-[10px] uppercase tracking-[0.2em] text-primary mb-1">Chat directo</div>
                  <div className="font-semibold">+51 941 388 698</div>
                </span>
              </Button>
            </a>
          </div>
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
              className="group rounded-[2rem] border border-border/70 bg-surface/80 p-8 shadow-lg shadow-transparent transition-all duration-500 hover:-translate-y-1 hover:border-primary/50 hover:bg-background/80 hover:shadow-[0_30px_80px_-40px_rgba(16,185,129,0.65)] animate-fade-up"
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
          <div className="rounded-[2rem] border border-border/70 bg-surface/80 p-10 shadow-lg shadow-transparent animate-fade-up">
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

        <section className="mb-20 animate-fade-up" style={{ animationDelay: "140ms" }}>
          <Services />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Servicios;
