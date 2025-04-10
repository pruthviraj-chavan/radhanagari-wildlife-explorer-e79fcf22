
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import InfoSection from "@/components/InfoSection";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

// Contact form type
type ContactFormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Message Sent",
        description: "Thank you for contacting us. We will get back to you soon!",
      });
      
      // Reset form
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    }, 1500);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* SEO meta data - added for search engines */}
        <div className="hidden">
          <h1>Contact Radhanagari Wildlife Sanctuary | Phone, Email, Address</h1>
          <p>Get in touch with Radhanagari Wildlife Sanctuary. Find contact information, address, opening hours, and inquiry form to plan your visit.</p>
        </div>
        
        <InfoSection
          title="Contact Us"
          subtitle="Get in touch with Radhanagari Wildlife Sanctuary"
          className="bg-gray-50"
        >
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 px-4">
              {/* Contact Form */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4">Send Us a Message</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Your Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="John Doe"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="john@example.com"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                      Subject
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      placeholder="Inquiry about safari bookings"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Your Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      placeholder="Write your message here..."
                      rows={5}
                    />
                  </div>
                  
                  <Button type="submit" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </div>
              
              {/* Contact Information - Updated with new details */}
              <div>
                <div className="bg-white p-6 rounded-lg shadow-md mb-6">
                  <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <MapPin className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-medium">Address</h4>
                        <p className="text-gray-600">
                          Incite Computer,<br />
                          Radhanagari Near Post Office,<br />
                          Kolhapur District, Maharashtra,<br />
                          India - 416212
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <Phone className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-medium">Phone</h4>
                        <p className="text-gray-600">+91 94232 81767</p>
                        <p className="text-gray-600">+91 82630 31055</p>
                        <p className="text-gray-600">+91 94048 95667</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <Mail className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-medium">Email</h4>
                        <p className="text-gray-600">incitecomputer@gmail.com</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <Clock className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-medium">Sanctuary Hours</h4>
                        <p className="text-gray-600">Morning Safari: 6:00 AM - 10:00 AM</p>
                        <p className="text-gray-600">Evening Safari: 3:00 PM - 6:30 PM</p>
                        <p className="text-gray-600">Closed on Mondays</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold mb-4">Emergency Contacts</h3>
                  <p className="mb-2">Forest Range Officer: +91 92345 67890</p>
                  <p className="mb-2">Wildlife Rescue: +91 98765 43211</p>
                  <p>Tourist Information: +91 94567 89012</p>
                </div>
              </div>
            </div>
            
            {/* Google Map */}
            <div className="mt-12 px-4">
              <div className="bg-white p-2 rounded-lg shadow-md">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30631.518066881674!2d73.98031979773416!3d16.406494503831864!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc01dc959d6d7ad%3A0x4b0d4c5e35808488!2sRadhanagari%20Wildlife%20Sanctuary!5e0!3m2!1sen!2sin!4v1712479133368!5m2!1sen!2sin"
                  width="100%"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Radhanagari Wildlife Sanctuary Map"
                  className="rounded-lg"
                ></iframe>
              </div>
            </div>
          </div>
        </InfoSection>
        
        {/* FAQ Section */}
        <InfoSection
          title="Frequently Asked Questions"
          subtitle="Find answers to common inquiries about visiting Radhanagari"
        >
          <div className="max-w-3xl mx-auto space-y-6 px-4">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold mb-2">How do I book a safari at Radhanagari?</h3>
              <p className="text-gray-600">
                Safari bookings can be made online through our official website or by contacting the forest department office at least 48 hours in advance. During peak season (October-May), we recommend booking at least a week ahead.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold mb-2">What is the best time to visit Radhanagari?</h3>
              <p className="text-gray-600">
                The ideal time to visit is between October and May. The sanctuary is particularly beautiful post-monsoon (October-December) when the foliage is lush and wildlife sightings are frequent.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold mb-2">Are there accommodation options inside the sanctuary?</h3>
              <p className="text-gray-600">
                Yes, the forest department maintains a few guest houses inside the sanctuary. Additionally, there are several homestays and resorts in nearby villages. Advance booking is recommended, especially during weekends and holidays.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold mb-2">What wildlife can I expect to see?</h3>
              <p className="text-gray-600">
                Radhanagari is famous for its population of Indian Bison (Gaur), leopards, barking deer, giant squirrels, and over 230 species of birds. Wildlife sightings depend on the season and time of day.
              </p>
            </div>
          </div>
        </InfoSection>
      </main>
      
      <Footer />
    </div>
  );
};

export default Contact;
