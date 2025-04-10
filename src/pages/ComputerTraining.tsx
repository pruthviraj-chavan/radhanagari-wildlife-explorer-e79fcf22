
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import InfoSection from "@/components/InfoSection";
import Footer from "@/components/Footer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { useState, useEffect } from "react";
import { Search, Computer, MapPin, Clock, Bookmark } from "lucide-react";
import { Card } from "@/components/ui/card";
import { AdPopup } from "@/components/AdPopup";

const ComputerTraining = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [showAd, setShowAd] = useState(false);

  useEffect(() => {
    // Show ad popup when component mounts
    setShowAd(true);
  }, []);

  const trainingCenters = [
    {
      name: "Disha Computer Education",
      image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=800",
      rating: 4.8,
      reviews: 12,
      description: "Computer training school offering comprehensive courses with expert instructors.",
      features: ["MS-CIT", "Tally Prime", "Programming", "MS Office"],
      location: "Kolhapur-Radhanagari Rd, Haldi",
      hours: "Open ⋅ Closes 8 pm",
      phone: "0231 241 7071",
      category: "mscit"
    },
    {
      name: "Incite Computer",
      image: "https://images.unsplash.com/photo-1594729095022-e2f6d2eece9c?auto=format&fit=crop&w=800",
      rating: 5.0,
      reviews: 6,
      description: "Corporate office offering professional computer training and IT services.",
      features: ["MS-CIT", "Advanced Programming", "Web Development", "Digital Marketing"],
      location: "Main Rd, Radhanagari",
      hours: "Open ⋅ Closes 8 pm",
      phone: "094232 81767",
      category: "advanced"
    },
    {
      name: "Insight Computers Radhanagari",
      image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=800",
      rating: 4.8,
      reviews: 8,
      description: "Official MS-CIT center offering comprehensive computer training courses with job placement assistance.",
      features: ["MS-CIT", "Tally Prime", "Programming", "MS Office"],
      location: "Near Bus Stand, Radhanagari",
      hours: "Open ⋅ Closes 8 pm",
      category: "mscit"
    },
    {
      name: "Digital Skills Academy",
      image: "https://images.unsplash.com/photo-1594729095022-e2f6d2eece9c?auto=format&fit=crop&w=800",
      rating: 4.6,
      reviews: 10,
      description: "Industry-focused training with practical projects and internship opportunities.",
      features: ["Web Development", "Digital Marketing", "Data Analysis", "Certificate Courses"],
      location: "Main Road, Radhanagari",
      hours: "Open ⋅ Closes 9 pm",
      category: "advanced"
    },
    {
      name: "Tech Career Institute",
      image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800",
      rating: 4.5,
      reviews: 7,
      description: "Affordable computer education tailored for rural students with flexible timings.",
      features: ["Basic Computing", "Tally", "DTP", "MS-CIT"],
      location: "Village Center",
      hours: "Open ⋅ Closes 7 pm",
      category: "basic"
    },
    {
      name: "MKCL Advanced Center",
      image: "https://images.unsplash.com/photo-1598986646512-9330bcc4c0dc?auto=format&fit=crop&w=800",
      rating: 4.9,
      reviews: 15,
      description: "Official MKCL center offering MS-CIT and advanced courses with expert instructors.",
      features: ["MS-CIT", "Advanced Excel", "Advanced Tally", "Programming"],
      location: "Near Post Office, Radhanagari",
      hours: "Open ⋅ Closes 8:30 pm",
      category: "mscit"
    },
    {
      name: "Rural IT Solutions",
      image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800",
      rating: 4.5,
      reviews: 5,
      description: "Affordable computer education tailored for rural students with flexible timings.",
      features: ["Basic Computing", "Tally", "DTP", "Language Support"],
      location: "Village Center",
      hours: "Open ⋅ Closes 7 pm",
      category: "basic"
    }
  ];

  // Filter centers based on search term
  const filterCenters = (type = "all") => {
    return trainingCenters
      .filter(center => 
        center.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
        center.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        center.features.some(feature => feature.toLowerCase().includes(searchTerm.toLowerCase()))
      )
      .filter(center => {
        if (type === "basic") {
          return center.category === "basic";
        } else if (type === "advanced") {
          return center.category === "advanced";
        } else if (type === "mscit") {
          return center.category === "mscit";
        }
        return true;
      });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {showAd && <AdPopup onClose={() => setShowAd(false)} />}
      
      <main className="flex-grow">
        {/* SEO metadata */}
        <div className="hidden">
          <h1>Computer Training Centers in Radhanagari | MS-CIT, Tally, Programming Courses</h1>
          <p>Find the best computer training institutes in Radhanagari. Learn MS-CIT, Tally, programming, digital marketing and more. Affordable courses with expert instructors.</p>
        </div>
      
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
              <div className="relative">
                <Input
                  type="text"
                  placeholder="Search by course, skill or center name..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              </div>
            </div>
            
            <Tabs defaultValue="all" className="max-w-5xl mx-auto">
              <TabsList className="grid grid-cols-4 mb-8">
                <TabsTrigger value="all">All Courses</TabsTrigger>
                <TabsTrigger value="mscit">MS-CIT</TabsTrigger>
                <TabsTrigger value="basic">Basic Skills</TabsTrigger>
                <TabsTrigger value="advanced">Advanced Tech</TabsTrigger>
              </TabsList>

              <TabsContent value="all">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filterCenters().map((center, index) => (
                    <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                      <div className="relative h-48">
                        <img 
                          src={center.image} 
                          alt={center.name} 
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute top-3 right-3 bg-white px-2 py-1 rounded-full text-xs font-medium flex items-center">
                          <span className="text-amber-500 mr-1">★</span>
                          {center.rating} ({center.reviews})
                        </div>
                      </div>
                      <div className="p-4">
                        <h3 className="text-lg font-bold">{center.name}</h3>
                        <p className="text-sm text-gray-700 mb-4">{center.description}</p>
                        <div className="space-y-2">
                          <div className="flex items-center text-sm">
                            <Clock className="w-4 h-4 mr-2 text-gray-500" />
                            <span>{center.hours}</span>
                          </div>
                          <div className="flex items-center text-sm">
                            <MapPin className="w-4 h-4 mr-2 text-gray-500" />
                            <span>{center.location}</span>
                          </div>
                          <div className="flex items-center text-sm">
                            <Computer className="w-4 h-4 mr-2 text-gray-500" />
                            <span>{center.features.join(", ")}</span>
                          </div>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="mscit">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filterCenters("mscit").map((center, index) => (
                    <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                      <div className="relative h-48">
                        <img 
                          src={center.image} 
                          alt={center.name} 
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute top-3 right-3 bg-white px-2 py-1 rounded-full text-xs font-medium flex items-center">
                          <span className="text-amber-500 mr-1">★</span>
                          {center.rating} ({center.reviews})
                        </div>
                      </div>
                      <div className="p-4">
                        <h3 className="text-lg font-bold">{center.name}</h3>
                        <p className="text-sm text-gray-700 mb-4">{center.description}</p>
                        <div className="space-y-2">
                          <div className="flex items-center text-sm">
                            <Clock className="w-4 h-4 mr-2 text-gray-500" />
                            <span>{center.hours}</span>
                          </div>
                          <div className="flex items-center text-sm">
                            <MapPin className="w-4 h-4 mr-2 text-gray-500" />
                            <span>{center.location}</span>
                          </div>
                          <div className="flex items-center text-sm">
                            <Computer className="w-4 h-4 mr-2 text-gray-500" />
                            <span>{center.features.join(", ")}</span>
                          </div>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="basic">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filterCenters("basic").map((center, index) => (
                    <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                      <div className="relative h-48">
                        <img 
                          src={center.image} 
                          alt={center.name} 
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute top-3 right-3 bg-white px-2 py-1 rounded-full text-xs font-medium flex items-center">
                          <span className="text-amber-500 mr-1">★</span>
                          {center.rating} ({center.reviews})
                        </div>
                      </div>
                      <div className="p-4">
                        <h3 className="text-lg font-bold">{center.name}</h3>
                        <p className="text-sm text-gray-700 mb-4">{center.description}</p>
                        <div className="space-y-2">
                          <div className="flex items-center text-sm">
                            <Clock className="w-4 h-4 mr-2 text-gray-500" />
                            <span>{center.hours}</span>
                          </div>
                          <div className="flex items-center text-sm">
                            <MapPin className="w-4 h-4 mr-2 text-gray-500" />
                            <span>{center.location}</span>
                          </div>
                          <div className="flex items-center text-sm">
                            <Computer className="w-4 h-4 mr-2 text-gray-500" />
                            <span>{center.features.join(", ")}</span>
                          </div>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="advanced">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filterCenters("advanced").map((center, index) => (
                    <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                      <div className="relative h-48">
                        <img 
                          src={center.image} 
                          alt={center.name} 
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute top-3 right-3 bg-white px-2 py-1 rounded-full text-xs font-medium flex items-center">
                          <span className="text-amber-500 mr-1">★</span>
                          {center.rating} ({center.reviews})
                        </div>
                      </div>
                      <div className="p-4">
                        <h3 className="text-lg font-bold">{center.name}</h3>
                        <p className="text-sm text-gray-700 mb-4">{center.description}</p>
                        <div className="space-y-2">
                          <div className="flex items-center text-sm">
                            <Clock className="w-4 h-4 mr-2 text-gray-500" />
                            <span>{center.hours}</span>
                          </div>
                          <div className="flex items-center text-sm">
                            <MapPin className="w-4 h-4 mr-2 text-gray-500" />
                            <span>{center.location}</span>
                          </div>
                          <div className="flex items-center text-sm">
                            <Computer className="w-4 h-4 mr-2 text-gray-500" />
                            <span>{center.features.join(", ")}</span>
                          </div>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </InfoSection>

        {/* Popular Courses Section */}
        <InfoSection 
          title="Popular Courses"
          subtitle="Enhance your skills with these in-demand computer courses"
          className="bg-gray-50"
        >
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <Bookmark className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold mb-2">MS-CIT Certification</h3>
                <p className="text-sm text-gray-600 mb-4">
                  The Maharashtra State Certificate in Information Technology (MS-CIT) is a popular computer literacy course designed by MKCL.
                </p>
                <div className="text-sm text-gray-700">
                  <p className="mb-1"><span className="font-medium">Duration:</span> 3 months</p>
                  <p><span className="font-medium">Includes:</span> MS Office, Internet, Email, Digital Literacy</p>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <Bookmark className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Tally Prime</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Essential accounting software training that helps students and professionals manage business finances efficiently.
                </p>
                <div className="text-sm text-gray-700">
                  <p className="mb-1"><span className="font-medium">Duration:</span> 2 months</p>
                  <p><span className="font-medium">Includes:</span> GST, Accounting, Inventory Management</p>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                  <Bookmark className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Web Development</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Learn to create modern websites and web applications with HTML, CSS, JavaScript and more.
                </p>
                <div className="text-sm text-gray-700">
                  <p className="mb-1"><span className="font-medium">Duration:</span> 4 months</p>
                  <p><span className="font-medium">Includes:</span> HTML, CSS, JavaScript, React</p>
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

export default ComputerTraining;
