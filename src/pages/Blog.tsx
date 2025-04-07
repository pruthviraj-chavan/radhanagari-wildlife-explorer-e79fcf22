
import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import InfoSection from "@/components/InfoSection";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Clock, User } from "lucide-react";

// Blog post data
const blogPosts = [
  {
    id: 1,
    slug: "wildlife-conservation-efforts",
    title: "Conservation Efforts in Radhanagari Wildlife Sanctuary",
    excerpt: "A detailed look at the ongoing conservation initiatives to protect the sanctuary's biodiversity.",
    content: `
      <p>Radhanagari Wildlife Sanctuary, nestled in the lush Western Ghats of Maharashtra, has been at the forefront of wildlife conservation efforts in India. Established in 1958, this sanctuary spans over 282 square kilometers and is home to diverse flora and fauna, including the majestic Indian Bison (Gaur), leopards, and various bird species.</p>
      
      <h2>Conservation Initiatives</h2>
      
      <p>The Maharashtra Forest Department, in collaboration with several NGOs, has implemented multiple initiatives to preserve the sanctuary's biodiversity. These include:</p>
      
      <ul>
        <li><strong>Anti-poaching measures:</strong> Regular patrols and surveillance to prevent wildlife poaching.</li>
        <li><strong>Habitat restoration:</strong> Projects to restore degraded habitats within the sanctuary.</li>
        <li><strong>Community involvement:</strong> Programs that engage local communities in conservation efforts, promoting coexistence between humans and wildlife.</li>
        <li><strong>Research and monitoring:</strong> Continuous monitoring of wildlife populations to understand their needs and behaviors.</li>
      </ul>
      
      <h2>Success Stories</h2>
      
      <p>One of the notable success stories of Radhanagari is the increase in the population of the Indian Bison. Through dedicated conservation efforts, their numbers have grown significantly over the past decade. The sanctuary has also seen a rise in leopard sightings, indicating a healthy predator population.</p>
      
      <h2>Challenges</h2>
      
      <p>Despite these successes, the sanctuary faces ongoing challenges, including habitat fragmentation due to encroachment, human-wildlife conflict, and climate change impacts. Addressing these challenges requires continued dedication and innovative approaches.</p>
      
      <h2>Future Prospects</h2>
      
      <p>The future of conservation in Radhanagari looks promising, with plans to expand buffer zones, implement sustainable tourism practices, and enhance ecological research. These efforts aim to ensure the long-term survival of the sanctuary's diverse ecosystem.</p>
      
      <p>As visitors to the sanctuary, we can contribute to conservation efforts by following responsible tourism practices, supporting local conservation initiatives, and spreading awareness about the importance of preserving this natural heritage.</p>
    `,
    author: "Dr. Anjali Sharma",
    date: "April 2, 2025",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=2000",
    category: "Conservation"
  },
  {
    id: 2,
    slug: "best-wildlife-photography-spots",
    title: "Top 5 Wildlife Photography Spots in Radhanagari",
    excerpt: "Discover the best locations for capturing stunning wildlife photographs in the sanctuary.",
    content: `
      <p>Radhanagari Wildlife Sanctuary offers photographers a paradise of opportunities to capture breathtaking images of wildlife in their natural habitat. From dense forests to open grasslands, the sanctuary's diverse landscapes provide the perfect backdrop for wildlife photography.</p>
      
      <h2>1. Dajipur Watch Tower</h2>
      
      <p>Located near the sanctuary's entrance, the Dajipur Watch Tower offers panoramic views of the surrounding landscape. Early mornings here provide excellent opportunities to photograph herds of Indian Bison grazing in the misty meadows. The tower's elevation also makes it ideal for capturing bird species in flight.</p>
      
      <h2>2. Radhanagari Dam Backwaters</h2>
      
      <p>The backwaters of Radhanagari Dam are a hotspot for waterfowl and migratory birds. During winter months (November to February), the area comes alive with various species of ducks, herons, and kingfishers. The calm waters create perfect reflections, adding depth to your photographs.</p>
      
      <h2>3. Kalamma Devi Trail</h2>
      
      <p>This relatively less-explored trail winds through dense forest patches, offering chances to photograph smaller mammals like wild boar, barking deer, and if you're lucky, even leopards. The dappled light filtering through the canopy creates magical conditions for photography, especially during the golden hours.</p>
      
      <h2>4. Savardare Plateau</h2>
      
      <p>This elevated grassland area is known for its population of eagles and vultures. Photographers can capture these majestic birds soaring against the backdrop of the Western Ghats. The plateau also offers sweeping landscape views, perfect for wide-angle photography.</p>
      
      <h2>5. Tulsi Forest Path</h2>
      
      <p>This secluded path is famous for its rich butterfly diversity and small wildlife. Macro photography enthusiasts will find plenty of subjects here, from colorful butterflies to unique insects and reptiles. The path is also lined with wildflowers during the post-monsoon season, adding vibrant colors to your frames.</p>
      
      <h2>Photography Tips</h2>
      
      <ul>
        <li>The best times for wildlife photography are early morning (6:00-9:00 AM) and late afternoon (4:00-6:30 PM).</li>
        <li>A telephoto lens (at least 300mm) is essential for wildlife photography.</li>
        <li>Always maintain a safe distance from animals and follow the sanctuary's guidelines.</li>
        <li>Consider hiring a local guide who knows the best spots for specific wildlife sightings.</li>
        <li>Practice patience – wildlife photography requires time and perseverance.</li>
      </ul>
      
      <p>Remember, as photographers, we have a responsibility to minimize our impact on wildlife and their habitats. Always prioritize the welfare of the animals over getting the "perfect shot."</p>
    `,
    author: "Vikram Patel",
    date: "March 25, 2025",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=800",
    category: "Photography"
  },
  {
    id: 3,
    slug: "monsoon-travel-guide",
    title: "Monsoon Travel Guide: Experiencing Radhanagari's Lush Transformation",
    excerpt: "How to make the most of your visit to the sanctuary during the rainy season.",
    content: `
      <p>The monsoon season transforms Radhanagari Wildlife Sanctuary into a vibrant paradise of gushing waterfalls, emerald forests, and misty mountains. While many travelers avoid visiting wildlife sanctuaries during the rains, monsoon actually offers a unique and magical experience at Radhanagari. This guide will help you plan and enjoy your monsoon visit to this hidden gem of Maharashtra.</p>
      
      <h2>When to Visit During Monsoon</h2>
      
      <p>The monsoon season in Radhanagari typically spans from June to September. While July and August receive the heaviest rainfall, late June and early September offer more moderate rains with intermittent sunny periods. These transitional times are ideal for visitors who want to experience the lushness without constant downpours.</p>
      
      <h2>What to Expect</h2>
      
      <p>During monsoon, the sanctuary transforms dramatically:</p>
      
      <ul>
        <li>The forests turn a vibrant green, with moss-covered trees and blooming wildflowers</li>
        <li>Seasonal waterfalls appear throughout the sanctuary, including the spectacular Dajipur and Manmodi falls</li>
        <li>The Radhanagari Dam reaches full capacity, creating beautiful lakeside vistas</li>
        <li>Mist and fog create ethereal landscapes, especially in the early mornings</li>
        <li>Wildlife sightings may be less frequent but can be more rewarding due to fewer visitors</li>
      </ul>
      
      <h2>Essential Packing List</h2>
      
      <p>Proper preparation is key to enjoying your monsoon visit:</p>
      
      <ul>
        <li>Waterproof backpack and rain cover for your gear</li>
        <li>Quick-dry clothing and extra changes</li>
        <li>Good quality raincoat or poncho (umbrella may not be practical on forest trails)</li>
        <li>Waterproof hiking shoes with good grip</li>
        <li>Plastic zip-lock bags for electronics</li>
        <li>Insect repellent (insects are more active during monsoon)</li>
        <li>Basic medications, including those for cold and fever</li>
        <li>Warm layer for evenings, as it can get chilly after rain</li>
      </ul>
      
      <h2>Best Activities During Monsoon</h2>
      
      <p><strong>Waterfall Visits:</strong> The seasonal waterfalls are the highlight of monsoon visits. Dajipur Waterfall, just a short trek from the main road, is particularly spectacular.</p>
      
      <p><strong>Bird Watching:</strong> Many resident birds are more active during the monsoon breeding season. Look for the Malabar Trogon, Hornbills, and various flycatchers.</p>
      
      <p><strong>Photography:</strong> The dramatic light conditions, mist, and lush landscapes create perfect opportunities for atmospheric nature photography.</p>
      
      <p><strong>Forest Walks:</strong> The sanctuary offers several guided walking trails that are manageable even during monsoon. The fresh air and petrichor (the pleasant smell after rain) make these walks particularly enjoyable.</p>
      
      <h2>Practical Tips</h2>
      
      <ul>
        <li>Check road conditions before traveling, as some routes may be affected by heavy rains</li>
        <li>Book accommodation in advance, as many smaller properties may close during peak monsoon</li>
        <li>Start your day early to make the most of clearer morning weather</li>
        <li>Be flexible with your itinerary, as rain may necessitate sudden changes</li>
        <li>Respect trail closures – they are implemented for your safety</li>
      </ul>
      
      <p>Monsoon visits to Radhanagari require some additional planning and precautions, but the reward is experiencing the sanctuary at its most vibrant and atmospheric. The reduced number of visitors also means a more peaceful communion with nature, making it a special time for those who appreciate the wild beauty of the Western Ghats.</p>
    `,
    author: "Meera Iyer",
    date: "March 15, 2025",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=800",
    category: "Travel Guide"
  },
  {
    id: 4,
    slug: "gaur-conservation",
    title: "Gaur Conservation: Success Story of Radhanagari",
    excerpt: "How dedicated conservation efforts have helped increase the population of Indian Bison in the sanctuary.",
    content: `
      <p>The Indian Bison, or Gaur (Bos gaurus), stands as one of the most magnificent inhabitants of Radhanagari Wildlife Sanctuary. As the largest bovine in the world, these impressive creatures can weigh up to 1,000 kg and stand over 6 feet tall at the shoulder. Their conservation journey in Radhanagari represents one of India's notable wildlife success stories, demonstrating how dedicated conservation efforts can bring a species back from the brink.</p>
      
      <h2>Historical Decline</h2>
      
      <p>By the 1970s, the Gaur population in Radhanagari had dwindled alarmingly due to several factors:</p>
      
      <ul>
        <li>Habitat loss from deforestation and agricultural expansion</li>
        <li>Poaching for meat, horns, and hides</li>
        <li>Disease transmission from domestic cattle</li>
        <li>Human-wildlife conflict as settlements expanded near forest boundaries</li>
      </ul>
      
      <p>In 1975, surveys estimated that fewer than 75 Gaur remained in the sanctuary, raising serious concerns about their local extinction.</p>
      
      <h2>The Conservation Turnaround</h2>
      
      <p>The Maharashtra Forest Department, recognizing the gravity of the situation, implemented a comprehensive conservation plan in the early 1980s. This multi-faceted approach included:</p>
      
      <h3>1. Habitat Protection and Restoration</h3>
      
      <p>Critical Gaur habitats were identified and given special protection status. Grasslands, essential for Gaur feeding, were actively managed and restored. Water holes were constructed throughout the sanctuary to ensure year-round water availability, especially during dry months.</p>
      
      <h3>2. Anti-poaching Measures</h3>
      
      <p>A dedicated anti-poaching unit was established with regular patrols and surveillance. Local informant networks were developed to gather intelligence on poaching activities. Stricter enforcement of wildlife protection laws significantly reduced illegal hunting.</p>
      
      <h3>3. Disease Management</h3>
      
      <p>Buffer zones were established between forest areas and villages to minimize contact between wild Gaur and domestic cattle. Vaccination programs for livestock in peripheral villages helped prevent disease transmission. Regular health monitoring of Gaur populations was implemented to detect and address disease outbreaks.</p>
      
      <h3>4. Community Engagement</h3>
      
      <p>The most innovative aspect of the conservation program was the involvement of local communities. Village forest committees were formed, giving local people a stake in conservation outcomes. Alternative livelihood options were provided to reduce dependence on forest resources. Conservation education programs built awareness and pride in the local wildlife heritage.</p>
      
      <h2>Results and Current Status</h2>
      
      <p>The comprehensive conservation efforts have yielded remarkable results:</p>
      
      <ul>
        <li>As of 2025, the Gaur population in Radhanagari has grown to an estimated 350-400 individuals</li>
        <li>The age structure of the population indicates healthy reproduction rates</li>
        <li>Gaur herds have expanded their range within the sanctuary</li>
        <li>Human-Gaur conflicts have decreased by over 60% in the past decade</li>
      </ul>
      
      <h2>Ongoing Challenges</h2>
      
      <p>Despite these successes, Gaur conservation in Radhanagari continues to face challenges:</p>
      
      <ul>
        <li>Habitat fragmentation due to infrastructure development</li>
        <li>Climate change affecting grassland productivity</li>
        <li>Occasional disease outbreaks</li>
        <li>Managing the growing Gaur population within the limited sanctuary area</li>
      </ul>
      
      <h2>Lessons for Conservation</h2>
      
      <p>The Gaur conservation success at Radhanagari offers valuable lessons for wildlife conservation globally:</p>
      
      <ul>
        <li>Holistic approaches addressing multiple threat factors simultaneously are most effective</li>
        <li>Long-term commitment is essential – meaningful results take decades, not years</li>
        <li>Local community involvement is critical to sustainable conservation outcomes</li>
        <li>Regular monitoring and adaptive management allow for course correction when needed</li>
      </ul>
      
      <p>Today, the sight of a Gaur herd moving majestically through Radhanagari's forests serves as living proof that with dedication, scientific management, and community support, wildlife conservation can achieve remarkable success. Visitors to the sanctuary now have an excellent chance of encountering these impressive creatures – a living testament to conservation perseverance.</p>
    `,
    author: "Dr. Rajesh Kumar",
    date: "March 5, 2025",
    readTime: "9 min read",
    image: "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&w=800",
    category: "Conservation"
  },
  {
    id: 5,
    slug: "traditional-kolhapuri-cuisine",
    title: "The Rich Heritage of Traditional Kolhapuri Cuisine Around Radhanagari",
    excerpt: "Exploring the unique flavors and culinary traditions of the Kolhapur region near the wildlife sanctuary.",
    content: `
      <p>The Kolhapur region surrounding Radhanagari Wildlife Sanctuary is not only rich in biodiversity but also boasts a distinctive culinary heritage that has evolved over centuries. Traditional Kolhapuri cuisine, known for its bold flavors and unique preparation techniques, offers visitors a taste of local culture that complements their wildlife experience.</p>
      
      <h2>The Roots of Kolhapuri Cuisine</h2>
      
      <p>Kolhapuri cuisine has been shaped by several historical and geographical factors:</p>
      
      <ul>
        <li>The region's historical status as the seat of the Maratha Empire</li>
        <li>The fertile black soil supporting diverse agricultural produce</li>
        <li>Proximity to the Western Ghats, providing access to forest ingredients</li>
        <li>The arid climate that necessitated food preservation techniques</li>
      </ul>
      
      <p>Together, these influences have created a cuisine known for its distinctive spiciness, complex flavors, and hearty character.</p>
      
      <h2>Signature Dishes of the Region</h2>
      
      <h3>Tambda Rassa (Red Curry)</h3>
      
      <p>This fiery red curry is perhaps Kolhapur's most famous culinary export. Traditionally prepared with mutton, the dish gets its characteristic color and heat from a special spice mix called Kolhapuri masala. Unlike many Indian curries, Tambda Rassa uses minimal tomatoes, relying instead on dried red chilies for its vibrant hue. The curry is typically enjoyed with bhakri (a millet flatbread) or rice.</p>
      
      <h3>Pandhra Rassa (White Curry)</h3>
      
      <p>The cooler counterpart to Tambda Rassa, this coconut-based curry provides a soothing contrast while maintaining complex flavors. The curry's white color comes from coconut milk and ground coconut, combined with a different set of spices that are more aromatic than fiery. The two rassas are traditionally served together as a balanced meal.</p>
      
      <h3>Kolhapuri Misal</h3>
      
      <p>Unlike the Misal found in other parts of Maharashtra, Kolhapuri Misal is significantly spicier and more robust. This hearty breakfast dish combines sprouted moth beans with a spicy curry, topped with farsan (crunchy savory mix), onions, and cilantro. It's typically served with pav (soft rolls) and is a favorite among locals for its filling nature and intense flavor profile.</p>
      
      <h3>Thali Peeth</h3>
      
      <p>This multigrain flatbread uses a blend of flours including jowar (sorghum), bajra (pearl millet), wheat, rice, and besan (chickpea flour), along with various spices. The diverse grains not only create a complex flavor but also make this dish highly nutritious. Traditionally cooked on an earthen griddle, Thali Peeth is typically served with thecha (a coarse chutney of chilies and garlic) and fresh homemade butter.</p>
      
      <h2>Local Ingredients and Techniques</h2>
      
      <p>Several distinctive elements characterize Kolhapuri cooking:</p>
      
      <h3>Kolhapuri Masala</h3>
      
      <p>The heart of many local dishes is this spice blend, made by dry-roasting and grinding over 14 different spices. Unlike commercial versions, traditional Kolhapuri masala is hand-ground using stone mortars, which practitioners believe releases oils and flavors differently from machine grinding.</p>
      
      <h3>Kanda-Lasun Masala</h3>
      
      <p>This paste of caramelized onions and garlic forms the base of many Kolhapuri curries. The slow cooking process transforms the sharp flavors into a sweet, complex foundation that supports the spicier elements of the dishes.</p>
      
      <h3>Kokum</h3>
      
      <p>This dried fruit from the mangosteen family adds a subtle sourness to Kolhapuri dishes. Unlike the tanginess of tamarind or lemon used in other regional cuisines, kokum provides a gentler acidity that balances the heat without overwhelming other flavors.</p>
      
      <h2>Forest-Inspired Ingredients</h2>
      
      <p>The proximity to Radhanagari and other forests has influenced local cuisine through the incorporation of forest-gathered ingredients:</p>
      
      <ul>
        <li><strong>Wild mushrooms</strong> - Collected during monsoon, these add earthy flavors to select dishes</li>
        <li><strong>Bamboo shoots</strong> - Harvested young and prepared in various pickles and stir-fries</li>
        <li><strong>Tribal herbs</strong> - Various aromatic herbs from the Western Ghats add unique flavors</li>
      </ul>
      
      <h2>Where to Experience Authentic Kolhapuri Cuisine</h2>
      
      <p>Visitors to Radhanagari can experience authentic local cuisine at:</p>
      
      <ul>
        <li><strong>Village homestays</strong> - Several homestays around the sanctuary offer home-cooked meals using traditional recipes</li>
        <li><strong>Kokanacha Chulha</strong> - A renowned local restaurant focusing on traditional wood-fired cooking</li>
        <li><strong>Gavran Katta</strong> - Known for authentic village-style preparations using local ingredients</li>
        <li><strong>Weekly markets</strong> - The Sunday market near Dajipur features food stalls serving regional specialties</li>
      </ul>
      
      <h2>The Future of Kolhapuri Cuisine</h2>
      
      <p>While traditional cooking methods and recipes face challenges from modernization and changing lifestyles, several initiatives are helping preserve this culinary heritage:</p>
      
      <ul>
        <li>Culinary documentation projects recording traditional recipes from elderly community members</li>
        <li>Food festivals celebrating regional cuisine</li>
        <li>Tourism initiatives incorporating culinary experiences into wildlife visits</li>
      </ul>
      
      <p>For visitors to Radhanagari Wildlife Sanctuary, exploring the local cuisine adds another dimension to understanding the region's culture and heritage. The bold flavors of Kolhapuri cuisine provide a fitting complement to the vibrant natural experiences the sanctuary offers.</p>
    `,
    author: "Priya Deshmukh",
    date: "February 25, 2025",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=800",
    category: "Cuisine"
  }
];

// Blog Page Component
const Blog = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  
  // Get unique categories
  const categories = [...new Set(blogPosts.map(post => post.category))];
  
  // Filter posts based on search and category
  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "" || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <InfoSection
          title="Radhanagari Blog"
          subtitle="Stories, guides, and wildlife insights from Maharashtra's natural paradise"
          className="bg-gray-50"
        >
          {/* Search and Filter */}
          <div className="max-w-5xl mx-auto mb-8 flex flex-col sm:flex-row gap-4 px-4">
            <input
              type="text"
              placeholder="Search posts..."
              className="flex-grow p-2 border rounded-md"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="p-2 border rounded-md min-w-[150px]"
            >
              <option value="">All Categories</option>
              {categories.map(category => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>
          </div>
          
          {/* Blog Posts */}
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
            {filteredPosts.map((post) => (
              <Link to={`/blog/${post.slug}`} key={post.id} className="hover:no-underline">
                <Card className="overflow-hidden h-full hover:shadow-lg transition-shadow">
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform hover:scale-105"
                    />
                  </div>
                  <CardHeader>
                    <div className="text-sm text-primary font-medium mb-1">{post.category}</div>
                    <CardTitle className="line-clamp-2">{post.title}</CardTitle>
                    <CardDescription className="line-clamp-3">{post.excerpt}</CardDescription>
                  </CardHeader>
                  <CardFooter className="text-sm text-gray-500 flex justify-between items-center">
                    <div className="flex items-center gap-1">
                      <Calendar size={14} />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock size={14} />
                      <span>{post.readTime}</span>
                    </div>
                  </CardFooter>
                </Card>
              </Link>
            ))}
          </div>
          
          {filteredPosts.length === 0 && (
            <div className="text-center py-8">
              <p className="text-lg text-gray-500">No blog posts found matching your search.</p>
            </div>
          )}
        </InfoSection>
      </main>
      
      <Footer />
    </div>
  );
};

export default Blog;
