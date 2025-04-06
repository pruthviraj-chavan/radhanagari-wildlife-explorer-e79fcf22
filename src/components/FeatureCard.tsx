
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface FeatureCardProps {
  title: string;
  description: string;
  image: string;
  link: string;
  gradient?: string;
}

const FeatureCard = ({ title, description, image, link, gradient = "forest-gradient" }: FeatureCardProps) => {
  return (
    <div className="group relative overflow-hidden rounded-lg shadow-md transition-all duration-300 hover:shadow-xl h-full">
      {/* Image */}
      <div className="h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      
      {/* Content */}
      <div className={cn("p-5 transition-colors", gradient)}>
        <h3 className="text-xl font-semibold mb-2 text-white">{title}</h3>
        <p className="text-white/90 mb-4 line-clamp-3">{description}</p>
        <Link 
          to={link}
          className="inline-flex items-center text-white font-medium hover:underline"
        >
          Explore more
          <ArrowRight className="ml-1 h-4 w-4" />
        </Link>
      </div>
    </div>
  );
};

export default FeatureCard;
