
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

const ComputerTraining = () => {
  const [priceRange, setPriceRange] = useState([1000, 10000]);
  const [searchTerm, setSearchTerm] = useState("");

  const trainingCenters = [
    {
      name: "Digital Skills Academy",
      image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=800",
      price: "₹2,500 - ₹8,000",
      rating: 4.8,
      description: "Comprehensive computer training courses from basic to advanced, with job placement assistance.",
      features: ["Basic Computer Skills", "MS Office", "Web Development", "Graphic Design"],
      location: "Near Bus Stand"
    },
    {
      name: "Tech Career Institute",
      image: "https://images.unsplash.com/photo-1594729095022-e2f6d2eece9c?auto=format&fit=crop&w=800",
      price: "₹3,000 - ₹9,500",
      rating: 4.6,
      description: "Industry-focused training with practical projects and internship opportunities.",
      features: ["Programming", "Digital Marketing", "Data Analysis", "Certificate Courses"],
      location: "Main Road"
    },
    {
      name: "Rural IT Solutions",
      image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800",
      price: "₹1,500 - ₹4,000",
      rating: 4.5,
      description: "Affordable computer education tailored for rural students with flexible timings.",
      features: ["Basic Computing", "Tally", "DTP", "Language Support"],
      location: "Village Center"
    },
    {
      name: "Advanced Technology Center",
      image: "https://images.unsplash.com/photo-1598986646512-9330bcc4c0dc?auto=format&fit=crop&w=800",
      price: "₹5,000 - ₹12,000",
      rating: 4.9,
      description: "Cutting-edge training on the latest technologies with industry expert instructors.",
      features: ["AI & ML", "Cloud Computing", "Cybersecurity", "IoT Development"],
      location: "Tech Park"
    },
    {
      name: "Community Computer Education",
      image: "https://images.unsplash.com/photo-1531538606174-0f90ff5dce83?auto=format&fit=crop&w=800",
      price: "₹1,000 - ₹3,000",
      rating: 4.4,
      description: "Community-based computer literacy programs accessible to all age groups.",
      features: ["Senior Citizen Programs", "School Student Batches", "Basic Skills", "Affordable Courses"],
      location: "Community Center"
    },
    {
      name: "Future Skills Hub",
      image: "https://images.unsplash.com/photo-1573166953822-0d37dde20b9d?auto=format&fit=crop&w=800",
      price: "₹2,800 - ₹7,500",
      rating: 4.7,
      description: "Modern training facility focusing on future-ready digital skills and certifications.",
      features: ["Certified Courses", "Placement Support", "Advanced Training", "Weekend Batches"],
      location: "Town Center"
    }
  ];

  // Filter centers based on search term and price range
  const filterCenters = (type = "all") => {
    let minPrice = parseInt(priceRange[0]);
    let maxPrice = parseInt(priceRange[1]);
    
    return trainingCenters
      .filter(center => {
        // Extract numeric price range
        const priceString = center.price;
        const prices = priceString.match(/\d+/g);
        if (prices && prices.length >= 2) {
          const avgPrice = (parseInt(prices[0]) + parseInt(prices[1])) / 2;
          return avgPrice >= minPrice && avgPrice <= maxPrice;
        }
        return true;
      })
      .filter(center => 
        center.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
        center.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        center.features.some(feature => feature.toLowerCase().includes(searchTerm.toLowerCase()))
      )
      .filter(center => {
        if (type === "basic") {
          return center.features.some(f => f.toLowerCase().includes("basic"));
        } else if (type === "advanced") {
          return center.features.some(f => 
            f.toLowerCase().includes("advanced") || 
            f.toLowerCase().includes("programming") ||
            f.toLowerCase().includes("ai")
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
          title="Computer Training Centers in Radhanagari"
          subtitle="Learn digital skills and advance your career opportunities"
          image="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=2000"
        />
        
        <InfoSection 
          title="Find the Right Training Center"
          subtitle="From basic computer literacy to advanced programming skills"
        >
          <div className="mb-8">
            <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-md mb-8">
              <div className="flex flex-col md:flex-row gap-4 mb-6">
                <div className="flex-grow relative">
                  <Input
                    type="text"
                    placeholder="Search by course, skill or center name..."
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
                    max={12000}
                    step={500}
                    value={priceRange}
                    onValueChange={setPriceRange}
                    className="py-4"
                  />
                </div>
              </div>
            </div>
            
            <Tabs defaultValue="all" className="max-w-5xl mx-auto">
              <TabsList className="grid grid-cols-3 mb-8">
                <TabsTrigger value="all">All Courses</TabsTrigger>
                <TabsTrigger value="basic">Basic Skills</TabsTrigger>
                <TabsTrigger value="advanced">Advanced Tech</TabsTrigger>
              </TabsList>

              <TabsContent value="all">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filterCenters().map((center, index) => (
                    <ShopCard
                      key={index}
                      name={center.name}
                      image={center.image}
                      price={center.price}
                      rating={center.rating}
                      description={center.description}
                      features={center.features}
                      location={center.location}
                    />
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="basic">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filterCenters("basic").map((center, index) => (
                    <ShopCard
                      key={index}
                      name={center.name}
                      image={center.image}
                      price={center.price}
                      rating={center.rating}
                      description={center.description}
                      features={center.features}
                      location={center.location}
                    />
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="advanced">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filterCenters("advanced").map((center, index) => (
                    <ShopCard
                      key={index}
                      name={center.name}
                      image={center.image}
                      price={center.price}
                      rating={center.rating}
                      description={center.description}
                      features={center.features}
                      location={center.location}
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

export default ComputerTraining;
