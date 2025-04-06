
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import InfoSection from "@/components/InfoSection";
import AccommodationCard from "@/components/AccommodationCard";
import Footer from "@/components/Footer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { Search } from "lucide-react";

const HotelsHomestays = () => {
  const [priceRange, setPriceRange] = useState([1000, 10000]);
  const [searchTerm, setSearchTerm] = useState("");

  const accommodations = [
    {
      type: "resort",
      name: "Dajipur Forest Resort",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800",
      price: "₹4,500/night",
      rating: 4.6,
      description: "Luxury resort located just 2 km from Safari Gate with panoramic views of the forest and mountains.",
      features: ["Free breakfast", "Swimming pool", "Wi-Fi", "Restaurant", "Wildlife tours"],
      distance: "2 km"
    },
    {
      type: "homestay",
      name: "Jungle Breeze Homestay",
      image: "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&w=800",
      price: "₹2,200/night",
      rating: 4.8,
      description: "Authentic family-run homestay offering traditional meals and guided night safari experiences.",
      features: ["Home-cooked meals", "Night safari", "Local guide", "Cultural experience"],
      distance: "1.5 km"
    },
    {
      type: "lodge",
      name: "Shahu Nature Lodge",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800",
      price: "₹3,800/night",
      rating: 4.5,
      description: "Eco-friendly lodge perfect for couples and photographers with direct forest views and private balconies.",
      features: ["Private balcony", "Eco-friendly", "Photo tours", "Bird watching"],
      distance: "3 km"
    },
    {
      type: "resort",
      name: "Ekant Resort",
      image: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=800",
      price: "₹4,193/night",
      rating: 4.6,
      description: "Modern resort with air-conditioned rooms and excellent amenities for a comfortable stay near nature.",
      features: ["Air conditioning", "Free breakfast", "Wi-Fi", "Spa services"],
      distance: "4.5 km"
    },
    {
      type: "hotel",
      name: "Hotel Jayasvi Restaurant & Lodging",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800",
      price: "₹1,234/night",
      rating: 4.0,
      description: "Budget-friendly hotel with restaurant serving local cuisine and clean, comfortable rooms.",
      features: ["Restaurant", "Budget-friendly", "City center location"],
      distance: "5 km"
    },
    {
      type: "homestay",
      name: "Vrundavan Resort Radhanagari",
      image: "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?auto=format&fit=crop&w=800",
      price: "₹2,800/night",
      rating: 4.5,
      description: "Family-friendly resort with garden views and excellent breakfast included in your stay.",
      features: ["Free breakfast", "Family rooms", "Garden", "Wi-Fi"],
      distance: "3.2 km"
    },
    {
      type: "resort",
      name: "Wild View Resort",
      image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=800",
      price: "₹5,200/night",
      rating: 4.7,
      description: "Premium resort with swimming pool and direct views of the wildlife sanctuary.",
      features: ["Swimming pool", "Free parking", "Wi-Fi", "Luxury rooms"],
      distance: "1 km"
    },
    {
      type: "hotel",
      name: "Sayaji Lodging",
      image: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=800",
      price: "₹1,901/night",
      rating: 4.6,
      description: "Well-maintained hotel with swimming pool and reliable Wi-Fi, great for business and leisure travelers.",
      features: ["Swimming pool", "Free parking", "Wi-Fi", "Meeting rooms"],
      distance: "6 km"
    }
  ];

  const filterAccommodations = (type: string) => {
    return accommodations
      .filter(acc => type === "all" || acc.type === type)
      .filter(acc => acc.name.toLowerCase().includes(searchTerm.toLowerCase()))
      .filter(acc => {
        const price = parseInt(acc.price.replace(/[^\d]/g, ''));
        return price >= priceRange[0] && price <= priceRange[1];
      });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <Hero 
          title="Hotels & Homestays in Radhanagari"
          subtitle="Find the perfect accommodation for your wildlife adventure"
          image="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=2000"
        />
        
        <InfoSection 
          title="Find Your Perfect Stay"
          subtitle="From luxury resorts to authentic homestays near the sanctuary"
        >
          <div className="mb-8">
            <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-md mb-8">
              <div className="flex flex-col md:flex-row gap-4 mb-6">
                <div className="flex-grow relative">
                  <Input
                    type="text"
                    placeholder="Search accommodations..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                </div>
                
                <div className="w-full md:w-60">
                  <Label className="mb-2 block text-sm">Price Range: ₹{priceRange[0]} - ₹{priceRange[1]}</Label>
                  <Slider
                    defaultValue={[1000, 10000]}
                    min={1000}
                    max={10000}
                    step={500}
                    value={priceRange}
                    onValueChange={setPriceRange}
                    className="py-4"
                  />
                </div>
              </div>
            </div>
            
            <Tabs defaultValue="all" className="max-w-5xl mx-auto">
              <TabsList className="grid grid-cols-5 mb-8">
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="resort">Resorts</TabsTrigger>
                <TabsTrigger value="homestay">Homestays</TabsTrigger>
                <TabsTrigger value="hotel">Hotels</TabsTrigger>
                <TabsTrigger value="lodge">Lodges</TabsTrigger>
              </TabsList>

              <TabsContent value="all">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filterAccommodations("all").map((acc, index) => (
                    <AccommodationCard
                      key={index}
                      name={acc.name}
                      image={acc.image}
                      price={acc.price}
                      rating={acc.rating}
                      description={acc.description}
                      features={acc.features}
                      distance={acc.distance}
                    />
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="resort">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filterAccommodations("resort").map((acc, index) => (
                    <AccommodationCard
                      key={index}
                      name={acc.name}
                      image={acc.image}
                      price={acc.price}
                      rating={acc.rating}
                      description={acc.description}
                      features={acc.features}
                      distance={acc.distance}
                    />
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="homestay">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filterAccommodations("homestay").map((acc, index) => (
                    <AccommodationCard
                      key={index}
                      name={acc.name}
                      image={acc.image}
                      price={acc.price}
                      rating={acc.rating}
                      description={acc.description}
                      features={acc.features}
                      distance={acc.distance}
                    />
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="hotel">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filterAccommodations("hotel").map((acc, index) => (
                    <AccommodationCard
                      key={index}
                      name={acc.name}
                      image={acc.image}
                      price={acc.price}
                      rating={acc.rating}
                      description={acc.description}
                      features={acc.features}
                      distance={acc.distance}
                    />
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="lodge">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filterAccommodations("lodge").map((acc, index) => (
                    <AccommodationCard
                      key={index}
                      name={acc.name}
                      image={acc.image}
                      price={acc.price}
                      rating={acc.rating}
                      description={acc.description}
                      features={acc.features}
                      distance={acc.distance}
                    />
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

export default HotelsHomestays;
