const clients = [
  "SIEMENS", "FANUC", "ABB", "MITSUBISHI", "BOSCH",
  "HAAS", "OKUMA", "DMG MORI", "KUKA", "ROCKWELL",
];

const LogoMarquee = () => {
  return (
    <section className="border-y border-border/60 py-10 overflow-hidden">
      <div className="container mx-auto px-6 lg:px-10 mb-6">
        <p className="font-mono-ed text-[10px] uppercase tracking-[0.3em] text-muted-foreground text-center">
          Certificados y autorizados por
        </p>
      </div>
      <div className="relative">
        <div className="flex marquee gap-16 whitespace-nowrap">
          {[...clients, ...clients].map((c, i) => (
            <span
              key={i}
              className="font-display text-2xl md:text-3xl tracking-[0.2em] text-muted-foreground/60 hover:text-primary transition-colors"
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
