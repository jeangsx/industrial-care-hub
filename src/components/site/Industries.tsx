import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const industries = [
  {
    name: "Minería",
    desc: "Calderas y sistemas de vapor para procesos mineros y metalúrgicos.",
    code: "MIN",
    details:
      "Atendemos salas de calderas para campamentos, procesos de lixiviación, secado y calentamiento de fluidos. Priorizamos disponibilidad, seguridad operativa y respuesta rápida en zonas de operación continua.",
    services: ["Mantenimiento preventivo", "Calibración de quemadores", "Conversión y optimización de combustión"],
  },
  {
    name: "Pesquera",
    desc: "Calderas para cocción, esterilizado y plantas de harina de pescado.",
    code: "PSC",
    details:
      "Soportamos líneas de producción con demanda alta de vapor para cocción, limpieza CIP y esterilización, cuidando continuidad, eficiencia y estándares sanitarios.",
    services: ["Inspección de calderas", "Repuestos críticos", "Atención en paradas programadas"],
  },
  {
    name: "Textil",
    desc: "Vapor para teñido, planchado y procesos de acabado textil.",
    code: "TXT",
    details:
      "Estabilizamos la generación de vapor para teñido, acabado, secado y planchado, reduciendo variaciones de presión que afectan la calidad del producto.",
    services: ["Ajuste de combustión", "Cambio de tubos", "Modernización de control"],
  },
  {
    name: "Agro-industrial",
    desc: "Calor de proceso para alimentos, lácteos y derivados agrícolas.",
    code: "AGR",
    details:
      "Integramos mantenimiento y soporte térmico para plantas de alimentos, lácteos, secado y extracción, con foco en trazabilidad y operación confiable.",
    services: ["Planes anuales", "Diagnóstico energético", "Soporte 24/7"],
  },
  {
    name: "Hotelera",
    desc: "Sistemas de agua caliente sanitaria, lavandería y calefacción.",
    code: "HTL",
    details:
      "Mantenemos sistemas de agua caliente sanitaria, lavandería y calefacción para hoteles, clínicas y edificios con demanda constante de confort térmico.",
    services: ["Mantenimiento de calderas", "Control de seguridad", "Automatización de sala térmica"],
  },
  {
    name: "Comercial",
    desc: "Soluciones térmicas para hospitales, lavanderías y centros comerciales.",
    code: "COM",
    details:
      "Brindamos soporte a instalaciones comerciales e institucionales donde el vapor o agua caliente debe estar disponible con bajo riesgo de interrupción.",
    services: ["Emergencias técnicas", "Revisión de quemadores", "Mejora de eficiencia"],
  },
];

const Industries = () => {
  const [selectedIndustry, setSelectedIndustry] = useState<(typeof industries)[number] | null>(null);

  return (
    <section id="sectores" className="py-28 md:py-40">
      <div className="container mx-auto px-6 lg:px-10">
        <div className="max-w-3xl mb-20">
          <span className="font-mono-ed text-[11px] text-primary tracking-[0.3em] block mb-6">
            — 03 / SECTORES ATENDIDOS
          </span>
          <h2 className="text-5xl md:text-6xl leading-[1.05] tracking-tight font-light">
            Calor confiable,
            <br />
            producción <span className="text-primary text-glow font-normal">imparable</span>.
          </h2>
        </div>

        <ul className="border-t border-border">
          {industries.map((i, idx) => (
            <li
              key={i.name}
              className="group border-b border-border py-7 grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 items-baseline hover:bg-surface/50 transition-colors px-2 md:px-6 cursor-pointer"
              role="button"
              tabIndex={0}
              onClick={() => setSelectedIndustry(i)}
              onKeyDown={(event) => {
                if (event.key === "Enter" || event.key === " ") {
                  event.preventDefault();
                  setSelectedIndustry(i);
                }
              }}
            >
              <span className="md:col-span-1 font-mono-ed text-xs text-primary tracking-[0.3em]">
                {String(idx + 1).padStart(2, "0")} · {i.code}
              </span>
              <h3 className="md:col-span-4 text-3xl md:text-4xl font-light group-hover:text-primary transition-colors">
                {i.name}
              </h3>
              <p className="md:col-span-6 md:col-start-7 text-muted-foreground leading-relaxed font-mono-ed text-sm">
                {i.desc}
              </p>
              <span className="hidden md:inline-block md:col-span-1 text-primary translate-x-0 group-hover:translate-x-2 transition-transform">
                →
              </span>
            </li>
          ))}
        </ul>
      </div>

      <Dialog open={Boolean(selectedIndustry)} onOpenChange={(open) => !open && setSelectedIndustry(null)}>
        <DialogContent className="max-w-2xl border-border bg-background">
          {selectedIndustry && (
            <>
              <DialogHeader className="text-left">
                <span className="font-mono-ed text-[11px] uppercase tracking-[0.3em] text-primary">
                  {selectedIndustry.code} · Sector atendido
                </span>
                <DialogTitle className="text-3xl font-light tracking-tight">
                  {selectedIndustry.name}
                </DialogTitle>
                <DialogDescription className="text-base leading-relaxed">
                  {selectedIndustry.desc}
                </DialogDescription>
              </DialogHeader>

              <div className="mt-4 space-y-6">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {selectedIndustry.details}
                </p>
                <div>
                  <h4 className="font-mono-ed text-[11px] uppercase tracking-[0.3em] text-primary mb-3">
                    Servicios frecuentes
                  </h4>
                  <ul className="grid gap-3 sm:grid-cols-3">
                    {selectedIndustry.services.map((service) => (
                      <li
                        key={service}
                        className="rounded-md border border-border bg-surface/60 px-4 py-3 text-sm text-foreground"
                      >
                        {service}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Industries;
