
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import InfoSection from "@/components/InfoSection";
import AccommodationCard from "@/components/AccommodationCard";
import Footer from "@/components/Footer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { Search } from "lucide-react";

const HotelsHomestays = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const resorts = [
    {
      name: "Ekant",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800",
      rating: 4.6,
      description: "Located near Dajipur Wildlife Sanctuary (13.6 km away), offering air-conditioned rooms and free breakfast.",
      features: ["Free breakfast", "Air-conditioned", "Wi-Fi"],
      distance: "13.6 km"
    },
    {
      name: "Rainforest Farm & Resort",
      image: "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&w=800",
      rating: 4.2,
      description: "Resort hotel located near Dajipur Wildlife Sanctuary with free breakfast and Wi-Fi.",
      features: ["Free breakfast", "Wi-Fi"],
      distance: "19.6 km"
    },
    {
      name: "Annabella Resort",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800",
      rating: 4.1,
      description: "Farmstay near Dajipur Wildlife Sanctuary with pool, free parking, breakfast, and Wi-Fi.",
      features: ["Pool", "Free parking", "Free breakfast", "Free Wi-Fi"],
      distance: "23.5 km"
    },
    {
      name: "Heritage Resort",
      image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=800",
      rating: 4.4,
      description: "Family-friendly resort with pool, free parking, breakfast, and air-conditioning.",
      features: ["Pool", "Free parking", "Free breakfast", "Air-conditioned"],
      distance: "15.8 km"
    },
    {
      name: "Wild View Resort",
      image: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=800",
      rating: 4.7,
      description: "Premium resort with direct views of the wildlife sanctuary, pool and free breakfast.",
      features: ["Pool", "Free parking", "Free breakfast", "Free Wi-Fi"],
      distance: "11.5 km"
    },
    {
      name: "Vrundavan Resort Radhanagari",
      image: "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?auto=format&fit=crop&w=800",
      rating: 4.5,
      description: "Resort hotel with free breakfast and Wi-Fi near Dajipur Wildlife Sanctuary.",
      features: ["Free breakfast", "Wi-Fi"],
      distance: "12.4 km"
    },
    {
      name: "Ranmala Resort",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800",
      rating: 4.8,
      description: "Resort with free parking, breakfast, Wi-Fi, and airport shuttle service.",
      features: ["Free parking", "Breakfast", "Wi-Fi", "Airport shuttle"],
      distance: "13.1 km"
    },
    {
      name: "Kshitij Waterfront Resort",
      image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=800",
      rating: 4.5,
      description: "Resort with free parking, breakfast, and Wi-Fi near Dajipur Wildlife Sanctuary.",
      features: ["Free parking", "Free breakfast", "Free Wi-Fi"],
      distance: "11.3 km"
    },
    {
      name: "NISARRG FARM RESORT",
      image: "https://images.unsplash.com/photo-1606046604972-77cc76aee944?auto=format&fit=crop&w=800",
      rating: 4.9,
      description: "Resort with pool, free parking, Wi-Fi, and breakfast near Dajipur Wildlife Sanctuary.",
      features: ["Pool", "Free parking", "Free Wi-Fi", "Breakfast"],
      distance: "23.9 km"
    },
    {
      name: "Stonarc Resort Kolhapur",
      image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=800",
      rating: 4.5,
      description: "Unassuming resort with dining and a pool, offering free breakfast and Wi-Fi.",
      features: ["Pool", "Free parking", "Free breakfast", "Free Wi-Fi", "Air-conditioned"],
      distance: "18.4 km"
    },
    {
      name: "Paradise Jungle Resort",
      image: "https://images.unsplash.com/photo-1586375300773-8384e3e4916f?auto=format&fit=crop&w=800",
      rating: 4.5,
      description: "Home Stay located near Dajipur Wildlife Sanctuary, perfect for nature lovers.",
      features: ["Nature views", "Peaceful location", "Family-friendly"],
      distance: "3.9 km"
    }
  ];

  const hotels = [
    {
      name: "Hotel Amrapali Resort",
      image: "https://images.unsplash.com/photo-1606046604972-77cc76aee944?auto=format&fit=crop&w=800",
      rating: 3.5,
      description: "Resort hotel with free parking, Wi-Fi, air-conditioning, and breakfast.",
      features: ["Free parking", "Free Wi-Fi", "Air-conditioned", "Breakfast"],
      distance: "14.5 km"
    },
    {
      name: "Shubham Lodge",
      image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=800",
      rating: 3.1,
      description: "Hotel located near Dajipur Wildlife Sanctuary, offering affordable rooms.",
      features: ["Budget-friendly", "Central location"],
      distance: "21.2 km"
    },
    {
      name: "OM Lodging",
      image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=800",
      rating: 4.8,
      description: "Hotel with free parking, air-conditioning, breakfast, and Wi-Fi.",
      features: ["Free parking", "Air-conditioned", "Breakfast", "Wi-Fi"],
      distance: "21.3 km"
    },
    {
      name: "Mai's Resort",
      image: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=800",
      rating: 4.4,
      description: "Resort hotel near Dajipur Wildlife Sanctuary, offering comfortable stays.",
      features: ["Comfortable rooms", "Friendly staff"],
      distance: "12.8 km"
    },
    {
      name: "HOTEL SHREE EXECUTIVE",
      image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=800",
      rating: 4.2,
      description: "Hotel with free parking, breakfast, Wi-Fi, and air-conditioning.",
      features: ["Free parking", "Free breakfast", "Free Wi-Fi", "Air-conditioned"],
      distance: "21.3 km"
    },
    {
      name: "Hotel New RajVaibhav and Lodge",
      image: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=800",
      rating: 3.6,
      description: "Hotel located near Dajipur Wildlife Sanctuary, offering standard accommodations.",
      features: ["Central location", "Standard rooms"],
      distance: "22.6 km"
    },
    {
      name: "Hotel Kokan Taj",
      image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=800",
      rating: 4.8,
      description: "Hotel located near Dajipur Wildlife Sanctuary, highly rated by guests.",
      features: ["Top-rated", "Quality service"],
      distance: "4.7 km"
    },
    {
      name: "Hotel Shree Ganesh",
      image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=800",
      rating: 5.0,
      description: "Hotel located in Shivaji Peth Market Chowk, perfect for market access.",
      features: ["Market location", "Shopping nearby"],
      distance: "Central location"
    },
    {
      name: "Swaroop Lodging",
      image: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=800",
      rating: 4.2,
      description: "Hotel located near Radhanagri Bus depot, convenient for transportation.",
      features: ["Near bus depot", "Convenient location"],
      distance: "Central location"
    },
    {
      name: "Hotel Lakshvedi",
      image: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=800",
      rating: 4.5,
      description: "Hotel located near Kasarwadi Road, offering quality accommodations.",
      features: ["Quality rooms", "Good location"],
      distance: "Kasarwadi Road area"
    },
    {
      name: "Hotel Ambemohar",
      image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=800",
      rating: 3.5,
      description: "Hotel located near Main Road, offering easy access to local attractions.",
      features: ["Main Road location", "Local access"],
      distance: "Main Road area"
    }
  ];

  const homestays = [
    {
      name: "Tejam Nisarg Homestay",
      image: "https://images.unsplash.com/photo-1597211833712-5e41faa202ea?auto=format&fit=crop&w=800",
      rating: 4.9,
      description: "Homestay in Olavan location with great food experiences and authentic local hospitality.",
      features: ["Local food", "Authentic experience", "Homely atmosphere"],
      distance: "Olavan location"
    },
    {
      name: "Dajipur Relax Homestay",
      image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800",
      rating: 5.0,
      description: "Homestay on Devgad-Nipani Hwy location with immersive nature experiences.",
      features: ["Nature experiences", "Highway location", "Peaceful surroundings"],
      distance: "Devgad-Nipani Hwy"
    },
    {
      name: "Paradise Jungle Resort",
      image: "https://images.unsplash.com/photo-1586375300773-8384e3e4916f?auto=format&fit=crop&w=800",
      rating: 4.5,
      description: "Home Stay offering very peaceful environment for family stays and getaways.",
      features: ["Family-friendly", "Peaceful environment", "Nature surroundings"],
      distance: "Jungle area"
    },
    {
      name: "Wild Dajipur Home Stay",
      image: "https://images.unsplash.com/photo-1585647347483-22b66260dfff?auto=format&fit=crop&w=800",
      rating: 4.9,
      description: "Guest house on Devgad-Nipani Hwy location with excellent dining options.",
      features: ["Dining options", "Highway location", "Guest house"],
      distance: "Devgad-Nipani Hwy"
    },
    {
      name: "Dajipur Rushikesh Home Stay",
      image: "https://images.unsplash.com/photo-1516214104703-d870798883c5?auto=format&fit=crop&w=800",
      rating: 4.4,
      description: "Home Stay in a beautiful location surrounded by nature and tranquility.",
      features: ["Beautiful location", "Nature surroundings", "Tranquil atmosphere"],
      distance: "Nature area"
    },
    {
      name: "Niralay Resort",
      image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=800",
      rating: 4.4,
      description: "Villa open 24 hours with spectacular sunrise views and natural beauty.",
      features: ["24-hour access", "Sunrise views", "Villa accommodation"],
      distance: "Scenic location"
    },
    {
      name: "Sawant Homestay",
      image: "https://images.unsplash.com/photo-1585647347483-22b66260dfff?auto=format&fit=crop&w=800",
      rating: 4.2,
      description: "Home Stay that's perfect for vacations and relaxation in a homely setting.",
      features: ["Vacation-friendly", "Relaxation", "Homely setting"],
      distance: "Local area"
    },
    {
      name: "Nandanvan Home Stay",
      image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800",
      rating: 5.0,
      description: "Home Stay with website available for more details and direct bookings.",
      features: ["Online booking", "Detailed information", "Professional service"],
      distance: "Local area"
    },
    {
      name: "Arhaan Home Stay",
      image: "https://images.unsplash.com/photo-1597211833712-5e41faa202ea?auto=format&fit=crop&w=800",
      rating: 5.0,
      description: "Home Stay with nice rooms, big parking spaces, and excellent food offerings.",
      features: ["Nice rooms", "Big parking", "Good food"],
      distance: "Accessible location"
    },
    {
      name: "Birambole Home Stay",
      image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800",
      rating: 4.7,
      description: "Home Stay offering good accommodation and memorable dinner experiences.",
      features: ["Good stay", "Excellent dinner", "Memorable experience"],
      distance: "Local area"
    },
    {
      name: "VISHRANTI Home Stay",
      image: "https://images.unsplash.com/photo-1585647347483-22b66260dfff?auto=format&fit=crop&w=800",
      rating: 4.6,
      description: "Home Stay with good quality food, beautiful ambiance, and sunrise/sunset views.",
      features: ["Quality food", "Beautiful ambiance", "Scenic views"],
      distance: "Scenic location"
    },
    {
      name: "Sunrise Farm Resort",
      image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800",
      rating: 4.9,
      description: "Home Stay offering superb experience with amazing views of surrounding landscape.",
      features: ["Superb experience", "Amazing views", "Farm setting"],
      distance: "Farm location"
    },
    {
      name: "Bison Home Stay",
      image: "https://images.unsplash.com/photo-1597211833712-5e41faa202ea?auto=format&fit=crop&w=800",
      rating: 5.0,
      description: "Home Stay with clean rooms and beautiful nature surroundings for a rejuvenating stay.",
      features: ["Clean rooms", "Beautiful nature", "Rejuvenating atmosphere"],
      distance: "Nature area"
    }
  ];

  const accommodations = [...resorts, ...hotels, ...homestays];

  const filterAccommodations = (type: string) => {
    let filteredList = [];
    
    switch(type) {
      case "all":
        filteredList = accommodations;
        break;
      case "resort":
        filteredList = resorts;
        break;
      case "homestay":
        filteredList = homestays;
        break;
      case "hotel":
        filteredList = hotels;
        break;
      default:
        filteredList = accommodations;
    }
    
    return filteredList.filter(acc => 
      acc.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      acc.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      acc.features.some(feature => feature.toLowerCase().includes(searchTerm.toLowerCase()))
    );
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* SEO hidden metadata */}
        <div className="hidden">
          <h1>Hotels and Homestays near Radhanagari Wildlife Sanctuary | Where to Stay</h1>
          <p>Find the best hotels, resorts, and homestays near Radhanagari Wildlife Sanctuary. Accommodations for all budgets with amenities, ratings, and location details.</p>
        </div>
      
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
              </div>
            </div>
            
            <Tabs defaultValue="all" className="max-w-5xl mx-auto">
              <TabsList className="grid grid-cols-4 mb-8">
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="resort">Resorts</TabsTrigger>
                <TabsTrigger value="homestay">Homestays</TabsTrigger>
                <TabsTrigger value="hotel">Hotels</TabsTrigger>
              </TabsList>

              <TabsContent value="all">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filterAccommodations("all").map((acc, index) => (
                    <AccommodationCard
                      key={index}
                      name={acc.name}
                      image={acc.image}
                      price="Contact for rates"
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
                      price="Contact for rates"
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
                      price="Contact for rates"
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
                      price="Contact for rates"
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
