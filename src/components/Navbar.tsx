
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  
  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <span className="text-xl font-bold gradient-text">BabyBloom</span>
              <span className="hidden sm:inline-block text-xs px-2 py-1 rounded-full bg-medical-100 text-medical-800 font-medium">
                Predictor
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link 
              to="/" 
              className={`nav-link ${isActive('/') ? 'nav-link-active' : ''}`}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className={`nav-link ${isActive('/about') ? 'nav-link-active' : ''}`}
            >
              About
            </Link>
            <Link 
              to="/predict" 
              className={`nav-link ${isActive('/predict') ? 'nav-link-active' : ''}`}
            >
              Prediction Tool
            </Link>
            <Link 
              to="/contact" 
              className={`nav-link ${isActive('/contact') ? 'nav-link-active' : ''}`}
            >
              Contact Us
            </Link>
            <Button className="bg-medical-600 hover:bg-medical-700 text-white">
              Get Started
            </Button>
          </nav>

          {/* Mobile Navigation Toggle */}
          <div className="md:hidden">
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="space-y-1 px-4 pb-5 pt-2 bg-white border-t">
            <Link 
              to="/"
              onClick={() => setIsMenuOpen(false)}
              className={`block px-3 py-2 rounded-md ${
                isActive('/') ? 'bg-medical-50 text-medical-600 font-medium' : 'text-gray-600'
              }`}
            >
              Home
            </Link>
            <Link
              to="/about"
              onClick={() => setIsMenuOpen(false)}
              className={`block px-3 py-2 rounded-md ${
                isActive('/about') ? 'bg-medical-50 text-medical-600 font-medium' : 'text-gray-600'
              }`}
            >
              About
            </Link>
            <Link
              to="/predict"
              onClick={() => setIsMenuOpen(false)}
              className={`block px-3 py-2 rounded-md ${
                isActive('/predict') ? 'bg-medical-50 text-medical-600 font-medium' : 'text-gray-600'
              }`}
            >
              Prediction Tool
            </Link>
            <Link
              to="/contact"
              onClick={() => setIsMenuOpen(false)}
              className={`block px-3 py-2 rounded-md ${
                isActive('/contact') ? 'bg-medical-50 text-medical-600 font-medium' : 'text-gray-600'
              }`}
            >
              Contact Us
            </Link>
            <div className="pt-2">
              <Button className="w-full bg-medical-600 hover:bg-medical-700 text-white">
                Get Started
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
