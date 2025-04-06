import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import InfoSection from "@/components/InfoSection";
import { MapPin, Camera, Trees } from "lucide-react";

const wildlifeData = [
  {
    id: 1,
    name: {
      en: "Indian Bison (Gaur)",
      mr: "भारतीय गौर",
    },
    scientificName: "Bos gaurus",
    description: {
      en: "The Indian Bison, locally known as Gaur, is one of the major attractions of Radhanagari. These magnificent herbivores can be spotted in the grasslands, especially during early mornings.",
      mr: "भारतीय गौर, स्थानिक पातळीवर गवा म्हणून ओळखले जाते, राधानगरीच्या प्रमुख आकर्षणांपैकी एक आहे. हे भव्य शाकाहारी गवताळ प्रदेशात, विशेषत: पहाटे पाहिले जाऊ शकतात.",
    },
    image: "https://source.unsplash.com/featured/?bison,gaur",
    sightingChance: "common" as "common" | "uncommon" | "rare" | "very-rare",
    bestTimeToSpot: "March to June",
  },
  {
    id: 2,
    name: {
      en: "Leopard",
      mr: "बिबट्या",
    },
    scientificName: "Panthera pardus",
    description: {
      en: "The elusive Leopard is a top predator in Radhanagari. Sightings are rare but possible, especially during night safaris or early mornings near water bodies.",
      mr: "दुर्लभ बिबट्या राधानगरीतील सर्वोच्च शिकारी आहे. रात्रीच्या सफारीमध्ये किंवा पाण्याच्या साठ्याजवळ सकाळी लवकर दिसण्याची शक्यता कमी असली तरी आहे.",
    },
    image: "https://source.unsplash.com/featured/?leopard,wildlife",
    sightingChance: "rare" as "common" | "uncommon" | "rare" | "very-rare",
    bestTimeToSpot: "November to February",
  },
  {
    id: 3,
    name: {
      en: "Sloth Bear",
      mr: "अस्वल",
    },
    scientificName: "Melursus ursinus",
    description: {
      en: "Sloth Bears are often seen foraging for insects and fruits. They are more active during the monsoon and post-monsoon seasons.",
      mr: "अस्वल बहुतेक वेळा कीटक आणि फळे शोधताना दिसतात. ते पावसाळ्यात आणि पावसाळ्यानंतरच्या काळात अधिक सक्रिय असतात.",
    },
    image: "https://source.unsplash.com/featured/?bear,wildlife",
    sightingChance: "uncommon" as "common" | "uncommon" | "rare" | "very-rare",
    bestTimeToSpot: "June to October",
  },
  {
    id: 4,
    name: {
      en: "Giant Squirrel",
      mr: "जायंट खार",
    },
    scientificName: "Ratufa indica",
    description: {
      en: "The Malabar Giant Squirrel, with its colorful fur, is a treat to watch as it leaps from tree to tree.",
      mr: "मलबार जायंट खार, त्याच्या रंगीबेरंगी फरसह, एका झाडावरून दुसर्‍या झाडावर उडी मारताना पाहणे आनंददायी आहे.",
    },
    image: "https://source.unsplash.com/featured/?squirrel",
    sightingChance: "common" as "common" | "uncommon" | "rare" | "very-rare",
    bestTimeToSpot: "Year-round",
  },
  {
    id: 5,
    name: {
      en: "Malabar Giant Squirrel",
      mr: "मलबार जायंट खार",
    },
    scientificName: "Ratufa indica",
    description: {
      en: "With their vibrant multi-colored fur and impressive size, the Malabar Giant Squirrels are a delight to spot in the canopies of Radhanagari's forests.",
      mr: "त्यांच्या जीवंत मल्टी-कलर फर आणि प्रभावशाली आकारासह, मलबार जायंट स्क्वरल्स राधानगरीच्या जंगलांच्या कॅनोपीजमध्ये पाहण्यास आनंददायी आहेत.",
    },
    image: "https://source.unsplash.com/featured/?squirrel,giant",
    sightingChance: "uncommon" as "common" | "uncommon" | "rare" | "very-rare",
    bestTimeToSpot: "October to February",
  },
];

const WildlifeSafari = () => {
  const [language, setLanguage] = useState<"en" | "mr">("en");

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar onLanguageChange={(lang) => setLanguage(lang)} />

      <InfoSection
        title={
          language === "en"
            ? "Wildlife & Safari"
            : "वन्यजीव आणि सफारी"
        }
        subtitle={
          language === "en"
            ? "Explore the diverse wildlife of Radhanagari Wildlife Sanctuary. Book your safari today!"
            : "राधानगरी वन्यजीव अभयारण्यातील विविध वन्यजीव एक्सप्लोर करा. आजच तुमची सफारी बुक करा!"
        }
        gradient="sunset-gradient text-white"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {wildlifeData.map((animal) => (
            <div
              key={animal.id}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
            >
              <img
                src={animal.image}
                alt={language === "en" ? animal.name.en : animal.name.mr}
                className="w-full h-48 object-cover"
              />
              <div className="p-5">
                <h3 className="text-xl font-bold mb-2">
                  {language === "en" ? animal.name.en : animal.name.mr}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {language === "en"
                    ? animal.description.en
                    : animal.description.mr}
                </p>
                <div className="flex items-center text-sm text-gray-500 mb-2">
                  <Trees className="mr-2 h-4 w-4" />
                  {language === "en" ? "Best Time:" : "उत्तम वेळ:"}
                  {animal.bestTimeToSpot}
                </div>
                <div className="flex items-center text-sm text-gray-500">
                  <Camera className="mr-2 h-4 w-4" />
                  {language === "en" ? "Sighting:" : "दिसण्याची शक्यता:"}
                  {animal.sightingChance}
                </div>
              </div>
            </div>
          ))}
        </div>

        <InfoSection
          title={
            language === "en"
              ? "Plan Your Visit"
              : "तुमच्या भेटीची योजना करा"
          }
          subtitle={
            language === "en"
              ? "Essential information for planning your safari."
              : "तुमच्या सफारीची योजना करण्यासाठी आवश्यक माहिती."
          }
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div>
              <h4 className="text-lg font-semibold mb-2">
                {language === "en" ? "Safari Booking" : "सफारी बुकिंग"}
              </h4>
              <p className="text-gray-600 mb-4">
                {language === "en"
                  ? "Book your safari in advance through the Forest Department website or at the entrance."
                  : "वन विभागाच्या वेबसाइटद्वारे किंवा प्रवेशद्वारावर तुमची सफारी आगाऊ बुक करा."}
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-2">
                {language === "en" ? "Timings" : "वेळा"}
              </h4>
              <p className="text-gray-600 mb-4">
                {language === "en"
                  ? "Morning safaris start at 6:00 AM, and evening safaris start at 3:00 PM."
                  : "सकाळची सफारी सकाळी 6:00 वाजता सुरू होते आणि संध्याकाळची सफारी दुपारी 3:00 वाजता सुरू होते."}
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-2">
                {language === "en" ? "What to Bring" : "काय आणावे"}
              </h4>
              <ul className="list-disc pl-5 text-gray-600">
                <li>
                  {language === "en" ? "Comfortable clothing" : "आरामदायक कपडे"}
                </li>
                <li>
                  {language === "en" ? "Binoculars" : "दूरबीन"}
                </li>
                <li>
                  {language === "en" ? "Camera" : "कॅमेरा"}
                </li>
                <li>
                  {language === "en" ? "Insect repellent" : "कीटकनाशक"}
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-2">
                {language === "en" ? "Location" : "स्थान"}
              </h4>
              <p className="text-gray-600 mb-4 flex items-center">
                <MapPin className="mr-2 h-4 w-4" />
                Radhanagari Wildlife Sanctuary, Kolhapur, Maharashtra
              </p>
            </div>
          </div>
        </InfoSection>
      </InfoSection>

      <Footer />
    </div>
  );
};

export default WildlifeSafari;
