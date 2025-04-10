
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import InfoSection from "@/components/InfoSection";
import Footer from "@/components/Footer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card } from "@/components/ui/card";
import { MapPin, Droplets, Clock } from "lucide-react";

const Waterfalls = () => {
  const [activeTab, setActiveTab] = useState("all");

  const waterfalls = [
    {
      name: "Dajipur Waterfall",
      localName: "दाजीपूर धबधबा",
      image: "https://images.unsplash.com/photo-1509316785289-025f5b846b35?auto=format&fit=crop&w=800",
      description: "A picturesque waterfall near Dajipur Wildlife Sanctuary, offering a serene escape into nature.",
      timings: "Open ⋅ Closes 6 pm",
      location: "8WR2+XX8, Dajipur",
      height: "Approximately 30 meters",
      rating: 5.0,
      reviews: 3,
      difficulty: "Easy to Moderate",
      category: "popular"
    },
    {
      name: "Hasane Waterfall",
      localName: "हसाने धबधबा",
      image: "https://images.unsplash.com/photo-1455577380025-4321f1e1dca7?auto=format&fit=crop&w=800",
      description: "A memorable piece of view, featuring both waterfall and dam views in a beautiful setting.",
      timings: "Open daily",
      location: "8VJ8+57C, At-Hasane post",
      height: "Approximately 25 meters",
      rating: 4.5,
      reviews: 51,
      difficulty: "Easy",
      category: "popular"
    },
    {
      name: "Rautwadi Waterfall",
      localName: "रौतवाडी धबधबा",
      image: "https://images.unsplash.com/photo-1468245856972-a0333f3f8293?auto=format&fit=crop&w=800",
      description: "One of the most popular waterfalls in the Radhanagari region, accessible with a short hike.",
      timings: "Open now",
      location: "CXM4+C2R, Unnamed Road",
      height: "Approximately 45 meters",
      rating: 4.5,
      reviews: 647,
      difficulty: "Moderate",
      category: "popular"
    },
    {
      name: "Ramanwadi Waterfall",
      localName: "रामानवाडी धबधबा",
      image: "https://images.unsplash.com/photo-1503220317375-aaad61436b1b?auto=format&fit=crop&w=800",
      description: "Best hidden waterfall. If you are a trekker you must visit this secluded natural wonder.",
      timings: "Open ⋅ Closes 6 pm",
      location: "9XM6+9HX",
      height: "Approximately 35 meters",
      rating: 4.4,
      reviews: 45,
      difficulty: "Moderate to Difficult",
      category: "hidden"
    },
    {
      name: "Mauli Kund Waterfalls",
      localName: "मौली कुंड धबधबा",
      image: "https://images.unsplash.com/photo-1434725039720-aaad6dd32dfe?auto=format&fit=crop&w=800",
      description: "It takes around 5 to 8 km hike in Jungle to reach this hidden gem of Radhanagari.",
      timings: "Open daily",
      location: "CWP3+4V7, Radhanagari",
      height: "Approximately 50 meters",
      rating: 4.7,
      reviews: 23,
      difficulty: "Difficult",
      category: "hidden"
    },
    {
      name: "Nakhe Waterfall",
      localName: "नाखे धबधबा",
      image: "https://images.unsplash.com/photo-1498429089284-41f8cf3ffd39?auto=format&fit=crop&w=800",
      description: "An amazing waterfall with pristine surroundings, perfect for nature enthusiasts.",
      timings: "Open now",
      location: "FW4H+5J5, Chavanwadi Padsali",
      height: "Approximately 20 meters",
      rating: 5.0,
      reviews: 3,
      difficulty: "Easy",
      category: "hidden"
    }
  ];

  const galleryImages = [
    {
      url: "https://images.unsplash.com/photo-1533038590840-1cde6e668a91?auto=format&fit=crop&w=800",
      title: "Monsoon view of Dajipur Waterfall",
      description: "Radhanagari, Maharashtra"
    },
    {
      url: "https://images.unsplash.com/photo-1455577380025-4321f1e1dca7?auto=format&fit=crop&w=800",
      title: "Hasane Waterfall during monsoon",
      description: "Radhanagari, Maharashtra"
    },
    {
      url: "https://images.unsplash.com/photo-1494472155656-f34e81b17ddc?auto=format&fit=crop&w=800",
      title: "Rautwadi Waterfall Panorama",
      description: "Radhanagari, Maharashtra"
    },
    {
      url: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=800",
      title: "Jungle View at Ramanwadi",
      description: "Radhanagari, Maharashtra"
    },
    {
      url: "https://images.unsplash.com/photo-1501908734255-16579c18c25f?auto=format&fit=crop&w=800",
      title: "Sunset at Mauli Kund",
      description: "Radhanagari, Maharashtra"
    },
    {
      url: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?auto=format&fit=crop&w=800",
      title: "Path to Nakhe Waterfall",
      description: "Radhanagari, Maharashtra"
    },
    {
      url: "https://images.unsplash.com/photo-1433086966358-54859d0ed716?auto=format&fit=crop&w=800",
      title: "Green paradise at Radhanagari",
      description: "Western Ghats, Maharashtra"
    },
    {
      url: "https://images.unsplash.com/photo-1501426026826-31c667bdf23d?auto=format&fit=crop&w=800",
      title: "Misty morning at Radhanagari falls",
      description: "Western Ghats, Maharashtra"
    },
    {
      url: "https://images.unsplash.com/photo-1475924156734-496f6cac6ec1?auto=format&fit=crop&w=800",
      title: "Western Ghats waterfall stream",
      description: "Radhanagari Wildlife Sanctuary"
    },
    {
      url: "https://images.unsplash.com/photo-1580100586938-02822d99c4a8?auto=format&fit=crop&w=800",
      title: "Radhanagari jungle waterfall",
      description: "Kolhapur district, Maharashtra"
    }
  ];

  const filterWaterfalls = (category = "all") => {
    if (category === "all") return waterfalls;
    return waterfalls.filter(waterfall => waterfall.category === category);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <Hero 
          title="Spectacular Waterfalls of Radhanagari"
          subtitle="Discover the hidden gems of the Western Ghats"
          image="https://images.unsplash.com/photo-1455577380025-4321f1e1dca7?auto=format&fit=crop&w=2000"
        />
        
        <InfoSection 
          title="Experience Nature's Majesty"
          subtitle="Radhanagari region is blessed with numerous breathtaking waterfalls"
          className="bg-gray-50"
        >
          <div className="max-w-3xl mx-auto text-center mb-8">
            <p className="text-gray-600">
              The Radhanagari region, nestled in the Western Ghats of Maharashtra, is home to some of the most 
              picturesque waterfalls in the state. These natural wonders are especially magnificent during and 
              after the monsoon season (June to October), when they flow with their full might and glory.
            </p>
          </div>
          
          <Tabs defaultValue="all" className="max-w-5xl mx-auto mb-12" onValueChange={setActiveTab}>
            <TabsList className="grid grid-cols-3 mb-8">
              <TabsTrigger value="all">All Waterfalls</TabsTrigger>
              <TabsTrigger value="popular">Popular</TabsTrigger>
              <TabsTrigger value="hidden">Hidden Gems</TabsTrigger>
            </TabsList>

            <TabsContent value="all" className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filterWaterfalls().map((waterfall, index) => (
                  <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="relative h-48">
                      <img 
                        src={waterfall.image} 
                        alt={`${waterfall.name} - ${waterfall.localName}`} 
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-3 right-3 bg-white px-2 py-1 rounded-full text-xs font-medium flex items-center">
                        <span className="text-amber-500 mr-1">★</span>
                        {waterfall.rating} ({waterfall.reviews})
                      </div>
                    </div>
                    <div className="p-4">
                      <h3 className="text-lg font-bold">{waterfall.name}</h3>
                      <p className="text-sm text-gray-600 mb-2">{waterfall.localName}</p>
                      <p className="text-sm text-gray-700 mb-4">{waterfall.description}</p>
                      <div className="space-y-2">
                        <div className="flex items-center text-sm">
                          <Clock className="w-4 h-4 mr-2 text-gray-500" />
                          <span>{waterfall.timings}</span>
                        </div>
                        <div className="flex items-center text-sm">
                          <MapPin className="w-4 h-4 mr-2 text-gray-500" />
                          <span>{waterfall.location}</span>
                        </div>
                        <div className="flex items-center text-sm">
                          <Droplets className="w-4 h-4 mr-2 text-gray-500" />
                          <span>Height: {waterfall.height}</span>
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="popular" className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filterWaterfalls("popular").map((waterfall, index) => (
                  <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="relative h-48">
                      <img 
                        src={waterfall.image} 
                        alt={`${waterfall.name} - ${waterfall.localName}`} 
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-3 right-3 bg-white px-2 py-1 rounded-full text-xs font-medium flex items-center">
                        <span className="text-amber-500 mr-1">★</span>
                        {waterfall.rating} ({waterfall.reviews})
                      </div>
                    </div>
                    <div className="p-4">
                      <h3 className="text-lg font-bold">{waterfall.name}</h3>
                      <p className="text-sm text-gray-600 mb-2">{waterfall.localName}</p>
                      <p className="text-sm text-gray-700 mb-4">{waterfall.description}</p>
                      <div className="space-y-2">
                        <div className="flex items-center text-sm">
                          <Clock className="w-4 h-4 mr-2 text-gray-500" />
                          <span>{waterfall.timings}</span>
                        </div>
                        <div className="flex items-center text-sm">
                          <MapPin className="w-4 h-4 mr-2 text-gray-500" />
                          <span>{waterfall.location}</span>
                        </div>
                        <div className="flex items-center text-sm">
                          <Droplets className="w-4 h-4 mr-2 text-gray-500" />
                          <span>Height: {waterfall.height}</span>
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="hidden" className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filterWaterfalls("hidden").map((waterfall, index) => (
                  <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="relative h-48">
                      <img 
                        src={waterfall.image} 
                        alt={`${waterfall.name} - ${waterfall.localName}`} 
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-3 right-3 bg-white px-2 py-1 rounded-full text-xs font-medium flex items-center">
                        <span className="text-amber-500 mr-1">★</span>
                        {waterfall.rating} ({waterfall.reviews})
                      </div>
                    </div>
                    <div className="p-4">
                      <h3 className="text-lg font-bold">{waterfall.name}</h3>
                      <p className="text-sm text-gray-600 mb-2">{waterfall.localName}</p>
                      <p className="text-sm text-gray-700 mb-4">{waterfall.description}</p>
                      <div className="space-y-2">
                        <div className="flex items-center text-sm">
                          <Clock className="w-4 h-4 mr-2 text-gray-500" />
                          <span>{waterfall.timings}</span>
                        </div>
                        <div className="flex items-center text-sm">
                          <MapPin className="w-4 h-4 mr-2 text-gray-500" />
                          <span>{waterfall.location}</span>
                        </div>
                        <div className="flex items-center text-sm">
                          <Droplets className="w-4 h-4 mr-2 text-gray-500" />
                          <span>Height: {waterfall.height}</span>
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </InfoSection>

        {/* Gallery Section */}
        <InfoSection 
          title="Waterfall Gallery"
          subtitle="Experience the beauty of Radhanagari waterfalls through pictures"
          gradient="forest-gradient"
          textColor="text-white"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {galleryImages.map((image, index) => (
              <div key={index} className="group relative overflow-hidden rounded-lg shadow-md">
                <img 
                  src={image.url} 
                  alt={image.title} 
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110" 
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4 text-white">
                    <h4 className="font-medium text-sm">{image.title}</h4>
                    <p className="text-xs opacity-80">{image.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </InfoSection>
        
        {/* Best Time to Visit Section */}
        <InfoSection 
          title="Best Time to Visit"
          subtitle="Plan your trip to Radhanagari waterfalls at the perfect time"
          className="bg-gray-50"
        >
          <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1531969179221-3946e6b5a5e7?auto=format&fit=crop&w=800" 
                  alt="Monsoon at Radhanagari" 
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-4">Seasonal Guide</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-green-700">Monsoon Season (June-September)</h4>
                    <p className="text-sm text-gray-600">Best time to visit for majestic waterfalls in full flow. The entire region turns lush green and vibrant.</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-amber-700">Post-Monsoon (October-December)</h4>
                    <p className="text-sm text-gray-600">Good flow continues with more accessible conditions. Ideal for those who want to avoid heavy rainfall.</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-blue-700">Winter (January-February)</h4>
                    <p className="text-sm text-gray-600">Reduced water flow but pleasant weather for trekking and exploring. Some smaller falls might dry up.</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-red-700">Summer (March-May)</h4>
                    <p className="text-sm text-gray-600">Many waterfalls reduce to trickles or dry up completely. Not recommended for waterfall visits.</p>
                  </div>
                </div>
                <div className="mt-6 text-sm bg-yellow-50 p-3 rounded-lg">
                  <span className="font-medium">Pro Tip:</span> For the most spectacular views, visit after a few days of continuous rain, when the water flow is at its peak but the paths are relatively less slippery.
                </div>
              </div>
            </div>
          </div>
        </InfoSection>
      </main>
      
      <Footer />
    </div>
  );
};

export default Waterfalls;
