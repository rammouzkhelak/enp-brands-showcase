import React from "react";
import { Link } from "react-router-dom";
import HeroSection from "../components/HeroSection";
import HamburgerMenu from "../components/HamburgerMenu";
import CircularButton from "../components/CircularButton";
import Footer from "../components/Footer";
import { Mail, MapPin, Linkedin, Twitter, Instagram } from "lucide-react";
import trueBotanicalsImg from "../assets/brands/true-botanicals.jpg";
import instacartImg from "../assets/brands/instacart.jpg";
import nutrafolImg from "../assets/brands/nutrafol.jpg";
import frankBodyImg from "../assets/brands/frank-body.jpg";
import plumImg from "../assets/brands/plum.jpg";

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
      <section id="about-section" className="py-16 bg-white">
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
      <section id="portfolio-section" className="py-16 bg-corporate-light">
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
            <div className="space-y-8">
              {/* Top Row - 2 Large Images */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="group relative overflow-hidden rounded-lg shadow-lg cursor-pointer h-80 animate-fade-in">
                  <img 
                    src={trueBotanicalsImg} 
                    alt="True Botanicals"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-50 transition-all duration-300"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform transition-all duration-300 group-hover:-translate-y-2">
                    <h3 className="text-2xl font-bold mb-2 transition-all duration-300">True Botanicals</h3>
                    <p className="text-sm opacity-0 group-hover:opacity-100 transition-all duration-300 delay-100">
                      Skincare with natural and organic ingredients
                    </p>
                  </div>
                </div>
                
                <div className="group relative overflow-hidden rounded-lg shadow-lg cursor-pointer h-80 animate-fade-in" style={{ animationDelay: '0.1s' }}>
                  <img 
                    src={instacartImg} 
                    alt="Instacart"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-50 transition-all duration-300"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform transition-all duration-300 group-hover:-translate-y-2">
                    <h3 className="text-2xl font-bold mb-2 transition-all duration-300">Instacart</h3>
                    <p className="text-sm opacity-0 group-hover:opacity-100 transition-all duration-300 delay-100">
                      Groceries delivered in as little as one hour
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Bottom Row - 3 Smaller Images */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="group relative overflow-hidden rounded-lg shadow-lg cursor-pointer h-64 animate-fade-in" style={{ animationDelay: '0.2s' }}>
                  <img 
                    src={nutrafolImg} 
                    alt="Nutrafol"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-50 transition-all duration-300"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform transition-all duration-300 group-hover:-translate-y-2">
                    <h3 className="text-xl font-bold mb-1 transition-all duration-300">Nutrafol</h3>
                    <p className="text-xs opacity-0 group-hover:opacity-100 transition-all duration-300 delay-100">
                      Hair wellness supplements
                    </p>
                  </div>
                </div>
                
                <div className="group relative overflow-hidden rounded-lg shadow-lg cursor-pointer h-64 animate-fade-in" style={{ animationDelay: '0.3s' }}>
                  <img 
                    src={frankBodyImg} 
                    alt="Frank Body"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-50 transition-all duration-300"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform transition-all duration-300 group-hover:-translate-y-2">
                    <h3 className="text-xl font-bold mb-1 transition-all duration-300">Frank Body</h3>
                    <p className="text-xs opacity-0 group-hover:opacity-100 transition-all duration-300 delay-100">
                      Australian made coffee scrubs
                    </p>
                  </div>
                </div>
                
                <div className="group relative overflow-hidden rounded-lg shadow-lg cursor-pointer h-64 animate-fade-in" style={{ animationDelay: '0.4s' }}>
                  <img 
                    src={plumImg} 
                    alt="Plum"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-50 transition-all duration-300"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform transition-all duration-300 group-hover:-translate-y-2">
                    <h3 className="text-xl font-bold mb-1 transition-all duration-300">Plum</h3>
                    <p className="text-xs opacity-0 group-hover:opacity-100 transition-all duration-300 delay-100">
                      Modern skincare and beauty
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section id="contact-section" className="py-16 bg-white">
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