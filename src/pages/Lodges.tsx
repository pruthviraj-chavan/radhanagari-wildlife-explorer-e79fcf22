
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

const Lodges = () => {
  const [priceRange, setPriceRange] = useState([800, 5000]);
  const [searchTerm, setSearchTerm] = useState("");

  const lodges = [
    {
      name: "Forest Rest House",
      image: "https://images.unsplash.com/photo-1615880484746-a134be9a6ecf?auto=format&fit=crop&w=800",
      price: "₹1,500/night",
      rating: 4.5,
      description: "Historical government rest house inside the sanctuary with basic amenities and authentic experience.",
      features: ["Historical Building", "Forest Views", "Basic Amenities", "Quiet Location"],
      distance: "Inside Sanctuary"
    },
    {
      name: "Traveler's Lodge",
      image: "https://images.unsplash.com/photo-1587874522487-fe10e9d4eac7?auto=format&fit=crop&w=800",
      price: "₹900/night",
      rating: 4.2,
      description: "Budget-friendly accommodation with clean rooms and essential facilities for travelers.",
      features: ["Affordable", "Clean Rooms", "24-hour Reception", "Travel Assistance"],
      distance: "2 km"
    },
    {
      name: "Sanctuary Gateway Lodge",
      image: "https://images.unsplash.com/photo-1475087542963-13ab5e611954?auto=format&fit=crop&w=800",
      price: "₹2,200/night",
      rating: 4.6,
      description: "Strategically located lodge at the entrance of the sanctuary with comfortable rooms and safari booking services.",
      features: ["Safari Bookings", "Comfortable Rooms", "Local Guides", "Restaurant"],
      distance: "0.5 km"
    },
    {
      name: "Riverside Lodge",
      image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=800",
      price: "₹2,500/night",
      rating: 4.7,
      description: "Scenic accommodation along the river with outdoor seating and nature trails.",
      features: ["River Views", "Nature Trails", "Outdoor Dining", "Bird Watching"],
      distance: "3 km"
    },
    {
      name: "Village Guest House",
      image: "https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?auto=format&fit=crop&w=800",
      price: "₹800/night",
      rating: 4.3,
      description: "Authentic village experience with home-cooked meals and cultural insights from local hosts.",
      features: ["Home-cooked Meals", "Cultural Experience", "Local Hosts", "Village Location"],
      distance: "4 km"
    },
    {
      name: "Wildlife Explorer Lodge",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800",
      price: "₹3,500/night",
      rating: 4.8,
      description: "Premium lodge designed for wildlife enthusiasts with experienced guides and photography opportunities.",
      features: ["Expert Guides", "Photography Platforms", "Luxury Rooms", "Wildlife Library"],
      distance: "1 km"
    },
    {
      name: "Mountain View Lodge",
      image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=800",
      price: "₹2,800/night",
      rating: 4.6,
      description: "Peaceful lodge with panoramic mountain views and comfortable accommodation options.",
      features: ["Mountain Views", "Terrace", "Bonfire Area", "Guided Treks"],
      distance: "5 km"
    },
    {
      name: "Budget Transit Lodge",
      image: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=800",
      price: "₹850/night",
      rating: 4.0,
      description: "Simple and affordable accommodation perfect for short stays and transit travelers.",
      features: ["Budget-friendly", "Clean Bathrooms", "Luggage Storage", "Travel Desk"],
      distance: "Near Bus Stand"
    }
  ];

  const filterLodges = (type = "all") => {
    return lodges
      .filter(lodge => {
        const price = parseInt(lodge.price.replace(/[^\d]/g, ''));
        return price >= priceRange[0] && price <= priceRange[1];
      })
      .filter(lodge => 
        lodge.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        lodge.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        lodge.features.some(feature => feature.toLowerCase().includes(searchTerm.toLowerCase()))
      )
      .filter(lodge => {
        if (type === "budget") {
          const price = parseInt(lodge.price.replace(/[^\d]/g, ''));
          return price < 1500;
        } else if (type === "premium") {
          const price = parseInt(lodge.price.replace(/[^\d]/g, ''));
          return price >= 2000;
        }
        return true;
      });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <Hero 
          title="Lodges in Radhanagari"
          subtitle="Find comfortable and authentic accommodation options"
          image="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=2000"
        />
        
        <InfoSection 
          title="Find Your Ideal Lodge"
          subtitle="From budget options to premium wildlife lodges"
        >
          <div className="mb-8">
            <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-md mb-8">
              <div className="flex flex-col md:flex-row gap-4 mb-6">
                <div className="flex-grow relative">
                  <Input
                    type="text"
                    placeholder="Search lodges..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                </div>
                
                <div className="w-full md:w-60">
                  <Label className="mb-2 block text-sm">Price Range: ₹{priceRange[0]} - ₹{priceRange[1]}</Label>
                  <Slider
                    defaultValue={[800, 5000]}
                    min={800}
                    max={5000}
                    step={100}
                    value={priceRange}
                    onValueChange={setPriceRange}
                    className="py-4"
                  />
                </div>
              </div>
            </div>
            
            <Tabs defaultValue="all" className="max-w-5xl mx-auto">
              <TabsList className="grid grid-cols-3 mb-8">
                <TabsTrigger value="all">All Lodges</TabsTrigger>
                <TabsTrigger value="budget">Budget Friendly</TabsTrigger>
                <TabsTrigger value="premium">Premium Lodges</TabsTrigger>
              </TabsList>

              <TabsContent value="all">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filterLodges().map((lodge, index) => (
                    <AccommodationCard
                      key={index}
                      name={lodge.name}
                      image={lodge.image}
                      price={lodge.price}
                      rating={lodge.rating}
                      description={lodge.description}
                      features={lodge.features}
                      distance={lodge.distance}
                    />
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="budget">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filterLodges("budget").map((lodge, index) => (
                    <AccommodationCard
                      key={index}
                      name={lodge.name}
                      image={lodge.image}
                      price={lodge.price}
                      rating={lodge.rating}
                      description={lodge.description}
                      features={lodge.features}
                      distance={lodge.distance}
                    />
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="premium">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filterLodges("premium").map((lodge, index) => (
                    <AccommodationCard
                      key={index}
                      name={lodge.name}
                      image={lodge.image}
                      price={lodge.price}
                      rating={lodge.rating}
                      description={lodge.description}
                      features={lodge.features}
                      distance={lodge.distance}
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

export default Lodges;
