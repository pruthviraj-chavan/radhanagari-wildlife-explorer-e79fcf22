
import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import InfoSection from "@/components/InfoSection";
import { blogPosts } from "@/data/blogData";

const Blog = () => {
  const [language, setLanguage] = useState<"en" | "mr">("en");

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar onLanguageChange={(lang) => setLanguage(lang)} />
      
      <InfoSection 
        title={language === "en" ? "Blog & Articles" : "ब्लॉग आणि लेख"}
        subtitle={language === "en" 
          ? "Discover stories, guides and insights about Radhanagari Wildlife Sanctuary" 
          : "राधानगरी वन्यजीव अभयारण्याबद्दल कथा, मार्गदर्शक आणि माहिती शोधा"}
        gradient="forest-gradient text-white"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {blogPosts.map((post) => (
            <div key={post.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <img 
                src={post.image} 
                alt={language === "en" ? post.title.en : post.title.mr} 
                className="w-full h-48 object-cover"
              />
              <div className="p-5">
                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <span>{post.date}</span>
                  <span className="mx-2">•</span>
                  <span>{post.readTime} {language === "en" ? "min read" : "मिनिट वाचन"}</span>
                </div>
                <h3 className="text-xl font-bold mb-2">
                  {language === "en" ? post.title.en : post.title.mr}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {language === "en" ? post.excerpt.en : post.excerpt.mr}
                </p>
                <Link 
                  to={`/blog/${post.slug}`} 
                  className="flex items-center text-primary font-medium hover:underline"
                >
                  {language === "en" ? "Read More" : "अधिक वाचा"}
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </InfoSection>

      <Footer />
    </div>
  );
};

export default Blog;
