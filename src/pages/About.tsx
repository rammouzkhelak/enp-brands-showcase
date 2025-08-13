import React from "react";
import HamburgerMenu from "../components/HamburgerMenu";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-background">
      <HamburgerMenu />
      
      {/* Header */}
      <header className="relative py-20 bg-corporate-light">
        <div className="container mx-auto px-6">
          <Link to="/" className="inline-flex items-center space-x-2 text-corporate-medium hover:text-corporate-dark transition-colors mb-8">
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Home</span>
          </Link>
          <h1 className="heading-large text-corporate-dark">About ENP Brands</h1>
          <p className="body-large text-corporate-medium mt-6 max-w-3xl">
            We are the venture and growth capital arm specializing in consumer brands that matter.
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="animate-fade-in">
              <h2 className="heading-medium text-corporate-dark mb-8">
                Our Mission
              </h2>
              <p className="body-medium text-corporate-medium mb-6">
                We support forward-thinking founders who are crafting brands for the modern consumer. 
                We offer global reach and the agility of a skilled venture capital team.
              </p>
              <p className="body-medium text-corporate-medium mb-6">
                Our portfolio spans across multiple categories including children's products, 
                lifestyle brands, and innovative consumer solutions. Each brand in our portfolio 
                represents our commitment to quality, innovation, and market leadership.
              </p>
              <p className="body-medium text-corporate-medium">
                The best of both worlds - entrepreneurial spirit with corporate backing.
              </p>
            </div>
            
            <div className="animate-slide-up">
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="heading-small text-corporate-dark mb-6">Our Values</h3>
                <ul className="space-y-4">
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-corporate-accent rounded-full mt-2"></div>
                    <span className="body-medium text-corporate-medium">Innovation-driven approach</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-corporate-accent rounded-full mt-2"></div>
                    <span className="body-medium text-corporate-medium">Consumer-first mindset</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-corporate-accent rounded-full mt-2"></div>
                    <span className="body-medium text-corporate-medium">Global market expertise</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-corporate-accent rounded-full mt-2"></div>
                    <span className="body-medium text-corporate-medium">Sustainable growth focus</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default About;