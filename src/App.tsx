import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import WhatsAppFloat from "./components/site/WhatsAppFloat";

const Capacidades = lazy(() => import("./pages/Capacidades.tsx"));
const Stack = lazy(() => import("./pages/Stack.tsx"));
const Sectores = lazy(() => import("./pages/Sectores.tsx"));
const Servicios = lazy(() => import("./pages/Servicios.tsx"));
const Contacto = lazy(() => import("./pages/Contacto.tsx"));
const CompraVenta = lazy(() => import("./pages/CompraVenta.tsx"));
const Galeria = lazy(() => import("./pages/Galeria.tsx"));
const NotFound = lazy(() => import("./pages/NotFound.tsx"));

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Suspense fallback={null}>
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
        </Suspense>
        <WhatsAppFloat />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
