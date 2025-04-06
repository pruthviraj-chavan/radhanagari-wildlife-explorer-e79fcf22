
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center px-4">
        <h1 className="text-6xl font-bold text-green-700 mb-4">404</h1>
        <div className="w-20 h-1 bg-green-600 mx-auto mb-6"></div>
        <p className="text-2xl text-gray-800 mb-6">Page Not Found</p>
        <p className="text-gray-600 mb-8 max-w-md mx-auto">
          The page you're looking for doesn't exist or has been moved. Let's get you back to exploring Radhanagari Wildlife Sanctuary.
        </p>
        <Link to="/">
          <Button className="forest-gradient text-white hover:opacity-90 flex items-center">
            <ArrowLeft className="mr-2 h-5 w-5" />
            Return to Homepage
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
