import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { Navigation } from "@/components/ui/navigation";
import { Footer } from "@/components/ui/footer";
import { CarCard } from "@/components/car-card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { getCars, Car } from "@/data/cars";
import { Filter, X } from "lucide-react";

const Browse = () => {
  const [searchParams] = useSearchParams();
  const [cars, setCars] = useState<Car[]>([]);
  const [filteredCars, setFilteredCars] = useState<Car[]>([]);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  
  // Filter states
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState([200, 1500]);
  const [selectedTransmission, setSelectedTransmission] = useState("");
  const [selectedFuel, setSelectedFuel] = useState("");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState("featured");

  const brands = ["Mercedes-Benz", "Audi", "Porsche", "BMW", "Tesla", "Bentley", "Land Rover", "Ferrari", "Lamborghini", "Maserati", "Jaguar", "Rolls-Royce", "McLaren", "Aston Martin"];
  const tags = ["Luxury", "Sports", "SUV", "Electric", "Supercar", "Coupe", "Premium", "Ultra-Luxury", "Grand Tourer", "Hypercar", "British", "Italian", "German"];

  useEffect(() => {
    const allCars = getCars();
    setCars(allCars);
    setFilteredCars(allCars);
    
    // Apply initial search params
    const location = searchParams.get('location');
    const type = searchParams.get('type');
    if (type) {
      setSelectedTags([type]);
    }
  }, [searchParams]);

  useEffect(() => {
    let filtered = cars.filter(car => {
      // Search query
      if (searchQuery && !car.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
          !car.brand.toLowerCase().includes(searchQuery.toLowerCase())) {
        return false;
      }
      
      // Brand filter
      if (selectedBrands.length > 0 && !selectedBrands.includes(car.brand)) {
        return false;
      }
      
      // Price range
      if (car.price < priceRange[0] || car.price > priceRange[1]) {
        return false;
      }
      
      // Transmission
      if (selectedTransmission && selectedTransmission !== "all" && car.transmission !== selectedTransmission) {
        return false;
      }
      
      // Fuel type
      if (selectedFuel && selectedFuel !== "all" && car.fuel !== selectedFuel) {
        return false;
      }
      
      // Tags
      if (selectedTags.length > 0 && !selectedTags.some(tag => car.tags.includes(tag))) {
        return false;
      }
      
      return true;
    });

    // Sort cars
    switch (sortBy) {
      case "price-low":
        filtered.sort((a, b) => a.price - b.price);
        break;
      case "price-high":
        filtered.sort((a, b) => b.price - a.price);
        break;
      case "rating":
        filtered.sort((a, b) => (b.rating || 0) - (a.rating || 0));
        break;
      case "newest":
        filtered.sort((a, b) => b.year - a.year);
        break;
      default:
        // Featured - keep original order
        break;
    }

    setFilteredCars(filtered);
  }, [cars, searchQuery, selectedBrands, priceRange, selectedTransmission, selectedFuel, selectedTags, sortBy]);

  const handleBrandChange = (brand: string, checked: boolean) => {
    if (checked) {
      setSelectedBrands([...selectedBrands, brand]);
    } else {
      setSelectedBrands(selectedBrands.filter(b => b !== brand));
    }
  };

  const handleTagChange = (tag: string, checked: boolean) => {
    if (checked) {
      setSelectedTags([...selectedTags, tag]);
    } else {
      setSelectedTags(selectedTags.filter(t => t !== tag));
    }
  };

  const clearFilters = () => {
    setSearchQuery("");
    setSelectedBrands([]);
    setPriceRange([200, 1500]);
    setSelectedTransmission("");
    setSelectedFuel("");
    setSelectedTags([]);
    setSortBy("featured");
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-4xl font-bold text-luxury-dark mb-2">Browse Luxury Cars</h1>
            <p className="text-muted-foreground">
              {filteredCars.length} cars available
            </p>
          </div>
          
          <div className="flex items-center space-x-4">
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-48">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="featured">Featured</SelectItem>
                <SelectItem value="price-low">Price: Low to High</SelectItem>
                <SelectItem value="price-high">Price: High to Low</SelectItem>
                <SelectItem value="rating">Highest Rated</SelectItem>
                <SelectItem value="newest">Newest First</SelectItem>
              </SelectContent>
            </Select>
            
            <Button
              variant="outline"
              onClick={() => setIsFilterOpen(!isFilterOpen)}
              className="md:hidden"
            >
              <Filter className="w-4 h-4 mr-2" />
              Filters
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Filters Sidebar */}
          <div className={`lg:block ${isFilterOpen ? 'block' : 'hidden'} space-y-6`}>
            <div className="bg-card p-6 rounded-xl card-shadow">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold">Filters</h3>
                <Button variant="ghost" size="sm" onClick={clearFilters}>
                  Clear All
                </Button>
              </div>
              
              {/* Search */}
              <div className="space-y-2 mb-6">
                <label className="text-sm font-medium">Search</label>
                <Input
                  placeholder="Search cars..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              
              {/* Price Range */}
              <div className="space-y-2 mb-6">
                <label className="text-sm font-medium">
                  Price Range: £{priceRange[0]} - £{priceRange[1]}
                </label>
                <Slider
                  value={priceRange}
                  onValueChange={setPriceRange}
                  max={1500}
                  min={200}
                  step={50}
                  className="w-full"
                />
              </div>
              
              {/* Brands */}
              <div className="space-y-2 mb-6">
                <label className="text-sm font-medium">Brand</label>
                <div className="space-y-2">
                  {brands.map((brand) => (
                    <div key={brand} className="flex items-center space-x-2">
                      <Checkbox
                        id={brand}
                        checked={selectedBrands.includes(brand)}
                        onCheckedChange={(checked) => handleBrandChange(brand, checked as boolean)}
                      />
                      <label htmlFor={brand} className="text-sm">{brand}</label>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Transmission */}
              <div className="space-y-2 mb-6">
                <label className="text-sm font-medium">Transmission</label>
                <Select value={selectedTransmission} onValueChange={setSelectedTransmission}>
                  <SelectTrigger>
                    <SelectValue placeholder="Any" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Any</SelectItem>
                    <SelectItem value="Automatic">Automatic</SelectItem>
                    <SelectItem value="Manual">Manual</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              {/* Fuel Type */}
              <div className="space-y-2 mb-6">
                <label className="text-sm font-medium">Fuel Type</label>
                <Select value={selectedFuel} onValueChange={setSelectedFuel}>
                  <SelectTrigger>
                    <SelectValue placeholder="Any" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Any</SelectItem>
                    <SelectItem value="Petrol">Petrol</SelectItem>
                    <SelectItem value="Electric">Electric</SelectItem>
                    <SelectItem value="Hybrid">Hybrid</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              {/* Tags */}
              <div className="space-y-2">
                <label className="text-sm font-medium">Category</label>
                <div className="space-y-2">
                  {tags.map((tag) => (
                    <div key={tag} className="flex items-center space-x-2">
                      <Checkbox
                        id={tag}
                        checked={selectedTags.includes(tag)}
                        onCheckedChange={(checked) => handleTagChange(tag, checked as boolean)}
                      />
                      <label htmlFor={tag} className="text-sm">{tag}</label>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          {/* Cars Grid */}
          <div className="lg:col-span-3">
            {filteredCars.length === 0 ? (
              <div className="text-center py-12">
                <h3 className="text-2xl font-semibold text-luxury-dark mb-2">No cars found</h3>
                <p className="text-muted-foreground mb-4">Try adjusting your filters</p>
                <Button onClick={clearFilters} variant="outline">
                  Clear Filters
                </Button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredCars.map((car) => (
                  <CarCard key={car.id} car={car} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Browse;
