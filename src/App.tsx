
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Index from "./pages/Index";
import HotelsHomestays from "./pages/HotelsHomestays";
import BarberShops from "./pages/BarberShops";
import ComputerTraining from "./pages/ComputerTraining";
import Supermarkets from "./pages/Supermarkets";
import FoodGuide from "./pages/FoodGuide";
import WildlifeSafari from "./pages/WildlifeSafari";
import Waterfalls from "./pages/Waterfalls";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

// Add Google Analytics script to head
if (typeof document !== 'undefined') {
  // Google Tag Manager script
  const gtmScript1 = document.createElement('script');
  gtmScript1.async = true;
  gtmScript1.src = "https://www.googletagmanager.com/gtag/js?id=G-X09GSS3KSW";
  document.head.appendChild(gtmScript1);

  const gtmScript2 = document.createElement('script');
  gtmScript2.innerHTML = `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-X09GSS3KSW');
  `;
  document.head.appendChild(gtmScript2);
}

const queryClient = new QueryClient();

const App = () => {
  return (
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
            <Route path="/supermarkets" element={<Supermarkets />} />
            <Route path="/food-guide" element={<FoodGuide />} />
            <Route path="/wildlife-safari" element={<WildlifeSafari />} />
            <Route path="/waterfalls" element={<Waterfalls />} />
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
};

export default App;
