
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-blue-900 via-blue-800 to-green-800 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <img
              src="/lovable-uploads/818e18cf-a403-4072-83d4-7840a3e6426d.png"
              alt="Sama Energy"
              className="h-12 w-auto"
            />
            <p className="text-blue-100 text-sm leading-relaxed">
              Leading provider of renewable energy solutions, specializing in solar technology and sustainable energy systems.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-blue-200 hover:text-green-400 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-blue-200 hover:text-green-400 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-blue-200 hover:text-green-400 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-blue-200 hover:text-green-400 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-green-400">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-blue-100 hover:text-green-400 transition-colors text-sm">Home</a></li>
              <li><a href="#services" className="text-blue-100 hover:text-green-400 transition-colors text-sm">Our Services</a></li>
              <li><a href="#training" className="text-blue-100 hover:text-green-400 transition-colors text-sm">Training</a></li>
              <li><a href="#careers" className="text-blue-100 hover:text-green-400 transition-colors text-sm">Careers</a></li>
            </ul>
          </div>

          {/* Sectors */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-green-400">Our Sectors</h3>
            <ul className="space-y-2">
              <li><a href="#trade-sector" className="text-blue-100 hover:text-green-400 transition-colors text-sm">Trade Sector</a></li>
              <li><a href="#consulting-sector" className="text-blue-100 hover:text-green-400 transition-colors text-sm">Consulting & Services</a></li>
              <li><a href="#factory-sector" className="text-blue-100 hover:text-green-400 transition-colors text-sm">Factory Installation</a></li>
              <li><a href="#training-sector" className="text-blue-100 hover:text-green-400 transition-colors text-sm">Training & Employment</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-green-400">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-green-400" />
                <span className="text-blue-100 text-sm">info@samaenergy.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-green-400" />
                <span className="text-blue-100 text-sm">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-green-400" />
                <span className="text-blue-100 text-sm">123 Solar Street, Energy City, EC 12345</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-blue-700/30 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-blue-200 text-sm">
            © 2024 Sama Energy. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-blue-200 hover:text-green-400 transition-colors text-sm">Privacy Policy</a>
            <a href="#" className="text-blue-200 hover:text-green-400 transition-colors text-sm">Terms of Service</a>
            <a href="#" className="text-blue-200 hover:text-green-400 transition-colors text-sm">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
