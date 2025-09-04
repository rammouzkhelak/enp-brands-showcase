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
    "/lovable-uploads/6cd66727-48bb-40cf-a586-82b68fa5d1fe.png",
    "/lovable-uploads/9f976a2b-ac9a-4a4f-b977-9cd4ab090c6e.png",
    "/lovable-uploads/9a73e0e4-4d3c-4265-bb45-b431ae53f09b.png",
    "/lovable-uploads/fff7021e-a66f-4398-8b9e-6e638c4c72e3.png"
  ];

  const carouselImages2 = [
    "/lovable-uploads/a3eef069-8728-4faf-a91b-07add9b3134e.png",
    "/lovable-uploads/8ede48e7-2afc-4717-a209-6ad2831b996d.png",
    "/lovable-uploads/1d85af8f-4c2f-4226-8cdf-a0f2154e2174.png",
    "/lovable-uploads/d54656d5-b796-4a73-bce3-295fb5ed91a5.png"
  ];

  return (
    <div className="min-h-screen bg-background">
      <HamburgerMenu />
      
      {/* About Section */}
      <section className="pt-32 pb-4 bg-background">
        <div className="container mx-auto px-6 text-left md:text-center">
          <p className="text-sm uppercase tracking-wider text-corporate-medium mb-4">ABOUT</p>
          <h1 className="text-4xl md:text-6xl font-bold text-corporate-dark mb-4 max-w-5xl md:mx-auto leading-tight">
            Building trusted family brands is what we do
          </h1>
          <p className="text-lg text-corporate-medium max-w-4xl md:mx-auto leading-relaxed">
            ENP Brands manages internationally recognized family and children's product brands. We combine global innovation with local market knowledge to deliver quality solutions that families trust and love.
          </p>
        </div>
      </section>

      {/* First Carousel Section */}
      <section className="py-6 bg-white overflow-hidden">
        <ScrollCarousel 
          images={carouselImages1} 
          direction="right"
          className="py-6"
        />
      </section>

      {/* What We Look For Section */}
      <section className="py-4 bg-background">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-corporate-dark mb-4">What we focus on</h2>
          <p className="text-lg text-corporate-medium max-w-4xl mx-auto mb-8 leading-relaxed">
            We work with family and children's brands that improve development, safety, and everyday life.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {/* Beauty & Wellness Brands */}
            <div className="bg-white p-8 border-4 border-corporate-dark">
              <h3 className="text-xl font-bold text-corporate-dark mb-4">
                Learning & Development Products
              </h3>
              <p className="text-corporate-medium leading-relaxed">
                Educational toys and learning tools that help children grow through play and creative activities.
              </p>
            </div>

            {/* Commerce & Enabling Technologies */}
            <div className="bg-white p-8 border-4 border-corporate-dark">
              <h3 className="text-xl font-bold text-corporate-dark mb-4">
                Family Safety & Recreation
              </h3>
              <p className="text-corporate-medium leading-relaxed">
                Baby care products and outdoor recreation items that keep families safe while having fun together.
              </p>
            </div>

            {/* B2B/Enterprise Technologies */}
            <div className="bg-white p-8 border-4 border-corporate-dark">
              <h3 className="text-xl font-bold text-corporate-dark mb-4">
                Smart Solutions & Creative Tools
              </h3>
              <p className="text-corporate-medium leading-relaxed">
                Practical baby products and creative materials that make parenting easier while sparking children's imagination.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Second Carousel Section */}
      <section className="py-6 bg-white overflow-hidden">
        <ScrollCarousel 
          images={carouselImages2} 
          direction="left"
          className="py-6"
        />
      </section>

      {/* What We Offer Section */}
      <section className="py-6 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-corporate-dark mb-3">What we offer</h2>
            <p className="text-lg text-corporate-medium max-w-4xl mx-auto leading-relaxed">
              We support our partners with the expertise and resources needed to succeed in the family products market.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Item 1 */}
            <div className="text-center">
              <div className="w-20 h-20 bg-corporate-dark rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-6">
                1
              </div>
              <h3 className="text-xl font-bold text-corporate-dark mb-4">
                Strong understanding of family product markets and what customers want
              </h3>
            </div>

            {/* Item 2 */}
            <div className="text-center">
              <div className="w-20 h-20 bg-corporate-dark rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-6">
                2
              </div>
              <h3 className="text-xl font-bold text-corporate-dark mb-4">
                Complete brand support and marketing assistance across all channels
              </h3>
            </div>

            {/* Item 3 */}
            <div className="text-center">
              <div className="w-20 h-20 bg-corporate-dark rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-6">
                3
              </div>
              <h3 className="text-xl font-bold text-corporate-dark mb-4">
                Experience with international brands and local market needs
              </h3>
            </div>

          </div>
          
          {/* Centered bottom row with items 4 and 5 */}
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mt-8">
            {/* Item 4 */}
            <div className="text-center">
              <div className="w-20 h-20 bg-corporate-dark rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-6">
                4
              </div>
              <h3 className="text-xl font-bold text-corporate-dark mb-4">
                Full distribution support from import to retail assistance
              </h3>
            </div>

            {/* Item 5 */}
            <div className="text-center">
              <div className="w-20 h-20 bg-corporate-dark rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-6">
                5
              </div>
              <h3 className="text-xl font-bold text-corporate-dark mb-4">
                Quality control and customer service across all our product lines
              </h3>
            </div>
          </div>
        </div>
      </section>

      {/* Team and Portfolio Section */}
      <section className="py-6 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {/* Contact Us Card */}
            <div className="relative bg-white border-4 border-corporate-dark h-64">
              <div className="p-8 h-full flex flex-col">
                <h2 className="text-2xl md:text-3xl font-bold text-corporate-dark mb-4">Contact Us</h2>
                <p className="text-base text-corporate-medium leading-relaxed flex-1">
                  Interested in partnering with established family brands? Let's talk about growing your business together.
                </p>
              </div>
              <div className="absolute -bottom-6 -right-6">
                <CircularButton 
                  text="GET IN TOUCH • GET IN TOUCH • " 
                  onClick={() => navigate('/contact')}
                  className="text-corporate-dark scale-75"
                />
              </div>
            </div>

            {/* Portfolio Card */}
            <div className="relative bg-white border-4 border-corporate-dark h-64">
              <div className="p-8 h-full flex flex-col">
                <h2 className="text-2xl md:text-3xl font-bold text-corporate-dark mb-4">Our Portfolio</h2>
                <p className="text-base text-corporate-medium leading-relaxed flex-1">
                  See our collection of trusted international brands in family and children's products.
                </p>
              </div>
              <div className="absolute -bottom-6 -right-6">
                <CircularButton 
                  text="VIEW OUR PORTFOLIO • VIEW OUR PORTFOLIO • " 
                  onClick={() => navigate('/portfolio')}
                  className="text-corporate-dark scale-75"
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