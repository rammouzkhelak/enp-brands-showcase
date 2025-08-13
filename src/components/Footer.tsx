import React from "react";
import { Linkedin, Twitter, Instagram } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-corporate-dark py-16">
      <div className="container mx-auto px-6">
        <div className="text-center">
          {/* Logo */}
          <h2 className="text-3xl font-bold text-white mb-12">
            ENP Brands
          </h2>
          
          {/* Footer Grid */}
          <div className="grid md:grid-cols-3 gap-12 max-w-4xl mx-auto">
            {/* Locations */}
            <div className="text-center">
              <h3 className="text-sm font-semibold text-white/70 uppercase tracking-wider mb-4">
                Locations
              </h3>
              <p className="text-xl font-semibold text-white">
                London & New York
              </p>
            </div>
            
            {/* Email */}
            <div className="text-center">
              <h3 className="text-sm font-semibold text-white/70 uppercase tracking-wider mb-4">
                Email
              </h3>
              <p className="text-xl font-semibold text-white">
                hello@enpbrands.com
              </p>
            </div>
            
            {/* Social */}
            <div className="text-center">
              <h3 className="text-sm font-semibold text-white/70 uppercase tracking-wider mb-4">
                Social
              </h3>
              <div className="flex justify-center space-x-4">
                <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors duration-300">
                  <Linkedin className="w-5 h-5 text-white" />
                </a>
                <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors duration-300">
                  <Twitter className="w-5 h-5 text-white" />
                </a>
                <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors duration-300">
                  <Instagram className="w-5 h-5 text-white" />
                </a>
              </div>
            </div>
          </div>
          
          {/* Copyright */}
          <div className="mt-16 pt-8 border-t border-white/10">
            <p className="text-white/60 text-sm">
              © ENP Brands 2024 • Privacy Policy • Legal Notice • Cookie Notice
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;