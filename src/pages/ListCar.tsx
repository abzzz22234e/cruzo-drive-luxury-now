import { useState } from "react";
import { Navigation } from "@/components/ui/navigation";
import { Footer } from "@/components/ui/footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { addCar } from "@/data/cars";
import { useToast } from "@/hooks/use-toast";
import { Upload, Car, DollarSign, Calendar } from "lucide-react";

const ListCar = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    brand: "",
    year: new Date().getFullYear(),
    price: 200,
    location: "London",
    transmission: "" as "Automatic" | "Manual" | "",
    fuel: "" as "Petrol" | "Electric" | "Hybrid" | "",
    seats: 4,
    description: "",
    image: ""
  });
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const brands = ["Mercedes-Benz", "BMW", "Audi", "Porsche", "Tesla", "Bentley", "Land Rover", "Ferrari", "Lamborghini", "Maserati"];
  const availableTags = ["Luxury", "Sports", "SUV", "Electric", "Supercar", "Coupe", "Premium", "Convertible", "Hybrid"];

  const handleInputChange = (field: string, value: any) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleTagChange = (tag: string, checked: boolean) => {
    if (checked) {
      setSelectedTags(prev => [...prev, tag]);
    } else {
      setSelectedTags(prev => prev.filter(t => t !== tag));
    }
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const result = e.target?.result as string;
        setFormData(prev => ({
          ...prev,
          image: result
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Check if user is logged in
    const user = localStorage.getItem('cruzo_user');
    if (!user) {
      toast({
        title: "Login Required",
        description: "Please login to list your car",
        variant: "destructive"
      });
      setIsSubmitting(false);
      return;
    }

    // Validation
    if (!formData.name || !formData.brand || !formData.transmission || !formData.fuel) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields",
        variant: "destructive"
      });
      setIsSubmitting(false);
      return;
    }

    if (formData.price < 200) {
      toast({
        title: "Invalid Price",
        description: "Minimum price is £200 per day",
        variant: "destructive"
      });
      setIsSubmitting(false);
      return;
    }

    if (selectedTags.length === 0) {
      toast({
        title: "Select Tags",
        description: "Please select at least one tag for your car",
        variant: "destructive"
      });
      setIsSubmitting(false);
      return;
    }

    try {
      // Create the car listing
      const newCar = addCar({
        ...formData,
        transmission: formData.transmission as "Automatic" | "Manual",
        fuel: formData.fuel as "Petrol" | "Electric" | "Hybrid",
        tags: selectedTags,
        image: formData.image || "/placeholder.svg" // Use placeholder if no image
      });

      toast({
        title: "Car Listed Successfully! 🎉",
        description: `Your ${formData.name} is now live on Cruzo`,
        duration: 5000
      });

      // Reset form
      setFormData({
        name: "",
        brand: "",
        year: new Date().getFullYear(),
        price: 200,
        location: "London",
        transmission: "" as "Automatic" | "Manual" | "",
        fuel: "" as "Petrol" | "Electric" | "Hybrid" | "",
        seats: 4,
        description: "",
        image: ""
      });
      setSelectedTags([]);

      // Redirect to owner dashboard after a short delay
      setTimeout(() => {
        window.location.href = '/dashboard/owner';
      }, 2000);

    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to list your car. Please try again.",
        variant: "destructive"
      });
    }

    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-luxury-dark mb-4">List Your Luxury Car</h1>
          <p className="text-lg text-muted-foreground">
            Join thousands of car owners earning premium income on Cruzo
          </p>
        </div>

        {/* Benefits Banner */}
        <div className="bg-gradient-to-r from-luxury-gold to-luxury-gold-light p-6 rounded-2xl mb-8 text-luxury-dark">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
            <div>
              <Car className="w-8 h-8 mx-auto mb-2" />
              <h3 className="font-semibold">Premium Marketplace</h3>
              <p className="text-sm">Luxury car rental platform</p>
            </div>
            <div>
              <DollarSign className="w-8 h-8 mx-auto mb-2" />
              <h3 className="font-semibold">Top Earnings</h3>
              <p className="text-sm">Earn £200-£750+ per day</p>
            </div>
            <div>
              <Calendar className="w-8 h-8 mx-auto mb-2" />
              <h3 className="font-semibold">Your Schedule</h3>
              <p className="text-sm">You control availability</p>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>Car Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium">Car Name *</label>
                  <Input
                    placeholder="e.g., BMW M5 Competition 2023"
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    required
                  />
                </div>
                
                <div>
                  <label className="text-sm font-medium">Brand *</label>
                  <Select value={formData.brand} onValueChange={(value) => handleInputChange('brand', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select brand" />
                    </SelectTrigger>
                    <SelectContent>
                      {brands.map(brand => (
                        <SelectItem key={brand} value={brand}>{brand}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="text-sm font-medium">Year</label>
                  <Input
                    type="number"
                    min="2010"
                    max={new Date().getFullYear() + 1}
                    value={formData.year}
                    onChange={(e) => handleInputChange('year', parseInt(e.target.value))}
                  />
                </div>
                
                <div>
                  <label className="text-sm font-medium">Transmission *</label>
                  <Select value={formData.transmission} onValueChange={(value) => handleInputChange('transmission', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Automatic">Automatic</SelectItem>
                      <SelectItem value="Manual">Manual</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <label className="text-sm font-medium">Fuel Type *</label>
                  <Select value={formData.fuel} onValueChange={(value) => handleInputChange('fuel', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Petrol">Petrol</SelectItem>
                      <SelectItem value="Electric">Electric</SelectItem>
                      <SelectItem value="Hybrid">Hybrid</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium">Seats</label>
                  <Input
                    type="number"
                    min="2"
                    max="8"
                    value={formData.seats}
                    onChange={(e) => handleInputChange('seats', parseInt(e.target.value))}
                  />
                </div>
                
                <div>
                  <label className="text-sm font-medium">Location</label>
                  <Input
                    placeholder="London, UK"
                    value={formData.location}
                    onChange={(e) => handleInputChange('location', e.target.value)}
                  />
                </div>
              </div>

              <div>
                <label className="text-sm font-medium">Description</label>
                <Textarea
                  placeholder="Describe your car's features, condition, and what makes it special..."
                  value={formData.description}
                  onChange={(e) => handleInputChange('description', e.target.value)}
                  rows={3}
                />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Car Image</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                <Upload className="w-12 h-12 mx-auto mb-4 text-gray-400" />
                <p className="text-sm text-gray-600 mb-4">Upload a high-quality image of your car</p>
                <Input
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="max-w-xs mx-auto"
                />
                {formData.image && (
                  <div className="mt-4">
                    <img
                      src={formData.image}
                      alt="Car preview"
                      className="w-48 h-32 object-cover mx-auto rounded-lg"
                    />
                  </div>
                )}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Categories & Tags</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <label className="text-sm font-medium">Select categories that describe your car *</label>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                  {availableTags.map((tag) => (
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
                {selectedTags.length > 0 && (
                  <div className="flex flex-wrap gap-1 mt-2">
                    {selectedTags.map(tag => (
                      <Badge key={tag} variant="secondary">{tag}</Badge>
                    ))}
                  </div>
                )}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Pricing</CardTitle>
            </CardHeader>
            <CardContent>
              <div>
                <label className="text-sm font-medium">Price per day (£) *</label>
                <Input
                  type="number"
                  min="200"
                  max="2000"
                  value={formData.price}
                  onChange={(e) => handleInputChange('price', parseInt(e.target.value))}
                  placeholder="200"
                />
                <p className="text-xs text-muted-foreground mt-1">
                  Minimum price is £200. We recommend £{Math.floor(formData.price * 0.8)}-£{Math.floor(formData.price * 1.2)} based on similar cars.
                </p>
              </div>
            </CardContent>
          </Card>

          <Button
            type="submit"
            className="w-full h-12 text-lg gold-gradient"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Listing Your Car..." : "List My Car"}
          </Button>
        </form>
      </div>
      
      <Footer />
    </div>
  );
};

export default ListCar;