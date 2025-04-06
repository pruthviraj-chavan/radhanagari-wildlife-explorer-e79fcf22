
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import InfoSection from "@/components/InfoSection";
import FeatureCard from "@/components/FeatureCard";
import Footer from "@/components/Footer";

const Index = () => {
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

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
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

        {/* Natural Spots Section */}
        <InfoSection 
          title="Must-Visit Natural Spots"
          subtitle="Explore these breathtaking locations around Radhanagari"
          className="bg-gray-50"
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
