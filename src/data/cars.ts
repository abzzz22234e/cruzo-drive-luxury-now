import { Car } from "@/components/car-card";

export type { Car };
import car1 from "@/assets/car-1.jpg";
import car2 from "@/assets/car-2.jpg";
import car3 from "@/assets/car-3.jpg";
import car4 from "@/assets/car-4.jpg";
import car5 from "@/assets/car-5.jpg";
import car6 from "@/assets/car-6.jpg";

export const defaultCars: Car[] = [
  {
    id: "1",
    name: "Mercedes-Benz AMG GT",
    image: car1,
    price: 450,
    location: "Central London",
    transmission: "Automatic",
    fuel: "Petrol",
    tags: ["Luxury", "Sports", "Coupe"],
    brand: "Mercedes-Benz",
    year: 2023,
    seats: 2,
    description: "Experience the thrill of German engineering with this stunning AMG GT. Perfect for special occasions or weekend adventures.",
    available: true,
    rating: 4.9,
    reviews: 127
  },
  {
    id: "2",
    name: "Audi R8 V10 Plus",
    image: car2,
    price: 650,
    location: "Canary Wharf",
    transmission: "Automatic",
    fuel: "Petrol",
    tags: ["Supercar", "Sports", "V10"],
    brand: "Audi",
    year: 2022,
    seats: 2,
    description: "Unleash 610hp of pure adrenaline in this naturally aspirated V10 masterpiece. The ultimate driving machine.",
    available: true,
    rating: 4.8,
    reviews: 89
  },
  {
    id: "3",
    name: "Porsche 911 Turbo S",
    image: car3,
    price: 580,
    location: "Kensington",
    transmission: "Automatic",
    fuel: "Petrol",
    tags: ["Sports", "Turbo", "Iconic"],
    brand: "Porsche",
    year: 2023,
    seats: 4,
    description: "The pinnacle of 911 evolution. Twin-turbo flat-six engine delivering exceptional performance and everyday usability.",
    available: true,
    rating: 4.9,
    reviews: 203
  },
  {
    id: "4",
    name: "Range Rover Velar",
    image: car4,
    price: 280,
    location: "Mayfair",
    transmission: "Automatic",
    fuel: "Petrol",
    tags: ["Luxury", "SUV", "Premium"],
    brand: "Land Rover",
    year: 2023,
    seats: 5,
    description: "Sophisticated luxury SUV with cutting-edge technology and refined comfort. Perfect for business or leisure.",
    available: true,
    rating: 4.7,
    reviews: 156
  },
  {
    id: "5",
    name: "Tesla Model S Plaid",
    image: car5,
    price: 320,
    location: "Tech City",
    transmission: "Automatic",
    fuel: "Electric",
    tags: ["Electric", "Tech", "Fast"],
    brand: "Tesla",
    year: 2023,
    seats: 5,
    description: "The future of performance. 0-60mph in under 2 seconds with sustainable luxury and cutting-edge technology.",
    available: true,
    rating: 4.6,
    reviews: 94
  },
  {
    id: "6",
    name: "Bentley Continental GT",
    image: car6,
    price: 750,
    location: "Belgravia",
    transmission: "Automatic",
    fuel: "Petrol",
    tags: ["Ultra-Luxury", "Grand Tourer", "Handcrafted"],
    brand: "Bentley",
    year: 2023,
    seats: 4,
    description: "Hand-built British luxury grand tourer. Exquisite craftsmanship meets modern performance in perfect harmony.",
    available: true,
    rating: 5.0,
    reviews: 67
  }
];

// Car management functions
export const getCars = (): Car[] => {
  const storedCars = localStorage.getItem('cruzo_cars');
  if (storedCars) {
    return [...defaultCars, ...JSON.parse(storedCars)];
  }
  return defaultCars;
};

export const addCar = (car: Omit<Car, 'id'>): Car => {
  const storedCars = localStorage.getItem('cruzo_cars');
  const userCars = storedCars ? JSON.parse(storedCars) : [];
  
  const newCar: Car = {
    ...car,
    id: Date.now().toString(),
    available: true,
    rating: 0,
    reviews: 0
  };
  
  userCars.push(newCar);
  localStorage.setItem('cruzo_cars', JSON.stringify(userCars));
  
  return newCar;
};

export const getCarById = (id: string): Car | undefined => {
  const allCars = getCars();
  return allCars.find(car => car.id === id);
};

export const updateCar = (id: string, updates: Partial<Car>): Car | null => {
  const storedCars = localStorage.getItem('cruzo_cars');
  if (!storedCars) return null;
  
  const userCars = JSON.parse(storedCars);
  const carIndex = userCars.findIndex((car: Car) => car.id === id);
  
  if (carIndex === -1) return null;
  
  userCars[carIndex] = { ...userCars[carIndex], ...updates };
  localStorage.setItem('cruzo_cars', JSON.stringify(userCars));
  
  return userCars[carIndex];
};

export const deleteCar = (id: string): boolean => {
  const storedCars = localStorage.getItem('cruzo_cars');
  if (!storedCars) return false;
  
  const userCars = JSON.parse(storedCars);
  const filteredCars = userCars.filter((car: Car) => car.id !== id);
  
  localStorage.setItem('cruzo_cars', JSON.stringify(filteredCars));
  return true;
};