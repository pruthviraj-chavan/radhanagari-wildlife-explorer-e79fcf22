
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import HotelsHomestays from "./pages/HotelsHomestays";
import BarberShops from "./pages/BarberShops";
import ComputerTraining from "./pages/ComputerTraining";
import Lodges from "./pages/Lodges";
import Supermarkets from "./pages/Supermarkets";
import FoodGuide from "./pages/FoodGuide";
import WildlifeSafari from "./pages/WildlifeSafari";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import Contact from "./pages/Contact";
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
          <Route path="/hotels-homestays" element={<HotelsHomestays />} />
          <Route path="/barber-shops" element={<BarberShops />} />
          <Route path="/computer-training" element={<ComputerTraining />} />
          <Route path="/lodges" element={<Lodges />} />
          <Route path="/supermarkets" element={<Supermarkets />} />
          <Route path="/food-guide" element={<FoodGuide />} />
          <Route path="/wildlife-safari" element={<WildlifeSafari />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/contact" element={<Contact />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
