import React, { useEffect } from "react";
import HamburgerMenu from "../components/HamburgerMenu";
import { ArrowLeft, Mail, MapPin, Linkedin, Twitter, Instagram } from "lucide-react";
import { Link } from "react-router-dom";

const Contact: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <HamburgerMenu />
      
      {/* Header */}
      <header className="relative py-20 bg-corporate-light">
        <div className="container mx-auto px-6">
          <h1 className="heading-large text-corporate-dark">Get In Touch</h1>
          <p className="body-large text-corporate-medium mt-6 max-w-3xl">
            Got tomorrow's big idea? We would love to hear from you.
          </p>
        </div>
      </header>

      {/* Contact Content */}
      <main className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16">
            {/* Contact Information */}
            <div className="animate-fade-in">
              <h2 className="heading-medium text-corporate-dark mb-8">
                Let's Build Something Great Together
              </h2>
              <p className="body-medium text-corporate-medium mb-8">
                Whether you're an entrepreneur with a groundbreaking idea or an established brand looking to scale, 
                we're here to help you succeed. Our team brings decades of experience in consumer brands, 
                venture capital, and global market expansion.
              </p>
              
              {/* Contact Details */}
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <MapPin className="w-6 h-6 text-corporate-accent mt-1" />
                  <div>
                    <h3 className="font-semibold text-corporate-dark mb-1">Locations</h3>
                    <p className="text-corporate-medium">London & New York</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Mail className="w-6 h-6 text-corporate-accent mt-1" />
                  <div>
                    <h3 className="font-semibold text-corporate-dark mb-1">Email</h3>
                    <p className="text-corporate-medium">hello@enpbrands.com</p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="mt-12">
                <h3 className="font-semibold text-corporate-dark mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  <a href="#" className="w-10 h-10 bg-corporate-light rounded-full flex items-center justify-center hover:bg-corporate-accent hover:text-white transition-all duration-300">
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a href="#" className="w-10 h-10 bg-corporate-light rounded-full flex items-center justify-center hover:bg-corporate-accent hover:text-white transition-all duration-300">
                    <Twitter className="w-5 h-5" />
                  </a>
                  <a href="#" className="w-10 h-10 bg-corporate-light rounded-full flex items-center justify-center hover:bg-corporate-accent hover:text-white transition-all duration-300">
                    <Instagram className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="animate-slide-up">
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="heading-small text-corporate-dark mb-6">Send us a message</h3>
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-corporate-dark mb-2">
                        First Name
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 border border-corporate-light rounded-lg focus:outline-none focus:ring-2 focus:ring-corporate-accent"
                        placeholder="John"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-corporate-dark mb-2">
                        Last Name
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 border border-corporate-light rounded-lg focus:outline-none focus:ring-2 focus:ring-corporate-accent"
                        placeholder="Smith"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-corporate-dark mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 border border-corporate-light rounded-lg focus:outline-none focus:ring-2 focus:ring-corporate-accent"
                      placeholder="john@example.com"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-corporate-dark mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-corporate-light rounded-lg focus:outline-none focus:ring-2 focus:ring-corporate-accent"
                      placeholder="Your Company"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-corporate-dark mb-2">
                      Message
                    </label>
                    <textarea
                      rows={6}
                      className="w-full px-4 py-3 border border-corporate-light rounded-lg focus:outline-none focus:ring-2 focus:ring-corporate-accent resize-none"
                      placeholder="Tell us about your project or idea..."
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full bg-corporate-dark text-white py-3 px-6 rounded-lg hover:bg-corporate-medium transition-colors duration-300 font-semibold"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Contact;