
import { Button } from "@/components/ui/button";
import { ChevronRight, Binoculars } from "lucide-react";
import { Link } from "react-router-dom";

interface HeroProps {
  title: string;
  subtitle: string;
  cta?: {
    text: string;
    link: string;
  };
  image?: string;
}

const Hero = ({ title, subtitle, cta, image }: HeroProps) => {
  return (
    <div className="relative h-[70vh] overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${image || 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=2000'})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>
      
      {/* Content */}
      <div className="container relative h-full mx-auto px-4 flex flex-col justify-center items-start text-white">
        <div className="max-w-2xl animate-fade-in">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
            {title}
          </h1>
          <p className="text-lg md:text-xl opacity-90 mb-8">
            {subtitle}
          </p>
          {cta && (
            <Link to={cta.link}>
              <Button className="sunset-gradient text-white hover:opacity-90 font-semibold px-6 py-6 text-lg flex items-center">
                <Binoculars className="mr-2 h-5 w-5" />
                {cta.text}
                <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          )}
        </div>
      </div>
      
      {/* Wave SVG Divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" fill="#ffffff">
          <path d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1440,58.7L1440,120L1280,120C1120,120,960,120,800,120C640,120,480,120,320,120C160,120,0,120,0,120Z"></path>
        </svg>
      </div>
    </div>
  );
};

export default Hero;
