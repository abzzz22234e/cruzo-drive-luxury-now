import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { CarCard } from "@/components/car-card";
import { Navigation } from "@/components/ui/navigation";
import { Footer } from "@/components/ui/footer";
import { getCars } from "@/data/cars";
import { Search, MapPin, Calendar, Star, Shield, Truck } from "lucide-react";
import heroImage from "@/assets/hero-car.jpg";

const Index = () => {
  const [location, setLocation] = useState("London");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [carType, setCarType] = useState("");
  const [featuredCars, setFeaturedCars] = useState(() => getCars().slice(0, 6));
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: "James Robertson",
      text: "Absolutely incredible service! The BMW M5 was delivered to my hotel in Mayfair within 2 hours. Professional, seamless, and the car was immaculate.",
      rating: 5,
      location: "Central London"
    },
    {
      name: "Sarah Chen",
      text: "Used Cruzo for my wedding day - the Bentley Continental was perfect. Airport delivery was punctual and the car made our special day even more memorable.",
      rating: 5,
      location: "Heathrow Terminal 5"
    },
    {
      name: "Marcus Thompson",
      text: "As a business traveler, Cruzo has become my go-to. Tesla Model S delivered to Canary Wharf, charged and ready. Modern luxury at its finest.",
      rating: 5,
      location: "Canary Wharf"
    }
  ];

  // Auto-advance testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Set default dates
  useEffect(() => {
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);
    
    setCheckIn(today.toISOString().split('T')[0]);
    setCheckOut(tomorrow.toISOString().split('T')[0]);
  }, []);

  const handleSearch = () => {
    // Navigate to browse page with search parameters
    const params = new URLSearchParams({
      location,
      checkIn,
      checkOut,
      ...(carType && { type: carType })
    });
    window.location.href = `/browse?${params.toString()}`;
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 luxury-gradient opacity-70"></div>
        </div>
        
        <div className="relative z-10 text-center text-white px-4 max-w-6xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 fade-in">
            Luxury Cars,
            <span className="block text-luxury-gold">Delivered</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200 slide-up">
            Premium car rental with hotel & airport delivery across London
          </p>
          
          {/* Search Widget */}
          <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-2xl max-w-4xl mx-auto slide-up">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-luxury-dark flex items-center">
                  <MapPin className="w-4 h-4 mr-1" />
                  Location
                </label>
                <Input
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  placeholder="London, UK"
                  className="border-luxury-light"
                />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-luxury-dark flex items-center">
                  <Calendar className="w-4 h-4 mr-1" />
                  Check-in
                </label>
                <Input
                  type="date"
                  value={checkIn}
                  onChange={(e) => setCheckIn(e.target.value)}
                  className="border-luxury-light"
                />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-luxury-dark flex items-center">
                  <Calendar className="w-4 h-4 mr-1" />
                  Check-out
                </label>
                <Input
                  type="date"
                  value={checkOut}
                  onChange={(e) => setCheckOut(e.target.value)}
                  className="border-luxury-light"
                />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-luxury-dark">Car Type</label>
                <Select value={carType} onValueChange={setCarType}>
                  <SelectTrigger className="border-luxury-light">
                    <SelectValue placeholder="Any type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="luxury">Luxury</SelectItem>
                    <SelectItem value="sports">Sports</SelectItem>
                    <SelectItem value="suv">SUV</SelectItem>
                    <SelectItem value="electric">Electric</SelectItem>
                    <SelectItem value="supercar">Supercar</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            
            <Button
              onClick={handleSearch}
              className="w-full mt-6 h-12 text-lg gold-gradient"
            >
              <Search className="w-5 h-5 mr-2" />
              Search Luxury Cars
            </Button>
          </div>
        </div>
      </section>

      {/* Promise Banner */}
      <section className="bg-luxury-dark text-white py-4">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap justify-center items-center space-x-8 text-sm">
            <div className="flex items-center space-x-2">
              <Shield className="w-4 h-4 text-luxury-gold" />
              <span>Verified Cars</span>
            </div>
            <div className="flex items-center space-x-2">
              <Truck className="w-4 h-4 text-luxury-gold" />
              <span>Airport Delivery £80</span>
            </div>
            <div className="flex items-center space-x-2">
              <Star className="w-4 h-4 text-luxury-gold" />
              <span>UK Support</span>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Cars */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-luxury-dark mb-4">Featured Luxury Cars</h2>
            <p className="text-lg text-muted-foreground">Handpicked premium vehicles for the ultimate driving experience</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredCars.map((car) => (
              <CarCard key={car.id} car={car} />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link to="/browse">
              <Button size="lg" className="gold-gradient">
                Browse All Cars
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 subtle-gradient">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-luxury-dark mb-12">What Our Clients Say</h2>
          
          <div className="relative">
            <div className="bg-white rounded-2xl p-8 card-shadow">
              <div className="flex justify-center mb-4">
                {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-luxury-gold fill-current" />
                ))}
              </div>
              <blockquote className="text-lg text-luxury-dark mb-6">
                "{testimonials[currentTestimonial].text}"
              </blockquote>
              <div>
                <p className="font-semibold text-luxury-dark">{testimonials[currentTestimonial].name}</p>
                <p className="text-sm text-muted-foreground">{testimonials[currentTestimonial].location}</p>
              </div>
            </div>
            
            {/* Testimonial Dots */}
            <div className="flex justify-center space-x-2 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentTestimonial ? 'bg-luxury-gold' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
