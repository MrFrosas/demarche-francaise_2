import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Naturalisation from "./pages/Naturalisation";
import TitreSejour from "./pages/TitreSejour";
import RenouvellementTitreSejour from "./pages/RenouvellementTitreSejour";
import CasierJudiciaire from "./pages/CasierJudiciaire";
import LogementSocial from "./pages/LogementSocial";
import QuiSommesNous from "./pages/QuiSommesNous";
import NousContacter from "./pages/NousContacter";
import Articles from "./pages/Articles";
import { AdminLogin } from "./pages/admin/AdminLogin";
import { AdminDashboard } from "./pages/admin/AdminDashboard";
import { ArticleEditor } from "./pages/admin/ArticleEditor";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/naturalisation" element={<Naturalisation />} />
          <Route path="/titre-sejour" element={<TitreSejour />} />
          <Route path="/renouvellement-titre-sejour" element={<RenouvellementTitreSejour />} />
          <Route path="/casier-judiciaire" element={<CasierJudiciaire />} />
          <Route path="/logement-social" element={<LogementSocial />} />
          <Route path="/qui-sommes-nous" element={<QuiSommesNous />} />
          <Route path="/nous-contacter" element={<NousContacter />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/admin" element={<AdminLogin />} />
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          <Route path="/admin/articles/new" element={<ArticleEditor />} />
          <Route path="/admin/articles/:id" element={<ArticleEditor />} />
        </Routes>
      </BrowserRouter>
      <Toaster />
      <Sonner />
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;