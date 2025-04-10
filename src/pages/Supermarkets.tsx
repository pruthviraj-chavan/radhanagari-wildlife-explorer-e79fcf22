
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import InfoSection from "@/components/InfoSection";
import Footer from "@/components/Footer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { Search, Store, MapPin, Clock, ShoppingBag } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Supermarkets = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const stores = [
    {
      name: "New Super Bazar",
      image: "https://images.unsplash.com/photo-1580913428735-bd3c269d6a82?auto=format&fit=crop&w=800",
      rating: 4.2,
      reviews: 14,
      description: "Grocery store with a variety of daily essentials and household items.",
      features: ["Grocery", "In-store pick-up", "Delivery"],
      location: "Radhanagari town center",
      hours: "Open ⋅ Closes 9 pm",
      phone: "092733 05309",
      category: "supermarket"
    },
    {
      name: "AARUSH BAJET BAZAR",
      image: "https://images.unsplash.com/photo-1568254183919-78a4f43a2877?auto=format&fit=crop&w=800",
      rating: 5.0,
      reviews: 1,
      description: "Supermarket with quality materials available at budget prices.",
      features: ["Supermarket", "Budget-friendly"],
      location: "Shop No 1, Radhanagari, Main, Road Main Chowk",
      hours: "Open ⋅ Closes 9 pm",
      phone: "098507 83169",
      category: "supermarket"
    },
    {
      name: "Nitin General Stores",
      image: "https://images.unsplash.com/photo-1601598851547-4302969d0614?auto=format&fit=crop&w=800",
      rating: 4.3,
      reviews: 6,
      description: "General store offering best service and daily essentials.",
      features: ["General store", "Best service"],
      location: "Radhanagari, Road",
      hours: "Open ⋅ Closes 9 pm",
      phone: "094232 86665",
      category: "general"
    },
    {
      name: "NOUMAN SUPER BAZAR",
      image: "https://images.unsplash.com/photo-1578916171728-46686eac8d58?auto=format&fit=crop&w=800",
      rating: 3.5,
      reviews: 0,
      description: "Supermarket located near Grampanchayat Market with delivery options.",
      features: ["Supermarket", "Delivery"],
      location: "Chowk, near Grampanchayat Market",
      hours: "Open ⋅ Closes 9 pm",
      phone: "096570 21133",
      category: "supermarket"
    },
    {
      name: "KALYANI TRENDING COMPANY",
      image: "https://images.unsplash.com/photo-1601599963565-b7f49d528ec9?auto=format&fit=crop&w=800",
      rating: 3.5,
      reviews: 0,
      description: "Supermarket with in-store shopping experience, opposite Bank Of India.",
      features: ["Supermarket", "In-store shopping"],
      location: "Opp, Radhanagari Rd, near by Bank Of India",
      hours: "Open ⋅ Closes 5 pm",
      phone: "094238 26147",
      category: "supermarket"
    }
  ];

  // Filter stores based on search term and category
  const filterStores = (category = "all") => {
    return stores
      .filter(store => 
        store.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
        store.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        store.features.some(feature => feature.toLowerCase().includes(searchTerm.toLowerCase()))
      )
      .filter(store => {
        if (category === "supermarket") {
          return store.category === "supermarket";
        } else if (category === "general") {
          return store.category === "general";
        }
        return true;
      });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* SEO metadata */}
        <div className="hidden">
          <h1>Supermarkets and Grocery Stores in Radhanagari | Local Shopping</h1>
          <p>Find the best supermarkets, grocery stores, and general stores in Radhanagari. Essential shopping locations with delivery options and daily household items.</p>
        </div>
      
        <Hero 
          title="Supermarkets in Radhanagari"
          subtitle="Find all your daily needs and essentials"
          image="https://images.unsplash.com/photo-1580913428735-bd3c269d6a82?auto=format&fit=crop&w=2000"
        />
        
        <InfoSection 
          title="Local Stores & Supermarkets"
          subtitle="Discover convenient shopping options in Radhanagari"
        >
          <div className="mb-8">
            <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-md mb-8">
              <div className="relative">
                <Input
                  type="text"
                  placeholder="Search by store name or products..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              </div>
            </div>
            
            <Tabs defaultValue="all" className="max-w-5xl mx-auto">
              <TabsList className="grid grid-cols-3 mb-8">
                <TabsTrigger value="all">All Stores</TabsTrigger>
                <TabsTrigger value="supermarket">Supermarkets</TabsTrigger>
                <TabsTrigger value="general">General Stores</TabsTrigger>
              </TabsList>

              <TabsContent value="all">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filterStores().map((store, index) => (
                    <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                      <div className="relative h-48">
                        <img 
                          src={store.image} 
                          alt={store.name} 
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute top-3 right-3 bg-white px-2 py-1 rounded-full text-xs font-medium flex items-center">
                          <span className="text-amber-500 mr-1">★</span>
                          {store.rating} ({store.reviews})
                        </div>
                      </div>
                      <div className="p-4">
                        <h3 className="text-lg font-bold">{store.name}</h3>
                        <p className="text-sm text-gray-700 mb-4">{store.description}</p>
                        <div className="space-y-2">
                          <div className="flex items-center text-sm">
                            <Clock className="w-4 h-4 mr-2 text-gray-500" />
                            <span>{store.hours}</span>
                          </div>
                          <div className="flex items-center text-sm">
                            <MapPin className="w-4 h-4 mr-2 text-gray-500" />
                            <span>{store.location}</span>
                          </div>
                          <div className="flex flex-wrap gap-2 mt-3">
                            {store.features.map((feature, i) => (
                              <Badge key={i} variant="outline" className="bg-gray-100">
                                {feature}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="supermarket">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filterStores("supermarket").map((store, index) => (
                    <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                      <div className="relative h-48">
                        <img 
                          src={store.image} 
                          alt={store.name} 
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute top-3 right-3 bg-white px-2 py-1 rounded-full text-xs font-medium flex items-center">
                          <span className="text-amber-500 mr-1">★</span>
                          {store.rating} ({store.reviews})
                        </div>
                      </div>
                      <div className="p-4">
                        <h3 className="text-lg font-bold">{store.name}</h3>
                        <p className="text-sm text-gray-700 mb-4">{store.description}</p>
                        <div className="space-y-2">
                          <div className="flex items-center text-sm">
                            <Clock className="w-4 h-4 mr-2 text-gray-500" />
                            <span>{store.hours}</span>
                          </div>
                          <div className="flex items-center text-sm">
                            <MapPin className="w-4 h-4 mr-2 text-gray-500" />
                            <span>{store.location}</span>
                          </div>
                          <div className="flex flex-wrap gap-2 mt-3">
                            {store.features.map((feature, i) => (
                              <Badge key={i} variant="outline" className="bg-gray-100">
                                {feature}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="general">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filterStores("general").map((store, index) => (
                    <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                      <div className="relative h-48">
                        <img 
                          src={store.image} 
                          alt={store.name} 
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute top-3 right-3 bg-white px-2 py-1 rounded-full text-xs font-medium flex items-center">
                          <span className="text-amber-500 mr-1">★</span>
                          {store.rating} ({store.reviews})
                        </div>
                      </div>
                      <div className="p-4">
                        <h3 className="text-lg font-bold">{store.name}</h3>
                        <p className="text-sm text-gray-700 mb-4">{store.description}</p>
                        <div className="space-y-2">
                          <div className="flex items-center text-sm">
                            <Clock className="w-4 h-4 mr-2 text-gray-500" />
                            <span>{store.hours}</span>
                          </div>
                          <div className="flex items-center text-sm">
                            <MapPin className="w-4 h-4 mr-2 text-gray-500" />
                            <span>{store.location}</span>
                          </div>
                          <div className="flex flex-wrap gap-2 mt-3">
                            {store.features.map((feature, i) => (
                              <Badge key={i} variant="outline" className="bg-gray-100">
                                {feature}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </InfoSection>

        {/* Local Shopping Tips Section */}
        <InfoSection 
          title="Local Shopping Tips"
          subtitle="Make the most of your shopping experience in Radhanagari"
          className="bg-gray-50"
        >
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold mb-4">Shopping for Visitors</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="bg-green-100 text-green-800 p-1 rounded-full mr-2 mt-1">
                      <ShoppingBag className="h-4 w-4" />
                    </div>
                    <p className="text-sm text-gray-700">Most stores in Radhanagari town center close by 9 PM, plan your shopping accordingly.</p>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-green-100 text-green-800 p-1 rounded-full mr-2 mt-1">
                      <ShoppingBag className="h-4 w-4" />
                    </div>
                    <p className="text-sm text-gray-700">Look for locally-made products like forest honey, spices, and handcrafts as souvenirs.</p>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-green-100 text-green-800 p-1 rounded-full mr-2 mt-1">
                      <ShoppingBag className="h-4 w-4" />
                    </div>
                    <p className="text-sm text-gray-700">Stock up on essentials if you're staying in remote homestays or wildlife areas.</p>
                  </li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold mb-4">Local Specialties</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="bg-green-100 text-green-800 p-1 rounded-full mr-2 mt-1">
                      <ShoppingBag className="h-4 w-4" />
                    </div>
                    <p className="text-sm text-gray-700">Try the local Kolhapuri Masala and spice mixes available at most general stores.</p>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-green-100 text-green-800 p-1 rounded-full mr-2 mt-1">
                      <ShoppingBag className="h-4 w-4" />
                    </div>
                    <p className="text-sm text-gray-700">Many stores offer fresh produce sourced from nearby farms - perfect for cooking at homestays.</p>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-green-100 text-green-800 p-1 rounded-full mr-2 mt-1">
                      <ShoppingBag className="h-4 w-4" />
                    </div>
                    <p className="text-sm text-gray-700">Keep cash handy as not all stores accept digital payments, especially smaller outlets.</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </InfoSection>
      </main>
      
      <Footer />
    </div>
  );
};

export default Supermarkets;
