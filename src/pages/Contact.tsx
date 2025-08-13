import React, { useEffect } from "react";
import HamburgerMenu from "../components/HamburgerMenu";
import Footer from "../components/Footer";
import CircularButton from "../components/CircularButton";
import { ArrowLeft, Mail, MapPin, Linkedin, Twitter, Instagram } from "lucide-react";
import { Link } from "react-router-dom";

const Contact: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const scrollToLocations = () => {
    const locationsSection = document.getElementById('locations-section');
    if (locationsSection) {
      locationsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <HamburgerMenu />
      
      {/* First Section: Hero with Email and Scroll Button */}
      <section className="py-20 flex flex-col items-center justify-center px-6 relative">
        <div className="max-w-6xl mx-auto w-full">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
            {/* Left side: Heading and Email */}
            <div className="text-left flex-1">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight">
                We are ready when you are
              </h1>
              <div className="mt-8">
                <p className="text-lg md:text-xl text-gray-300 mb-2">Email us at</p>
                <a href="mailto:hello@enpbrands.com" className="text-2xl md:text-3xl font-semibold hover:text-gray-300 transition-colors">
                  hello@enpbrands.com
                </a>
              </div>
            </div>
            
            {/* Right side: Circular Button */}
            <div className="flex-shrink-0">
              <CircularButton 
                text="OUR LOCATIONS • OUR LOCATIONS • " 
                arrowDirection="down"
                onClick={scrollToLocations}
                className="text-white"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Second Section: Our Locations */}
      <section id="locations-section" className="py-10 px-6">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">Our locations</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* London */}
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">London</h3>
              <div className="space-y-1 text-gray-300 text-sm">
                <p className="font-semibold text-white">ENP Brands</p>
                <p>52 Conduit Street</p>
                <p>London</p>
                <p>W1S 2YX</p>
                <p>UK</p>
              </div>
              <button className="mt-4 text-xs font-semibold text-white border-b border-white/30 hover:border-white transition-colors">
                GOOGLE MAPS
              </button>
            </div>
            
            {/* New York */}
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">New York</h3>
              <div className="space-y-1 text-gray-300 text-sm">
                <p className="font-semibold text-white">ENP Brands America</p>
                <p>Private Ltd</p>
                <p>ENP House</p>
                <p>BD Sawant Marg</p>
                <p>Chakala, Andheri East</p>
                <p>New York 10001</p>
                <p>USA</p>
              </div>
              <button className="mt-4 text-xs font-semibold text-white border-b border-white/30 hover:border-white transition-colors">
                GOOGLE MAPS
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Third Section: Find Us Online */}
      <section className="py-20 px-6 border-t border-gray-800">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-12">Find us online</h2>
          
          {/* Social Media Icons */}
          <div className="flex justify-center space-x-8">
            <a href="#" className="w-12 h-12 flex items-center justify-center border border-gray-600 rounded-full hover:bg-white hover:text-black transition-all duration-300">
              <Instagram className="w-6 h-6" />
            </a>
            <a href="#" className="w-12 h-12 flex items-center justify-center border border-gray-600 rounded-full hover:bg-white hover:text-black transition-all duration-300">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="#" className="w-12 h-12 flex items-center justify-center border border-gray-600 rounded-full hover:bg-white hover:text-black transition-all duration-300">
              <Twitter className="w-6 h-6" />
            </a>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Contact;