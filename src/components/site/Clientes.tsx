import liguria from "@/assets/cliente-liguria.png";
import indigo from "@/assets/cliente-indigo.png";
import accalderas from "@/assets/cliente-accalderas.png";
import imbarex from "@/assets/cliente-imbarex.png";

const Clientes = () => {
  const clientes = [
    { name: "Inversiones Pesqueras Liguria S.A.C", logo: liguria },
    { name: "Imbarex", logo: imbarex },
    { name: "Indigo", logo: indigo },
    { name: "AC Calderas", logo: accalderas },
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
              className="shrink-0 w-44 md:w-52 h-24 md:h-28 flex items-center justify-center bg-white rounded-xl p-3 border border-border/60 shadow-sm hover:shadow-md transition-shadow"
              title={cliente.name}
            >
              <img
                src={cliente.logo}
                alt={cliente.name}
                className="max-h-full max-w-full object-contain"
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
