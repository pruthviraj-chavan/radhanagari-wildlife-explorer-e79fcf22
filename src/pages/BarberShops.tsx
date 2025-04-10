
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import InfoSection from "@/components/InfoSection";
import Footer from "@/components/Footer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { Search, Scissors, Clock, MapPin } from "lucide-react";
import ShopCard from "@/components/ShopCard";
import { Card } from "@/components/ui/card";

const BarberShops = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const shops = [
    {
      name: "Prince Hair Salon",
      image: "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&w=800",
      rating: 4.4,
      reviews: 14,
      description: "Best hair salon point ❤",
      features: ["Hairdresser", "Modern styling"],
      location: "Radhanagari town center",
      hours: "Open, Closes at 9 pm",
      category: "salon"
    },
    {
      name: "Perfect Hair Style",
      image: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=800",
      rating: 3.5,
      reviews: 0,
      description: "Hair salon located near Panchyat Samiti",
      features: ["Hair salon", "Professional cuts"],
      location: "Near Panchyat Samiti",
      hours: "Open, Closes at 9 pm",
      category: "salon"
    },
    {
      name: "Navanath Hair Style",
      image: "https://images.unsplash.com/photo-1605497788044-5a32c7078486?auto=format&fit=crop&w=800",
      rating: 5.0,
      reviews: 1,
      description: "Modern hair salon with professional styling services",
      features: ["Hair salon", "Modern techniques"],
      location: "Opposite Bus Stop",
      hours: "Open now",
      category: "salon"
    },
    {
      name: "Kunal Hair Style",
      image: "https://images.unsplash.com/photo-1512690459411-b9245aed614b?auto=format&fit=crop&w=800",
      rating: 3.5,
      reviews: 0,
      description: "Traditional barber shop with classic haircut techniques",
      features: ["Barber shop", "Classic cuts"],
      location: "Radhanagari town",
      hours: "Open, Closes at 10 pm",
      category: "barber"
    }
  ];

  // Filter shops based on search term and category
  const filterShops = (category = "all") => {
    return shops
      .filter(shop => 
        shop.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
        shop.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        shop.features.some(feature => feature.toLowerCase().includes(searchTerm.toLowerCase()))
      )
      .filter(shop => {
        if (category === "salon") {
          return shop.category === "salon";
        } else if (category === "barber") {
          return shop.category === "barber";
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
          <h1>Barber Shops in Radhanagari | Hair Salons | Haircuts and Styling</h1>
          <p>Find the best barber shops and hair salons in Radhanagari Wildlife Sanctuary area. Professional haircuts, styling, and grooming services for men and women.</p>
        </div>
      
        <Hero 
          title="Barber Shops in Radhanagari"
          subtitle="Find the perfect spot for your grooming needs"
          image="https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&w=2000"
        />
        
        <InfoSection 
          title="Local Hair Salons & Barber Shops"
          subtitle="Quality grooming services in the Radhanagari area"
        >
          <div className="mb-8">
            <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-md mb-8">
              <div className="relative">
                <Input
                  type="text"
                  placeholder="Search by name, service or location..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              </div>
            </div>
            
            <Tabs defaultValue="all" className="max-w-5xl mx-auto">
              <TabsList className="grid grid-cols-3 mb-8">
                <TabsTrigger value="all">All Shops</TabsTrigger>
                <TabsTrigger value="salon">Hair Salons</TabsTrigger>
                <TabsTrigger value="barber">Barber Shops</TabsTrigger>
              </TabsList>

              <TabsContent value="all">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filterShops().map((shop, index) => (
                    <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                      <div className="relative h-48">
                        <img 
                          src={shop.image} 
                          alt={shop.name} 
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute top-3 right-3 bg-white px-2 py-1 rounded-full text-xs font-medium flex items-center">
                          <span className="text-amber-500 mr-1">★</span>
                          {shop.rating} ({shop.reviews})
                        </div>
                      </div>
                      <div className="p-4">
                        <h3 className="text-lg font-bold">{shop.name}</h3>
                        <p className="text-sm text-gray-700 mb-4">{shop.description}</p>
                        <div className="space-y-2">
                          <div className="flex items-center text-sm">
                            <Clock className="w-4 h-4 mr-2 text-gray-500" />
                            <span>{shop.hours}</span>
                          </div>
                          <div className="flex items-center text-sm">
                            <MapPin className="w-4 h-4 mr-2 text-gray-500" />
                            <span>{shop.location}</span>
                          </div>
                          <div className="flex items-center text-sm">
                            <Scissors className="w-4 h-4 mr-2 text-gray-500" />
                            <span>{shop.features.join(", ")}</span>
                          </div>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="salon">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filterShops("salon").map((shop, index) => (
                    <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                      <div className="relative h-48">
                        <img 
                          src={shop.image} 
                          alt={shop.name} 
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute top-3 right-3 bg-white px-2 py-1 rounded-full text-xs font-medium flex items-center">
                          <span className="text-amber-500 mr-1">★</span>
                          {shop.rating} ({shop.reviews})
                        </div>
                      </div>
                      <div className="p-4">
                        <h3 className="text-lg font-bold">{shop.name}</h3>
                        <p className="text-sm text-gray-700 mb-4">{shop.description}</p>
                        <div className="space-y-2">
                          <div className="flex items-center text-sm">
                            <Clock className="w-4 h-4 mr-2 text-gray-500" />
                            <span>{shop.hours}</span>
                          </div>
                          <div className="flex items-center text-sm">
                            <MapPin className="w-4 h-4 mr-2 text-gray-500" />
                            <span>{shop.location}</span>
                          </div>
                          <div className="flex items-center text-sm">
                            <Scissors className="w-4 h-4 mr-2 text-gray-500" />
                            <span>{shop.features.join(", ")}</span>
                          </div>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="barber">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filterShops("barber").map((shop, index) => (
                    <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                      <div className="relative h-48">
                        <img 
                          src={shop.image} 
                          alt={shop.name} 
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute top-3 right-3 bg-white px-2 py-1 rounded-full text-xs font-medium flex items-center">
                          <span className="text-amber-500 mr-1">★</span>
                          {shop.rating} ({shop.reviews})
                        </div>
                      </div>
                      <div className="p-4">
                        <h3 className="text-lg font-bold">{shop.name}</h3>
                        <p className="text-sm text-gray-700 mb-4">{shop.description}</p>
                        <div className="space-y-2">
                          <div className="flex items-center text-sm">
                            <Clock className="w-4 h-4 mr-2 text-gray-500" />
                            <span>{shop.hours}</span>
                          </div>
                          <div className="flex items-center text-sm">
                            <MapPin className="w-4 h-4 mr-2 text-gray-500" />
                            <span>{shop.location}</span>
                          </div>
                          <div className="flex items-center text-sm">
                            <Scissors className="w-4 h-4 mr-2 text-gray-500" />
                            <span>{shop.features.join(", ")}</span>
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

        {/* Grooming Tips Section */}
        <InfoSection 
          title="Grooming Tips for Travelers"
          subtitle="Stay fresh and well-groomed during your Radhanagari adventure"
          className="bg-gray-50"
        >
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold mb-4">Before Your Trip</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="bg-green-100 text-green-800 p-1 rounded-full mr-2 mt-1">
                      <Scissors className="h-4 w-4" />
                    </div>
                    <p className="text-sm text-gray-700">Get a haircut a few days before your trip to Radhanagari, so it's fresh but has time to settle.</p>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-green-100 text-green-800 p-1 rounded-full mr-2 mt-1">
                      <Scissors className="h-4 w-4" />
                    </div>
                    <p className="text-sm text-gray-700">Pack travel-sized grooming products appropriate for the humidity of the Western Ghats.</p>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-green-100 text-green-800 p-1 rounded-full mr-2 mt-1">
                      <Scissors className="h-4 w-4" />
                    </div>
                    <p className="text-sm text-gray-700">Consider a low-maintenance hairstyle that will hold up during outdoor activities.</p>
                  </li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold mb-4">During Your Stay</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="bg-green-100 text-green-800 p-1 rounded-full mr-2 mt-1">
                      <Scissors className="h-4 w-4" />
                    </div>
                    <p className="text-sm text-gray-700">Local barber shops offer a unique cultural experience - try a traditional Indian haircut.</p>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-green-100 text-green-800 p-1 rounded-full mr-2 mt-1">
                      <Scissors className="h-4 w-4" />
                    </div>
                    <p className="text-sm text-gray-700">Many shops offer head massage services, which are perfect after a long day of trekking.</p>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-green-100 text-green-800 p-1 rounded-full mr-2 mt-1">
                      <Scissors className="h-4 w-4" />
                    </div>
                    <p className="text-sm text-gray-700">Visit early in the day as many small-town barber shops get busy in the evenings.</p>
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

export default BarberShops;
