import { Link } from "react-router-dom";
import { Car, Phone, Mail, MapPin } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-luxury-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 gold-gradient rounded-lg flex items-center justify-center">
                <Car className="w-5 h-5 text-luxury-dark" />
              </div>
              <span className="text-2xl font-bold">Cruzo</span>
            </div>
            <p className="text-gray-300 text-sm">
              Premium car rental platform connecting drivers with luxury vehicles across the UK.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <div className="space-y-2 text-sm">
              <Link to="/browse" className="block text-gray-300 hover:text-luxury-gold transition-colors">
                Browse Cars
              </Link>
              <Link to="/list-car" className="block text-gray-300 hover:text-luxury-gold transition-colors">
                List Your Car
              </Link>
              <Link to="/about" className="block text-gray-300 hover:text-luxury-gold transition-colors">
                About Us
              </Link>
              <Link to="/help" className="block text-gray-300 hover:text-luxury-gold transition-colors">
                Help & FAQ
              </Link>
            </div>
          </div>

          {/* Legal */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Legal</h3>
            <div className="space-y-2 text-sm">
              <Link to="/terms" className="block text-gray-300 hover:text-luxury-gold transition-colors">
                Terms & Conditions
              </Link>
              <Link to="/privacy" className="block text-gray-300 hover:text-luxury-gold transition-colors">
                Privacy Policy
              </Link>
              <a href="#" className="block text-gray-300 hover:text-luxury-gold transition-colors">
                Insurance Policy
              </a>
              <a href="#" className="block text-gray-300 hover:text-luxury-gold transition-colors">
                Cancellation Policy
              </a>
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-2 text-gray-300">
                <Phone className="w-4 h-4" />
                <span>+44 20 7946 0958</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-300">
                <Mail className="w-4 h-4" />
                <span>hello@cruzo.co.uk</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-300">
                <MapPin className="w-4 h-4" />
                <span>London, United Kingdom</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © 2024 Cruzo. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm">
              Made by سعد aka saaadoooooni
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};