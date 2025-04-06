
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Clock, Calendar } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { blogPosts } from "@/data/blogData";

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const [language, setLanguage] = useState<"en" | "mr">("en");
  const [post, setPost] = useState<any>(null);
  
  useEffect(() => {
    const foundPost = blogPosts.find(p => p.slug === slug);
    setPost(foundPost);
  }, [slug]);

  if (!post) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar onLanguageChange={(lang) => setLanguage(lang)} />
        <div className="flex-grow flex items-center justify-center">
          <p className="text-xl text-gray-500">
            {language === "en" ? "Loading..." : "लोड करत आहे..."}
          </p>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar onLanguageChange={(lang) => setLanguage(lang)} />
      
      <div className="container mx-auto px-4 py-8 flex-grow">
        <Link to="/blog" className="inline-flex items-center text-primary hover:underline mb-6">
          <ArrowLeft className="mr-2 h-4 w-4" />
          {language === "en" ? "Back to all articles" : "सर्व लेखांकडे परत जा"}
        </Link>
        
        <div className="max-w-3xl mx-auto">
          <img 
            src={post.image} 
            alt={language === "en" ? post.title.en : post.title.mr} 
            className="w-full h-64 md:h-96 object-cover rounded-lg mb-6"
          />
          
          <div className="flex items-center space-x-4 text-gray-500 text-sm mb-4">
            <div className="flex items-center">
              <Calendar className="h-4 w-4 mr-1" />
              <span>{post.date}</span>
            </div>
            <div className="flex items-center">
              <Clock className="h-4 w-4 mr-1" />
              <span>{post.readTime} {language === "en" ? "min read" : "मिनिट वाचन"}</span>
            </div>
          </div>
          
          <h1 className="text-3xl md:text-4xl font-bold mb-6">
            {language === "en" ? post.title.en : post.title.mr}
          </h1>
          
          <div className="prose max-w-none">
            {language === "en" ? (
              <div dangerouslySetInnerHTML={{ __html: post.content.en }} />
            ) : (
              <div dangerouslySetInnerHTML={{ __html: post.content.mr }} />
            )}
          </div>

          <div className="mt-12 pt-6 border-t border-gray-200">
            <h3 className="text-lg font-semibold mb-4">
              {language === "en" ? "Related Articles" : "संबंधित लेख"}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {blogPosts
                .filter(p => p.id !== post.id)
                .slice(0, 2)
                .map(relatedPost => (
                  <Link 
                    key={relatedPost.id} 
                    to={`/blog/${relatedPost.slug}`}
                    className="group block bg-gray-50 p-4 rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    <h4 className="font-medium group-hover:text-primary transition-colors">
                      {language === "en" ? relatedPost.title.en : relatedPost.title.mr}
                    </h4>
                    <p className="text-sm text-gray-600 mt-1 line-clamp-2">
                      {language === "en" ? relatedPost.excerpt.en : relatedPost.excerpt.mr}
                    </p>
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default BlogPost;
