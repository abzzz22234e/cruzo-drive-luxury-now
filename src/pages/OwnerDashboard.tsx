import { useState, useEffect } from "react";
import { Navigation } from "@/components/ui/navigation";
import { Footer } from "@/components/ui/footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { getCars } from "@/data/cars";
import { Car, DollarSign, Plus } from "lucide-react";
import { Link } from "react-router-dom";

const OwnerDashboard = () => {
  const [userCars, setUserCars] = useState([]);

  useEffect(() => {
    const storedCars = localStorage.getItem('cruzo_cars');
    if (storedCars) {
      setUserCars(JSON.parse(storedCars));
    }
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-4xl font-bold text-luxury-dark mb-2">Your Cars</h1>
            <p className="text-muted-foreground">Manage your luxury car listings</p>
          </div>
          <Link to="/list-car">
            <Button className="gold-gradient">
              <Plus className="w-4 h-4 mr-2" />
              List New Car
            </Button>
          </Link>
        </div>

        {userCars.length === 0 ? (
          <Card className="text-center p-12">
            <CardContent>
              <Car className="w-16 h-16 mx-auto mb-4 text-muted-foreground" />
              <h3 className="text-xl font-semibold mb-2">No cars listed yet</h3>
              <p className="text-muted-foreground mb-4">Start earning by listing your luxury car</p>
              <Link to="/list-car">
                <Button className="gold-gradient">List Your First Car</Button>
              </Link>
            </CardContent>
          </Card>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {userCars.map((car: any) => (
              <Card key={car.id} className="hover-lift">
                <CardHeader className="p-0">
                  <img src={car.image} alt={car.name} className="w-full h-48 object-cover rounded-t-lg" />
                </CardHeader>
                <CardContent className="p-4">
                  <h3 className="font-semibold mb-2">{car.name}</h3>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-luxury-dark">£{car.price}</span>
                    <span className="text-sm text-muted-foreground">per day</span>
                  </div>
                  <div className="mt-4 space-y-2">
                    <Button variant="outline" size="sm" className="w-full">
                      Edit Listing
                    </Button>
                    <Button variant="outline" size="sm" className="w-full text-red-600">
                      Remove
                    </Button>
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

export default OwnerDashboard;