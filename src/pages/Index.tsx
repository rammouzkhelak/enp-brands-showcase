import React from "react";
import { Link } from "react-router-dom";
import HeroSection from "../components/HeroSection";
import HamburgerMenu from "../components/HamburgerMenu";
import CircularButton from "../components/CircularButton";
import Footer from "../components/Footer";
import { Mail, MapPin, Linkedin, Twitter, Instagram } from "lucide-react";

const Index: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <HamburgerMenu />
      
      {/* Hero Section */}
      <HeroSection />

      {/* About Section */}
      <section id="about-section" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl ml-16 animate-fade-in">
            <h2 className="heading-medium text-corporate-dark mb-8">
              We are the venture and growth capital arm of ENP Brands.
            </h2>
            <p className="body-large text-corporate-medium mb-12 max-w-3xl">
              We support forward-thinking founders who are crafting brands for the modern consumer. 
              We offer the global reach of ENP Brands and the agility of a skilled venture capital team. 
              The best of both worlds.
            </p>
            <Link to="/about">
              <CircularButton
                text="READ MORE • READ MORE • READ MORE • READ MORE • "
              />
            </Link>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio-section" className="py-24 bg-corporate-light">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl ml-16 animate-fade-in">
            <div className="flex items-start justify-between mb-16">
              <div className="flex-1">
                <h2 className="heading-medium text-corporate-dark mb-8">
                  We work with some of your favourite brands.
                </h2>
                <p className="body-large text-corporate-medium max-w-3xl">
                  We invest in beauty & wellness brands, commerce and technology that serve the modern consumer.
                </p>
              </div>
              <div className="ml-8">
                <Link to="/portfolio">
                  <CircularButton
                    text="VIEW OUR PORTFOLIO • VIEW OUR PORTFOLIO • "
                  />
                </Link>
              </div>
            </div>
            
            {/* Brand Grid */}
            <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
              {["Infantino", "Vitalbaby", "Headu", "Huffy", "Multiprint"].map((brand, index) => (
                <div 
                  key={brand} 
                  className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <h3 className="text-lg font-semibold text-corporate-dark text-center">
                    {brand}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section id="contact-section" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h2 className="heading-medium text-corporate-dark mb-8">
              Got tomorrow's big idea?
            </h2>
            <p className="body-large text-corporate-medium mb-12">
              We would love to hear from you.
            </p>
            <div className="flex justify-center">
              <Link to="/contact">
                <CircularButton
                  text="GET IN TOUCH • GET IN TOUCH • GET IN TOUCH • "
                />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;