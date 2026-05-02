import { ReactNode } from "react";
import Navbar from "@/components/site/Navbar";
import defaultHeaderBg from "@/assets/hero-capacidades-real.jpg";

interface HeroHeaderProps {
  eyebrow: string;
  title: ReactNode;
  description: string;
  children?: ReactNode;
  backgroundImage?: string;
  theme?: "boiler" | "burner";
}

const HeroHeader = ({ eyebrow, title, description, children, backgroundImage, theme = "boiler" }: HeroHeaderProps) => {
  return (
    <>
      <Navbar overlayHero />
      <div className="relative isolate">
        <div className={`absolute inset-0 z-0 overflow-hidden pointer-events-none hero-theme-${theme}`}>
          <img
            src={backgroundImage ?? defaultHeaderBg}
            alt="Fondo industrial de caldera y quemador con efecto dinámico"
            className="w-full h-full object-cover object-[50%_45%] brightness-[1.05] contrast-[1.08] saturate-[1.1] animate-hero-pan"
            width={1600}
            height={900}
            loading="eager"
            decoding="async"
            // @ts-ignore
            fetchpriority="high"
          />
          <div className="absolute inset-0 bg-background/20" />
          <div className="absolute inset-0 hero-heat animate-heat-haze mix-blend-screen opacity-55" />
          <div className="absolute left-[55%] top-[40%] h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full hero-accent blur-3xl opacity-85 animate-fire-flicker pointer-events-none" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.08),transparent_30%)] opacity-50 pointer-events-none" />
          <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-b from-transparent to-background" />
          <div className="absolute inset-0 gradient-radial opacity-45 mix-blend-screen" />
        </div>

        <div className="relative z-10">
          <section className="container mx-auto px-4 sm:px-6 lg:px-10 pt-32 sm:pt-40 md:pt-48 pb-20 sm:pb-28 max-w-5xl text-center">
            <span className="font-mono-ed text-[11px] uppercase tracking-[0.3em] text-primary block mb-5">
              {eyebrow}
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight mb-5 sm:mb-6 text-balance">
              {title}
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto px-2">
              {description}
            </p>
            {children && <div className="mt-10">{children}</div>}
          </section>
        </div>
      </div>
    </>
  );
};

export default HeroHeader;
