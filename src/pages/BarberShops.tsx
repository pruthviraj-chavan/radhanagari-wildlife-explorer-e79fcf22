
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
  const [priceRange, setPriceRange] = useState([100, 500]);
  const [searchTerm, setSearchTerm] = useState("");

  const barberShops = [
    {
      name: "Classic Cuts Barber",
      image: "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&w=800",
      price: "₹150 - ₹400",
      rating: 4.7,
      description: "Traditional barber shop offering quality haircuts and beard trims at affordable prices.",
      features: ["Haircuts", "Beard Trims", "Hot Towel Shaves", "Hair Coloring"],
      location: "Near Bus Stand"
    },
    {
      name: "Modern Style Salon",
      image: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=800",
      price: "₹200 - ₹500",
      rating: 4.5,
      description: "Contemporary salon with modern styling techniques and premium grooming products.",
      features: ["Premium Haircuts", "Styling", "Facials", "Hair Treatments"],
      location: "Market Area"
    },
    {
      name: "Royal Grooming",
      image: "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?auto=format&fit=crop&w=800",
      price: "₹250 - ₹450",
      rating: 4.8,
      description: "Luxury grooming experience with complimentary beverages and relaxed atmosphere.",
      features: ["VIP Haircuts", "Premium Shaves", "Facial Treatments", "Head Massage"],
      location: "Town Center"
    },
    {
      name: "Quick Cuts",
      image: "https://images.unsplash.com/photo-1622296089863-eb7fc530daa8?auto=format&fit=crop&w=800",
      price: "₹100 - ₹250",
      rating: 4.3,
      description: "Fast and efficient haircuts without compromising on quality. Perfect for busy schedules.",
      features: ["Express Haircuts", "Basic Trims", "Student Discounts"],
      location: "Near College"
    },
    {
      name: "Family Salon",
      image: "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=800",
      price: "₹150 - ₹350",
      rating: 4.6,
      description: "Family-friendly salon catering to men, women, and children with personalized service.",
      features: ["Family Packages", "Kids Haircuts", "Women's Styling", "Men's Grooming"],
      location: "Residential Area"
    },
    {
      name: "Expert Barbers",
      image: "https://images.unsplash.com/photo-1534297635766-a262cdcb8ee4?auto=format&fit=crop&w=800",
      price: "₹200 - ₹400",
      rating: 4.7,
      description: "Team of experienced barbers specializing in classic and modern hairstyles.",
      features: ["Specialized Cuts", "Beard Styling", "Hair Products", "Membership Options"],
      location: "Main Road"
    }
  ];

  // Filter shops based on search term and price range
  const filterShops = (category = "all") => {
    let minPrice = parseInt(priceRange[0]);
    let maxPrice = parseInt(priceRange[1]);
    
    return barberShops
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
        shop.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <Hero 
          title="Barber Shops in Radhanagari"
          subtitle="Find the perfect barber for your grooming needs"
          image="https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=2000"
        />
        
        <InfoSection 
          title="Find Your Perfect Barber"
          subtitle="From traditional barbers to modern styling salons"
        >
          <div className="mb-8">
            <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-md mb-8">
              <div className="flex flex-col md:flex-row gap-4 mb-6">
                <div className="flex-grow relative">
                  <Input
                    type="text"
                    placeholder="Search barber shops..."
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
                    min={100}
                    max={500}
                    step={50}
                    value={priceRange}
                    onValueChange={setPriceRange}
                    className="py-4"
                  />
                </div>
              </div>
            </div>
            
            <Tabs defaultValue="all" className="max-w-5xl mx-auto">
              <TabsList className="grid grid-cols-2 mb-8">
                <TabsTrigger value="all">All Shops</TabsTrigger>
                <TabsTrigger value="premium">Premium Shops</TabsTrigger>
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
                  {filterShops().filter(shop => shop.rating >= 4.7).map((shop, index) => (
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
