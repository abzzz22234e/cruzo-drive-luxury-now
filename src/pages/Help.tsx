import { useState } from "react";
import { Navigation } from "@/components/ui/navigation";
import { Footer } from "@/components/ui/footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Search, Phone, Mail, MessageCircle, Clock, Shield, Truck } from "lucide-react";

const Help = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const faqs = [
    {
      category: "Booking",
      questions: [
        {
          question: "How do I book a car on Cruzo?",
          answer: "Browse our luxury car collection, select your desired vehicle, choose your dates, and complete the booking. You'll receive instant confirmation and can add optional airport/hotel delivery for £80."
        },
        {
          question: "Can I modify or cancel my booking?",
          answer: "Yes, you can modify or cancel your booking up to 24 hours before your rental start time. Changes may be subject to availability and pricing differences."
        },
        {
          question: "What payment methods do you accept?",
          answer: "We accept all major credit cards including Visa, Mastercard, and American Express. Payment is processed securely through our encrypted payment system."
        },
        {
          question: "Do I need a deposit?",
          answer: "Yes, a security deposit is required for all bookings. The amount varies by vehicle and is temporarily held on your card during the rental period."
        }
      ]
    },
    {
      category: "Delivery & Pickup",
      questions: [
        {
          question: "Do you deliver to hotels and airports?",
          answer: "Yes! We offer convenient delivery to London hotels and all major airports (Heathrow, Gatwick, Stansted, Luton, City) for just £80. Book this service when making your reservation."
        },
        {
          question: "What areas do you cover?",
          answer: "We primarily serve Greater London and surrounding areas. Delivery is available to most locations within the M25 and major airports. Contact us for specific location availability."
        },
        {
          question: "How far in advance should I book delivery?",
          answer: "We recommend booking at least 24 hours in advance for delivery service, especially for airport pickups. Same-day delivery may be available subject to availability."
        },
        {
          question: "What happens if my flight is delayed?",
          answer: "No worries! Contact us as soon as you know about the delay. We'll adjust your pickup time accordingly at no extra charge for delays up to 4 hours."
        }
      ]
    },
    {
      category: "Requirements",
      questions: [
        {
          question: "What are the age and license requirements?",
          answer: "Drivers must be at least 25 years old with a full UK driving license held for minimum 2 years. International licenses are accepted with proper documentation."
        },
        {
          question: "Do I need special insurance?",
          answer: "All our vehicles come with comprehensive insurance included. Additional coverage options are available at booking for extra peace of mind."
        },
        {
          question: "Can I add additional drivers?",
          answer: "Yes, additional drivers can be added for a small fee. All drivers must meet our age and license requirements and be present during vehicle handover."
        }
      ]
    },
    {
      category: "Car Owners",
      questions: [
        {
          question: "How much can I earn listing my car?",
          answer: "Earnings vary by vehicle type and demand. Luxury cars typically earn £200-£750+ per day. Our platform takes a competitive commission, and you keep the majority of rental income."
        },
        {
          question: "Is my car insured during rentals?",
          answer: "Yes, we provide comprehensive insurance coverage for all rentals through our trusted insurance partners. Your personal insurance remains unaffected."
        },
        {
          question: "How do I list my car?",
          answer: "Simply click 'List Your Car', provide vehicle details and photos, set your price, and choose availability. We'll review and approve quality listings within 24 hours."
        },
        {
          question: "What if a renter damages my car?",
          answer: "All damage is covered by our comprehensive insurance. Report any issues immediately, and we'll handle the claims process and ensure you're protected."
        }
      ]
    }
  ];

  const filteredFaqs = faqs.map(category => ({
    ...category,
    questions: category.questions.filter(
      faq => 
        faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
    )
  })).filter(category => category.questions.length > 0);

  const contactOptions = [
    {
      icon: Phone,
      title: "Phone Support",
      description: "Speak with our team",
      contact: "+44 20 7946 0958",
      hours: "Mon-Fri 8AM-8PM"
    },
    {
      icon: Mail,
      title: "Email Support",
      description: "Get help via email",
      contact: "help@cruzo.co.uk",
      hours: "Response within 2 hours"
    },
    {
      icon: MessageCircle,
      title: "Live Chat",
      description: "Instant assistance",
      contact: "Available now",
      hours: "24/7 Support"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-16 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <Badge variant="secondary" className="mb-4">Help & Support</Badge>
          <h1 className="text-5xl font-bold text-luxury-dark mb-6">
            How can we help you?
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Find answers to common questions or get in touch with our support team
          </p>
          
          {/* Search */}
          <div className="relative max-w-xl mx-auto">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
            <Input
              placeholder="Search for answers..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 h-12 text-lg"
            />
          </div>
        </div>
      </section>

      {/* Quick Help Cards */}
      <section className="py-8 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <Card className="text-center p-6 card-shadow hover-lift">
              <CardContent className="p-0">
                <Truck className="w-12 h-12 mx-auto mb-4 text-luxury-gold" />
                <h3 className="text-lg font-semibold mb-2">Airport Delivery</h3>
                <p className="text-sm text-muted-foreground">Get your car delivered to any London airport for £80</p>
              </CardContent>
            </Card>
            
            <Card className="text-center p-6 card-shadow hover-lift">
              <CardContent className="p-0">
                <Shield className="w-12 h-12 mx-auto mb-4 text-luxury-gold" />
                <h3 className="text-lg font-semibold mb-2">Fully Insured</h3>
                <p className="text-sm text-muted-foreground">Comprehensive coverage included with every rental</p>
              </CardContent>
            </Card>
            
            <Card className="text-center p-6 card-shadow hover-lift">
              <CardContent className="p-0">
                <Clock className="w-12 h-12 mx-auto mb-4 text-luxury-gold" />
                <h3 className="text-lg font-semibold mb-2">24/7 Support</h3>
                <p className="text-sm text-muted-foreground">Round-the-clock assistance whenever you need help</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-luxury-dark mb-8 text-center">
            Frequently Asked Questions
          </h2>
          
          {filteredFaqs.length === 0 ? (
            <div className="text-center py-8">
              <p className="text-muted-foreground">No results found for "{searchQuery}"</p>
              <Button
                variant="outline"
                onClick={() => setSearchQuery("")}
                className="mt-4"
              >
                Clear Search
              </Button>
            </div>
          ) : (
            <div className="space-y-8">
              {filteredFaqs.map((category, categoryIndex) => (
                <div key={categoryIndex}>
                  <h3 className="text-xl font-semibold text-luxury-dark mb-4 flex items-center">
                    <span className="w-8 h-8 bg-luxury-gold text-luxury-dark rounded-full flex items-center justify-center text-sm font-bold mr-3">
                      {categoryIndex + 1}
                    </span>
                    {category.category}
                  </h3>
                  
                  <Accordion type="single" collapsible className="w-full">
                    {category.questions.map((faq, questionIndex) => (
                      <AccordionItem key={questionIndex} value={`${categoryIndex}-${questionIndex}`}>
                        <AccordionTrigger className="text-left">
                          {faq.question}
                        </AccordionTrigger>
                        <AccordionContent className="text-muted-foreground">
                          {faq.answer}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Contact Options */}
      <section className="py-16 px-4 subtle-gradient">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-luxury-dark mb-4">
              Still need help?
            </h2>
            <p className="text-lg text-muted-foreground">
              Our support team is here to assist you
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {contactOptions.map((option, index) => (
              <Card key={index} className="text-center p-6 card-shadow hover-lift">
                <CardHeader className="pb-2">
                  <div className="w-16 h-16 mx-auto mb-4 bg-luxury-gold-light rounded-full flex items-center justify-center">
                    <option.icon className="w-8 h-8 text-luxury-dark" />
                  </div>
                  <CardTitle className="text-lg">{option.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-3">{option.description}</p>
                  <p className="font-semibold text-luxury-dark">{option.contact}</p>
                  <p className="text-sm text-muted-foreground">{option.hours}</p>
                  <Button className="mt-4 gold-gradient" size="sm">
                    Get Help
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Help;