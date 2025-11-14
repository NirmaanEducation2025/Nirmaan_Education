import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Hiring from "./components/Hiring"; // ✅ Import your Hiring page

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          {/* ✅ Main home page */}
          <Route path="/" element={<Index />} />

          {/* ✅ Hiring page */}
          <Route path="/hiring" element={<Hiring />} />

          {/* ✅ Redirect Educator & Partner to Hiring page */}
          <Route path="/educator" element={<Navigate to="/hiring" replace />} />
          <Route path="/partner" element={<Navigate to="/hiring" replace />} />

          {/* ✅ Catch-all route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
