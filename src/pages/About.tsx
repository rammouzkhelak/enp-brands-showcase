import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import HamburgerMenu from "../components/HamburgerMenu";
import CircularButton from "../components/CircularButton";
import ScrollCarousel from "../components/ScrollCarousel";
import Footer from "../components/Footer";

const About: React.FC = () => {
  const navigate = useNavigate();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Sample images for carousels - you can replace with actual brand images
  const carouselImages1 = [
    "/lovable-uploads/809c785e-28aa-455f-a593-c2397c23f4a3.png",
    "/lovable-uploads/298b60f0-ce09-4bd0-9014-48cc5ce67550.png",
    "/lovable-uploads/809c785e-28aa-455f-a593-c2397c23f4a3.png",
    "/lovable-uploads/298b60f0-ce09-4bd0-9014-48cc5ce67550.png"
  ];

  const carouselImages2 = [
    "/lovable-uploads/298b60f0-ce09-4bd0-9014-48cc5ce67550.png",
    "/lovable-uploads/809c785e-28aa-455f-a593-c2397c23f4a3.png",
    "/lovable-uploads/298b60f0-ce09-4bd0-9014-48cc5ce67550.png",
    "/lovable-uploads/809c785e-28aa-455f-a593-c2397c23f4a3.png"
  ];

  return (
    <div className="min-h-screen bg-background">
      <HamburgerMenu />
      
      {/* About Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6 text-center">
          <p className="text-sm uppercase tracking-wider text-corporate-medium mb-8">ABOUT</p>
          <h1 className="text-4xl md:text-6xl font-bold text-corporate-dark mb-8 max-w-5xl mx-auto leading-tight">
            Building brands and scaling businesses is in our DNA
          </h1>
          <p className="text-lg text-corporate-medium max-w-4xl mx-auto leading-relaxed">
            We empower a new breed of forward-thinking entrepreneurs with big ideas, to help them build strong 
            brands or technology solutions that stand out and move the world forward. We understand the highly 
            specific needs of a consumer start-up. For over twenty years, we have helped build strong brands and 
            businesses. We bring unrivalled expertise and leadership in the consumer goods industry, from the 
            factory to end-user.
          </p>
        </div>
      </section>

      {/* First Carousel Section */}
      <section className="py-20 bg-white overflow-hidden">
        <ScrollCarousel 
          images={carouselImages1} 
          direction="right"
          className="py-8"
        />
      </section>

      {/* Second Carousel Section */}
      <section className="py-20 bg-background overflow-hidden">
        <ScrollCarousel 
          images={carouselImages2} 
          direction="left"
          className="py-8"
        />
      </section>

      {/* What We Offer Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-corporate-dark mb-6">What we offer</h2>
            <p className="text-lg text-corporate-medium max-w-4xl mx-auto leading-relaxed">
              We are value-added partners and can leverage our extensive networks to support our portfolio companies 
              as they grow. We serve as a nexus between our companies and enable our founders to learn from each 
              other, partner together and tap into our network of industry experts to accelerate any learning curves.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
            {/* Item 1 */}
            <div className="text-center">
              <div className="w-20 h-20 bg-corporate-dark rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-6">
                1
              </div>
              <h3 className="text-xl font-bold text-corporate-dark mb-4">
                We understand the highly specific needs of a consumer start-up
              </h3>
            </div>

            {/* Item 2 */}
            <div className="text-center">
              <div className="w-20 h-20 bg-corporate-dark rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-6">
                2
              </div>
              <h3 className="text-xl font-bold text-corporate-dark mb-4">
                We offer decades of consumer and retail experience
              </h3>
            </div>

            {/* Item 3 */}
            <div className="text-center">
              <div className="w-20 h-20 bg-corporate-dark rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-6">
                3
              </div>
              <h3 className="text-xl font-bold text-corporate-dark mb-4">
                We bring unrivalled expertise and networks in the consumer goods industry
              </h3>
            </div>

            {/* Item 4 */}
            <div className="text-center md:col-start-1 md:col-end-2 md:row-start-2">
              <div className="w-20 h-20 bg-corporate-dark rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-6">
                4
              </div>
              <h3 className="text-xl font-bold text-corporate-dark mb-4">
                We are stage agnostic covering Seed through to Series C/D
              </h3>
            </div>

            {/* Item 5 */}
            <div className="text-center md:col-start-2 md:col-end-3 md:row-start-2">
              <div className="w-20 h-20 bg-corporate-dark rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-6">
                5
              </div>
              <h3 className="text-xl font-bold text-corporate-dark mb-4">
                We offer flexible capital, investing from $500,000 to $15 million
              </h3>
            </div>
          </div>
        </div>
      </section>

      {/* Team and Portfolio Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Us Card */}
            <div className="bg-white p-12 border-4 border-corporate-dark">
              <h2 className="text-3xl md:text-4xl font-bold text-corporate-dark mb-6">Contact Us</h2>
              <p className="text-lg text-corporate-medium mb-8 leading-relaxed">
                Got tomorrow's big idea? We want to hear from you. Let's build something extraordinary together.
              </p>
              <div className="flex justify-end">
                <CircularButton 
                  text="GET IN TOUCH • GET IN TOUCH • " 
                  onClick={() => navigate('/contact')}
                  className="text-corporate-dark"
                />
              </div>
            </div>

            {/* Portfolio Card */}
            <div className="bg-white p-12 border-4 border-corporate-dark">
              <h2 className="text-3xl md:text-4xl font-bold text-corporate-dark mb-6">Our Portfolio</h2>
              <p className="text-lg text-corporate-medium mb-8 leading-relaxed">
                Discover our brand crafters, change leaders and commerce trail blazers.
              </p>
              <div className="flex justify-end">
                <CircularButton 
                  text="VIEW OUR PORTFOLIO • VIEW OUR PORTFOLIO • " 
                  onClick={() => navigate('/portfolio')}
                  className="text-corporate-dark"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;