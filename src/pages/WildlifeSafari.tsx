
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import InfoSection from "@/components/InfoSection";
import SightingCard from "@/components/SightingCard";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { 
  Calendar, Clock, IndianRupee, MapPin, Clipboard, Camera, Info, Video, Image as ImageIcon
} from "lucide-react";
import { Link } from "react-router-dom";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { VideoCard } from "@/components/VideoCard";
import { GalleryItem } from "@/components/GalleryItem";
import { AdPopup } from "@/components/AdPopup";

const WildlifeSafari = () => {
  const [showAd, setShowAd] = useState(false);

  useEffect(() => {
    // Show ad popup when component mounts
    setShowAd(true);
  }, []);

  // Safari details
  const safariDetails = [
    {
      icon: <Calendar className="h-5 w-5 text-green-600" />,
      title: "Best Visiting Seasons",
      description: "October to May (Closed during heavy monsoon: July-September)"
    },
    {
      icon: <Clock className="h-5 w-5 text-green-600" />,
      title: "Safari Timings",
      description: "Morning: 6:00 AM - 9:30 AM, Evening: 3:30 PM - 6:30 PM"
    },
    {
      icon: <IndianRupee className="h-5 w-5 text-green-600" />,
      title: "Entry Fees",
      description: "Indians: ₹200/person, Foreigners: ₹1,000/person, Vehicle: ₹1,500"
    },
    {
      icon: <MapPin className="h-5 w-5 text-green-600" />,
      title: "Safari Routes",
      description: "3 routes available: Dajipur Gate, Radhanagari Dam, Kalamma Trail"
    }
  ];

  // Wildlife data
  const mammals = [
    {
      name: "Indian Bison (Gaur)",
      localName: "गौर",
      category: "Mammal",
      description: "The largest wild cattle species, these impressive animals can weigh up to 1,000 kg. Often spotted in small herds near water bodies.",
      image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=800",
      rarity: "common" as const
    },
    {
      name: "Leopard",
      localName: "चीता",
      category: "Mammal",
      description: "Elusive and adaptable big cat that prefers the densely forested areas. Best spotted during early morning safaris.",
      image: "https://images.unsplash.com/photo-1456926631375-92c8ce872def?auto=format&fit=crop&w=800",
      rarity: "rare" as const
    },
    {
      name: "Sambar Deer",
      localName: "सांबर हरिण",
      category: "Mammal",
      description: "Large deer species with distinctive antlers. Often seen in small groups near forest edges and water sources.",
      image: "https://images.unsplash.com/photo-1484406566174-9da000fda645?auto=format&fit=crop&w=800",
      rarity: "common" as const
    },
    {
      name: "Indian Giant Squirrel",
      localName: "शेखरू",
      category: "Mammal", 
      description: "This colorful, large squirrel is endemic to India and spends most of its time in the forest canopy.",
      image: "https://images.unsplash.com/photo-1507666405895-422eee7d517f?auto=format&fit=crop&w=800",
      rarity: "uncommon" as const
    }
  ];

  const birds = [
    {
      name: "Malabar Pied Hornbill",
      localName: "धनेश",
      category: "Bird",
      description: "Distinguished by its large bill and casque, this bird is vital for seed dispersal in the forest ecosystem.",
      image: "https://images.unsplash.com/photo-1551085254-e96b210db58a?auto=format&fit=crop&w=800",
      rarity: "uncommon" as const
    },
    {
      name: "Malabar Trogon",
      localName: "मलबार ट्रोगोन",
      category: "Bird",
      description: "Colorful forest bird with a distinctive call. Males have a crimson underside while females are brownish.",
      image: "https://images.unsplash.com/photo-1591608971361-15c13bd50752?auto=format&fit=crop&w=800",
      rarity: "rare" as const
    },
    {
      name: "Great Hornbill",
      localName: "ग्रेट हॉर्नबिल",
      category: "Bird",
      description: "Impressive forest bird with a large yellow and black casque. Known for its noisy wing beats during flight.",
      image: "https://images.unsplash.com/photo-1591608971361-15c13bd50752?auto=format&fit=crop&w=800",
      rarity: "very-rare" as const
    },
    {
      name: "Kingfisher",
      localName: "खंड्या",
      category: "Bird",
      description: "Brightly colored bird often spotted near water bodies, diving for fish with remarkable precision.",
      image: "https://images.unsplash.com/photo-1555497402-94456d20fc2a?auto=format&fit=crop&w=800",
      rarity: "common" as const
    }
  ];

  // Wildlife Videos
  const videos = [
    {
      title: "Indian Bison in Radhanagari",
      embedUrl: "https://www.youtube.com/embed/4xJoVCjBUco",
      description: "A herd of Indian Bison (Gaur) spotted during morning safari."
    },
    {
      title: "Birds of Radhanagari",
      embedUrl: "https://www.youtube.com/embed/8BHGrj6a9Ww",
      description: "The diverse bird species found in the sanctuary."
    },
    {
      title: "Leopard Sighting",
      embedUrl: "https://www.youtube.com/embed/ot-vX1QLzjA",
      description: "Rare footage of a leopard walking through the forest."
    },
    {
      title: "Dajipur Sanctuary Tour",
      embedUrl: "https://www.youtube.com/embed/vU6z6QkJdgk",
      description: "A complete tour guide of the Dajipur range."
    },
    {
      title: "Monsoon in Radhanagari",
      embedUrl: "https://www.youtube.com/embed/PjGkVCAo8Fw",
      description: "The lush greenery during monsoon season."
    },
    {
      title: "Wildlife Conservation Efforts",
      embedUrl: "https://www.youtube.com/embed/RcmrbNRK-jY",
      description: "Local conservation initiatives to protect biodiversity."
    },
    {
      title: "Night Safari Experience",
      embedUrl: "https://www.youtube.com/embed/qnNmGQosLjg",
      description: "Experience the jungle after dark with special night safaris."
    },
    {
      title: "Butterfly Paradise",
      embedUrl: "https://www.youtube.com/embed/gJpT_1WsXng",
      description: "The colorful butterfly species found in the sanctuary."
    },
    {
      title: "Radhanagari Dam",
      embedUrl: "https://www.youtube.com/embed/gFMDzhPG8d0",
      description: "The scenic beauty around Radhanagari dam."
    },
    {
      title: "Wildlife Photography Tips",
      embedUrl: "https://www.youtube.com/embed/7ZVyNjKSr0M",
      description: "Expert tips for wildlife photography in Radhanagari."
    }
  ];

  // Gallery images
  const galleryImages = [
    {
      title: "Indian Bison",
      image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=800"
    },
    {
      title: "Leopard",
      image: "https://images.unsplash.com/photo-1456926631375-92c8ce872def?auto=format&fit=crop&w=800"
    },
    {
      title: "Sambar Deer",
      image: "https://images.unsplash.com/photo-1484406566174-9da000fda645?auto=format&fit=crop&w=800"
    },
    {
      title: "Hornbill",
      image: "https://images.unsplash.com/photo-1551085254-e96b210db58a?auto=format&fit=crop&w=800"
    },
    {
      title: "Kingfisher",
      image: "https://images.unsplash.com/photo-1555497402-94456d20fc2a?auto=format&fit=crop&w=800"
    },
    {
      title: "Forest Trail",
      image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=800"
    },
    {
      title: "Radhanagari Dam",
      image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=800"
    },
    {
      title: "Butterfly",
      image: "https://images.unsplash.com/photo-1452570053594-1b985d6ea890?auto=format&fit=crop&w=800"
    }
  ];

  // Waterfalls
  const waterfalls = [
    {
      name: "Dajipur Waterfall",
      image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=800",
      description: "A majestic waterfall near Dajipur village, surrounded by thick forest. Best visited during monsoon.",
      location: "Near Dajipur Village"
    },
    {
      name: "Manmodi Waterfall",
      image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?auto=format&fit=crop&w=800",
      description: "A scenic waterfall that comes to life during the rainy season with breathtaking views.",
      location: "Manmodi Region"
    },
    {
      name: "Radhanagari Falls",
      image: "https://images.unsplash.com/photo-1513125370-3438ccd8f342?auto=format&fit=crop&w=800",
      description: "Located near the sanctuary entrance, this waterfall offers easy access and beautiful scenery.",
      location: "Near Sanctuary Entrance"
    },
    {
      name: "Hidden Forest Falls",
      image: "https://images.unsplash.com/photo-1565621759698-b02b4fbe6312?auto=format&fit=crop&w=800",
      description: "A secluded waterfall deep in the forest, perfect for adventure seekers and nature lovers.",
      location: "Deep Forest Area"
    },
    {
      name: "Kalamma Falls",
      image: "https://images.unsplash.com/photo-1546514355-7fdc90ccbd03?auto=format&fit=crop&w=800",
      description: "Named after the nearby temple, this waterfall offers a spiritual and natural experience.",
      location: "Near Kalamma Temple"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {showAd && <AdPopup onClose={() => setShowAd(false)} />}
      
      <main className="flex-grow">
        <Hero 
          title="Wildlife & Safari"
          subtitle="Explore Radhanagari's rich biodiversity through guided safari experiences"
          image="https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=2000"
        />
        
        <InfoSection 
          title="Plan Your Safari"
          subtitle="Essential information for your wildlife adventure"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            {safariDetails.map((detail, index) => (
              <Card key={index} className="p-6">
                <div className="flex items-start">
                  <div className="mr-4 mt-1">
                    {detail.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">{detail.title}</h3>
                    <p className="text-sm text-gray-600">{detail.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
          
          <div className="flex justify-center mt-6">
            <Link to="/contact">
              <Button className="forest-gradient text-white hover:opacity-90">
                Book Safari Now
              </Button>
            </Link>
          </div>
        </InfoSection>
        
        {/* Media Tabs Section (Videos & Gallery) */}
        <InfoSection
          title="Explore Radhanagari Virtually"
          subtitle="Videos and images from the wildlife sanctuary"
          className="bg-gray-50"
        >
          <Tabs defaultValue="videos" className="max-w-5xl mx-auto">
            <div className="flex justify-center mb-6">
              <TabsList>
                <TabsTrigger value="videos" className="flex items-center">
                  <Video className="mr-2 h-4 w-4" />
                  Videos
                </TabsTrigger>
                <TabsTrigger value="gallery" className="flex items-center">
                  <ImageIcon className="mr-2 h-4 w-4" />
                  Photo Gallery
                </TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="videos">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {videos.map((video, index) => (
                  <VideoCard
                    key={index}
                    title={video.title}
                    embedUrl={video.embedUrl}
                    description={video.description}
                  />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="gallery">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {galleryImages.map((image, index) => (
                  <GalleryItem
                    key={index}
                    title={image.title}
                    image={image.image}
                  />
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </InfoSection>

        {/* Waterfalls Section */}
        <InfoSection
          title="Waterfalls of Radhanagari"
          subtitle="Discover the scenic waterfalls in and around the sanctuary"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {waterfalls.map((waterfall, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <img 
                  src={waterfall.image} 
                  alt={waterfall.name} 
                  className="w-full h-56 object-cover"
                />
                <div className="p-4">
                  <h3 className="font-semibold text-lg mb-1">{waterfall.name}</h3>
                  <p className="text-gray-500 text-sm mb-2 flex items-center">
                    <MapPin className="h-4 w-4 mr-1" />
                    {waterfall.location}
                  </p>
                  <p className="text-gray-600 text-sm">{waterfall.description}</p>
                </div>
              </div>
            ))}
          </div>
        </InfoSection>
        
        {/* Safari Experience Section */}
        <div className="bg-gray-50 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl font-bold mb-10 text-center">Safari Experience</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="w-12 h-12 forest-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                    <Clipboard className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-center">Booking Process</h3>
                  <p className="text-gray-600 text-sm">
                    Safaris can be booked online or at the sanctuary entrance. Advance booking is recommended during peak season (October-February). Your safari includes a guide and vehicle.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="w-12 h-12 sunset-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                    <Camera className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-center">Photography Tips</h3>
                  <p className="text-gray-600 text-sm">
                    Bring a zoom lens (at least 200mm) for wildlife shots. Early morning offers the best light and most active wildlife. Always maintain silence during your safari.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="w-12 h-12 wildflower-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                    <Info className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-center">What to Bring</h3>
                  <p className="text-gray-600 text-sm">
                    Wear neutral-colored clothing, bring binoculars, water, and insect repellent. Mornings and evenings can be cool, so bring a light jacket even in summer.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Wildlife Mammals Section */}
        <InfoSection 
          title="Mammals of Radhanagari"
          subtitle="Key species to look out for during your safari"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {mammals.map((animal, index) => (
              <SightingCard 
                key={index}
                image={animal.image}
                name={animal.name}
                localName={animal.localName}
                category={animal.category}
                description={animal.description}
                rarity={animal.rarity}
              />
            ))}
          </div>
        </InfoSection>
        
        {/* Wildlife Birds Section */}
        <InfoSection 
          title="Birds of Radhanagari"
          subtitle="The sanctuary is home to over 230 bird species"
          className="bg-gray-50"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {birds.map((bird, index) => (
              <SightingCard 
                key={index}
                image={bird.image}
                name={bird.name}
                localName={bird.localName}
                category={bird.category}
                description={bird.description}
                rarity={bird.rarity}
              />
            ))}
          </div>
        </InfoSection>
        
        {/* Conservation Section */}
        <div className="forest-gradient py-20 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">Conservation Efforts</h2>
              <p className="text-lg mb-8">
                Radhanagari Wildlife Sanctuary is committed to preserving the region's biodiversity through various 
                conservation initiatives. These efforts focus on habitat protection, anti-poaching measures, 
                and community involvement.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-3">Habitat Protection</h3>
                  <p>
                    The sanctuary maintains dedicated corridors for wildlife movement and strictly monitors 
                    human activities to minimize disruption to natural habitats.
                  </p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-3">Community Involvement</h3>
                  <p>
                    Local communities participate in conservation through eco-tourism initiatives and 
                    educational programs that promote sustainable practices.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default WildlifeSafari;
