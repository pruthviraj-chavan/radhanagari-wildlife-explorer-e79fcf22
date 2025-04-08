
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import InfoSection from "@/components/InfoSection";
import Footer from "@/components/Footer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { Search, MapPin, Clock } from "lucide-react";
import ShopCard from "@/components/ShopCard";

const Supermarkets = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedArea, setSelectedArea] = useState("all");

  const supermarkets = [
    {
      name: "Radhanagari Super Bazaar",
      image: "https://images.unsplash.com/photo-1534723452862-4c874018d66d?auto=format&fit=crop&w=800",
      price: "₹₹",
      rating: 4.5,
      description: "Large supermarket with a wide range of groceries, household items, and local products.",
      features: ["Groceries", "Fresh Produce", "Dairy Products", "Home Essentials"],
      location: "Town Center",
      area: "central",
      hours: "8 AM - 9 PM"
    },
    {
      name: "Village Mart",
      image: "https://images.unsplash.com/photo-1578916171728-46686eac8d58?auto=format&fit=crop&w=800",
      price: "₹",
      rating: 4.3,
      description: "Community grocery store offering essential items at affordable prices.",
      features: ["Basic Groceries", "Local Produce", "Affordable Prices"],
      location: "Near Bus Stand",
      area: "central",
      hours: "7 AM - 8 PM"
    },
    {
      name: "Fresh & Save Supermarket",
      image: "https://images.unsplash.com/photo-1601598851547-4302969d0614?auto=format&fit=crop&w=800",
      price: "₹₹",
      rating: 4.7,
      description: "Modern supermarket focusing on fresh produce, organic items, and quality products.",
      features: ["Organic Section", "Fresh Produce", "Imported Goods", "Home Delivery"],
      location: "Market Road",
      area: "east",
      hours: "8 AM - 10 PM"
    },
    {
      name: "Wildlife Area Convenience Store",
      image: "https://images.unsplash.com/photo-1568254183919-78a4f43a2877?auto=format&fit=crop&w=800",
      price: "₹₹",
      rating: 4.2,
      description: "Convenient store near the wildlife sanctuary entrance catering to tourists and travelers.",
      features: ["Ready-to-eat Food", "Travel Essentials", "Souvenirs", "Camping Supplies"],
      location: "Near Sanctuary Entrance",
      area: "north",
      hours: "6 AM - 9 PM"
    },
    {
      name: "Budget Bazaar",
      image: "https://images.unsplash.com/photo-1580913428023-02c695666d61?auto=format&fit=crop&w=800",
      price: "₹",
      rating: 4.1,
      description: "Discount store offering groceries and household items at competitive prices.",
      features: ["Bulk Buying Options", "Discounted Items", "Basic Essentials"],
      location: "South Colony",
      area: "south",
      hours: "9 AM - 8 PM"
    },
    {
      name: "Premium Grocery World",
      image: "https://images.unsplash.com/photo-1604719312566-8912e9667d9f?auto=format&fit=crop&w=800",
      price: "₹₹₹",
      rating: 4.8,
      description: "Upscale supermarket with premium products, imported goods, and specialty items.",
      features: ["Gourmet Products", "Imported Foods", "Premium Brands", "Specialty Items"],
      location: "New Development Area",
      area: "west",
      hours: "10 AM - 9 PM"
    },
    {
      name: "Farmers' Direct Market",
      image: "https://images.unsplash.com/photo-1488459716781-31db52582fe9?auto=format&fit=crop&w=800",
      price: "₹₹",
      rating: 4.6,
      description: "Market selling directly from local farmers with fresh produce and artisanal products.",
      features: ["Farm Fresh Produce", "Local Products", "Artisanal Foods", "Seasonal Items"],
      location: "East Road",
      area: "east",
      hours: "6 AM - 2 PM"
    },
    {
      name: "24/7 Express Mart",
      image: "https://images.unsplash.com/photo-1515706886582-54c73c5eaf41?auto=format&fit=crop&w=800",
      price: "₹₹",
      rating: 4.0,
      description: "Round-the-clock convenience store for emergency and late-night shopping needs.",
      features: ["24/7 Service", "Quick Shopping", "Essential Items", "Ready-to-eat Food"],
      location: "Highway Junction",
      area: "west",
      hours: "Open 24 Hours"
    }
  ];

  const filterSupermarkets = () => {
    return supermarkets
      .filter(store => 
        store.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
        store.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        store.features.some(feature => feature.toLowerCase().includes(searchTerm.toLowerCase()))
      )
      .filter(store => selectedArea === "all" || store.area === selectedArea);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <Hero 
          title="Supermarkets in Radhanagari"
          subtitle="Find the best grocery stores and supermarkets for your shopping needs"
          image="https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=2000"
        />
        
        <InfoSection 
          title="Find Your Local Supermarket"
          subtitle="From convenience stores to premium grocery outlets"
        >
          <div className="mb-8">
            <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-md mb-8">
              <div className="flex flex-col md:flex-row gap-4 mb-6">
                <div className="flex-grow relative">
                  <Input
                    type="text"
                    placeholder="Search supermarkets or products..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                </div>
                
                <div className="w-full md:w-60">
                  <Label className="mb-2 block text-sm">Select Area</Label>
                  <select 
                    className="w-full border border-gray-300 rounded-md h-10 px-3"
                    value={selectedArea}
                    onChange={(e) => setSelectedArea(e.target.value)}
                  >
                    <option value="all">All Areas</option>
                    <option value="central">Central</option>
                    <option value="north">North</option>
                    <option value="south">South</option>
                    <option value="east">East</option>
                    <option value="west">West</option>
                  </select>
                </div>
              </div>
            </div>
            
            <Tabs defaultValue="all" className="max-w-5xl mx-auto">
              <TabsList className="grid grid-cols-4 mb-8">
                <TabsTrigger value="all">All Stores</TabsTrigger>
                <TabsTrigger value="budget">Budget</TabsTrigger>
                <TabsTrigger value="premium">Premium</TabsTrigger>
                <TabsTrigger value="24hours">24 Hours</TabsTrigger>
              </TabsList>

              <TabsContent value="all">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filterSupermarkets().map((store, index) => (
                    <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow">
                      <img 
                        src={store.image} 
                        alt={store.name} 
                        className="w-full h-48 object-cover"
                      />
                      <div className="p-4">
                        <div className="flex justify-between items-start">
                          <h3 className="text-lg font-semibold">{store.name}</h3>
                          <div className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full font-medium">
                            {store.rating} ★
                          </div>
                        </div>
                        
                        <div className="flex items-center mt-1 text-sm text-gray-600">
                          <MapPin className="w-4 h-4 mr-1" />
                          <span>{store.location}</span>
                        </div>
                        
                        <div className="flex items-center mt-1 text-sm text-gray-600">
                          <Clock className="w-4 h-4 mr-1" />
                          <span>{store.hours}</span>
                        </div>
                        
                        <p className="mt-2 text-sm text-gray-600">{store.description}</p>
                        
                        <div className="mt-3 flex flex-wrap gap-1">
                          {store.features.map((feature, idx) => (
                            <span 
                              key={idx} 
                              className="inline-block bg-gray-100 rounded-full px-2 py-1 text-xs font-medium text-gray-700"
                            >
                              {feature}
                            </span>
                          ))}
                        </div>
                        
                        <div className="mt-4 text-sm font-medium">
                          Price Range: <span className="text-green-700">{store.price}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="budget">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filterSupermarkets().filter(store => store.price === "₹").map((store, index) => (
                    <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow">
                      <img 
                        src={store.image} 
                        alt={store.name} 
                        className="w-full h-48 object-cover"
                      />
                      <div className="p-4">
                        <div className="flex justify-between items-start">
                          <h3 className="text-lg font-semibold">{store.name}</h3>
                          <div className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full font-medium">
                            {store.rating} ★
                          </div>
                        </div>
                        
                        <div className="flex items-center mt-1 text-sm text-gray-600">
                          <MapPin className="w-4 h-4 mr-1" />
                          <span>{store.location}</span>
                        </div>
                        
                        <div className="flex items-center mt-1 text-sm text-gray-600">
                          <Clock className="w-4 h-4 mr-1" />
                          <span>{store.hours}</span>
                        </div>
                        
                        <p className="mt-2 text-sm text-gray-600">{store.description}</p>
                        
                        <div className="mt-3 flex flex-wrap gap-1">
                          {store.features.map((feature, idx) => (
                            <span 
                              key={idx} 
                              className="inline-block bg-gray-100 rounded-full px-2 py-1 text-xs font-medium text-gray-700"
                            >
                              {feature}
                            </span>
                          ))}
                        </div>
                        
                        <div className="mt-4 text-sm font-medium">
                          Price Range: <span className="text-green-700">{store.price}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="premium">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filterSupermarkets().filter(store => store.price === "₹₹₹").map((store, index) => (
                    <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow">
                      <img 
                        src={store.image} 
                        alt={store.name} 
                        className="w-full h-48 object-cover"
                      />
                      <div className="p-4">
                        <div className="flex justify-between items-start">
                          <h3 className="text-lg font-semibold">{store.name}</h3>
                          <div className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full font-medium">
                            {store.rating} ★
                          </div>
                        </div>
                        
                        <div className="flex items-center mt-1 text-sm text-gray-600">
                          <MapPin className="w-4 h-4 mr-1" />
                          <span>{store.location}</span>
                        </div>
                        
                        <div className="flex items-center mt-1 text-sm text-gray-600">
                          <Clock className="w-4 h-4 mr-1" />
                          <span>{store.hours}</span>
                        </div>
                        
                        <p className="mt-2 text-sm text-gray-600">{store.description}</p>
                        
                        <div className="mt-3 flex flex-wrap gap-1">
                          {store.features.map((feature, idx) => (
                            <span 
                              key={idx} 
                              className="inline-block bg-gray-100 rounded-full px-2 py-1 text-xs font-medium text-gray-700"
                            >
                              {feature}
                            </span>
                          ))}
                        </div>
                        
                        <div className="mt-4 text-sm font-medium">
                          Price Range: <span className="text-green-700">{store.price}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="24hours">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filterSupermarkets().filter(store => store.hours.includes("24")).map((store, index) => (
                    <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow">
                      <img 
                        src={store.image} 
                        alt={store.name} 
                        className="w-full h-48 object-cover"
                      />
                      <div className="p-4">
                        <div className="flex justify-between items-start">
                          <h3 className="text-lg font-semibold">{store.name}</h3>
                          <div className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full font-medium">
                            {store.rating} ★
                          </div>
                        </div>
                        
                        <div className="flex items-center mt-1 text-sm text-gray-600">
                          <MapPin className="w-4 h-4 mr-1" />
                          <span>{store.location}</span>
                        </div>
                        
                        <div className="flex items-center mt-1 text-sm text-gray-600">
                          <Clock className="w-4 h-4 mr-1" />
                          <span>{store.hours}</span>
                        </div>
                        
                        <p className="mt-2 text-sm text-gray-600">{store.description}</p>
                        
                        <div className="mt-3 flex flex-wrap gap-1">
                          {store.features.map((feature, idx) => (
                            <span 
                              key={idx} 
                              className="inline-block bg-gray-100 rounded-full px-2 py-1 text-xs font-medium text-gray-700"
                            >
                              {feature}
                            </span>
                          ))}
                        </div>
                        
                        <div className="mt-4 text-sm font-medium">
                          Price Range: <span className="text-green-700">{store.price}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </InfoSection>
      </main>
      
      <Footer />
    </div>
  );
};

export default Supermarkets;
