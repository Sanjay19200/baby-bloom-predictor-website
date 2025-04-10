
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-100">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2">
              <span className="text-xl font-bold gradient-text">BabyBloom</span>
              <span className="text-xs px-2 py-1 rounded-full bg-medical-100 text-medical-800 font-medium">
                Predictor
              </span>
            </Link>
            <p className="text-gray-600 text-sm">
              Advanced preterm birth detection technology empowering healthcare professionals and expectant mothers.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-medical-600 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-medical-600 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-medical-600 transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-medium text-gray-900 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-600 hover:text-medical-600 text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-600 hover:text-medical-600 text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/predict" className="text-gray-600 hover:text-medical-600 text-sm">
                  Prediction Tool
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-600 hover:text-medical-600 text-sm">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium text-gray-900 mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-600 hover:text-medical-600 text-sm">
                  Research Papers
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-medical-600 text-sm">
                  Medical Guidelines
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-medical-600 text-sm">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-medical-600 text-sm">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium text-gray-900 mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Mail size={16} className="mr-2 text-medical-600 mt-0.5" />
                <span className="text-gray-600 text-sm">support@babybloom.com</span>
              </li>
              <li className="flex items-start">
                <Phone size={16} className="mr-2 text-medical-600 mt-0.5" />
                <span className="text-gray-600 text-sm">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-start">
                <MapPin size={16} className="mr-2 text-medical-600 mt-0.5" />
                <span className="text-gray-600 text-sm">123 Healthcare Ave, Medical District, CA 90210</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-12 pt-6 text-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} BabyBloom Predictor. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
