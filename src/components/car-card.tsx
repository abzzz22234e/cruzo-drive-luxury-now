import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Link } from "react-router-dom";

export interface Car {
  id: string;
  name: string;
  image: string;
  price: number;
  location: string;
  transmission: 'Automatic' | 'Manual';
  fuel: 'Petrol' | 'Electric' | 'Hybrid';
  tags: string[];
  brand: string;
  year: number;
  seats: number;
  description?: string;
  available?: boolean;
  rating?: number;
  reviews?: number;
}

interface CarCardProps {
  car: Car;
  className?: string;
}

export const CarCard = ({ car, className = "" }: CarCardProps) => {
  return (
    <Card className={`hover-lift overflow-hidden card-shadow ${className}`}>
      <div className="relative">
        <img
          src={car.image}
          alt={car.name}
          className="w-full h-48 object-cover"
        />
        {car.available === false && (
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <Badge variant="destructive">Unavailable</Badge>
          </div>
        )}
        <div className="absolute top-3 left-3">
          <Badge variant="secondary">{car.brand}</Badge>
        </div>
      </div>
      
      <CardContent className="p-4">
        <div className="space-y-2">
          <h3 className="font-semibold text-lg text-luxury-dark">{car.name}</h3>
          <p className="text-sm text-muted-foreground">{car.location}</p>
          
          <div className="flex flex-wrap gap-1">
            {car.tags.slice(0, 3).map((tag) => (
              <Badge key={tag} variant="outline" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>
          
          <div className="flex justify-between items-center text-sm">
            <span className="text-muted-foreground">{car.transmission}</span>
            <span className="text-muted-foreground">{car.fuel}</span>
            <span className="text-muted-foreground">{car.seats} seats</span>
          </div>
          
          {car.rating && car.reviews && (
            <div className="flex items-center space-x-1 text-sm">
              <span className="text-luxury-gold">★</span>
              <span>{car.rating}</span>
              <span className="text-muted-foreground">({car.reviews} reviews)</span>
            </div>
          )}
        </div>
      </CardContent>
      
      <CardFooter className="p-4 pt-0 flex justify-between items-center">
        <div className="text-left">
          <p className="text-2xl font-bold text-luxury-dark">£{car.price}</p>
          <p className="text-sm text-muted-foreground">per day</p>
        </div>
        <Link to={`/car/${car.id}`}>
          <Button className="gold-gradient">
            View Details
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};