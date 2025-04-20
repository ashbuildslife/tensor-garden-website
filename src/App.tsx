
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BaseLayout from "./components/layout/BaseLayout";
import { AdminPanel } from "./components/cms/AdminPanel";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { ChatAssistant } from "@/components/ai/ChatAssistant";
import { UsabilityFeatures } from "@/components/features/UsabilityFeatures";

// Pages
import HomePage from "./pages/HomePage";
import ServicePage from "./pages/ServicePage";
import ProductPage from "./pages/ProductPage";
import CaseStudiesPage from "./pages/CaseStudiesPage";
import AboutPage from "./pages/AboutPage";
import BlogPage from "./pages/BlogPage";
import ContactPage from "./pages/ContactPage";
import NotFoundPage from "./pages/NotFoundPage";
import IndustriesPage from "./pages/IndustriesPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <BaseLayout>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/services" element={<ServicePage />} />
              <Route path="/products" element={<ProductPage />} />
              <Route path="/industries" element={<IndustriesPage />} />
              <Route path="/case-studies" element={<CaseStudiesPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/blog" element={<BlogPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/industries/healthcare" element={<NotFoundPage />} />
              <Route path="/industries/finance" element={<NotFoundPage />} />
              <Route path="/industries/manufacturing" element={<NotFoundPage />} />
              <Route path="/industries/retail" element={<NotFoundPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
            <ChatAssistant />
            <UsabilityFeatures />
            <AdminPanel />
          </BaseLayout>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
