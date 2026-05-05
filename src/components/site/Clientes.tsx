import liguria from "@/assets/cliente-liguria.png";
import indigo from "@/assets/cliente-indigo.png";
import accalderas from "@/assets/cliente-accalderas.png";
import imbarex from "@/assets/cliente-imbarex.png";

const Clientes = () => {
  const clientes = [
    { name: "Inversiones Pesqueras Liguria S.A.C", logo: liguria, fill: true },
    { name: "Imbarex", logo: imbarex, fill: false },
    { name: "Indigo", logo: indigo, fill: true },
    { name: "AC Calderas", logo: accalderas, fill: true },
  ];

  return (
    <section className="border-y border-border/60 py-10 overflow-hidden bg-surface/30">
      <div className="container mx-auto px-6 lg:px-10 mb-6">
        <p className="font-mono-ed text-[10px] uppercase tracking-[0.3em] text-muted-foreground text-center">
          // Nuestros clientes
        </p>
      </div>
      <div className="relative">
        <div className="flex marquee gap-16 items-center whitespace-nowrap">
          {[...clientes, ...clientes, ...clientes].map((cliente, i) => (
            <div
              key={i}
              className="shrink-0 w-48 md:w-56 h-24 md:h-28 flex items-center justify-center bg-white rounded-xl border border-border/60 shadow-sm hover:shadow-md transition-shadow overflow-hidden"
              title={cliente.name}
            >
              <img
                src={cliente.logo}
                alt={cliente.name}
                className={
                  cliente.fill
                    ? "w-full h-full object-cover"
                    : "max-w-full max-h-full object-contain p-2 scale-110"
                }
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clientes;
