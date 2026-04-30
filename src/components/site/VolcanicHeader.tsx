import { ReactNode } from "react";
import Navbar from "@/components/site/Navbar";
import defaultVolcanicBg from "@/assets/volcanic-bg.jpg";

interface VolcanicHeaderProps {
  eyebrow: string;
  title: ReactNode;
  description: string;
  children?: ReactNode;
  backgroundImage?: string;
}

const VolcanicHeader = ({ eyebrow, title, description, children, backgroundImage }: VolcanicHeaderProps) => {
  return (
    <>
      <Navbar />
      <div className="relative isolate">
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <img
            src={backgroundImage ?? defaultVolcanicBg}
            alt="Fondo de roca volcánica con vetas de lava incandescente"
            className="w-full h-full object-cover"
            width={1920}
            height={1080}
          />
          <div className="absolute inset-0 bg-background/40" />
          <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-b from-transparent to-background" />
          <div className="absolute inset-0 gradient-radial opacity-50 mix-blend-screen" />
        </div>

        <div className="relative z-10">
          <section className="container mx-auto px-6 lg:px-10 pt-20 pb-28 max-w-5xl text-center">
            <span className="font-mono-ed text-[11px] uppercase tracking-[0.3em] text-primary block mb-5">
              {eyebrow}
            </span>
            <h1 className="text-4xl md:text-6xl font-semibold tracking-tight mb-6 text-balance">
              {title}
            </h1>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              {description}
            </p>
            {children && <div className="mt-10">{children}</div>}
          </section>
        </div>
      </div>
    </>
  );
};

export default VolcanicHeader;
