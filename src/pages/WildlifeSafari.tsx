
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
    },
    scientificName: "Bos gaurus",
    description: {
      en: "The Indian Bison, locally known as Gaur, is one of the major attractions of Radhanagari. These magnificent herbivores can be spotted in the grasslands, especially during early mornings.",
    },
    image: "https://source.unsplash.com/featured/?bison,gaur",
    sightingChance: "common" as "common" | "uncommon" | "rare" | "very-rare",
    bestTimeToSpot: "March to June",
  },
  {
    id: 2,
    name: {
      en: "Leopard",
    },
    scientificName: "Panthera pardus",
    description: {
      en: "The elusive Leopard is a top predator in Radhanagari. Sightings are rare but possible, especially during night safaris or early mornings near water bodies.",
    },
    image: "https://source.unsplash.com/featured/?leopard,wildlife",
    sightingChance: "rare" as "common" | "uncommon" | "rare" | "very-rare",
    bestTimeToSpot: "November to February",
  },
  {
    id: 3,
    name: {
      en: "Sloth Bear",
    },
    scientificName: "Melursus ursinus",
    description: {
      en: "Sloth Bears are often seen foraging for insects and fruits. They are more active during the monsoon and post-monsoon seasons.",
    },
    image: "https://source.unsplash.com/featured/?bear,wildlife",
    sightingChance: "uncommon" as "common" | "uncommon" | "rare" | "very-rare",
    bestTimeToSpot: "June to October",
  },
  {
    id: 4,
    name: {
      en: "Giant Squirrel",
    },
    scientificName: "Ratufa indica",
    description: {
      en: "The Malabar Giant Squirrel, with its colorful fur, is a treat to watch as it leaps from tree to tree.",
    },
    image: "https://source.unsplash.com/featured/?squirrel",
    sightingChance: "common" as "common" | "uncommon" | "rare" | "very-rare",
    bestTimeToSpot: "Year-round",
  },
  {
    id: 5,
    name: {
      en: "Malabar Giant Squirrel",
    },
    scientificName: "Ratufa indica",
    description: {
      en: "With their vibrant multi-colored fur and impressive size, the Malabar Giant Squirrels are a delight to spot in the canopies of Radhanagari's forests.",
    },
    image: "https://source.unsplash.com/featured/?squirrel,giant",
    sightingChance: "uncommon" as "common" | "uncommon" | "rare" | "very-rare",
    bestTimeToSpot: "October to February",
  },
];

const WildlifeSafari = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <InfoSection
        title="Wildlife & Safari"
        subtitle="Explore the diverse wildlife of Radhanagari Wildlife Sanctuary. Book your safari today!"
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
                alt={animal.name.en}
                className="w-full h-48 object-cover"
              />
              <div className="p-5">
                <h3 className="text-xl font-bold mb-2">
                  {animal.name.en}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {animal.description.en}
                </p>
                <div className="flex items-center text-sm text-gray-500 mb-2">
                  <Trees className="mr-2 h-4 w-4" />
                  Best Time: {animal.bestTimeToSpot}
                </div>
                <div className="flex items-center text-sm text-gray-500">
                  <Camera className="mr-2 h-4 w-4" />
                  Sighting: {animal.sightingChance}
                </div>
              </div>
            </div>
          ))}
        </div>

        <InfoSection
          title="Plan Your Visit"
          subtitle="Essential information for planning your safari."
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div>
              <h4 className="text-lg font-semibold mb-2">
                Safari Booking
              </h4>
              <p className="text-gray-600 mb-4">
                Book your safari in advance through the Forest Department website or at the entrance.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-2">
                Timings
              </h4>
              <p className="text-gray-600 mb-4">
                Morning safaris start at 6:00 AM, and evening safaris start at 3:00 PM.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-2">
                What to Bring
              </h4>
              <ul className="list-disc pl-5 text-gray-600">
                <li>
                  Comfortable clothing
                </li>
                <li>
                  Binoculars
                </li>
                <li>
                  Camera
                </li>
                <li>
                  Insect repellent
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-2">
                Location
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
