
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import InfoSection from "@/components/InfoSection";
import FeatureCard from "@/components/FeatureCard";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ExternalLink, MapPin, Users } from "lucide-react";
import { useState, useEffect } from "react";
import { AdPopup } from "@/components/AdPopup";
import { FounderCard } from "@/components/FounderCard";

const Index = () => {
  const [showAd, setShowAd] = useState(false);

  useEffect(() => {
    // Show ad popup when component mounts
    setShowAd(true);
  }, []);

  // Array of natural spots
  const naturalSpots = [
    {
      title: "Radhanagari Dam",
      description: "Built across Bhogawati River, this is a perfect picnic spot with panoramic views of the surrounding hills and water.",
      image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=800",
      link: "/spot/radhanagari-dam"
    },
    {
      title: "Dajipur Waterfall",
      description: "Hidden near Dajipur village, this beautiful waterfall is surrounded by thick jungle, offering a serene escape.",
      image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=800",
      link: "/spot/dajipur-waterfall",
      gradient: "sunset-gradient"
    },
    {
      title: "Manmodi Waterfall",
      description: "A seasonal waterfall that comes to life during the monsoon season (July–September), creating a spectacular display of nature.",
      image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?auto=format&fit=crop&w=800",
      link: "/spot/manmodi-waterfall",
      gradient: "wildflower-gradient"
    },
    {
      title: "Kalamma Devi Temple Dam",
      description: "A unique combination of spiritual and natural beauty, this spot is great for family visits and offers stunning views.",
      image: "https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&w=800",
      link: "/spot/kalamma-devi-temple",
      gradient: "berry-gradient"
    }
  ];

  // Key sections to visit
  const keySections = [
    {
      title: "Wildlife & Safari",
      description: "Explore the diverse wildlife including Indian Bison (Gaur), leopards, and over 230 bird species through our guided safari tours.",
      image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=800",
      link: "/wildlife-safari",
      gradient: "forest-gradient"
    },
    {
      title: "Hotels & Homestays",
      description: "Find the perfect accommodation, from eco-friendly resorts to authentic homestays near the sanctuary entrance.",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800",
      link: "/hotels-homestays",
      gradient: "sunset-gradient"
    },
    {
      title: "Local Food Guide",
      description: "Taste authentic Kolhapuri cuisine and traditional forest recipes that make Radhanagari a culinary delight.",
      image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=800",
      link: "/food-guide",
      gradient: "wildflower-gradient"
    }
  ];

  // Wildlife animals
  const animals = [
    {
      name: "Indian Bison (Gaur)",
      image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=800",
      description: "The largest wild cattle species in India, can weigh up to 1,000 kg."
    },
    {
      name: "Leopard",
      image: "https://images.unsplash.com/photo-1456926631375-92c8ce872def?auto=format&fit=crop&w=800",
      description: "Elusive and adaptable big cats that roam the forests of Radhanagari."
    },
    {
      name: "Sambar Deer",
      image: "https://images.unsplash.com/photo-1484406566174-9da000fda645?auto=format&fit=crop&w=800",
      description: "Large deer species commonly spotted near water bodies in the sanctuary."
    },
    {
      name: "Indian Giant Squirrel",
      image: "https://images.unsplash.com/photo-1507666405895-422eee7d517f?auto=format&fit=crop&w=800",
      description: "Colorful tree-dwelling rodents endemic to Indian forests."
    }
  ];

  // Founders of the website
  const founders = [
    {
      name: "Mr. Rajendra Maruti Chavan",
      role: "CEO of Incite Computers",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=800",
      description: "Founded the digital initiative to promote Radhanagari Wildlife Sanctuary globally."
    },
    {
      name: "Mr. Prashant Vanjule",
      role: "Technology Director",
      image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&w=800",
      description: "Leads the technical development of the platform and digital infrastructure."
    },
    {
      name: "Mr. Sumit Chavan",
      role: "Content Manager",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=800",
      description: "Oversees all content creation and ensures accurate information about the sanctuary."
    },
    {
      name: "Mr. Pruthviraj Chavan",
      role: "Community Liaison",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800",
      description: "Works with local communities to promote sustainable tourism practices."
    },
    {
      name: "Mr. Maruti Chavan",
      role: "Wildlife Expert",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800",
      description: "Provides expert knowledge on the flora and fauna of the sanctuary."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {showAd && <AdPopup onClose={() => setShowAd(false)} />}
      
      <main className="flex-grow">
        <Hero 
          title="Explore Radhanagari Wildlife Sanctuary"
          subtitle="Discover Maharashtra's biodiversity paradise with hotels, jungle safaris, local food & complete travel guide"
          cta={{ text: "Book Safari Experience", link: "/wildlife-safari" }}
          image="https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=2000"
        />

        {/* Introduction Section */}
        <InfoSection 
          title="Welcome to Radhanagari"
          subtitle="The heart of Maharashtra's biodiversity and home to rare wildlife species"
        >
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-gray-600 mb-6">
              Whether you're looking for affordable hotels in Radhanagari, planning an exciting jungle safari in Dajipur, 
              or curious about traditional Kolhapuri food, this site is your go-to resource. Discover Radhanagari wildlife 
              sanctuary timings, forest stay packages, birdwatching trails, and authentic local experiences.
            </p>
            <div className="bg-green-50 p-4 rounded-lg border border-green-200 inline-block">
              <h3 className="font-semibold text-green-800">April 2025 Update:</h3>
              <p className="text-sm text-green-700">
                The summer safari season is now open with extended morning hours. Book your wildlife experience today!
              </p>
            </div>
          </div>
        </InfoSection>

        {/* Sanctuary Map Section */}
        <InfoSection 
          title="Radhanagari Wildlife Sanctuary Map"
          subtitle="Explore the sanctuary's key locations and trails"
          className="bg-gray-50"
        >
          <div className="max-w-5xl mx-auto">
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="aspect-w-16 aspect-h-9 relative">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d122934.45097202437!2d73.92732207388086!3d16.37762192753884!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc0bf34922bd09f%3A0xcfbee10e39bc6003!2sRadhanagari%20Wildlife%20Sanctuary!5e0!3m2!1sen!2sus!4v1712611779599!5m2!1sen!2sus" 
                  className="w-full h-96 rounded-lg" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
                <div className="absolute bottom-4 right-4">
                  <Button variant="outline" className="bg-white" asChild>
                    <a href="https://goo.gl/maps/ZQZ9XZ9Z9Z9XZ9Z9A" target="_blank" rel="noopener noreferrer">
                      <MapPin className="mr-2 h-4 w-4" />
                      View Larger Map
                    </a>
                  </Button>
                </div>
              </div>
              <div className="p-6">
                <p className="text-sm text-gray-600">
                  Radhanagari Wildlife Sanctuary is located in the Kolhapur district of Maharashtra. 
                  The sanctuary is spread over an area of 351.16 sq km and is home to diverse flora and fauna.
                </p>
              </div>
            </div>
          </div>
        </InfoSection>

        {/* Natural Spots Section */}
        <InfoSection 
          title="Must-Visit Natural Spots"
          subtitle="Explore these breathtaking locations around Radhanagari"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {naturalSpots.map((spot, index) => (
              <FeatureCard 
                key={index}
                title={spot.title}
                description={spot.description}
                image={spot.image}
                link={spot.link}
                gradient={spot.gradient}
              />
            ))}
          </div>
        </InfoSection>

        {/* Wildlife Section */}
        <InfoSection 
          title="Wildlife of Radhanagari"
          subtitle="Discover the diverse species that call this sanctuary home"
          className="bg-gray-50"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {animals.map((animal, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <img src={animal.image} alt={animal.name} className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h3 className="font-semibold text-lg mb-1">{animal.name}</h3>
                  <p className="text-gray-600 text-sm">{animal.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button asChild className="forest-gradient text-white">
              <a href="/wildlife-safari">
                Explore More Wildlife
                <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </InfoSection>

        {/* Key Sections */}
        <InfoSection 
          title="Plan Your Perfect Visit"
          subtitle="Everything you need to know for an unforgettable experience"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {keySections.map((section, index) => (
              <FeatureCard 
                key={index}
                title={section.title}
                description={section.description}
                image={section.image}
                link={section.link}
                gradient={section.gradient}
              />
            ))}
          </div>
        </InfoSection>

        {/* Founders Section */}
        <InfoSection 
          title="Our Team"
          subtitle="Meet the founders behind this initiative"
          className="bg-gray-50"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {founders.map((founder, index) => (
              <FounderCard
                key={index}
                name={founder.name}
                role={founder.role}
                image={founder.image}
                description={founder.description}
              />
            ))}
          </div>
        </InfoSection>

        {/* Testimonial Section */}
        <div className="forest-gradient py-16 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-8">What Visitors Say</h2>
              <div className="bg-white/10 backdrop-blur-sm p-6 md:p-8 rounded-xl">
                <p className="text-xl italic mb-6">
                  "Radhanagari Wildlife Sanctuary offers one of the most authentic wildlife experiences in Maharashtra. 
                  We spotted a family of Indian Bison and numerous birds during our safari. The local homestay experience 
                  made our trip even more memorable!"
                </p>
                <div>
                  <p className="font-semibold">Priya Sharma</p>
                  <p className="text-sm text-white/80">Wildlife Photographer, Mumbai</p>
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

export default Index;
