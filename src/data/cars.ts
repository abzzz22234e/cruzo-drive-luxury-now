import { Car } from "@/components/car-card";

export type { Car };
import car1 from "@/assets/car-1.jpg";
import car2 from "@/assets/car-2.jpg";
import car3 from "@/assets/car-3.jpg";
import car4 from "@/assets/car-4.jpg";
import car5 from "@/assets/car-5.jpg";
import car6 from "@/assets/car-6.jpg";
import car7 from "@/assets/car-7.jpg";
import car8 from "@/assets/car-8.jpg";
import car9 from "@/assets/car-9.jpg";
import car10 from "@/assets/car-10.jpg";
import car11 from "@/assets/car-11.jpg";
import car12 from "@/assets/car-12.jpg";

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
  },
  {
    id: "7",
    name: "Ferrari 488 GTB",
    image: car7,
    price: 850,
    location: "Knightsbridge",
    transmission: "Automatic",
    fuel: "Petrol",
    tags: ["Supercar", "Ferrari", "Italian"],
    brand: "Ferrari",
    year: 2022,
    seats: 2,
    description: "Pure Italian passion. 661hp of spine-tingling performance with the legendary Ferrari soundtrack.",
    available: true,
    rating: 4.9,
    reviews: 95
  },
  {
    id: "8",
    name: "Lamborghini Huracán",
    image: car8,
    price: 900,
    location: "Chelsea",
    transmission: "Automatic",
    fuel: "Petrol",
    tags: ["Supercar", "Lamborghini", "V10"],
    brand: "Lamborghini",
    year: 2023,
    seats: 2,
    description: "Raging bull unleashed. 630hp of naturally aspirated V10 fury in the most beautiful package.",
    available: true,
    rating: 4.8,
    reviews: 76
  },
  {
    id: "9",
    name: "Maserati GranTurismo",
    image: car9,
    price: 420,
    location: "Notting Hill",
    transmission: "Automatic",
    fuel: "Petrol",
    tags: ["Luxury", "Grand Tourer", "Italian"],
    brand: "Maserati",
    year: 2023,
    seats: 4,
    description: "Italian elegance personified. The perfect blend of luxury, performance, and that distinctive Maserati roar.",
    available: true,
    rating: 4.7,
    reviews: 112
  },
  {
    id: "10",
    name: "Jaguar F-Type R",
    image: car10,
    price: 380,
    location: "Marylebone",
    transmission: "Automatic",
    fuel: "Petrol",
    tags: ["Sports", "British", "Convertible"],
    brand: "Jaguar",
    year: 2023,
    seats: 2,
    description: "British sports car heritage at its finest. 575hp supercharged V8 with unmistakable Jaguar grace.",
    available: true,
    rating: 4.6,
    reviews: 88
  },
  {
    id: "11",
    name: "Rolls-Royce Ghost",
    image: car11,
    price: 1200,
    location: "Park Lane",
    transmission: "Automatic",
    fuel: "Petrol",
    tags: ["Ultra-Luxury", "Chauffeur", "Prestigious"],
    brand: "Rolls-Royce",
    year: 2023,
    seats: 5,
    description: "The pinnacle of automotive luxury. Whisper-quiet cabin, sumptuous materials, and unparalleled craftsmanship.",
    available: true,
    rating: 5.0,
    reviews: 45
  },
  {
    id: "12",
    name: "McLaren 720S",
    image: car12,
    price: 950,
    location: "South Kensington",
    transmission: "Automatic",
    fuel: "Petrol",
    tags: ["Hypercar", "Track-Focused", "Carbon Fiber"],
    brand: "McLaren",
    year: 2022,
    seats: 2,
    description: "Formula 1 technology for the road. 710hp of precision engineering in the lightest, most advanced package.",
    available: true,
    rating: 4.9,
    reviews: 63
  },
  {
    id: "13",
    name: "BMW M8 Competition",
    image: car1,
    price: 520,
    location: "Shoreditch",
    transmission: "Automatic",
    fuel: "Petrol",
    tags: ["Luxury", "Sports", "Grand Tourer"],
    brand: "BMW",
    year: 2023,
    seats: 4,
    description: "M Division's flagship. 617hp twin-turbo V8 with luxury appointments and track-bred performance.",
    available: true,
    rating: 4.7,
    reviews: 134
  },
  {
    id: "14",
    name: "Aston Martin DB11",
    image: car2,
    price: 680,
    location: "Mayfair",
    transmission: "Automatic",
    fuel: "Petrol",
    tags: ["Luxury", "British", "Grand Tourer"],
    brand: "Aston Martin",
    year: 2023,
    seats: 4,
    description: "Quintessentially British grand tourer. 630hp twin-turbo V12 with timeless Aston Martin elegance.",
    available: true,
    rating: 4.8,
    reviews: 71
  },
  {
    id: "15",
    name: "Porsche Cayenne Turbo",
    image: car4,
    price: 350,
    location: "Richmond",
    transmission: "Automatic",
    fuel: "Petrol",
    tags: ["Luxury", "SUV", "Performance"],
    brand: "Porsche",
    year: 2023,
    seats: 5,
    description: "The sports car among SUVs. 541hp twin-turbo V8 with Porsche DNA and premium comfort.",
    available: true,
    rating: 4.6,
    reviews: 198
  },
  {
    id: "16",
    name: "Tesla Model X Plaid",
    image: car5,
    price: 400,
    location: "Canary Wharf",
    transmission: "Automatic",
    fuel: "Electric",
    tags: ["Electric", "SUV", "Falcon Doors"],
    brand: "Tesla",
    year: 2023,
    seats: 7,
    description: "The fastest SUV in the world. Tri-motor setup with falcon-wing doors and cutting-edge technology.",
    available: true,
    rating: 4.5,
    reviews: 82
  },
  {
    id: "17",
    name: "Mercedes-AMG S63",
    image: car1,
    price: 600,
    location: "Belgravia",
    transmission: "Automatic",
    fuel: "Petrol",
    tags: ["Luxury", "Sedan", "Executive"],
    brand: "Mercedes-Benz",
    year: 2023,
    seats: 5,
    description: "Executive luxury meets AMG performance. 630hp hybrid powertrain with first-class comfort.",
    available: true,
    rating: 4.8,
    reviews: 156
  },
  {
    id: "18",
    name: "Bentley Bentayga Speed",
    image: car6,
    price: 800,
    location: "Hyde Park",
    transmission: "Automatic",
    fuel: "Petrol",
    tags: ["Ultra-Luxury", "SUV", "Handcrafted"],
    brand: "Bentley",
    year: 2023,
    seats: 5,
    description: "The world's most luxurious SUV. 626hp W12 engine with bespoke interior craftsmanship.",
    available: true,
    rating: 4.9,
    reviews: 34
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