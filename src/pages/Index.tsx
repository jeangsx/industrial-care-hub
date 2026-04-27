import Navbar from "@/components/site/Navbar";
import Hero from "@/components/site/Hero";
import LogoMarquee from "@/components/site/LogoMarquee";
import Services from "@/components/site/Services";
import Process from "@/components/site/Process";
import Industries from "@/components/site/Industries";
import Testimonial from "@/components/site/Testimonial";
import CTA from "@/components/site/CTA";
import Footer from "@/components/site/Footer";
import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    document.title = "Forjacero · Mantenimiento de Maquinaria Industrial Premium";
    const meta = document.querySelector('meta[name="description"]');
    const content =
      "Mantenimiento predictivo, correctivo y overhaul de maquinaria industrial. 38 años de precisión, uptime 99.4%, respuesta 24/7.";
    if (meta) meta.setAttribute("content", content);
    else {
      const m = document.createElement("meta");
      m.name = "description";
      m.content = content;
      document.head.appendChild(m);
    }
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <LogoMarquee />
        <Services />
        <Process />
        <Industries />
        <Testimonial />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
