
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import InfoSection from "@/components/InfoSection";
import Footer from "@/components/Footer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { Search } from "lucide-react";
import ShopCard from "@/components/ShopCard";

const BarberShops = () => {
  const [priceRange, setPriceRange] = useState<[number, number]>([100, 500]);
  const [searchTerm, setSearchTerm] = useState("");

  const shops = [
    {
      name: "Royal Cuts",
      image: "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&w=800",
      price: "₹150 - ₹400",
      rating: 4.5,
      description: "Premium barber shop offering haircuts, shaves, and styling with modern techniques.",
      features: ["Haircuts", "Beard Trim", "Styling", "Hair Coloring"],
      location: "Main Road"
    },
    {
      name: "Traditional Salon",
      image: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=800",
      price: "₹100 - ₹300",
      rating: 4.2,
      description: "Classic barber shop with traditional techniques passed down through generations.",
      features: ["Classic Cuts", "Hot Towel Shave", "Head Massage", "Affordable"],
      location: "Near Bus Stand"
    },
    {
      name: "Style Hub",
      image: "https://images.unsplash.com/photo-1605497788044-5a32c7078486?auto=format&fit=crop&w=800",
      price: "₹200 - ₹500",
      rating: 4.7,
      description: "Modern salon with the latest trends and techniques for men's grooming.",
      features: ["Trending Styles", "Premium Products", "Facial", "Hair Spa"],
      location: "Town Center"
    },
    {
      name: "Village Barber",
      image: "https://images.unsplash.com/photo-1512690459411-b9245aed614b?auto=format&fit=crop&w=800",
      price: "₹80 - ₹200",
      rating: 4.0,
      description: "Simple and affordable barber shop serving the local community for decades.",
      features: ["Basic Cuts", "Quick Service", "Economical", "Experienced"],
      location: "Village Area"
    },
    {
      name: "Gentleman's Club",
      image: "https://images.unsplash.com/photo-1596728325488-23270940df01?auto=format&fit=crop&w=800",
      price: "₹300 - ₹600",
      rating: 4.9,
      description: "Luxury barber experience with complimentary beverages and personalized service.",
      features: ["Premium Service", "Beard Grooming", "Hair Treatment", "VIP Experience"],
      location: "Tourist Area"
    },
    {
      name: "Family Salon",
      image: "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?auto=format&fit=crop&w=800",
      price: "₹100 - ₹350",
      rating: 4.3,
      description: "Family-friendly salon serving men, women, and children with care.",
      features: ["Family Packages", "Kids Cuts", "Women's Services", "Group Discounts"],
      location: "Residential Area"
    }
  ];

  // Filter shops based on search term and price range
  const filterShops = (type = "all") => {
    let minPrice = priceRange[0];
    let maxPrice = priceRange[1];
    
    return shops
      .filter(shop => {
        // Extract numeric price range
        const priceString = shop.price;
        const prices = priceString.match(/\d+/g);
        if (prices && prices.length >= 2) {
          const avgPrice = (parseInt(prices[0]) + parseInt(prices[1])) / 2;
          return avgPrice >= minPrice && avgPrice <= maxPrice;
        }
        return true;
      })
      .filter(shop => 
        shop.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
        shop.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        shop.features.some(feature => feature.toLowerCase().includes(searchTerm.toLowerCase()))
      )
      .filter(shop => {
        if (type === "premium") {
          return shop.features.some(f => 
            f.toLowerCase().includes("premium") || 
            f.toLowerCase().includes("luxury") ||
            f.toLowerCase().includes("vip")
          );
        } else if (type === "affordable") {
          return shop.features.some(f => 
            f.toLowerCase().includes("affordable") || 
            f.toLowerCase().includes("economical") ||
            f.toLowerCase().includes("basic")
          );
        }
        return true;
      });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <Hero 
          title="Barber Shops in Radhanagari"
          subtitle="Find the perfect spot for your grooming needs"
          image="https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&w=2000"
        />
        
        <InfoSection 
          title="Discover Local Barber Shops"
          subtitle="From traditional cuts to modern styling"
        >
          <div className="mb-8">
            <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-md mb-8">
              <div className="flex flex-col md:flex-row gap-4 mb-6">
                <div className="flex-grow relative">
                  <Input
                    type="text"
                    placeholder="Search by name, service or location..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                </div>
                
                <div className="w-full md:w-60">
                  <Label className="mb-2 block text-sm">Price Range: ₹{priceRange[0]} - ₹{priceRange[1]}</Label>
                  <Slider
                    defaultValue={[100, 500]}
                    min={80}
                    max={600}
                    step={20}
                    value={priceRange}
                    onValueChange={(value) => setPriceRange([value[0], value[1]])}
                    className="py-4"
                  />
                </div>
              </div>
            </div>
            
            <Tabs defaultValue="all" className="max-w-5xl mx-auto">
              <TabsList className="grid grid-cols-3 mb-8">
                <TabsTrigger value="all">All Shops</TabsTrigger>
                <TabsTrigger value="premium">Premium</TabsTrigger>
                <TabsTrigger value="affordable">Affordable</TabsTrigger>
              </TabsList>

              <TabsContent value="all">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filterShops().map((shop, index) => (
                    <ShopCard
                      key={index}
                      name={shop.name}
                      image={shop.image}
                      price={shop.price}
                      rating={shop.rating}
                      description={shop.description}
                      features={shop.features}
                      location={shop.location}
                    />
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="premium">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filterShops("premium").map((shop, index) => (
                    <ShopCard
                      key={index}
                      name={shop.name}
                      image={shop.image}
                      price={shop.price}
                      rating={shop.rating}
                      description={shop.description}
                      features={shop.features}
                      location={shop.location}
                    />
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="affordable">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filterShops("affordable").map((shop, index) => (
                    <ShopCard
                      key={index}
                      name={shop.name}
                      image={shop.image}
                      price={shop.price}
                      rating={shop.rating}
                      description={shop.description}
                      features={shop.features}
                      location={shop.location}
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

export default BarberShops;
