
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import InfoSection from "@/components/InfoSection";
import { Star } from "lucide-react";

interface FoodItem {
  id: number;
  name: {
    en: string;
    mr: string;
  };
  description: {
    en: string;
    mr: string;
  };
  image: string;
  spiceLevel: 1 | 2 | 3;
  veg: boolean;
}

const foodItems = [
  {
    id: 1,
    name: {
      en: "Kolhapuri Tambda Rassa",
      mr: "कोल्हापूरी तांबडा रस्सा",
    },
    description: {
      en: "Fiery red mutton curry with distinctive Kolhapuri masala",
      mr: "अनोखे कोल्हापूरी मसाल्यासह फायरी रेड मटण करी",
    },
    image: "https://source.unsplash.com/featured/?curry,spicy",
    spiceLevel: 3 as 1 | 2 | 3,
    veg: false,
  },
  {
    id: 2,
    name: {
      en: "Kolhapuri Pandhra Rassa",
      mr: "कोल्हापुरी पांढरा रस्सा",
    },
    description: {
      en: "Mild white gravy with coconut and spices, often made with chicken or mutton stock",
      mr: "नारळ आणि मसाल्यांनी बनवलेली सौम्य पांढरी ग्रेव्ही, बहुतेक वेळा चिकन किंवा मटण स्टॉक वापरून बनवलेली",
    },
    image: "https://source.unsplash.com/featured/?whitecurry",
    spiceLevel: 1,
    veg: false,
  },
  {
    id: 3,
    name: {
      en: "Misal Pav",
      mr: "मिसळ पाव",
    },
    description: {
      en: "Spicy lentil curry topped with farsan, onions, and coriander, served with pav (bread rolls)",
      mr: "मसालेदार मसूर करी फरसाण, कांदे आणि कोथिंबीर घालून सजवलेली, पाव (ब्रेड रोल) बरोबर सर्व्ह केली जाते",
    },
    image: "https://source.unsplash.com/featured/?misalpav",
    spiceLevel: 3,
    veg: true,
  },
  {
    id: 4,
    name: {
      en: "Thalipeeth",
      mr: "थालीपीठ",
    },
    description: {
      en: "Savory multi-grain pancake, often served with white butter or yogurt",
      mr: "चविष्ट मल्टी-ग्रेन पॅनकेक, बहुतेक वेळा पांढरे लोणी किंवा दही बरोबर सर्व्ह केले जाते",
    },
    image: "https://source.unsplash.com/featured/?pancake,indian",
    spiceLevel: 2,
    veg: true,
  },
  {
    id: 5,
    name: {
      en: "Pandhra Rassa",
      mr: "पांढरा रस्सा",
    },
    description: {
      en: "Coconut-based white chicken curry, milder counterpart to Tambda Rassa",
      mr: "नारळावर आधारित पांढरी चिकन करी, तांबडा रस्साचा सौम्य समकक्ष",
    },
    image: "https://source.unsplash.com/featured/?whitecurry,chicken",
    spiceLevel: 2 as 1 | 2 | 3,
    veg: false,
  },
];

const FoodGuide = () => {
  const [language, setLanguage] = useState<"en" | "mr">("en");

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <InfoSection
        title={language === "en" ? "Food Guide" : "खाद्य मार्गदर्शक"}
        subtitle={
          language === "en"
            ? "Explore the local cuisine of Radhanagari and Kolhapur"
            : "राधानगरी आणि कोल्हापूरच्या स्थानिक खाद्यपदार्थांचा शोध घ्या"
        }
        gradient="sunset-gradient text-white"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {foodItems.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
            >
              <img
                src={item.image}
                alt={language === "en" ? item.name.en : item.name.mr}
                className="w-full h-48 object-cover"
              />
              <div className="p-5">
                <h3 className="text-xl font-bold mb-2">
                  {language === "en" ? item.name.en : item.name.mr}
                </h3>
                <p className="text-gray-600 mb-4">
                  {language === "en" ? item.description.en : item.description.mr}
                </p>
                <div className="flex items-center mb-4">
                  <span className="text-sm text-gray-500 mr-2">
                    {language === "en" ? "Spice Level:" : "मसाल्याची पातळी:"}
                  </span>
                  {[...Array(item.spiceLevel)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-500" />
                  ))}
                </div>
                <div className="flex items-center">
                  <span className="text-sm text-gray-500 mr-2">
                    {language === "en" ? "Vegetarian:" : "शाकाहारी:"}
                  </span>
                  <span className={item.veg ? "text-green-600" : "text-red-600"}>
                    {item.veg ? (language === "en" ? "Yes" : "होय") : language === "en" ? "No" : "नाही"}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </InfoSection>

      <Footer />
    </div>
  );
};

export default FoodGuide;
