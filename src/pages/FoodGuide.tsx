
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import InfoSection from "@/components/InfoSection";
import FoodCard from "@/components/FoodCard";
import Footer from "@/components/Footer";
import { Utensils, Award, Leaf } from "lucide-react";

const FoodGuide = () => {
  const traditionalDishes = [
    {
      name: "Tambda Rassa",
      localName: "तांबडा रस्सा",
      description: "Fiery red mutton curry with Kolhapuri masala, known for its complex flavors and heat from red chilies.",
      image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=800",
      isVeg: false,
      isSpicy: 3
    },
    {
      name: "Pandhra Rassa",
      localName: "पांढरा रस्सा",
      description: "White coconut-based chicken broth that offers a more subtle flavor compared to its red counterpart.",
      image: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=800",
      isVeg: false,
      isSpicy: 2
    },
    {
      name: "Kolhapuri Chicken Sukka",
      localName: "कोल्हापूरी चिकन सुक्का",
      description: "Dry chicken dish with bold spices, coconut, and a perfectly balanced heat level.",
      image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=800",
      isVeg: false,
      isSpicy: 3
    },
    {
      name: "Doodh Saar",
      localName: "दूध सार",
      description: "Comforting spiced milk soup with rice, often enjoyed as a soothing counterpart to spicier dishes.",
      image: "https://images.unsplash.com/photo-1612103198005-b238154f4590?auto=format&fit=crop&w=800",
      isVeg: true,
      isSpicy: 1
    }
  ];

  const localSpecialties = [
    {
      name: "Jungle Bhakri",
      localName: "जंगली भाकरी",
      description: "Thick, rustic bread made from local grains, traditionally cooked on an open flame for a smoky flavor.",
      image: "https://images.unsplash.com/photo-1605883705077-8d3d3cebe78c?auto=format&fit=crop&w=800",
      isVeg: true,
      isSpicy: 1
    },
    {
      name: "Bamboo Pickle",
      localName: "बांबूचे लोणचे",
      description: "Unique pickle made from young bamboo shoots, offering a tangy and slightly spicy flavor profile.",
      image: "https://images.unsplash.com/photo-1589135233689-8775d67b0978?auto=format&fit=crop&w=800",
      isVeg: true,
      isSpicy: 2
    },
    {
      name: "Forest Honey",
      localName: "जंगली मध",
      description: "Pure, raw honey collected from the sanctuary's forests, with distinct floral notes from native plants.",
      image: "https://images.unsplash.com/photo-1587049352851-8d4e89133924?auto=format&fit=crop&w=800",
      isVeg: true,
      isSpicy: 1
    },
    {
      name: "Wild Mushroom Curry",
      localName: "जंगली मशरूम करी",
      description: "Seasonal curry made with foraged mushrooms, offering unique earthy flavors from the sanctuary.",
      image: "https://images.unsplash.com/photo-1582576163090-09d2897fa09a?auto=format&fit=crop&w=800",
      isVeg: true,
      isSpicy: 2
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <Hero 
          title="Radhanagari Food Guide"
          subtitle="Explore authentic Kolhapuri cuisine and traditional forest recipes"
          image="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=2000"
        />
        
        <InfoSection 
          title="Authentic Local Cuisine"
          subtitle="Radhanagari is not only about jungles – it's also a heaven for food lovers"
        >
          <div className="max-w-3xl mx-auto text-center mb-12">
            <p className="text-gray-600">
              The region's cuisine is characterized by bold flavors, aromatic spices, and traditional cooking methods 
              passed down through generations. Whether you're a spice enthusiast or prefer milder flavors, 
              the local food scene offers something for everyone.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-12 h-12 forest-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                <Utensils className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Traditional Methods</h3>
              <p className="text-gray-600">
                Many local dishes are still prepared using traditional clay pots and wood fires, enhancing their authentic flavor.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-12 h-12 sunset-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Kolhapuri Masala</h3>
              <p className="text-gray-600">
                The famous spice blend from this region is hand-ground using 14+ spices to create the distinctive heat and flavor.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-12 h-12 wildflower-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                <Leaf className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Forest Ingredients</h3>
              <p className="text-gray-600">
                Many local recipes incorporate foraged ingredients from the sanctuary like wild herbs, mushrooms, and honey.
              </p>
            </div>
          </div>
        </InfoSection>
        
        <InfoSection 
          title="Traditional Kolhapuri Dishes"
          subtitle="Bold flavors and spices that define the region's cuisine"
          className="bg-gray-50"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {traditionalDishes.map((dish, index) => (
              <FoodCard 
                key={index}
                name={dish.name}
                localName={dish.localName}
                description={dish.description}
                image={dish.image}
                isVeg={dish.isVeg}
                isSpicy={dish.isSpicy}
              />
            ))}
          </div>
        </InfoSection>
        
        <InfoSection 
          title="Radhanagari Local Specialties"
          subtitle="Unique dishes with ingredients sourced from the sanctuary"
          gradient="forest-gradient"
          textColor="text-white"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {localSpecialties.map((dish, index) => (
              <FoodCard 
                key={index}
                name={dish.name}
                localName={dish.localName}
                description={dish.description}
                image={dish.image}
                isVeg={dish.isVeg}
                isSpicy={dish.isSpicy}
              />
            ))}
          </div>
        </InfoSection>
        
        <InfoSection 
          title="Where to Eat"
          subtitle="Best places to experience authentic local cuisine"
        >
          <div className="bg-white rounded-lg shadow-md overflow-hidden max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=800" 
                  alt="Local restaurant" 
                  className="h-full w-full object-cover"
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-4">Top Local Eateries</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="bg-green-100 text-green-800 text-xs font-semibold px-2 py-1 rounded mr-2 mt-1">1</span>
                    <div>
                      <h4 className="font-medium">Radha's Kitchen</h4>
                      <p className="text-sm text-gray-600">Family-run restaurant serving authentic Kolhapuri thalis near the sanctuary entrance</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-green-100 text-green-800 text-xs font-semibold px-2 py-1 rounded mr-2 mt-1">2</span>
                    <div>
                      <h4 className="font-medium">Forest Edge Cafe</h4>
                      <p className="text-sm text-gray-600">Scenic spot with panoramic views and speciality forest-inspired dishes</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-green-100 text-green-800 text-xs font-semibold px-2 py-1 rounded mr-2 mt-1">3</span>
                    <div>
                      <h4 className="font-medium">Spice Route</h4>
                      <p className="text-sm text-gray-600">Modern restaurant offering traditional dishes with a contemporary twist</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-green-100 text-green-800 text-xs font-semibold px-2 py-1 rounded mr-2 mt-1">4</span>
                    <div>
                      <h4 className="font-medium">Homebaked</h4>
                      <p className="text-sm text-gray-600">Bakery and cafe famous for fresh bread and local sweet treats</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </InfoSection>
      </main>
      
      <Footer />
    </div>
  );
};

export default FoodGuide;
