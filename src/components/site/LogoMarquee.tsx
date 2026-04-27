const stack = [
  "SIEMENS S7", "ROCKWELL", "ABB 800xA", "SCHNEIDER", "EMERSON DELTAV",
  "WONDERWARE", "IGNITION", "OPC UA", "MODBUS TCP", "PROFINET",
  "ETHERNET/IP", "MQTT SPARKPLUG",
];

const LogoMarquee = () => {
  return (
    <section className="border-y border-border/60 py-10 overflow-hidden bg-surface/30">
      <div className="container mx-auto px-6 lg:px-10 mb-6">
        <p className="font-mono-ed text-[10px] uppercase tracking-[0.3em] text-muted-foreground text-center">
          // Stack tecnológico certificado
        </p>
      </div>
      <div className="relative">
        <div className="flex marquee gap-14 whitespace-nowrap">
          {[...stack, ...stack].map((c, i) => (
            <span
              key={i}
              className="font-mono-ed text-base md:text-lg tracking-[0.18em] text-muted-foreground/70 hover:text-primary transition-colors"
            >
              {c}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LogoMarquee;
