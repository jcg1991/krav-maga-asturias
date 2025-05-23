
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Informate from "./pages/Informate";
import KravMaga from "./pages/KravMaga";
import Clases from "./pages/Clases";
import Areas from "./pages/Areas";
import Tecnicas from "./pages/Tecnicas";
import Contacto from "./pages/Contacto";
import Enlaces from "./pages/Enlaces";
import Calendario from "./pages/Calendario";
import Cursos from "./pages/Cursos";
import CursosEspeciales from "./pages/CursosEspeciales";
import CursoAutoproteccion from "./pages/CursoAutoproteccion";
import CursoInmueblesUrbano from "./pages/CursoInmueblesUrbano";
import ContentPage from "./pages/ContentPage";
import CoursesContentPage from "./pages/CoursesContentPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/informate" element={<Informate />} />
          <Route path="/krav-maga" element={<KravMaga />} />
          <Route path="/clases" element={<Clases />} />
          <Route path="/areas" element={<Areas />} />
          <Route path="/tecnicas" element={<Tecnicas />} />
          <Route path="/calendario" element={<Calendario />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/enlaces" element={<Enlaces />} />
          <Route path="/cursos" element={<Cursos />} />
          <Route path="/cursos-especiales" element={<CursosEspeciales />} />
          <Route path="/curso-autoproteccion" element={<CursoAutoproteccion />} />
          <Route path="/curso-inmuebles-urbano" element={<CursoInmueblesUrbano />} />
          <Route path="/page/:pageNumber" element={<ContentPage />} />
          <Route path="/cursos/page/:pageNumber" element={<CoursesContentPage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
