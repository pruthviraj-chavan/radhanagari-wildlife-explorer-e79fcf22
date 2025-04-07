
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import InfoSection from "@/components/InfoSection";
import SightingCard from "@/components/SightingCard";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { 
  Calendar, Clock, IndianRupee, MapPin, Clipboard, Camera, Info
} from "lucide-react";
import { Link } from "react-router-dom";

const WildlifeSafari = () => {
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
      rarity: "common" as "common" | "uncommon" | "rare" | "very-rare"
    },
    {
      name: "Leopard",
      localName: "चीता",
      category: "Mammal",
      description: "Elusive and adaptable big cat that prefers the densely forested areas. Best spotted during early morning safaris.",
      image: "https://images.unsplash.com/photo-1456926631375-92c8ce872def?auto=format&fit=crop&w=800",
      rarity: "rare" as "common" | "uncommon" | "rare" | "very-rare"
    },
    {
      name: "Sambar Deer",
      localName: "सांबर हरिण",
      category: "Mammal",
      description: "Large deer species with distinctive antlers. Often seen in small groups near forest edges and water sources.",
      image: "https://images.unsplash.com/photo-1484406566174-9da000fda645?auto=format&fit=crop&w=800",
      rarity: "common" as "common" | "uncommon" | "rare" | "very-rare"
    },
    {
      name: "Indian Giant Squirrel",
      localName: "शेखरू",
      category: "Mammal", 
      description: "This colorful, large squirrel is endemic to India and spends most of its time in the forest canopy.",
      image: "https://images.unsplash.com/photo-1507666405895-422eee7d517f?auto=format&fit=crop&w=800",
      rarity: "uncommon" as "common" | "uncommon" | "rare" | "very-rare"
    }
  ];

  const birds = [
    {
      name: "Malabar Pied Hornbill",
      localName: "धनेश",
      category: "Bird",
      description: "Distinguished by its large bill and casque, this bird is vital for seed dispersal in the forest ecosystem.",
      image: "https://images.unsplash.com/photo-1551085254-e96b210db58a?auto=format&fit=crop&w=800",
      rarity: "uncommon" as "common" | "uncommon" | "rare" | "very-rare"
    },
    {
      name: "Malabar Trogon",
      localName: "मलबार ट्रोगोन",
      category: "Bird",
      description: "Colorful forest bird with a distinctive call. Males have a crimson underside while females are brownish.",
      image: "https://images.unsplash.com/photo-1591608971361-15c13bd50752?auto=format&fit=crop&w=800",
      rarity: "rare" as "common" | "uncommon" | "rare" | "very-rare"
    },
    {
      name: "Great Hornbill",
      localName: "ग्रेट हॉर्नबिल",
      category: "Bird",
      description: "Impressive forest bird with a large yellow and black casque. Known for its noisy wing beats during flight.",
      image: "https://images.unsplash.com/photo-1591608971361-15c13bd50752?auto=format&fit=crop&w=800",
      rarity: "very-rare" as "common" | "uncommon" | "rare" | "very-rare"
    },
    {
      name: "Kingfisher",
      localName: "खंड्या",
      category: "Bird",
      description: "Brightly colored bird often spotted near water bodies, diving for fish with remarkable precision.",
      image: "https://images.unsplash.com/photo-1555497402-94456d20fc2a?auto=format&fit=crop&w=800",
      rarity: "common" as "common" | "uncommon" | "rare" | "very-rare"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
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
