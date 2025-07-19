import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "./button";
import { Menu, X, Car } from "lucide-react";

export const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const [user, setUser] = useState(() => {
    return localStorage.getItem('cruzo_user') ? JSON.parse(localStorage.getItem('cruzo_user')!) : null;
  });

  const handleLogout = () => {
    localStorage.removeItem('cruzo_user');
    setUser(null);
  };

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-card/80 backdrop-blur-md border-b border-border sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 luxury-gradient rounded-lg flex items-center justify-center">
              <Car className="w-5 h-5 text-white" />
            </div>
            <span className="text-2xl font-bold text-luxury-dark">Cruzo</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className={`text-sm font-medium transition-colors hover:text-luxury-gold ${
                isActive('/') ? 'text-luxury-gold' : 'text-foreground'
              }`}
            >
              Home
            </Link>
            <Link
              to="/browse"
              className={`text-sm font-medium transition-colors hover:text-luxury-gold ${
                isActive('/browse') ? 'text-luxury-gold' : 'text-foreground'
              }`}
            >
              Browse Cars
            </Link>
            <Link
              to="/list-car"
              className={`text-sm font-medium transition-colors hover:text-luxury-gold ${
                isActive('/list-car') ? 'text-luxury-gold' : 'text-foreground'
              }`}
            >
              List Your Car
            </Link>
            <Link
              to="/about"
              className={`text-sm font-medium transition-colors hover:text-luxury-gold ${
                isActive('/about') ? 'text-luxury-gold' : 'text-foreground'
              }`}
            >
              About
            </Link>
          </div>

          {/* User Menu */}
          <div className="hidden md:flex items-center space-x-4">
            {user ? (
              <div className="flex items-center space-x-4">
                <span className="text-sm text-muted-foreground">Welcome, {user.name}</span>
                <Link to="/dashboard/renter">
                  <Button variant="outline" size="sm">
                    Dashboard
                  </Button>
                </Link>
                <Button variant="outline" size="sm" onClick={handleLogout}>
                  Logout
                </Button>
              </div>
            ) : (
              <div className="flex items-center space-x-2">
                <Button variant="outline" size="sm">
                  Login
                </Button>
                <Button size="sm" className="gold-gradient">
                  Sign Up
                </Button>
              </div>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-card/95 rounded-lg mt-2 border border-border">
              <Link
                to="/"
                className="block px-3 py-2 text-sm font-medium text-foreground hover:text-luxury-gold"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/browse"
                className="block px-3 py-2 text-sm font-medium text-foreground hover:text-luxury-gold"
                onClick={() => setIsMenuOpen(false)}
              >
                Browse Cars
              </Link>
              <Link
                to="/list-car"
                className="block px-3 py-2 text-sm font-medium text-foreground hover:text-luxury-gold"
                onClick={() => setIsMenuOpen(false)}
              >
                List Your Car
              </Link>
              <Link
                to="/about"
                className="block px-3 py-2 text-sm font-medium text-foreground hover:text-luxury-gold"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              {user ? (
                <div className="space-y-2 pt-2">
                  <Link
                    to="/dashboard/renter"
                    className="block px-3 py-2 text-sm font-medium text-foreground hover:text-luxury-gold"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Dashboard
                  </Link>
                  <Button
                    variant="outline"
                    size="sm"
                    className="ml-3"
                    onClick={() => {
                      handleLogout();
                      setIsMenuOpen(false);
                    }}
                  >
                    Logout
                  </Button>
                </div>
              ) : (
                <div className="space-y-2 pt-2">
                  <Button variant="outline" size="sm" className="ml-3">
                    Login
                  </Button>
                  <Button size="sm" className="ml-3 gold-gradient">
                    Sign Up
                  </Button>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};