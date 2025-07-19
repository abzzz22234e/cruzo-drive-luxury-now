import { Navigation } from "@/components/ui/navigation";
import { Footer } from "@/components/ui/footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, Users, Car, Star, MapPin, Clock, Check } from "lucide-react";

const About = () => {
  const stats = [
    { icon: Car, label: "Premium Cars", value: "500+" },
    { icon: Users, label: "Happy Customers", value: "10,000+" },
    { icon: Star, label: "Average Rating", value: "4.9" },
    { icon: MapPin, label: "UK Locations", value: "25+" }
  ];

  const features = [
    {
      icon: Shield,
      title: "Verified & Insured",
      description: "Every car is thoroughly verified and comes with comprehensive insurance coverage"
    },
    {
      icon: Clock,
      title: "24/7 Support",
      description: "Round-the-clock customer support to assist you whenever you need help"
    },
    {
      icon: MapPin,
      title: "Airport Delivery",
      description: "Convenient delivery to London hotels and airports for just £80"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-16 px-4 text-center luxury-gradient text-white">
        <div className="max-w-4xl mx-auto">
          <Badge variant="secondary" className="mb-4">About Cruzo</Badge>
          <h1 className="text-5xl font-bold mb-6">
            Redefining Luxury Car Rental
          </h1>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            We connect discerning drivers with premium vehicles, creating unforgettable experiences 
            one luxury car at a time.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 luxury-gradient rounded-full flex items-center justify-center">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-luxury-dark mb-2">{stat.value}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 px-4 subtle-gradient">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-luxury-dark mb-4">Our Story</h2>
            <p className="text-lg text-muted-foreground">
              Born from a passion for automotive excellence and exceptional service
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground">
                Cruzo was founded with a simple yet ambitious vision: to make luxury cars accessible 
                to everyone while providing car owners with a premium earning opportunity.
              </p>
              <p className="text-lg text-muted-foreground">
                Based in London, we've built the UK's most trusted luxury car sharing platform, 
                connecting passionate car owners with drivers who appreciate the finer things in life.
              </p>
              <p className="text-lg text-muted-foreground">
                Every car on our platform is hand-selected for quality, performance, and style. 
                From weekend adventures to special occasions, we ensure every journey is extraordinary.
              </p>
            </div>
            <div className="relative">
              <div className="bg-luxury-dark rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                <p className="text-gray-200 mb-6">
                  To revolutionize car rental by providing access to the world's most desirable 
                  vehicles while building a community of automotive enthusiasts.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <Check className="w-5 h-5 text-luxury-gold mr-2" />
                    <span>Exceptional vehicles</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="w-5 h-5 text-luxury-gold mr-2" />
                    <span>Seamless experience</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="w-5 h-5 text-luxury-gold mr-2" />
                    <span>Trusted community</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-luxury-dark mb-4">Why Choose Cruzo</h2>
            <p className="text-lg text-muted-foreground">
              Experience the difference that attention to detail makes
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center p-6 card-shadow hover-lift">
                <CardContent className="p-0">
                  <div className="w-16 h-16 mx-auto mb-4 bg-luxury-gold-light rounded-full flex items-center justify-center">
                    <feature.icon className="w-8 h-8 text-luxury-dark" />
                  </div>
                  <h3 className="text-xl font-bold text-luxury-dark mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 px-4 subtle-gradient">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-luxury-dark mb-4">Leadership Team</h2>
          <p className="text-lg text-muted-foreground mb-12">
            Passionate automotive enthusiasts driving innovation in luxury car sharing
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-32 h-32 mx-auto mb-4 bg-luxury-gradient rounded-full flex items-center justify-center">
                <span className="text-2xl font-bold text-white">JD</span>
              </div>
              <h3 className="text-xl font-bold text-luxury-dark">James Davidson</h3>
              <p className="text-muted-foreground">Founder & CEO</p>
              <p className="text-sm text-muted-foreground mt-2">
                Former automotive executive with 15+ years experience
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-32 h-32 mx-auto mb-4 bg-luxury-gradient rounded-full flex items-center justify-center">
                <span className="text-2xl font-bold text-white">SC</span>
              </div>
              <h3 className="text-xl font-bold text-luxury-dark">Sarah Chen</h3>
              <p className="text-muted-foreground">Head of Operations</p>
              <p className="text-sm text-muted-foreground mt-2">
                Luxury hospitality background, ensuring premium service
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-32 h-32 mx-auto mb-4 bg-luxury-gradient rounded-full flex items-center justify-center">
                <span className="text-2xl font-bold text-white">MT</span>
              </div>
              <h3 className="text-xl font-bold text-luxury-dark">Marcus Thompson</h3>
              <p className="text-muted-foreground">Head of Technology</p>
              <p className="text-sm text-muted-foreground mt-2">
                Tech innovator building the future of car sharing
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;