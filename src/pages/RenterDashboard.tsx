import { useState, useEffect } from "react";
import { Navigation } from "@/components/ui/navigation";
import { Footer } from "@/components/ui/footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Car, MapPin, Star } from "lucide-react";

const RenterDashboard = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const storedBookings = localStorage.getItem('cruzo_bookings');
    if (storedBookings) {
      setBookings(JSON.parse(storedBookings));
    }
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-luxury-dark mb-2">Your Bookings</h1>
          <p className="text-muted-foreground">Manage your luxury car rentals</p>
        </div>

        {bookings.length === 0 ? (
          <Card className="text-center p-12">
            <CardContent>
              <Car className="w-16 h-16 mx-auto mb-4 text-muted-foreground" />
              <h3 className="text-xl font-semibold mb-2">No bookings yet</h3>
              <p className="text-muted-foreground mb-4">Start exploring our luxury car collection</p>
              <Button className="gold-gradient">Browse Cars</Button>
            </CardContent>
          </Card>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {bookings.map((booking: any) => (
              <Card key={booking.id} className="hover-lift">
                <CardHeader className="p-0">
                  <img src={booking.carImage} alt={booking.carName} className="w-full h-48 object-cover rounded-t-lg" />
                </CardHeader>
                <CardContent className="p-4">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-semibold">{booking.carName}</h3>
                    <Badge variant={booking.status === 'Confirmed' ? 'default' : 'secondary'}>
                      {booking.status}
                    </Badge>
                  </div>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-2" />
                      {booking.checkIn} - {booking.checkOut}
                    </div>
                    <div className="flex items-center">
                      <MapPin className="w-4 h-4 mr-2" />
                      {booking.deliveryOption ? 'Delivery included' : 'Pickup required'}
                    </div>
                  </div>
                  <div className="mt-4 pt-4 border-t">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Total</span>
                      <span className="text-lg font-bold">£{booking.totalCost}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
      
      <Footer />
    </div>
  );
};

export default RenterDashboard;