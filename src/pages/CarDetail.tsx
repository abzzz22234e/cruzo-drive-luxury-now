import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Navigation } from "@/components/ui/navigation";
import { Footer } from "@/components/ui/footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { getCarById, Car } from "@/data/cars";
import { useToast } from "@/hooks/use-toast";
import { ArrowLeft, Calendar, Users, Fuel, Settings, Star, MapPin, Shield, Truck, Check } from "lucide-react";

const CarDetail = () => {
  const { id } = useParams<{ id: string }>();
  const { toast } = useToast();
  const [car, setCar] = useState<Car | null>(null);
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [deliveryOption, setDeliveryOption] = useState(false);
  const [totalCost, setTotalCost] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  // Mock additional images for carousel
  const additionalImages = [
    car?.image,
    car?.image, // In real app, these would be different angles
    car?.image,
    car?.image
  ].filter(Boolean);

  const reviews = [
    {
      name: "David Williams",
      rating: 5,
      date: "2 weeks ago",
      comment: "Absolutely stunning car! The delivery was punctual and the vehicle was in pristine condition. Highly recommend for special occasions."
    },
    {
      name: "Emma Thompson",
      rating: 5,
      date: "1 month ago", 
      comment: "Perfect for our wedding day. The car turned heads and made our celebration even more special. Professional service throughout."
    },
    {
      name: "Michael Chen",
      rating: 4,
      date: "2 months ago",
      comment: "Great experience overall. The car performed beautifully and the booking process was seamless. Minor delay in delivery but communication was excellent."
    }
  ];

  useEffect(() => {
    if (id) {
      const foundCar = getCarById(id);
      setCar(foundCar || null);
    }
  }, [id]);

  useEffect(() => {
    // Set default dates
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);
    
    setCheckIn(today.toISOString().split('T')[0]);
    setCheckOut(tomorrow.toISOString().split('T')[0]);
  }, []);

  useEffect(() => {
    if (car && checkIn && checkOut) {
      const start = new Date(checkIn);
      const end = new Date(checkOut);
      const days = Math.max(1, Math.ceil((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24)));
      
      let cost = car.price * days;
      if (deliveryOption) {
        cost += 80;
      }
      
      setTotalCost(cost);
    }
  }, [car, checkIn, checkOut, deliveryOption]);

  const handleBooking = () => {
    if (!car) return;
    
    const user = localStorage.getItem('cruzo_user');
    if (!user) {
      toast({
        title: "Login Required",
        description: "Please login to book a car",
        variant: "destructive"
      });
      return;
    }

    if (!checkIn || !checkOut) {
      toast({
        title: "Invalid Dates",
        description: "Please select check-in and check-out dates",
        variant: "destructive"
      });
      return;
    }

    // Save booking to localStorage
    const booking = {
      id: Date.now().toString(),
      carId: car.id,
      carName: car.name,
      carImage: car.image,
      checkIn,
      checkOut,
      totalCost,
      deliveryOption,
      status: "Confirmed",
      bookedAt: new Date().toISOString()
    };

    const existingBookings = localStorage.getItem('cruzo_bookings');
    const bookings = existingBookings ? JSON.parse(existingBookings) : [];
    bookings.push(booking);
    localStorage.setItem('cruzo_bookings', JSON.stringify(bookings));

    toast({
      title: "Booking Confirmed! 🎉",
      description: `Your ${car.name} has been booked successfully.`,
      duration: 5000
    });

    // Redirect to dashboard after a short delay
    setTimeout(() => {
      window.location.href = '/dashboard/renter';
    }, 2000);
  };

  if (!car) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Car not found</h1>
            <Link to="/browse">
              <Button>Browse Cars</Button>
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Back button */}
        <Link to="/browse" className="inline-flex items-center text-muted-foreground hover:text-luxury-gold mb-6">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Browse
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Car Images and Details */}
          <div className="lg:col-span-2 space-y-6">
            {/* Image Carousel */}
            <div className="relative">
              <img
                src={car.image}
                alt={car.name}
                className="w-full h-96 object-cover rounded-2xl"
              />
              {additionalImages.length > 1 && (
                <div className="flex space-x-2 mt-4">
                  {additionalImages.map((img, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`w-20 h-20 rounded-lg overflow-hidden border-2 ${
                        index === currentImageIndex ? 'border-luxury-gold' : 'border-gray-200'
                      }`}
                    >
                      <img src={img} alt={`${car.name} view ${index + 1}`} className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Car Info */}
            <div className="space-y-4">
              <div className="flex flex-wrap gap-2">
                {car.tags.map((tag) => (
                  <Badge key={tag} variant="secondary">{tag}</Badge>
                ))}
              </div>
              
              <h1 className="text-4xl font-bold text-luxury-dark">{car.name}</h1>
              
              <div className="flex items-center space-x-4 text-muted-foreground">
                <div className="flex items-center">
                  <MapPin className="w-4 h-4 mr-1" />
                  {car.location}
                </div>
                {car.rating && (
                  <div className="flex items-center">
                    <Star className="w-4 h-4 mr-1 text-luxury-gold fill-current" />
                    {car.rating} ({car.reviews} reviews)
                  </div>
                )}
              </div>
              
              <p className="text-lg text-muted-foreground">{car.description}</p>
            </div>

            {/* Specifications */}
            <Card>
              <CardHeader>
                <CardTitle>Specifications</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="text-center p-4 bg-luxury-light rounded-lg">
                    <Calendar className="w-6 h-6 mx-auto mb-2 text-luxury-gold" />
                    <p className="font-semibold">{car.year}</p>
                    <p className="text-sm text-muted-foreground">Year</p>
                  </div>
                  <div className="text-center p-4 bg-luxury-light rounded-lg">
                    <Users className="w-6 h-6 mx-auto mb-2 text-luxury-gold" />
                    <p className="font-semibold">{car.seats}</p>
                    <p className="text-sm text-muted-foreground">Seats</p>
                  </div>
                  <div className="text-center p-4 bg-luxury-light rounded-lg">
                    <Fuel className="w-6 h-6 mx-auto mb-2 text-luxury-gold" />
                    <p className="font-semibold">{car.fuel}</p>
                    <p className="text-sm text-muted-foreground">Fuel</p>
                  </div>
                  <div className="text-center p-4 bg-luxury-light rounded-lg">
                    <Settings className="w-6 h-6 mx-auto mb-2 text-luxury-gold" />
                    <p className="font-semibold">{car.transmission}</p>
                    <p className="text-sm text-muted-foreground">Transmission</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Reviews */}
            <Card>
              <CardHeader>
                <CardTitle>Customer Reviews</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {reviews.map((review, index) => (
                  <div key={index} className="border-b border-gray-100 pb-4 last:border-b-0">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <p className="font-semibold">{review.name}</p>
                        <div className="flex items-center space-x-1">
                          {[...Array(review.rating)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 text-luxury-gold fill-current" />
                          ))}
                        </div>
                      </div>
                      <span className="text-sm text-muted-foreground">{review.date}</span>
                    </div>
                    <p className="text-muted-foreground">{review.comment}</p>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Booking Card */}
          <div className="lg:col-span-1">
            <Card className="sticky top-24 card-shadow">
              <CardHeader>
                <CardTitle className="text-2xl">
                  £{car.price}
                  <span className="text-base font-normal text-muted-foreground">/day</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Date Selection */}
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <label className="text-sm font-medium">Check-in</label>
                    <Input
                      type="date"
                      value={checkIn}
                      onChange={(e) => setCheckIn(e.target.value)}
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium">Check-out</label>
                    <Input
                      type="date"
                      value={checkOut}
                      onChange={(e) => setCheckOut(e.target.value)}
                    />
                  </div>
                </div>

                {/* Delivery Option */}
                <div className="flex items-center space-x-2 p-3 border rounded-lg">
                  <Checkbox
                    id="delivery"
                    checked={deliveryOption}
                    onCheckedChange={(checked) => setDeliveryOption(checked as boolean)}
                  />
                  <div className="flex-1">
                    <label htmlFor="delivery" className="text-sm font-medium cursor-pointer">
                      Hotel/Airport Delivery
                    </label>
                    <p className="text-xs text-muted-foreground">+£80</p>
                  </div>
                  <Truck className="w-4 h-4 text-luxury-gold" />
                </div>

                {/* Price Breakdown */}
                {checkIn && checkOut && (
                  <div className="space-y-2 pt-4 border-t">
                    <div className="flex justify-between">
                      <span>£{car.price} × {Math.max(1, Math.ceil((new Date(checkOut).getTime() - new Date(checkIn).getTime()) / (1000 * 60 * 60 * 24)))} days</span>
                      <span>£{car.price * Math.max(1, Math.ceil((new Date(checkOut).getTime() - new Date(checkIn).getTime()) / (1000 * 60 * 60 * 24)))}</span>
                    </div>
                    {deliveryOption && (
                      <div className="flex justify-between">
                        <span>Delivery fee</span>
                        <span>£80</span>
                      </div>
                    )}
                    <div className="flex justify-between font-semibold text-lg pt-2 border-t">
                      <span>Total</span>
                      <span>£{totalCost}</span>
                    </div>
                  </div>
                )}

                <Button
                  onClick={handleBooking}
                  className="w-full h-12 gold-gradient"
                  disabled={!checkIn || !checkOut}
                >
                  Book Now
                </Button>

                {/* Trust Indicators */}
                <div className="space-y-2 pt-4 border-t">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Shield className="w-4 h-4 mr-2 text-green-500" />
                    Verified & Insured
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Check className="w-4 h-4 mr-2 text-green-500" />
                    24/7 Support
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Check className="w-4 h-4 mr-2 text-green-500" />
                    Free Cancellation
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default CarDetail;