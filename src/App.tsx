import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import Capacidades from "./pages/Capacidades.tsx";
import Stack from "./pages/Stack.tsx";
import Sectores from "./pages/Sectores.tsx";
import Servicios from "./pages/Servicios.tsx";
import Contacto from "./pages/Contacto.tsx";
import CompraVenta from "./pages/CompraVenta.tsx";
import Galeria from "./pages/Galeria.tsx";
import NotFound from "./pages/NotFound.tsx";
import WhatsAppFloat from "./components/site/WhatsAppFloat";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/capacidades" element={<Capacidades />} />
          <Route path="/servicios" element={<Servicios />} />
          <Route path="/compra-venta" element={<CompraVenta />} />
          <Route path="/stack" element={<Stack />} />
          <Route path="/sectores" element={<Sectores />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/galeria" element={<Galeria />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        <WhatsAppFloat />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
